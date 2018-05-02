/******************************************************************************
 * Shoutbox live features.
 ******************************************************************************/

var getLink, postLink, sendLink, getTimeout, postTimeout, sendTimeout, updateCycle, idleCycle, idleInterval;
var getInProgress  = false;
var postInProgress = false;
var sendInProgress = false;
var updatingPost   = false;
var postWait       = false;
var toggleOff      = '-';
var toggleOn       = '+';
var shoutboxUrl    = 'http://www5.shoutmix.com/?kanopifeui';
var adminUrl       = '';
var updateInterval = 60000;
var idleTime       = 0;
var idleInactive   = 10;
var idleInterval   = 180000;
var caretPos       = 0;
var smileyList     = [
	[':)', '/smileys/smile.gif'],
	[':(', '/smileys/sad.gif'],
	[';)', '/smileys/wink.gif'],
	[':D', '/smileys/grin.gif'],
	[':P', '/smileys/tongue.gif'],
	['B-)', '/smileys/cool.gif'],
	[':">', '/smileys/blush.gif'],
	[':((', '/smileys/cry.gif'],
	['8-)', '/smileys/rolleyes.gif'],
	['O_o', '/smileys/surprised.gif'],
	['/:)', '/smileys/suspicious.gif'],
	[':eek:', '/smileys/eek.gif'],
	['>:)', '/smileys/twisted.gif'],
	[':thumbsup:', '/smileys/thumbsup.gif'],
	[':argh:', '/smileys/argh.gif'],
	[':banghead:', '/smileys/banghead.gif'],
	[':drool:', '/smileys/drool.gif'],
	[':wise:', '/smileys/wise.gif'],
	[':shrug:', '/smileys/shrug.gif'],
	[':love:', '/smileys/love.gif'],
	[':buttrock:', '/smileys/buttrock.gif'],
	['^O^', '/smileys/notworthy.gif']
];

function prepare()
{
	// Common enhancements.
	replaceLinks();

	// Everything after this point is for shout form.
	var form = element('form');
	if (!form) return;

	// Below will be enhancement for form posting.
	if (element('options'))
	{
		// Set style.
		var status = element('shoutbox');
		status.className += (status.className == '') ? 'default' : ' default';

		addEvent(element('options'), 'click', toggleEnhanced, false);
	}

	// Everything after this point is for shout contents.
	if (!element('messages') || element('messages').className != 'first') return;

	// Setup connections.
	connectRequests();
	if (!getLink || !postLink || !sendLink) return;

	// Connections made, go live!
	inProgress(false);
	idleStatus(false);
	goActive();

	addEvent(window, 'focus', goActive, false);
	addEvent(document, 'focus', goActive, false);
	addEvent(document, 'keyup', goActive, false);
	addEvent(document, 'mouseup', goActive, false);
	addEvent(document, 'mouseover', goActive, false);
	addEvent(document, 'mouseout', goActive, false);
	addEvent(form, 'submit', postRequest, false);

	updateCycle = setTimeout(getUpdates, updateInterval);
}

/******************************************************************************
 * Common shoutbox actions.
 ******************************************************************************/

function maintenance(set)
{
	if (set)
	{
		if (element('options')) element('options').disabled = true;
		element('shout').disabled   = true;
		element('message').disabled = true;
		element('message').value    = 'Read-only mode';
	}
	else
	{
		if (element('options')) element('options').disabled = false;
		element('shout').disabled   = false;
		element('message').disabled = false;
		element('message').value    = '';
	}
}

function goActive()
{
	if (typeof idleTime == 'undefined') return;

	// Refresh immediately if shoutbox has went inactive.
	if (idleTime >= idleInactive)
	{
		inProgress(true);
		getUpdates(true);
		clearTimeout(updateCycle);
		updateCycle = setTimeout(getUpdates, updateInterval);
	}

	// Reset idle count.
	clearInterval(idleCycle);
	setTimeout(function() { idleStatus(false); }, 500);
	idleTime  = 0;
	idleCycle = setInterval(function() { idleTime++; }, 60000);
}

function inProgress(set)
{
	var status = element('shoutbox');

	switch (set)
	{
		case true:
			if (!status.className.match(/\bload active\b/i))
			{
				status.className = status.className.replace(/load(\sactive)?/i, 'load active');
			}
			break;
		case false:
			if (!status.className.match(/\bload\b/i))
			{
				status.className += (status.className == '') ? 'load' : ' load';
			}
			if (status.className.match(/\bload active\b/i))
			{
				status.className = status.className.replace(/load active/i, 'load');
			}
			break;
		default:
			return (status.className.match(/\bactive\b/i) ? true : false);
	}
}

function idleStatus(set)
{
	var status = element('shoutbox');

	switch (set)
	{
		case false:
			if (status.className.match(/\bidle\b/i))
			{
				status.className = status.className.replace(/\s?idle/i, '');
			}
			break;
		case true:
			if (!status.className.match(/\bidle\b/i))
			{
				status.className += (status.className == '') ? 'idle' : ' idle';
			}
			break;
		default:
			return (status.className.match(/\bidle\b/i) ? true : false);
	}
}

function resetForm()
{
	var name    = element('name');
	var message = element('message');
	var options = element('options');

	if (name.value == '')
	{
		name.value = 'Guest';
	}

	message.value = '';
	message.focus();

	if (!options) return;
	if (options.value == toggleOff) toggleEnhanced();
}

function focusForm()
{
	if (element('message') && !element('message').disabled) element('message').focus();
}

function lockForm(opt)
{
	element('message').disabled = opt;
	element('shout').focus();
}

function toggleEnhanced(e)
{
	createPreview();
	createSmileys();

	var status  = element('shoutbox');
	var options = element('options');

	if (options.value != toggleOff)
	{
		options.value    = toggleOff;
		status.className = status.className.replace(/\bdefault\b/i, 'extra');
	}
	else
	{
		options.value    = toggleOn;
		status.className = status.className.replace(/\bextra\b/i, 'default');
	}

	focusForm();
	cancelEvent(e);
}

function updatePreview()
{
	var preview = element('preview');
	var message = element('message');
	message.focus();

	if (message.selectionStart || message.selectionEnd)
	{
		caretPos = (message.selectionStart <= message.selectionEnd)
			? message.selectionStart
			: message.selectionEnd;
	}
	else if (document.selection)
	{
		var sel = document.selection.createRange();
		sel.moveStart('character', -message.value.length);
		caretPos = sel.text.length;
	}
	else
	{
		caretPos = 0;
	}

	preview.firstChild.nodeValue = message.value.substring(0, caretPos)
		+ '|'
		+ message.value.substring(caretPos, message.value.length);
}

function popShoutbox(e)
{
	var popWidth  = 0;
	var popHeight = 0;

	if (typeof(window.innerWidth) == 'number')
	{
		popWidth  = window.innerWidth;
		popHeight = window.innerHeight;
	}
	else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight))
	{
		popWidth  = document.documentElement.clientWidth;
		popHeight = document.documentElement.clientHeight;
	}
	else if (document.body && (document.body.clientWidth || document.body.clientHeight))
	{
		popWidth  = document.body.clientWidth;
		popHeight = document.body.clientHeight;
	}

	window.open(shoutboxUrl + (adminUrl ? '=' + adminUrl : ''), 'shoutbox', 'resizable=yes,status=yes,scrollbars=yes,width=' + popWidth + ',height=' + popHeight);
	cancelEvent(e);
}

function launchLink(e)
{
	var target = eventTarget(e);
	if (!target) return;
	window.open(target.href);
	cancelEvent(e);
}

function openLink(e)
{
	var target = eventTarget(e);
	if (!target) return;
	window.top.location = target.href;
	cancelEvent(e);
}

function clearData(e)
{
	if (confirm('Clear all personal details like name/website/mail/login from shoutbox?'))
	{
		return;
	}
	cancelEvent(e);
}

function removeShout(e)
{
	if (confirm('Confirm delete?'))
	{
		if (element('messages').className != 'first') return;
		sendRequest(e);
	}
	cancelEvent(e);
}

function removeItem(post)
{
	if (typeof post == 'string')
	{
		var post = element(post);
	}


	var item = new elementFade(post);
	item.fadeSize('out', 500);

	setTimeout(function() { if (post && post.parentNode) post.parentNode.removeChild(post); }, 1500);}

function insertSmiley(e)
{
	var target = eventTarget(e);
	if (!target) return;

	var message   = element('message');
	message.value = message.value.substring(0, caretPos)
		+ target.getAttribute('alt')
		+ message.value.substring(caretPos, message.value.length);
	message.focus();
}

/******************************************************************************
 * One-time-run enhancements.
 ******************************************************************************/

function replaceLinks()
{
	var links = document.getElementsByTagName('a');

	for (var i = 0; i < links.length; i++)
	{
		if (links[i].className.match(/\bdelete\b/i))
		{
			addEvent(links[i], 'click', removeShout, false);
		}
		else if (links[i].parentNode.tagName.match(/\b(cite|q)\b/i)
			&& !links[i].className.match(/\boption\b/i))
		{
			addEvent(links[i], 'click', launchLink, false);
		}
		else if (links[i].className.match(/\bexternal\b/i))
		{
			addEvent(links[i], 'click', openLink, false);
		}
	}
}

function createPreview()
{
	var contents = element('contents');
	var message  = element('message');

	if (!message || element('smileys') || element('preview')) return;

	// Create preview pane.
	var preview = document.createElement('q');
	preview.id  = 'preview';

	preview.appendChild(document.createTextNode('...'));
	contents.insertBefore(preview, contents.firstChild);

	// Message typing triggers live preview.
	addEvent(message, 'keydown', updatePreview, false);
	addEvent(message, 'keyup', updatePreview, false);
	addEvent(message, 'mouseup', updatePreview, false);
	addEvent(message, 'mousedown', updatePreview, false);
	addEvent(message, 'change', updatePreview, false);
	addEvent(message, 'focus', updatePreview, false);

	// Clicking on preview area focuses on message input.
	addEvent(preview, 'click', focusForm, false);
}

function createSmileys()
{
	var contents = element('contents');
	var options  = element('options');
	var paging   = element('paging');

	if (!options || options.disabled || element('smileys')) return;

	// Create smiley list.
	var smileys = document.createElement('ul');
	smileys.id  = 'smileys';

	// Add entries to smiley list.
	for (var i = 0; i < smileyList.length; i++)
	{
		var entry = document.createElement('li');
		var img   = document.createElement('img');
		var code  = document.createElement('code');
		img.setAttribute('src', smileyList[i][1]);
		img.setAttribute('alt', smileyList[i][0]);
		code.appendChild(document.createTextNode(smileyList[i][0]));
		entry.appendChild(img);
		entry.appendChild(code);
		smileys.appendChild(entry);
		addEvent(img, 'click', insertSmiley, false);
	}

	var navi = document.createElement('dl');
	var dt   = document.createElement('dt');
	var dd   = document.createElement('dd');
	var dd2  = document.createElement('dd');
	var link = document.createElement('a');
	var pop  = document.createElement('a');
	link.setAttribute('href', shoutboxUrl + (adminUrl ? '=' + adminUrl : ''));
	link.appendChild(document.createTextNode('Back to message view'));
	pop.setAttribute('href', shoutboxUrl + (adminUrl ? '=' + adminUrl : ''));
	pop.appendChild(document.createTextNode('Pop-up shoutbox'));
	dt.appendChild(document.createTextNode('Navigation'));
	dd.appendChild(link);
	dd2.appendChild(pop);
	navi.appendChild(dt);
	navi.appendChild(dd);
	navi.appendChild(dd2);
	navi.id = 'navigation';
	contents.insertBefore(smileys, paging);
	contents.insertBefore(navi, paging);
	addEvent(link, 'click', toggleEnhanced, false);
	addEvent(pop, 'click', popShoutbox, false);

	var dd3   = document.createElement('dd');
	var clear = document.createElement('a');
	clear.id = 'clear';
	clear.setAttribute('href', shoutboxUrl + '&clear=data');
	clear.appendChild(document.createTextNode('Clear personal data'));
	dd3.appendChild(clear);
	navi.appendChild(dd3);
	addEvent(clear, 'click', clearData, false);
}

/******************************************************************************
 * XMLHttpRequest stuff.
 ******************************************************************************/

function connectRequests()
{
	// Native support.
	if (window.XMLHttpRequest)
	{
		getLink  = new XMLHttpRequest();
		postLink = new XMLHttpRequest();
		sendLink = new XMLHttpRequest();
	}
	// IE/Windows ActiveX version
	else if (window.ActiveXObject)
	{
		try
		{
			getLink  = new ActiveXObject('Msxml2.XMLHTTP');
			postLink = new ActiveXObject('Msxml2.XMLHTTP');
			sendLink = new ActiveXObject('Msxml2.XMLHTTP');
		}
		catch (e)
		{
			try
			{
				getLink  = new ActiveXObject('Microsoft.XMLHTTP');
				postLink = new ActiveXObject('Microsoft.XMLHTTP');
				sendLink = new ActiveXObject('Microsoft.XMLHTTP');
			}
			catch (e)
			{
				getLink  = false;
				postLink = false;
				sendLink = false;
			}
		}
	}
}

function linkInProgress(link)
{
	switch (link.readyState)
	{
		case 1:
		case 2:
		case 3:
			return true;
			break;
		default:
			return false;
	}
}

function requestTimeout(req)
{
	var update;

	switch (req)
	{
		case 'get':
			if (updatingPost)
			{
				clearTimeout(getTimeout);
				getTimeout   = setTimeout('requestTimeout("get")', updateInterval);
				updatingPost = false;
				update       = true;
			}
			else if (getInProgress || linkInProgress(getLink))
			{
				getLink.abort();
				getInProgress = false;
				update        = true;
			}
			break;
		case 'post':
			if (postInProgress || linkInProgress(postLink))
			{
				lockForm(false);
				postLink.abort();
				postInProgress = false;
				postWait       = false;

				if (confirm('Live posting timed out! Do you wish to post via form submission instead?'))
				{
					element('form').submit();
				}

				update = true;
			}
			break;
		case 'send':
			if (sendInProgress || linkInProgress(sendLink))
			{
				alert('Request timed out! Please try again later.');
				sendLink.abort();
				sendInProgress = false;
				update         = true;
			}
			break;
		default:
			if (linkInProgress(getLink)) getLink.abort();
			if (linkInProgress(postLink)) postLink.abort();
			if (linkInProgress(sendLink)) sendLink.abort();

			getInProgress  = false;
			postInProgress = false;
			sendInProgress = false;
			update         = true;
	}

	if (!update) return;

	clearTimeout(updateCycle);
	setTimeout('inProgress(false)', 500);
	updateCycle = setTimeout(getUpdates, updateInterval);
}

function sendRequest(e)
{
	if (!sendLink) return;

	if (sendInProgress)
	{
		alert('Previous request still in progress. Please wait...');
		cancelEvent(e);
		return;
	}

	var target = eventTarget(e);
	if (!target) return;

	// Send process starts.
	inProgress(true);
	clearTimeout(sendTimeout);

	// Lock process.
	sendInProgress = true;
	sendTimeout    = setTimeout('requestTimeout("send")', updateInterval * 3);

	// Get path and query string.
	sendLink.open('GET', target.href + '&live=yes', true);
	sendLink.onreadystatechange = function()
	{
		try
		{
			if (sendLink.readyState != 4) return;
			if (sendLink.status != 200) return;
		}
		catch (e)
		{
			return;
		}

		try
		{
			var sent = (sendLink.responseText == 'redirect') ? true : false;
		}
		catch (e)
		{
			var sent = false;
		}

		sendInProgress = false;
		if (!sent) return;
		getUpdates();
	}
	sendLink.send(null);

	cancelEvent(e);
}

function postRequest(e)
{
	if (postInProgress || postWait)
	{
		alert('Current post request still in progress. Please wait...');
		cancelEvent(e);
		return;
	}

	var code    = element('code').value;
	var name    = element('name').value;
	var url     = element('url') ? element('url').value : '';
	var message = element('message').value;

	if (message == '')
	{
		focusForm();
		cancelEvent(e);
		return;
	}

	if (message.length < 2)
	{
		alert('Message is too short. Please type at least 2 characters for the message field.');
		cancelEvent(e);
		return;
	}

	// Post process starts.
	inProgress(true);
	clearTimeout(postTimeout);

	// Lock post request.
	postInProgress = true;
	postWait       = true;
	postTimeout    = setTimeout('requestTimeout("post")', updateInterval * 3);
	lockForm(true);

	postLink.open('POST', shoutboxUrl + '=' + (adminUrl ? adminUrl + '_' : '') + 'process', true);
	postLink.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	postLink.onreadystatechange = function()
	{
		try
		{
			if (postLink.readyState != 4) return;
			if (postLink.status != 200) return;
		}
		catch (e)
		{
			return;
		}

		try
		{
			var posted = (postLink.responseText == 'redirect') ? true : false;
		}
		catch (e)
		{
			var posted = false;
		}

		// Post request complete.
		postInProgress = false;
		setTimeout('postWait = false', 500);
		lockForm(false);

		// Let the form handle itself if post returned error.
		if (!posted)
		{
			element('form').submit();
		}
		else
		{
			resetForm();
			getUpdates();
		}
	}
	postLink.send('live=yes&code=' + encodeURIComponent(code)
		+ '&name=' + encodeURIComponent(name)
		+ '&url=' + encodeURIComponent(url)
		+ '&message=' + encodeURIComponent(message));

	cancelEvent(e);
}

// Get shoutbox changes.
function getUpdates(force)
{
	if (!getLink || linkInProgress(getLink) || getInProgress || postInProgress || sendInProgress || updatingPost) return;

	if (!force && (idleTime >= idleInactive))
	{
		idleStatus(true);
		return;
	}

	// Get first and last message IDs.
	var list  = element('messages');
	var first = list.firstChild;
	var last  = list.lastChild;

	while (first)
	{
		if (first.nodeType == 3)
		{
			first = first.nextSibling;
		}
		else
		{
			break;
		}
	}

	while (last)
	{
		if (last.nodeType == 3)
		{
			last = last.previousSibling;
		}
		else
		{
			break;
		}
	}

	// Start get.
	clearTimeout(getTimeout);
	getInProgress = true;
	getTimeout    = setTimeout('requestTimeout("get")', updateInterval);

	getLink.open('GET', shoutboxUrl
		+ '=' + (adminUrl ? adminUrl + '_' : '') + 'update&fid=' + first.id
		+ '&lid=' + last.id
		+ '&time=' + new Date().getTime(), true);
	getLink.onreadystatechange = function()
	{
		try
		{
			if (getLink.readyState != 4) return;
			if (getLink.status != 200) return;
		}
		catch (e)
		{
			return;
		}

		setTimeout('getInProgress = false', 500);
		updatePosts();
	}
	getLink.send(null);
}

// Load XML data and update shoutbox contents.
function updatePosts()
{
	if (!getLink || linkInProgress(getLink) || updatingPost) return;

	// Start process.
	updatingPost = true;

	// Get shoutbox document.
	try
	{
		var shout = getLink.responseXML.getElementsByTagName('shoutbox')[0];
	}
	catch (e)
	{
		updatingPost = false;
		requestTimeout('get');
		return;
	}

	// Check if update received.
	if (!shout || !shout.getAttribute('time'))
	{
		updatingPost = false;
		requestTimeout('get');
		return;
	}

	// Update header status.
	var counter   = shout.getAttribute('time');
	var header    = document.getElementsByTagName('h2')[0];
	var newHeader = document.createElement('h2');

	if (!header.firstChild.nodeValue.match(/maintenance/i) && counter.match(/read/))
	{
		// Go into maintenance.
		maintenance(true);
	}
	else if (header.firstChild.nodeValue.match(/maintenance/i) && !counter.match(/read/))
	{
		// Go back to normal.
		maintenance(false);
	}

	if (counter.match(/read/))
	{
		var readOnly  = document.createElement('a');
		readOnly.href = shoutboxUrl + '=read_only';
		readOnly.appendChild(document.createTextNode('read-only mode'));
		newHeader.appendChild(document.createTextNode('Maintenance: '));
		newHeader.appendChild(readOnly);
	}
	else
	{
		newHeader.appendChild(document.createTextNode(counter));
	}

	header.parentNode.replaceChild(newHeader, header);

	// Update paging links.
	changePages(shout.getAttribute('pages'));

	// Set list variables.
	var messages = element('messages');
	var newList  = shout.getElementsByTagName('post');
	var postList = [];

	var first = messages.firstChild;
	var last  = messages.lastChild;

	while (first)
	{
		if (first.nodeType == 3)
		{
			first = first.nextSibling;
		}
		else
		{
			break;
		}
	}

	while (last)
	{
		if (last.nodeType == 3)
		{
			last = last.previousSibling;
		}
		else
		{
			break;
		}
	}

	var fid = parseInt(first.getAttribute('id').replace('p', ''));
	var lid = parseInt(last.getAttribute('id').replace('p', ''));

	// List new messages.
	for (var i = 0; i < newList.length; i++)
	{
		if ((newList[i].getAttribute('id') > fid) || (newList[i].getAttribute('id') < lid))
		{
			postList.unshift(i);
		}
	}

	// Delete system note for empty post.
	if (element('p0') && (postList.length > 0))
	{
		messages.removeChild(messages.getElementsByTagName('li')[0]);
	}

	// Update existing posts.
	var curPost = messages.lastChild;

	while (curPost)
	{
		var tempPost = curPost.previousSibling;

		// Remove any empty text nodes.
		if (curPost.nodeType != 1)
		{
			curPost.parentNode.removeChild(curPost);
			curPost = tempPost;
			continue;
		}

		// Get info of post.
		var id     = curPost.getAttribute('id').replace('p', '');
		var status = false;
		var option = false;

		// Find in new list.
		for (var i = 0; i < newList.length; i++)
		{
			if (id == newList[i].getAttribute('id'))
			{
				option = newList[i].getAttribute('option');
				status = true;
				break;
			}
		}

		// If not in list, delete.
		if (!status)
		{
			removeItem('p' + id);
		}

		curPost = tempPost;
	}

	for (var i = 0; i < postList.length; i++)
	{
		var curPos  = postList[i];
		var nextPos = curPos + 1;
		var post    = newList[curPos];

		// Get details.
		var shoutId     = post.getAttribute('id');
		var shoutOption = post.getAttribute('option');
		var shoutUser   = post.getElementsByTagName('user')[0];
		var shoutTime   = post.getElementsByTagName('message')[0].getAttribute('time');
		var shoutItems  = post.getElementsByTagName('item');
		var shoutName   = shoutUser.firstChild.nodeValue;
		var shoutUrl    = shoutUser.getAttribute('href');
		var shoutType   = shoutUser.getAttribute('type');
		var shoutData   = shoutUser.getAttribute('data');

		// Add post.
		var li   = document.createElement('li');
		var cite = document.createElement('cite');
		var name = document.createTextNode(shoutName);
		var q    = document.createElement('q');
		var dl   = document.createElement('dl');
		var dt   = document.createElement('dt');
		var dd1  = document.createElement('dd');
		var dd2  = document.createElement('dd');
		var c    = ['ip'];

		if (shoutType && shoutType.match(/admin/)) c.push('admin');

		if (shoutUrl)
		{
			var a = document.createElement('a');
			a.setAttribute('href', shoutUrl);
			a.appendChild(name);
			cite.appendChild(a);
			addEvent(a, 'click', launchLink, false);
		}
		else
		{
			cite.appendChild(name);
		}

		// Form message content.
		for (var j = 0; j < shoutItems.length; j++)
		{
			var itemType = shoutItems[j].getAttribute('type');

			if (itemType == 'spacer')
			{
				q.appendChild(document.createTextNode(' '));
				continue;
			}

			var itemValue = shoutItems[j].firstChild.nodeValue;

			if (itemType == 'url')
			{
				var a = document.createElement('a');
				a.setAttribute('href', itemValue);
				a.setAttribute('title', itemValue);
				a.appendChild(document.createTextNode('link'));
				q.appendChild(a);
				addEvent(a, 'click', launchLink, false);
			}
			else if (itemType == 'mail')
			{
				var a = document.createElement('a');
				a.setAttribute('href', 'mailto:' + itemValue);
				a.setAttribute('title', itemValue);
				a.appendChild(document.createTextNode('mail'));
				q.appendChild(a);
			}
			else if (itemType == 'smiley')
			{
				var img = document.createElement('img');
				img.setAttribute('src', shoutItems[j].getAttribute('href'));
				img.setAttribute('title', itemValue);
				img.setAttribute('alt', itemValue);
				q.appendChild(img);
			}
			else
			{
				q.appendChild(document.createTextNode(itemValue));
			}
		}

		li.appendChild(cite);
		li.appendChild(document.createTextNode(' '));
		li.appendChild(q);
		li.appendChild(document.createTextNode(' '));

		if (shoutOption)
		{
			var optionItems = shoutOption.split(' ');
			var div         = document.createElement('div');

			for (var j = 0; j < optionItems.length; j++)
			{
				if (optionItems[j] == '') continue;

				var a       = document.createElement('a');
				a.className = 'option ' + optionItems[j];
				a.setAttribute('href', shoutboxUrl + '=' + (adminUrl ? adminUrl + '_' : '') + 'process&' + optionItems[j] + '=' + shoutId);
				a.appendChild(document.createTextNode(optionItems[j]));
				div.appendChild(a);
				div.appendChild(document.createTextNode(' '));

				if (optionItems[j] == 'delete')
				{
					addEvent(a, 'click', removeShout, false);
				}
			}

			li.appendChild(div);
		}

		li.id         = 'p' + shoutId;
		li.className  = c.join(' ');
		dd1.className = 'date';
		dd2.className = 'status';

		dt.appendChild(document.createTextNode('Details'));
		dd1.appendChild(document.createTextNode(shoutTime));
		dd2.appendChild(document.createTextNode('#'));
		dd2.setAttribute('title', shoutData);
		dl.appendChild(dt);
		dl.appendChild(document.createTextNode(' '));
		dl.appendChild(dd1);
		dl.appendChild(document.createTextNode(' '));
		dl.appendChild(dd2);
		li.appendChild(dl);

		// Add to list.
		if ((nextPos < newList.length) && newList[nextPos].getAttribute('id'))
		{
			messages.insertBefore(li, element('p' + newList[nextPos].getAttribute('id')));
		}
		else
		{
			messages.appendChild(li);
		}


		// Get current first post.
		var firstItem = messages.getElementsByTagName('li')[0];

		// New post add colour fade, else fade in.
		if (firstItem && (parseInt(shoutId) != 0) && (parseInt(shoutId) >= parseInt(firstItem.getAttribute('id').replace('p', ''))))
		{
			var fadeItem = new elementFade(li);
			fadeItem.fadeColor('from', '.highlight', 1000);
		}	}

	// Update complete.
	updatingPost = false;
	clearTimeout(getTimeout);
	clearTimeout(updateCycle);
	idleStatus(false);

	if (idleTime > 0)
	{
		updateCycle = setTimeout(getUpdates, idleInterval);
	}
	else
	{
		updateCycle = setTimeout(getUpdates, updateInterval);
	}

	if (!postInProgress && !sendInProgress && inProgress())
	{
		setTimeout('inProgress(false)', 500);
	}
}

// Set paging links.
function changePages(pages)
{
	var paging = element('paging');
	var part   = paging.getElementsByTagName('dd');
	var links  = part[0].getElementsByTagName('a');
	var last   = links.length - 1;
	var total  = (links.length > 0) ? links[last].firstChild.nodeValue : 1;

	// Add first page.
	var list = document.createElement('dd');
	var n    = document.createElement('strong');
	n.appendChild(document.createTextNode('1'));
	list.appendChild(n);

	// Create proper navi.
	if (pages > 1)
	{
		var next = document.createElement('a');
		next.setAttribute('href', shoutboxUrl + (adminUrl ? '=' + adminUrl : '') + '&view=2');
		next.appendChild(document.createTextNode('Next'));
		list.appendChild(document.createTextNode(' '));
		list.appendChild(document.createTextNode('Previous'));
		list.appendChild(document.createTextNode(' '));
		list.appendChild(next);
	}
	else
	{
		list.appendChild(document.createTextNode(' '));
		list.appendChild(document.createTextNode('Previous Next'));
	}

	// Update.
	paging.replaceChild(list, part[0]);
}


/******************************************************************************
 * Opacity fade from style color to default color or size fade.
 ******************************************************************************/

function elementFade(obj)
{
	if (typeof obj == 'string')
	{
		obj = element(obj);
	}

	this.target = obj;

	// Get initial size.
	var s = [
		parseInt(getStyle(obj, 'paddingTop')),
		parseInt(getStyle(obj, 'paddingBottom')),
		parseInt(getStyle(obj, 'marginTop')),
		parseInt(getStyle(obj, 'marginBottom'))
	];

	this.size = {
		height        : obj.offsetHeight,
		paddingBefore : isNaN(s[0]) ? 0 : s[0],
		paddingAfter  : isNaN(s[1]) ? 0 : s[1],
		marginBefore  : isNaN(s[2]) ? 0 : s[2],
		marginAfter   : isNaN(s[3]) ? 0 : s[3]
	}

	// Initial background color.
	while (obj)
	{
		var c = getColor(getStyle(obj, 'backgroundColor'));
		if (c || obj.tagName.match(/html/i)) break;
		obj = obj.parentNode;
	}

	if (!c)
	{
		c = getColor(document.bgColor);
	}

	this.color = {
		r : parseInt(c.substr(1,2), 16),
		g : parseInt(c.substr(3,2), 16),
		b : parseInt(c.substr(5,2), 16)
	}

	// Calculation for tween values.
	this.value = function(pos, from, to, invert)
	{
		if (from == to) return from;
		var value = this.transition(pos) * (to - from) + from;
		return Math.round(invert ? to + from - value : value);
	}

	// Transitions for tweening.
	this.transition = function(pos)
	{
		return (0.5 - Math.cos(pos * Math.PI) / 2);
	}
}

elementFade.prototype.fadeSize = function(method, duration, fps)
{
	if (!this.size.height) return;
	clearTimeout(this.sizeTimer);

	var duration = duration ? duration : 500;
	var fps      = fps ? fps : 60;

	this.sizeFade = {
		invert : (method != 'in') ? true : false,
		steps  : (fps * duration < 1000) ? 1 : Math.floor(fps * duration / 1000),
		delay  : (fps > 100) ? 10 : Math.floor(1000 / fps)
	}

	this.target.style.overflow = 'hidden';
	this.target.style.display  = 'block';
	this.setSize(0);
}

elementFade.prototype.setSize = function(step)
{
	var self = this;
	var size = this.size;
	var pos  = step / this.sizeFade.steps;
	var set  = this.target.style;

	var height = this.value(pos, 0, this.size.height - this.size.paddingBefore - this.size.paddingAfter, this.sizeFade.invert);

	if (height > 0)
	{
		set.display = 'block';
		set.height  = height + 'px';
	}
	else
	{
		set.display = 'none';
	}

	set.paddingTop    = this.value(pos, 0, this.size.paddingBefore, this.sizeFade.invert) + 'px';
	set.paddingBottom = this.value(pos, 0, this.size.paddingAfter, this.sizeFade.invert) + 'px';
	set.marginTop     = this.value(pos, 0, this.size.marginBefore, this.sizeFade.invert) + 'px';
	set.marginBottom  = this.value(pos, 0, this.size.marginAfter, this.sizeFade.invert) + 'px';

	if (step < this.sizeFade.steps)
	{
		this.sizeTimer = setTimeout(function() { self.setSize(step + 1); }, this.sizeFade.delay);
	}
	else if (!this.sizeFade.invert)
	{
		set.height   = 'auto';
		set.overflow = 'visible';
	}
}

elementFade.prototype.fadeColor = function(method, style, duration, fps)
{
	var obj   = this.target;
	var color = getColor(getSelectorStyle(style).backgroundColor);

	if (!color) return;
	clearTimeout(this.colorTimer);

	var duration = duration ? duration : 500;
	var fps      = fps ? fps : 60;

	this.colorFade = {
		r      : parseInt(color.substr(1,2), 16),
		g      : parseInt(color.substr(3,2), 16),
		b      : parseInt(color.substr(5,2), 16),
		invert : (method != 'to') ? true : false,
		steps  : (fps * duration < 1000) ? 1 : Math.floor(fps * duration / 1000),
		delay  : (fps > 100) ? 10 : Math.floor(1000 / fps)
	}

	this.setColor(0);
}

elementFade.prototype.setColor = function(step)
{
	var self = this;
	var pos  = step / this.colorFade.steps;

	if (step < this.colorFade.steps)
	{
		this.target.style.backgroundColor = getColor('rgb('
			+ this.value(pos, this.color.r, this.colorFade.r, this.colorFade.invert) + ', '
			+ this.value(pos, this.color.g, this.colorFade.g, this.colorFade.invert) + ', '
			+ this.value(pos, this.color.b, this.colorFade.b, this.colorFade.invert) + ')');

		this.colorTimer = setTimeout(function() { self.setColor(step + 1); }, this.colorFade.delay);
	}
	else
	{
		this.target.style.backgroundColor = '';
	}
}


/******************************************************************************
 * Common global functions.
 ******************************************************************************/

// Short for getElementById
function element(id)
{
	return document.getElementById(id);
}

// Get CSS style.
function getStyle(obj, prop)
{
	if (typeof obj == 'string')
	{
		obj = document.getElementById(obj);
	}

	if (obj.style[prop])
	{
		return obj.style[prop];
	}
	else if (obj.currentStyle)
	{
		return obj.currentStyle[prop];
	}
	else if (document.defaultView && document.defaultView.getComputedStyle)
	{
		prop = prop.replace(/([A-Z])/g, '-$1');
		prop = prop.toLowerCase();
		return document.defaultView.getComputedStyle(obj, null).getPropertyValue(prop);
	}

	return null;
}

// Get style from CSS stylesheet.
function getSelectorStyle(selector)
{
	if (!document.styleSheets) return false;

	for (i = 0; i < document.styleSheets.length; i++)
	{
		if (document.styleSheets[i].cssRules)
		{
			var rules = document.styleSheets[i].cssRules;
		}
		else if (document.styleSheets[i].rules)
		{
			var rules = document.styleSheets[i].rules;
		}
		else
		{
			return false;
		}

		for (j = 0; j < rules.length; j++)
		{
			if (rules[j].selectorText == selector)
			{
				return rules[j].style;
			}
		}
	}

	return false;
}

// Returns proper colour value.
function getColor(color)
{
	if (!color) return;

	var hex = color.match(/^#[0-9A-F]{6}$/i);
	var rgb = color.match(/rgb\s*\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/i);

	if (hex) return color;
	if (!rgb) return false;

	var r = parseInt(rgb[1]).toString(16);
	var g = parseInt(rgb[2]).toString(16);
	var b = parseInt(rgb[3]).toString(16);

	return ('#' + ((r.length == 1) ? 0 : '') + r
		+ ((g.length == 1) ? 0 : '') + g
		+ ((b.length == 1) ? 0 : '') + b);
}

// Cross-browser event handling.
function addEvent(element, eventType, lamdaFunction, useCapture)
{
	if (element.addEventListener)
	{
		element.addEventListener(eventType, lamdaFunction, useCapture);
	}
	else if (element.attachEvent)
	{
		element.attachEvent('on' + eventType, lamdaFunction);
	}
}

// Get event target.
function eventTarget(e)
{
	if (!e) var e = window.event;
	return e.target ? e.target : e.srcElement;
}

// Kills an event's propagation and default action
function cancelEvent(eventObject)
{
	if (eventObject && eventObject.stopPropagation) eventObject.stopPropagation();
	if (eventObject && eventObject.preventDefault) eventObject.preventDefault();
	if (window.event && window.event.cancelBubble) window.event.cancelBubble = true;
	if (window.event) window.event.returnValue = false;
}

/******************************************************************************
 * Start-up call.
 ******************************************************************************/

function init()
{
	if (!element('footer')) setTimeout(init, 100);
	else prepare();
}

init();
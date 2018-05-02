//      locale.js, common code
//      (C)opyright Friendster Inc., 2003-2007
//adding Cookie object to a namespace to prevent clashing, particularly with mootools
var FS = FS || {};
FS.util = FS.util || {};
FS.util.Cookie = function () {
    return {
        get: function(key) {
            var value = document.cookie.match("(?:^|;)\\s*" + key + "=([^;]*)");
            return (value ? decodeURIComponent(value[1]) : false);
        }
    };
}();

var Locale = {
    DEFAULT : 'en-US',
    getLocale : function() {
        try {
            var curLoc = FS.util.Cookie.get('friendster_lang');
			//if cookie lookup fails try using the global variable
			if (!curLoc && typeof pageViewerLangPref !== 'undefined') {
				curLoc = pageViewerLangPref;
			}
        } catch(e) {
            return 'en-US';    
        }
        return (!curLoc) ? Locale.DEFAULT : curLoc;
    },
    getString : function(name, locale) {
        try {
            if (!locale) {
				var locale = Locale.getLocale();
			}

			var res = '';

			if (typeof Locale['en-US'] !== 'undefined' && typeof Locale['en-US'][name] !== 'undefined') {
				res = Locale['en-US'][name];
			}
			else if (typeof Locale[locale] !== 'undefined' && typeof Locale[locale][name] !== 'undefined') {
				res = Locale[locale][name];
			}
			return res;

        } catch(e) {
            return '';
        }
    }
};// Correctly handle PNG transparency in Win IE 5.5 or higher.
function correctPNG(img, width, height, imgURL) {
  if (imgURL != null)
    img.src = imgURL;
  var imgID = (img.id) ? "id='" + img.id + "' " : "";
  var imgClass = (img.className) ? "class='" + img.className + "' " : "";
  var imgTitle = (img.title) ? "title='" + img.title + "' " :
                               "title='" + img.alt + "' ";
  var imgStyle = "display:inline-block;" + img.style.cssText;
  if (img.align == "left") imgStyle = "float:left;" + imgStyle;
  if (img.align == "right") imgStyle = "float:right;" + imgStyle;
  if (img.parentElement.href) imgStyle = "cursor:hand;" + imgStyle;
  var strNewHTML = "<span " + imgID + imgClass + imgTitle + 
                   " style=\"" + "width: " + width + "px; height:" +
                   height + "px;" + imgStyle + "; " + 
                   "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader" +
                   "(src=\'" + img.src + "\', sizingMethod='scale');\"></span>";
  img.outerHTML = strNewHTML;
  return true;
}

function correctPNGImage(image, width, height, imgURL) {
  //if IE6 & below...
  if (document.all && !window.opera && typeof window.XMLHttpRequest == "undefined") {
    correctPNG(image, width, height, imgURL);
  } else if (imgURL != null) {
    image.src = imgURL;
  }
}
//start date formatting
/*
	here's the notation we use to specify the date formatting.
	subset of SimpleDateFormat- http://java.sun.com/j2se/1.4.2/docs/api/java/text/SimpleDateFormat.html	
	Letter	Date or Time Component	Presentation	Examples
	%y		Year					Year			1996; 96
	%M		Month in year			Month			July; Jul; 07
	%d		Day in month			Number			10
	%E		Day in week				Text			Tuesday; Tue
	%a		Am/pm marker			Text			PM
	%H		Hour in day (0-23)		Number			0
	%h		Hour in am/pm (1-12)	Number			12
	%m		Minute in hour			Number			30
	%s		Second in minute		Number			55
			
	>examples<		
	%y%y%y%y.%M%M.%D%D %H%H:%m%m 		CN/TW
	%M%M/%D%D/%y%y%y%y %h:%m%m %a 		en-US
	%D%D/%M%M/%y%y%y%y %H%H:%m%m		EU
*/

//format the date according to the format string
function fFormatDate(date_object,format) {

	var date_formatting = format||"%M%M/%D%D/%y%y%y%y %h:%m%m %a"; //default to US
	var Days = ['Sunday','Monday','Tuesday','Thursday','Friday','Saturday']; //FIXME *** need to localize this

	//make the year
	function takeYear(theDate) {
		x = theDate.getYear();
		var y = x % 100;
		y += (y < 38) ? 2000 : 1900;
		
		//either the full year or the last two digits
		var match_arr = date_formatting.match(/%y/g); 
		if(match_arr && match_arr.length==4)
			return y;
		else
			return y.toString().substring(2,y.length);
	}
	
	//stick a zero on if one digit
	function leadingZero(nr) {
		if (nr < 10) nr = "0" + nr;
		return nr;
	}
	
	//we only get here if it's not 24hr
	function makeHours(hrs) {						
		var Hours = 0;
		if(hrs == 0) Hours = 12;
		if(hrs > 12) 
			Hours = (hrs - 12);
		else if(hrs != 0)
			Hours = hrs;
				
		//leading zero or not
		var match_arr = date_formatting.match(/%h/g);
		if(match_arr && match_arr.length==1)
			return Hours;
		else
			return leadingZero(Hours);					
	}			
	
	function makeAMPM(hrs) {
		var ampm = "am";
		if (hrs > 11) ampm = "pm";
		return ampm;
	}
					
	//make the donuts				
	var Year = takeYear(date_object);
	var Month = (date_formatting.match(/%M%M/g))?leadingZero(date_object.getMonth()+1):(date_object.getMonth()+1); //test for leading zero
	var DayName = Days[date_object.getDay()]; 
	var Day = (date_formatting.match(/%D%D/g))?leadingZero(date_object.getDate()):(date_object.getDate()); //test for leading zero
	var Hours = (date_formatting.match(/%h/g))?makeHours(date_object.getHours()):date_object.getHours(); //test for 12 or 24 hour time
	var Minutes = (date_formatting.match(/%m%m/g))?leadingZero(date_object.getMinutes()):date_object.getMinutes();
	var Seconds = (date_formatting.match(/%s%s/g))?leadingZero(date_object.getSeconds()):date_object.getSeconds();
	var ampm = makeAMPM(date_object.getHours());
	
	//insert the values into the formatting				
	date_formatting=date_formatting.replace(/(%M)+/g,Month);
	date_formatting=date_formatting.replace(/(%D)+/g,Day);
	date_formatting=date_formatting.replace(/(%E)+/g,DayName);
	date_formatting=date_formatting.replace(/(%y)+/g,Year);
	date_formatting=date_formatting.replace(/(%h)+/g,Hours);
	date_formatting=date_formatting.replace(/(%H)+/g,Hours);				
	date_formatting=date_formatting.replace(/(%m)+/g,Minutes);
	date_formatting=date_formatting.replace(/(%s)+/g,Seconds);				
	date_formatting=date_formatting.replace(/(%a)+/g,ampm);
	
	return date_formatting; //this is our completed date ready for display
					
}

//convert date string to local date object adjusting for server & local offsets
function fConvertToLocal(local_date,server_offset) {

	var local_offset = parseInt((new Date().getTimezoneOffset())/60);
	
	//alert(local_offset +" "+server_offset+" "+local_date);

	function getServerOffset() {
		return ((server_offset*(60*60*1000)));
	}
	
	function getLocalOffset() {
		return ((local_offset*(60*60*1000)));
	}			

	var date_object = new Date(Date.parse(local_date)-((getServerOffset())+(getLocalOffset())));	
	return date_object;				
}

//this is the top level function
function fMakeDate(server_date,server_offset,formatting) {
	server_date=server_date.replace(/-/g,"\/"); //FIXME ***	fix this in the php impl
	var date_obj = fConvertToLocal(server_date,server_offset); //make local
	var date_str = fFormatDate(date_obj,formatting); //format it
	return date_str;
}

//end date formatting

//cross broswer method for registering for the dom ready "event"
var funcArr=[];
function attachOnDomReadyHandler(func) {
	funcArr.push(func);
}

//cross broswer method for registering for the onload event
function attachOnLoadHandler(func)
{
	if(window.attachEvent)
	{
		//win 5.0-6.0
		window.attachEvent('onload',func)		
		return true;
	}
	if(window.addEventListener)
	{
		//moz,opera & safari
		window.addEventListener('load',func,false)		
		return true;	
	}
	return false;	
}

//cross broswer method for registering for the onunload event
function attachOnUnLoadHandler(func)
{
	if(window.attachEvent)
	{
		//win 5.0-6.0
		window.attachEvent('onunload',func)		
		window.attachEvent('onabort',func)		
		return true;
	}
	if(window.addEventListener)
	{
		//moz,opera & safari
		window.addEventListener('unload',func,false)		
		window.addEventListener('abort',func,false)		
		return true;	
	}
	return false;	
}

//start xmlhttprequest

var XmlDocObj = null;
var RequestError = null;
var XmlRequests = new Object();

function createXmlHttpObj(request_id) {
    var xmlhttp;

    if (request_id === undefined || request_id.length == 0) {
        request_id = generateRequestId();
    }

    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
        xmlhttp.isDOM = true;
    } else {
        try {
            xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            xmlhttp.abort();
            try {
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (E) {
                xmlhttp.abort();
                xmlhttp = false;
            }
        }
    }

    // abort request if user leaves or stops the page prematurely
    attachOnUnLoadHandler(function(){abortXMLHttpRequest(request_id);});

    XmlRequests[request_id] = xmlhttp;

    return request_id;
}

// abort AJAX request on timeout, and notify handler with empty response
function readyStateTimeout(request_id, my_handler_function) {
    if (XmlRequests[request_id].readyState < 4) {
        XmlRequests[request_id].abort();
        if (my_handler_function) {
            eval(my_handler_function + "('')");
        }
    }
}

// abort AJAX request
function abortXMLHttpRequest(request_id) {
    if (!XmlRequests[request_id]) {
        return false;
    }
    if (XmlRequests[request_id].readyState < 4) {
        XmlRequests[request_id].abort();
        return true;
    }
    return false;
}

function responseHandler(xmlObj) {
    return xmlObj;
}

function generateRequestId() {
    var request_id;

    do {
        request_id = Math.round(Math.random() * 10000);
    } while (XmlRequests[request_id] != undefined);

    return request_id;
}

function sendXMLHttpRequest(url, my_handler_function, request_id) {
    if (!XmlRequests[request_id]) {
        request_id = createXmlHttpObj(request_id);
    }

    if (!XmlRequests[request_id]) {
        return false;
    }

    var xmlhttp = XmlRequests[request_id];

    if (!my_handler_function) {
        my_handler_function = 'responseHandler';
    }

    if (!url) {
        url = '/';
    }

    try {
        window.setTimeout('readyStateTimeout(' + request_id + ', "' + my_handler_function + '")', 10000);
        xmlhttp.open('GET', url, true);
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp && xmlhttp.readyState == 4) {
            	try {
					if (xmlhttp.status == 200 && xmlhttp.responseXML) {
						try {
							eval(my_handler_function + "(xmlhttp.responseXML)");
						} catch (e) {
							//alert('An error occurred while loading');
							RequestError = 'Timeout';
						}
					}
            	} catch(e) {
            		xmlhttp.abort();
        			return;
            	}
            }
        }
        xmlhttp.setRequestHeader('X-Requested-With','XMLHttpRequest');
        xmlhttp.send(null);
    } catch(e) {
        xmlhttp.abort();
        return;
    }
}

function sendXMLHttpRequestText(url, my_handler_function, request_id) {
    if (!XmlRequests[request_id]) {
        request_id = createXmlHttpObj(request_id);
    }

    if (!XmlRequests[request_id]) {
        return false;
    }

    var xmlhttp = XmlRequests[request_id];

    if (!my_handler_function) {
        my_handler_function = 'responseHandler';
    }

    if (!url) {
        url = '/';
    }

    try {
        window.setTimeout('readyStateTimeout(' + request_id + ', "' + my_handler_function + '")', 10000);
        xmlhttp.open('GET', url, true);
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp && xmlhttp.readyState == 4) {
                if (xmlhttp.status == 200 && xmlhttp.responseText) {
                    try {
                        eval(my_handler_function + "(xmlhttp.responseText)");
                    } catch (e) {
                        //alert('An error occurred while loading');
                        RequestError = 'Timeout';
                    }
                }
            }
        }
        xmlhttp.setRequestHeader('X-Requested-With','XMLHttpRequest');
        xmlhttp.send(null);
    } catch(e) {
        xmlhttp.abort();
        return;
    }
}

//end xmlhttprequest

//adding this stub for now- to be fleshed out.
function getUserAgent() {
	var agent = navigator.userAgent;
	
	if(agent.indexOf("Safari")!=-1)
		return "isSafari";
	else if(agent.indexOf("Firefox")!=-1)
		return "isFF";
	else if(agent.indexOf("Opera")!=-1)
		return "isOpera";
	else if(agent.indexOf("MSIE")!=-1)
		return "isIE";
	else
		return 'isOther';
}

var thisUserAgent = getUserAgent();

var b64_srckey = "";

function getCookieDomain() {
	if(location.hostname.indexOf("friendster.com")!=-1)
		return "friendster.com";
	else
		return location.hostname;
}

// checks all checkboxes in an element
// pass in: form name, element name to be checked
function checkAll(form,elName){
 var frm = eval(form);
 for(var i=0;i<frm.elements.length;i++){
  var e = frm.elements[i];
  if(e.name == elName){
   e.checked = true;
  }
 }
}

// clears all checkboxes in an element
// pass in: form name, element name to be cleared
function clearAll(form,elName){
 var frm = eval(form);
 for (var i=0;i<frm.elements.length;i++){
  var e = frm.elements[i];
  if(e.name == elName){
   e.checked = false;
  }
 }
}

// sets focus and selects a particular element
// pass in: element to set focus on
function setFocus(form,elName){
 var frmElement = eval(form+"."+elName);
 frmElement.select();
 frmElement.focus();
}

function clickHereToHelp (f) {
  f.relationship_m.checked = false;
  f.relationship_w.checked = false;
  f.dating_m.checked = false;
  f.dating_w.checked = false;
  f.friends.checked = false;
  f.activity.checked = false;
}

function clickInterest (f) {
  if (f.relationship_m.checked == true || f.relationship_w.checked == true
      || f.dating_m.checked == true || f.dating_w.checked == true
      || f.friends.checked == true || f.activity.checked == true)
  {
    f.heretohelp.checked = false;
  } else {
    f.heretohelp.checked = true;
  }
}

function unHighlightRow(row) {
// alert("in function: unHighlightRow");
  if (document.getElementById){
    el = document.getElementById(row);
    if (el.style.backgroundColor == ""){
      el.style.backgroundColor = "#E0E0E0";
      el.style.color = "#7B849C";
    }
    else {
      el.style.backgroundColor = "";
      el.style.color = "";
    }
  }
}

function enableRow(row, enable) {
  if (document.getElementById){
    el = document.getElementById(row);
	if (!el)
		return;
		
    if (!enable){
      el.style.backgroundColor = "#E0E0E0";
      el.style.color = "#7B849C";
    }
    else {
      el.style.backgroundColor = "";
      el.style.color = "";
    }
  }
}

function swapImage(imageName,imageFile) {-
  eval('document.images[imageName].src='+imageFile+'.src');
}

//pops up the add/delete popups
function popWindow(toURL, windowName, width, height, resizable, scrollbars) {
  var attributes = 'width='+width+',height='+height;
  attributes += ',resizable='+resizable;
  attributes += ',scrollbars='+scrollbars;
  attributes += ',toolbar=no,directories=no';
  attributes += ',menubar=no,status=no,location=no';

  var newWindow = window.open(toURL, windowName, attributes);
}

// opens a popup window
// pass in: URL, width, height, and whether or not it is a help window
function popup(url,width,height,helpWin){
 var leftTop = "";
 if(helpWin == "yes"){
  leftTop = ("left=175,top=75,");
 }
 window.open(url,"_blank",leftTop+"width="+width+",height="+height+",location=no,menubar=no,resizable=no,scrollbars=yes,status=no,titlebar=yes,toolbar=no");
}

//start cookie handling code		
	//get a cookie with a name
	function fgetCookie(cookieName)
	{				
		var cookieName_index = document.cookie.lastIndexOf(cookieName+"=");
		if(cookieName_index == -1) 
			return null;
		
		cookieName_index = document.cookie.indexOf("=", cookieName_index) + 1;
		
		var cookieName_endstr = document.cookie.indexOf(";", cookieName_index);
		if(cookieName_endstr == -1) 
			cookieName_endstr = document.cookie.length;
			
		var c = unescape(document.cookie.substring(cookieName_index, cookieName_endstr));
		
		return c;
	}
	
	//get a cookie value with a key
	function fgetCookieValue(cookieName, key)
	{
		var c = fgetCookie(cookieName);
		var key_endstr;
		
		if (c == null || key==null) //bail if no cookie or key
			return null;
			
		var key_index = c.indexOf(key+"=");
		
		if(key_index == -1) //if key not found, return
			return null;
			
		key_index = c.indexOf("=",key_index) + 1;
				
		if(c.indexOf("&", key_index)!=-1)
			key_endstr = c.indexOf("&", key_index);
		else if(c.indexOf(";", key_index)!=-1)
			key_endstr = c.indexOf(";", key_index);
		else
			key_endstr = c.length;
				
		var value = unescape(c.substring(key_index, key_endstr));
		return value;	
	}
	
	//create a cookie. if key=null, then value alone will be used.
	function fsetCookie(name, key, value, expires, path, domain)
	{		
	    if (expires && typeof expires.toGMTString == "function") {
	        expires = expires.toGMTString();
	    }
	    
		var curCookie = name + "=" + ((key) ? key + "=" : "") + escape(unescape(value)) + ((expires) ? "; expires=" + 
		expires : "") + ((path) ? "; path=" + path : "") + ((domain) ? "; domain=" + domain : "");
		
		document.cookie = curCookie;
		return true;	//always true
	}
	
	//set cookie value with a key.
	function fsetCookieValue(name, key, value)
	{
		var c = fgetCookie(name);
		var newCookieVal = null;
		var key_endstr=0;
		
		var now = new Date();
		now.setTime(now.getTime() + 1000 * 60 * 60 * 24 * 365); //a year from now
		
		//var cookie_expire = (name == "friendster_update")?now.toGMTString():""; //friendster_update cookies last a year
		var cookie_expire = "";	
			
		if(fgetCookieValue(name,key) && c) //if cookie/key/value exists, update the current value.
		{
			var key_index = c.indexOf(key+"=") + key.length + 1;
			
			if(c.indexOf("&", key_index)!=-1)
				key_endstr = c.indexOf("&", key_index);
			else if(c.indexOf(";", key_index)!=-1)
				key_endstr = c.indexOf(";", key_index);
			else
				key_endstr = c.length;				
				
			newCookieVal = c.substring(0,key_index) + unescape(value) + c.substring(key_endstr,c.length);
			fsetCookie(name,null,newCookieVal,cookie_expire,"/",getCookieDomain());
		}
		else if(c && key) //if cookie exists but the key is not found, append key/value to the existing cookie string.
		{
			newCookieVal = c.substring(0,c.length) + "&" + key + "=" + unescape(value);
			fsetCookie(name,null,newCookieVal,cookie_expire,"/",getCookieDomain());
		}
		else //if no cookie or key, create it with this name/key/value.
		{
			fsetCookie(name,key,unescape(value),cookie_expire,"/",getCookieDomain());
		}
	}
	
	//expire the cookie with this name
	function funsetCookie(name)
	{
		var cookie_date = new Date ();  // current date & time
		cookie_date.setTime ( cookie_date.getTime() - 1 ); //the past
		fsetCookie(name,null,"deleted",cookie_date,"/",getCookieDomain());
	}
	
	//remove key/value pair from a cookie
	function fremoveCookieKeyValue(name,key)
	{
		//code here
	}
//end cookie handling code

//start code to refresh pages
	//pages that edit or display user data.
	var pageData =
	{
		friends:
		{
			edit:["/friends.php","/friendrequests.php","/featuredfriends.php"], //addfriendrequest.php- omitting this for now.
			display:["/","/user.php","/friends.php"]
		},
		account:
		{
			edit:["/editaccount.php"],
			display:["/","/user.php"]
		},
		testimonials:
		{
			edit:["/comments.php"],
			display:["/","/user.php"]
		},
		photos:
		{
			edit:["/editphotos.php"],
			display:["/","/user.php"]
		},
		profile:
		{
			edit:["/editprofile.php"],
			display:["/","/user.php"]
		},
		messages:
		{
			edit:["/messages.php"],
			display:["/"]
		},
	  customize:
		{
			edit:["/user.php?pskin=","/editskin.php"],
			display:["/user.php"]
		}
	}
	
	//refresh cached page if we need to.
	//called in pagelayout.xsl
	//need to add this to all our pages.
	function refreshCachedPage()
	{
		if(thisUserAgent=="isSafari"||thisUserAgent=="isOther") {
			return;
		}
		
		if (refreshIfNotYours()) return;//refresh if you're seeing a page that's not yours.
		refreshIfChanged(); //refresh the page if its been updated since it last seen.
		addToCacheList(); //a list of pages that have already been cached.
	}
	
	//return true if there's no friendster auth cookies else return false
	function noFriendsterAuth() {
		if(
			fgetCookie("friendster_anon")==null &&
			fgetCookieValue("friendster_auth_v2","uid")==null && 
			fgetCookieValue("friendster_profiles_auth","uid")==null && 
			fgetCookieValue("friendster_widgets_auth","uid")==null && 
			fgetCookieValue("friendster_groups_auth","uid")==null
		) {
			return true;
		} else {
			return false
		}
	}
	
  	//refresh page if it's not this viewers
  	function refreshIfNotYours()
	{
	
		//alert(fgetCookie("friendster_anon") + " " + fgetCookieValue("friendster_auth_v2","uid") + " " + fgetCookieValue("friendster_profiles_auth","uid") + " "+ pageViewerID + " " + document.getElementsByTagName('html').innerHTML)		
		
		//alert("1) pageviewID="+pageViewerID + " AND");
		//alert("2) anon but logged in page: " + (fgetCookie("friendster_anon")!=null && pageViewerID!="") + " OR");
		//alert("3) uids dont match: " + (fgetCookieValue("friendster_auth_v2","uid") && parseInt(fgetCookieValue("friendster_auth_v2","uid"))!=pageViewerID)  + " OR");
		//alert("4) no auth: " + noFriendsterAuth());
			
		// if pageViewerID is defined AND (friendster_anon exists & there's a pageViewerID OR (friendster_auth_v2 exists AND the uid in friendster_auth_v2 is different from the pageViewerID)), then reload the page.	
		if(
			typeof(pageViewerID)!='undefined' && 
			(
				(fgetCookie("friendster_anon")!=null && pageViewerID!="") ||
				(fgetCookieValue("friendster_auth_v2","uid") && parseInt(fgetCookieValue("friendster_auth_v2","uid"))!=pageViewerID) ||
				(noFriendsterAuth() && pageViewerID!="")
			)		
		)
		{
			refreshPage();
			return true;
		}
			
		if ((typeof(pageViewerLangPref)!='undefined') && (fgetCookie("friendster_lang")!=null) && (pageViewerLangPref!="") && (fgetCookie("friendster_lang")!=pageViewerLangPref))
		{
			refreshPage();
			return true;
		}

		return false;
  	}  

	//add the current page to the cached list if its on the list of pages we refresh 
	function addToCacheList()
	{
		//where we at
		var p = window.location.pathname;
		
		//if its one of the pages we will refresh, then add it or refresh page visit time.
		if(findDisplayPage(p))
		{
			var d = new Date();
			fsetCookieValue("friendster_cacheList", p, d.getTime());
		}
	}
        
  	//refresh page when the data's changed
  	function refreshIfChanged()
  	{
  		var c=fgetCookie("friendster_update");
  		var timeDiff=1000;
  		
  		if(!c)
  			return null; //no change, bail
  		
  		//get the file name & any query string of the current location.
		var p=window.location.pathname;
		
		//see if we've already cached page- we won't reload if its not cached.
		var cacheDate=fgetCookieValue("friendster_cacheList",p);
		
		if(!cacheDate)
			return null; //not cached, so bail.
		
		//date
		var now=new Date();
		
		timeDiff=now.getTime()-cacheDate; //ms
		timeDiff=Math.floor(timeDiff/1000); //secs
		timeDiff=Math.floor(timeDiff/60); //mins
				  		
  		//if we have a cookie & the current location matches something in the page list and it's been cached for less than an hour.
  		if(c && c.indexOf(p)!=-1 && timeDiff < 60)
  		{
			var a = c.split(",");
			var tmp = new String();
  			var refresh = false;
  			
  			//remove the name of the page we're reloading from the cookie
  			for(var i=0;i<a.length;i++)
  			{  				
  				if(!(a[i].toString()==p.toString()))
  				{
  					tmp += a[i] + ",";
  				} else {
  				    refresh = true;
  				}
  			}
  			
  			if(tmp!="") //if the list isn't empty, update the page list.
				fsetCookieValue("friendster_update",null,tmp.substring(0,tmp.length-1)); 
  			else //if this was the last page in the list, remove the cookie.
  				funsetCookie("friendster_update"); 
  				
  			//alert("refreshIfChanged: " + refresh);	
  				
			if (refresh == true)
				refreshPage(); //ok, now refresh the page.
				
			return true;
  		}
  		
  		return null;
  	}  

	//set cookie indicating user data has changed.
	function pageUpdated()
	{
		//get page list & current cookie
		var value = getDisplayPages(getPath());
		var c = fgetCookie("friendster_update");
		if(c)
		{	//append page list to current cookie
			var tmpStr = c + "," + value;
			var tmpArr = unique(tmpStr.split(",")); //remove duplicates
			fsetCookieValue("friendster_update",null,tmpArr.join(","));
		}
		else
		{	//cookie doesn't exist, create it
			fsetCookieValue("friendster_update",null,value);
		}
	}
		
    //helper, just return the filename
  	function getPath()
  	{
  		var loc = window.location.pathname;
  		return loc;
  	}		
				
	//use the edit page name to look up the list of display pages
	function getDisplayPages(loc)
	{
		var str = "";		
		for(var x in pageData)	//loop thru pageData object & construct a list of pages
			if(pageData[x].edit.join(",").indexOf(loc)!= -1)
				str += pageData[x].display.join(",") + ",";
		
		var pageArray = unique(str.substring(0,str.length-1).split(","));
		return pageArray.join(","); //return the list
	}
	
	//check if the location is in the display page list
	function findDisplayPage(loc)
	{		
		for(var x in pageData)
		{			
			if(pageData[x].display.join(",").indexOf(loc)!= -1)
				return true;
		}
		return false;
	}
	
	//remove dupes from an array
	function unique(arr) 
	{
		tmp = new Array(0);
		for(var i=0; i < arr.length; i++)
		{
			if(!contains(tmp, arr[i]))
			{
				tmp.length += 1;
				tmp[tmp.length-1] = arr[i];
			}
		}
		return tmp;
	}
	
	//helper for unique function
	function contains(a, e) 
	{
		for(var j=0; j < a.length; j++)
			if(a[j]==e)
				return true;
			
		return false;
	}
	    	  
	//refresh cached page if we haven't just reloaded this page.
	function refreshPage()
	{
		var loc = window.location.href;
		window.location.reload();
	}
//end code to refresh pages

//start code for dart ads
	//global array we'll hang the script tags & ad div ids off of.
	var dartAds = [null]; //single placeholder
	
	//grab the script tag defined above
	function getScriptTag(count)
	{
		if(dartAds[count] && dartAds[count].iframeEnabled==false) {
			return dartAds[count].scriptTag;
		} else {
			return "";
		}	
	}
	
	function getSlotTag(count)
	{
		if(dartAds[count] && dartAds[count].iframeEnabled==false)
			return dartAds[count].slotTag;
		else
			return null;	
	}
	
	//move ad to div
	function moveAd(count)
	{	
				
		var adFactory = document.getElementById("adfactory"+count);
		var adDiv=null;
			
		//get the ad id & use it grab the div	
		if(dartAds[count] && dartAds[count].iframeEnabled==false)
			adDiv=document.getElementById(dartAds[count].parentDivID);
	
		//bail if there's no ad
		if(adFactory==null || adDiv==null)
			return;
				
//		alert("adfactory"+count+": "+adFactory.innerHTML);
//		alert(adDiv.innerHTML)			
				
		//strip out my js
		var dAdScript = document.getElementById("dartAdScript"+ count);
		var dAdFunc = document.getElementById("dartAdFunc" + count);
		var dAdScriptWrite = document.getElementById("dartAdScriptWrite" + count);
		
		//remove ad providers script tag, to prevent double request
		scriptTags = adFactory.getElementsByTagName("SCRIPT");
		for (var i=0; i<scriptTags.length; i++) {
			var src = scriptTags[i].getAttribute("src");
			if (src != null && src != "" && (src.indexOf("http://partner.googleadservices.com/gampad/ads?")!=-1 || src.indexOf("http://ad.doubleclick.net/adj/")!=-1)) {
				adFactory.removeChild(scriptTags[i]);
				break;
			}
		}
		
		if(dAdScript!=null)
			adFactory.removeChild(dAdScript);
		
		if(dAdFunc!=null)
			adFactory.removeChild(dAdFunc);	
			
		if(dAdScriptWrite!=null)
			adFactory.removeChild(dAdScriptWrite);
						
		//move the ad and make it visible
		var theAd = adFactory.parentNode.removeChild(adFactory); 
//		alert("theAd: "+theAd.innerHTML)
		setTimeout(function(){adDiv.appendChild(adFactory);},50);
		adFactory.style.visibility = "visible";	
		adFactory.style.display = "block";

	}
		
//end dart ad code

// convert the url strings in the given text to links
// DEPRECATED: Will be removed once bug 7985 passed qa verification
function makeURL(str, srckey) {
  b64_srckey = srckey;
  var url = /((((https?|ftp):\/\/[\w]+|www)(\.[\w]+)([^\s]*)?))(\/|\b)/gi;
  var result = str.replace(url, "<a href=\"\" onclick=\"window.open('/redirect.cgi?b='+b64_srckey+'&u='+escape(makeCompleteURL('$&')), '_blank');return false;\" onmouseover=\"window.status=makeCompleteURL('$&');return true\" onmouseout=\"window.status='';return true\">$&</a>");
  document.write(result);
}

function makeCompleteURL(str) {
  if (str.toLowerCase().indexOf("www") == 0) {
    str = "http://"+str;
  }
  return str;
}

//dreamweaver rolloevers
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function textCounter(field, countfield, maxlimit) {
   if (field.value.length > maxlimit) {
     field.value = field.value.substring(0, maxlimit);
   } else {
      countfield.value = maxlimit - field.value.length;
   }
}

// functions to show and hide divs
function openDiv(div) {
  document.getElementById(div).style.display = '';
}
function closeDiv(div) {
  document.getElementById(div).style.display = 'none';
}

// Function to open a hidden div and set the src of an iframe in that div
function openDivLoadIframe(divId,iframeId,url) {
  document.getElementById(iframeId).src = url;
  openDiv(divId);
}
function closeDivUnloadIframe(divId,iframeId) {
  document.getElementById(iframeId).src = '';
  closeDiv(divId);
}

//function to switch tabs                                                                        
function switchTab(tabSet,numOfTabs,activeTab)                                                                                                 
{                                                                               
    for (var i=1;i<=numOfTabs;i++) {                                              
    if(document.getElementById(tabSet + i))
        document.getElementById(tabSet + i).style.display = 'none';             
    }             
                                                                                
    var tab = document.getElementById(tabSet + activeTab)                       
    tab.style.display = '';                                                     
}      

//localtimezone.js
var agt=navigator.userAgent.toLowerCase();
var isIE = ((window.ActiveXObject) ? true : false);
var is_opera = (agt.indexOf("opera") != -1);

function localDateTimewithTimezone(PSTdatetime, tagID, region){
  if (arguments.length < 3)
    region = "US"; //default region to US if not set
  var localdatetime = pst2local(PSTdatetime);
  dayOfWeek = getDayOfWeek(localdatetime.getDay());
  month = getMonth(localdatetime.getMonth());
  day = localdatetime.getDate();
  year = localdatetime.getFullYear();
  hour = localdatetime.getHours();
  meridian = "AM";
  if (hour >= 12) 
    meridian = "PM";

  if (hour == 0) {
    hour = 12;
  } else if (hour > 12) {
    hour = hour - 12;
  }
  min = localdatetime.getMinutes();
  if (min < 10)
    min = '0' + min;
    
  if (region == "US")
    date = dayOfWeek + ", " + month + " " + day + ", " + year + " " + hour + ":" + min + " " + meridian;
  else
    date = dayOfWeek + ", " + day + " " + month + ", " + year + " " + hour + ":" + min + " " + meridian;
  writeTextElement(date, tagID);
}

function localShortDatewithTimezone(PSTdatetime, tagID, region){
  if (arguments.length < 3)
    region = "US"; //default region to US if not set
  var localdatetime = pst2local(PSTdatetime);
  dayOfWeek = getDayOfWeek(localdatetime.getDay());
  month = getMonth(localdatetime.getMonth());
  day = localdatetime.getDate();
  year = localdatetime.getFullYear();
  if (region == "US")
    date = month + " " + day + ", " + year;
  else
    date = day + " " + month + ", " + year;
  writeTextElement(date, tagID);
}

function localDatewithTimezone(PSTdatetime, tagID, region){
  if (arguments.length < 3)
    region = "US"; //default region to US if not set
  var localdatetime = pst2local(PSTdatetime);
  dayOfWeek = getDayOfWeek(localdatetime.getDay());
  month = getMonth(localdatetime.getMonth());
  day = localdatetime.getDate();
  year = localdatetime.getFullYear();
  if (region == "US")
    date = dayOfWeek + ", " + month + " " + day + ", " + year;
  else
    date = dayOfWeek + ", " + day + " " + month + ", " + year;
  writeTextElement(date, tagID);
}

function getDayOfWeek(day) {
  if (day == 0) return Locale.getString('lsun');
  else if (day == 1) return Locale.getString('lmon');
  else if (day == 2) return Locale.getString('ltue');
  else if (day == 3) return Locale.getString('lwed');
  else if (day == 4) return Locale.getString('lthu');
  else if (day == 5) return Locale.getString('lfri');
  else if (day == 6) return Locale.getString('lsat');
}

function getMonth(month) {
  if (month == 0) return Locale.getString('ljan');
  else if (month == 1) return Locale.getString('lfeb');
  else if (month == 2) return Locale.getString('lmar');
  else if (month == 3) return Locale.getString('lapr');
  else if (month == 4) return Locale.getString('lmay');
  else if (month == 5) return Locale.getString('ljun');
  else if (month == 6) return Locale.getString('ljul');
  else if (month == 7) return Locale.getString('laug');
  else if (month == 8) return Locale.getString('lsep');
  else if (month == 9) return Locale.getString('loct');
  else if (month == 10) return Locale.getString('lnov');
  else if (month == 11) return Locale.getString('ldec');
}

function toLocaleString(timestamp, tagID){
  var date = new Date(timestamp * 1000);
  var datestr = formatDate(date, "E, MM/dd/yy hh:mm a");
  writeTextElement(datestr, tagID);
}

function pstToLocaleString(pst, tagID){
  var date = pst2local(pst);
  var datestr = formatDate(date, "E, MM/dd/yy hh:mm a");
  writeTextElement(datestr, tagID);
}

function toLocaleDateString(timestamp, tagID){
  var date = new Date(timestamp * 1000);
  var datestr = formatDate(date, "E, MM/dd/yy");
  writeTextElement(datestr, tagID);
}

function pstToLocaleDateString(pst, tagID){
  var date = pst2local(pst);
  var datestr = formatDate(date, "E, MM/dd/yy");
  writeTextElement(datestr, tagID);
}

function pst2local(pst){
  var local, month;
  local = new Date(pst+" PST");
  month = local.getMonth();
  if (month > 2 && month < 10) {
    local = new Date(pst+" PDT");
  }
  return local;
}


function writeTextElement(text, tagID) {
  if (isIE || is_opera) {
    document.write(text);
  } else {
    var span = document.createTextNode(text);
    var elem = document.getElementById(tagID);
    elem.appendChild(span);
  }
}
//end localtimezone.js

//start date.js
var MONTH_NAMES=new
Array(Locale.getString('ljan'),Locale.getString('lfeb'),Locale.getString('lmar'),Locale.getString('lapr'),Locale.getString('lmay'),Locale.getString('ljun'),Locale.getString('ljul'),Locale.getString('laug'),Locale.getString('lsep'),Locale.getString('loct'),Locale.getString('lnov'),Locale.getString('ldec'),Locale.getString('sjan'),Locale.getString('sfeb'),Locale.getString('smar'),Locale.getString('sapr'),Locale.getString('smay'),Locale.getString('sjun'),Locale.getString('sjul'),Locale.getString('saug'),Locale.getString('ssep'),Locale.getString('soct'),Locale.getString('snov'),Locale.getString('sdec'));
var DAY_NAMES=new
Array(Locale.getString('lsun'),Locale.getString('lmon'),Locale.getString('ltue'),Locale.getString('lwed'),Locale.getString('lthu'),Locale.getString('lfri'),Locale.getString('lsat'),Locale.getString('ssun'),Locale.getString('smon'),Locale.getString('stue'),Locale.getString('swed'),Locale.getString('sthu'),Locale.getString('sfri'),Locale.getString('ssat'));
function LZ(x) {return(x<0||x>9?"":"0")+x}

function formatDate(date,format) {
	format=format+"";
	var result="";
	var i_format=0;
	var c="";
	var token="";
	var y=date.getYear()+"";
	var M=date.getMonth()+1;
	var d=date.getDate();
	var E=date.getDay();
	var H=date.getHours();
	var m=date.getMinutes();
	var s=date.getSeconds();
	var yyyy,yy,MMM,MM,dd,hh,h,mm,ss,ampm,HH,H,KK,K,kk,k;
	// Convert real date parts into formatted versions
	var value=new Object();
	if (y.length < 4) {y=""+(y-0+1900);}
	value["y"]=""+y;
	value["yyyy"]=y;
	value["yy"]=y.substring(2,4);
	value["M"]=M;
	value["MM"]=LZ(M);
	value["MMM"]=MONTH_NAMES[M-1];
	value["NNN"]=MONTH_NAMES[M+11];
	value["d"]=d;
	value["dd"]=LZ(d);
	value["E"]=DAY_NAMES[E+7];
	value["EE"]=DAY_NAMES[E];
	value["H"]=H;
	value["HH"]=LZ(H);
	if (H==0){value["h"]=12;}
	else if (H>12){value["h"]=H-12;}
	else {value["h"]=H;}
	value["hh"]=LZ(value["h"]);
	if (H>11){value["K"]=H-12;} else {value["K"]=H;}
	value["k"]=H+1;
	value["KK"]=LZ(value["K"]);
	value["kk"]=LZ(value["k"]);
	if (H > 11) { value["a"]="PM"; }
	else { value["a"]="AM"; }
	value["m"]=m;
	value["mm"]=LZ(m);
	value["s"]=s;
	value["ss"]=LZ(s);
	while (i_format < format.length) {
		c=format.charAt(i_format);
		token="";
		while ((format.charAt(i_format)==c) && (i_format < format.length)) {
			token += format.charAt(i_format++);
			}
		if (value[token] != null) { result=result + value[token]; }
		else { result=result + token; }
		}
	return result;
	}


function _isInteger(val) {
	var digits="1234567890";
	for (var i=0; i < val.length; i++) {
		if (digits.indexOf(val.charAt(i))==-1) { return false; }
		}
	return true;
	}
function _getInt(str,i,minlength,maxlength) {
	for (var x=maxlength; x>=minlength; x--) {
		var token=str.substring(i,i+x);
		if (token.length < minlength) { return null; }
		if (_isInteger(token)) { return token; }
		}
	return null;
	}

function getDateFromFormat(val,format) {
	val=val+"";
	format=format+"";
	var i_val=0;
	var i_format=0;
	var c="";
	var token="";
	var token2="";
	var x,y;
	var now=new Date();
	var year=now.getYear();
	var month=now.getMonth()+1;
	var date=1;
	var hh=now.getHours();
	var mm=now.getMinutes();
	var ss=now.getSeconds();
	var ampm="";

	while (i_format < format.length) {
		// Get next token from format string
		c=format.charAt(i_format);
		token="";
		while ((format.charAt(i_format)==c) && (i_format < format.length)) {
			token += format.charAt(i_format++);
			}
		// Extract contents of value based on format token
		if (token=="yyyy" || token=="yy" || token=="y") {
			if (token=="yyyy") { x=4;y=4; }
			if (token=="yy")   { x=2;y=2; }
			if (token=="y")    { x=2;y=4; }
			year=_getInt(val,i_val,x,y);
			if (year==null) { return 0; }
			i_val += year.length;
			if (year.length==2) {
				if (year > 70) { year=1900+(year-0); }
				else { year=2000+(year-0); }
				}
			}
		else if (token=="MMM"||token=="NNN"){
			month=0;
			for (var i=0; i<MONTH_NAMES.length; i++) {
				var month_name=MONTH_NAMES[i];
				if (val.substring(i_val,i_val+month_name.length).toLowerCase()==month_name.toLowerCase()) {
					if (token=="MMM"||(token=="NNN"&&i>11)) {
						month=i+1;
						if (month>12) { month -= 12; }
						i_val += month_name.length;
						break;
						}
					}
				}
			if ((month < 1)||(month>12)){return 0;}
			}
		else if (token=="EE"||token=="E"){
			for (var i=0; i<DAY_NAMES.length; i++) {
				var day_name=DAY_NAMES[i];
				if (val.substring(i_val,i_val+day_name.length).toLowerCase()==day_name.toLowerCase()) {
					i_val += day_name.length;
					break;
					}
				}
			}
		else if (token=="MM"||token=="M") {
			month=_getInt(val,i_val,token.length,2);
			if(month==null||(month<1)||(month>12)){return 0;}
			i_val+=month.length;}
		else if (token=="dd"||token=="d") {
			date=_getInt(val,i_val,token.length,2);
			if(date==null||(date<1)||(date>31)){return 0;}
			i_val+=date.length;}
		else if (token=="hh"||token=="h") {
			hh=_getInt(val,i_val,token.length,2);
			if(hh==null||(hh<1)||(hh>12)){return 0;}
			i_val+=hh.length;}
		else if (token=="HH"||token=="H") {
			hh=_getInt(val,i_val,token.length,2);
			if(hh==null||(hh<0)||(hh>23)){return 0;}
			i_val+=hh.length;}
		else if (token=="KK"||token=="K") {
			hh=_getInt(val,i_val,token.length,2);
			if(hh==null||(hh<0)||(hh>11)){return 0;}
			i_val+=hh.length;}
		else if (token=="kk"||token=="k") {
			hh=_getInt(val,i_val,token.length,2);
			if(hh==null||(hh<1)||(hh>24)){return 0;}
			i_val+=hh.length;hh--;}
		else if (token=="mm"||token=="m") {
			mm=_getInt(val,i_val,token.length,2);
			if(mm==null||(mm<0)||(mm>59)){return 0;}
			i_val+=mm.length;}
		else if (token=="ss"||token=="s") {
			ss=_getInt(val,i_val,token.length,2);
			if(ss==null||(ss<0)||(ss>59)){return 0;}
			i_val+=ss.length;}
		else if (token=="a") {
			if (val.substring(i_val,i_val+2).toLowerCase()=="am") {ampm="AM";}
			else if (val.substring(i_val,i_val+2).toLowerCase()=="pm") {ampm="PM";}
			else {return 0;}
			i_val+=2;}
		else {
			if (val.substring(i_val,i_val+token.length)!=token) {return 0;}
			else {i_val+=token.length;}
			}
		}
	// If there are any trailing characters left in the value, it doesn't match
	if (i_val != val.length) { return 0; }
	// Is date valid for month?
	if (month==2) {
		// Check for leap year
		if ( ( (year%4==0)&&(year%100 != 0) ) || (year%400==0) ) { // leap year
			if (date > 29){ return 0; }
			}
		else { if (date > 28) { return 0; } }
		}
	if ((month==4)||(month==6)||(month==9)||(month==11)) {
		if (date > 30) { return 0; }
		}
	// Correct hours value
	if (hh<12 && ampm=="PM") { hh=hh-0+12; }
	else if (hh>11 && ampm=="AM") { hh-=12; }
	var newdate=new Date(year,month-1,date,hh,mm,ss);
	return newdate.getTime();
	}
//end date.js


// page pre-loader
// There should be a container element with id 'preloader' in the markup.
// That container will be the overlay to the loading section of the page.
function preloadPage()
{
  if(document.getElementById){
    document.getElementById('preloader').style.display = 'none';
  } else {
    if(document.layers){
      document.preloader.display = 'none';
    } else {
      document.all.preloader.style.display = 'none';
    }
  }
}

// time delay in milliseconds
function delay(ms)
{
  var date = new Date();
  var curDate = null;
  do{
    curDate = new Date();
  }while((curDate - date) - ms);
}

String.prototype.wordcut = function(width, breaker) {
    var words = this.split(' '), concat ='';
    for(var i = 0; i < words.length; i++) {
        var wrp = '', tail = words[i];
        if(tail.length > width) {
            do {
                wrp += tail.substr(0, width);
                wrp += breaker;
                tail = tail.substr(width);
            } while(tail.length > width)
        }
        wrp += tail;
        words[i] = wrp;
        concat += words[i];
        if(i < words.length - 1)
            concat += ' ';
    }
    return concat;
}

function convert2url(str) {
    var add_http_regex = /(?:(^www)|(?:(\s)(www)))(\.\S*(\b|\/))/gim;
    str = str.replace(add_http_regex, '$2http://$1$3$4');
    
    var url_regex = /(\b(https?):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim; 
    
    return str.replace(url_regex, '<a target="_blank" class="externalLink" href="$&">$&</a>');	    
}

//function encode 
function utf8_encode ( string ) {
    // http://kevin.vanzonneveld.net
    // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: sowberry
    // *     example 1: utf8_encode('Kevin van Zonneveld');
    // *     returns 1: 'Kevin van Zonneveld'
    
    string = string.replace(/\r\n/g,"\n");
    var utftext = "";
    var start, end;
 
    start = end = 0;
    for (var n = 0; n < string.length; n++) {
        var c = string.charCodeAt(n);
        var enc = null;
 
        if (c < 128) {
            end++;
        } else if((c > 127) && (c < 2048)) {
            enc = String.fromCharCode((c >> 6) | 192) + String.fromCharCode((c & 63) | 128);
        } else {
            enc = String.fromCharCode((c >> 12) | 224) + String.fromCharCode(((c >> 6) & 63) | 128) + String.fromCharCode((c & 63) | 128);
        }
        if (enc != null) {
            if (end > start) {
                utftext += string.substring(start, end);
            }
            utftext += enc;
            start = end = n+1;
        }
    }
    
    if (end > start) {
        utftext += string.substring(start, string.length);
    }
 
    return utftext;
}

function htmlspecialchars(str) {
	 if (typeof(str) == "string") {
	  str = str.replace(/&/g, "&amp;"); /* must do &amp; first */
	  str = str.replace(/"/g, "&quot;");
	  str = str.replace(/'/g, "&#039;");
	  str = str.replace(/</g, "&lt;");
	  str = str.replace(/>/g, "&gt;");
	  }
	 return str;
 }
 
 function rhtmlspecialchars(str) {
	 if (typeof(str) == "string") {
	  str = str.replace(/&gt;/ig, ">");
	  str = str.replace(/&lt;/ig, "<");
	  str = str.replace(/&#039;/g, "'");
	  str = str.replace(/&quot;/ig, '"');
	  str = str.replace(/&amp;/ig, '&'); /* must do &amp; last */
	  }
	 return str;
 }

Array.prototype.find = function(searchStr) {
  var returnArray = false;
  for (i=0; i<this.length; i++) {
    if (typeof(searchStr) == 'function') {
      if (searchStr.test(this[i])) {
        if (!returnArray) { returnArray = [] }
        returnArray.push(i);
      }
    } else {
      if (this[i]===searchStr) {
        if (!returnArray) { returnArray = [] }
        returnArray.push(i);
      }
    }
  }
  return returnArray;
}


function sprintf () 
{
  var i = 0, a, f = arguments[i++], o = [], m, p, c, x;
  while (f) {
    if (m = /^[^\x25]+/.exec(f)) o.push(m[0]);
    else if (m = /^\x25{2}/.exec(f)) o.push('%');
    else if (m = /^\x25(?:(\d+)\$)?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(f)) {
      if (((a = arguments[m[1] || i++]) == null) || (a == undefined)) throw("Too few arguments.");
      if (/[^s]/.test(m[7]) && (typeof(a) != 'number'))
        throw("Expecting number but found " + typeof(a));
      switch (m[7]) {
        case 'b': a = a.toString(2); break;
        case 'c': a = String.fromCharCode(a); break;
        case 'd': a = parseInt(a); break;
        case 'e': a = m[6] ? a.toExponential(m[6]) : a.toExponential(); break;
        case 'f': a = m[6] ? parseFloat(a).toFixed(m[6]) : parseFloat(a); break;
        case 'o': a = a.toString(8); break;
        case 's': a = ((a = String(a)) && m[6] ? a.substring(0, m[6]) : a); break;
        case 'u': a = Math.abs(a); break;
        case 'x': a = a.toString(16); break;
        case 'X': a = a.toString(16).toUpperCase(); break;
      }
      a = (/[def]/.test(m[7]) && m[2] && a > 0 ? '+' + a : a);
      c = m[3] ? m[3] == '0' ? '0' : m[3].charAt(1) : ' ';
      x = m[5] - String(a).length;
      p = m[5] ? str_repeat(c, x) : '';
      o.push(m[4] ? a + p : p + a);
    }
    else throw ("Couldn't find any matches");
    f = f.substring(m[0].length);
  }
  return o.join('');
}


function outboundLink(url)
{
	var leave = confirm(Locale.getString('outboundLinkMsg1') + '\n\n' + sprintf(Locale.getString('outboundLinkMsg2'), url) + '\n\n' + Locale.getString('outboundLinkMsg3'));
	if(leave==true) window.location.href = url;
	else return false;
}//SuckerTree Horizontal Menu (Sept 14th, 06)
//By Dynamic Drive: http://www.dynamicdrive.com/style/

var menuids=["treemenu1"] //Enter id(s) of SuckerTree UL menus, separated by commas

//attachOnDomReadyHandler(applySubmenu);
/*
function getTargetColors(el) {
  var x = document.getElementById(el);
  if(x){
	if (x.currentStyle) {
		var primary = x.currentStyle.color;
		var secondary = x.currentStyle.backgroundColor;
  	} else if (window.getComputedStyle) {
		var primary = document.defaultView.getComputedStyle(x,null).getPropertyValue("color");
		var secondary = document.defaultView.getComputedStyle(x,null).getPropertyValue("background-color");
  	}
  	var colors = {"primary": primary, "secondary": secondary }
  	return colors;
  }
  else return false;
}

function applySubmenu(){
	if(document.getElementById('treemenu1')){
		if(document.getElementById('controlpanel_header')){
			buildProfileSubmenus_horizontal();
		}
		else{
			buildSubmenus_horizontal();
		}
	}
}
*/
// home, subpages and profile page
function buildsubmenus_horizontal(imagesUrl){
for (var i=0; i<menuids.length; i++){
  var ultags=document.getElementById(menuids[i]).getElementsByTagName("ul")
    for (var t=0; t<ultags.length; t++){
		if (ultags[t].parentNode.parentNode.id==menuids[i]){ //if this is a first level submenu
			/*ultags[t].style.top=ultags[t].parentNode.offsetHeight+"px" //dynamically position first level submenus to be height of main menu item*/
			ultags[t].parentNode.getElementsByTagName("a")[0].className="mainfoldericon"
		}
		/*else{ //else if this is a sub level menu (ul)
		  ultags[t].style.left=ultags[t-1].getElementsByTagName("a")[0].offsetWidth+"px" //position menu to the right of menu item that activated it
    	ultags[t].parentNode.getElementsByTagName("a")[0].className="subfoldericon"
		}*/
        ultags[t].parentNode.onmouseover=function(){
            this.getElementsByTagName("ul")[0].style.visibility="visible"
			this.getElementsByTagName("a")[0].style.background="#4A93DD";
			this.getElementsByTagName("a")[0].style.backgroundImage="url("+imagesUrl+"/arrow_down.gif)";
			this.getElementsByTagName("a")[0].style.backgroundRepeat="no-repeat";
			this.getElementsByTagName("a")[0].style.backgroundPosition="center right";
			hideSelect();
        }
        ultags[t].parentNode.onmouseout=function(){
            this.getElementsByTagName("ul")[0].style.visibility="hidden"
			this.getElementsByTagName("a")[0].style.background="none";
			this.getElementsByTagName("a")[0].style.backgroundImage="url("+imagesUrl+"/arrow_down.gif)";
			this.getElementsByTagName("a")[0].style.backgroundRepeat="no-repeat";
			this.getElementsByTagName("a")[0].style.backgroundPosition="center right";
			showSelect();
        }
    }
  }
}

// profile page
/*
function buildProfileSubmenus_horizontal(){
  var colors = getTargetColors("controlpanel_header");
  var primary = colors.primary; // text color
  var secondary = colors.secondary; // header bg color

  for (var i=0; i<menuids.length; i++){
    var ultags=document.getElementById(menuids[i]).getElementsByTagName("ul")
    var alltags = document.getElementById(menuids[i]).childNodes;
	// for main links without sub links
    for(var x=0; x<alltags.length; x++){
      if (alltags[x].parentNode.id==menuids[i]){
		  if(alltags[x].tagName == 'LI'){
			alltags[x].firstChild.onmouseover=function(){			
				this.style.background = primary;
				this.style.color = secondary;
		    }
			alltags[x].firstChild.onmouseout=function(){			
				this.style.background = secondary;
				this.style.color = primary;
		    }
		  }
      }
    }
	// for main links and their sub links
    for (var t=0; t<ultags.length; t++){
		if (ultags[t].parentNode.parentNode.id==menuids[i]){ //if this is a first level submenu
			ultags[t].style.top=ultags[t].parentNode.offsetHeight+"px" //dynamically position first level submenus to be height of main menu item
			ultags[t].parentNode.getElementsByTagName("a")[0].className="mainfoldericon"
			for (var n=0; n<ultags[t].getElementsByTagName("a").length; n++){
				ultags[t].getElementsByTagName("a")[n].style.background = primary;	
				ultags[t].getElementsByTagName("a")[n].style.color = secondary;	

				ultags[t].getElementsByTagName("a")[n].onmouseover=function(){
					this.style.background = secondary;
					this.style.color = primary;
				}
				ultags[t].getElementsByTagName("a")[n].onmouseout=function(){
					this.style.background = primary;
					this.style.color = secondary;
				}
			}			
		}
		else{ //else if this is a sub level menu (ul)
		    ultags[t].style.left=ultags[t-1].getElementsByTagName("a")[0].offsetWidth+"px" //position menu to the right of menu item that activated it
	    	ultags[t].parentNode.getElementsByTagName("a")[0].className="subfoldericon"
		}
		
	
    	ultags[t].parentNode.onmouseover=function(){
			var mainUl = this.getElementsByTagName("ul")[0];
			var mainLink = this.getElementsByTagName("a")[0];    	
    		mainUl.style.visibility="visible"
			mainUl.style.background=primary;			
			// links
			mainLink.style.background=primary;
			mainLink.style.color=secondary;
			mainLink.style.backgroundImage="url(http://images.friendster.com/images/arrow_down.gif)";
			mainLink.style.backgroundRepeat="no-repeat";
			mainLink.style.backgroundPosition="center right";
    	}
    	ultags[t].parentNode.onmouseout=function(){
			var mainUl = this.getElementsByTagName("ul")[0];
			var mainLink = this.getElementsByTagName("a")[0];
    		mainUl.style.visibility="hidden"
    		mainUl.style.background = secondary;
			// links
			mainLink.style.background=secondary;
			mainLink.style.color=primary;
			mainLink.style.backgroundImage="url(http://images.friendster.com/images/arrow_down.gif)";
			mainLink.style.backgroundRepeat="no-repeat";
			mainLink.style.backgroundPosition="center right";
    	}
    }
  }
}
*/

function showSelect(){
	if(document.getElementById('hideme')){
		if(document.all && 0 < navigator.appVersion.indexOf('MSIE 6')){
			var k = document.getElementById("hideme");
			k.style.visibility='visible';
		}
	}	
}

function hideSelect(){
	if(document.getElementById('hideme')){
		if(document.all && 0 < navigator.appVersion.indexOf('MSIE 6')){
			var k = document.getElementById("hideme");
			k.style.visibility='hidden';
		}
	}	
}

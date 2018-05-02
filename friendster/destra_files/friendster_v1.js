// Correctly handle PNG transparency in Win IE 5.5 or higher.
function correctPNG(gif,png,l) {
  for(var i=0; i<document.images.length; i++) {
	  var img = document.images[i];
	  var imgName = img.src.toUpperCase();
	  if (imgName.substring(imgName.length-l, imgName.length) == gif) {
          img.src = "http://images.friendster.com/images/" + png;
		  var imgID = (img.id) ? "id='" + img.id + "' " : "";
		  var imgClass = (img.className) ? "class='" + img.className + "' " : "";
		  var imgTitle = (img.title) ? "title='" + img.title + "' " :
                                   "title='" + img.alt + "' ";
		  var imgStyle = "display:inline-block;" + img.style.cssText;
		  if (img.align == "left") imgStyle = "float:left;" + imgStyle;
		  if (img.align == "right") imgStyle = "float:right;" + imgStyle;
		  if (img.parentElement.href) imgStyle = "cursor:hand;" + imgStyle;
		  var strNewHTML = "<span " + imgID + imgClass + imgTitle +
                       " style=\"" + "width:" + img.width + "px; height:" +
                       img.height + "px;" + imgStyle + ";" +
                       "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader" +
                       "(src=\'" + img.src + "\', sizingMethod='scale');\"></span>";
		  img.outerHTML = strNewHTML;
		  i--;
    }
  }
}
function correctPNGS() {
  correctPNG('LOGO-WHITEBG.GIF','logo-whitebg.png','16');
}

//start HBX code                                                                                                                                        
if(fgetCookieValue("friendster_HBX","lucky")=='yup' && HbxTrackingEnabled && typeof hbx=="undefined") //already got lucky, so give 'em the script                                                                       
{                                                                                                                                           
	document.write("<\script language=\"javascript1.1\" src=\"http://images.friendster.com/js/hbx/load_hbx.js\"></\script>");                                                                           
}                                                                                                                                                      
else if(!fgetCookieValue("friendster_HBX","lucky") && HbxTrackingEnabled && typeof hbx=="undefined") //no cookie, first visit.                                                                        
{                                                                                                                                                   
	var lucky69 = (Math.floor(Math.random()*100)==69); //true for 1%                                                                            
	//var lucky69 = true;    100%- for testing only.                                                                                                        
	if(lucky69) //if yes, set cookie & write out script                                                                                        
	{                                                                                                                                            
		fsetCookieValue("friendster_HBX","lucky","yup");                                                                                   
		document.write("<\script language=\"javascript1.1\" src=\"http://images.friendster.com/js/hbx/load_hbx.js\"></\script>");                                                                   
	}                                                                                                                                           
	else                                                                                                                                          
	{   //no soup for you.                                                                                                                     
		fsetCookieValue("friendster_HBX","lucky","nope");                                                                                 
	}                                                                                                                                             
}                                                                                                                                                    
//end HBX code

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

    window.setTimeout('readyStateTimeout(' + request_id + ')', 10000);
    XmlRequests[request_id] = xmlhttp;

    return request_id;
}

function readyStateTimeout(request_id) {
    if (XmlRequests[request_id].readyState < 4) {
        XmlRequests[request_id].abort();
    }
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
        xmlhttp.open('GET', url, true);
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp && xmlhttp.readyState == 4) {
                if (xmlhttp.status == 200 && xmlhttp.responseXML) {
                    try {
                        eval(my_handler_function + "(xmlhttp.responseXML)");
                    } catch (e) {
                        //alert('An error occurred while loading');
                        RequestError = 'Timeout';
                    }
                }
            }
        }
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
}

var thisUserAgent = getUserAgent();

var b64_srckey = "";

function getDomain() {
	var domain = location.hostname;
	var tldindex = domain.lastIndexOf('.');
	var dindex = -1;
	
	if (tldindex > 0) 
		dindex = domain.substring(0,tldindex-1).lastIndexOf('.');
		
	if (dindex >= 0) 
		domain = domain.substring(dindex, domain.length);
		
	return domain;
}

function getCookieDomain() {
	return hostname;
}

var hostname = getDomain();

if (hostname == ".friendster.com") {
  hostname = "www.friendster.com";
} else {
  hostname = location.hostname;
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
		var cookieName_index = document.cookie.indexOf(cookieName);
		
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
		var curCookie = name + "=" + ((key) ? key + "=" : "") + escape(unescape(value)) + ((expires) ? "; expires=" + 
		expires.toGMTString() : "") + ((path) ? "; path=" + path : "") + ((domain) ? "; domain=" + domain : "");
		
		document.cookie = curCookie;
		return true;	//always true
	}
	
	//set cookie value with a key.
	function fsetCookieValue(name, key, value)
	{
		var c = fgetCookie(name);
		var newCookieVal = null;
		var key_endstr=0;
			
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
			fsetCookie(name,null,newCookieVal,"","/",getCookieDomain());
		}
		else if(c && key) //if cookie exists but the key is not found, append key/value to the existing cookie string.
		{
			newCookieVal = c.substring(0,c.length) + "&" + key + "=" + unescape(value);
			fsetCookie(name,null,newCookieVal,"","/",getCookieDomain());
		}
		else //if no cookie or key, create it with this name/key/value.
		{
			fsetCookie(name,key,unescape(value),"","/",getCookieDomain());
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
			edit:["/testimonials.php"],
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
		if(thisUserAgent=="isSafari")
			return;
		
		refreshIfNotYours(); //refresh if you're seeing a page that's not yours.
		refreshIfChanged(); //refresh the page if its been updated since it last seen.
		addToCacheList(); //a list of pages that have already been cached.
	}
	
  	//refresh page if it's not this viewers
  	function refreshIfNotYours()
	{			
		// if pageViewerID is defined AND (friendster_anon exists & there's a pageViewerID OR (friendster_auth exists AND the uid in friendster_auth is different from the pageViewerID)), then reload the page.		
		if ((typeof(pageViewerID)!='undefined' && ((fgetCookie("friendster_anon")!=null && pageViewerID!="") || (fgetCookieValue("friendster_auth","uid") && parseInt(fgetCookieValue("friendster_auth","uid"))!=pageViewerID))))
		{
			refreshPage();
		}
  	}  

	//add the current page to the cached list if its on the list of pages we refresh 
	function addToCacheList()
	{
		//where we at
		var p = window.location.pathname + window.location.search;
		
		//if previously cached, bail.
		if(fgetCookieValue("friendster_cacheList",p))
			return null;
		
		//if its one of the pages we will refresh, then add it.
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
		var p=window.location.pathname+window.location.search;
		
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
  			
  			//remove the name of the page we're reloading from the cookie
  			for(var i=0;i<a.length;i++)
  			{  				
  				if(!(a[i].toString()==p.toString()))
  				{
  					tmp += a[i] + ",";
  				}
  			}
  			
  			if(tmp!="") //if the list isn't empty, update the page list.
				fsetCookieValue("friendster_update",null,tmp.substring(0,tmp.length-1)); 
  			else //if this was the last page in the list, remove the cookie.
  				funsetCookie("friendster_update"); 
  				
			refreshPage(); //ok, now refresh the page.
  		}
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
		var c = fgetCookie("friendster_reload");
		var bool=false;
		var loc = window.location.href;
		
		if(c) 
			bool = c.indexOf(loc)==-1; //if we haven't just reloaded
		else
			bool=true; //if no cookie reload
							
		if (bool)
		{
			var expires = new Date();
			expires.setTime(expires.getTime() + 5000); //expire this cookie in 5 seconds.
			fsetCookie("friendster_reload",null,window.location,expires,null,null);
			window.location.reload();
		}
	}
//end code to refresh pages

//start code for dart ads
	//global array we'll hang the script tags & ad div ids off of.
	var dartAds = new Array();
	
	//grab the script tag defined above
	function getScriptTag(count)
	{
		if(dartAds[count] && dartAds[count].iframeEnabled==false)
			return dartAds[count].scriptTag;
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
				
//		alert(adFactory.innerHTML)
//		alert(adDiv.innerHTML)			
				
		//strip out my js
		var dAdScript = document.getElementById("dartAdScript"+ count);
		var dAdFunc = document.getElementById("dartAdFunc" + count);
		var dAdScriptWrite = document.getElementById("dartAdScriptWrite" + count);
		
		if(dAdScript!=null)
			adFactory.removeChild(dAdScript);
		
		if(dAdFunc!=null)
			adFactory.removeChild(dAdFunc);	
			
		if(dAdScriptWrite!=null)
			adFactory.removeChild(dAdScriptWrite);
						
		//move the ad and make it visible
		var theAd = adFactory.parentNode.removeChild(adFactory); 
//		alert(theAd.innerHTML)
		setTimeout(function(){adDiv.appendChild(adFactory);},50);
		adFactory.style.visibility = "visible";	
		adFactory.style.display = "block";

	}
		
//end dart ad code

// convert the url strings in the given text to links
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
    for (var i=1;i<=numOfTabs;i++)                                              
        document.getElementById(tabSet + i).style.display = 'none';             
                                                                                
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
  if (day == 0) return "Sunday";
  else if (day == 1) return "Monday";
  else if (day == 2) return "Tuesday";
  else if (day == 3) return "Wednesday";
  else if (day == 4) return "Thursday";
  else if (day == 5) return "Friday";
  else if (day == 6) return "Saturday";
}

function getMonth(month) {
  if (month == 0) return "January";
  else if (month == 1) return "February";
  else if (month == 2) return "March";
  else if (month == 3) return "April";
  else if (month == 4) return "May";
  else if (month == 5) return "June";
  else if (month == 6) return "July";
  else if (month == 7) return "August";
  else if (month == 8) return "September";
  else if (month == 9) return "October";
  else if (month == 10) return "November";
  else if (month == 11) return "December";
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
Array('January','February','March','April','May','June','July','August','September','October','November','December','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec');
var DAY_NAMES=new
Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sun','Mon','Tue','Wed','Thu','Fri','Sat');
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

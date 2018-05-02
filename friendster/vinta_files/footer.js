//start of ads.js


// asynchronous call for ads
var adsreq;
var isIE = ((window.ActiveXObject) ? true : false);
var okToRefreshIframeAd = new Object();
var refreshIframeAdTimer = new Object();

function sponsoredLinks(position,pagename,profile_type,keyword){
  var el = document.getElementById(position);
  if(!el) return;
  var numoflinks = el.getAttribute("numoflinks");
  var orientation = el.getAttribute("orientation");
  var url;
  var title = "Sponsored Links";
  var ownerid;
  var loc;
  var query;
  if (!numoflinks) {
      numoflinks=3;
  }
  pagenamesubbgn = pagename.lastIndexOf("/");
  if (pagenamesubbgn > -1) pagename = pagename.substring(pagenamesubbgn+1);
  pagenamesubend = pagename.indexOf(".");
  if (pagenamesubend > 0) pagename = pagename.substring(0,pagenamesubend);
  //alert("pagename after substring: "+pagename);
  ownerid = getOwnerUid();
  // if member does not have a permission or is viewing own page, target
  // viewer's profile by setting ownerid = uid
  if(!ownerid || !profile_type) ownerid = getUid();
  //alert(ownerid);
  if(position == "sponsorsAd") loc = 1;
  url = ("/paidlink.xml?maxl="+numoflinks+"&loc="+loc+"&page="+pagename);
  if(ownerid) url += ("&fid="+ownerid);
  url += ("&full="+profile_type);
  query = window.location.search.substring(1);
  if(query) {
    url += ("&q="+escape(query));
  }
  if(keyword &&  
     keyword != "Government & Politics" &&
     keyword != "Religion & Spirituality" &&
     keyword != "Romance & Relationships" ) {

     keyword = keyword.replace(/(&|,)/g, " ");
     keyword = keyword.replace(/\s+/g, "_");
     url += ("&override="+keyword);
     //alert(keyword);
  }
  //url = "test.xml";
  //alert("url: "+url);
  openAdsXML(url,position);
}

function openAdsXML(url,position) {
  if(window.XMLHttpRequest){
    adsreq = new XMLHttpRequest();

    window.setTimeout(function() {
      if ( adsreq.readyState < 4 ) {
        adsreq.abort();
      }
    },10000); // abort after 10 sec

    if (position == "sponsorsAd") {
        try{
          adsreq.onreadystatechange = adsResponseHandler;
          adsreq.open("GET", url, true);
          adsreq.send(null);
        } catch(e){
          adsreq.abort();
          return;
        }
    } else {
        try{
          adsreq.onreadystatechange = adsFooterResponseHandler;
          adsreq.open("GET", url, true);
          adsreq.send(null);
        } catch(e){
          adsreq.abort();
          return;
        }
    }
  } else if(window.ActiveXObject){
    try{
      adsreq = new ActiveXObject("Microsoft.XMLHTTP");
    } catch(e){
      adsreq.abort();
      return;
    }
    if(adsreq){
      window.setTimeout(function() {
        if ( adsreq.readyState < 4 ) {
          adsreq.abort();
        }
      },10000); // abort after 10 sec

      try{
        adsreq.onreadystatechange = adsResponseHandler;
        adsreq.open("GET", url, true);
        adsreq.send();
      } catch(e){
        adsreq.abort();
        return;
      }
    }
  }
}

function adsResponseHandler() {
  if (adsreq && adsreq.readyState == 4) {
    if (adsreq.responseXML) {
      var position = "sponsorsAd";
      var el = document.getElementById(position);
      if(!el) return;
      var title = "Sponsored Links";
      var orientation = el.getAttribute("orientation");
      var uid = getUid();
//      var cty = getCountry();
      if ("h" == orientation) {
        buildAdH(position,title);
        // TB: removed commented out call to buildAdColor 
      } else {
        buildAd(position,title);
      }
    }
  }
}

function adsFooterResponseHandler() {
  if (adsreq && adsreq.readyState == 4) {
    if (adsreq.responseXML) {
      var position = "sponsoredlinksfooter";
      var el = document.getElementById(position);
      if(!el) return;
      var title = "Sponsored Links";
      var orientation = el.getAttribute("orientation");
      var uid = getUid();
      if ("h" == orientation) {
        buildAdH(position,title);
      } else {
        buildAd(position,title);
      }
    }
  }
}   

function getElementAttribute(prefix, local, parentElem, index){
  var result = "";
  if(prefix && isIE){
    result = parentElem.getElementsByTagName(prefix + ":" + local)[index];
  } else {
    result = parentElem.getElementsByTagName(local)[index];
  }
  if(result){
    if(result.childNodes.length > 1){
      return result.childNodes[1].nodeValue;
    } else if (result.firstChild) {
      return result.firstChild.nodeValue;
    } else {
      return "";
    }
  } else {
    return "";
  }
}

function getUid(){
  var auth_index = document.cookie.indexOf("friendster_auth=");
  if(auth_index == -1) return null;
  auth_index = document.cookie.indexOf("=", auth_index) + 1;
  var auth_endstr = document.cookie.indexOf(";", auth_index);
  if(auth_endstr == -1) auth_endstr = document.cookie.length;
  var auth = unescape(document.cookie.substring(auth_index, auth_endstr));
  var uid_index = auth.indexOf("uid=");
  if(uid_index == -1) return null;
  uid_index = auth.indexOf("=",uid_index)+1;
  var uid_endstr = auth.indexOf("&", uid_index);
  if(uid_endstr == -1) uid_endstr = auth.length;
  var uid = unescape(auth.substring(uid_index, uid_endstr));
  return uid;
}

function getOwnerUid(){
  var srchstr = document.URL;
  var srchstrindex = srchstr.indexOf("uid=");
  if(srchstrindex == -1) return null;
  srchstrindex = srchstr.indexOf("=", srchstrindex)+1;
  var srchstrendstr = srchstr.indexOf("&", srchstrindex);
  if(srchstrendstr == -1) srchstrendstr = srchstr.length;
  var uid = unescape(srchstr.substring(srchstrindex, srchstrendstr));
  return uid;
}

function getCountry(){
  var auth_index = document.cookie.indexOf("friendster_auth=");
  if(auth_index == -1) return null;
  auth_index = document.cookie.indexOf("=", auth_index) + 1;
  var auth_endstr = document.cookie.indexOf(";", auth_index);
  if(auth_endstr == -1) auth_endstr = document.cookie.length;
  var auth = unescape(document.cookie.substring(auth_index, auth_endstr));
  var cty_index = auth.indexOf("cty=");
  if(cty_index == -1) return null;
  cty_index = auth.indexOf("=",cty_index)+1;
  var cty_endstr = auth.indexOf("&", cty_index);
  if(cty_endstr == -1) cty_endstr = auth.length;
  var cty = unescape(auth.substring(cty_index, cty_endstr));
  return cty;
}

function buildAd(position,title){
  var el = document.getElementById(position);
  var box = document.createElement("div");
  var topItem = adsreq.responseXML.getElementsByTagName("paidlinks");
  var providerUrl = "";
  if (topItem && topItem[0]) {
    var providerUrl = topItem[0].getAttribute("url");
  }
  var items = adsreq.responseXML.getElementsByTagName("paidlink");
  var firstAd = getElementTextNS("","title",items[0],0);
  if(providerUrl || (items && firstAd && firstAd.length > 0)){
    if (position == "sponsorsAd") {
        classAttr(box, "sponsorsAd");
        appendToEl(box, "h2", 0, document.createTextNode(title),"","","");
    } else if (position == "sponsoredlinksfooter") {
        classAttr(box, "sponsoredlinksfooter clearfix");
    }

    if (providerUrl) {
      appendToEl(box, "p", 0, document.createTextNode(providerUrl), "", "","");
      if (items.length == 0) {
        appendToEl(box, "h3", 0, document.createTextNode("No ads returned"), "", "","");
      }
    }

    for(var i = 0; i < items.length; i++){
        var appendWhere = box;
        if (position == "sponsoredlinksfooter") {
            var boxdiv = document.createElement("div");
            classAttr(boxdiv, "slfooterDiv"); 
            appendWhere = boxdiv;
        }
                
      appendToEl(appendWhere, "h3", i, document.createTextNode(getElementTextNS("", "title", items[i], 0)), (getElementTextNS("", "url", items[i], 0)), "_blank","");
      appendToEl(appendWhere, "p", i, document.createTextNode(getElementTextNS("", "desc", items[i], 0)), (getElementTextNS("", "url", items[i], 0)), "_blank","slfooterGrey");
      appendToEl(appendWhere, "p", i, document.createTextNode(getElementTextNS("", "displayurl", items[i], 0).substring(0,30)), (getElementTextNS("", "url", items[i], 0)), "_blank","slfooterGreen");  

        if (position == "sponsoredlinksfooter") {
          box.appendChild(boxdiv);
        }
    }
    el.appendChild(box);
  }
}

// TB: removed unused buildAdNew
// TB: removed unused buildAdColor

function buildAdH(position,title){
  var el = document.getElementById(position);
  var topItem = adsreq.responseXML.getElementsByTagName("paidlinks");
  var providerUrl = "";
  if (topItem && topItem[0]) {
    var providerUrl = topItem[0].getAttribute("url");
  }
  var items = adsreq.responseXML.getElementsByTagName("paidlink");
  var firstAd = getElementTextNS("","title",items[0],0);
  if(providerUrl || (items && firstAd && firstAd.length > 0)){  
    for(var i = 0; i < items.length; i++){
      var col = document.createElement("div");
      classAttr(col, "adCols");
      var box = document.createElement("div");
      classAttr(box, "sponsorsColAd");
      appendToEl(box, "h3", i, document.createTextNode(getElementTextNS("", "title", items[i], 0)), (getElementTextNS("", "url", items[i], 0)), "_blank","");
      appendToEl(box, "p", i, document.createTextNode(getElementTextNS("", "desc", items[i], 0)), (getElementTextNS("", "url", items[i], 0)), "_blank","slfooterGrey");
      appendToEl(box, "p", i, document.createTextNode(getElementTextNS("", "displayurl", items[i], 0).substring(0,30)), (getElementTextNS("", "url", items[i], 0)), "_blank","slfooterGreen");  
      col.appendChild(box);
      el.appendChild(col);
    }
  }
}


function classAttr(el, attribute){
  if(isIE){
    el.setAttribute("className",attribute);
  } else {
    el.setAttribute("class",attribute);
  }
}

function getElementTextNS(prefix, local, parentElem, index){
  var result = "";
  if (parentElem) {
    if(prefix && isIE){
      result = parentElem.getElementsByTagName(prefix + ":" + local)[index];
    } else {
      result = parentElem.getElementsByTagName(local)[index];
    }
  }
  if(result){
    if(result.childNodes.length > 1){
      return result.childNodes[1].nodeValue;
    } else if (result.firstChild) {
      return result.firstChild.nodeValue;
    } else {
      return "";
    }
  } else {
    return "";
  }
}

function appendToEl(el, createEl, value, content, url, target, cname){
  var opt;
  var link;
  if(url){
    link = document.createElement("a");
    link.setAttribute("href",url);
    if(target){
      link.setAttribute("target", target);
    }
    link.appendChild(content);
  } else{
    link = content;
  }
  opt = document.createElement(createEl);
  if (cname) classAttr(opt, cname);
  opt.value = value;
  opt.appendChild(link);
  el.appendChild(opt);
}

function createIframeAd(id, dartURL) 
{	
	var adframe=document.getElementById(id);
	var adframeDiv=adframe.parentElement;
	var newAdframe=adframe.cloneNode(true);
	adframeDiv.removeChild(adframe);
	adframeDiv.appendChild(newAdframe);
	adframe=newAdframe;
				
	if(adframe.contentDocument) {
		adframe.contentDocument.open();
		adframe.contentDocument.write("<html><body><scr\ipt language=\"Javascript1.1\" type=\"text/javascript\"  src=\""+ dartURL +"\"></scr\ipt><scr\ipt>setTimeout(function(){this.document.close();},2000);</scr\ipt></body></html>");
	} else if(adframe.contentWindow) {
		adframe.contentWindow.document.open();
		adframe.contentWindow.document.write("<html><body><scr\ipt language=\"Javascript1.1\" type=\"text/javascript\"  src=\""+ dartURL +"\"></scr\ipt><scr\ipt>setTimeout(function(){this.document.close();},2000);</scr\ipt></body></html>");
	}
}	
	
function displayAds(ad,position,bannercode,pagename,profile_type,keyword){
//
// added profile_type = 1 profile is full viewable : 0 profile is restricted
//
  if(ad == "paidlink")	{
    sponsoredLinks(position,pagename,profile_type,keyword);
    return;
  }
}

function refreshGoogleAd() {
	var adID="google";
	if ((okToRefreshIframeAd[adID] || !refreshIframeAdTimer[adID])) {
	    var found = false;
        var iframes = document.getElementsByTagName('iframe');
        if (iframes.length > 0) {
            for (i=0; i<iframes.length; i++) {
                if (iframes[i].name == "google_ads_frame") {
                    found = true;
                    var adUrl = iframes[i].src.replace(/&dt=(\d+)&/,"&dt="+new Date().getTime()+"&");
                    iframes[i].src = adUrl;
                }
            }
            if (found) {
                okToRefreshIframeAd[adID] = false;
                refreshIframeAdTimer[adID] = setTimeout("refreshIframeAdTimeout('"+adID+"')",refreshIframeAdInterval*1000);		
            }
        }
    }
}

function refreshAds(ad, position, bannercode, pagename,profile_type) {
  var adID=(ad + position);
  if ((okToRefreshIframeAd[adID] || !refreshIframeAdTimer[adID])) {
		var el = document.getElementById(position);
		if(el) {
			el.innerHTML = '';
			okToRefreshIframeAd[adID] = false;
			refreshIframeAdTimer[adID] = setTimeout("refreshIframeAdTimeout('"+adID+"')",refreshIframeAdInterval*1000);
			return displayAds(ad, position, bannercode, pagename, profile_type);
		}
  }
}

// function to refresh graphical ads in iframes
function refreshIframeAd(frameName) {
	
	refreshIframeAdInterval=(typeof refreshIframeAdInterval!="undefined") ? refreshIframeAdInterval : 0;

	if ((okToRefreshIframeAd[frameName] || !refreshIframeAdTimer[frameName])) {
		if(typeof dartAds[frameName]!="undefined") {
			var src=dartAds[frameName].scriptSrc;
			createIframeAd(frameName,src);
		} else if (frames[frameName]) {
			frames[frameName].location.reload(true);  			
		}
		okToRefreshIframeAd[frameName] = false;
		refreshIframeAdTimer[frameName] = setTimeout("refreshIframeAdTimeout('"+frameName+"')",refreshIframeAdInterval*1000);
	}
}

// function to refresh graphical ads in iframes
function refreshIframeAdTimeout(frameName) {
  okToRefreshIframeAd[frameName] = true;
}

// FAds functions
function displayFads(url) {
  sendXMLHttpRequest('/fads.xml', 'fadsHandler');
}

function fadsHandler(xmlObj){
  var el = document.getElementById("sn_fadsdiv");
  var items = xmlObj.getElementsByTagName("paidlink");
  var firstAd = getElementTextNS("","title",items[0],0);
  if (items && firstAd && firstAd.length > 0) {
    for (var i = 0; i < 1; i++) {
      appendToEl(el, "span", i, document.createTextNode(getElementTextNS("", "title", items[i], 0) + ' '), (getElementTextNS("", "url", items[i], 0)), "_blank","sn_fads_title");
      appendToEl(el, "span", i, document.createTextNode(' - '));
      appendToEl(el, "span", i, document.createTextNode(getElementTextNS("", "displayurl", items[i], 0)), (getElementTextNS("", "url", items[i], 0)), "_blank","sn_fads_url");
    }
  }
}
//end of ads .js

//start rss feed

// asynchronous call for rss feeds
var rssreq;
var isIE = ((window.ActiveXObject) ? true : false);
var savedpagename = "";

function displayRSS(pagename){
  if(!document.getElementById("rssBox")) return;
  var uid = getUid();
  var ownerid = getOwnerUid(); 
  var username = getOwnerUsername();

  if(!ownerid && !username) {
    ownerid = uid;
  }

  if (!ownerid) {
      return;
  }

  var url;
  if (username) {
    url = ("/rss.php?username="+username+"&vuid="+uid);
  } else {
    url = ("/rss.php?ouid="+ownerid+"&vuid="+uid);
  }

  savedpagename = pagename;
  openRssXML(url);
}

function openRssXML(url) {
  if(window.XMLHttpRequest){
    rssreq = new XMLHttpRequest();

    window.setTimeout(function() {
      if ( rssreq.readyState < 4 ) {
        rssreq.abort();
      }
    },10000); // abort after 10 sec

    try{
      rssreq.onreadystatechange = rssResponseHandler;
      rssreq.open("GET", url, true);
      rssreq.send(null);
    } catch(e){
      rssreq.abort();
      return;
    }
  } else if(window.ActiveXObject){
    isIE = true;
    try{
      rssreq = new ActiveXObject("Microsoft.XMLHTTP");
    } catch(e){
      rssreq.abort();
      return;
    }
    if(rssreq){
      window.setTimeout(function() {
        if ( rssreq.readyState < 4 ) {
          rssreq.abort();
        }
      },10000); // abort after 10 sec

      try{
        rssreq.onreadystatechange = rssResponseHandler;
        rssreq.open("GET", url, true);
        rssreq.send();
      } catch(e){
        rssreq.abort();
        return;
      }
    }
  }
}

function rssResponseHandler() {
  if (rssreq && rssreq.readyState == 4) {
    if (rssreq.responseXML) {
      var teaserbox = rssreq.responseXML.getElementsByTagName("rssbox")[0];
      var pagename = savedpagename;
      pagenamesubbgn = pagename.lastIndexOf("/");
      if (pagenamesubbgn) pagename = pagename.substring(pagenamesubbgn+1);
      if(teaserbox){
        buildHeadlines(pagename.substr(0, pagename.indexOf(".")));
      }
    }
  }
}

function buildHeadlines(pagename) {
  var el = document.getElementById("rssBox");
  var help = rssreq.responseXML.getElementsByTagName("rsshelp")[0];
  var error = rssreq.responseXML.getElementsByTagName("rsserror")[0];
  classAttr(el, "commonbox");
  if (help || error) {
    buildHelp(el, help);
  } else {
    var rss = rssreq.responseXML.getElementsByTagName("rss");
    var rdf = rssreq.responseXML.getElementsByTagName("rdf:RDF");
    var atom = rssreq.responseXML.getElementsByTagName("feed");
    if (rss || rdf) {
      buildHeadlinesRSS(pagename, el);
    } else if (atom) {
      buildHeadlinesAtom(pagename, el);
    }
  }
}

function buildHeadlinesRSS(pagename, el) {
  var items = rssreq.responseXML.getElementsByTagName("item");
  if(items.length > 0 && (getElementTextNS("","link",items[0],0)).length > 0){
    var channel = rssreq.responseXML.getElementsByTagName("channel")[0];
    var t1;
    var channelTitle = getElementTextNS("", "title", channel, 0);
    var titles = new Array(), links = new Array(), dates = new Array();

    for(var i=0; i<items.length && i<4; i++){
      titles[i] = getElementTextNS("","title",items[i],0);
      links[i] = getElementTextNS("","link",items[i],0);

      if(getElementTextNS("","pubDate",items[i],0)){
        dates[i] = new Date(getElementTextNS("","pubDate",items[i],0));
      }
    }
    buildHeadlinesDetails(pagename, el, channelTitle, titles, links, dates);
  }
}

function buildHeadlinesAtom(pagename, el) {
  var items = rssreq.responseXML.getElementsByTagName("entry");
  if(items.length > 0){
    var channel = rssreq.responseXML.getElementsByTagName("link")[0];
    var t1;
    var channelTitle = channel.getAttribute("title");
    var titles = new Array(), links = new Array(), dates = new Array();

    for(var i=0; i<items.length && i<4; i++){
      var linkref = items[i].getElementsByTagName("link")[1];
      titles[i] = linkref.getAttribute("title");
      links[i] = linkref.getAttribute("href");

      if(getElementTextNS("","issued",items[i],0)){
        var dstr = getElementTextNS("","issued",items[i],0);
        dstr = dstr.replace(
            /^(\d{4})-(\d\d)-(\d\d)T([0-9:]*)([.0-9]*)(.)(\d\d):(\d\d)$/,
            '$1/$2/$3 $4 $6$7$8'); // dstr = '2002/06/17 09:25:43 +0100'
        var date = Date.parse(dstr);
        dates[i] = new Date(date) // Mon, 2002-06-17 07:25:43 UTC
      }
    }
    buildHeadlinesDetails(pagename, el, channelTitle, titles, links, dates);
  }
}

function buildHeadlinesDetails(pagename, el, channelTitle, titles, links, dates) {
  if (channelTitle && 0 != channelTitle.length) {
    if (channelTitle.length > 32) {
      channelTitle = channelTitle.substr(0, 32);
      channelTitle = channelTitle.concat("..");
    }
  } else {
    channelTitle = rssreq.responseXML.getElementsByTagName("rssbox")[0].getAttribute("title");
  }
    
  var t = document.createTextNode(channelTitle + ": ");
  var h = document.createElement("h2");
  buildHelpLink(el, h, t);
  var box = document.createElement("div");
  classAttr(box,"boxcontent");
  var list = document.createElement("ol");
  var ouid = rssreq.responseXML.getElementsByTagName("rssbox")[0].getAttribute("uid");
  var vuid = getUid();
  for(var i=0; i<titles.length; i++){
    if(dates[i]){
      titles[i] += " - (" + (dates[i].getMonth() + 1) + "/" + dates[i].getDate() + ")";
    }
    var value;
    if(isIE){value=0;}else{value=i+1;}
    var relink = "/rerss.php?ouid=" + ouid + "&vuid=" + vuid + "&bp=" + pagename +
                 "&t=" + channelTitle + "&uri=" + escape(links[i]);
    appendToEl(list,"li",value,document.createTextNode(titles[i]),(relink),"");
  }
  box.appendChild(list);
  el.appendChild(box);
}

function buildHelp(el, help) {
  classAttr(el, "commonbox");
  var h = document.createElement("h2");
  var t = document.createTextNode(
            rssreq.responseXML.getElementsByTagName("rssbox")[0].getAttribute("title") + ": ");
  buildHelpLink(el, h, t);
  var box = document.createElement("div");
  classAttr(box, "boxcontent");
  if (help) {
    box.appendChild(document.createTextNode("Do you have a blog?"));
    box.appendChild(document.createElement("br"));
    box.appendChild(document.createTextNode("Do you have a favorite RSS feed?"));
    box.appendChild(document.createElement("br"));
    box.appendChild(document.createTextNode("Would you like to show it to your friends?"));
    box.appendChild(document.createElement("br"));
    box.appendChild(document.createTextNode("Get started by entering the "));
    appendToEl(box,"span",0, document.createTextNode("RSS field in your profile."),
              "/editprofile.php#rss","");
  } else {
    box.appendChild(document.createTextNode("We are not able to process the RSS feed URL you specified in your profile.  Please "));
    appendToEl(box,"span",0, document.createTextNode("check the URL"),
              "/editprofile.php#rss","");
    box.appendChild(document.createTextNode(" for accuracy.  For more information on RSS feeds, please "));
    appendToEl(box,"span",0, document.createTextNode("read this."),
              "http://friendster.custhelp.com/cgi-bin/friendster.cfg/php/enduser/std_adp.php?p_faqid=144","");
  }
  el.appendChild(box);
}

function appendToEl2(el, tag, val, t1, t2, url, target){
  var opt;
  var link;
  link = document.createElement("a");
  link.setAttribute("href",url);
  if(target){
    link.setAttribute("target", target);
  }
  link.appendChild(t2);
  opt = document.createElement(tag);
  opt.appendChild(t1);
  opt.value = val;
  opt.appendChild(link);
  el.appendChild(opt);
}

function buildHelpLink(el, h, t1){
  var t2 = document.createElement("img");
  t2.setAttribute("src","http://images.friendster.com/images/global/icon-help.gif");
  t2.setAttribute("title","Help");
  t2.setAttribute("alt","Help");
  classAttr(t2,"helpicon");
  var span2 = document.createElement("span");
  h.appendChild(t1);
  var helplink = document.createElement("a");
  helplink.setAttribute("href",
    "http://friendster.custhelp.com/cgi-bin/friendster.cfg/php/enduser/std_adp.php?p_faqid=144");
  helplink.appendChild(t2);
  el.appendChild(h);
  el.appendChild(helplink);
}
//end rss feed


//start atom feed

// asynchronous call for atom feed
var atomreq;
var isIE = ((window.ActiveXObject) ? true : false);

// TG: Updated to priorotize ownerid, if set.
function displayAtomFeed (pagename) {
        
    if (!document.getElementById("atomBox") || userHasBlog!='t') 
        return;

    var uid = getUid();
    var ownerid = getOwnerUid();
    var username = getOwnerUsername();

    if (!ownerid && !username) {
        ownerid = uid;
    }

    var url;
    if (ownerid) {
        url = ("/atomfeed.php?uid="+ownerid);
    } else if (username) {
        url = "/atomfeed.php?username="+username;
    } else {
        return;
    }

    openAtomXML(url);
}

function openAtomXML(url) {
  if(window.XMLHttpRequest){
    atomreq = new XMLHttpRequest();

    window.setTimeout(function() {
      if ( atomreq.readyState < 4 ) {
        atomreq.abort();
      }
    },10000); // abort after 10 sec

    try{
      atomreq.onreadystatechange = atomResponseHandler;
      atomreq.open("GET", url, true);
      atomreq.send(null);
    } catch(e){
      atomreq.abort();
      return;
    }
  } else if(window.ActiveXObject){
    try{
      atomreq = new ActiveXObject("Microsoft.XMLHTTP");
    } catch(e){
      atomreq.abort();
      return;
    }
    if(atomreq){
      window.setTimeout(function() {
        if ( atomreq.readyState < 4 ) {
          atomreq.abort();
        }
      },10000); // abort after 10 sec

      try{
        atomreq.onreadystatechange = atomResponseHandler;
        atomreq.open("GET", url, true);
        atomreq.send();
      } catch(e){
        atomreq.abort();
        return;
      }
    }
  }
}

function atomResponseHandler() {
  if (atomreq && atomreq.readyState == 4) {
    if (atomreq.responseXML) {
      if(atomreq.responseXML.getElementsByTagName("atom")[0]) {
        buildAtom();
      }
    }
  }
}

function buildAtom() {
  if(!document.getElementById("atomBox")) return;
  var atom = atomreq.responseXML.getElementsByTagName("atom")[0];
  if(atom){
    buildAtomEntries();
  } else {return;}
}

function getElementAttribute(prefix, local, parentElem, index){
  var result = "";
  if(prefix && isIE){
    result = parentElem.getElementsByTagName(prefix + ":" + local)[index];
  } else {
    result = parentElem.getElementsByTagName(local)[index];
  }
  if(result){
    if(result.childNodes.length > 1){
      return result.childNodes[1].nodeValue;
    } else if (result.firstChild) {
      return result.firstChild.nodeValue;
    } else {
      return "";
    }
  } else {
    return "";
  }
}

function buildAtomEntries() {
  var el = document.getElementById("atomBox");
  if(!el) return null;
  var headerbox = document.createElement("div");
  classAttr(headerbox,"left_column_header2");
  var feed = atomreq.responseXML.getElementsByTagName("feed")[0];
  var entries = feed.getElementsByTagName("entry");
  if(entries.length > 0){
    var links = feed.getElementsByTagName("link");
    var href = "";
    for (var i = 0; i < links.length; i++) {
      var type = links[i].getAttribute("type");
      href = links[i].getAttribute("href");
      if (type == "text/html") {
        break;
      }
    }

    var author = atomreq.responseXML.getElementsByTagName("author")[0];
    var name = getElementTextNS("","name",author,0);
    var title = getElementTextNS("","title",feed,0);

    var heading = document.createElement("h1");
    heading.appendChild(document.createTextNode(name+"'s Blog: "));
    var link = document.createElement("a");
    link.setAttribute("href", href);
    link.setAttribute("title", "view blog");
    link.setAttribute("target", "_blank");
    link.appendChild(document.createTextNode(title));
    heading.appendChild(link);
    headerbox.appendChild(heading);

    var helplink = document.createElement("a");
    helplink.setAttribute("href", "http://friendster.custhelp.com/cgi-bin/friendster.cfg/php/enduser/std_adp.php?p_faqid=170");
    helplink.setAttribute("style", "border: 0pt none ;");
    helplink.setAttribute("target", "_blank");
    var helpimage = document.createElement("img");
    classAttr(helpimage, "helpicon2");
    helpimage.setAttribute("src", "http://images.friendster.com/images/global/icon-help.gif");
    helpimage.setAttribute("alt", "Help");
    helpimage.setAttribute("title", "Help");
    helpimage.setAttribute("height", "16");
    helpimage.setAttribute("width", "16");
    helplink.appendChild(helpimage);
    headerbox.appendChild(helplink);
    
    el.appendChild(headerbox);
    var box = document.createElement("div");
    classAttr(box,"left_column_content blogs");
    appendToEl(box,"h2",0,document.createTextNode("Recent Posts:"),"","");
    
    for(var i = 0; i < entries.length && i < 5; i++){
      var links = entries[i].getElementsByTagName("link");
      var entryhref = "";
      for (var j = 0; j < links.length; j++) {
        var type = links[j].getAttribute("type");
        entryhref = links[j].getAttribute("href");
        if (type == "text/html") {
          break;
        }
      }
      title = getElementTextNS("","title",entries[i],0);
      var modified = getElementTextNS("","modified",entries[i],0);
      var summary = "";
      if (i == 0) {
        summary = getElementTextNS("","summary",entries[i],0);
      }
      
      paragraph = document.createElement("p");
      appendToEl(paragraph, "strong", 0, document.createTextNode(title),entryhref,"_blank");
      if (summary != "") {
        paragraph.appendChild(document.createElement("br"));
        appendToEl(paragraph, "span", 0, document.createTextNode(summary), "", "");
      }
      if (modified != "") {
        tpos = modified.indexOf("T");
        if (tpos != -1) {
          modified = modified.substring(0,tpos);
        }
        appendToEl(paragraph, "span", 0, document.createTextNode(" | Posted: "+modified), "", "", "blog_posted");
      }
      box.appendChild(paragraph);
    }
    appendToEl(box, "div", 0, document.createTextNode("see all posts"), href, "_blank", "seeall");
    el.appendChild(box);
  }
}

function getUid(){
  var auth_index = document.cookie.indexOf("friendster_auth=");
  if(auth_index == -1) return null;
  auth_index = document.cookie.indexOf("=", auth_index) + 1;
  var auth_endstr = document.cookie.indexOf(";", auth_index);
  if(auth_endstr == -1) auth_endstr = document.cookie.length;
  var auth = unescape(document.cookie.substring(auth_index, auth_endstr));
  var uid_index = auth.indexOf("uid=");
  if(uid_index == -1) return null;
  uid_index = auth.indexOf("=",uid_index)+1;
  var uid_endstr = auth.indexOf("&", uid_index);
  if(uid_endstr == -1) uid_endstr = auth.length;
  var uid = unescape(auth.substring(uid_index, uid_endstr));
  return uid;
}

// TG: Updated to deal with /user_id
function getOwnerUid() {
    var srchstr = document.URL;
    var srchstrindex = srchstr.indexOf("uid=");
    var uid = null;

    if (srchstrindex == -1) {
        var regexp = /\/([0-9]+)([?][^.\/]*)?$/;
        var regexpobj = new RegExp(regexp);
        var match = regexpobj.exec(srchstr);

        if (match != null) {
            uid = match[1];
        }

    } else {
        srchstrindex = srchstr.indexOf("=", srchstrindex)+1;
        var srchstrendstr = srchstr.indexOf("&", srchstrindex);

        if(srchstrendstr == -1) 
            srchstrendstr = srchstr.length;

        uid = unescape(srchstr.substring(srchstrindex, srchstrendstr));
    }

    return uid;
}

// TG: Updated to deal with new URL with no /profiles/ substring.
function getOwnerUsername(){
  var username = null;
  var srchstr = document.URL;

  var regexp = /\/([^.\/?]{4,12})([?][^.\/]*)?$/;
  var regexpobj = new RegExp(regexp);
  var match = regexpobj.exec(srchstr);

  /*
  var index = srchstr.indexOf("/profiles/");
  if(index == -1) {
    return null;
  }
  index += 10;

  lastindex = srchstr.length;
  var username = unescape(srchstr.substring(index, lastindex));
  */

  if (match != null) {
    username = match[1];
  }

  return username;
}

function classAttr(el, attribute){
  if(isIE){
    el.setAttribute("className",attribute);
  } else {
    el.setAttribute("class",attribute);
  }
}

function getElementTextNS(prefix, local, parentElem, index){
  var result = "";
  if (parentElem) {
    if(prefix && isIE){
      result = parentElem.getElementsByTagName(prefix + ":" + local)[index];
    } else {
      result = parentElem.getElementsByTagName(local)[index];
    }
  }
  if(result){
    if(result.childNodes.length > 1){
      return result.childNodes[1].nodeValue;
    } else if (result.firstChild) {
      return result.firstChild.nodeValue;
    } else {
      return "";
    }
  } else {
    return "";
  }
}

function appendToEl(el, createEl, value, content, url, target, cname){
  var opt;
  var link;
  if(url){
    link = document.createElement("a");
    link.setAttribute("href",url);
    if(target){
      link.setAttribute("target", target);
    }
    link.appendChild(content);
  } else{
    link = content;
  }
  opt = document.createElement(createEl);
  if (cname) classAttr(opt, cname);
  opt.value = value;
  opt.appendChild(link);
  el.appendChild(opt);
}

//end atomfeed  


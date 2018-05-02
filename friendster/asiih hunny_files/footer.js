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
  var title = Locale.getString('sponsorLinks');
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
      var title = Locale.getString('sponsorLinks');
      var orientation = el.getAttribute("orientation");
      var uid = getUid();
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
      var title = Locale.getString('sponsorLinks');
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

function getUid(){
  var auth_index = document.cookie.indexOf("friendster_auth_v2=");
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
            appendToEl(appendWhere, "h3", i, document.createTextNode(getElementTextNS("", "title", items[i], 0)), (getElementTextNS("", "url", items[i], 0)), "_blank","");
            appendToEl(appendWhere, "p", i, document.createTextNode(getElementTextNS("", "desc", items[i], 0)), (getElementTextNS("", "url", items[i], 0)), "_blank","slfooterGrey");
            appendToEl(appendWhere, "p", i, document.createTextNode(getElementTextNS("", "displayurl", items[i], 0).substring(0,30)), (getElementTextNS("", "url", items[i], 0)), "_blank","slfooterGreen");
            box.appendChild(boxdiv);
        }
        else {
            var a = document.createElement('a');
            a.target = '_blank';
            a.href = getElementTextNS("", "url", items[i], 0);
            a.style.display = 'block';
            a.style.width = "100%";     
            var h3 = document.createElement('h3');
            h3.innerHTML = getElementTextNS("", "title", items[i], 0);
            a.appendChild(h3);
            var pDesc = document.createElement('p');
            pDesc.className = 'slfooterGrey';
            pDesc.innerHTML = getElementTextNS("", "desc", items[i], 0);
            a.appendChild(pDesc);
            var pUrl = document.createElement('p');
            pUrl.className = 'slfooterGreen';
            pUrl.innerHTML = getElementTextNS("", "displayurl", items[i], 0).substring(0,30);
            a.appendChild(pUrl);
            box.appendChild(a);
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

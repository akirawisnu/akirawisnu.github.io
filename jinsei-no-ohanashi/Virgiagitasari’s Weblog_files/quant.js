var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

function _qcdst(){if(_qctzoff(0)!=_qctzoff(6))return 1;return 0;}
function _qctzoff(m){
var d1=new Date(2000,m,1,0,0,0,0);
var t=d1.toGMTString();
var d3=new Date(t.substring(0,t.lastIndexOf(" ")-1));
return d1-d3;
}
function _qceuc(s){
if(typeof(encodeURIComponent)=='function'){return encodeURIComponent(s);}
else{return escape(s);}
}
function _qcrnd(){return Math.round(Math.random()*2147483647);}
function _qvoid(){return;}
function _qcgc(n){
 var v='';
 var c=document.cookie;if(!c)return v;
 var i=c.indexOf(n+"=");
 var len=i+n.length+1;
 if(i>-1){
  var end=c.indexOf(";", len);
  if(end<0)end=c.length;
  v=c.substring(len,end);
 }
 return v;
}
function _qcdomain(){
 var d=document.domain;
 if(d.substring(0,4)=="www.")d=d.substring(4,d.length);
 var a=d.split(".");var len=a.length;
 if(len<3)return d;
 var e=a[len-1];
 if(e.length<3)return d;
 d=a[len-2]+"."+a[len-1];
 return d;
}
function _qcsc(dc){
 var s="";var d=_qcdomain();
 if (d=="doubleclick.net"||d=="atdmt.com"||d=="yieldmanager.com"||d=="fimserve.com"||
  d=="tribalfusion.com"||d=="trafficmp.com"){s+=";fpan=u;fpa=;fpbn=;fpb=";return s;}
 var u=document;var a=_qcgc("__qca");
 if(a.length>0){s+=";fpan=0;fpa="+a;}
 else{
  u.cookie="__qca="+dc+"; expires=Sun, 18 Jan 2038 00:00:00 GMT; path=/; domain="+d;
  a=_qcgc("__qca");
  if(a.length>0){s+=";fpan=1;fpa="+dc;}
  else{s+=";fpan=u;fpa=";}
 }
 var b=_qcgc("__qcb");
 if(b.length>0){s+=";fpbn=0;fpb="+b;}
 else{b=_qcrnd();
  u.cookie="__qcb="+b+"; path=/; domain="+d;
  b=_qcgc("__qcb");
  if(b.length>0){s+=";fpbn=1;fpb="+b;}
  else{s+=";fpbn=u;fpb=";}
 }
 return s;
}
function quantserve(){
 var r=_qcrnd();
 var sr='',qo='',qm='',url='',ref='',je='u',ns='1',media='webpage',event='load';
 if(typeof _qoptions !="undefined" && _qoptions!=null){
  for(var k in _qoptions){
   if(typeof(_qoptions[k])!='string'){continue;}
   if(k=='qacct'){_qacct=_qoptions[k];}
   else{qo+=';'+k+'='+_qceuc(_qoptions[k]);}
   if(k=='media'){media=_qoptions[k];}
   if(k=='event'){event=_qoptions[k];}
  }
  _qoptions=null;
 }
 if((typeof _qacct =="undefined")||(_qacct.length==0))return;
 if(media=='webpage' && event=='load'){
  if((typeof _qpixelsent !="undefined")&&(_qpixelsent==_qacct))return;
  _qpixelsent=_qacct;}
 var ce=(navigator.cookieEnabled)?"1":"0";
 if(typeof navigator.javaEnabled !='undefined')je=(navigator.javaEnabled())?"1":"0";
 if(typeof _qmeta !="undefined" && _qmeta!=null){qm=';m='+_qceuc(_qmeta);_qmeta=null;}
 if(self.screen){sr=screen.width+"x"+screen.height+"x"+screen.colorDepth;}
 var d=new Date();
 var dst=_qcdst();



 var dc="1243063251-81607555-35718609";
 var qs="https://web.archive.org/web/20090523072051/http://pixel.quantserve.com";
 var fp=_qcsc(dc);
 if(window.location && window.location.href)url=_qceuc(window.location.href);
 if(window.document && window.document.referrer)ref=_qceuc(window.document.referrer);
 if(self==top)ns='0';
 var img=new Image(1,1);
 img.alt="";
 img.src=qs+'/pixel'+';r='+r+fp+';ns='+ns+';url='+url+';ref='+ref+';ce='+ce+';je='+je+';sr='+sr+';dc='+dc+';dst='+dst+';et='+d.getTime()+';tzo='+d.getTimezoneOffset()+';a='+_qacct+qo+qm;
 img.onload=function() {_qvoid();}
}
quantserve();


}
/*
     FILE ARCHIVED ON 07:20:51 May 23, 2009 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:09:40 Aug 30, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  PetaboxLoader3.datanode: 455.983 (7)
  esindex: 0.016
  PetaboxLoader3.resolve: 172.643
  CDXLines.iter: 141.853 (3)
  exclusion.robots.policy: 0.191
  LoadShardBlock: 505.502 (6)
  RedisCDXSource: 5.583
  exclusion.robots: 0.212
  load_resource: 297.759
*/
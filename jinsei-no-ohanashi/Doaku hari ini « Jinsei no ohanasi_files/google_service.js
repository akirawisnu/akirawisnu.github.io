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

(function(){var f=null;function i(a){this.t={};this.tick=function(a,c,d){d=d?d:(new Date).getTime();this.t[a]=[d,c]};this.tick("start",f,a)}var j=new i;window.GA_jstiming={Timer:i,load:j};if(window.GA_jstiming){window.GA_jstiming.d={};window.GA_jstiming.i=1;var k=function(a,b,c){var d=a.t[b],e=a.t.start;if(d&&(e||c))return d=a.t[b][0],e=void 0!=c?c:e[0],d-e};window.GA_jstiming.report=function(a,b,c){var d="";a.h&&(d+="&"+a.h);var e=a.t,h=e.start,t=[],m=[],g;for(g in e)if("start"!=g&&0!=g.indexOf("_")){var n=e[g][1];n?e[n]&&m.push(g+"."+k(a,g,e[n][0])):h&&t.push(g+"."+k(a,g))}delete e.start;if(b)for(var u in b)d+="&"+u+"="+b[u];a=[c?c:"{{SCHEME}}//csi.gstatic.com/csi","?v=3","&s="+
(window.GA_jstiming.sn||"gam")+"&action=",a.name,m.length?"&it="+m.join(","):"","",d,"&rt=",t.join(",")].join("");b=new Image;var v=window.GA_jstiming.i++;window.GA_jstiming.d[v]=b;b.onload=b.onerror=function(){delete window.GA_jstiming.d[v]};b.src=a;b=f;return a}};var l=this,p=function(a,b){var c,d=b,e=a.split(".");c=c||l;!(e[0]in c)&&c.execScript&&c.execScript("var "+e[0]);for(var h;e.length&&(h=e.shift());)!e.length&&void 0!==d?c[h]=d:c=c[h]?c[h]:c[h]={}},r=function(a){var b=q;function c(){}c.prototype=b.prototype;a.k=b.prototype;a.prototype=new c};var s=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,w=function(a,b){if(!a)return b;var c=a.match(s);return c?c[0]:b};var x,y="false",z=!1,A=x=/^true$/.test(y)?!0:/^false$/.test(y)?!1:z;var B=function(){return w("","pubads.g.doubleclick.net")};var C;C||w("","pagead2.googlesyndication.com");var D=function(a){this.c=[];this.b={};for(var b=0,c=arguments.length;b<c;++b)this.b[arguments[b]]=""};D.prototype.j=function(a){return this.b.hasOwnProperty(a)?this.b[a]:""};D.prototype.geil=D.prototype.j;function E(a){var b="adsense";if(!a||!("string"==typeof a&&0<a.length)||b==f)a=f;else{var c=window.GS_googleServiceIds_[b];c==f&&(c="adsense"==b?new F:new G,window.GS_googleServiceIds_[b]=c);b:{for(b=0;b<c.a.length;b++)if(a==c.a[b])break b;c.a[c.a.length]=a}a=c}return a}p("GS_googleAddAdSenseService",E);function H(){for(var a in window.GS_googleServiceIds_){var b=window.GS_googleServiceIds_[a];"function"!=typeof b&&b.enable()}}p("GS_googleEnableAllServices",H);
function I(){window.GS_googleServiceIds_={}}p("GS_googleResetAllServices",I);function J(){var a="adsense",a=a==f?f:window.GS_googleServiceIds_[a];return a=a==f?"":a.a.join()}p("GS_googleGetIdsForAdSenseService",J);function K(a){return L(a)}p("GS_googleFindService",K);
function M(){var a=L("adsense"),b;if(a){var a=a.f,c=[],d=function(a){""!=a&&c.push(a)},e=a.b;for(b in e)Object.prototype.hasOwnProperty.call(e,b)&&d.call(f,e[b],b,e);b=0<a.c.length&&0<c.length?a.c.join(",")+","+c.join(","):a.c.join(",")+c.join(",")}else b="";return b}p("GS_googleGetExpIdsForAdSense",M);function q(a){this.g=a;this.a=[];this.f=new D}q.prototype.toString=function(){for(var a="["+this.g+" ids: ",b=0;b<this.a.length;b++)0<b&&(a+=","),a+=this.a[b];return a+="]"};
var L=function(a){return a=a==f?f:window.GS_googleServiceIds_[a]};function G(){q.call(this,"unknown")}r(G);G.prototype.enable=function(){};function F(){q.call(this,"adsense");this.e=!1}r(F);
F.prototype.enable=function(){if(!this.e){var a;a=(a=document.URL)&&(0<a.indexOf("?google_debug")||0<a.indexOf("&google_debug"))?"google_ads_dbg.js":"google_ads.js";var b="http://"+w("","partner.googleadservices.com");A&&(b="https://"+w("","securepubads.g.doubleclick.net"));var c="",d;d=B();(d="pubads.g.doubleclick.net"==d)||(c="?prodhost="+B());a=b+"/gampad/"+a+c;b="script";document.write("<"+b+' src="'+a+'">\x3c/script>');this.e=!0;window.GA_jstiming&&
window.GA_jstiming.Timer&&(window.GA_jstiming.load.name="load",window.GA_jstiming.load.tick("start"))}};window.GS_googleServiceIds_||(window.GS_googleServiceIds_={});})()


}
/*
     FILE ARCHIVED ON 00:19:52 Jan 12, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:26:52 Aug 30, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  RedisCDXSource: 32.827
  exclusion.robots: 0.205
  esindex: 0.014
  PetaboxLoader3.datanode: 352.604 (7)
  CDXLines.iter: 148.428 (3)
  load_resource: 223.866
  PetaboxLoader3.resolve: 102.899
  LoadShardBlock: 331.706 (6)
  exclusion.robots.policy: 0.187
*/
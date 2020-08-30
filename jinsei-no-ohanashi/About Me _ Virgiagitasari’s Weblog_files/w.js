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

function st_go(a){var i,u=document.location.protocol+'//web.archive.org/web/20110216154229/http://stats.wordpress.com/g.gif?host='+escape(document.location.host)+'&rand='+Math.random();for(i in a){u=u+'&'+i+'='+escape(a[i]);}u=u+'&ref='+escape(document.referrer);document.open();document.write("<img id=\"wpstats\" src=\""+u+"\" alt=\"\" />");document.close();}
function ex_go(a){var i,u=document.location.protocol+'//web.archive.org/web/20110216154229/http://stats.wordpress.com/g.gif?v=wpcom2&rand='+Math.random();for(i in a){u=u+'&'+i+'='+escape(a[i]);}document.open();document.write("<img id=\"wpstats2\" src=\""+u+"\" alt=\"\" style=\"display:none\" />");document.close();}
function re_go(a){var i,u=document.location.protocol+'//web.archive.org/web/20110216154229/http://stats.wordpress.com/g.gif?rand='+Math.random();for(i in a){u=u+'&'+i+'='+escape(a[i]);}document.open();document.write("<img id=\"wpstats\" src=\""+u+"\" alt=\"\" style=\"display:none\" />");document.close();}
function clicktrack(e){var t;if(e){t=e.target;}else{t=window.event.srcElement;}linktrack(t,500);}
function contexttrack(e){var t;if(e){t=e.target;}else{t=window.event.srcElement;}linktrack(t,0);}
function linktracker_init(b,p){_blog=b;_post=p;_host=document.location.host?document.location.host:document.location.toString().replace(/^[^\/]*\/+([^\/]*)(\/.*)?/,'$1');if(document.body){document.body.onclick=clicktrack;document.body.oncontextmenu=contexttrack;}else if(document){document.onclick=clicktrack;document.oncontextmenu=contexttrack;}else{}}
function linktrack(a,d){try{if(!a||a==null)return;while(a.nodeName!="A"){if(typeof a.parentNode=='undefined')return;a=a.parentNode;if(!a)return;}
b=a;while(b.nodeName!="BODY"){if(typeof a.parentNode=='undefined')return;b=b.parentNode;if(b.id=='wpcombar')return;}
if(a.href.match(eval('/^(http(s)?:\\/\\/)?'+_host+'/')))return;if(a.href.match(eval('/^javascript/')))return;var bh=a.href;var pr=document.location.protocol||'http:';var r=(typeof a.rel!='undefined')?escape(a.rel):'0';var b=(typeof _blog!='undefined')?_blog:'0';var p=(typeof _post!='undefined')?_post:'0';var src=pr+'//web.archive.org/web/20110216154229/http://stats.wordpress.com/c.gif?b='+b+'&p='+p+'&r='+r+'&u='+escape(bh)+"&rand="+Math.random();if(a.className.match('flaptor')){var fx=function(c){return c.replace(/flaptor\s*/,'')};var f='b'+_blog+'p'+_post+' '+fx(a.className);var links=document.getElementsByTagName('A');for(i=0;i<links.length;i++){if(links[i].className.match('flaptor'))
f=f+' '+fx(links[i].className);}
src=src+'&f='+f;}
if(typeof _acseed!='undefined')
src+='&ac='+_acseed;var x=new Image(1,1);x.src=src;if(d){var now=new Date();var end=now.getTime()+d;while(true){now=new Date();if(now.getTime()>end){break}}}}catch(e){}}

}
/*
     FILE ARCHIVED ON 15:42:29 Feb 16, 2011 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:16:37 Aug 30, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  load_resource: 148.874
  PetaboxLoader3.datanode: 101.252 (4)
  exclusion.robots.policy: 0.185
  RedisCDXSource: 21.773
  captures_list: 219.402
  esindex: 0.012
  exclusion.robots: 0.201
  PetaboxLoader3.resolve: 75.226 (2)
  LoadShardBlock: 73.011 (3)
  CDXLines.iter: 38.117 (3)
*/
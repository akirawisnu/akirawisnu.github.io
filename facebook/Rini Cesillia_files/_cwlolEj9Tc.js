/*!CK:3909821914!*//*1392692468,178179357*/

if (self.CavalryLogger) { CavalryLogger.start_js(["UAwu7"]); }

__d("flash-js",["copyProperties"],function(a,b,c,d,e,f,g){function h(){}g(h,{INIT:'flash/init',READY:'flash/ready',FAILED:'flash/failed'});e.exports=h;});
__d("legacy:flash-js",["flash-js"],function(a,b,c,d){a.Flash=b('flash-js');},3);
__d("getLayoutRoot",["DOMQuery","csx"],function(a,b,c,d,e,f,g,h){var i=null;function j(){if(!i)i=g.scry(document.body,"._li")[0];return i;}e.exports=j;});
__d("legacy:swfobject",["swfobject"],function(a,b,c,d,e,f,g){a.deconcept=g;a.SWFObject=g.SWFObject;a.showFlashErrorDialog=g.showFlashErrorDialog;},3);
__d("VideoAutoplayPlayButton",["CSS","Event","cx"],function(a,b,c,d,e,f,g,h,i){var j={},k={getClicked:function(l){if(j.hasOwnProperty(l))return j[l].clicked;return false;},register:function(l,m,n){j[l]=h.listen(m,'click',function(){g.removeClass(m,"_5vos");g.show(n);j[l].clicked=true;});},unregister:function(l){if(j.hasOwnProperty(l))j[l].remove();}};e.exports=k;});
/*!CK:3400875027!*//*1396355465,178141991*/

if (self.CavalryLogger) { CavalryLogger.start_js(["EZE5R"]); }

__d("flash-js",["copyProperties"],function(a,b,c,d,e,f,g){function h(){}g(h,{INIT:'flash/init',READY:'flash/ready',FAILED:'flash/failed'});e.exports=h;});
__d("legacy:flash-js",["flash-js"],function(a,b,c,d){a.Flash=b('flash-js');},3);
__d("legacy:swfobject",["swfobject"],function(a,b,c,d,e,f,g){a.deconcept=g;a.SWFObject=g.SWFObject;a.showFlashErrorDialog=g.showFlashErrorDialog;},3);
__d("VideoAutoplayPlayButton",["CSS","Event","cx"],function(a,b,c,d,e,f,g,h,i){var j={},k={getClicked:function(l){if(j.hasOwnProperty(l))return j[l].clicked;return false;},register:function(l,m,n){j[l]=h.listen(m,'click',function(){g.removeClass(m,"_5vos");g.show(n);j[l].clicked=true;});},unregister:function(l){if(j.hasOwnProperty(l))j[l].remove();}};e.exports=k;});
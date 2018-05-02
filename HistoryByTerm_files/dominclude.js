DOMinccfg={triggerClass:"poplink",popupClass:"popwindow",openPopupLinkClass:"poplinkopen",displayPrefix:"",imagetypes:"jpg|JPG|JPEG|jpeg|gif|GIF|png|PNG",frameSize:[250,300]};
DOMinclude={ifrContainer:null,currentTrigger:null,init:function(){
if(!document.getElementById||!document.createTextNode){
return;
}
var _1=document.getElementsByTagName("a");
for(var i=0;i<_1.length;i++){
if(!DOMinclude.cssjs("check",_1[i],DOMinccfg.triggerClass)){
continue;
}
DOMinclude.addEvent(_1[i],"click",DOMinclude.openPopup,false);
_1[i].preset=_1[i].innerHTML;
_1[i].onclick=DOMinclude.safariClickFix;
_1[i].isOpen=false;
}
},openPopup:function(e){
var t=DOMinclude.getTarget(e);
if(t.nodeName.toLowerCase()!="a"){
t=t.parentNode;
}
if(DOMinclude.currentTrigger&&DOMinclude.currentTrigger!=t){
DOMinclude.currentTrigger.isOpen=false;
}
DOMinclude.killPopup();
if(!t.isOpen){
DOMinclude.cssjs("add",t,DOMinccfg.openPopupLinkClass);
t.innerHTML=DOMinccfg.displayPrefix+t.preset;
DOMinclude.ifrContainer=document.createElement("div");
DOMinclude.cssjs("add",DOMinclude.ifrContainer,DOMinccfg.popupClass);
var _5=t.getAttribute("href");
var _6=_5.substring(_5.lastIndexOf(".")+1,_5.length);
_6=new RegExp(DOMinccfg.imagetypes).test(_6)?"img":"iframe";
var _7=document.createElement(_6);
if(_6=="iframe"){
_7.style.width=DOMinccfg.frameSize[0]+"px";
_7.style.height=DOMinccfg.frameSize[1]+"px";
}
DOMinclude.ifrContainer.appendChild(_7);
_7.setAttribute("src",_5);
document.body.appendChild(DOMinclude.ifrContainer);
DOMinclude.positionPopup(t);
DOMinclude.cancelClick(e);
DOMinclude.currentTrigger=t;
t.isOpen=true;
}else{
t.isOpen=false;
}
},positionPopup:function(o){
var x=0;
var y=0;
var h=o.offsetHeight;
while(o!=null){
x+=o.offsetLeft;
y+=o.offsetTop;
o=o.offsetParent;
}
DOMinclude.ifrContainer.style.left=x+"px";
DOMinclude.ifrContainer.style.top=y+h+"px";
},killPopup:function(e){
if(!DOMinclude.ifrContainer){
return;
}
if(DOMinclude.currentTrigger){
if(arguments.length>0){
DOMinclude.currentTrigger.isOpen=false;
}
DOMinclude.currentTrigger.innerHTML=DOMinclude.currentTrigger.preset;
DOMinclude.cssjs("remove",DOMinclude.currentTrigger,DOMinccfg.openPopupLinkClass);
DOMinclude.currentTrigger=null;
}
DOMinclude.ifrContainer.parentNode.removeChild(DOMinclude.ifrContainer);
DOMinclude.ifrContainer=null;
DOMinclude.cancelClick(e);
},getTarget:function(e){
var _e=window.event?window.event.srcElement:e?e.target:null;
if(!_e){
return false;
}
while(_e.nodeType!=1&&_e.nodeName.toLowerCase()!="body"){
_e=_e.parentNode;
}
return _e;
},cancelClick:function(e){
if(window.event&&window.event.cancelBubble&&window.event.returnValue){
window.event.cancelBubble=true;
window.event.returnValue=false;
return;
}
if(e&&e.stopPropagation&&e.preventDefault){
e.stopPropagation();
e.preventDefault();
}
},addEvent:function(elm,_11,fn,_13){
if(elm.addEventListener){
elm.addEventListener(_11,fn,_13);
return true;
}else{
if(elm.attachEvent){
var r=elm.attachEvent("on"+_11,fn);
return r;
}else{
elm["on"+_11]=fn;
}
}
},cssjs:function(a,o,c1,c2){
switch(a){
case "swap":
o.className=!DOMinclude.cssjs("check",o,c1)?o.className.replace(c2,c1):o.className.replace(c1,c2);
break;
case "add":
if(!DOMinclude.cssjs("check",o,c1)){
o.className+=o.className?" "+c1:c1;
}
break;
case "remove":
var rep=o.className.match(" "+c1)?" "+c1:c1;
o.className=o.className.replace(rep,"");
break;
case "check":
var _1a=false;
var _1b=o.className.split(" ");
for(var i=0;i<_1b.length;i++){
if(_1b[i]==c1){
_1a=true;
}
}
return _1a;
}
},safariClickFix:function(){
return false;
}};
DOMinclude.addEvent(window,"load",DOMinclude.init,false);


/*    HTTP Host:  static.ak.fbcdn.net                                          */
/*    Generated:  August 31st 2009 7:17:46 AM PDT                              */
/*      Machine:  10.16.140.106                                                */
/*       Source:  Local Cache                                                  */
/*     Location:  rsrc:4:5v3p5o2o                                              */
/*       Locale:  nu_ll                                                        */
/*         Path:  js/fbjs.js                                                   */


if(Object.prototype.eval){window.eval=Object.prototype.eval;}
delete Object.prototype.eval;delete Object.prototype.valueOf;function fbjs_sandbox(appid){if(fbjs_sandbox.instances['a'+appid]){return fbjs_sandbox.instances['a'+appid];}
this.appid=appid;this.pending_bootstraps=[];this.bootstrapped=false;fbjs_sandbox.instances['a'+appid]=this;}
fbjs_sandbox.instances={};fbjs_sandbox.prototype.bootstrap=function(){if(!this.bootstrapped){var appid=this.appid;var code=['a',appid,'_Math = new fbjs_math();','a',appid,'_Date = fbjs_date();','a',appid,'_String = new fbjs_string();','a',appid,'_RegExp = new fbjs_regexp();','a',appid,'_Ajax = fbjs_ajax(',appid,');','a',appid,'_Dialog = fbjs_dialog(',appid,');','a',appid,'_Facebook = new fbjs_facebook(',appid,');','a',appid,'_Animation = new fbjs_animation();','a',appid,'_LiveMessage = new fbjs_livemessage(',appid,');','a',appid,'_document = new fbjs_main(',appid,');','a',appid,'_undefined = undefined;','a',appid,'_console = new fbjs_console();','a',appid,'_setTimeout = fbjs_sandbox.set_timeout;','a',appid,'_setInterval = fbjs_sandbox.set_interval;','a',appid,'_escape = escapeURI;','a',appid,'_unescape = unescape;'];for(var i in{clearTimeout:1,clearInterval:1,parseFloat:1,parseInt:1,isNaN:1,isFinite:1}){code=code.concat(['a',appid,'_',i,'=',i,';']);}
eval(code.join(''));}
for(var i=0,il=this.pending_bootstraps.length;i<il;i++){eval_global(this.pending_bootstraps[i]);}
this.pending_bootstraps=[];this.bootstrapped=true;}
fbjs_sandbox.prototype.setBridgeHash=function(bridgeHash){this.bridgeHash=bridgeHash;return this;}
fbjs_sandbox.quicklingEnabled=function(){query=URI.getRequestURI().getQueryData();if(query['_fb_q']&&window.Quickling){return true;}
return false;}
fbjs_sandbox.getSandbox=function(app_id){return fbjs_sandbox.instances['a'+app_id];}
fbjs_sandbox.loadScripts=function(sanitized_scripts){script=sanitized_scripts.shift(0);if(!script){return false;}
if(script['inline']){eval_global(script['inline']);fbjs_sandbox.loadScripts(sanitized_scripts);}else{loadExternalJavascript(script['src'],fbjs_sandbox.loadScripts.bind(null,sanitized_scripts));}}
var $FBJS=function(){function ref(that){if(that==window){return null;}else if(that.ownerDocument===document){fbjs_console.error('ref called with a DOM object!');return fbjs_dom.get_instance(that);}else{if(ua.safari()<528.16&&(typeof that=='object')&&!(that instanceof Object)){return null;}
return that;}}
function idx(b){return(b instanceof Object||blacklist_props[b])?'__unknown__':b;}
var blacklist_props={'caller':true,'$FBJS':true}
function arg(args){var new_args=[];for(var i=0;i<args.length;i++){new_args.push(args[i]);}
return new_args;}
return({arg:arg,idx:idx,ref:ref});}();void function(){var replace=String.prototype.replace,toLowerCase=String.prototype.toLowerCase;fbjs_sandbox.safe_string=function(str){String.prototype.replace=replace;String.prototype.toLowerCase=toLowerCase;return str+'';}}();fbjs_sandbox.set_timeout=function(js,timeout){if(typeof js!='function'){fbjs_console.error('setTimeout may not be used with a string. Please enclose your event in an anonymous function.');}else{return setTimeout(js,timeout);}}
fbjs_sandbox.set_interval=function(js,interval){if(typeof js!='function'){fbjs_console.error('setInterval may not be used with a string. Please enclose your event in an anonymous function.');}else{return setInterval(js,interval);}}
function fbjs_main(appid){fbjs_private.get(this).appid=appid;}
fbjs_main.allowed_elements={a:true,abbr:true,acronym:true,address:true,b:true,br:true,bdo:true,big:true,blockquote:true,caption:true,center:true,cite:true,code:true,del:true,dfn:true,div:true,dl:true,dd:true,dt:true,em:true,fieldset:true,font:true,form:true,h1:true,h2:true,h3:true,h4:true,h5:true,h6:true,hr:true,i:true,img:true,input:true,ins:true,iframe:true,kbd:true,label:true,legend:true,li:true,ol:true,option:true,optgroup:true,p:true,pre:true,q:true,s:true,samp:true,select:true,small:true,span:true,strike:true,strong:true,sub:true,sup:true,table:true,textarea:true,tbody:true,td:true,tfoot:true,th:true,thead:true,tr:true,tt:true,u:true,ul:true};fbjs_main.allowed_editable={embed:true,object:true};fbjs_main.allowed_events={focus:true,click:true,mousedown:true,mouseup:true,dblclick:true,change:true,reset:true,select:true,submit:true,keydown:true,keypress:true,keyup:true,blur:true,load:true,mouseover:true,mouseout:true,mousemove:true,selectstart:true};fbjs_main.prototype.getElementById=function(id){var appid=fbjs_private.get(this).appid;return fbjs_dom.get_instance(document.getElementById('app'+appid+'_'+id),appid);}
fbjs_main.prototype.getRootElement=function(){var appid=fbjs_private.get(this).appid;return fbjs_dom.get_instance(document.getElementById('app_content_'+appid).firstChild,appid);}
fbjs_main.prototype.createElement=function(element){var mix=fbjs_sandbox.safe_string(element.toLowerCase());if(fbjs_main.allowed_elements[mix]){return fbjs_dom.get_instance(document.createElement(mix),fbjs_private.get(this).appid);}else{switch(mix){case'fb:swf':return new fbjs_fbml_dom('fb:swf',fbjs_private.get(this).appid);break;default:fbjs_console.error(mix+' is not an allowed DOM element');break;}}}
fbjs_main.prototype.setLocation=function(url){url=fbjs_sandbox.safe_string(url);if(fbjs_dom.href_regex.test(url)){if(window.Quickling&&Quickling.isActive()){if(!Quickling.isFeatureEnabled('full_platform')){url=new URI(url).addQueryData({'_fb_q':true});}
goURI(url);}else{document.location.href=url;}
return this===window?null:this;}else{fbjs_console.error(url+' is not a valid location');}}
function fbjs_facebook(appid){var priv=fbjs_private.get(this);priv.appid=appid;priv.sandbox=fbjs_sandbox.instances['a'+appid];this.appid=appid;}
fbjs_facebook.prototype.getUser=function(){var priv=fbjs_private.get(this);if(priv.sandbox.data.installed){return priv.sandbox.data.user;}else{return null;}}
fbjs_facebook.prototype.isApplicationAdded=function(){return fbjs_private.get(this).sandbox.data.installed;}
fbjs_facebook.prototype.isLoggedIn=function(){return fbjs_private.get(this).sandbox.data.installed;}
fbjs_facebook.prototype.urchinTracker=function(text){if(urchinTracker){urchinTracker(text);}else{fbjs_console.error('There is no fb:google-analytics tag on this page!');}};fbjs_facebook.prototype.showFeedDialog=function(template_bundle_id,template_data,body_general,target_id,continuation,user_message_prompt,user_message){FBML.showFeedDialog(this.appid,template_bundle_id,template_data,body_general,target_id,continuation,user_message_prompt,user_message);}
fbjs_facebook.prototype.streamPublish=function(user_message,attachment,action_links,target_id,user_message_prompt,callback,auto_publish){FBML.streamPublish(user_message,attachment,action_links,target_id,user_message_prompt,callback,auto_publish);}
fbjs_facebook.prototype.promptPermission=function(perms,callback){FBML.promptPermissionPro(this.appid,perms,callback);}
fbjs_facebook.prototype.showPermissionDialog=function(perms,callback,enableProfileSelector,profileSelectorIds){FBML.showPermissionDialog(perms,callback,enableProfileSelector,profileSelectorIds);}
fbjs_facebook.prototype.createApplication=function(application_name,callback){FBML.createApplication(application_name,callback);}
fbjs_facebook.prototype.setPublishStatus=function(on){var publish=ge(this.appid+'_publish_button');if(publish){publish.disabled=!on;CSS[on?'removeClass':'addClass'](publish,'disabled_button');}
var node=ge('app_content_'+this.appid);if(node){var attachment=DataStore.get(node,'attachment');if(attachment){attachment.setEnabled(on);}}}
fbjs_facebook.prototype.requireLogin=function(continuation,cancellation){if(!continuation){fbjs_console.error('Continuation is a required parameter for requireLogin');return false;}
var priv=fbjs_private.get(this);if(!priv.sandbox.data.installed){FBML.requireLogin(this.appid,function(){priv.sandbox.data.installed=true;continuation();},(cancellation||bagofholding));}else{continuation();}}
fbjs_facebook.prototype.submitOrder=function(order){var app_id=fbjs_private.get(this).appid;var receiver=order['receiver'];var order_info=order['order_info'];var next_js=order['next_js'];var next_url=order['next_url'];GiftCredits.getPrompt(app_id,receiver,order_info,next_url,next_js,GiftCredits.PLACE_APP);}
function fbjs_dom(obj,appid){this.__instance=fbjs_dom.len;try{obj.fbjs_instance=fbjs_dom.len;}catch(e){}
fbjs_dom[fbjs_dom.len]={instance:this,obj:obj,events:{},appid:appid}
fbjs_dom.len++;}
fbjs_dom.len=0;fbjs_dom.attr_setters={'href':'setHref','id':'setId','dir':'setDir','checked':'setChecked','action':'setAction','value':'setValue','method':'setMethod','target':'setTarget','src':'setSrc','class':'setClassName','dir':'setDir','title':'setTitle','tabIndex':'setTabIndex','name':'setName','cols':'setCols','rows':'setRows','accessKey':'setAccessKey','disabled':'setDisabled','readOnly':'setReadOnly','type':'setType','selectedIndex':'setSelectedIndex','selected':'setSelected'};fbjs_dom.factory=function(obj,appid){if(!obj.tagName||((!fbjs_main.allowed_elements[obj.tagName.toLowerCase()]&&!fbjs_main.allowed_editable[obj.tagName.toLowerCase()])||CSS.hasClass(obj,'__fbml_tag')||(obj.tagName=='INPUT'&&(obj.name.substring(0,2)=='fb'||obj.name=='post_form_id'))||obj.getAttribute('fb_protected')=='true')){return null;}else{return new this(obj,appid);}}
fbjs_dom.get_data=function(handle){if(handle.__instance instanceof Object){return null;}else{var data=fbjs_dom[handle.__instance];return data.instance==handle?data:null;}}
fbjs_dom.get_obj=function(handle){if(handle instanceof fbjs_fbml_dom){return fbjs_fbml_dom.get_obj(handle);}else{if(typeof handle.__instance=='number'){var data=fbjs_dom[handle.__instance];if(data&&data.instance==handle){return data.obj;}else{throw('This DOM node is no longer valid.');}}else{throw('This DOM node is no longer valid.');}}}
fbjs_dom.render=function(handle){if(handle instanceof fbjs_fbml_dom){fbjs_fbml_dom.render(handle);}}
fbjs_dom.get_instance=function(obj,appid){if(!obj){return null;}
if(typeof obj.fbjs_instance=='undefined'){return fbjs_dom.factory(obj,appid);}else{return fbjs_dom[obj.fbjs_instance].instance;}}
fbjs_dom.get_instance_list=function(list,appid){var objs=[];for(var i=0;i<list.length;i++){var obj=fbjs_dom.get_instance(list[i],appid);if(obj){objs.push(obj);}}
return objs;}
fbjs_dom.get_first_valid_instance=function(obj,next,appid){var ret=null;if(obj&&((obj.id&&obj.id.indexOf('app_content')!=-1)||(obj.tagName&&obj.tagName.toLowerCase()=='body'))){return null;}
while(obj&&(!(ret=fbjs_dom.factory(obj,appid)))){if((obj.id&&obj.id.indexOf('app_content')!=-1)||(obj.tagName&&obj.tagName.toLowerCase()=='body')){return null;}
obj=obj[next];}
return ret;}
fbjs_dom.clear_instances=function(obj,include){if(include&&obj.fbjs_instance){delete fbjs_dom[obj.fbjs_instance].obj;delete fbjs_dom[obj.fbjs_instance].events;delete fbjs_dom[obj.fbjs_instance].instance;delete fbjs_dom[obj.fbjs_instance];obj.fbjs_instance=undefined;}
var cn=obj.childNodes;for(var i=0;i<cn.length;i++){fbjs_dom.clear_instances(cn[i],true);}}
fbjs_dom.prototype.appendChild=function(child){fbjs_dom.get_obj(this).appendChild(fbjs_dom.get_obj(child));fbjs_dom.render(child);return child;}
fbjs_dom.prototype.insertBefore=function(child,caret){if(caret){fbjs_dom.get_obj(this).insertBefore(fbjs_dom.get_obj(child),fbjs_dom.get_obj(caret));}else{fbjs_dom.get_obj(this).appendChild(fbjs_dom.get_obj(child));}
fbjs_dom.render(child);return child;}
fbjs_dom.prototype.removeChild=function(child){var child=fbjs_dom.get_obj(child);fbjs_dom.clear_instances(child,true);fbjs_dom.get_obj(this).removeChild(child);return this;}
fbjs_dom.prototype.replaceChild=function(newchild,oldchild){fbjs_dom.clear_instances(oldchild,true);fbjs_dom.get_obj(this).replaceChild(fbjs_dom.get_obj(newchild),fbjs_dom.get_obj(oldchild));return this;}
fbjs_dom.prototype.cloneNode=function(tree){var data=fbjs_dom.get_data(this);var obj=data.obj.cloneNode(tree);obj.fbjs_instance=undefined;return fbjs_dom.get_instance(obj,data.appid);}
fbjs_dom.prototype.getParentNode=function(){var data=fbjs_dom.get_data(this);return fbjs_dom.get_first_valid_instance(data.obj.parentNode,'parentNode',data.appid);}
fbjs_dom.prototype.getNextSibling=function(){var data=fbjs_dom.get_data(this);return fbjs_dom.get_first_valid_instance(data.obj.nextSibling,'nextSibling',data.appid);}
fbjs_dom.prototype.getPreviousSibling=function(){var data=fbjs_dom.get_data(this);return fbjs_dom.get_first_valid_instance(data.obj.previousSibling,'previousSibling',data.appid);}
fbjs_dom.prototype.getFirstChild=function(){var data=fbjs_dom.get_data(this);return fbjs_dom.get_first_valid_instance(data.obj.firstChild,'nextSibling',data.appid);}
fbjs_dom.prototype.getLastChild=function(){var data=fbjs_dom.get_data(this);return fbjs_dom.get_first_valid_instance(data.obj.lastChild,'previousSibling',data.appid);}
fbjs_dom.prototype.getChildNodes=function(){var data=fbjs_dom.get_data(this);return fbjs_dom.get_instance_list(data.obj.childNodes,data.appid);}
fbjs_dom.prototype.getElementsByTagName=function(tag){var data=fbjs_dom.get_data(this);return fbjs_dom.get_instance_list(data.obj.getElementsByTagName(tag),data.appid);}
fbjs_dom.prototype.getOptions=function(){var data=fbjs_dom.get_data(this);return fbjs_dom.get_instance_list(data.obj.options,data.appid);}
fbjs_dom.prototype.getForm=function(){var data=fbjs_dom.get_data(this);return fbjs_dom.get_instance(data.obj.form,data.appid);}
fbjs_dom.prototype.serialize=function(){var elements=fbjs_dom.get_data(this).obj.elements;var data={};for(var i=elements.length-1;i>=0;i--){if(elements[i].name&&elements[i].name.substring(0,2)!='fb'&&elements[i].name!='post_form_id'&&!elements[i].disabled){if(elements[i].tagName=='SELECT'){var name=elements[i].multiple?elements[i].name+'[]':elements[i].name;for(var j=0,jl=elements[i].options.length;j<jl;j++){if(elements[i].options[j].selected){serialize_form_helper(data,name,(elements[i].options[j].getAttribute('value')==null)?undefined:elements[i].options[j].value);}}}else if(!(elements[i].type=='radio'||elements[i].type=='checkbox')||elements[i].checked||(!elements[i].type||elements[i].type=='text'||elements[i].type=='password'||elements[i].type=='hidden'||elements[i].tagName=='TEXTAREA')){serialize_form_helper(data,elements[i].name,elements[i].value);}}}
return data;}
fbjs_dom.prototype.setInnerXHTML=function(html){var data=fbjs_dom.get_data(this);var sanitizer=new fbjs_fbml_sanitize(data.appid);var htmlElem=sanitizer.parseFBML(html);if(!htmlElem)return this;var obj=fbjs_dom.get_obj(this);switch(obj.tagName){case'TEXTAREA':fbjs_console.error('setInnerXHTML is not supported on textareas. Please use .value instead.');break;case'COL':case'COLGROUP':case'TABLE':case'TBODY':case'TFOOT':case'THEAD':case'TR':fbjs_console.error('setInnerXHTML is not supported on this node.');break;default:fbjs_dom.clear_instances(obj,false);DOM.setContent(obj,'');this.appendChild(htmlElem);break;}
return this;}
fbjs_dom.prototype.setInnerFBML=function(fbml_ref){var html=fbjs_private.get(fbml_ref).htmlstring;var obj=fbjs_dom.get_obj(this);switch(obj.tagName){case'TEXTAREA':fbjs_console.error('setInnerFBML is not supported on textareas. Please use .value instead.');break;case'COL':case'COLGROUP':case'TABLE':case'TBODY':case'TFOOT':case'THEAD':case'TR':fbjs_console.error('setInnerFBML is not supported on this node.');break;default:DOM.setContent(obj,html);break;}
return this;}
fbjs_dom.prototype.setTextValue=function(text){var obj=fbjs_dom.get_obj(this);fbjs_dom.clear_instances(obj,false);DOM.setContent(obj,fbjs_sandbox.safe_string(text));return this;}
fbjs_dom.prototype.setValue=function(value){fbjs_dom.get_obj(this).value=value;return this;}
fbjs_dom.prototype.getValue=function(){var obj=fbjs_dom.get_obj(this);if(obj.tagName=='SELECT'){var si=obj.selectedIndex;if(si==-1){return null;}else{if(obj.options[si].getAttribute('value')==null){return undefined;}else{return obj.value;}}}else{return fbjs_dom.get_obj(this).value;}}
fbjs_dom.prototype.getSelectedIndex=function(){return fbjs_dom.get_obj(this).selectedIndex;}
fbjs_dom.prototype.setSelectedIndex=function(si){fbjs_dom.get_obj(this).selectedIndex=si;return this;}
fbjs_dom.prototype.getChecked=function(){return fbjs_dom.get_obj(this).checked;}
fbjs_dom.prototype.setChecked=function(c){fbjs_dom.get_obj(this).checked=c;return this;}
fbjs_dom.prototype.getSelected=function(){return fbjs_dom.get_obj(this).selected;}
fbjs_dom.prototype.setSelected=function(s){fbjs_dom.get_obj(this).selected=s;return this;}
fbjs_dom.set_style=function(obj,style,value){if(typeof style=='string'){if(style=='opacity'){CSS.setOpacity(obj,parseFloat(value,10));}else{value=fbjs_sandbox.safe_string(value);if(fbjs_dom.css_regex.test(value)){obj.style[style]=value;}else{fbjs_console.error(style+': '+value+' is not a valid CSS style');}}}else{for(var i in style){fbjs_dom.set_style(obj,i,style[i]);}}}
fbjs_dom.css_regex=/^(?:[\w\-#%+]+|rgb\(\d+ *, *\d+, *\d+\)|url\('?http[^ ]+?'?\)| +)*$/i
fbjs_dom.prototype.setStyle=function(style,value){fbjs_dom.set_style(fbjs_dom.get_obj(this),style,value);return this;}
fbjs_dom.prototype.getStyle=function(style_str){return fbjs_dom.get_obj(this).style[$FBJS.idx(style_str)];}
fbjs_dom.prototype.setHref=function(href){href=fbjs_sandbox.safe_string(href);if(fbjs_dom.href_regex.test(href)){fbjs_dom.get_obj(this).href=href;return this;}else{fbjs_console.error(href+' is not a valid hyperlink');}}
fbjs_dom.href_regex=/^(?:https?|mailto|ftp|aim|irc|itms|gopher|\/|#)/;fbjs_dom.sanitizeUri=function(href){var uri=new URI().parse(href);for(key in uri.getQueryData()){if(key.startsWith("_fb")){uri.removeQueryData(key);}}
return uri.toString();}
fbjs_dom.prototype.getHref=function(){return fbjs_dom.sanitizeUri(fbjs_dom.get_obj(this).href);}
fbjs_dom.prototype.setAction=function(a){a=fbjs_sandbox.safe_string(a);if(fbjs_dom.href_regex.test(a)){fbjs_dom.get_obj(this).action=a;return this;}else{fbjs_console.error(a+' is not a valid hyperlink');}}
fbjs_dom.prototype.getAction=function(){return fbjs_dom.get_obj(this).action;}
fbjs_dom.prototype.setMethod=function(m){m=fbjs_sandbox.safe_string(m);fbjs_dom.get_obj(this).method=m.toLowerCase()=='get'?'get':'post';return this;}
fbjs_dom.prototype.getMethod=function(){return fbjs_dom.get_obj(this).method;}
fbjs_dom.prototype.setSrc=function(src){src=fbjs_sandbox.safe_string(src);if(fbjs_dom.href_regex.test(src)){fbjs_dom.get_obj(this).src=src;return this;}else{fbjs_console.error(src+' is not a valid hyperlink');}}
fbjs_dom.prototype.getSrc=function(){return fbjs_dom.get_obj(this).src;}
fbjs_dom.prototype.setTarget=function(target){fbjs_dom.get_obj(this).target=target;return this;}
fbjs_dom.prototype.getTarget=function(){return fbjs_dom.get_obj(this).target;}
fbjs_dom.prototype.setClassName=function(classname){fbjs_dom.get_obj(this).className=classname;return this;}
fbjs_dom.prototype.getClassName=function(){return fbjs_dom.get_obj(this).className;}
fbjs_dom.prototype.hasClassName=function(classname){return CSS.hasClass(fbjs_dom.get_obj(this),classname);}
fbjs_dom.prototype.addClassName=function(classname){CSS.addClass(fbjs_dom.get_obj(this),classname);return this;}
fbjs_dom.prototype.removeClassName=function(classname){CSS.removeClass(fbjs_dom.get_obj(this),classname);return this;}
fbjs_dom.prototype.toggleClassName=function(classname){this.hasClassName(classname)?this.removeClassName(classname):this.addClassName(classname);return $FBJS.ref(this);}
fbjs_dom.prototype.getTagName=function(){return fbjs_dom.get_obj(this).tagName;}
fbjs_dom.prototype.getNodeType=function(){return fbjs_dom.get_obj(this).nodeType;}
fbjs_dom.prototype.getId=function(){var id=fbjs_dom.get_obj(this).id;if(id){return id.replace(/^app\d+_/,'');}else{return id;}}
fbjs_dom.prototype.setId=function(id){var data=fbjs_dom.get_data(this);data.obj.id=['app',data.appid,'_',id].join('');return this;}
fbjs_dom.prototype.setDir=function(dir){fbjs_dom.get_obj(this).dir=dir;return this;}
fbjs_dom.prototype.getDir=function(dir){return fbjs_dom.get_obj(this).dir;}
fbjs_dom.prototype.getdir=function(dir){return fbjs_dom.get_obj(this).dir;}
fbjs_dom.prototype.getClientWidth=function(){return fbjs_dom.get_obj(this).clientWidth;}
fbjs_dom.prototype.getClientHeight=function(){return fbjs_dom.get_obj(this).clientHeight;}
fbjs_dom.prototype.getOffsetWidth=function(){return fbjs_dom.get_obj(this).offsetWidth;}
fbjs_dom.prototype.getOffsetHeight=function(){return fbjs_dom.get_obj(this).offsetHeight;}
fbjs_dom.prototype.getAbsoluteLeft=function(){return elementX(fbjs_dom.get_obj(this));}
fbjs_dom.prototype.getAbsoluteTop=function(){return elementY(fbjs_dom.get_obj(this));}
fbjs_dom.prototype.getScrollHeight=function(){return fbjs_dom.get_obj(this).scrollHeight;}
fbjs_dom.prototype.getScrollWidth=function(val){return fbjs_dom.get_obj(this).scrollWidth;}
fbjs_dom.prototype.getScrollTop=function(){return fbjs_dom.get_obj(this).scrollTop;}
fbjs_dom.prototype.setScrollTop=function(val){fbjs_dom.get_obj(this).scrollTop=val;return this;}
fbjs_dom.prototype.getScrollLeft=function(){return fbjs_dom.get_obj(this).scrollLeft;}
fbjs_dom.prototype.setScrollLeft=function(val){fbjs_dom.get_obj(this).scrollLeft=val;return this;}
fbjs_dom.prototype.getTabIndex=function(){return fbjs_dom.get_obj(this).tabIndex;}
fbjs_dom.prototype.setTabIndex=function(tabindex){fbjs_dom.get_obj(this).tabIndex=tabindex;return this;}
fbjs_dom.prototype.getTitle=function(){return fbjs_dom.get_obj(this).title;}
fbjs_dom.prototype.setTitle=function(title){fbjs_dom.get_obj(this).title=title;return this;}
fbjs_dom.prototype.getRowSpan=function(){return fbjs_dom.get_obj(this).rowSpan;}
fbjs_dom.prototype.setRowSpan=function(rowSpan){fbjs_dom.get_obj(this).rowSpan=rowSpan;return this;}
fbjs_dom.prototype.getColSpan=function(){return fbjs_dom.get_obj(this).colSpan;}
fbjs_dom.prototype.setColSpan=function(colSpan){fbjs_dom.get_obj(this).colSpan=colSpan;return this;}
fbjs_dom.prototype.getName=function(){return fbjs_dom.get_obj(this).name;}
fbjs_dom.prototype.setName=function(name){fbjs_dom.get_obj(this).name=name;return this;}
fbjs_dom.prototype.getCols=function(){return fbjs_dom.get_obj(this).cols;}
fbjs_dom.prototype.setCols=function(cols){fbjs_dom.get_obj(this).cols=cols;return this;}
fbjs_dom.prototype.getRows=function(){return fbjs_dom.get_obj(this).rows;}
fbjs_dom.prototype.setRows=function(rows){fbjs_dom.get_obj(this).rows=rows;return this;}
fbjs_dom.prototype.getAccessKey=function(){return fbjs_dom.get_obj(this).accessKey;}
fbjs_dom.prototype.setAccessKey=function(accesskey){fbjs_dom.get_obj(this).accessKey=accesskey;return this;}
fbjs_dom.prototype.setDisabled=function(disabled){fbjs_dom.get_obj(this).disabled=disabled;return this;}
fbjs_dom.prototype.getDisabled=function(){return fbjs_dom.get_obj(this).disabled;}
fbjs_dom.prototype.setMaxLength=function(length){fbjs_dom.get_obj(this).maxLength=length;return this;}
fbjs_dom.prototype.getMaxLength=function(){return fbjs_dom.get_obj(this).maxLength;}
fbjs_dom.prototype.setReadOnly=function(readonly){fbjs_dom.get_obj(this).readOnly=readonly;return this;}
fbjs_dom.prototype.getReadOnly=function(){return fbjs_dom.get_obj(this).readOnly;}
fbjs_dom.prototype.setType=function(type){type=fbjs_sandbox.safe_string(type);fbjs_dom.get_obj(this).type=type;return this;}
fbjs_dom.prototype.getType=function(){return fbjs_dom.get_obj(this).type;}
fbjs_dom.prototype.getSelection=function(){var obj=fbjs_dom.get_obj(this);return DOM.getCaretPosition(obj);}
fbjs_dom.prototype.setSelection=function(start,end){var obj=fbjs_dom.get_obj(this);DOM.setCaretPosition(obj,start,end);return this;}
fbjs_dom.prototype.submit=function(){fbjs_dom.get_obj(this).submit();return this;}
fbjs_dom.prototype.focus=function(){fbjs_dom.get_obj(this).focus();return this;}
fbjs_dom.prototype.select=function(){fbjs_dom.get_obj(this).select();return this;}
fbjs_dom.eventHandler=function(event){var e=(event instanceof fbjs_event)?event:new fbjs_event(event?event:window.event,this[2]);if(e.ignore){return;}
var r=this[1].call(this[0],e);if(r===false){e.preventDefault();}
return fbjs_event.destroy(e);}
fbjs_dom.prototype.addEventListener=function(type,func){type=fbjs_sandbox.safe_string(type.toLowerCase());if(!fbjs_main.allowed_events[type]){fbjs_console.error(type+' is not an allowed event');return false;}
var data=fbjs_dom.get_data(this);var obj=data.obj;if(!data.events[type]){data.events[type]=[];}
var handler=null;var listener=null;if(fbjs_sandbox.quicklingEnabled()){listener=Event.listen(obj,type,handler=fbjs_dom.eventHandler.bind([this,func,data.appid]));}else{if(obj.addEventListener){obj.addEventListener(type,handler=fbjs_dom.eventHandler.bind([this,func,data.appid]),false);}else if(obj.attachEvent){obj.attachEvent('on'+type,handler=fbjs_dom.eventHandler.bind([this,func,data.appid]));}}
data.events[type].push({func:func,handler:handler,listener:listener});return $FBJS.ref(this);}
fbjs_dom.prototype.removeEventListener=function(type,func){type=type.toLowerCase();var data=fbjs_dom.get_data(this);var obj=data.obj;if(data.events[type]){for(var i=0,il=data.events[type].length;i<il;i++){if(data.events[type][i].func==func){if(fbjs_sandbox.quicklingEnabled()){data.events[type][i].listener.remove();}else{if(obj.removeEventListener){obj.removeEventListener(type,data.events[type][i].handler,false);}else if(obj.detachEvent){obj.detachEvent('on'+type,data.events[type][i].handler);}}
data.events[type].splice(i,1);}}}
if(!fbjs_sandbox.quicklingEnabled()&&obj['on'+type]==func){obj['on'+type]=null;}
return this;}
fbjs_dom.prototype.listEventListeners=function(type){type=type.toLowerCase();var data=fbjs_dom.get_data(this);var events=[];if(data.events[type]){for(var i=0,il=data.events[type].length;i<il;i++){events.push(data.events[type].func);}}
if(data.obj['on'+type]){events.push(data.obj['on'+type]);}
return events;}
fbjs_dom.prototype.purgeEventListeners=function(type){type=type.toLowerCase();var data=fbjs_dom.get_data(this);var obj=data.obj;if(data.events[type]){for(var i=0,il=data.events[type].length;i<il;i++){if(fbjs_sandbox.quicklingEnabled()){data.events[type][i].listener.remove();}else{if(obj.removeEventListener){obj.removeEventListener(type,data.events[type][i].handler,false);}else if(obj.detachEvent){obj.detachEvent('on'+type,data.events[type][i].handler);}}}}
if(!fbjs_sandbox.quicklingEnabled()&&obj['on'+type]){obj['on'+type]=null;}
return this;}
fbjs_dom.prototype.callSWF=function(method){var obj=fbjs_dom.get_data(this).obj;var args=new Array(arguments.length-1);for(var i=1;i<arguments.length;i++){args[i-1]=arguments[i];}
if(ua.ie()<8){var id=0;for(var i=0;i<obj.childNodes.length;i++){if(obj.childNodes[i].name=="fbjs"){id=obj.childNodes[i].getAttribute("value");}}
var fbjsBridge=window.so_swf_fbjs;}else{var id=obj.getAttribute("fbjs");var fbjsBridge=document.so_swf_fbjs;}
if(fbjsBridge.length!==undefined){fbjsBridge=fbjsBridge[0];}
return fbjsBridge.callFlash(id,method,args);}
function fbjs_fbml_dom(type,appid){var data=fbjs_private.get(this);data.type=type;data.appid=appid;}
fbjs_fbml_dom.get_obj=function(instance){var data=fbjs_private.get(instance);if(!data.obj){data.obj=document.createElement('div');data.obj.className='__fbml_tag';}
return data.obj;}
fbjs_fbml_dom.render=function(instance){var data=fbjs_private.get(instance);if(data.rendered){return;}
if(!data.id){data.id='swf'+parseInt(Math.random()*999999);}
switch(data.type){case'fb:swf':var flash_obj=new SWFObject(data.swf_src,data.id,data.width,data.height,['5.0.0'],data.bg_color?data.bg_color:'000000');var flash_params={loop:true,quality:true,scale:true,align:true,salign:true};for(i in flash_params){if(data[i]){flash_obj.addParam(i,data[i]);}}
flash_obj.addParam('wmode','transparent');flash_obj.addParam('allowScriptAccess','never');if(data.flash_vars){for(var i in data.flash_vars){flash_obj.addVariable(i,data.flash_vars[i]);}}
var sandbox=fbjs_sandbox.instances['a'+data.appid];if(sandbox.validation_vars){for(var i in sandbox.validation_vars){flash_obj.addVariable(i,sandbox.validation_vars[i]);}}
flash_obj.addVariable('fb_local_connection',sandbox.bridgeHash);var fbjs_conn='_'+'swf'+parseInt(Math.random()*999999);flash_obj.addVariable('fb_fbjs_connection',fbjs_conn);flash_obj.addParam('fbjs',fbjs_conn);if(data.wait_for_click){var img=document.createElement('img');img.src=data.img_src;if(data.width){img.width=data.width;}
if(data.height){img.height=data.height;}
if(data.img_style){fbjs_dom.set_style(img,data.img_style);}
if(data.img_class){img.className=data.img_class;}
var anchor=document.createElement('a');anchor.href='#';anchor.onclick=function(){flash_obj.write(data.obj);return false;}
anchor.appendChild(img);data.obj.appendChild(anchor);}else{flash_obj.write(data.obj);}
break;}}
fbjs_fbml_dom.prototype.setId=function(id){var data=fbjs_private.get(this);data.id=['app',data.appid,'_',id].join('');return $FBJS.ref(this);}
fbjs_fbml_dom.prototype.setSWFSrc=function(swf){var data=fbjs_private.get(this);swf=fbjs_sandbox.safe_string(swf);if(fbjs_dom.href_regex.test(swf)){data.swf_src=swf;}else{fbjs_console.error(swf+' is not a valid swf');}}
fbjs_fbml_dom.prototype.setImgSrc=function(img){var data=fbjs_private.get(this);img=fbjs_sandbox.safe_string(img);if(fbjs_dom.href_regex.test(img)){data.img_src=img;}else{fbjs_console.error(img+' is not a valid src');}
return $FBJS.ref(this);}
fbjs_fbml_dom.prototype.setWidth=function(width){var data=fbjs_private.get(this);data.width=(/\d+%?/.exec(width)||[]).pop();return $FBJS.ref(this);}
fbjs_fbml_dom.prototype.setHeight=function(height){var data=fbjs_private.get(this);data.height=(/\d+%?/.exec(height)||[]).pop();return $FBJS.ref(this);}
fbjs_fbml_dom.prototype.setImgStyle=function(style,value){var data=fbjs_private.get(this);var style_obj=data.img_style?data.img_style:data.img_style={};if(typeof style=='string'){style_obj[style]=value;}else{for(var i in style){this.setImgStyle(i,style[i]);}}
return $FBJS.ref(this);}
fbjs_fbml_dom.prototype.setImgClass=function(img_class){var data=fbjs_private.get(this);data.img_class=img_class;return $FBJS.ref(this);}
fbjs_fbml_dom.prototype.setFlashVar=function(key,val){var data=fbjs_private.get(this);var flash_vars=data.flash_vars?data.flash_vars:data.flash_vars={};flash_vars[key]=val;return $FBJS.ref(this);}
fbjs_fbml_dom.prototype.setSWFBGColor=function(bg){var data=fbjs_private.get(this);if(fbjs_dom.css_regex.text(bg)){data.bg_color=bg;}else{fbjs_console.error(bg+' is not a valid background color.');}
return $FBJS.ref(this);}
fbjs_fbml_dom.prototype.setWaitForClick=function(wait){var data=fbjs_private.get(this);data.wait_for_click=wait;return $FBJS.ref(this);}
fbjs_fbml_dom.prototype.setLoop=function(val){var data=fbjs_private.get(this);data.loop=val;return $FBJS.ref(this);}
fbjs_fbml_dom.prototype.setQuality=function(val){var data=fbjs_private.get(this);data.quality=val;return $FBJS.ref(this);}
fbjs_fbml_dom.prototype.setScale=function(val){var data=fbjs_private.get(this);data.scale=val;return $FBJS.ref(this);}
fbjs_fbml_dom.prototype.setAlign=function(val){var data=fbjs_private.get(this);data.align=val;return $FBJS.ref(this);}
fbjs_fbml_dom.prototype.setSAlign=function(val){var data=fbjs_private.get(this);data.salign=val;return $FBJS.ref(this);}
function fbjs_event(event,appid){if(!fbjs_event.hacks){fbjs_event.hacks=true;fbjs_event.should_check_double_arrows=ua.safari()&&(ua.safari()<500);fbjs_event.arrow_toggle={};}
for(var i in fbjs_event.allowed_properties){this[i]=event[i];}
this.keyCode=this.keyCode||event.charCode;var target=null;if(event.target){target=event.target;}else if(event.srcElement){target=event.srcElement;}
if(target&&target.nodeType==3){target=target.parentNode;}
this.target=fbjs_dom.get_instance(target,appid);var event_pos=Vector2.getEventPosition(event);this.pageX=event_pos.x;this.pageY=event_pos.y;if(fbjs_event.should_check_double_arrows&&this.keyCode>=37&&this.keyCode<=40){fbjs_event.arrow_toggle[this.type]=!fbjs_event.arrow_toggle[this.type];if(fbjs_event.arrow_toggle[this.type]){this.ignore=true;}}
fbjs_private.get(this).event=event;}
fbjs_event.allowed_properties={type:true,ctrlKey:true,keyCode:true,metaKey:true,shiftKey:true}
fbjs_event.prototype.preventDefault=function(){var data=fbjs_private.get(this);if(!data.prevented&&data.event.preventDefault){data.event.preventDefault();data.prevented=true;}
data.return_value=false;}
fbjs_event.prototype.stopPropagation=function(){var event=fbjs_private.get(this).event;if(event.stopPropagation){event.stopPropagation();}else{event.cancelBubble=true;}}
fbjs_event.destroy=function(obj){var return_value=fbjs_private.get(obj).return_value;fbjs_private.remove(obj);delete obj.target;return return_value==undefined?true:return_value;}
function fbjs_math(){}
fbjs_math.prototype.abs=Math.abs;fbjs_math.prototype.acos=Math.acos;fbjs_math.prototype.asin=Math.asin;fbjs_math.prototype.atan=Math.atan;fbjs_math.prototype.atan2=Math.atan2;fbjs_math.prototype.ceil=Math.ceil;fbjs_math.prototype.cos=Math.cos;fbjs_math.prototype.exp=Math.exp;fbjs_math.prototype.floor=Math.floor;fbjs_math.prototype.log=Math.log;fbjs_math.prototype.max=Math.max;fbjs_math.prototype.min=Math.min;fbjs_math.prototype.pow=Math.pow;fbjs_math.prototype.random=Math.random;fbjs_math.prototype.round=Math.round;fbjs_math.prototype.sin=Math.sin;fbjs_math.prototype.sqrt=Math.sqrt;fbjs_math.prototype.tan=Math.tan;fbjs_math.prototype.valueOf=Math.valueOf;fbjs_math.prototype.E=Math.E;fbjs_math.prototype.LN2=Math.LN2;fbjs_math.prototype.LN10=Math.LN10;fbjs_math.prototype.LOG2E=Math.LOG2E;fbjs_math.prototype.PI=Math.PI;fbjs_math.prototype.SQRT1_2=Math.SQRT1_2;fbjs_math.prototype.SQRT2=Math.SQRT2;function fbjs_string(){}
fbjs_string.prototype.fromCharCode=String.fromCharCode;function fbjs_date(){var date=function(){var ret=new Date();if(arguments.length){ret.setFullYear.apply(ret,arguments);}
return ret;}
date.parse=Date.parse;return date;}
function fbjs_regexp(){var regexp=function(){var ret=arguments.length?new RegExp(arguments[0],arguments[1]):new RegExp();return ret;}
return regexp;}
function fbjs_console(){}
fbjs_console.error=function(text){if(typeof console!='undefined'&&console.error){console.error(text);}}
fbjs_console.render=function(obj){if(obj&&typeof obj.__priv!='undefined'){var new_obj={};for(var i in obj){new_obj[i]=obj[i];}
delete new_obj.__priv;delete new_obj.__private;for(var i in new_obj){new_obj[i]=fbjs_console.render(new_obj[i]);}
var priv=fbjs_private.get(obj);for(var i in priv){new_obj['PRIV_'+i]=priv[i];}
if(obj.__private){var priv=fbjs_private.get(obj.__private);for(var i in priv){new_obj['PRIV_'+i]=priv[i];}}
return new_obj;}else if(obj&&typeof obj.__instance!='undefined'&&obj.setInnerFBML){var new_obj={};for(var i in obj){new_obj[i]=obj[i];}
delete new_obj.__instance;new_obj.PRIV_obj=fbjs_dom.get_obj(obj);return new_obj;}else if(obj&&typeof obj=='object'&&obj.ownerDocument!=document){var new_obj=obj instanceof Array?[]:{};var changed=false;for(var i in obj){obj instanceof Array?new_obj.push(fbjs_console.render(obj[i])):new_obj[i]=fbjs_console.render(obj[i]);if(new_obj[i]!=obj[i]){changed=true;}}
return changed?new_obj:obj;}else{return obj;}}
fbjs_console.render_args=function(args){var new_args=[];for(var i=0;i<args.length;i++){new_args[i]=fbjs_console.render(args[i]);}
return new_args;}
if(typeof console!='undefined'){for(var i in console){fbjs_console.prototype[i]=console[i];}}
fbjs_console.prototype.debug=function(){if(typeof console!='undefined'&&console.debug){console.debug.apply(console,fbjs_console.render_args(arguments));}}
fbjs_console.prototype.log=function(){if(typeof console!='undefined'&&console.log){console.log.apply(console,fbjs_console.render_args(arguments));}}
fbjs_console.prototype.warn=function(){if(typeof console!='undefined'&&console.warn){console.warn.apply(console,fbjs_console.render_args(arguments));}}
fbjs_console.prototype.error=function(){if(typeof console!='undefined'&&console.error){console.error.apply(console,fbjs_console.render_args(arguments));}}
fbjs_console.prototype.assert=function(){if(typeof console!='undefined'&&console.assert){console.assert.apply(console,fbjs_console.render_args(arguments));}}
fbjs_console.prototype.dir=function(){if(typeof console!='undefined'&&console.dir){console.dir.apply(console,fbjs_console.render_args(arguments));}}
fbjs_console.prototype.group=function(){if(typeof console!='undefined'&&console.group){console.group.apply(console,fbjs_console.render_args(arguments));}}
fbjs_console.prototype.dirxml=function(obj){if(typeof console!='undefined'&&console.dirxml){if(obj.get_obj){console.dirxml(obj.get_obj(obj));}else{console.dirxml(obj);}}}
function fbjs_ajax(appid){var proto=function(){}
for(var i in fbjs_ajax.prototype){proto.prototype[i]=fbjs_ajax.prototype[i];}
var priv=fbjs_private.get(proto.prototype.__private={});priv.appid=appid;priv.sandbox=fbjs_sandbox.instances['a'+appid];priv.request=null;proto.JSON=fbjs_ajax.JSON;proto.FBML=fbjs_ajax.FBML;proto.RAW=fbjs_ajax.RAW;return proto;}
fbjs_ajax.proxy_url='/fbml/fbjs_ajax_proxy.php';fbjs_ajax.RAW=0;fbjs_ajax.JSON=1;fbjs_ajax.FBML=2;fbjs_ajax.STATUS_WAITING_FOR_USER=1;fbjs_ajax.STATUS_WAITING_FOR_SERVER=2;fbjs_ajax.STATUS_IDLE=0;fbjs_ajax.prototype.responseType=0;fbjs_ajax.prototype.useLocalProxy=false;fbjs_ajax.prototype.requireLogin=false;fbjs_ajax.prototype.status=fbjs_ajax.STATUS_IDLE;fbjs_ajax.tokencount=0;fbjs_ajax.tokens=new Object();fbjs_ajax.flash_success=function(res,t){fbjs_ajax.tokens[t].success(res);};fbjs_ajax.flash_fail=function(t){fbjs_ajax.tokens[t].fail();};fbjs_ajax.prototype.post=function(url,query){var priv=fbjs_private.get(this.__private);var appid=priv.appid;var post_form_id=ge('post_form_id');if(!priv.sandbox.data.installed&&this.requireLogin){this.status=fbjs_ajax.STATUS_WAITING_FOR_USER;FBML.requireLogin(appid,function(){this.status=fbjs_ajax.STATUS_READY;priv.sandbox.data.installed=true;this.post(url,query);}.bind(this),fbjs_ajax.errorHandler.bind(this));return;}
if(this.useLocalProxy&&window.localProxy.callUrl&&this.responseType!=fbjs_ajax.FBML){fbjs_ajax.tokencount++;fbjs_ajax.tokens[fbjs_ajax.tokencount]={"success":function(e){this.status=fbjs_ajax.STATUS_READY;this.ondone(e);}.bind(this),"fail":fbjs_ajax.errorHandler.bind(this)};var usejson=(this.responseType==fbjs_ajax.JSON);var callUrl=localProxy.callUrl(url+'?query='+query,usejson,"fbjs_ajax.flash_success","fbjs_ajax.flash_fail",fbjs_ajax.tokencount);if(!callUrl){(fbjs_ajax.errorHandler.bind(this))();}}else{var data={url:url,query:query,type:this.responseType,require_login:this.requireLogin,fb_mockajax_context:fbjs_sandbox.instances['a'+appid].contextd,fb_mockajax_context_hash:fbjs_sandbox.instances['a'+appid].context,appid:appid};this.status=fbjs_ajax.STATUS_WAITING_FOR_SERVER;priv.request=new AsyncRequest();priv.request.setURI(fbjs_ajax.proxy_url).setData(data).setHandler(fbjs_ajax.doneHandler.bind(this)).setErrorHandler(fbjs_ajax.errorHandler.bind(this)).setTransportErrorHandler(fbjs_ajax.errorHandler.bind(this));if(!this.requireLogin){priv.request.setReadOnly(true);priv.request.specifiesWriteRequiredParams()}
priv.request.send();}}
fbjs_ajax.prototype.abort=function(){var priv=fbjs_private.get(this.__private);if(priv.request){priv.request.setHandler(bagofholding).setErrorHandler(bagofholding).setTransportErrorHandler(bagofholding);}
this.status=fbjs_ajax.STATUS_READY;};fbjs_ajax.doneHandler=function(response){if(!(this.ondone instanceof Function)){this.ondone=function(){};}
this.status=fbjs_ajax.STATUS_READY;var payload=response.getPayload();var data=payload.data;switch(payload.type){case fbjs_ajax.RAW:this.ondone(data);break;case fbjs_ajax.JSON:fbjs_ajax.make_fbjs_recursive(data);this.ondone(data);break;case fbjs_ajax.FBML:this.ondone(new fbjs_fbml_string(data));break;}}
fbjs_ajax.errorHandler=function(){this.status=fbjs_ajax.STATUS_READY;if(this.onerror){this.onerror();}else{fbjs_console.error('There was an uncaught Ajax error. Please attach on onerror handler to properly handle failures.');}}
fbjs_ajax.make_fbjs_recursive=function(obj){for(var i in obj){if(i.substring(0,5)=='fbml_'){obj[i]=new fbjs_fbml_string(obj[i]);}else if(typeof obj[i]=='object'){fbjs_ajax.make_fbjs_recursive(obj[i]);}}}
function fbjs_dialog(appid){var proto=function(type){var priv=fbjs_private.get(this);switch(type){case fbjs_dialog.DIALOG_CONTEXTUAL:priv.dialog=new ContextualDialog();break;case fbjs_dialog.DIALOG_POP:default:priv.dialog=new Dialog();break;}
priv.dialog.setImmediateRendering(true).setClassName('app_content_'+appid).setStackable(true);priv.type=type;priv.ready=false;}
for(var i in fbjs_dialog.prototype){proto.prototype[i]=fbjs_dialog.prototype[i];}
proto.DIALOG_POP=fbjs_dialog.DIALOG_POP;proto.DIALOG_CONTEXTUAL=fbjs_dialog.DIALOG_CONTEXTUAL;return proto;}
fbjs_dialog.DIALOG_POP=1;fbjs_dialog.DIALOG_CONTEXTUAL=2;fbjs_dialog.onconfirm=function(){var hide=true;if(this.onconfirm){if(this.onconfirm()===false){hide=false;}}
if(hide){this.hide();}
return false;}
fbjs_dialog.oncancel=function(){var hide=true;if(this.oncancel){if(this.oncancel()===false){hide=false;}}
if(hide){this.hide();}
return false;}
fbjs_dialog.build_dialog=function(){var priv=fbjs_private.get(this);if(!priv.ready){priv.dialog._buildDialog();priv.ready=true;}}
fbjs_dialog.prototype.setStyle=function(style,value){var priv=fbjs_private.get(this);fbjs_dialog.build_dialog.call(this);var obj=null;if(style=='width'||style=='height'){obj=priv.type==fbjs_dialog.DIALOG_CONTEXTUAL?priv.dialog._frame:priv.dialog._frame.parentNode;}else{obj=priv.dialog._content;}
fbjs_dom.set_style(obj,style,value);return $FBJS.ref(this);}
fbjs_dialog.prototype.showMessage=function(title,content,button1){this.showChoice(title,content,button1,false);return $FBJS.ref(this);}
fbjs_dialog.prototype.showChoice=function(title,content,button1,button2){var dialog=fbjs_private.get(this).dialog;fbjs_dialog.build_dialog.call(this);var buttons=[];var button1label=button1?fbjs_fbml_string.get(button1):_tx("Okay");buttons.push({label:button1label,name:'button1',handler:bind(this,fbjs_dialog.onconfirm)});if(button2||button2===undefined){var button2label=button2?fbjs_fbml_string.get(button2):_tx("Cancel");buttons.push({label:button2label,name:'button2',handler:bind(this,fbjs_dialog.oncancel)});}
dialog.setTitle(fbjs_fbml_string.get(title)).setBody(fbjs_fbml_string.get(content)).setButtons(buttons).show();dialog._content.id='app_content_'+gen_unique();return $FBJS.ref(this);}
fbjs_dialog.prototype.setContext=function(node){var dialog=fbjs_private.get(this).dialog;var obj=fbjs_dom.get_obj(node);dialog.setContext(obj);return $FBJS.ref(this);}
fbjs_dialog.prototype.hide=function(){var dialog=fbjs_private.get(this).dialog;dialog.hide();return $FBJS.ref(this);}
function fbjs_animation(){var proto=function(obj){if(this==window){return new arguments.callee(fbjs_dom.get_obj(obj));}else{fbjs_private.get(this).animation=new animation(obj);}}
for(var i in fbjs_animation.prototype){proto.prototype[i]=fbjs_animation.prototype[i];}
proto.ease={begin:animation.ease.begin,end:animation.ease.end,both:animation.ease.both};return proto;}
fbjs_animation.prototype.stop=function(){fbjs_private.get(this).animation.stop();return this;}
fbjs_animation.prototype.to=function(attr,val){fbjs_private.get(this).animation.to(attr,val);return this;}
fbjs_animation.prototype.by=function(attr,val){fbjs_private.get(this).animation.by(attr,val);return this;}
fbjs_animation.prototype.from=function(attr,val){fbjs_private.get(this).animation.from(attr,val);return this;}
fbjs_animation.prototype.duration=function(duration){fbjs_private.get(this).animation.duration(duration);return this;}
fbjs_animation.prototype.checkpoint=function(length,callback){fbjs_private.get(this).animation.checkpoint(length,typeof callback=='function'?bind(this,callback):null);return this;}
fbjs_animation.prototype.ondone=function(callback){if(typeof callback=='function'){fbjs_private.get(this).animation.checkpoint(bind(this,callback));return this;}}
fbjs_animation.prototype.blind=function(){fbjs_private.get(this).animation.blind();return this;}
fbjs_animation.prototype.show=function(){fbjs_private.get(this).animation.show();return this;}
fbjs_animation.prototype.hide=function(){fbjs_private.get(this).animation.hide();return this;}
fbjs_animation.prototype.ease=function(callback){fbjs_private.get(this).animation.ease(callback);return this;}
fbjs_animation.prototype.go=function(){fbjs_private.get(this).animation.go();return this;}
function fbjs_livemessage(appid){var proto=function(event_name,callback_fn){if(!event_name){throw('Parameter "event_name" must be non-empty.');}
var priv=fbjs_private.get(this);priv.appid=appid;priv.event_name=event_name;priv.send_success_handler=null;priv.send_error_handler=null;priv.livemessage=new LiveMessageReceiver(event_name).setAppId(appid).setHandler(callback_fn).register();}
for(var i in fbjs_livemessage.prototype){proto.prototype[i]=fbjs_livemessage.prototype[i];}
return proto;}
fbjs_livemessage.prototype.send=function(recipient,message){if(!recipient){throw('Parameter "recipient" must be non-empty.');}
var priv=fbjs_private.get(this);new AsyncRequest().setURI('/fbml/ajax/livemessage_send.php').setData({app_id:priv.appid,recipient:recipient,event_name:priv.event_name,message:JSON.encode(message)}).setMethod('POST').setHandler(function(response){payload=response.getPayload();if(payload.error_code){var error_handler=priv.send_error_handler;if(error_handler){error_handler(payload.error_code,payload.error_msg,recipient,message);}}else{var success_handler=priv.send_success_handler;if(success_handler){success_handler(recipient,message);}}}).setErrorHandler(function(response){var error_handler=priv.send_error_handler;if(error_handler){error_handler(response.getError(),response.getErrorSummary(),recipient,message);}}).send();}
fbjs_livemessage.prototype.setSendSuccessHandler=function(callback_fn){var priv=fbjs_private.get(this);priv.send_success_handler=callback_fn;return $FBJS.ref(this);}
fbjs_livemessage.prototype.setSendErrorHandler=function(callback_fn){var priv=fbjs_private.get(this);priv.send_error_handler=callback_fn;return $FBJS.ref(this);}
fbjs_livemessage.prototype.setShutdownHandler=function(callback_fn){var priv=fbjs_private.get(this);priv.livemessage.setShutdownHandler(callback_fn);return $FBJS.ref(this);}
fbjs_livemessage.prototype.setRestartHandler=function(callback_fn){var priv=fbjs_private.get(this);priv.livemessage.setRestartHandler(callback_fn);return $FBJS.ref(this);}
function fbjs_fbml_string(html,js){html=HTML(html);if(js){html.setAction(js);}
fbjs_private.get(this).htmlstring=html;}
fbjs_fbml_string.get=function(html){if(html instanceof fbjs_fbml_string){return fbjs_private.get(html).htmlstring.toString();}else{return htmlspecialchars(fbjs_sandbox.safe_string(html));}}
fbjs_private=new Object();fbjs_private.len=0;fbjs_private.get=function(instance){if(typeof instance!='object'){return null;}
if(instance==window){throw('Invalid object supplied');}
if(instance.__priv==undefined){var priv={data:{},instance:instance};instance.__priv=fbjs_private.len;fbjs_private.len++;priv.instance=instance;fbjs_private[instance.__priv]=priv;return priv.data;}else if(typeof instance.__priv=='number'){var priv=fbjs_private[instance.__priv];if(priv.instance==instance){return priv.data;}else{throw('Invalid object supplied to fbjs_private.get');}}else{throw('Invalid object supplied to fbjs_private.get');}}
fbjs_private.remove=function(instance){if(instance.__priv!=undefined){if(fbjs_private[instance.__priv].instance==instance){delete fbjs_private[instance.__priv];delete instance.__priv;}}}
function fbjs_fbml_sanitize(appid){this.appid=appid;this.main=eval('a'+appid+'_document');return this;}
fbjs_fbml_sanitize.prototype.parseFBML=function(text){if(window.ActiveXObject){var doc=new ActiveXObject("Microsoft.XMLDOM");doc.async="false";doc.loadXML(text);if(doc.parseError.reason){fbjs_console.error(doc.parseError.reason);return null;}}
else{var parser=new DOMParser();var doc=parser.parseFromString(text,"text/xml");if(doc.documentElement.nodeName=='parsererror'){fbjs_console.error(doc.documentElement.textContent);return null;}}
var x=doc.documentElement;return this.processElement(x);};fbjs_fbml_sanitize.prototype.processElement=function(node){if(node.nodeType==3){return new fbjs_dom(document.createTextNode(node.nodeValue),this.appid);}else if(node.nodeType!=1){return null;}
var domElement=this.main.createElement(node.nodeName);if(!domElement)return null;for(var x=0;x<node.attributes.length;x++){var attr=node.attributes[x];var aname=attr.nodeName;if(aname=='style'){var elems=attr.nodeValue.split(";");for(var i=0;i<elems.length;i++){if(elems[i]!=''){var props=elems[i].split(":");domElement.setStyle(props[0],props[1].replace(/^\s+|\s+$/g,''));}}}else{setter=fbjs_dom.attr_setters[aname];if(domElement[setter]){domElement[setter](attr.nodeValue);}}}
for(var x=0;x<node.childNodes.length;x++){var child=node.childNodes[x];var ch=this.processElement(child);if(ch){domElement.appendChild(ch);}}
return domElement;};

if (window.Bootloader) { Bootloader.done(["js\/fbjs.js"]); }
/*    HTTP Host:  b.static.ak.fbcdn.net                                        */
/*    Generated:  September 9th 2009 11:41:38 AM PDT                           */
/*      Machine:  10.16.139.104                                                */
/*       Source:  Local Cache                                                  */
/*     Location:  rsrc:4:l5l0ynp6                                              */
/*       Locale:  nu_ll                                                        */
/*         Path:  js/bwfnb82f4jk0osk8.pkg.js                                   */


function PageCacheFeedTracking(){this.data=[];}
PageCacheFeedTracking.instance=null;PageCacheFeedTracking.getInstance=function(){if(!PageCacheFeedTracking.instance){PageCacheFeedTracking.instance=new PageCacheFeedTracking();}
return PageCacheFeedTracking.instance;};copy_properties(PageCacheFeedTracking.prototype,{register:function(metadata){var newEntry={'meta':metadata};this.data.push(newEntry);},dispatch:function(){var async=new AsyncRequest().setMethod('POST').setURI('/ajax/feed_tracking_pagecache.php').setReadOnly(true).setOption('bundle',true).setData({'data':this.data}).send();return true;}});

function InstrumentedLogger(instance_id){if(this===window){return new InstrumentedLogger(instance_id);}
if(InstrumentedLogger._instances[instance_id]){return InstrumentedLogger._instances[instance_id];}
copy_properties(this,{id:instance_id,_phases:{}});return InstrumentedLogger._instances[instance_id]=this;}
copy_properties(InstrumentedLogger,{_instances:{}});copy_properties(InstrumentedLogger.prototype,{beginPhase:function(name){if(this._phases[name]&&this._phases[name].start){this.endPhase(name);}
if(typeof(this._phases[name])=='undefined'){this._phases[name]={start:0,count:0,duration:0};}
this._phases[name].start=new Date().getTime();return this;},endPhase:function(name){var phase=this._phases[name];if(phase&&phase.start){phase.count++;phase.duration+=new Date().getTime()-phase.start;phase.start=null;}
return this;},dumpAndReset:function(){this.dump();return this.reset();},dump:function(){for(var name in this._phases){var p=this._phases[name];var label=(this.id?this.id+'::':'')+name;Util.warn(' %s %f ms [%d ms / %d]',label,p.duration/p.count,p.duration,p.count);}
return this;},get:function(name){if(this._phases[name]){return this._phases[name].duration/this._phases[name].count;}
return 0;},reset:function(){this._phases={};return this;}});InstrumentedLogger.prototype.b=InstrumentedLogger.prototype.beginPhase;InstrumentedLogger.prototype.e=InstrumentedLogger.prototype.endPhase;InstrumentedLogger.prototype.d=InstrumentedLogger.prototype.dump;InstrumentedLogger.prototype.D=InstrumentedLogger.prototype.dumpAndReset;InstrumentedLogger.prototype.r=InstrumentedLogger.prototype.reset;var IL=InstrumentedLogger;

function Template(source){copy_properties(this,{_templateSource:source});}
copy_properties(Template,{_operatorRepeat:function(s,data){var value='';var parts=s.match(/([^:]*):(.*)/);if(!parts){Util.warn('Invalid template call: %s',s);}else if(!TemplateRegistry.hasTemplate(parts[2])){Util.warn('Template not available: %s',s);}else{if(data[parts[1]]){var template=TemplateRegistry.getTemplate(parts[2]);var data_objs=arrayize(data[parts[1]]);value+=data_objs.map(function(template,data){return template.render(data);}.curry(template)).join(' ');}}
return value;}});copy_properties(Template.prototype,{getSource:function(){return this._templateSource;},render:function(template_data){var replaceFunction=function(data,all_matches,operator,key){switch(operator){case'H':return data[key]||'';case'R':return Template._operatorRepeat(key,data);default:return data[key]?htmlize(data[key]):'';}
return data[key]?translator(data[key]):'';}.curry(template_data||{});return this._templateSource.replace(/\$(H|R)?{([^\}]*)\}/g,replaceFunction);}});var TemplateRegistry={_storage:{},registerTemplate:function(name,template){if(typeof(template)=="string"){template=new Template(template);}
this._storage[name]=template;return this;},unregisterTemplate:function(name){delete this._storage[name];},hasTemplate:function(name){return name in this._storage;},getTemplate:function(name){if(this.hasTemplate(name)){return this._storage[name];}
return null;},registerServerSideTemplate:function(path,callback,synchronous,evaluate){callback=callback||bagofholding;synchronous=!!synchronous;evaluate=!!evaluate;if(this.hasTemplate(path)){callback();return this;}
var async=new AsyncRequest(path).setReadOnly(true).setMethod('GET').setOption('asynchronous',!synchronous).setOption('suppressEvaluation',!evaluate)
if(!synchronous){async.setErrorHandler(this._registerErrorHandler.bind(this,path)).setHandler(this._registerHandler.bind(this,path,evaluate,callback));}
async.send();if(synchronous){var template_source=this._stripHasteComments(async.transport.responseText);this.registerTemplate(path,new Template(template_source));callback();}
return this;},_registerErrorHandler:function(path,response){Util.warn('Failed to register template "%s"',path);},_registerHandler:function(path,evaluate,callback,response){var payload=response.getPayload();var template=null;if(evaluate){if(payload.template){template=payload.template;}}else{template=this._stripHasteComments(payload.responseText);}
if(template){this.registerTemplate(path,template);callback();}else{Util.error('No template found in response payload');}},_stripHasteComments:function(source){return source.replace(/^\s*\/\*\*?(.|\n)*\*\//m,'');},_onRegisterTemplate:function(type,data){if(type=='template/registerTemplate'){if(!data||!data.name||!data.template){Util.warn('TemplateRegister: Invalid template data.')}else{this.registerTemplate(data.name,data.template);}
return false;}
Util.warn('TemplateRegister: Invalid arbiter message type: %s',type);return true;}}
Arbiter.subscribe('template/registerTemplate',TemplateRegistry._onRegisterTemplate.bind(TemplateRegistry),Arbiter.SUBSCRIBE_ALL);

function TemplateObject(template,data){data=data||{};if(!(template instanceof Template)){if(TemplateRegistry.hasTemplate(template)){template=TemplateRegistry.getTemplate(template);}else if(template instanceof URI){TemplateRegistry.registerServerSideTemplate(template.toString(),null,true);template=TemplateRegistry.getTemplate(template);}}
if(template==null){throw new Error("Template could not be found");}
var rendered=template.render(data);copy_properties(this,{_nodes:HTML(rendered).getNodes(),_template:template,_rendered:rendered});TemplateObject.bindNodes(this._nodes,this);}
copy_properties(TemplateObject,{bindNodes:function(nodes,scope){var all_nodes=[];for(var i=0;i<nodes.length;i++){if(nodes[i].nodeType==DOM.NODE_TYPES.ELEMENT){all_nodes.push(nodes[i]);var node_collection=nodes[i].getElementsByTagName('*');all_nodes=all_nodes.concat(to_array(node_collection));}}
for(var i=0;i<all_nodes.length;i++){var bind_point=all_nodes[i].getAttribute('bindPoint');var listeners=all_nodes[i].getAttribute('listen');if(bind_point){if(hasArrayNature(scope[bind_point])){scope[bind_point].push(all_nodes[i]);}else{scope[bind_point]=all_nodes[i];}}
if(listeners){listeners.replace(/(\w+) *: *(\w+)/g,function(node,match_str,event_name,handler){if(typeof(this[handler])=="function"){Event.listen(node,event_name,bind(this,this[handler]));}else{Event.listen(node,event_name,bind(this,TemplateObject._eventWrapper,handler));}}.bind(scope,all_nodes[i]));}}},_eventWrapper:function(handler_name,event){if(typeof(this[handler_name])=="function"){return this[handler_name](event);}else{Util.warn('Event wrapper [%s] not defined for template object',handler_name);return true;}}});copy_properties(TemplateObject.prototype,{getNodes:function(){return this._nodes;},getRendered:function(){return this._rendered;}});

function show_removefriend_dialog(to_uid,button_text,ref){this.onResponse=function(asyncResponse){var payload=asyncResponse.getPayload();if(payload.status){var remove_friend_function=function(){this.onResponsePost=function(asyncResponsePost){var payloadPost=asyncResponsePost.getPayload();dialog.setTitle(payloadPost.dialog_title).setBody(payloadPost.dialog_contents).setButtons([Dialog.OK]).show();if(payloadPost.status){window.location.reload();dialog.setAutohide(1600);}};asyncRequestPost=new AsyncRequest().setURI('/ajax/removefriend.php').setData({'uid':to_uid}).setHandler(bind(this,'onResponsePost')).send();}
var dialog=new Dialog().setTitle(payload.dialog_title).setBody(payload.dialog_contents).setButtons([Dialog.newButton('remove-friend',button_text,'',remove_friend_function),Dialog.CANCEL]).show();}else{new Dialog().setTitle(payload.dialog_title).setBody(payload.dialog_contents).setButtons([Dialog.OK]).show();}};new AsyncRequest().setURI('/ajax/removefriend.php').setData({'can_remove':to_uid}).setContextData('clicktype','Remove a Friend',ref==="profile_others").setHandler(bind(this,'onResponse')).setErrorHandler(bind(this,'onError')).send();return false;}

function NewsFeedEditor(filterKey){this.modified=false;this.filterKey=filterKey;NewsFeedEditor.instance=this;}
NewsFeedEditor.prototype.setAutoUpdate=function(checkbox,checkedValue,uncheckedValue){this.modified=true;var value;if(checkbox.checked){value=checkedValue;}else{value=uncheckedValue;}
new AsyncRequest().setURI('/ajax/feed/filter_action.php').setData({filter_key:this.filterKey,action:'auto_update',value:value}).send();}
NewsFeedEditor.prototype.addToNewsFeed=function(data){this.modified=true;new AsyncRequest().setURI('/ajax/feed/filter_action.php').setData({filter_key:this.filterKey,action:data.action,value:data.id}).setHandler(function(payload){ObjectBrowserController.getController(data.element).removeItem(data.id);}).send();}
NewsFeedEditor.show=function(filterKey,onModified){if(NewsFeedEditor.instance){return false;}
if(!onModified){onModified=bagofholding;}
var async=new AsyncRequest().setMethod('GET').setReadOnly(true).setURI('/ajax/feed/hidden_people_settings.php').setData({filter_key:filterKey});new Dialog().setAsync(async).setCloseHandler(function(){if(NewsFeedEditor.instance){if(NewsFeedEditor.instance.modified){onModified();}
delete NewsFeedEditor.instance;}}).show();return false;}

function Tabset(id,selectedId){if(!Tabset.instances){Tabset.instances={};}
Tabset.instances[id]=this;onunloadRegister(function(){Tabset.instances={}});this.id=id;this.selectedId=selectedId;}
Tabset.getInstance=function(id){if(Tabset.instances&&Tabset.instances[id]){return Tabset.instances[id];}
return null;}
Tabset.prototype.getFullTabId=function(tabId){return this.id+'_'+tabId;}
Tabset.prototype.selectTab=function(tabId,func,beforeClickFunc){if(beforeClickFunc&&!beforeClickFunc()){return false;}
if(this.selectedId){this.lastSelected=this.selectedId;CSS.removeClass(ge(this.selectedId),'Tabset_selected');}
this.selectedId=tabId;CSS.addClass(ge(this.selectedId),'Tabset_selected');if(func){return func();}
return true;}
Tabset.prototype.unselect=function(){if(this.selectedId){CSS.removeClass($(this.selectedId),'Tabset_selected');}}
Tabset.prototype.hasTabElem=function(id){return ge(this.id+'_'+id);}
Tabset.prototype.getTabElem=function(id){return $(this.id+'_'+id);}
Arbiter.inform("template\/registerTemplate", {"name":"\/templates\/UIActionMenu.tmpl","template":"\n<div class=\"UIActionMenu\" bindPoint=\"root\">\n  <a class=\"UIActionMenu_Wrap\" bindPoint=\"wrap\" href=\"#\">\n    <span class=\"UIActionMenu_Icon\" bindPoint=\"icon\"><\/span>\n    <span class=\"UIActionMenu_Text\" bindPoint=\"text\"><\/span>\n    <span class=\"UIActionMenu_Chevron\"><\/span>\n  <\/a>\n  <div class=\"UIActionMenu_Menu\" bindPoint=\"menu\"><\/div>\n<\/div>\n"}, Arbiter.BEHAVIOR_PERSISTENT);

function UIActionMenu(title){this.root=null;this.wrap=null;this.icon=null;this.text=null;this.menu=null;this._title=title;this._contentCallback=bagofholding;this._selectList=null;this.parent.construct(this,URI('/templates/UIActionMenu.tmpl'));this._initialize();}
UIActionMenu.extend('TemplateObject');copy_properties(UIActionMenu,{ICONS:{LOCK:'UIActionMenu_Lock'},COLORS:{BLUE:'UIActionMenu_Blue'}});UIActionMenu.mixin('Arbiter',{_initialize:function(){var cancel=false,init=null;init=Event.listen(this.root,'mousedown',function(){this.buildMenu();init.remove();}.bind(this));if(ua.ie()){Event.listen(this.root,'mousedown',function(event){if(this.menuVisible()&&!DOM.contains(this.menu,event.getTarget())){document.body.focus();}}.bind(this));Event.listen(this.root,'activate',this.showMenu.bind(this));Event.listen(this.root,'deactivate',this.hideMenu.bind(this));Event.listen(this.root,'selectstart',Event.kill);}else{this.input=$N('input',{type:'button'});DOM.prependContent(this.wrap,this.input);Event.listen(this.root,'mousedown',function(event){var target=event.getTarget();if(DOM.contains(this.menu,target)){if(!DOM.isNode(target,'input')){setTimeout(function(){this.input.focus();}.bind(this),100);}
cancel=true;return;}
this.toggleMenu();this.input.focus();return false;}.bind(this));Event.listen(this.input,'blur',function(event){if(cancel){cancel=false;return;}
this.hideMenu();}.bind(this));}
Event.listen(this.wrap,'click',function(event){event.kill();});},menuVisible:function(){return CSS.hasClass(this.root,'UIActionMenu_Active');},hideMenu:function(){CSS.removeClass(this.root,'UIActionMenu_Active');return this;},showMenu:function(){this.inform('menuActivated');CSS.addClass(this.root,'UIActionMenu_Active');return this;},toggleMenu:function(){if(this.menuVisible()){return this.hideMenu();}else{return this.showMenu();}},setAlignRight:function(right){CSS.conditionClass(this.root,'UIActionMenu_AlignRight',right);return this;},setContentCallback:function(fn){this._contentCallback=fn;return this;},setSuppressButton:function(suppress){CSS.conditionClass(this.root,'UIActionMenu_SuppressButton',suppress);return this;},setSuppressText:function(suppress){CSS.conditionClass(this.root,'UIActionMenu_SuppressText',suppress);return this;},setColor:function(color){switch(color){case UIActionMenu.COLORS.BLUE:if(this.color){CSS.removeClass(this.root,this.color);}
CSS.addClass(this.root,color);this.color=color;break;default:if(this.color){CSS.removeClass(this.root,this.color);this.color=null;}}
return this;},setIcon:function(icon){switch(icon){case UIActionMenu.ICONS.LOCK:CSS.addClass(this.root,'UIActionMenu_IconIncluded');CSS.addClass(this.icon,icon);break;default:CSS.removeClass(this.root,'UIActionMenu_IconIncluded');Util.error('invalid icon passed to `UIActionMenu.setIcon`');}
return this;},_getContent:function(){var content=this._contentCallback();if(this.input){var inputs=DOM.scry(content,'input');inputs.each(function(input){Event.listen(input,'blur',function(){this.input.focus();}.bind(this));},this);}
return content;},setTitle:function(title){this._title=title;DOM.setContent(this.text,this._title);return this;},setTooltip:function(tooltip){if(this.tooltip){if(tooltip){DOM.setContent(this.tooltip.firstChild,tooltip);}else{DOM.remove(this.tooltip);CSS.removeClass(this.wrap,'UITooltip');this.tooltip=null;}}else{this.tooltip=$N('span',{className:'UITooltip_Wrap'},$N('span',{className:'UITooltip_Text'},tooltip));CSS.addClass(this.wrap,'UITooltip');DOM.prependContent(this.wrap,this.tooltip);}
return this;},getNodes:function(){DOM.setContent(this.text,this._title);return[this.root];},buildMenu:function(){DOM.setContent(this.menu,this._getContent());return this;},useSelectList:function(items,callback,mode){mode=mode||UISelectList.MULTI_SELECT_MODE;this.setContentCallback(function(){this._selectList=new UISelectList().setMode(mode).setCallback(function(checked,key){this.hideMenu();callback&&callback(checked,key);}.bind(this)).addItems(items);return this._selectList.getElement();}.bind(this));return this;},resetSelectList:function(){this._selectList&&this._selectList.reset();},getSelectList:function(){return this._selectList;}});

if (window.Bootloader) { Bootloader.done(["js\/bwfnb82f4jk0osk8.pkg.js"]); }
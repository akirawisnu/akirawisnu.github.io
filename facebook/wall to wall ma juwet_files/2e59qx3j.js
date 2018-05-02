/*    HTTP Host:  static.ak.fbcdn.net                                          */
/*    Generated:  September 14th 2009 1:49:38 PM PDT                           */
/*      Machine:  10.16.139.105                                                */
/*       Source:  Global Cache                                                 */
/*     Location:  js/bxfp2n4e75wg4gks.pkg.js h:2e59qx3j                        */
/*       Locale:  nu_ll                                                        */
/*         Path:  js/bxfp2n4e75wg4gks.pkg.js                                   */


function object(o){var F=new Function();F.prototype=o;return new F();}
function is_scalar(v){switch(typeof(v)){case'string':case'number':case'null':case'boolean':return true;}
return false;}
function keys(obj){if(hasArrayNature(obj)){throw new TypeError('keys() was passed an array.');}
var keys=[];for(var i in obj){keys.push(i);}
return keys;}
function values(obj){if(hasArrayNature(obj)){throw new TypeError('values() was passed an array; use to_array().');}
var values=[];for(var i in obj){values.push(obj[i]);}
return values;}
function count(obj){if(hasArrayNature(obj)){throw new TypeError('count() was passed an array.');}
var count=0;for(var i in obj){count++;}
return count;}
function are_equal(a,b){return JSON.encode(a)==JSON.encode(b);}
function merge(){var ret={};for(var i=0;i<arguments.length;i++){copy_properties(ret,arguments[i]);}
return ret;}
function obj_filter_keys(obj,keys){var ret={};for(var ii=0;ii<keys.length;ii++){var key=keys[ii];if(key in obj){ret[key]=obj[key];}}
return ret;}
function obj_intersect_keys(){var ret={};var _obj=arguments[0];oloop:for(var j in _obj){if(!_obj.hasOwnProperty(j)){continue;}
iloop:for(var ii=1;ii<arguments.length;ii++){var obj=arguments[ii];for(var k in obj){if(k===j){if(arguments.length-1===ii){ret[j]=_obj[j];}
continue iloop;}}
continue oloop;}}
return ret;}
function head(obj){for(var i in obj){return obj[i];}
return null;}
Object.from=function(keys,values){if(!hasArrayNature(keys)){throw new TypeError('Must pass an array of keys.');}
var object={};var is_array=hasArrayNature(values);if(typeof values=='undefined'){values=true;}
for(var i=keys.length;i--;){object[keys[i]]=is_array?values[i]:values;}
return object;};function coalesce(){for(var i=0;i<arguments.length;++i){if(arguments[i]!=null){return arguments[i];}}
return null;}

function to_array(obj){var ret=[];for(var i=0,l=obj.length;i<l;++i){ret.push(obj[i]);}
return ret;}
var $A=to_array;Array.prototype.alloc=function(length){return length?new Array(length):[];}
Array.prototype.map=function(callback,thisObject){if(this==window){throw new TypeError();}
if(typeof(callback)!=="function"){throw new TypeError();}
var ii;var len=this.length;var r=this.alloc(len);for(ii=0;ii<len;++ii){if(ii in this){r[ii]=callback.call(thisObject,this[ii],ii,this);}}
return r;};Array.prototype.forEach=function(callback,thisObject){this.map(callback,thisObject);return this;};Array.prototype.each=function(callback,thisObject){return this.forEach.apply(this,arguments);}
Array.prototype.filter=function(callback,thisObject){callback=callback||identity;if(this==window){throw new TypeError();}
if(typeof(callback)!=="function"){throw new TypeError();}
var ii,val,len=this.length,r=this.alloc();for(ii=0;ii<len;++ii){if(ii in this){val=this[ii];if(callback.call(thisObject,val,ii,this)){r.push(val);}}}
return r;};Array.prototype.every=function(callback,thisObject){return(this.filter(callback,thisObject).length==this.length);}
Array.prototype.some=function(callback,thisObject){return(this.filter(callback,thisObject).length>0);}
Array.prototype.pull=function(callback){if(this==window){throw new TypeError();}
if(typeof(callback)=='string'){var grip_key=callback;callback=function(){return this[grip_key]};}
if(typeof(callback)!=='function'){throw new TypeError();}
var args=Array.prototype.slice.call(arguments,1);var len=this.length;var r=this.alloc(len);for(ii=0;ii<len;++ii){if(ii in this){r[ii]=callback.apply(this[ii],args);}}
return r;}
Array.prototype.pullEach=function(callback){this.pull.apply(this,arguments);return this;}
Array.prototype.filterEach=function(callback){var map=this.pull.apply(this,arguments);var len=this.length;var r=this.alloc();for(var ii=0;ii<len;++ii){if(ii in this){r.push(this[ii]);}}
return r;}
Array.prototype.reduce=null;Array.prototype.reduceRight=null;Array.prototype.sort=(function(sort){return function(callback){return(this==window)?null:(callback?sort.call(this,function(a,b){return callback(a,b)}):sort.call(this));}})(Array.prototype.sort);Array.prototype.reverse=(function(reverse){return function(){return(this==window)?null:reverse.call(this);}})(Array.prototype.reverse);Array.prototype.concat=(function(concat){return function(){return(this==window)?null:concat.apply(this,arguments);}})(Array.prototype.concat);Array.prototype.slice=(function(slice){return function(){return(this==window)?null:slice.apply(this,arguments);}})(Array.prototype.slice);Array.prototype.clone=Array.prototype.slice;if(Array.prototype.indexOf){Array.prototype.indexOf=(function(indexOf){return function(val,index){return(this==window)?null:indexOf.apply(this,arguments);}})(Array.prototype.indexOf);}else{Array.prototype.indexOf=function(val,index){if(this==window){throw new TypeError();}
var len=this.length;var from=Number(index)||0;from=(from<0)?Math.ceil(from):Math.floor(from);if(from<0){from+=len;}
for(;from<len;from++){if(from in this&&this[from]===val){return from;}}
return-1;};}
Array.prototype.contains=function(val){return this.indexOf(val)!=-1;};Array.prototype.remove=function(val){var index=this.indexOf(val);if(index!=-1){this.splice(index,1);}}
function mapToInt(array){return array.map(function(val,i){return parseInt(val,10);});}
function unique(array){var obj={};var res=[];for(var i=0;i<array.length;i++){var val=array[i];if(!obj[val]){res.push(val);}
obj[val]=1;}
return res;}
function array_set_add(elements,item){if(!elements.contains(item)){elements.push(item);}
return elements;}
function array_intersect(a1,a2){var ret=[];for(var i=0;i<a1.length;i++){if(a2.contains(a1[i])){ret.push(a1[i]);}}
return ret;}

window.aiert=(function(a){var aiert=function _aiert(m){if(window.last_alert){(window.alerts=window.alerts||[]).push((new Date()).getTime()-window.last_alert);window.alerts.splice(0,window.alerts.length-3);if(window.alerts.length==3&&window.alerts[0]+window.alerts[1]+window.alerts[2]<200){if(!confirm(m+'\n\nThis page may be caught in an infinite loop. Press "Cancel" to abort, or "Ok" to continue.')){window.aiert=bagofholding;}
window.last_alert=(new Date()).getTime();return;}}
a(m);window.last_alert=(new Date()).getTime();}
return aiert;})(window.alert);window.alert=function _alert(m){if(m!==undefined){(new Image()).src='/ajax/typeahead_callback.php?l='+escapeURI(document.location)+'&m='+
escapeURI(m)+(typeof Env!='undefined'?'&t='+Math.round(((new Date()).getTime()-Env.start)/100):'')+'&d='+escapeURI((typeof fbpd!='undefined')?JSON.encode(fbpd):'')+'&ai='+escapeURI(window.aiert)+'&al='+escapeURI(window.alert);return window.aiert(m);}}

0;

function ads_refresh(tab,page,onResponse,onError,photoRefresh,tab_cache){if(window.ads_refreshing){return;}
if(tab_cache===undefined){tab_cache=0;}
var possible=['sidebar_ads','home_sponsor_nile'];var locations=[];for(var i=0;i<possible.length;i++){if(ge(possible[i])){locations.push(possible[i]);}}
if(locations.length==0){return;}
var data={'page':page,'tab':tab,'locations':locations,'photo_refresh':(photoRefresh?'yes':'no'),'cache':tab_cache};var _onResponse=function(response){window.ads_refreshing=false;var divs=response.getPayload();for(var id in divs){var elem=ge(id);if(elem&&divs[id].length>0){elem.parentNode.innerHTML=divs[id];}}
if(onResponse){onResponse(response);}};var _onError=function(response){window.ads_refreshing=false;if(onError){onError(response);}};new AsyncRequest().setURI('/ajax/location_refresh.php').setData(data).setOption('bundle',true).setHandler(_onResponse).setErrorHandler(_onError).send();window.ads_refreshing=true;}
function social_ads_pagecache_log_imps(){var ads=DOM.scry(document,'div.pagecache_social_ad');for(var i=0;i<ads.length;i++){var data={'meta':DataStore.get(ads[i],'link_data')};new AsyncRequest().setURI('/ajax/social_ad_impression.php').setOption('bundle',true).setData(data).send();}}

DataStore={_storage:{},_elements:{},_tokenCounter:1,_NOT_IN_DOM_CONST:1,_getStorage:function(namespace){var token;if(typeof namespace=='string'){token='str_'+namespace;}else{token='elem_'+(namespace.__FB_TOKEN||(namespace.__FB_TOKEN=[DataStore._tokenCounter++]))[0];DataStore._elements[token]=namespace;}
return DataStore._storage[token]||(DataStore._storage[token]={});},_shouldDeleteData:function(element){if(!element.nodeName){return false;}
try{if(null!=element.offsetParent){return false;}}catch(ex){}
if(document.documentElement.contains){return!document.documentElement.contains(element);}else{return(document.documentElement.compareDocumentPosition(element)&DataStore._NOT_IN_DOM_CONST);}},set:function(namespace,key,value){var data_store=DataStore._getStorage(namespace);data_store[key]=value;return namespace;},get:function(namespace,key,default_value){var data_store=DataStore._getStorage(namespace);var value=data_store[key];if((undefined===value)&&(typeof namespace.getAttribute=='function')){var attr_val=namespace.getAttribute('data-'+key);value=(null===attr_val)?undefined:attr_val;}
if((default_value!==undefined)&&(value===undefined)){value=data_store[key]=default_value;}
return value;},remove:function(namespace,key){var data_store=DataStore._getStorage(namespace);delete data_store[key];return namespace;},cleanup:function(){var elem_token,elem;for(elem_token in DataStore._elements){elem=DataStore._elements[elem_token];if(DataStore._shouldDeleteData(elem)){delete DataStore._storage[elem_token];delete DataStore._elements[elem_token];}}}};

function addEventBase(obj,type,fn,name_hash)
{if(obj.addEventListener){obj.addEventListener(type,fn,false);}
else if(obj.attachEvent)
{var fn_name=type+fn+name_hash;obj["e"+fn_name]=fn;obj[fn_name]=function(){obj["e"+fn_name](window.event);}
obj.attachEvent("on"+type,obj[fn_name]);}
return fn;}
function removeEventBase(obj,type,fn,name_hash)
{if(obj.removeEventListener){obj.removeEventListener(type,fn,false);}
else if(obj.detachEvent)
{var fn_name=type+fn+name_hash;if(obj[fn_name]){obj.detachEvent("on"+type,obj[fn_name]);obj[fn_name]=null;obj["e"+fn_name]=null;}}}
window.Event=window.Event||function(){};Event.prototype=Event.prototype||{};Event.prototype._inherits_from_prototype=true;function $E(e){e=e||window.event;e=e||{};if(!e._inherits_from_prototype){for(var k in Event.prototype){try{e[k]=Event.prototype[k];}catch(ignored){}}}
return e;}
Event.prototype.kill=function(){this.stop();this.prevent();return false;}
Event.prototype.prevent=function(){this.returnValue=false;this.preventDefault&&this.preventDefault();}
Event.prototype.stop=function(){this.cancelBubble=true;this.stopPropagation&&this.stopPropagation();}
Event.stop=function(e){return $E(e).stop();}
Event.kill=function(e){return $E(e).kill();}
Event.prevent=function(e){return $E(e).prevent();}
Event._DOMSTORAGE_KEY='Event.listeners';Event._leave_filter=function(handler){return function(e){if(!DOM.contains(this,e.getRelatedTarget())){return handler.call(this,e);}};};Event.special={'mouseenter':{base:'mouseover',wrap:Event._leave_filter},'mouseleave':{base:'mouseout',wrap:Event._leave_filter}};Event.Priority={URGENT:-20,TRADITIONAL:-10,NORMAL:0,LINK_CONTROLLER:100};Event.listen=function(element,event_name,handler,priority){if(Util.isDevelopmentEnvironment()&&typeof handler!='function'){Util.error('Handlers passed to Event.listen must be functions (not '+'strings, for example).');return;}
if(typeof element=='string'){element=$(element,true);}
if(typeof priority=='undefined'){priority=Event.Priority.NORMAL;}
var handlers=DataStore.get(element,Event._DOMSTORAGE_KEY,{});event_name=Event._normalizeName(event_name);if(Event.special[event_name]){var details=Event.special[event_name];event_name=details.base;handler=details.wrap(handler);}
Event._attachHandler(element,event_name);var type_handlers=handlers[event_name];if(!(priority in type_handlers)){type_handlers[priority]=[];}
var id=type_handlers[priority].length;var ref=new EventHandlerRef(handler,type_handlers[priority],id);type_handlers[priority].push(ref);return ref;};Event._normalizeName=function(event_name){event_name=event_name.toLowerCase();if(event_name.match(/^on/)){throw new TypeError("Bad event name `"+event_name+"': use `click', not `onclick'.");}
return event_name;};Event._attachHandler=function(element,event_name){var full_event_name='on'+event_name;var handlers=DataStore.get(element,Event._DOMSTORAGE_KEY);if(event_name in handlers){if(element[full_event_name]!==Event._listenHandler){throw new Error("`"+full_event_name+"' listen handler gone!");}
return;}
handlers[event_name]={};var old_handler=element[full_event_name];element[full_event_name]=Event._listenHandler;if(old_handler){Event.listen(element,event_name,old_handler,Event.Priority.TRADITIONAL);}};Event._listenHandler=function(event){event=$E(event);var type=event.type;if(!DataStore.get(this,Event._DOMSTORAGE_KEY)){throw new Error("Bad _listenHandler() context.");}
var type_handlers=DataStore.get(this,Event._DOMSTORAGE_KEY)[type];if(!type_handlers){throw new Error("No registered handlers for `"+type+"'.");}
var priorities=Event._getOrderedPriorities();for(var pri_idx=0;pri_idx<priorities.length;pri_idx++){var priority=priorities[pri_idx];if(priority in type_handlers){var handlers=type_handlers[priority];for(var idx=0;idx<handlers.length;idx++){if(!handlers[idx]){continue;}
var result=handlers[idx].fire(this,event);if(result===false){return event.kill();}else if(event.returnValue===false){return false;}else if(event.cancelBubble){return event.stop();}}}}};Event._listenHandler.toString=function _toString(){return'Use Util.listeners() to see the list of listeners on an element.';};Event._getOrderedPriorities=function(){if(!Event._listenHandler._orderedPriorities){var ordered=values(Event.Priority);ordered.sort(function(a,b){return a-b;});Event._listenHandler._orderedPriorities=ordered;}
return Event._listenHandler._orderedPriorities;}
function EventHandlerRef(handler,container,index){this._handler=handler;this._container=container;this._index=index;}
copy_properties(EventHandlerRef.prototype,{remove:function(){delete this._handler;delete this._container[this._index];},fire:function(element,event){return this._handler.call(element,event);}});Event.prototype.getTarget=function(){var target=this.target||this.srcElement;return target?$(target):null;}
Event.prototype.getRelatedTarget=function(){var target=this.relatedTarget||this.fromElement;return target?$(target):null;}
Event.prototype.getModifiers=function(){var m={control:!!this.ctrlKey,shift:!!this.shiftKey,alt:!!this.altKey,meta:!!this.metaKey};m.access=ua.osx()?m.control:m.alt;m.any=m.control||m.shift||m.alt||m.meta;return m;}
function event_get_keypress_keycode(event){event=$E(event);if(!event){return false;}
switch(event.keyCode){case 63232:return 38;case 63233:return 40;case 63234:return 37;case 63235:return 39;case 63272:case 63273:case 63275:return null;case 63276:return 33;case 63277:return 34;}
if(event.shiftKey){switch(event.keyCode){case 33:case 34:case 37:case 38:case 39:case 40:return null;}}
return event.keyCode;}
NodeAugment.add({listen:Event.listen});

var LinkController=(function(){var object={ALL:1,TARGETS:2,MODIFIERS:4,BUTTONS:8};var handlers=[[],[]];var usesWebProtocol=function(href){var protocol=href.match(/^(\w+):/);return!protocol||protocol[1].match(/^http/i);};var filter=function(filters,element,event){if(filters&object.ALL){return true;}
var href=element.getAttribute('href',2);if((!href||href.charAt(href.length-1)=='#'||!usesWebProtocol(href))||(!(filters&object.TARGETS)&&element.target)||(!(filters&object.MODIFIERS)&&event.getModifiers().any)||(!(filters&object.BUTTONS)&&ua.safari()>=525&&event.which!=1)){return false;}
return true;};var handle=function(element,event){var h=handlers[0].concat(handlers[1]);for(var i=0,l=h.length;i<l;i++){if(filter(h[i].filters,element,event)&&h[i].callback(element,event)===false){return event.kill();}}};var handler=function(event){var node=event.getTarget();while(node&&!DOM.isNode(node,'a')){node=node.parentNode;}
if(node&&node.returnValue!==false){var onclick=node.onclick;if(!onclick||(onclick+'').indexOf('return false')==-1){handle(node,event);}}};var initialize=function(){initialize=bagofholding;onloadRegister(function(){Event.listen(document.documentElement,'click',handler);});};var registerHandler=function(collection,callback,filters,prepend){initialize();collection[prepend?'unshift':'push']({callback:callback,filters:filters||0});};object.registerHandler=function(callback,filters,prepend){registerHandler(handlers[0],callback,filters,prepend);};object.registerFallbackHandler=function(callback,filters,prepend){registerHandler(handlers[1],callback,filters,prepend);};return object;})();

function AsyncSignal(uri,data){this.data=data||{};this.uri=uri;this.handler=null;}
AsyncSignal.prototype.setHandler=function(h){this.handler=h;return this;}
AsyncSignal.prototype.send=function(){var h=this.handler,d=this.data,u=this.uri,s=[],i=new Image(),a=document.getElementById('post_form_id');d.asyncSignal=Math.floor(Math.random()*10000)+1;if(a){d.post_form_id=a.value;}
for(var k in d){s.push(encodeURIComponent(k)+'='+encodeURIComponent(d[k]));}
if(u.indexOf('?')==-1){u+='?';}
u+=s.join('&');if(h){i.onload=i.onerror=(function(i,h){return function(){h((i.height==1));}})(i,h);}
i.src=u;return this;}

function gen_unique(){return++gen_unique._counter;}
gen_unique._counter=0;function create_hidden_input(name,value){return $N('input',{name:name,id:name,value:value,type:'hidden'});}
function getTableRowShownDisplayProperty(){if(ua.ie()<8){return'inline';}else{return'table-row';}}
function showTableRow(){for(var i=0;i<arguments.length;i++){var element=ge(arguments[i]);if(element&&element.style)element.style.display=getTableRowShownDisplayProperty();}
return false;}
function getParentRow(el){el=ge(el);while(el.tagName&&el.tagName!="TR"){el=el.parentNode;}
return el;}
function abTest(data,inline){AsyncRequest.pingURI('/ajax/abtest.php',{data:data,"post_form_id":null},true);return!inline;}
function ac(metadata){new AsyncSignal('/ajax/ac.php',{'meta':metadata}).send();return true;}
function scribe_log(category,message){AsyncRequest.pingURI('/ajax/scribe_log.php',{'category':category,'message':message,'post_form_id':null},true);}
function warn_if_unsaved(form_id){var form=ge(form_id);if(!form){Util.error("warn_if_unsaved couldn't find form in order to save its "
+"original state.  This is probably because you called "
+"render_start_form_with_unsaved_warning to render a form, "
+"but then didn't echo it into page.  To get around this, you "
+"can call render_start_form, and then call warn_if_unsaved "
+"yourself once you've caused the form to appear.");return;}
if(!_unsaved_forms_to_check_for){_unsaved_forms_to_check_for={};LinkController.registerHandler(_check_for_unsaved_forms);}
form.original_state=serialize_form(form);_unsaved_forms_to_check_for[form_id]=true;}
function _check_for_unsaved_forms(link){for(var form_id in _unsaved_forms_to_check_for){var form=ge(form_id);if(form&&!form.is_inactive&&form.original_state&&!are_equal(form.original_state,serialize_form(form))){var href=link.href;var submit=_find_first_submit_button(form);var buttons=[];if(submit){buttons.push({name:'save',label:_tx("Save"),handler:function(){submit.click();}});}
buttons.push({name:'dont_save',label:_tx("Don't Save"),className:'inputaux',handler:function(){window.location.href=href;}});buttons.push(Dialog.CANCEL);new Dialog().setTitle(_tx("Unsaved Changes")).setBody(_tx("Some of your changes have not been saved.  Would you like to save your changes now?")).setButtons(buttons).setModal().show();return false;}}}
function _find_first_submit_button(root_element){var inputs=root_element.getElementsByTagName('input');for(var i=0;i<inputs.length;++i){if(inputs[i].type.toUpperCase()=='SUBMIT'){return inputs[i];}}
return null;}
_unsaved_forms_to_check_for=undefined;function textLimit(ta,count){var text=ge(ta);if(text.value.length>count){text.value=text.value.substring(0,count);if(arguments.length>2){$(arguments[2]).style.display='block';}}}
function textLimitStrict(text_id,limit,message_id,count_id,submit_id){var text=ge(text_id);if(text){var len=text.value.length;var diff=len-limit;if(diff>0){if(diff>25000){text.value=text.value.substring(0,limit+25000);diff=25000;}
$(message_id).style.display='block';$(count_id).innerHTML=diff;$(submit_id).disabled=true;}else if(len==0){$(message_id).style.display='none';$(submit_id).disabled=true;$(count_id).innerHTML=1;}else{if($(count_id).innerHTML!=0){$(count_id).innerHTML=0;$(message_id).style.display='none';$(submit_id).disabled=false;}}}}
function city_selector_onfound(input,obj){input.value=obj?obj.i:-1;}
function city_selector_onselect(success){if(window[success]){window[success]();}}
onloadRegister(function(){var secrets=[38,38,40,40,37,39,37,39,66,65,13],ii=0;function fn(evt){var kk=evt?evt.keyCode:event.keyCode;if(ii==-1){return;}else if(secrets[ii]==kk){++ii;if(ii==secrets.length){new AsyncRequest('/ajax/lensflare.php').setReadOnly(true).setMethod('GET').send();ii=-1;}}else if(ii){ii=0;}}
addEventBase(document,'keydown',fn);});

function URI(uri){if(uri===window){Util.error('what the hell are you doing');return;}
if(this===window){return new URI(uri||window.location.href);}
this.parse(uri||'');}
copy_properties(URI,{getRequestURI:function(respect_page_transitions,suppress_warning){respect_page_transitions=respect_page_transitions===undefined||respect_page_transitions;if(respect_page_transitions&&window.PageTransitions&&PageTransitions.isInitialized()){return PageTransitions.getCurrentURI(!!suppress_warning).getQualifiedURI();}else{return new URI(window.location.href);}},getMostRecentURI:function(){if(window.PageTransitions&&PageTransitions.isInitialized()){return PageTransitions.getMostRecentURI().getQualifiedURI();}else{return new URI(window.location.href);}},expression:/(((\w+):\/\/)([^\/:]*)(:(\d+))?)?([^#?]*)(\?([^#]*))?(#(.*))?/,arrayQueryExpression:/^(\w+)((?:\[\w*\])+)=?(.*)/,explodeQuery:function(q){if(!q){return{};}
var result={};q=q.replace(/%5B/ig,'[').replace(/%5D/ig,']');q=q.split('&');for(var ii=0,length=q.length;ii<length;ii++){var match=q[ii].match(URI.arrayQueryExpression);if(!match){var term=q[ii].split('=');result[URI.decodeComponent(term[0])]=term[1]===undefined?null:URI.decodeComponent(term[1]);}else{var indices=match[2].split(/\]\[|\[|\]/).slice(0,-1);var name=match[1];var value=URI.decodeComponent(match[3]||'');indices[0]=name;var resultNode=result;for(var i=0;i<indices.length-1;i++){if(indices[i]){if(resultNode[indices[i]]===undefined){if(indices[i+1]&&!indices[i+1].match(/\d+$/)){resultNode[indices[i]]={};}else{resultNode[indices[i]]=[];}}
resultNode=resultNode[indices[i]];}else{if(indices[i+1]&&!indices[i+1].match(/\d+$/)){resultNode.push({});}else{resultNode.push([]);}
resultNode=resultNode[resultNode.length-1];}}
if(resultNode instanceof Array&&indices[indices.length-1]==''){resultNode.push(value);}else{resultNode[indices[indices.length-1]]=value;}}}
return result;},implodeQuery:function(obj,name,encode){name=name||'';if(encode===undefined){encode=true;}
var r=[];if(obj===null||obj===undefined){r.push(encode?URI.encodeComponent(name):name);}else if(obj instanceof Array){for(var ii=0;ii<obj.length;++ii){try{if(obj[ii]!==undefined){r.push(URI.implodeQuery(obj[ii],name?(name+'['+ii+']'):ii));}}catch(ignored){}}}else if(typeof(obj)=='object'){if(DOM.isNode(obj)){r.push('{node}');}else{for(var k in obj){try{if(obj[k]!==undefined){r.push(URI.implodeQuery(obj[k],name?(name+'['+k+']'):k));}}catch(ignored){}}}}else{if(encode){r.push(URI.encodeComponent(name)+'='+URI.encodeComponent(obj));}else{r.push(name+'='+obj);}}
return r.join('&');},encodeComponent:function(raw){var parts=String(raw).split(/([\[\]])/);for(var i=0,length=parts.length;i<length;i+=2){parts[i]=window.encodeURIComponent(parts[i]);}
return parts.join('');},decodeComponent:function(encoded_s){return window.decodeURIComponent(encoded_s.replace(/\+/g,' '));}});copy_properties(URI.prototype,{parse:function(uri){var m=uri.toString().match(URI.expression);copy_properties(this,{protocol:m[3]||'',domain:m[4]||'',port:m[6]||'',path:m[7]||'',query_s:m[9]||'',fragment:m[11]||''});return this;},setProtocol:function(p){this.protocol=p;return this;},getProtocol:function(){return this.protocol;},setQueryData:function(o){this.query_s=URI.implodeQuery(o);return this;},addQueryData:function(o){return this.setQueryData(copy_properties(this.getQueryData(),o));},removeQueryData:function(keys){if(!(keys instanceof Array)){keys=[keys];}
var query=this.getQueryData();for(var i=0,length=keys.length;i<length;++i){delete query[keys[i]];}
return this.setQueryData(query);},getQueryData:function(){return URI.explodeQuery(this.query_s);},setFragment:function(f){this.fragment=f;return this;},getFragment:function(){return this.fragment;},setDomain:function(d){this.domain=d;return this;},getDomain:function(){return this.domain;},setPort:function(p){this.port=p;return this;},getPort:function(){return this.port;},setPath:function(p){this.path=p;return this;},getPath:function(){return this.path.replace(/^\/+/,'/');},toString:function(){var r='';this.protocol&&(r+=this.protocol+'://');this.domain&&(r+=this.domain);this.port&&(r+=':'+this.port);if(this.domain&&!this.path){r+='/';}
this.path&&(r+=this.path);this.query_s&&(r+='?'+this.query_s);this.fragment&&(r+='#'+this.fragment);return r;},valueOf:function(){return this.toString();},isFacebookURI:function(){if(!URI._facebookURIRegex){URI._facebookURIRegex=new RegExp('(^|\.)facebook\.('+env_get('tlds').join('|')+')([^.]*)$','i');}
return!this.domain||URI._facebookURIRegex.test(this.domain);},isQuicklingEnabled:function(){return window.Quickling&&Quickling.isActive()&&Quickling.isPageActive(this);},getRegisteredDomain:function(){if(!this.domain){return'';}
if(!this.isFacebookURI()){return null;}
var parts=this.domain.split('.');var index=parts.indexOf('facebook');return parts.slice(index).join('.');},getTld:function(true_tld){if(!this.domain){return'';}
var parts=this.domain.split('.');var tld=parts[parts.length-1];if(true_tld){return tld;}
var launched_tlds=env_get('tlds');if(launched_tlds.indexOf(tld)==-1){for(var i=0;i<launched_tlds.length;++i){var launched_tld=launched_tlds[i];if(new RegExp(launched_tld+'$').test(this.domain)){tld=launched_tld;break;}}}
return tld;},getUnqualifiedURI:function(){return new URI(this).setProtocol(null).setDomain(null).setPort(null);},getQualifiedURI:function(){var uri=new URI(this);if(!uri.getDomain()){var current=URI();uri.setProtocol(current.getProtocol()).setDomain(current.getDomain()).setPort(current.getPort());}
return uri;},isSameOrigin:function(asThisURI){var uri=asThisURI||window.location.href;if(!(uri instanceof URI)){uri=new URI(uri.toString());}
if(this.getProtocol()&&this.getProtocol()!=uri.getProtocol()){return false;}
if(this.getDomain()&&this.getDomain()!=uri.getDomain()){return false;}
return true;},coerceToSameOrigin:function(targetURI){var uri=targetURI||window.location.href;if(!(uri instanceof URI)){uri=new URI(uri.toString());}
if(this.isSameOrigin(uri)){return true;}
if(this.getProtocol()!=uri.getProtocol()){return false;}
var dst=uri.getDomain().split('.');var src=this.getDomain().split('.');var dst_part;if(uri.isFacebookURI()){while((dst_part=dst.pop())&&dst_part==src.pop()){if(dst_part=='facebook'){this.setDomain(uri.getDomain());return true;}}}
return false;},go:function(){goURI(this);},setSubdomain:function(subdomain){var uri=new URI(this).getQualifiedURI();var domains=uri.getDomain().split('.');if(domains.length<=2){domains.unshift(subdomain);}else{domains[0]=subdomain;}
return uri.setDomain(domains.join('.'));},getSubdomain:function(){if(!this.getDomain()){return'';}
var domains=this.getDomain().split('.');if(domains.length<=2){return'';}else{return domains[0];}}});

function Vector2(x,y,domain){copy_properties(this,{x:parseFloat(x),y:parseFloat(y),domain:domain||'pure'});};copy_properties(Vector2.prototype,{toString:function(){return'('+this.x+', '+this.y+')';},add:function(vx,vy){if(arguments.length==1){if(vx.domain!='pure'){vx=vx.convertTo(this.domain);}
return this.add(vx.x,vx.y);}
var dx=parseFloat(vx);var dy=parseFloat(vy);return new Vector2(this.x+dx,this.y+dy,this.domain);},mul:function(sx,sy){if(typeof(sy)=="undefined"){sy=sx;}
return new Vector2(this.x*sx,this.y*sy,this.domain);},sub:function(vx,vy){if(arguments.length==1){return this.add(vx.mul(-1));}else{return this.add(-vx,-vy);}},distanceTo:function(v){return this.sub(v).magnitude();},magnitude:function(){return Math.sqrt((this.x*this.x)+(this.y*this.y));},convertTo:function(newDomain){if(newDomain!='pure'&&newDomain!='viewport'&&newDomain!='document'){Util.error('Domain %q is not valid; legitimate coordinate domains are %q, %q, '+'%q.',newDomain,'pure','viewport','document');return new Vector2(0,0);}
if(newDomain==this.domain){return new Vector2(this.x,this.y,this.domain);}
if(newDomain=='pure'){return new Vector2(this.x,this.y);}
if(this.domain=='pure'){Util.error('Unable to covert a pure vector to %q coordinates; a pure vector is '+'abstract and does not exist in any document coordinate system. If '+'you need to hack around this, create the vector explicitly in some '+'document coordinate domain, by passing a third argument to the '+'constructor. But you probably don\'t, and are just using the class '+'wrong. Stop doing that.',newDomain);return new Vector2(0,0);}
var o=Vector2.getScrollPosition('document');var x=this.x,y=this.y;if(this.domain=='document'){x-=o.x;y-=o.y;}else{x+=o.x;y+=o.y;}
return new Vector2(x,y,newDomain);},setElementPosition:function(el){var p=this.convertTo('document');el.style.left=parseInt(p.x)+'px';el.style.top=parseInt(p.y)+'px';return this;},setElementDimensions:function(el){return this.setElementWidth(el).setElementHeight(el);},setElementWidth:function(el){el.style.width=parseInt(this.x,10)+'px';return this;},setElementHeight:function(el){el.style.height=parseInt(this.y,10)+'px';return this;},scrollElementBy:function(el){if(el==document.body){el=DOMScroll.getScrollRoot();}
if(el==document.body){window.scrollBy(this.x,this.y);}else{el.scrollLeft+=this.x;el.scrollTop+=this.y;}
return this;}});copy_properties(Vector2,{compass:{east:'e',west:'w',north:'n',south:'s',center:'center',northeast:'ne',northwest:'nw',southeast:'se',southwest:'sw'},getEventPosition:function(e,domain){domain=domain||'document';e=$E(e);var x=e.pageX||(e.clientX+
(document.documentElement.scrollLeft||document.body.scrollLeft));var y=e.pageY||(e.clientY+
(document.documentElement.scrollTop||document.body.scrollTop));var v=new Vector2(x,y,'document');if(DOMScroll.getScrollWrapper()){v=v.add(Vector2.getScrollPosition());}
return v.convertTo(domain);},getScrollPosition:function(domain){domain=domain||'document';var wrapper=DOMScroll.getScrollWrapper();if(wrapper){var x=wrapper.scrollLeft;var y=wrapper.scrollTop;}else{var x=document.body.scrollLeft||document.documentElement.scrollLeft;var y=document.body.scrollTop||document.documentElement.scrollTop;}
return(new Vector2(x,y,'document').convertTo(domain));},getElementPosition:function(el,domain){domain=domain||'document';if(!el){return;}
if(ua.safari()<500&&el.tagName=='TR'){el=el.firstChild;}
var left=el.offsetLeft;var top=el.offsetTop;var op=el.offsetParent;var root=DOMScroll.getScrollWrapper()||document.body;var fixed=false;while(el.parentNode&&root!=el.parentNode&&document.body!=el.parentNode){el=el.parentNode;if(!isNaN(el.scrollTop)){if(!(ua.opera()<9.50)||!operaIgnoreScroll[window.getComputedStyle(el,'').getPropertyValue('display')]){top-=el.scrollTop;left-=el.scrollLeft;}}
if(op==el){if(ua.safari()<500&&el.tagName=='TR'){top+=el.firstChild.offsetTop;left+=el.firstChild.offsetLeft;}else{top+=el.offsetTop;left+=el.offsetLeft;}
op=el.offsetParent;}
if(op&&CSS.getStyle(op,'position')=='fixed'){fixed=true;top+=op.offsetTop;left+=op.offsetLeft;break;}}
if(fixed){var scrollPosition=Vector2.getScrollPosition('document');left+=scrollPosition.x;top+=scrollPosition.y;}
return(new Vector2(left,top,'document').convertTo(domain));},getElementDimensions:function(el,useClient){if(ua.safariPreWebkit()&&el.nodeName=='TR'){var tds=el.getElementsByTagName('td');var dimensions=Vector2.getElementCompassPoint(tds[tds.length-1],Vector2.compass.southeast,useClient).sub(Vector2.getElementPosition(tds[0],'document',useClient));return dimensions;}
var x=(useClient?el.clientWidth:el.offsetWidth)||0;var y=(useClient?el.clientHeight:el.offsetHeight)||0;return new Vector2(x,y);},getHiddenElementDimensions:function(el){var element=$(el);var els=element.style;var originalVisibility=els.visibility;var originalPosition=els.position;var originalDisplay=els.display;if(originalDisplay=='none'){els.visibility='hidden';els.position='absolute';els.display='block';}
var originalDimensions=Vector2.getElementDimensions(element);els.display=originalDisplay;els.position=originalPosition;els.visibility=originalVisibility;return originalDimensions;},getElementCompassPoint:function(el,which,useClient){which=which||Vector2.compass.southeast;var p=Vector2.getElementPosition(el);var d=Vector2.getElementDimensions(el,useClient);var c=Vector2.compass;switch(which){case c.east:return p.add(d.x,d.y*.5);case c.west:return p.add(0,d.y*.5);case c.north:return p.add(d.x*.5,0);case c.south:return p.add(d.x*.5,d.y);case c.center:return p.add(d.mul(.5));case c.northwest:return p;case c.northeast:return p.add(d.x,0);case c.southwest:return p.add(0,d.y);case c.southeast:return p.add(d);}
Util.error('Unknown compass point %s.',which);return p;},getViewportDimensions:function(){var x=(window&&window.innerWidth)||(document&&document.documentElement&&document.documentElement.clientWidth)||(document&&document.body&&document.body.clientWidth)||0;var y=(window&&window.innerHeight)||(document&&document.documentElement&&document.documentElement.clientHeight)||(document&&document.body&&document.body.clientHeight)||0;return new Vector2(x,y,'viewport');},getDocumentDimensions:function(){var wrapper=DOMScroll.getScrollWrapper();var x=(wrapper&&wrapper.scrollWidth)||(document&&document.documentElement&&document.documentElement.scrollWidth)||(document&&document.body&&document.body.scrollWidth)||0;var y=(wrapper&&wrapper.scrollHeight)||(document&&document.documentElement&&document.documentElement.scrollHeight)||(document&&document.body&&document.body.scrollHeight)||0;return new Vector2(x,y,'document');},scrollIntoView:function(el){var offsetParent=el.offsetParent;var rect=Rect(el);var position=rect.boundWithin(Rect(offsetParent)).getPositionVector();rect.getPositionVector().sub(position).scrollElementBy(offsetParent);}});var operaIgnoreScroll={'table':true,'inline-table':true,'inline':true};function elementX(obj){return Vector2.getElementPosition(obj,'document').x;}
function elementY(obj){return Vector2.getElementPosition(obj,'document').y;}
NodeAugment.add({getPosition:Vector2.getElementPosition,getDimensions:Vector2.getElementDimensions,getHiddenDimensions:Vector2.getHiddenElementDimensions,getCompassPoint:Vector2.getElementCompassPoint});

var DOMScroll={_scrollWrapper:0,usingScrollWrapper:function(){return env_get('use_scroll_wrapper');},getScrollWrapper:function(){if(DOMScroll._scrollWrapper===0){DOMScroll._scrollWrapper=DOMScroll.usingScrollWrapper()?ge('scroll_wrapper'):null;}
return DOMScroll._scrollWrapper;},getScrollRoot:function(){return DOMScroll.getScrollWrapper()||document.body;},SCROLL_CHANGE:'scroll_change',_hasScrollListeners:false,_isScrolled:null,registerScrollChangeHandler:function(cb){Arbiter.subscribe(DOMScroll.SCROLL_CHANGE,cb);if(!DOMScroll._hasScrollListeners){DOMScroll._hasScrollListeners=true;Event.listen(window,'resize',DOMScroll.updateScrollState);}},updateScrollState:function(){if(DOMScroll.usingScrollWrapper()){var wrapper=DOMScroll.getScrollWrapper();var offset_dim=Vector2.getElementDimensions(wrapper);var client_dim=Vector2.getElementDimensions(wrapper,true);var is_scrolled_x=(offset_dim.y>client_dim.y);var is_scrolled_y=(offset_dim.x>client_dim.x);}else{var viewport_dim=Vector2.getViewportDimensions();var document_dim=Vector2.getDocumentDimensions();var is_scrolled_x=(document_dim.x>viewport_dim.x);var is_scrolled_y=(document_dim.y>viewport_dim.y);}
is_scrolled_x+=0;is_scrolled_y+=0;var changed=(DOMScroll._isScrolled===null)||(is_scrolled_x!=DOMScroll._isScrolled.x)||(is_scrolled_y!=DOMScroll._isScrolled.y);if(changed){DOMScroll._isScrolled=new Vector2(is_scrolled_x,is_scrolled_y);var message={sender:DOMScroll,is_scrolled:DOMScroll.getScrollState()};Arbiter.inform(DOMScroll.SCROLL_CHANGE,message,Arbiter.BEHAVIOR_STATE);}},getScrollState:function(){if(DOMScroll._isScrolled===null){DOMScroll.updateScrollState();}
return DOMScroll._isScrolled;},_scrollbarSize:null,_initScrollbarSize:function(){var inner=$N('p');inner.style.width='100%';inner.style.height='200px';var outer=$N('div');outer.style.position='absolute';outer.style.top='0px';outer.style.left='0px';outer.style.visibility='hidden';outer.style.width='200px';outer.style.height='150px';outer.style.overflow='hidden';outer.appendChild(inner);document.body.appendChild(outer);var w1=inner.offsetWidth;outer.style.overflow='scroll';var w2=inner.offsetWidth;if(w1==w2){w2=outer.clientWidth;}
document.body.removeChild(outer);DOMScroll._scrollbarSize=w1-w2;if(DOMScroll._scrollbarSize<5){DOMScroll._scrollbarSize=15;}},getScrollbarSize:function(){if(DOMScroll._scrollbarSize===null){DOMScroll._initScrollbarSize();}
return DOMScroll._scrollbarSize;},scrollTo:function(v,use_animation,center,bottom_offset){use_animation=use_animation||use_animation===undefined;if(!(v instanceof Vector2)){var x=Vector2.getScrollPosition().x;var y=Vector2.getElementPosition($(v)).y;y=y-Math.min(0,Math.max(Vector2.getViewportDimensions().y/3,100));v=new Vector2(x,y,'document');}
if(center){v.y-=Vector2.getViewportDimensions().y/2;}else if(bottom_offset){v.y-=Vector2.getViewportDimensions().y;v.y+=bottom_offset;}
v=v.convertTo('document');var wrapper=DOMScroll.getScrollWrapper();if(use_animation&&window.animation){var root=wrapper||document.body;animation(root).to('scrollTop',v.y).to('scrollLeft',v.x).ease(animation.ease.end).duration(750).go();}else if(wrapper){wrapper.scrollTop=v.y;wrapper.scrollLeft=v.x;}else if(window.scrollTo){window.scrollTo(v.x,v.y);}}};

String.prototype.trim=function(){if(this==window){return null;}
return this.replace(/^\s*|\s*$/g,'');};function trim(text){try{return String(text.toString()).trim();}catch(ignored){return'';}}
String.prototype.startsWith=function(substr){if(this==window){return null;}
return this.substring(0,substr.length)==substr;};String.prototype.endsWith=function(substr){if(this==window){return null;}
return this.length>=substr.length&&this.substring(this.length-substr.length)==substr;};String.prototype.split=(function(split){return function(separator,limit){var flags="";if(separator===null||limit===null){return[];}else if(typeof separator=='string'){return split.call(this,separator,limit);}else if(separator===undefined){return[this.toString()];}else if(separator instanceof RegExp){if(!separator._2||!separator._1){flags=separator.toString().replace(/^[\S\s]+\//,"");if(!separator._1){if(!separator.global){separator._1=new RegExp(separator.source,"g"+flags);}else{separator._1=1;}}}
separator1=separator._1===1?separator:separator._1;var separator2=(separator._2?separator._2:separator._2=new RegExp("^"+separator1.source+"$",flags));if(limit===undefined||limit<0){limit=false;}else{limit=Math.floor(limit);if(!limit)return[];}
var match,output=[],lastLastIndex=0,i=0;while((limit?i++<=limit:true)&&(match=separator1.exec(this))){if((match[0].length===0)&&(separator1.lastIndex>match.index)){separator1.lastIndex--;}
if(separator1.lastIndex>lastLastIndex){if(match.length>1){match[0].replace(separator2,function(){for(var j=1;j<arguments.length-2;j++){if(arguments[j]===undefined)match[j]=undefined;}});}
output=output.concat(this.substring(lastLastIndex,match.index),(match.index===this.length?[]:match.slice(1)));lastLastIndex=separator1.lastIndex;}
if(match[0].length===0){separator1.lastIndex++;}}
return(lastLastIndex===this.length)?(separator1.test("")?output:output.concat("")):(limit?output:output.concat(this.substring(lastLastIndex)));}else{return split.call(this,separator,limit);}};})(String.prototype.split);

function List(length){if(arguments.length>1){for(var ii=0;ii<arguments.length;ii++){this.push(arguments[ii]);}}else{this.resize(length||0);}}
List.prototype.length=0;List.prototype.size=function(){return this.length;}
List.prototype.resize=function(new_size){this.length=new_size;return this;}
List.prototype.alloc=function(n){return new List(n);}
List.prototype.toString=function(){return'['+this.join(', ')+']';}
List.prototype.push=Array.prototype.push;List.prototype.pop=Array.prototype.pop;List.prototype.join=Array.prototype.join;List.prototype.map=Array.prototype.map;List.prototype.forEach=Array.prototype.forEach;List.prototype.each=Array.prototype.each;List.prototype.filter=Array.prototype.filter;List.prototype.every=Array.prototype.every;List.prototype.some=Array.prototype.some;List.prototype.pull=Array.prototype.pull;List.prototype.pullEach=Array.prototype.pullEach;List.prototype.pullFilter=Array.prototype.pullFilter;List.prototype.splice=Array.prototype.splice;

function HTML(content){if(this===window){if(content instanceof HTML){return content;}
return new HTML(content);}
this._content=content;this._defer=false;this._extra_action='';this._nodes=null;this._inline_js=bagofholding;this._has_option_elements=false;return this;}
copy_properties(HTML.prototype,{toString:function(){var str=this._content;if(this._extra_action){str+='<script type="text/javascript">'+this._extra_action
+'</scr'+'ipt>';}
return str;},setAction:function(js){this._extra_action=js;return this;},getAction:function(){this._fillCache();var fn=function(){this._inline_js();eval_global(this._extra_action);}.bind(this);if(this.getDeferred()){return fn.defer.bind(fn);}else{return fn;}},setDeferred:function(defer){this._defer=!!defer;return this;},getDeferred:function(){return this._defer;},getContent:function(){return this._content;},getNodes:function(){this._fillCache();return this._nodes;},getRootNode:function(){return this.getNodes()[0];},hasOptionElements:function(){this._fillCache();return this._has_option_elements;},_fillCache:function(){if(null!==this._nodes){return;}
var html=this._content;if(!html){this._nodes=[];return;}
html=html.replace(/(<(\w+)[^>]*?)\/>/g,function(all,front,tag){return tag.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?all:front+'></'+tag+'>';});var tags=html.trim().toLowerCase(),wrapper_elem=document.createElement('div'),dummy_span=false;var wrap=(!tags.indexOf('<opt')&&[1,'<select multiple="multiple" class="__WRAPPER">','</select>'])||(!tags.indexOf('<leg')&&[1,'<fieldset class="__WRAPPER">','</fieldset>'])||(tags.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,'<table class="__WRAPPER">','</table>'])||(!tags.indexOf('<tr')&&[2,'<table><tbody class="__WRAPPER">','</tbody></table>'])||((!tags.indexOf('<td')||!tags.indexOf('<th'))&&[3,'<table><tbody><tr class="__WRAPPER">','</tr></tbody></table>'])||(!tags.indexOf('<col')&&[2,'<table><tbody></tbody><colgroup class="__WRAPPER">','</colgroup></table>'])||null;if(null===wrap){wrapper_elem.className='__WRAPPER';if(ua.ie()){wrap=[0,'<span style="display:none">&nbsp;</span>',''];dummy_span=true;}else{wrap=[0,'',''];}}
wrapper_elem.innerHTML=wrap[1]+html+wrap[2];;while(wrap[0]--){wrapper_elem=wrapper_elem.lastChild;}
if(dummy_span){wrapper_elem.removeChild(wrapper_elem.firstChild);}
if(wrapper_elem.className!='__WRAPPER'){Util.warn('HTML._fillCache: HTML markup is not well formed.');}
if(0!=wrapper_elem.getElementsByTagName('option').length){this._has_option_elements=true;}
if(ua.ie()){var tbody;if(!tags.indexOf('<table')&&-1==tags.indexOf('<tbody')){tbody=wrapper_elem.firstChild&&wrapper_elem.firstChild.childNodes;}else if(wrap[1]=='<table>'&&-1==tags.indexOf('<tbody')){tbody=wrapper_elem.childNodes;}else{tbody=[];}
for(var ii=tbody.length-1;ii>=0;--ii){if(tbody[ii].nodeName&&tbody[ii].nodeName.toLowerCase()=='tbody'&&tbody[ii].childNodes.length==0){tbody[ii].parentNode.removeChild(tbody[ii]);}}}
var scripts=wrapper_elem.getElementsByTagName('script');var callbacks=[];for(var i=0;i<scripts.length;i++){if(scripts[i].src){callbacks.push(Bootloader.requestResource.bind(Bootloader,'js',scripts[i].src));}else{callbacks.push(eval_global.bind(null,scripts[i].innerHTML));}}
for(var i=scripts.length-1;i>=0;i--){scripts[i].parentNode.removeChild(scripts[i]);}
var extracted_js=function(){for(var ii=0;ii<callbacks.length;ii++){callbacks[ii]();}};this._nodes=to_array(wrapper_elem.childNodes);this._inline_js=extracted_js;}});

function show(){for(var i=0;i<arguments.length;i++){var element=ge(arguments[i]);if(element&&element.style)element.style.display='';}
return false;}
function hide(){for(var i=0;i<arguments.length;i++){var element=ge(arguments[i]);if(element&&element.style)element.style.display='none';}
return false;}
function shown(el){el=ge(el);return(el.style.display!='none'&&!(el.style.display==''&&el.offsetWidth==0));}
function toggle(){for(var i=0;i<arguments.length;i++){var element=$(arguments[i]);element.style.display=CSS.getStyle(element,"display")=='block'?'none':'block';}
return false;}
function toggleDisplayNone(){for(var i=0;i<arguments.length;i++){var element=$(arguments[i]);if(shown(element)){hide(element);}else{show(element);}}
return false;}
function set_inner_html(obj,html,defer_js_execution){DOM.setContent(obj,HTML(html).setDeferred(!!defer_js_execution));}
function eval_global(js){if('string'!=typeof(js)){throw new Error('JS sent to eval_global is not a string.  Only strings '+'are permitted.');}else if(''==js){return;}
var obj=document.createElement('script');obj.type='text/javascript';try{obj.appendChild(document.createTextNode(js));}catch(e){obj.text=js;}
document.body.appendChild(obj);}
function expandCollapseInplace(topElemId,bottomElemId){topElem=ge(topElemId);bottomElem=ge(bottomElemId);if(!topElem||!bottomElem){return false;}
topElemHeight=topElem.clientHeight;if(shown(bottomElemId)){bottomElemHeight=bottomElem.clientHeight;newHeight=topElemHeight+bottomElemHeight;topElem.style.height=newHeight+'px';CSS.addClass(bottomElem,'hidden_elem');}else{CSS.removeClass(bottomElem,'hidden_elem');bottomElemHeight=bottomElem.clientHeight;newHeight=topElemHeight-bottomElemHeight;topElem.style.height=newHeight+'px';}
return true;}

var DOM={tryElement:function(id,no_augment){if(typeof(id)=='undefined'){Util.error('Tried to get "undefined" element!');return null;}
var obj;var aug=no_augment?identity:NodeAugment.extend;if(typeof(id)=='string'){if(id=='book'){Util.error('FB95: Trying to get #book element from JS. #book no'+'longer exists.');}
obj=document.getElementById(id);if(!(ua.ie()>=7&&ua.ie()<8)){return aug(obj);}
if(!obj){return null;}else if(typeof(obj.id)=='string'&&obj.id==id){return aug(obj);}else{var candidates=document.getElementsByName(id);if(!candidates||!candidates.length){return null;}
var maybe=[];for(var ii=0;ii<candidates.length;ii++){var c=candidates[ii];if(!c.id&&id){continue;}
if(typeof(c.id)=='string'&&c.id!=id){continue;}
maybe.push(candidates[ii]);}
if(!maybe.length){return null;}
return aug(maybe[0]);}}
return aug(id);},getElement:function(id,no_augment){var el=DOM.tryElement.apply(null,$A(arguments),no_augment);if(!el){Util.warn('Tried to get element %q, but it is not present in the page. (Use '+'ge() to test for the presence of an element.)',arguments[0]);}
return el;},find:function(element,selector_str){var elements=DOM.scry(element,selector_str);if(1!=elements.length){Util.error('DOM.find located %d elements that matched the selector `%s\''+'.  Please only use find when you are sure that 1 element '+'should match (like $).  Otherwise, please use DOM.scry.',elements.length,selector_str);return null;}
return elements[0];},scry:function(element,selector_str,no_augment){var selectors=selector_str.split(' ');var candidates=[element||document];var elem_is_document=candidates[0]==document;for(var i=0;i<selectors.length;i++){if(candidates.length==0){break;}
if(selectors[i]==''){continue;}
var selector=selectors[i];var new_candidates=[];selector=selector.replace(/\./g,' .');selector=selector.replace(/\#/g,' #');selector=selector.replace(/\[/g,' [');var sub_selectors=selector.split(' ');var tag=sub_selectors[0]||'*';var id_selector=sub_selectors[1]&&sub_selectors[1].charAt(0)=='#';if(i==0&&tag=='*'&&elem_is_document&&Util.isDevelopmentEnvironment()&&!id_selector){Util.error('DOM.scry was called without a tag in the selector. You '+'should probably use DOM.scry like `%s` instead of `%s`.','div'+selector_str,selector_str);}
if(id_selector){var elem=ge(sub_selectors[1].slice(1),true);if(elem&&('*'==tag||elem.tagName.toLowerCase()==tag)){for(var iter=0;iter<candidates.length;iter++){if(document==candidates[iter]||DOM.contains(candidates[iter],elem)){new_candidates=[elem];break;}}}}else{var tag_candidates=[];var candidate_l=candidates.length;for(var ii=0;ii<candidate_l;ii++){var elements=candidates[ii].getElementsByTagName(tag);var elements_l=elements.length;for(var jj=0;jj<elements_l;jj++){tag_candidates.push(elements[jj]);}}
var is_class;var class_regexp;for(var sub_iter=1;sub_iter<sub_selectors.length;sub_iter++){var sub_selector=sub_selectors[sub_iter];if(sub_selector.charAt(0)=='.'){is_class=true;class_regexp=new RegExp('\\b'+sub_selector.substring(1)+'\\b');}else{is_class=false;}
for(var ii=0;ii<tag_candidates.length;ii++){var tag_candidate=tag_candidates[ii];if(!tag_candidate){continue;}
if(is_class){if(!class_regexp.test(tag_candidate.className)){delete tag_candidates[ii];}
continue;}else{var class_selector=sub_selector.slice(1,sub_selector.length-1);if(class_selector.indexOf('=')==-1){if(tag_candidate.getAttribute(class_selector)===null){delete tag_candidates[ii];continue;}}else{var parts=class_selector.split('=');var attr=parts[0];var value=parts[1];value=value.slice(1,value.length-1);if(tag_candidate.getAttribute(attr)!=value){delete tag_candidates[ii];continue;}}}}}
for(var ii=0;ii<tag_candidates.length;ii++){if(tag_candidates[ii]){new_candidates.push(tag_candidates[ii]);}}}
candidates=new_candidates;}
var list=null;if(!no_augment){for(var ii=0;ii<candidates.length;ii++){$(candidates[ii]);}
list=new NodeList();list.push.apply(list,$A(candidates));}else{list=candidates;}
return list;},getBoxWidth:function(obj){var pL=parseInt(CSS.getStyle(obj,'paddingLeft'),10),pR=parseInt(CSS.getStyle(obj,'paddingRight'),10),bL=parseInt(CSS.getStyle(obj,'borderLeftWidth'),10),bR=parseInt(CSS.getStyle(obj,'borderRightWidth'),10);return obj.offsetWidth-(pL?pL:0)-(pR?pR:0)-(bL?bL:0)-
(bR?bR:0);},getBoxHeight:function(obj){var pT=parseInt(CSS.getStyle(obj,'paddingTop'),10),pB=parseInt(CSS.getStyle(obj,'paddingBottom'),10),bT=parseInt(CSS.getStyle(obj,'borderTopWidth'),10),bW=parseInt(CSS.getStyle(obj,'borderBottomWidth'),10);return obj.offsetHeight-(pT?pT:0)-(pB?pB:0)-(bT?bT:0)-
(bW?bW:0);},setText:function(el,text){if(DOM.isNode(el,DOM.NODE_TYPES.TEXT)){el.data=text;}else{DOM.empty(el);el.appendChild(document.createTextNode(text));}},getText:(function(){var div=document.createElement('div'),prop=div.innerText==null?'textContent':'innerText';return function(el){if(!el){return'';}else if(DOM.isNode(el,DOM.NODE_TYPES.TEXT)){return el.data;}else{return el[prop];}};})(),_getSelectionPrivate:function(onlyTestForSupport){var result=onlyTestForSupport?false:'';if(document.selection&&document.selection.createRange&&document.selection.createRange.text){result=onlyTestForSupport?true:document.selection.createRange().text;}
else if(document.getSelection){result=onlyTestForSupport?true:document.getSelection();}
else if(window.getSelection){result=onlyTestForSupport?true:window.getSelection();}
return result;},getSelectionSupported:function(){return DOM._getSelectionPrivate(true);},getSelection:function(){return DOM._getSelectionPrivate(false);},create:function(element,attributes,children,no_augment){element=document.createElement(element);if(attributes){attributes=copy_properties({},attributes);if(attributes.style){copy_properties(element.style,attributes.style);delete attributes.style;}
for(var k in attributes){if(k.toLowerCase().indexOf('on')==0){if(typeof attributes[k]!='function'){Util.error('Handlers passed to DOM.create must be functions; '+'handler passed for '+k+' was '+
(typeof attributes[k])+'.');}
Event.listen(element,k.substr(2),attributes[k]);delete attributes[k];}}
copy_properties(element,attributes);}
if(children!=undefined){DOM.setContent(element,children);}
return $(element,no_augment);},setID:function(element,id){element.id=id;},prependContent:function(parent,content){if(!DOM.isNode(parent)){throw new Error('DOM.prependContent: reference element is not a node');}
var append_fn=function(fragment){if(parent.firstChild){parent.insertBefore(fragment,parent.firstChild);}else{parent.appendChild(fragment);}};return DOM._addContent(content,append_fn,parent);},insertAfter:function(reference_element,content){if(!DOM.isNode(reference_element)||!reference_element.parentNode){throw new Error('DOM.insertAfter: reference element is not a node');}
var append_fn=function(fragment){if(reference_element.nextSibling){reference_element.parentNode.insertBefore(fragment,reference_element.nextSibling);}else{reference_element.parentNode.appendChild(fragment);}};return DOM._addContent(content,append_fn,reference_element.parentNode);},insertBefore:function(content,reference_element){if(!DOM.isNode(reference_element)||!reference_element.parentNode){throw new Error('DOM.insertBefore: reference element is not a node or '+'does not have a parent.');}
var append_fn=function(fragment){reference_element.parentNode.insertBefore(fragment,reference_element);};return DOM._addContent(content,append_fn,reference_element.parentNode);},setContent:function(el,content){if(!DOM.isNode(el)){throw new Error('DOM.setContent: reference element is not a node');}
DOM.empty(el);return DOM.appendContent(el,content);},appendContent:function(reference_element,content){if(!DOM.isNode(reference_element)){throw new Error('DOM.appendContent: reference element is not a node');}
var append_fn=function(fragment){reference_element.appendChild(fragment);};return DOM._addContent(content,append_fn,reference_element);},replace:function(reference_element,content){if(!DOM.isNode(reference_element)||!reference_element.parentNode){throw new Error('DOM.replace: reference element must be a node with a'+' parent');}
var append_fn=function(fragment){reference_element.parentNode.replaceChild(fragment,reference_element);};return DOM._addContent(content,append_fn,reference_element.parentNode);},_gettingCaretPosition:false,getCaretPosition:function(element){element=$(element);if(!DOM.isNode(element,['input','textarea'])){return{start:undefined,end:undefined};}
if(!document.selection){return{start:element.selectionStart,end:element.selectionEnd};}
if(DOM.isNode(element,'input')){var range=document.selection.createRange();return{start:-range.moveStart('character',-element.value.length),end:-range.moveEnd('character',-element.value.length)};}else{if(!DOM._gettingCaretPosition){DOM._gettingCaretPosition=true;element.focus();DOM._gettingCaretPosition=false;}
var range=document.selection.createRange();var range2=range.duplicate();range2.moveToElementText(element);range2.setEndPoint('StartToEnd',range);var end=element.value.length-range2.text.length;range2.setEndPoint('StartToStart',range);return{start:element.value.length-range2.text.length,end:end};}},setCaretPosition:function(obj,start,end){obj=$(obj);if(document.selection){if(obj.tagName=='TEXTAREA'){var i=obj.value.indexOf("\r",0);while(i!=-1&&i<end){end--;if(i<start){start--;}
i=obj.value.indexOf("\r",i+1);}}
var range=obj.createTextRange();range.collapse(true);range.moveStart('character',start);if(end!=undefined){range.moveEnd('character',end-start);}
range.select();}else{obj.selectionStart=start;var sel_end=end==undefined?start:end;obj.selectionEnd=Math.min(sel_end,obj.value.length);obj.focus();}},remove:function(element,keep_nodes){element=$(element,true);if(element.parentNode){element.parentNode.removeChild(element);if(!keep_nodes&&ua.ie()<8){try{}catch(ignored){}}}},empty:function(element){element=$(element,true);while(element.firstChild){DOM.remove(element.firstChild);}},contains:function(outer_obj,inner_obj){outer_obj=ge(outer_obj,true);inner_obj=ge(inner_obj,true);if(!outer_obj||!inner_obj){return false;}else if(outer_obj===inner_obj){return true;}else if(DOM.isNode(outer_obj,'#text')){return false;}else if(DOM.isNode(inner_obj,'#text')){return DOM.contains(outer_obj,inner_obj.parentNode);}else if(outer_obj.contains){return outer_obj.contains(inner_obj);}else if(outer_obj.compareDocumentPosition){return!!(outer_obj.compareDocumentPosition(inner_obj)&16);}else{return false;}},getRootElement:function(){var elem=null;if(window.Quickling&&Quickling.isActive()){elem=ge('content');}
return elem||DOMScroll.getScrollRoot();},suppressSelection:function(element){if(typeof element.onselectstart!='undefined'){element.listen('selectstart',function(){return false;});}else if(typeof element.style.MozUserSelect!='undefined'){element.style.MozUserSelect='none';}else{element.listen('mousedown',function(){return false;});}
return element;},isNode:function(o,of_type){if(typeof(Node)=='undefined'){Node=null;}
try{if(!o||!((Node!=undefined&&o instanceof Node)||o.nodeName)){return false;}}catch(ignored){return false;}
if(typeof(of_type)!=='undefined'){of_type=arrayize(of_type).map(function(i){return(i+'').toUpperCase();});var name,type;try{name=new String(o.nodeName).toUpperCase();type=o.nodeType;}catch(ignored){return false;}
for(var ii=0;ii<of_type.length;ii++){try{if(name==of_type[ii]||type==of_type[ii]){return true;}}catch(ignored){}}
return false;}
return true;},NODE_TYPES:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION_NODE:12},_addContent:function(content,append_fn,target_element){var item,elements=new NodeList(),callbacks=[];var fragment=document.createDocumentFragment();if(!(content instanceof Array)){content=[content];}
for(var ii=0;ii<content.length;ii++){item=content[ii];if(item instanceof HTML){callbacks.push(item.getAction());var new_nodes=item.getNodes(),cloned_item;for(var jj=0;jj<new_nodes.length;jj++){cloned_item=(ua.safari()||(ua.ie()&&item.hasOptionElements()))?new_nodes[jj]:new_nodes[jj].cloneNode(true);elements.push(cloned_item);fragment.appendChild(cloned_item);}}else if(is_scalar(item)){var text=document.createTextNode(item);elements.push(text);fragment.appendChild(text);}else if(DOM.isNode(item)){elements.push(item);fragment.appendChild(item);}else if(item instanceof Array){Util.error('DOM._addContent: Nested arrays not supported');}else if(item!==null){Util.error('DOM._addContent: No way to set content %q.',item);}}
append_fn(fragment);for(var ii=0;ii<callbacks.length;ii++){callbacks[ii]();}
return elements;},findParentByClass:function(elem,cls){while(DOM.isNode(elem)){if(CSS.hasClass(elem,cls)){return elem;}
elem=elem.parentNode;}
return null;}};function NodeList(length){if(!NodeList._augmented){copy_properties(NodeList.prototype,NodeList._getAugment());NodeList._augmented=true;}
List.call(this,length);}
NodeList.prototype=new List();copy_properties(NodeList.prototype,{toString:function(){return'[NodeList]';}});copy_properties(NodeList,{_augmented:false,_getAugment:function(){var binditerator=function(iterator,fn){return function(){var args=$A(arguments);return this[iterator](function(value,idx,list){return fn.apply(null,[value].concat(args));});};};var selfreduce=function(fn){return function(){fn.apply(this,$A(arguments));return this;};};var mergereduce=function(type,fn){return function(){var unmerged=fn.apply(this,$A(arguments));var result=new type();for(var ii=0;ii<unmerged.length;ii++){result.push.apply(result,$A(unmerged[ii]));}
return result;};};return{scry:mergereduce(NodeList,binditerator('map',DOM.scry)),addClass:selfreduce(binditerator('map',CSS.addClass)),removeClass:selfreduce(binditerator('map',CSS.removeClass)),hasClass:binditerator('every',CSS.hasClass),toggleClass:selfreduce(binditerator('map',CSS.toggleClass)),getStyle:binditerator('map',CSS.getStyle),setStyle:selfreduce(binditerator('map',CSS.setStyle))};}});function $N(element,attributes,content){if(typeof attributes!='object'||DOM.isNode(attributes)||attributes instanceof Array||attributes instanceof HTML){content=attributes;attributes=null;}
return DOM.create(element,attributes,content);}
var ge=DOM.tryElement;var $$=function _$$(rules){if(Util.isDevelopmentEnvironment()&&rules&&!(/^[a-zA-Z1-6]+$/).test(rules)&&-1==rules.indexOf('#')){Util.warn('$$() has been called with `%s\' as a selector. You should not use only '+'class or attribute selectors from the document element, because these '+'can not be efficiently queried. Call DOM.find() or DOM.scry() with a '+'root element, or look at DOM.scry() for more information.',rules);}
return DOM.scry.apply(null,[document].concat($A(arguments)));};var $=DOM.getElement;NodeAugment.add({setContent:DOM.setContent,prependContent:DOM.prependContent,appendContent:DOM.appendContent,replace:DOM.replace,remove:DOM.remove,empty:DOM.empty,scry:DOM.scry,find:DOM.find,isNode:DOM.isNode,setText:DOM.setText,getText:DOM.getText});

var CSS={setClass:function(element,className){$(element,true).className=className||'';return element;},hasClass:function(element,className){return CSSLite.hasClass($(element,true),className);},addClass:function(element,className){return CSSLite.addClass($(element,true),className);},removeClass:function(element,className){return CSSLite.removeClass($(element,true),className);},toggleClass:function(element,className){return CSS.hasClass(element,className)?CSS.removeClass(element,className):CSS.addClass(element,className);},conditionClass:function(element,className,condition){return(condition?CSS.addClass:CSS.removeClass)(element,className);},chooseClass:function(element,condition,trueClass,falseClass){CSS.conditionClass(element,trueClass,condition);CSS.conditionClass(element,falseClass,!condition);},setStyle:function(element,name,value){element.style[name]=value;return element;},getStyle:function(element,property){element=$(element);function hyphenate(property){return property.replace(/[A-Z]/g,function(match){return'-'+match.toLowerCase();});}
if(window.getComputedStyle){return window.getComputedStyle(element,null).getPropertyValue(hyphenate(property));}
if(document.defaultView&&document.defaultView.getComputedStyle){var computedStyle=document.defaultView.getComputedStyle(element,null);if(computedStyle)
return computedStyle.getPropertyValue(hyphenate(property));if(property=="display")
return"none";Util.error("Can't retrieve requested style %q due to a bug in Safari",property);}
if(element.currentStyle){return element.currentStyle[property];}
return element.style[property];},setOpacity:function(element,opacity){element=$(element);var opaque=(opacity==1);try{element.style.opacity=(opaque?'':''+opacity);}catch(ignored){}
try{element.style.filter=(opaque?'':'alpha(opacity='+(opacity*100)+')');}catch(ignored){}},getOpacity:function(element){element=$(element);var opacity=CSS.getStyle(element,'filter');var val=null;if(opacity&&(val=/(\d+(?:\.\d+)?)/.exec(opacity))){return parseFloat(val.pop())/100;}else if(opacity=CSS.getStyle(element,'opacity')){return parseFloat(opacity);}else{return 1.0;}},Cursor:{kGrabbable:'grabbable',kGrabbing:'grabbing',kEditable:'editable',set:function(element,name){element=$(element);element=element||document.body;switch(name){case CSS.Cursor.kEditable:name='text';break;case CSS.Cursor.kGrabbable:if(ua.firefox()){name='-moz-grab';}else{name='move';}
break;case CSS.Cursor.kGrabbing:if(ua.firefox()){name='-moz-grabbing';}else{name='move';}
break;}
element.style.cursor=name;}}};NodeAugment.add(CSS);

function escapeURI(u)
{if(encodeURIComponent){return encodeURIComponent(u);}
if(escape){return escape(u);}}
function htmlspecialchars(text){if(typeof(text)=='undefined'||text===null||!text.toString){return'';}
if(text===false){return'0';}else if(text===true){return'1';}
return text.toString().replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/'/g,'&#039;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function htmlize(text){return htmlspecialchars(text).replace(/\n/g,'<br />');}
function escape_js_quotes(text){if(typeof(text)=='undefined'||!text.toString){return'';}
return text.toString().replace(/\\/g,'\\\\').replace(/\n/g,'\\n').replace(/\r/g,'\\r').replace(/"/g,'\\x22').replace(/'/g,'\\\'').replace(/</g,'\\x3c').replace(/>/g,'\\x3e').replace(/&/g,'\\x26');}

function sprintf(){if(arguments.length==0){Util.warn('sprintf() was called with no arguments; it should be called with at '+'least one argument.');return'';}
var args=['This is an argument vector.'];for(var ii=arguments.length-1;ii>0;ii--){if(typeof(arguments[ii])=="undefined"){Util.log('You passed an undefined argument (argument '+ii+') to sprintf(). '+'Pattern was: `'+(arguments[0])+'\'.','error');args.push('');}else if(arguments[ii]===null){args.push('');}else if(arguments[ii]===true){args.push('true');}else if(arguments[ii]===false){args.push('false');}else{if(!arguments[ii].toString){Util.log('Argument '+(ii+1)+' to sprintf() does not have a toString() '+'method. The pattern was: `'+(arguments[0])+'\'.','error');return'';}
args.push(arguments[ii]);}}
var pattern=arguments[0];pattern=pattern.toString().split('%');var patlen=pattern.length;var result=pattern[0];for(var ii=1;ii<patlen;ii++){if(args.length==0){Util.log('Not enough arguments were provide to sprintf(). The pattern was: '+'`'+(arguments[0])+'\'.','error');return'';}
if(!pattern[ii].length){result+="%";continue;}
var p=0;var m=0;var r='';var padChar=' ';var padSize=null;var maxSize=null;var rawPad='';var pos=0;if(m=pattern[ii].match(/^('.)?(?:(-?\d+\.)?(-?\d+)?)/)){if(m[2]!==undefined&&m[2].length){padSize=parseInt(rawPad=m[2]);}
if(m[3]!==undefined&&m[3].length){if(padSize!==null){maxSize=parseInt(m[3]);}else{padSize=parseInt(rawPad=m[3]);}}
pos=m[0].length;if(m[1]!==undefined&&m[1].length){padChar=m[1].charAt(1);}else{if(rawPad.charAt(0)==0){padChar='0';}}}
switch(pattern[ii].charAt(pos)){case's':case'#':raw=htmlspecialchars(args.pop().toString());break;case'h':raw=args.pop().toString();break;case'd':raw=parseInt(args.pop()).toString();break;case'f':raw=parseFloat(args.pop()).toString();break;case'q':raw="`"+htmlspecialchars(args.pop().toString())+"'";break;case'e':raw="'"+escape_js_quotes(args.pop().toString())+"'";break;case'L':var list=args.pop();for(var ii=0;ii<list.length;ii++){list[ii]="`"+htmlspecialchars(args.pop().toString())+"'";}
if(list.length>1){list[list.length-1]='and '+list[list.length-1];}
raw=list.join(', ');break;case'x':var x=args.pop();var line=null;var src=null;try{if(typeof(x['line'])!='undefined'){line=x.line;}else if(typeof(x['lineNumber'])!='undefined'){line=x.lineNumber;}
if(typeof(x['sourceURL'])!='undefined'){src=x['sourceURL'];}else if(typeof(x['fileName'])!='undefined'){src=x['fileName'];}}catch(exception){}
var s='[An Exception]';try{s=x.message||x.toString();}catch(exception){}
raw=s+' [at '+Stack.frameSrcToString(src,line)+']';break;default:raw="%"+pattern[ii].charAt(pos+1);break;}
if(padSize!==null){if(raw.length<Math.abs(padSize)){var padding='';var padlen=(Math.abs(padSize)-raw.length);for(var ll=0;ll<padlen;ll++){padding+=padChar;}
if(padSize<0){raw+=padding;}else{raw=padding+raw;}}}
if(maxSize!==null){if(raw.length>maxSize){raw=raw.substr(0,maxSize);}}
result+=raw+pattern[ii].substring(pos+1);}
if(args.length>1){Util.log('Too many arguments ('+(args.length-1)+' extras) were passed to '+'sprintf(). Pattern was: `'+(arguments[0])+'\'.','error');}
return result;}

function AsyncRequest(uri){var dispatchResponse=bind(this,function(asyncResponse){if(asyncResponse.instrument){this.cavalrylogger=CavalryLogger.getInstance(asyncResponse.instrument);if(asyncResponse.tti_event){this.cavalrylogger.setTTIEvent(asyncResponse.tti_event);}
this.cavalrylogger.setTimeStamp('t_js');if(this.t_start){this.cavalrylogger.setValue('t_start',this.t_start);}}
if(!this._asyncResponse){this._asyncResponse=asyncResponse;}
try{this.clearStatusIndicator();if(this.initialHandler(asyncResponse)!==false){if(this.handler){try{this.handler(asyncResponse);}catch(exception){this.finallyHandler(asyncResponse);throw exception;}}
this.finallyHandler(asyncResponse);if(asyncResponse.instrument){this.cavalrylogger.setTimeStamp('t_html');this.cavalrylogger.setTimeStamp('t_domcontent');}
var onload=asyncResponse.onload;if(onload){for(var ii=0;ii<onload.length;ii++){try{(new Function(onload[ii]))();}catch(exception){Util.error('An onload hook in response to a request to to URI %q threw an '+'exception: %x. (This is not a problem with AsyncRequest, it is '+'a problem with the registered hook.)',this.getURI(),exception);}}}
if(asyncResponse.instrument){this.cavalrylogger.setTimeStamp('t_hooks');this.cavalrylogger.setTimeStamp('t_layout');this.cavalrylogger.setTimeStamp('t_onload');}
var onafterload=asyncResponse.onafterload;if(onafterload){for(var ii=0;ii<onafterload.length;ii++){try{(new Function(onafterload[ii]))();}catch(exception){Util.error('An onafterload hook in response to a request to to URI %q threw an '+'exception: %x. (This is not a problem with AsyncRequest, it is '+'a problem with the registered hook.)',this.getURI(),exception);}}}
var invalidate_cache=asyncResponse.invalidate_cache;if(invalidate_cache&&invalidate_cache.length){Arbiter.inform(Arbiter.PAGECACHE_INVALIDATE,invalidate_cache);}}
if(asyncResponse.cacheObservation&&typeof(TabConsoleCacheobserver)!='undefined'&&TabConsoleCacheobserver.instance){TabConsoleCacheobserver.getInstance().addAsyncObservation(asyncResponse.cacheObservation);}}catch(exception){Util.error('The user supplied handler function for an AsyncRequest to URI %q '+'threw an exception: %x. (This is not a problem with AsyncRequest, it '+'is a problem with the callback, which failed to catch the exception.)',this.getURI(),exception);}});var replayResponse=bind(this,function(){if(!this._asyncResponse){Util.warn('Unable to replay AsyncResponse for an AsyncRequest to '+this.getURI());return;}
Util.log('replaying the response for '+this.getURI());this._asyncResponse.setReplay(true);dispatchResponse(this._asyncResponse);});var dispatchErrorResponse=bind(this,function(asyncResponse,isTransport){try{this.clearStatusIndicator();var async_error=asyncResponse.getError();if(async_error==kError_Async_InternalCaptchaRequired){this._captchaHtml=asyncResponse.getPayload().captcha_html;this._displayCaptcha();}else if(async_error==kError_Async_ConfirmationRequired){var payload=asyncResponse.getPayload();this.requireConfirmation(payload.confirmation_message,payload.confirmation_title,payload.confirmation_button);this._displayConfirmation();}else if(this.initialHandler(asyncResponse)!==false){try{if(isTransport){this.transportErrorHandler(asyncResponse);}else{this.errorHandler(asyncResponse);}}catch(exception){this.finallyHandler(asyncResponse);throw exception;}
this.finallyHandler(asyncResponse);}}catch(exception){Util.error('Async error handler threw an exception for URI %q, when processing a '+'%d error: %x.',this.getURI(),asyncResponse.getError(),exception);}});var _interpretTransportResponse=bind(this,function(){if(this.getOption('suppressEvaluation')){var r=new AsyncResponse();r.payload=this.transport;return{asyncResponse:r};}
var shield="for (;;);";var shieldlen=shield.length;if(this.transport.responseText.length<=shieldlen){var kind=this.transport.responseText.length?('a '+this.transport.responseText.length+' byte'):'an empty';return{transportError:sprintf('An error occurred when making an AsyncRequest to %q. '+'The server returned '+kind+' response.',this.getURI())};}
var text=this.transport.responseText;var offset=0;while(text.charAt(offset)==" "||text.charAt(offset)=="\n"){offset++;}
if(offset&&text.substring(offset,offset+shieldlen)==shield){Util.error('Response for request to endpoint %q seems to be valid, but was '+'preceeded by whitespace. (This probably means that someone '+'committed whitespace in a header file.)',this.getURI());}
var safeResponse=text.substring(offset+shieldlen);try{var response=eval('('+safeResponse+')');}catch(exception){return{transportError:sprintf('Evaluation failed for <a href="javascript:aiert(%e);">'+'response from %q</a>: %x.',this.transport.responseText,this.getURI(),exception)};}
return interpretResponse(response);});var interpretResponse=bind(this,function(response){if(response.redirect){return{redirect:response.redirect};}
var r=new AsyncResponse();if(typeof(response.payload)=='undefined'||typeof(response.error)=='undefined'||typeof(response.errorDescription)=='undefined'||typeof(response.errorSummary)=='undefined'||typeof(response.errorIsWarning)=='undefined'){Util.warn('AsyncRequest to endpoint %q returned a JSON response, but it '+'is not properly formatted. The endpoint needs to provide a '+'response including both error and payload information; use '+'the AsyncResponse PHP class to do this easily.',this.getURI());r.payload=response;}else{copy_properties(r,response);}
return{asyncResponse:r};});var invokeResponseHandler=bind(this,function(interp){if(typeof(interp.redirect)!='undefined'){(function(){this.setURI(interp.redirect).send();}).bind(this).defer();return;}
if(this.handler||this.errorHandler||this.transportErrorHandler){if(typeof(interp.transportError)!='undefined'){var r=new AsyncResponse();var errorDescription=Util.isDevelopmentEnvironment()?interp.transportError:_tx("Something went wrong. We're working on getting this fixed as soon as we can. You may be able to try again.");copy_properties(r,{error:1000,errorSummary:_tx("Oops"),errorDescription:errorDescription});if(this.transportErrorHandler){dispatchErrorResponse(r,true);}else{Util.error('Something bad happened; provide a transport error handler for '+'complete details.');}
return;}
var r=interp.asyncResponse;if(r.instrument){this.t_start=(new Date()).getTime();}
if(r.getError()&&!r.getErrorIsWarning()){var fn=dispatchErrorResponse;}else{var fn=dispatchResponse;}
if(r.bootloadable){Bootloader.enableBootload(r.bootloadable);}
fn=fn.shield(null,r);fn=fn.defer.bind(fn);var is_transitional=false;if(this.preBootloadHandler){is_transitional=this.preBootloadHandler(r);}
if(r.bootload){Bootloader.loadResources(r.bootload,fn,is_transitional);}else{fn();}}});var invokeErrorHandler=bind(this,function(explicitError){try{if(!window.loaded){return;}}catch(ex){return;}
var r=new AsyncResponse();var err;try{err=explicitError||this.transport.status||1001;}catch(ex){err=1001;}
try{if(this.responseText==''){err=1002;}}catch(ignore){}
if(this.transportErrorHandler){var desc=sprintf('Transport error (#%d) while retrieving data from endpoint %q: %s',err,this.getURI(),AsyncRequest.getHTTPErrorDescription(err));if(!this.getOption('suppressErrorAlerts')){Util.error(desc);}
copy_properties(r,{error:err,errorSummary:AsyncRequest.getHTTPErrorSummary(err),errorDescription:desc});dispatchErrorResponse(r,true);}else{Util.error('Async request to %q failed with a %d error, but there was no error '+'handler available to deal with it.',this.getURI(),err);}});var handleResponse=function(response){var asyncResponse=this.interpretResponse(response);this.invokeResponseHandler(asyncResponse);}
var onStateChange=function(){try{if(this.transport.readyState==4){if(this.transport.status>=200&&this.transport.status<300){invokeResponseHandler(_interpretTransportResponse());}else{if(ua.safari()&&(typeof(this.transport.status)=='undefined')){invokeErrorHandler(1002);}else{invokeErrorHandler();}}
if(this.getOption('asynchronous')!==false){delete this.transport;}}}catch(exception){try{if(!window.loaded){return;}}catch(ex){return;}
delete this.transport;if(this.remainingRetries){--this.remainingRetries;this.send(true);}else{if(!this.getOption('suppressErrorAlerts')){Util.error('AsyncRequest exception when attempting to handle a state change: %x.',exception);}
invokeErrorHandler(1001);}}};copy_properties(this,{onstatechange:onStateChange,replayResponse:replayResponse,invokeResponseHandler:invokeResponseHandler,interpretResponse:interpretResponse,handleResponse:handleResponse,transport:null,method:'POST',uri:'',initialHandler:bagofholding,handler:null,errorHandler:null,transportErrorHandler:null,finallyHandler:bagofholding,statusElement:null,data:{},context:{},readOnly:false,writeRequiredParams:['post_form_id'],remainingRetries:0,option:{asynchronous:true,suppressErrorHandlerWarning:false,suppressEvaluation:false,suppressErrorAlerts:false,retries:1,jsonp:false,bundle:false,useIframeTransport:false,tfbEndpoint:true},_captchaHtml:'',_confirmationMessage:'',_confirmationTitle:'',_confirmationButton:'',_confirmationCallback:bagofholding,_requiresConfirmation:false,_replayable:undefined,_replayKey:''});if(typeof ErrorDialog!="undefined"){this.errorHandler=ErrorDialog.showAsyncError;this.transportErrorHandler=ErrorDialog.showAsyncError;}
if(uri!=undefined){this.setURI(uri);}
return this;}
copy_properties(AsyncRequest,{getHTTPErrorSummary:function(errCode){return AsyncRequest._getHTTPError(errCode).summary;},getHTTPErrorDescription:function(errCode){return AsyncRequest._getHTTPError(errCode).description;},pingURI:function(uri,data,synchronous){data=data||{};return new AsyncRequest().setURI(uri).setData(data).setOption('asynchronous',!synchronous).setOption('suppressErrorHandlerWarning',true).setErrorHandler(bagofholding).setTransportErrorHandler(bagofholding).send();},receiveJSONPResponse:function(path,data,more_chunked_response){if(this._JSONPReceivers[path]){var is_first=(this._JSONPReceivers[path].is_first===undefined);this._JSONPReceivers[path].is_first=is_first;for(var ii=0;ii<this._JSONPReceivers[path].length;ii++){var request=this._JSONPReceivers[path][ii];if(request.transportIframe&&!more_chunked_response){(function(x){DOMScroll.getScrollRoot().removeChild(x);}).bind(null,request.transportIframe).defer();}
var r=request.interpretResponse(data);r.asyncResponse.is_first=is_first;r.asyncResponse.is_last=!more_chunked_response;request.invokeResponseHandler(r);}
if(!more_chunked_response){delete this._JSONPReceivers[path];}}},_hasBundledRequest:function(){return!is_empty(AsyncRequest._allBundledRequests);},stashBundledRequest:function(){var ret=AsyncRequest._allBundledRequests;AsyncRequest._allBundledRequests={};return ret;},setBundledRequestProperties:function(properties){if(properties.stashedRequests){copy_properties(AsyncRequest._allBundledRequests,properties.stashedRequests);}
if(!AsyncRequest._hasBundledRequest()){var callback=properties.callback;callback&&callback();}else{copy_properties(AsyncRequest._bundledRequestProperties,properties);if(properties.start_immediately){AsyncRequest._sendBundledRequests();}}},_bundleRequest:function(request){if(request.getOption('jsonp')||request.getOption('useIframeTransport')){Util.error('You cannot bundle AsyncRequest that uses jsonp or iframe transport.');request.setOption('bundle',false);return false;}else if(!request.uri.isFacebookURI()){Util.error('You can not bundle AsyncRequest sent to non-facebook URIs');request.setOption('bundle',false);return false;}else if(!request.getOption('asynchronous')){Util.error('We cannot bundle synchronous AsyncRequests');request.setOption('bundle',false);return false;}
var path=request.uri.getPath();if(path in AsyncRequest._allBundledRequests){Util.warn('Bundling multiple AsyncRequests to the same endpoint is not '+'supported. They will still be sent seqentially. Only the last '+'AsyncRequest to a unique endpoint is included in the bundle.');var old_request=AsyncRequest._allBundledRequests[path];old_request.setOption('bundle',false).send();}
if(is_empty(AsyncRequest._allBundledRequests)){AsyncRequest._bundleTimer=setTimeout(function(){AsyncRequest._sendBundledRequests();},0);}
AsyncRequest._allBundledRequests[path]=request;return true;},_sendBundledRequests:function(){clearTimeout(AsyncRequest._bundleTimer);AsyncRequest._bundleTimer=null;var bundled_requests=AsyncRequest._allBundledRequests;AsyncRequest._allBundledRequests={};var property={};copy_properties(property,AsyncRequest._bundledRequestProperties);AsyncRequest._bundledRequestProperties={};var on_done=function(){property.callback&&property.callback();};if(is_empty(bundled_requests)){on_done();return;}
var data={};for(var path in bundled_requests){var request=bundled_requests[path];data[path]=URI.implodeQuery(request.data);}
var query_data={data:data}
if(property.extra_data){copy_properties(query_data,property.extra_data);}
new AsyncRequest().setURI('/ajax/proxy.php').setData(query_data).setMethod('POST').setInitialHandler(property.onInitialResponse||truth).setHandler(function(r){var payload=r.getPayload();var responses=payload.responses;for(var path in bundled_requests){var request=bundled_requests[path];if(path in responses){var asyncResponse=request.interpretResponse(responses[path]);request.invokeResponseHandler(asyncResponse);}else{var response={transportError:sprintf('An error occurred when making an AsyncRequest to %q '+' in a bundled request.',path)};request.invokeResponseHandler(response);}}}).setTransportErrorHandler(function(response){var paths=[];var interp={transportError:response.errorDescription};for(var path in bundled_requests){paths.push(path);var request=bundled_requests[path];request.invokeResponseHandler(interp);}
Util.error('Transport error occured for bundled requests to '+
paths.join(', '));}).setFinallyHandler(function(r){on_done();}).send()},_getHTTPError:function(errCode){var e=AsyncRequest._HTTPErrors[errCode]||AsyncRequest._HTTPErrors[errCode-(errCode%100)]||{summary:'HTTP Error',description:'Unknown HTTP error #'+errCode};return e;},_HTTPErrors:{400:{summary:'Bad Request',description:'Bad HTTP request.'},401:{summary:'Unauthorized',description:'Not authorized.'},403:{summary:'Forbidden',description:'Access forbidden.'},404:{summary:'Not Found',description:'Web address does not exist.'},1000:{summary:'Bad Response',description:'Invalid response.'},1001:{summary:'No Network',description:'A network error occurred. Check that you are connected to the '+'internet.'},1002:{summary:'No Data',description:'The server did not return a response.'},1003:{summary:'Eval Error',description:'Exception thrown during JSON evaluation.'}},_JSONPReceivers:{},_allBundledRequests:{},_bundledRequestProperties:{},_bundleTimer:null});copy_properties(AsyncRequest.prototype,{setMethod:function(m){this.method=m.toString().toUpperCase();return this;},getMethod:function(){return this.method;},setData:function(obj){this.data=obj;return this;},getData:function(){return this.data;},setContextData:function(key,value,enabled){enabled=enabled===undefined?true:enabled;if(enabled){this.context['_log_'+key]=value;}
return this;},setURI:function(uri){var uri_obj=URI(uri);if(this.getOption('useIframeTransport')&&!uri_obj.isFacebookURI()){Util.error('IframeTransport requests should only be used when going between '+'different Facebook subdomains.  This probably won\'t do what you want '+'if you\'re going to a non-Facebook URI.  Check out JSONP for that, '+'but that\'s also a bad idea to use.');return this;}
if(!this.getOption('jsonp')&&!this.getOption('useIframeTransport')&&!uri_obj.isSameOrigin()){Util.error('Asynchronous requests must specify relative URIs (like %q); this '+'ensures they conform to the Same Origin Policy (see %q). The '+'provided absolute URI (%q) is invalid, use a relative URI instead. '+'If you need to dispatch cross-domain requests, you can use JSONP, '+'but consider this decision carefully because there are tradeoffs and '+'JSONP is completely insecure.','/path/to/endpoint.php','http://www.mozilla.org/projects/security/components/same-origin.html',uri_obj.toString());return this;}
this.uri=uri_obj;return this;},getURI:function(){return this.uri.toString();},setInitialHandler:function(fn){this.initialHandler=fn;return this;},setHandler:function(fn){if(typeof(fn)!='function'){Util.error('AsyncRequest response handlers must be functions. Pass a function, '+'or use bind() to build one.');}else{this.handler=fn;}
return this;},getHandler:function(){return this.handler;},setErrorHandler:function(fn){if(typeof(fn)!='function'){Util.error('AsyncRequest error handlers must be functions. Pass a function, or '+'use bind() to build one.');}else{this.errorHandler=fn;}
return this;},setTransportErrorHandler:function(fn){this.transportErrorHandler=fn;return this;},getErrorHandler:function(){return this.errorHandler;},getTransportErrorHandler:function(){return this.transportErrorHandler;},setFinallyHandler:function(fn){this.finallyHandler=fn;return this;},setPreBootloadHandler:function(fn){this.preBootloadHandler=fn;return this;},setReadOnly:function(readOnly){if(typeof(readOnly)!='boolean'){Util.error('AsyncRequest readOnly value must be a boolean.');}else{this.readOnly=readOnly;}
return this;},setFBMLForm:function(){this.writeRequiredParams=["fb_sig"];return this;},getReadOnly:function(){return this.readOnly;},setStatusElement:function(element){this.statusElement=element;return this;},getStatusElement:function(){return this.statusElement;},clearStatusIndicator:function(){if(this.getStatusElement()){CSS.removeClass($(this.getStatusElement()),'async_saving');}},addStatusIndicator:function(){if(this.getStatusElement()){CSS.addClass($(this.getStatusElement()),'async_saving');}},specifiesWriteRequiredParams:function(){return this.writeRequiredParams.every(function(param){this.data[param]=this.data[param]||Env[param]||(ge(param)||{}).value;if(this.data[param]!==undefined){return true;}},this);},setReplayable:function(replayable,key){this._replayable=replayable;this._replayKey=key||'';return this;},setOption:function(opt,v){if(typeof(this.option[opt])!='undefined'){this.option[opt]=v;}else{Util.warn('AsyncRequest option %q does not exist; request to set it was ignored.',opt);}
return this;},getOption:function(opt){if(typeof(this.option[opt])=='undefined'){Util.warn('AsyncRequest option %q does not exist, get request failed.',opt);}
return this.option[opt];},abort:function(){if(this.transport){var old_handler=this.getTransportErrorHandler();this.setTransportErrorHandler(bagofholding);this.transport.abort();this.setTransportErrorHandler(old_handler);}},setNectarActionData:function(nctrActionParams){if(this.data.nctr===undefined){this.data.nctr={};}
this.data.nctr._ia=1;if(nctrActionParams){if(this.data.nctr._as===undefined){this.data.nctr._as={};}
copy_properties(this.data.nctr._as,nctrActionParams);}
return this;},setNectarData:function(nctrParams){if(nctrParams){if(this.data.nctr===undefined){this.data.nctr={};}
copy_properties(this.data.nctr,nctrParams);}
return this;},send:function(isRetry){isRetry=isRetry||false;if(this.requiresConfirmation()){this._displayConfirmation();return true;}
if(!this.uri){Util.error('Attempt to dispatch an AsyncRequest without an endpoint URI! This is '+'all sorts of silly and impossible, so the request failed.');return false;}
if(!this.errorHandler&&!this.getOption('suppressErrorHandlerWarning')){Util.warn('Dispatching an AsyncRequest that does not have an error handler. '+'You SHOULD supply one, or use AsyncRequest.pingURI(). If this '+'omission is intentional and well-considered, set the %q option to '+'suppress this warning.','suppressErrorHandlerWarning');}
if(this.getOption('jsonp')&&this.method!='GET'){this.setMethod('GET');}
if(this.getOption('useIframeTransport')&&this.method!='GET'){Util.warn('Iframe transport currently works only with GET.');this.setMethod('GET');}
if(!this.getReadOnly()){if(!this.specifiesWriteRequiredParams()){Util.error('You are making a POST request to %s without one or more of the '+'required parameters: %s. Requests which modify data and do not '+'verify the request origin through parameter validation are '+'vulnerable to CSRF attacks. You should either specify values for '+'these parameters explicitly by using setData(), put them in the '+'page as inputs, or mark this request as safe and idempotent by '+'using setReadOnly(). Consult the setReadOnly() documentation for '+'more information.',this.uri.toString(),this.writeRequiredParams.join(','));return false;}
if(this.method!='POST'){Util.error('You are making a GET request which modifies data; this violates '+'the HTTP spec and is generally a bad idea. Either change this '+'request to use POST or use setReadOnly() to mark the request as '+'idempotent and appropriate for HTTP GET. Consult the setReadOnly() '+'documentation for more information.');return false;}}
if(this.method=='POST'&&this.getOption('tfbEndpoint')){this.data.fb_dtsg=Env.fb_dtsg;}
if((!this.getReadOnly()&&this._replayable!==false)||this._replayable){Arbiter.inform(Arbiter.REPLAYABLE_AJAX,this);}
if(!is_empty(this.context)&&this.getOption('tfbEndpoint')){copy_properties(this.data,this.context);this.data['ajax_log']=1;}
if(!this.getReadOnly()&&this.getOption('tfbEndpoint')&&this.method=='POST'&&this.data['post_form_id_source']===undefined){this.data['post_form_id_source']='AsyncRequest';}
if(this.getOption('tfbEndpoint')){this.data['__a']=1;if(Env.nectar_ct){this.setNectarData({'_ct':new Date().getTime()});}}
if(this.getOption('bundle')&&AsyncRequest._bundleRequest(this)){return true;}
var uri_str,query;if(this.method=='GET'){uri_str=this.uri.addQueryData(this.data).toString();query='';}else{uri_str=this.uri.toString();query=URI.implodeQuery(this.data);}
if(this.getOption('jsonp')||this.getOption('useIframeTransport')){var path=this.uri.getPath();if(!AsyncRequest._JSONPReceivers[path]){AsyncRequest._JSONPReceivers[path]=[];}
AsyncRequest._JSONPReceivers[path].push(this);if(this.getOption('jsonp')){(function(){DOMScroll.getScrollRoot().appendChild($N('script',{src:uri_str,type:"text/javascript"}))}).bind(this).defer();}else{var style={position:'absolute',top:'-1000px',left:'-1000px',width:'80px',height:'80px'};uri_str=this.uri.addQueryData({'_fb_iframe_path':path});this.transportIframe=$N('iframe',{src:uri_str,style:style});DOMScroll.getScrollRoot().appendChild(this.transportIframe);}
return true;}
if(this.transport){Util.error('You must wait for an AsyncRequest to complete before sending another '+'request with the same object. To send two simultaneous requests, '+'create a second AsyncRequest object.');return false;}
var transport=null;try{transport=new XMLHttpRequest();}catch(ignored){};if(!transport){try{transport=new ActiveXObject("Msxml2.XMLHTTP");}catch(ignored){};}
if(!transport){try{transport=new ActiveXObject("Microsoft.XMLHTTP");}catch(ignored){};}
if(!transport){Util.error('Unable to build XMLHTTPRequest transport.');return false;}
transport.onreadystatechange=bind(this,'onstatechange');if(!isRetry){this.remainingRetries=0;if(this.getReadOnly()){this.remainingRetries=this.getOption('retries');}}
this.transport=transport;try{this.transport.open(this.method,uri_str,this.getOption('asynchronous'));}catch(ex){Util.error('Exception when opening Async transport to %q: %x',uri_str,ex);return false;}
var svn_rev=env_get('svn_rev');if(svn_rev){this.transport.setRequestHeader('X-SVN-Rev',String(svn_rev));}
if(this.method=='POST'){this.transport.setRequestHeader('Content-Type','application/x-www-form-urlencoded');}
this.addStatusIndicator();this.transport.send(query);return true;},_displayCaptcha:function(){Dialog.createCaptchaDialog(this._captchaHtml,this.finallyHandler).setHandler(this._displayCaptchaDialogHandler.bind(this)).show();},_displayCaptchaDialogHandler:function(){var captcha_data=serialize_form($('captcha'));copy_properties(this.data,captcha_data);this.send();},requireConfirmation:function(message,title,button,callback){this._confirmationMessage=message;this._confirmationTitle=title;this._confirmationButton=button;this._confirmationCallback=callback||bagofholding;this._requiresConfirmation=true;return this;},requiresConfirmation:function(){if(this._requiresConfirmation){if(this.data.confirmed){this._requriesConfirmation=false;}}
return this._requiresConfirmation;},_displayConfirmation:function(){var message=this._confirmationMessage||_tx("Are you sure you want to perform this action?");var html='<div class="confirmation_message">'
+HTML(message)
+'</div>';var title=this._confirmationTitle||_tx("Confirmation Required");var button=this._confirmationButton||Dialog.CONFIRM;Dialog.createConfirmationDialog(html,title,button,this.finallyHandler.bind(this)).setHandler(this._displayConfirmationHandler.bind(this)).setCancelHandler(this._confirmationCallback.curry(false)).show();},_displayConfirmationHandler:function(){this.data.confirmed=1;this._requiresConfirmation=false;this._confirmationCallback(true);this.send();}});function AsyncResponse(payload){copy_properties(this,{error:0,errorSummary:null,errorDescription:null,onload:null,replay:false,payload:payload||null});return this;}
copy_properties(AsyncResponse.prototype,{getPayload:function(){return this.payload;},getError:function(){return this.error;},getErrorSummary:function(){return this.errorSummary;},getErrorDescription:function(){return this.errorDescription;},getErrorIsWarning:function(){return this.errorIsWarning;},setReplay:function(replay){replay=(replay===undefined?true:replay);this.replay=!!replay;return this;},isReplay:function(){return this.replay;}});

function intl_set_xmode(xmode){(new AsyncRequest()).setURI('/ajax/intl/save_xmode.php').setData({xmode:xmode}).setHandler(function(){document.location.reload();}).send();}
function intl_set_cmode(cmode){(new AsyncRequest()).setURI('/ajax/intl/save_xmode.php').setData({cmode:cmode}).setHandler(function(){document.location.reload();}).send();}
function intl_set_vmode(vmode){(new AsyncRequest()).setURI('/ajax/intl/save_xmode.php').setData({vmode:vmode}).setHandler(function(){document.location.reload();}).send();}
function intl_set_amode(amode){(new AsyncRequest()).setURI('/ajax/intl/save_xmode.php').setData({amode:amode,app:false}).setHandler(function(){document.location.reload();}).send();}
function intl_set_pmode(pmode){CSS.toggleClass($('translations_nub'),'pnub');if(pmode==0){CSS.addClass($('progress_check'),'progress_hidden');CSS.removeClass($('progress_check'),'progress_shown');}else{CSS.addClass($('progress_check'),'progress_shown');CSS.removeClass($('progress_check'),'progress_hidden');}
(new AsyncRequest()).setURI('/ajax/intl/save_xmode.php').setData({pmode:pmode}).setHandler(function(){}).send();}
function intl_set_locale(obj,source,locale){if(!locale){var locale=obj.options[obj.selectedIndex].value;}
new AsyncRequest().setURI('/ajax/intl/beta_locale_check.php').setData({locale:locale}).setHandler(function(response){data=response.getPayload();if(data.locale_is_beta){if(data.app_is_installed){intl_save_locale(locale,true,null,source);}else{var async=new AsyncRequest().setURI('/ajax/intl/beta_locale_dialog.php?locale='+locale);new Dialog().setAsync(async).show();}}else{intl_save_locale(locale,true,null,source);}}).send();}
function intl_save_locale(locale,reload,location,source){new AsyncRequest().setURI('/ajax/intl/save_locale.php').setData({locale:locale,source:source}).setHandler(function(response){if(reload){document.location.reload();}else{goURI(location);}}).send();}
function intl_toggle_beta_locale_install(obj){if(obj.checked){show($('beta_locale_install'));}else{hide($('beta_locale_install'));}}
function intl_set_cookie_locale(locale,uri,source){var old_locale=getCookie('locale');new AsyncRequest().setURI('/ajax/intl/save_locale_cookie_logging.php').setData({'new_locale':locale,'old_locale':old_locale,'source':source}).setReadOnly(true).send();setCookie('locale',locale,7*24*3600000);if(URI.getRequestURI().getTld()!='com'){transferCookieToComTld('locale',function(success){if(success){clearCookie('locale');}
goURI(uri);});}else{goURI(uri);}}
function intl_disable_rooster_save(obj){var save=document.getElementById('install_translation_app');save.disabled=!obj.checked;var container=document.getElementById('install_container');if(obj.checked){container.style.display='block';}else{container.style.display='none';}}
function intl_confirm_rooster_and_install_app(uid,divid){goURI('/add.php?api_key=efa7a7045708fcadede8d705e39b1642');}
function intl_locale_is_rtl(){return('rtl'==CSS.getStyle(document.body,'direction'));}
function intl_is_left_click(e){if(e.which==null){if(e.button<2&&!e.ctrlKey){return true;}}else{if(e.which<2&&!e.ctrlKey){return true;}}
return false;}
function intl_left_click_cancelBubble(e){if(intl_is_left_click(e)){e.cancelBubble=true;}}

function getRadioFormValue(obj){for(i=0;i<obj.length;i++){if(obj[i].checked){return obj[i].value;}}
return null;}
function get_all_form_inputs(root_element){root_element=root_element||document;return[].concat($A(DOM.scry(root_element,'input')),$A(DOM.scry(root_element,'select')),$A(DOM.scry(root_element,'textarea')),$A(DOM.scry(root_element,'button')));}
function get_form_select_value(select){return select.options[select.selectedIndex].value;}
function set_form_select_value(select,value){for(var i=0;i<select.options.length;++i){if(select.options[i].value==value){select.selectedIndex=i;break;}}}
function get_form_attr(form,attr){var val=form[attr];if(typeof val=='object'&&val.tagName=='INPUT'){var pn=val.parentNode,ns=val.nextSibling,node=val;pn.removeChild(node);val=form[attr];ns?pn.insertBefore(node,ns):pn.appendChild(node);}
return val;}
function serialize_form_helper(data,name,value){var match=/([^\]]+)\[([^\]]*)\](.*)/.exec(name);if(match){data[match[1]]=data[match[1]]||{};if(match[2]==''){var i=0;while(data[match[1]][i]!=undefined){i++;}}else{i=match[2];}
if(match[3]==''){data[match[1]][i]=value;}else{serialize_form_helper(data[match[1]],i.concat(match[3]),value);}}else{data[name]=value;}}
function serialize_form_fix(data){var keys=[];for(var i in data){if(data instanceof Object){data[i]=serialize_form_fix(data[i]);}
keys.push(i);}
var j=0,is_array=true;keys.sort().each(function(i){if(i!=j++){is_array=false;}});if(is_array){var ret={};keys.each(function(i){ret[i]=data[i];});return ret;}else{return data;}}
function serialize_form(obj){var data={};var elements=obj.tagName=='FORM'?obj.elements:get_all_form_inputs(obj);for(var i=elements.length-1;i>=0;i--){if(elements[i].name&&!elements[i].disabled){if(!elements[i].type||((elements[i].type=='radio'||elements[i].type=='checkbox')&&elements[i].checked)||elements[i].type=='text'||elements[i].type=='password'||elements[i].type=='hidden'||elements[i].tagName=='TEXTAREA'||elements[i].tagName=='SELECT'){serialize_form_helper(data,elements[i].name,elements[i].value);}}}
return serialize_form_fix(data);}
function do_post(uri){var pieces=/(^([^?])+)\??(.*)$/.exec(uri.toString());var form=document.createElement('form');form.action=pieces[1];form.method='post';form.style.display='none';var sparam=/([\w]+)(?:=([^&]+)|&|$)/g;var param=null;if(ge('post_form_id')){pieces[3]+='&post_form_id='+$('post_form_id').value;}
while(param=sparam.exec(pieces[3])){var input=document.createElement('input');input.type='hidden';input.name=decodeURIComponent(param[1]);input.value=decodeURIComponent(param[2]);form.appendChild(input);}
DOM.getRootElement().appendChild(form);form.submit();return false;}
function dynamic_post(uri,params,target){var form=document.createElement('form');form.action=uri.toString();form.method='POST';form.style.display='none';if(target){form.target=target;}
if(ge('post_form_id')){params['post_form_id']=$('post_form_id').value;}
params['post_form_id_source']='dynamic_post';params['next']=htmlspecialchars(document.location.href);create_hidden_inputs(params,form);DOM.getRootElement().appendChild(form);form.submit();return false;}
function create_hidden_inputs(params,form,inputs,overwrite){inputs=inputs||{};var input;var query=URI.implodeQuery(params,'',false);var query_data=query.split('&');for(var i=0;i<query_data.length;i++){if(query_data[i]){var temp=query_data[i].split('=');var n=temp[0];var v=temp[1];if(n===undefined||v===undefined){continue;}
v=URI.decodeComponent(v);if(inputs[n]&&overwrite){inputs[n].value=v;}else{input=$N('input',{type:'hidden',name:n,value:v});inputs[n]=input;form.appendChild(input);}}}
return inputs;}

function KeyEventController(){copy_properties(this,{handlers:{}});document.onkeyup=this.onkeyevent.bind(this,'onkeyup');document.onkeydown=this.onkeyevent.bind(this,'onkeydown');document.onkeypress=this.onkeyevent.bind(this,'onkeypress');}
copy_properties(KeyEventController,{instance:null,getInstance:function(){return KeyEventController.instance||(KeyEventController.instance=new KeyEventController());},defaultFilter:function(event,type){event=$E(event);return KeyEventController.filterEventTypes(event,type)&&KeyEventController.filterEventTargets(event,type)&&KeyEventController.filterEventModifiers(event,type);},filterEventTypes:function(event,type){if(type==='onkeydown'){return true;}
return false;},filterEventTargets:function(event,type){var target=$E(event).getTarget();if(DOM.isNode(target,['input','select','textarea','object','embed'])){if(target.type!='checkbox'&&target.type!='radio'){return false;}}
return true;},filterEventModifiers:function(event,type){if(event.ctrlKey||event.altKey||event.metaKey||event.repeat){return false;}
return true;},registerKey:function(key,callback,filter_callback){if(filter_callback===undefined){filter_callback=KeyEventController.defaultFilter;}
var ctl=KeyEventController.getInstance();var eqv=ctl.mapKey(key);if(is_empty(ctl.handlers)){onunloadRegister(ctl.resetHandlers.bind(ctl));}
for(var ii=0;ii<eqv.length;ii++){key=eqv[ii];if(!ctl.handlers[key]){ctl.handlers[key]=[];}
ctl.handlers[key].push({callback:callback,filter:filter_callback});}},keyCodeMap:{'[':[219],']':[221],'`':[192],'LEFT':[KEYS.LEFT,63234],'RIGHT':[KEYS.RIGHT,63235],'RETURN':[KEYS.RETURN],'TAB':[KEYS.TAB],'DOWN':[KEYS.DOWN,63233],'UP':[KEYS.UP,63232],'ESCAPE':[KEYS.ESC]}});copy_properties(KeyEventController.prototype,{mapKey:function(k){if(typeof(k)=='number'){return[k];}
if(KeyEventController.keyCodeMap[k.toUpperCase()]){return KeyEventController.keyCodeMap[k.toUpperCase()];}
var l=k.charCodeAt(0);var u=k.toUpperCase().charCodeAt(0);if(l!=u){return[l,u];}
return[l];},onkeyevent:function(type,e){e=$E(e);var evt=null;var handlers=this.handlers[e.keyCode];var callback,filter,abort;if(handlers){for(var ii=0;ii<handlers.length;ii++){callback=handlers[ii].callback;filter=handlers[ii].filter;try{if(!filter||filter(e,type)){abort=callback(e,type);if(abort===false){return Event.kill(e);}}}catch(exception){Util.error('Uncaught exception in key handler: %x',exception);}}}
return true;},resetHandlers:function(){this.handlers={};}});

function Rect(t,r,b,l,domain){if(this===window){if(t instanceof Rect){return t;}
if(t instanceof Vector2){return new Rect(t.y,t.x,t.y,t.x,t.domain);}
return Rect.getElementBounds($(t));}
copy_properties(this,{t:t,r:r,b:b,l:l,domain:domain||'pure'});};copy_properties(Rect.prototype,{w:function(){return this.r-this.l;},h:function(){return this.b-this.t;},area:function(){return this.w()*this.h();},toString:function(){return'(('+this.l+', '+this.t+'), ('+this.r+', '+this.b+'))';},intersects:function(v){v=Rect(v).convertTo(this.domain);var u=this;if(u.l>v.r||v.l>u.r||u.t>v.b||v.t>u.b){return false;}
return true;},clipTo:function(clipRect){clipRect=clipRect.convertTo(this.domain);if(!this.intersects(clipRect)){return null;}
return new Rect(Math.max(this.t,clipRect.t),Math.min(this.r,clipRect.r),Math.min(this.b,clipRect.b),Math.max(this.l,clipRect.l),this.domain);},contains:function(v){v=Rect(v).convertTo(this.domain);var u=this;if(v instanceof Vector2){return(u.l<=v.x&&u.r>=v.x&&u.t<=v.y&&u.b>=v.y);}else{return(u.l<=v.l&&u.r>=u.r&&u.t<=v.t&&u.b>=v.b);}},canContain:function(v){v=Rect(v).convertTo(this.domain);return(v.h()<=this.h())&&(v.w()<=this.w());},forceBelow:function(v,min){min=min||0;v=Rect(v).convertTo(this.domain);if(v.b>this.t){return this.add(0,(v.b-this.t)+min);}
return this;},add:function(vx,vy){if(arguments.length==1){if(vx.domain!='pure'){vx=vx.convertTo(this.domain);}
return this.add(vx.x,vx.y);}
var dx=parseFloat(vx);var dy=parseFloat(vy);return new Rect(this.t+dy,this.r+dx,this.b+dy,this.l+dx,this.domain);},sub:function(vx,vy){if(arguments.length==1){return this.add(vx.mul(-1));}else{return this.add(-vx,-vy);}},expand:function(x,y){return new Rect(this.t,this.r+x,this.b+y,this.l,this.domain);},scale:function(x,y){y=y||x;return new Rect(this.t,this.l+(this.w()*x),this.t+(this.h()*y),this.l,this.domain);},setDimensions:function(x,y){return new Rect(this.t,this.l+x,this.t+y,this.l,this.domain);},setPosition:function(x,y){return new Rect(x,this.w(),this.h(),y,this.domain);},boundWithin:function(v){var x=0,y=0;if(this.l<v.l){x=v.l-this.l;}else if(this.r>v.r){x=v.r-this.r;}
if(this.t<v.t){y=v.t-this.t;}else if(this.b>v.b){y=v.b-this.b;}
return this.add(x,y);},setElementBounds:function(el){this.getPositionVector().setElementPosition(el);this.getDimensionVector().setElementDimensions(el);return this;},getPositionVector:function(){return new Vector2(this.l,this.t,this.domain);},getDimensionVector:function(){return new Vector2(this.w(),this.h(),'pure');},convertTo:function(newDomain){if(this.domain==newDomain){return this;}
if(newDomain=='pure'){return new Rect(this.t,this.r,this.b,this.l,'pure');}
if(this.domain=='pure'){Util.error('Unable to convert a pure rect to %q coordinates.',newDomain);return new Rect(0,0,0,0);}
var p=new Vector2(this.l,this.t,this.domain).convertTo(newDomain);return new Rect(p.y,p.x+this.w(),p.y+this.h(),p.x,newDomain);},constrict:function(x,y){if(typeof(y)=='undefined'){y=x;}
x=x||0;return new Rect(this.t+y,this.r-x,this.b-y,this.l+x,this.domain);},expandX:function(){return new Rect(this.t,Number.POSITIVE_INFINITY,this.b,Number.NEGATIVE_INFINITY);},expandY:function(){return new Rect(number.NEGATIVE_INFINITY,this.r,Number.POSITIVE_INFINITY,this.l);},drawBox:function(color){var d=$N('div',{style:{position:'absolute',border:'2px solid '+(color||'red'),zIndex:'10000'}});this.setElementBounds(d);document.body.appendChild(d);}});copy_properties(Rect,{newFromVectors:function(pos,dim){return new Rect(pos.y,pos.x+dim.x,pos.y+dim.y,pos.x,pos.domain);},getElementBounds:function(el){return Rect.newFromVectors(Vector2.getElementPosition(el),Vector2.getElementDimensions(el));},getViewportBounds:function(){return Rect.newFromVectors(Vector2.getScrollPosition(),Vector2.getViewportDimensions());},getDocumentBounds:function(){return Rect.newFromVectors(new Vector2(0,0,'document'),Vector2.getDocumentDimensions());}});

function Dialog(model){Dialog._setup();this._show_loading=true;this._auto_focus=true;this._onload_handlers=[];this._top=125;this._content=null;this._obj=null;this._popup=null;this._overlay=null;this._iframe=null;this._hidden_objects=[];if(model){this._setFromModel(model);}}
copy_properties(Dialog,{OK:{name:'ok',label:_tx("Okay")},CANCEL:{name:'cancel',label:_tx("Cancel"),className:'inputaux'},CLOSE:{name:'close',label:_tx("Close")},NEXT:{name:'next',label:_tx("Next")},SAVE:{name:'save',label:_tx("Save")},SUBMIT:{name:'submit',label:_tx("Submit")},CONFIRM:{name:'confirm',label:_tx("Confirm")},DELETE:{name:'delete',label:_tx("Delete")}});copy_properties(Dialog,{OK_AND_CANCEL:[Dialog.OK,Dialog.CANCEL],_STANDARD_BUTTONS:[Dialog.OK,Dialog.CANCEL,Dialog.CLOSE,Dialog.SAVE,Dialog.SUBMIT,Dialog.CONFIRM,Dialog.DELETE],SHOULD_HIDE_OBJECTS:!ua.windows(),MODALITY:{DARK:'dark',WHITE:'white'},SHOULD_USE_IFRAME:ua.ie()<7||(ua.osx()&&ua.firefox()),dialogStack:null,newButton:function(name,label,className,handler){var button={name:name,label:label}
if(className){button.className=className;}
if(handler){button.handler=handler;}
return button;},getCurrent:function(){var stack=Dialog.dialogStack;if(!stack||!stack.length){return null;}
return stack[stack.length-1];},createCaptchaDialog:function(captchaHtml,cancelHandler){return new Dialog().setClassName('captcha_dialog').setTitle(_tx("Security Check")).setBody(captchaHtml).setButtons([Dialog.SUBMIT,Dialog.CANCEL]).setCancelHandler(cancelHandler).setModal().setStackable(true,true).onloadRegister(create_captcha);},createConfirmationDialog:function(confirmationHtml,title,button,cancelHandler){return new Dialog().setClassName('confirm_dialog').setTitle(title).setBody(confirmationHtml).setButtons([button,Dialog.CANCEL]).setCancelHandler(cancelHandler).setModal();},bootstrap:function(uri,data,read_only,method,model){data=data||{};copy_properties(data,new URI(uri).getQueryData());method=method||(read_only?'GET':'POST');var dialog=new Dialog(model).setAsync(new AsyncRequest().setURI(uri).setData(data).setReadOnly(!!read_only).setMethod(method));dialog.show();return false;},showFormAjax:function(title,uri,button_label,reload_page_on_success){var form_id='dialog_ajax_form__'+gen_unique();var dialog=new Dialog().setTitle(title).setShowLoading(true).show();var preSubmitErrorHandler=function(response){if(response.getError()!=true){dialog.hide();ErrorDialog.showAsyncError(response);}else{dialog.setBody(response.getPayload()).setButtons(Dialog.OK).clearHandler().show();}};var preSubmitHandler=function(response){var contents='<form id="'+
form_id+'" onsubmit="return false;">'+
response.getPayload()+'</form>';var buttons=[Dialog.newButton(button_label.toLowerCase(),button_label),Dialog.CANCEL];dialog.setBody(contents).setButtons(buttons).setHandler(submitHandler).show();};var submitHandler=function(){new AsyncRequest().setURI(uri).setData(serialize_form(ge(form_id))).setHandler(postSubmitHandler).setErrorHandler(postSubmitErrorHandler).send();};var postSubmitHandler=function(response){dialog.setBody(response.getPayload()).setButtons([Dialog.OK]).show();if(reload_page_on_success){window.location.reload();}else{dialog.setAutohide(750);}};var postSubmitErrorHandler=function(response){if(response.getError()==kError_Global_ValidationError){preSubmitHandler(response);}else if(response.getError()!=true){ErrorDialog.showAsyncError(response);}else{preSubmitErrorHandler(response);}};new AsyncRequest().setURI(uri).setReadOnly(true).setHandler(preSubmitHandler).setErrorHandler(preSubmitErrorHandler).send();},_basicMutator:function(private_key){return function(value){this[private_key]=value;this._dirty();return this;};},_findButton:function(buttons,name){for(var i=0;i<buttons.length;++i){if(buttons[i].name==name){return buttons[i];}}
return null;},_setup:function(){if(Dialog._is_set_up){return;}
Dialog._is_set_up=true;var filter=function(event,type){return type=='onkeyup'&&KeyEventController.filterEventModifiers(event,type);};KeyEventController.registerKey('ESCAPE',Dialog._handleEscapeKey,filter);},_hideAll:function(){if(Dialog.dialogStack!==null&&Dialog.dialogStack.length){var stack=Dialog.dialogStack.clone();Dialog.dialogStack=null;for(var i=stack.length-1;i>=0;i--){stack[i].hide();}}},_handleEscapeKey:function(event,type){var dialog=Dialog.getCurrent();if(!dialog){return true;}
var semi_modal=dialog._semi_modal;var buttons=dialog._buttons;if(!buttons&&!semi_modal){return true;}
if(semi_modal&&!buttons){dialog.hide();return true;}
var cancel_button=Dialog._findButton(buttons,'cancel');if(cancel_button){var button_to_simulate=cancel_button;}else if(buttons.length==1){var button_to_simulate=buttons[0];}else{return true;}
dialog._handleButton(button_to_simulate);return false;}});copy_properties(Dialog.prototype,{show:function(){this._showing=true;this._dirty();return this;},showLoading:function(){this._renderDialog($N('div',{className:'dialog_loading'},_tx("Loading...")));return this;},hide:function(){this._showing=false;if(this._autohide_timeout){clearTimeout(this._autohide_timeout);this._autohide_timeout=null;}
if(!Dialog.dialogStack||Dialog.dialogStack.length<=1){this._fadeOut();}else{this._hide();}
return this;},fade_out:function(autohide){this.setAutohide(autohide);return this;},getRoot:function(){return this._obj;},getButtonElement:function(button){if(typeof button=='string'){button=Dialog._findButton(this._buttons,button);}
if(!button||!button.name){return null;}
var inputs=DOM.scry(this._popup,'input');var name_filter=function(elem){return elem.name==button.name;};return inputs.filter(name_filter)[0]||null;},getFormData:function(){var dialog_content_divs=DOM.scry(this._content,'div.dialog_content');if(dialog_content_divs.length!=1){Util.error(dialog_content_divs.length
+" dialog_content divs in this dialog?  Weird.");}
return serialize_form(dialog_content_divs[0]);},setShowing:function(){this.show();return this;},setHiding:function(){this.hide();return this;},setTitle:Dialog._basicMutator('_title'),setBody:Dialog._basicMutator('_body'),setExtraData:Dialog._basicMutator('_extra_data'),setShowLoading:Dialog._basicMutator('_show_loading'),setFullBleed:Dialog._basicMutator('_full_bleed'),setImmediateRendering:Dialog._basicMutator('_immediate_rendering'),setUserData:Dialog._basicMutator('_user_data'),getUserData:function(){return this._user_data;},setAutohide:function(autohide){if(autohide){if(this._showing){this._autohide_timeout=setTimeout(this.hide.bind(this),autohide);}else{this._autohide=autohide;}}else{this._autohide=null;if(this._autohide_timeout){clearTimeout(this._autohide_timeout);this._autohide_timeout=null;}}
return this;},setSummary:Dialog._basicMutator('_summary'),setButtons:function(b){var buttons;if(!(b instanceof Array)){buttons=arrayize(arguments);}else{buttons=b;}
if(this._buttons&&!this._is_dirty&&are_equal(buttons,this._buttons)){return this;}
for(var i=0;i<buttons.length;++i){if(typeof buttons[i]=='string'){var button=Dialog._findButton(Dialog._STANDARD_BUTTONS,buttons[i]);if(!button){Util.error('Unknown button: '+buttons[i]);}
buttons[i]=button;}}
this._buttons=buttons;this._dirtyButtons();return this;},setButtonsMessage:Dialog._basicMutator('_buttons_message'),setStackable:function(stackable,shown){this._is_stackable=stackable;this._shown_while_stacked=stackable&&shown;return this;},setHandler:function(handler){this._handler=handler;return this;},setCancelHandler:function(cancelHandler){this._cancelHandler=cancelHandler;return this;},setCloseHandler:function(close_handler){this._close_handler=call_or_eval.bind(null,this,close_handler);return this;},clearHandler:function(){return this.setHandler(null);},setPostURI:function(post_uri,asynchronous){if(asynchronous===undefined){asynchronous=true;}
if(asynchronous){this.setHandler(this._submitForm.bind(this,'POST',post_uri));}else{this.setHandler(function(){dynamic_post(post_uri,this.getFormData());this.hide();}.bind(this));}
return this;},setGetURI:function(get_uri){this.setHandler(this._submitForm.bind(this,'GET',get_uri));return this;},setModal:function(modal,modality){if(modal===undefined){modal=true;}
if(this._showing&&this._modal&&!modal){Util.error("At the moment we don't support un-modal-ing a modal dialog");}
if(modal&&modality){switch(modality){case Dialog.MODALITY.DARK:this._modal_class='dark_dialog_overlay';break;case Dialog.MODALITY.WHITE:this._modal_class='light_dialog_overlay';break;}}
this._modal=modal;return this;},setSemiModal:function(clickout){if(clickout===undefined){clickout=true;}
if(clickout){this.setModal(true,Dialog.MODALITY.DARK);}
this._semi_modal=clickout;return this;},setContentWidth:Dialog._basicMutator('_content_width'),setTitleLoading:function(loading){if(loading===undefined){loading=true;}
var header=DOM.find(this._popup,'h2.dialog_title');if(header){CSS.conditionClass(header,'loading',loading);}
return this;},setClassName:Dialog._basicMutator('_class_name'),setFooter:Dialog._basicMutator('_footer'),setAutoFocus:Dialog._basicMutator('_auto_focus'),setTop:Dialog._basicMutator('_top'),onloadRegister:function(handler){this._onload_handlers.push(handler.bind(this));return this;},setAsync:function(async_request){var handler=function(response){if(this._async_request!=async_request){return;}
this._async_request=null;var payload=response.getPayload();if(typeof payload=='string'){this.setBody(payload);}else{this._setFromModel(payload);}
this._update(true);}.bind(this);var hide=bind(this,'hide');async_request.setHandler(chain(async_request.getHandler(),handler)).setErrorHandler(chain(hide,async_request.getErrorHandler())).setTransportErrorHandler(chain(hide,async_request.getTransportErrorHandler())).send();this._async_request=async_request;this._dirty();return this;},_dirty:function(){if(!this._is_dirty){this._is_dirty=true;if(this._immediate_rendering){this._update();}else{bind(this,'_update').defer();}}},_dirtyButtons:function(){if(this._immediate_rendering){this._updateButtons();}else{bind(this,'_updateButtons').defer()}},_format:function(content){if(typeof content=='string'){return HTML(content).setDeferred(true);}
return content;},_update:function(even_if_not_dirty){if(!this._is_dirty&&even_if_not_dirty!==true){return;}
this._is_dirty=false;if(!this._showing){return;}
if(this._autohide&&!this._async_request&&!this._autohide_timeout){this._autohide_timeout=setTimeout(bind(this,'hide'),this._autohide);}
if(!this._async_request||!this._show_loading){var content=[];if(this._summary){content.push($N('div',{className:'dialog_summary'},this._format(this._summary)));}
content.push($N('div',{className:'dialog_body'},this._format(this._body)));var button_content=this._getButtonContent();if(button_content.length){content.push($N('div',{className:'dialog_buttons'},button_content));}
if(this._footer){content.push($N('div',{className:'dialog_footer'},this._format(this._footer)));}
content=$N('div',{className:'dialog_content'},content);if(this._title){var title=$N('h2',{className:'dialog_title'},$N('span',this._format(this._title)));content=[title,content];}else{content=[content];}
this._renderDialog(content);for(var i=0;i<this._onload_handlers.length;++i){try{this._onload_handlers[i]();}catch(ex){Util.error('Uncaught exception in dialog onload hook: %x',ex);}}
this._onload_handlers=[];}else{this.showLoading();}
if(this._content_width){this._popup.style.width=(this._content_width+42)+'px';}
if(this._modal&&!this._overlay){this._buildOverlay();}},_updateButtons:function(){if(!this._showing){return;}
var button_content=this._getButtonContent();var new_buttons=$N('div',{className:'dialog_buttons'},button_content);var prev_buttons=DOM.scry(this._content,'div.dialog_buttons')[0]||null;if(!prev_buttons){var body=DOM.scry(this._content,'div.dialog_body')[0]||null;if(body){DOM.insertAfter(body,new_buttons);}
return;}
DOM.replace(prev_buttons,new_buttons);},_getButtonContent:function(){var button_content=[];if((this._buttons&&this._buttons.length>0)||this._buttons_message){var button_content=[];if(this._buttons_message){button_content.push($N('div',{className:'dialog_buttons_msg'},this._format(this._buttons_message)));}
if(this._buttons){for(var i=0;i<this._buttons.length;i++){var button=this._buttons[i];var button_node=$N('input',{className:'inputsubmit',type:'button',name:button.name||'',value:button.label});CSS.addClass(button_node,button.className);button_node.listen('click',this._handleButton.bind(this,button.name));button_content.push(button_node);}}}
return button_content;},_shouldUseIframe:function(){return Dialog.SHOULD_USE_IFRAME||(this._modal&&ua.ie()==7);},_renderDialog:function(content){if(Dialog.dialogStack===null){onunloadRegister(Dialog._hideAll,true);}
if(!this._obj){this._buildDialog();}
if(this._class_name){CSS.addClass(this._obj,this._class_name);}
CSS.conditionClass(this._obj,'full_bleed',this._full_bleed);if(typeof content=='string'){content=HTML(content).setDeferred(this._immediate_rendering!==true);}
DOM.setContent(this._content,content);var imgs=this._content.getElementsByTagName('img');for(var i=0;i<imgs.length;i++){imgs[i].onload=chain(imgs[i].onload,this._hideObjects.bind(this));}
this._showDialog();if(this._auto_focus){this._focusFirstTextboxOrButton.bind(this).defer();}
return this;},_buildDialog:function(){this._obj=$N('div',{className:'generic_dialog'});this._obj.style.display='none';if(this._immediate_rendering){DOM.getRootElement().appendChild(this._obj);}else{onloadRegister(function(){DOM.getRootElement().appendChild(this._obj);}.bind(this));}
if(this._shouldUseIframe()){this._buildIframe();}
if(!this._popup){this._popup=$N('div',{className:'generic_dialog_popup'});}
this._popup.style.left=this._popup.style.top='';this._obj.appendChild(this._popup);if(this._modal){this._buildOverlay();}
this._buildDialogContent();},_showDialog:function(){if(this._obj&&this._obj.style.display){this._obj.style.visibility='hidden';this._obj.style.display='';this._resetDialog();this._obj.style.visibility='';this._obj.dialog=this;}else{this._resetDialog();}
this._hideObjects();clearInterval(this.active_hiding);this.active_hiding=setInterval(this._activeResize.bind(this),500);if(!Dialog.dialogStack){Dialog.dialogStack=[];}
var stack=Dialog.dialogStack;if(stack.length){var currentDialog=stack[stack.length-1];if(currentDialog!=this&&!currentDialog._is_stackable){currentDialog._hide();}
for(var i=stack.length-1;i>=0;i--){if(stack[i]==this){stack.splice(i,1);}else if(!stack[i]._shown_while_stacked){stack[i]._hide(true);}}}
stack.push(this);return this;},_activeResize:function(){if(this.last_offset_height!=this._content.offsetHeight){this._hideObjects();this.last_offset_height=this._content.offsetHeight;}},_hideObjects:function(){var hide=[],objects=[];var rect=Rect.getElementBounds(this._content);var swfs=[].concat($A(DOM.scry(document.body,'embed')),$A(DOM.scry(document.body,'object')));for(var i=0;i<swfs.length;i++){if(Dialog.SHOULD_HIDE_OBJECTS||(swfs[i].getAttribute('wmode')||'').toLowerCase()!='transparent'){objects.push(swfs[i]);}}
for(var i=0;i<objects.length;i++){var node=objects[i].offsetHeight?objects[i]:objects[i].parentNode;var swf_rect=Rect.getElementBounds(node);if(!DOM.contains(this._content,objects[i])&&rect.intersects(swf_rect)&&this._hidden_objects.indexOf(node)==-1){hide.push(node);}}
for(var i=0;i<hide.length;i++){this._hidden_objects.push(hide[i]);hide[i].style.visibility='hidden';}},_buildDialogContent:function(){CSS.addClass(this._obj,'pop_dialog');if(intl_locale_is_rtl()){CSS.addClass(this._obj,'pop_dialog_rtl');}
var markup;if(ua.ie()<=6){markup='<div class="pop_squarecontainer">'+'<div class="pop_squareborder pop_borderopacity"></div>'+'<div class="pop_content popcontent_old" id="pop_content"></div>'+'</div>';}else if(ua.firefox()>=3||ua.safari()>=3){markup='<div class="pop_content popcontent_advanced" id="pop_content"></div>';}else{markup='<div class="pop_container">'+'<div class="pop_verticalslab"></div>'+'<div class="pop_horizontalslab"></div>'+'<div class="pop_topleft"></div>'+'<div class="pop_topright"></div>'+'<div class="pop_bottomright"></div>'+'<div class="pop_bottomleft"></div>'+'<div class="pop_content popcontent_old" id="pop_content"></div>'+'</div>';}
set_inner_html(this._popup,markup);this._frame=DOM.find(this._popup,'div.pop_content');this._content=this._frame;},_buildIframe:function(){if(!this._iframe&&!(this._iframe=ge('generic_dialog_iframe'))){this._iframe=$N('iframe',{id:'generic_dialog_iframe',src:'/common/blank.html'});}
this._iframe.frameBorder='0';onloadRegister(function(){DOM.getRootElement().appendChild(this._iframe);}.bind(this));},_buildOverlay:function(){this._overlay=$N('div',{id:'generic_dialog_overlay'});if(this._modal_class){CSS.addClass(this._overlay,this._modal_class);}
if(this._semi_modal){Event.listen(this._overlay,'click',this.hide.bind(this));}
if(ua.ie()<7){this._overlay.style.height=Vector2.getDocumentDimensions().y+'px';}
onloadRegister(function(){DOMScroll.getScrollRoot().appendChild(this._overlay);}.bind(this));},_focusFirstTextboxOrButton:function(){var selectors=['input[type="text"]','textarea','input[type="password"]','input[type="button"]','input[type="submit"]'];var nodes=[];for(var ii=0;ii<selectors.length&&nodes.length==0;ii++){nodes=DOM.scry(this._content,selectors[ii]);}
if(nodes.length>0){var node=nodes[0];try{if(elementY(node)>0&&elementX(node)>0){node.focus();}}catch(e){}}
return true;},_resetDialog:function(){if(!this._popup){return;}
onloadRegister(function(){this._resetDialogObj();this._resetIframe();}.bind(this));},_resetIframe:function(){if(!this._shouldUseIframe()){return;}
if(this.modal){this._iframe.style.left='0px';this._iframe.style.top='0px';this._iframe.style.width='100%';var documentHeight=Math.max(10000,Vector2.getDocumentDimensions().y);this._iframe.style.height=documentHeight+'px';}else{Vector2.getElementDimensions(this._frame).setElementDimensions(this._iframe);Vector2.getElementPosition(this._frame).setElementPosition(this._iframe);}
this._iframe.style.display='';},_resetDialogObj:function(){var table=this._popup.find('div.pop_content');var scrollY=Vector2.getScrollPosition().y;var viewportHeight=Vector2.getViewportDimensions().y;var top=scrollY+this._top+'px';if(viewportHeight<=400){this._popup.style.top='20px';return;}
if(this._top+table.clientHeight>viewportHeight){var empty_space=Math.max(viewportHeight-table.clientHeight,0);top=((empty_space/2)+scrollY)+'px';}
this._popup.style.top=top;},_fadeOut:function(){if(!this._popup){return;}
try{animation(this._obj).duration(0).checkpoint().to('opacity',0).hide().duration(250).ondone(this._hide.bind(this)).go();}catch(e){this._hide();}},_hide:function(temporary){if(this._obj){this._obj.style.display='none';}
if(this._iframe){this._iframe.style.display='none';}
if(this._overlay){this._overlay.style.display='none';}
if(this.timeout){clearTimeout(this.timeout);this.timeout=null;}
if(this._hidden_objects.length){for(var i=0,il=this._hidden_objects.length;i<il;i++){this._hidden_objects[i].style.visibility='';}
this._hidden_objects=[];}
clearInterval(this.active_hiding);if(!temporary){if(Dialog.dialogStack&&Dialog.dialogStack.length){var stack=Dialog.dialogStack;for(var i=stack.length-1;i>=0;i--){if(stack[i]==this){stack.splice(i,1);}}
if(stack.length){stack[stack.length-1]._showDialog();}}
if(this._obj){DOM.remove(this._obj);this._obj=null;}
if(this._close_handler){this._close_handler();}}},_handleButton:function(button){if(typeof button=='string'){button=Dialog._findButton(this._buttons,button);}
if(!button){Util.error('Huh?  How did this button get here?');return;}
var value=call_or_eval(button,button.handler);if(value===false){return;}
if(button==Dialog.CANCEL){call_or_eval(this,this._cancelHandler);}else{if(call_or_eval(this,this._handler,{button:button})===false){return;}}
this.hide();},_submitForm:function(method,uri,button){var data=this.getFormData();data[button.name]=button.label;if(this._extra_data){copy_properties(data,this._extra_data);}
var async_request=new AsyncRequest().setURI(uri).setData(data).setMethod(method).setReadOnly(method=='GET');this.setAsync(async_request);return false;},_setFromModel:function(model){for(var propertyName in model){var mutator=this['set'+propertyName.substr(0,1).toUpperCase()
+propertyName.substr(1)];if(!mutator){Util.error("Unknown Dialog property: "+propertyName);}else{mutator.apply(this,arrayize(model[propertyName]));}}}});function ContextualDialog(model){this.parent.construct(this);}
ContextualDialog.extend('Dialog');copy_properties(ContextualDialog,{ARROW_PADDING_X:5,ARROW_PADDING_Y:10,ARROW_WIDTH:13});ContextualDialog.prototype={setContext:Dialog._basicMutator('_context'),_buildDialogContent:function(){CSS.addClass(this._obj,'contextual_dialog');set_inner_html(this._popup,'<div class="contextual_arrow"><span>^_^keke1</span></div><div class="contextual_dialog_content"></div>');this._arrow=DOM.find(this._popup,'div.contextual_arrow');this._content=this._frame=DOM.find(this._popup,'div.contextual_dialog_content');},_resetDialogObj:function(){if(!this._context){return;}
var elementPos=Vector2.getElementPosition(this._context);var documentOffsetWidth=DOMScroll.getScrollRoot().offsetWidth;var center=(documentOffsetWidth-this._popup.offsetWidth)/2;var left,arrow;if(elementPos.x<documentOffsetWidth/2){this._arrow.className='contextual_arrow_rev';left=Math.min(center,elementPos.x+this._context.offsetWidth-ContextualDialog.ARROW_PADDING_X);arrow=elementPos.x-left+this._context.offsetWidth+ContextualDialog.ARROW_PADDING_X;}else{this._arrow.className='contextual_arrow';left=Math.max(center,elementPos.x-this._popup.offsetWidth+ContextualDialog.ARROW_PADDING_X);arrow=elementPos.x-left-ContextualDialog.ARROW_PADDING_X-ContextualDialog.ARROW_WIDTH;}
left=left||0;arrow=arrow||0;new Vector2(left,elementPos.y+this._context.offsetHeight-this._arrow.offsetHeight+ContextualDialog.ARROW_PADDING_Y,'document').setElementPosition(this._popup);this._arrow.style.backgroundPosition=arrow+'px';}};function ErrorDialog(){this.parent.construct(this);this.setClassName('errorDialog').setModal(true);this.setStackable(true);return this;}
ErrorDialog.extend('Dialog');copy_properties(ErrorDialog,{showAsyncError:function(response){try{return(new ErrorDialog()).showError(response.getErrorSummary(),response.getErrorDescription());}catch(ex){aiert(response);}}});copy_properties(ErrorDialog.prototype,{showError:function(title,message){return this.setTitle(title).setBody(message).setButtons([Dialog.OK]).show();}});var DialogBootstrapEndpoints={LIST_EDITOR:'/friends/ajax/edit_list.php',EDIT_APPS_DIALOG:'/ajax/editapp_dialog.php'};

function resend_confirmation_email(){hide($('confirm_error'));hide($('confirm_status'));show($('confirm_progress'));new AsyncRequest().setURI('/ajax/confirm_email.php').setData({resend:1}).setHandler(function(response){hide($('confirm_progress'));if(response){var payload=response.getPayload();if(payload&&payload.success){DOM.setContent($('confirm_status'),HTML(payload.msg));show($('confirm_status'));}else{DOM.setContent($('confirm_error'),HTML(payload.msg));show($('confirm_error'));}}else{DOM.setContent($('confirm_error'),HTML(payload.msg));show($('confirm_error'));}}).send();}
function handle_require_email_conf_response(target_fn,error_fn,precursor_fn,response){if(precursor_fn){precursor_fn();}
if(response){var payload=response.getPayload();if(payload&&payload.require_conf){var dialog=new Dialog().setTitle(payload.dialog_title).setBody(payload.dialog_body).setButtons([Dialog.OK]).show();}else if(target_fn){target_fn(response);}}else if(error_fn){error_fn(response);}}

function delay_add_class(element,class_name,delay){var timeout_id=null;var doc_listener=null;var doc_handler=function(e){if(!DOM.contains(element,e.getTarget())){clearTimeout(timeout_id);CSS.removeClass(element,class_name);doc_listener&&doc_listener.remove();}};var add=function(){timeout_id=setTimeout(CSS.addClass.bind(null,element,class_name),delay||0);doc_listener=Event.listen(document,'mousemove',doc_handler);};Event.listen(element,'mouseenter',add);}

var
kError_Account_IncorrectPassword=1340001,kError_Global_ValidationError=1346001,kError_Login_GenericError=1348009,kError_Chat_NotAvailable=1356002,kError_Chat_SendOtherNotAvailable=1356003,kError_Async_NotLoggedIn=1357001,kError_Async_LoginChanged=1357003,kError_Async_CSRFCheckFailed=1357004,kError_Chat_TooManyMessages=1356008,kError_Platform_CallbackValidationFailure=1349007,kError_Platform_ApplicationResponseInvalid=1349008,kError_FBPayments_Unknown=1383001,kError_FBPayments_InvalidParameters=1383002,kError_Gifts_NoGiftSelected=1391001,kError_Gifts_NoReceiverSpecified=1391003,kError_Gifts_NoMessageAttached=1391004,kError_Async_InternalCaptchaRequired=1357007,kError_Recruiting_MessageDeliveryFailed=1405001,kError_FBPayments_PaymentFailure=1383003,kError_Intern_UnknownError=1408001,kError_Privacy_FriendListNameAlreadyExists=1409001,kError_Mobile_InvalidWapLocale=1347008,kError_Gifts_MessageTooLong=1391007,kError_Inbox_DuplicateMessages=1415001,kError_Async_ConfirmationRequired=1357008,kError_Gifter_GiftNotMoved=1416001,kError_Gifter_GiftNotCreated=1416002,kError_Gifter_GiftNotUpdated=1416003,kError_Gifter_DesignerNotAdded=1416004,kError_Gifter_GiftsNotLoaded=1416005,kError_Megaphone_InvalidHideData=1419001,kError_Megaphone_StoryNotFound=1419002,kError_Megaphone_InternalError=1419003,kError_Megaphone_HandleHideFailed=1419004,kError_Screenname_LimiteExceeded=1423001,kError_Screenname_AllocationError=1423002,kError_OpenId_RegistrationGeneralError=1428001,kError_OpenId_SignatureError=1428002,kError_OpenId_MissingRequiredInformation=1428003,kError_OpenId_ProtocolError=1428004,kError_OpenId_ProtocolErrorWithMessage=1428005,kError_OpenId_EmailAlreadyTaken=1428006,kError_ProfileConnect_AlreadyConnected=1431001,kError_Inbox_ThreadsUnavailable=1415002,kError_OpenId_CancelResponse=1428010,kError_OpenId_SetupNeededResponse=1428011,kError_Payment_CreditCardError=1353008,kError_FBPayments_InvalidOperation=1383004,kError_FBPayments_PermissionDenied=1383005,kError_FBPayments_DatabaseError=1383006,kError_FBPayments_InvalidApp=1383007,kError_FBPayments_AppNoResponse=1383008,kError_FBPayments_AppErrorResponse=1383009,kError_FBPayments_UserCanceled=1383010,kError_FBPayments_Disabled=1383011,kError_Wall_RateLimitExceeded=1367004,kError_Async_Roadblocked=1357011,kError_Gigaboxx_InvalidFolder=1441008,kError_Gifts_GiftsWithCreditsGlobalLimitExceeded=1391027,kError_Login_LsdFailed=1348035,kError_Payment_CaptchaFailed=1353010,kError_Payment_SecurityRestriction=1353011,kError_OpenId_EmailAlreadyTakenLinkAccounts=1428016,kError_UIErrorForm_HasErrors=1460001,kError_CreditCardForm_InvalidCardType=1463001,kError_CreditCardForm_InvalidExpDate=1463002,kError_CreditCardForm_InvalidNumber=1463003,kError_CreditCardForm_InvalidZip=1463004,kError_CreditCardForm_InvalidState=1463005,kError_CreditCardForm_InvalidStreet=1463006,kError_CreditCardForm_InvalidCity=1463007,kError_CreditCardForm_NonNumericCard=1463008,kError_CreditCardForm_InvalidFirstName=1463009,kError_CreditCardForm_InvalidLastName=1463010,kError_CreditCardForm_InvalidCSC=1463011,kError_CreditCardForm_NonNumericCSC=1463012,kError_CreditCardForm_FailedAuth=1463013,kError_CreditCardForm_InvalidAddress=1463014,kError_CreditCardForm_FailedRegistration=1463015,kError_CreditCardForm_FailedRetrieval=1463016,kError_CreditCardForm_FailedRemove=1463017,kError_Mentions_UntaggingMentionFailed=1462003;

function collect_data_attrib(elem,type){var merged_data={};var attr_name='data-'+type;while(elem&&!DOM.isNode(elem,'body')){var attr_data_str=elem.getAttribute(attr_name);if(attr_data_str){var attr_data=JSON.decode(attr_data_str);for(var i in attr_data){if(merged_data[i]==undefined){merged_data[i]=attr_data[i];}}}
elem=elem.parentNode;}
return merged_data;}
function replace_collected_data_attrib(elem,type,existing_key,new_value){var attr_name='data-'+type;for(;elem&&!DOM.isNode(elem,'body');elem=elem.parentNode){var attr_data_str=elem.getAttribute(attr_name);if(attr_data_str){var attr_data=JSON.decode(attr_data_str);if(attr_data[existing_key]!==undefined){attr_data[existing_key]=new_value;elem.setAttribute(attr_name,JSON.encode(attr_data));return true;}}}
return false;}

copy_properties(ft,{NF_SOURCE_MINIFEED:9,NF_SOURCE_STREAM:10,NF_SOURCE_HIGHLIGHTS:11,NF_EVENT_IMPRESSION:2,NF_EVENT_SEE_MORE:28,NF_EVENT_PILL_CLICK:37,FT_COM_EXPANSION:'c_exp',STREAM_SOURCES:{9:true,10:true,11:true}});function ft(metadata){var asyncRequestPost=new AsyncSignal('/ajax/f.php',{'meta':metadata}).send();return true;}
ft.f3=function(elem){ft.logElem(elem);}
ft.enableFeedTracking=function(value){ft.feedTrackingIsEnabled=value;onunloadRegister(function(){ft.feedTrackingIsEnabled=false;});};ft.logElem=function(elem,params){if(!ft.feedTrackingIsEnabled){return;}
var link_data=collect_data_attrib(elem,'ft');if(count(link_data)){if(ft.feedTrackingIsEnabled==1&&ft.STREAM_SOURCES[parseInt(link_data.src,10)]){return;}
if(params){copy_properties(link_data,params);}
link_data.dest=elem.href;ft.logData(link_data);}}
ft.logData=function(link_data){new AsyncSignal('/ajax/f2.php',{link_data:JSON.encode(link_data)}).send();}
onloadRegister(function(){LinkController.registerFallbackHandler(function(elem){ft.logElem(elem);},LinkController.ALL,true);});

function RenderManager(renderable_object){copy_properties(this,{_isDirty:false,_obj:renderable_object});}
copy_properties(RenderManager.prototype,{dirty:function(){if(!this._isDirty){this._isDirty=true;bind(this,this.doPaint).defer();}},doPaint:function(){this._isDirty=false;this._obj.paint();}});

function CounterDisplay(counter_name,value_node,wrapper_node){copy_properties(this,{_name:counter_name,_valueNode:$(value_node),_wrapperNode:$(wrapper_node)||null,_rm:new RenderManager(this),_arbiterSubscription:null,_count:0});var node=this._valueNode.firstChild;if(node){var value=parseInt(node.nodeValue,10);if(!isNaN(value)){this._count=value;}}
this._subscribeAll();CounterDisplay.instances.push(this);onunloadRegister(this._destroy.bind(this),true);}
copy_properties(CounterDisplay,{EVENT_TYPE_ADJUST:'CounterDisplay/adjust',EVENT_TYPE_UPDATE:'CounterDisplay/update',instances:[],adjustCount:function(counter_name,value){Arbiter.inform(CounterDisplay.EVENT_TYPE_ADJUST+'/'+counter_name,value);},setCount:function(counter_name,value){Arbiter.inform(CounterDisplay.EVENT_TYPE_UPDATE+'/'+counter_name,value);}});CounterDisplay.mixin({_destroy:function(){delete this._valueNode;delete this._wrapperNode;if(this._arbiterSubscription){Arbiter.unsubscribe(this._arbiterSubscription);delete this._arbiterSubscription;}
CounterDisplay.instances.remove(this);},adjustCount:function(value){this._count=Math.max(0,this._count+value);this._rm.dirty();return this;},setCount:function(value){this._count=Math.max(0,value);this._rm.dirty();return this;},paint:function(){DOM.setText(this._valueNode,this._count);if(this._wrapperNode){if(this._count<=0){hide(this._wrapperNode);}else{show(this._wrapperNode);}}},_subscribeAll:function(){var types=[CounterDisplay.EVENT_TYPE_ADJUST+'/'+this._name,CounterDisplay.EVENT_TYPE_UPDATE+'/'+this._name];this._arbiterSubscription=Arbiter.subscribe(types,this._onInform.bind(this),Arbiter.SUBSCRIBE_NEW);},_onInform:function(type,value){value=parseInt(value);if(isNaN(value)){Util.warn("Passed invalid counter value: '%s'",value);return;}
if(type.indexOf(CounterDisplay.EVENT_TYPE_ADJUST)!=-1){this.adjustCount(value);}else if(type.indexOf(CounterDisplay.EVENT_TYPE_UPDATE)!=-1){this.setCount(value);}else{Util.warn("Invalid event type in CounterDisplay handler: '%s'",type);return;}
return;}});

var GigaboxxLinkHandler=window.GigaboxxLinkHandler||{_registered:false,linkSemaphore:false,register:function(){if(!GigaboxxLinkHandler._registered){LinkController.registerHandler(GigaboxxLinkHandler.linkHandler);GigaboxxLinkHandler._registered=true;}},linkHandler:function(link){var uri=new URI(link.href);var path=uri.getPath();if(path!='/inbox/'&&path!='/gigaboxx/'){return true;}
if(URI.getRequestURI().getSubdomain()=='apps'){return true;}
var query_data=uri.getQueryData();if(!('compose'in query_data)||query_data.oid){return true;}
if(GigaboxxLinkHandler.linkSemaphore){return false;}
GigaboxxLinkHandler.linkSemaphore=true;return GigaboxxLinkHandler.showDialog(query_data);},showDialog:function(query_data){new Dialog().setAsync(new AsyncRequest().setURI('/gigaboxx/dialog/MessageComposer.php').setData(query_data||{}).setFinallyHandler(function(){GigaboxxLinkHandler.linkSemaphore=false;})).show();return false;}};

function setCookie(cookieName,cookieValue,nMilliSecs,path){if(nMilliSecs){var thisMoment=new Date();var expire=new Date();expire.setTime(thisMoment.getTime()+nMilliSecs);}
document.cookie=cookieName+"="+encodeURIComponent(cookieValue)+"; "+
(nMilliSecs?"expires="+expire.toGMTString()+"; ":"")+"path="+(path||'/')+"; domain=."+
window.location.hostname.replace(/^.*(facebook\..*)$/i,'$1');}
function clearCookie(cookieName){document.cookie=cookieName+"=; expires=Mon, 26 Jul 1997 05:00:00 GMT; "+"path=/; domain=."+
window.location.hostname.replace(/^.*(facebook\..*)$/i,'$1');}
function getCookie(name){var nameEQ=name+"=";var ca=document.cookie.split(';');for(i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0){return decodeURIComponent(c.substring(nameEQ.length,c.length))}}
return null;}
function transferCookieToComTld(cookieName,handler){handler=handler||bagofholding;var cookieNames;if(cookieName instanceof Array){cookieNames=cookieName;}else{cookieNames=[cookieName];}
var data={};for(var i=0;i<cookieNames.length;i++){var value=getCookie(cookieNames[i]);if(value){data[cookieNames[i]]=value;}}
var domain=window.location.hostname.replace(/facebook.*/,'facebook.com');var uri='http://'+domain+'/common/cookie_transfer.php';new AsyncSignal(uri,data).setHandler(handler).send();}

function adjustImage(obj){var block=obj.parentNode;while(CSS.getStyle(block,'display')!='block'&&block.parentNode){block=block.parentNode;}
var width=block.offsetWidth;if(obj.offsetWidth>width){try{if(ua.ie()<8){var img_div=document.createElement('div');img_div.style.filter='progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+obj.src.replace('"','%22')+'", sizingMethod="scale")';img_div.style.width=width+'px';img_div.style.height=Math.floor(((width/obj.offsetWidth)*obj.offsetHeight))+'px';if(obj.parentNode.tagName=='A'){img_div.style.cursor='pointer';}
obj.parentNode.insertBefore(img_div,obj);obj.parentNode.removeChild(obj);}else{throw 1;}}catch(e){obj.style.width=width+'px';}}
CSS.removeClass(obj,'img_loading');}
function imageConstrainSize(src,maxX,maxY,placeholderid){var image=new Image();image.onload=function(){if(image.width>0&&image.height>0){var width=image.width;var height=image.height;if(width>maxX||height>maxY){var desired_ratio=maxY/maxX;var actual_ratio=height/width;if(actual_ratio>desired_ratio){width=width*(maxY/height);height=maxY;}else{height=height*(maxX/width);width=maxX;}}
var placeholder=ge(placeholderid);if(placeholder){var newimage=document.createElement('img');newimage.src=src;newimage.width=width;newimage.height=height;placeholder.parentNode.insertBefore(newimage,placeholder);placeholder.parentNode.removeChild(placeholder);}}}
image.src=src;}
function image_has_loaded(img){if(img.naturalWidth!==undefined){return img.complete&&img.width!=0;}else if(img.height==20&&img.width==20&&img.complete){return false;}else if(img.complete===undefined&&ua.safari()<500){var img2=new Image();img2.src=img.src;return img2.complete;}
return img.complete;}
function image_has_failed(obj){if((obj.complete==null&&obj.width==20&&obj.height==20)||(obj.mimeType!=null&&obj.complete&&obj.mimeType=='')||(obj.naturalHeight!=null&&obj.complete&&obj.naturalHeight==0)){return true;}}

function DOMControl(root){copy_properties(this,{root:root&&$(root),updating:false});if(root){root.getControl=identity.bind(null,this);}}
copy_properties(DOMControl.prototype,{getRoot:function(){return this.root;},beginUpdate:function(){if(this.updating){return false;}
this.updating=true;return true;},endUpdate:function(){this.updating=false;},update:function(e){if(!this.beginUpdate()){return this;}
this.onupdate(e);this.endUpdate();}});

function TextInputControl(textinput){this.parent.construct(this,textinput);copy_properties(this,{placeholderText:null,maxLength:this.getRoot().maxLength||null,radio:null,focused:false,interval:null,nativePlaceholder:false});var r=this.getRoot();if((String(r.type).toLowerCase()=='search')&&ua.safari()){this.nativePlaceholder=true;this.setPlaceholderText(r.getAttribute('placeholder'));}
addEventBase(r,'focus',this.onfocus.bind(this));addEventBase(r,'blur',this.onblur.bind(this));var up=this.update.bind(this);Event.listen(r,'keydown',up);Event.listen(r,'keyup',up);Event.listen(r,'keypress',up);this.setFocused(false);}
TextInputControl.extend('DOMControl');copy_properties(TextInputControl.prototype,{associateWithRadioButton:function(element){this.radio=element&&$(element);return this;},setMaxLength:function(maxlength){this.maxLength=maxlength;this.getRoot().maxLength=this.maxLength||null;return this;},getValue:function(){if(!this.focused&&this.getRoot().value==this.placeholderText){return null;}
return this.getRoot().value;},isEmpty:function(){var v=this.getValue();return(v===null||v=='');},setValue:function(value){this.getRoot().value=value;this.update();return this;},clear:function(){return this.setValue('');},isFocused:function(){return this.focused;},setFocused:function(focused){var empty=this.isEmpty();this.focused=focused;if(this.placeholderText&&!this.nativePlaceholder){var r=this.getRoot();var v=r.value;if(this.focused){CSS.removeClass(r,'DOMControl_placeholder');if(empty){this.clear();}}else if(empty){CSS.addClass(r,'DOMControl_placeholder');this.setValue(this.placeholderText);}}
this.update();return this;},setPlaceholderText:function(text){this.placeholderText=text;if(this.nativePlaceholder){this.getRoot().setAttribute('placeholder',text);}
return this.setFocused(this.isFocused());},getPlaceholderText:function(){return this.placeholderText;},onupdate:function(){if(this.radio){if(this.focused){this.radio.checked=true;}}
var root=this.getRoot();if(this.maxLength>0){if(root.value.length>this.maxLength){var value=root.value;var remove_length=value.length-this.maxLength;var pos_pair=DOM.getCaretPosition(root);var remove_behind_pos=pos_pair.end||value.length;root.value=value.substring(0,remove_behind_pos-remove_length)+
value.substring(remove_behind_pos);if(typeof pos_pair.start!='undefined'){DOM.setCaretPosition(root,pos_pair.start-remove_length,Math.max(pos_pair.start,pos_pair.end)-remove_length);}}}
this.setFocused(this.focused);},onfocus:function(){this.setFocused(true);if(this.interval){clearInterval(this.interval);}
this.interval=setInterval(this.update.bind(this),150);return this;},onblur:function(){this.setFocused(false);if(this.interval){this.interval=clearInterval(this.interval);}
return this;}});function placeholderSetup(id){if(!ge(id)){Util.warn('Setting up a placeholder for an element which does not exist: %q.',id);return;}
if(!$(id).getAttribute('placeholder')){Util.warn('Setting up a placeholder for an element with no placeholder text: %q.',id);return;}
return new TextInputControl($(id)).setPlaceholderText($(id).getAttribute('placeholder'));}

window.__UIControllerRegistry=window.__UIControllerRegistry||{};

function animation(obj){if(obj==undefined){Util.error("Creating animation on non-existant object");return;}
if(this==window){return new animation(obj);}else{this.obj=obj;this._reset_state();this.queue=[];this.last_attr=null;}}
animation.resolution=20;animation.offset=0;animation.prototype._reset_state=function(){this.state={attrs:{},duration:500}}
animation.prototype.stop=function(){this._reset_state();this.queue=[];return this;}
animation.prototype._build_container=function(){if(this.container_div){this._refresh_container();return;}
if(this.obj.firstChild&&this.obj.firstChild.__animation_refs){this.container_div=this.obj.firstChild;this.container_div.__animation_refs++;this._refresh_container();return;}
var container=document.createElement('div');container.style.padding='0px';container.style.margin='0px';container.style.border='0px';container.__animation_refs=1;var children=this.obj.childNodes;while(children.length){container.appendChild(children[0]);}
this.obj.appendChild(container);this.obj.style.overflow='hidden';this.container_div=container;this._refresh_container();}
animation.prototype._refresh_container=function(){this.container_div.style.height='auto';this.container_div.style.width='auto';this.container_div.style.height=this.container_div.offsetHeight+'px';this.container_div.style.width=this.container_div.offsetWidth+'px';}
animation.prototype._destroy_container=function(){if(!this.container_div){return;}
if(!--this.container_div.__animation_refs){var children=this.container_div.childNodes;while(children.length){this.obj.appendChild(children[0]);}
this.obj.removeChild(this.container_div);}
this.container_div=null;}
animation.ATTR_TO=1;animation.ATTR_BY=2;animation.ATTR_FROM=3;animation.prototype._attr=function(attr,value,mode){attr=attr.replace(/-[a-z]/gi,function(l){return l.substring(1).toUpperCase();});var auto=false;switch(attr){case'background':this._attr('backgroundColor',value,mode);return this;case'margin':value=animation.parse_group(value);this._attr('marginBottom',value[0],mode);this._attr('marginLeft',value[1],mode);this._attr('marginRight',value[2],mode);this._attr('marginTop',value[3],mode);return this;case'padding':value=animation.parse_group(value);this._attr('paddingBottom',value[0],mode);this._attr('paddingLeft',value[1],mode);this._attr('paddingRight',value[2],mode);this._attr('paddingTop',value[3],mode);return this;case'backgroundColor':case'borderColor':case'color':value=animation.parse_color(value);break;case'opacity':value=parseFloat(value,10);break;case'height':case'width':if(value=='auto'){auto=true;}else{value=parseInt(value,10);}
break;case'borderWidth':case'lineHeight':case'fontSize':case'marginBottom':case'marginLeft':case'marginRight':case'marginTop':case'paddingBottom':case'paddingLeft':case'paddingRight':case'paddingTop':case'bottom':case'left':case'right':case'top':case'scrollTop':case'scrollLeft':value=parseInt(value,10);break;default:throw new Error(attr+' is not a supported attribute!');}
if(this.state.attrs[attr]===undefined){this.state.attrs[attr]={};}
if(auto){this.state.attrs[attr].auto=true;}
switch(mode){case animation.ATTR_FROM:this.state.attrs[attr].start=value;break;case animation.ATTR_BY:this.state.attrs[attr].by=true;case animation.ATTR_TO:this.state.attrs[attr].value=value;break;}}
animation.prototype.to=function(attr,value){if(value===undefined){this._attr(this.last_attr,attr,animation.ATTR_TO);}else{this._attr(attr,value,animation.ATTR_TO);this.last_attr=attr;}
return this;}
animation.prototype.by=function(attr,value){if(value===undefined){this._attr(this.last_attr,attr,animation.ATTR_BY);}else{this._attr(attr,value,animation.ATTR_BY);this.last_attr=attr;}
return this;}
animation.prototype.from=function(attr,value){if(value===undefined){this._attr(this.last_attr,attr,animation.ATTR_FROM);}else{this._attr(attr,value,animation.ATTR_FROM);this.last_attr=attr;}
return this;}
animation.prototype.duration=function(duration){this.state.duration=duration?duration:0;return this;}
animation.prototype.checkpoint=function(distance,callback){if(distance===undefined){distance=1;}
this.state.checkpoint=distance;this.queue.push(this.state);this._reset_state();this.state.checkpointcb=callback;return this;}
animation.prototype.blind=function(){this.state.blind=true;return this;}
animation.prototype.hide=function(){this.state.hide=true;return this;}
animation.prototype.show=function(){this.state.show=true;return this;}
animation.prototype.ease=function(ease){this.state.ease=ease;return this;}
animation.prototype.go=function(){var time=(new Date()).getTime();this.queue.push(this.state);for(var i=0;i<this.queue.length;i++){this.queue[i].start=time-animation.offset;if(this.queue[i].checkpoint){time+=this.queue[i].checkpoint*this.queue[i].duration;}}
animation.push(this);return this;}
animation.prototype._frame=function(time){var done=true;var still_needs_container=false;var whacky_firefox=false;for(var i=0;i<this.queue.length;i++){var cur=this.queue[i];if(cur.start>time){done=false;continue;}
if(cur.checkpointcb){this._callback(cur.checkpointcb,time-cur.start);cur.checkpointcb=null;}
if(cur.started===undefined){if(cur.show){this.obj.style.display='block';}
for(var a in cur.attrs){if(cur.attrs[a].start!==undefined){continue;}
switch(a){case'backgroundColor':case'borderColor':case'color':var val=animation.parse_color(CSS.getStyle(this.obj,a=='borderColor'?'borderLeftColor':a));if(cur.attrs[a].by){cur.attrs[a].value[0]=Math.min(255,Math.max(0,cur.attrs[a].value[0]+val[0]));cur.attrs[a].value[1]=Math.min(255,Math.max(0,cur.attrs[a].value[1]+val[1]));cur.attrs[a].value[2]=Math.min(255,Math.max(0,cur.attrs[a].value[2]+val[2]));}
break;case'opacity':var val=CSS.getOpacity(this.obj);if(cur.attrs[a].by){cur.attrs[a].value=Math.min(1,Math.max(0,cur.attrs[a].value+val));}
break;case'height':var val=DOM.getBoxHeight(this.obj);if(cur.attrs[a].by){cur.attrs[a].value+=val;}
break;case'width':var val=DOM.getBoxWidth(this.obj);if(cur.attrs[a].by){cur.attrs[a].value+=val;}
break;case'scrollLeft':case'scrollTop':var val=(this.obj==document.body)?(document.documentElement[a]||document.body[a]):this.obj[a];if(cur.attrs[a].by){cur.attrs[a].value+=val;}
cur['last'+a]=val;break;default:var val=parseInt(CSS.getStyle(this.obj,a),10)||0;if(cur.attrs[a].by){cur.attrs[a].value+=val;}
break;}
cur.attrs[a].start=val;}
if((cur.attrs.height&&cur.attrs.height.auto)||(cur.attrs.width&&cur.attrs.width.auto)){if(ua.firefox()<3){whacky_firefox=true;}
this._destroy_container();for(var a in{height:1,width:1,fontSize:1,borderLeftWidth:1,borderRightWidth:1,borderTopWidth:1,borderBottomWidth:1,paddingLeft:1,paddingRight:1,paddingTop:1,paddingBottom:1}){if(cur.attrs[a]){this.obj.style[a]=cur.attrs[a].value+(typeof cur.attrs[a].value=='number'?'px':'');}}
if(cur.attrs.height&&cur.attrs.height.auto){cur.attrs.height.value=DOM.getBoxHeight(this.obj);}
if(cur.attrs.width&&cur.attrs.width.auto){cur.attrs.width.value=DOM.getBoxWidth(this.obj);}}
cur.started=true;if(cur.blind){this._build_container();}}
var p=(time-cur.start)/cur.duration;if(p>=1){p=1;if(cur.hide){this.obj.style.display='none';}}else{done=false;}
var pc=cur.ease?cur.ease(p):p;if(!still_needs_container&&p!=1&&cur.blind){still_needs_container=true;}
if(whacky_firefox&&this.obj.parentNode){var parentNode=this.obj.parentNode;var nextChild=this.obj.nextSibling;parentNode.removeChild(this.obj);}
for(var a in cur.attrs){switch(a){case'backgroundColor':case'borderColor':case'color':this.obj.style[a]='rgb('+
animation.calc_tween(pc,cur.attrs[a].start[0],cur.attrs[a].value[0],true)+','+
animation.calc_tween(pc,cur.attrs[a].start[1],cur.attrs[a].value[1],true)+','+
animation.calc_tween(pc,cur.attrs[a].start[2],cur.attrs[a].value[2],true)+')';break;case'opacity':CSS.setOpacity(this.obj,animation.calc_tween(pc,cur.attrs[a].start,cur.attrs[a].value));break;case'height':case'width':this.obj.style[a]=pc==1&&cur.attrs[a].auto?'auto':animation.calc_tween(pc,cur.attrs[a].start,cur.attrs[a].value,true)+'px';break;case'scrollLeft':case'scrollTop':var is_body=this.obj==document.body;var val=(is_body)?(document.documentElement[a]||document.body[a]):this.obj[a];if(cur['last'+a]!=val){delete cur.attrs[a];}else{var diff=animation.calc_tween(pc,cur.attrs[a].start,cur.attrs[a].value,true)-val;if(DOMScroll.usingScrollWrapper()||!is_body){this.obj[a]=diff+val;}else{if(a=='scrollLeft'){window.scrollBy(diff,0);}else{window.scrollBy(0,diff);}}
cur['last'+a]=diff+val;}
break;default:this.obj.style[a]=animation.calc_tween(pc,cur.attrs[a].start,cur.attrs[a].value,true)+'px';break;}}
if(p==1){this.queue.splice(i--,1);this._callback(cur.ondone,time-cur.start-cur.duration);}}
if(whacky_firefox){parentNode[nextChild?'insertBefore':'appendChild'](this.obj,nextChild);}
if(!still_needs_container&&this.container_div){this._destroy_container();}
return!done;}
animation.prototype.ondone=function(fn){this.state.ondone=fn;return this;}
animation.prototype._callback=function(callback,offset){if(callback){animation.offset=offset;callback.call(this);animation.offset=0;}}
animation.calc_tween=function(p,v1,v2,whole){return(whole?parseInt:parseFloat)((v2-v1)*p+v1,10);}
animation.parse_color=function(color){var hex=/^#([a-f0-9]{1,2})([a-f0-9]{1,2})([a-f0-9]{1,2})$/i.exec(color);if(hex){return[parseInt(hex[1].length==1?hex[1]+hex[1]:hex[1],16),parseInt(hex[2].length==1?hex[2]+hex[2]:hex[2],16),parseInt(hex[3].length==1?hex[3]+hex[3]:hex[3],16)];}else{var rgb=/^rgba? *\(([0-9]+), *([0-9]+), *([0-9]+)(?:, *([0-9]+))?\)$/.exec(color);if(rgb){if(rgb[4]==='0'){return[255,255,255];}else{return[parseInt(rgb[1],10),parseInt(rgb[2],10),parseInt(rgb[3],10)];}}else if(color=='transparent'){return[255,255,255];}else{throw'Named color attributes are not supported.';}}}
animation.parse_group=function(value){var value=trim(value).split(/ +/);if(value.length==4){return value;}else if(value.length==3){return[value[0],value[1],value[2],value[1]];}else if(value.length==2){return[value[0],value[1],value[0],value[1]];}else{return[value[0],value[0],value[0],value[0]];}}
animation.push=function(instance){if(!animation.active){animation.active=[];}
animation.active.push(instance);if(!animation.timeout){animation.timeout=setInterval(animation.animate.bind(animation),animation.resolution,false);}
animation.animate(true);}
animation.animate=function(last){var time=(new Date()).getTime();for(var i=last===true?animation.active.length-1:0;i<animation.active.length;i++){try{if(!animation.active[i]._frame(time)){animation.active.splice(i--,1);}}catch(e){animation.active.splice(i--,1);}}
if(animation.active.length==0){clearInterval(animation.timeout);animation.timeout=null;}}
animation.ease={}
animation.ease.begin=function(p){return Math.sin(Math.PI/2*(p-1))+1;}
animation.ease.end=function(p){return Math.sin(0.5*Math.PI*p);}
animation.ease.both=function(p){return 0.5*Math.sin(Math.PI*(p-0.5))+0.5;}

function Nectar(){}
copy_properties(Nectar,{linkHandler:function(ret_val,link){var nctr_params=Nectar.getNectarParams();nctr_params['ia']=1;var url=link.href;if(!url){url=URI.getRequestURI().toString();nctr_params['err']=1;}
nctr_params['url']=url;var uri='/ajax/nectar.php'+'?'
+URI.implodeQuery({'nctr':nctr_params})+'&';new AsyncSignal(uri,{}).send();return ret_val;},getNectarParams:function(){var nctr_params={};var impid=env_get('nctrlid');if(impid){nctr_params['id']=impid;}
var navimpid=env_get('nctrlnid');if(navimpid){nctr_params['nid']=navimpid;}
if(impid||navimpid){nctr_params['ct']=(new Date()).getTime();}
copy_properties(nctr_params,Nectar.extraData.get_query_data());return nctr_params;},extraData:function(){var data={};var data_keys=[];return{set_item:function(name,value,send){var value_list=data[name];if(value_list===undefined){if(send){data_keys.push(name);}
value_list=[];data[name]=value_list;}
return value_list.push(value);},get_item:function(name){return data[name]||[];},get_query_data:function(){var ii,value_list,name,query_data={};for(ii=0;ii<data_keys.length;ii++){name=data_keys[ii];value_list=data[name];if(value_list){query_data[name]=value_list.join(',');}}
data=[];data_keys=[];return query_data;}}}()});

var HistoryManager={_IFRAME_BASE_URI:'http://static.ak.facebook.com/common/history_manager.html',history:null,current:0,fragment:null,_setIframeSrcFragment:function(src){src=src.toString();var index=HistoryManager.history.length-1;HistoryManager.iframe.src=HistoryManager._IFRAME_BASE_URI+'?|index='+index+'#'+encodeURIComponent(src);return HistoryManager;},getIframeSrcFragment:function(){return decodeURIComponent(URI(HistoryManager.iframe.contentWindow.document.location.href).getFragment());},nextframe:function(frame,replace){if(replace){HistoryManager._setIframeSrcFragment(frame);return;}
if(frame!==undefined){HistoryManager.iframeQueue.push(frame);}else{HistoryManager.iframeQueue.splice(0,1);HistoryManager.iframeTimeout=null;HistoryManager.checkURI();}
if(HistoryManager.iframeQueue.length&&!HistoryManager.iframeTimeout){var src=HistoryManager.iframeQueue[0];HistoryManager.iframeTimeout=setTimeout(function(){HistoryManager._setIframeSrcFragment(src);},100,false);}},isInitialized:function(){return!!HistoryManager._initialized;},init:function(){if(URI.getRequestURI(false).getProtocol().toLowerCase()=='https'){return;}
if(!env_get('ALLOW_TRANSITION_IN_IFRAME')&&window!=window.top){return;}
if(HistoryManager._initialized){return HistoryManager;}
var uri=URI();var cur_fragment=uri.getFragment()||'';copy_properties(HistoryManager,{_initialized:true,fragment:cur_fragment,orig_fragment:cur_fragment,history:[uri],callbacks:[],lastChanged:new Date().getTime(),canonical:URI('#'),fragmentTimeout:null,user:0,iframeTimeout:null,iframeQueue:[],enabled:true,debug:bagofholding});if(ua.safari()<500||ua.firefox()<2){HistoryManager.enabled=false;return HistoryManager;}
if(ua.ie()<8){HistoryManager.iframe=document.createElement('iframe');copy_properties(HistoryManager.iframe.style,{width:'0',height:'0',frameborder:'0',left:'0',top:'0',position:'absolute'});onloadRegister(function(){HistoryManager._setIframeSrcFragment(cur_fragment);document.body.insertBefore(HistoryManager.iframe,document.body.firstChild);});}else{setInterval(HistoryManager.checkURI,42,false);}
HistoryManager._updateRefererURI(URI.getRequestURI(false));return HistoryManager;},registerURIHandler:function(callback){HistoryManager.callbacks.push(callback);return HistoryManager;},setCanonicalLocation:function(loc){HistoryManager.canonical=URI(loc);return HistoryManager;},notify:function(uri){if(uri==HistoryManager.orig_fragment){uri=HistoryManager.canonical.getFragment();}
for(var ii=0;ii<HistoryManager.callbacks.length;ii++){try{if(HistoryManager.callbacks[ii](uri)){return true;}}catch(ex){Util.error('Uncaught exception in HistoryManager URI handler callback: %x',ex);}}
return false;},checkURI:function(){if(new Date().getTime()-HistoryManager.lastChanged<400){return;}
if(ua.ie()<8&&HistoryManager.iframeQueue.length){return;}
if(ua.safari()&&window.history.length==200){if(!HistoryManager.warned){HistoryManager.warned=true;Util.error('Your history length is over 200 and you are in Safari; things will '+'start behaving oddly now. This is a known bug.');}
return;}
var frag=URI().getFragment();if(ua.ie()<8){frag=HistoryManager.getIframeSrcFragment();}
if(frag!=HistoryManager.fragment){HistoryManager.debug([frag,' vs ',HistoryManager.fragment,'whl: ',window.history.length,'QHL: ',HistoryManager.history.length].join(' '));for(var ii=HistoryManager.history.length-1;ii>=0;--ii){if(HistoryManager.history[ii].getFragment()==frag){break;}}
++HistoryManager.user;if(ii>=0){HistoryManager.go(ii-HistoryManager.current);}else{HistoryManager.go('#'+frag);}
--HistoryManager.user;}
delete frag;},_updateRefererURI:function(uri){uri=uri.toString();if(uri.charAt(0)!='/'&&uri.indexOf('//')==-1){return;}
setCookie('x-referer',URI(uri).getQualifiedURI().setFragment('').toString());},go:function(href,now,replace){HistoryManager.debug('go: '+href);if(now===undefined){now=true;}
if(!HistoryManager.enabled){if(!now){return false;}}
if(typeof(href)=='number'){if(!href){return false;}
var dst=href+HistoryManager.current;var loc=Math.max(0,Math.min(HistoryManager.history.length-1,dst));HistoryManager.current=loc;dst=HistoryManager.history[loc].getFragment()||HistoryManager.orig_fragment;HistoryManager.fragment=dst;HistoryManager.lastChanged=new Date().getTime();if(ua.ie()<8){if(HistoryManager.fragmentTimeout){clearTimeout(HistoryManager.fragmentTimeout);}
HistoryManager._temporary_fragment=dst;HistoryManager.fragmentTimeout=setTimeout(function(){window.location.hash='#'+dst;delete HistoryManager._temporary_fragment;},750,false);if(!HistoryManager.user){HistoryManager.nextframe(dst,replace);}}else if(!HistoryManager.user){go_or_replace(window.location,window.location.href.split('#')[0]+'#'+dst,replace);}
if(now){HistoryManager.notify(dst);}
HistoryManager._updateRefererURI(dst);return false;}
href=URI(href);if(href.getDomain()==URI().getDomain()){href=URI('#'+href.getUnqualifiedURI());}
var cur=HistoryManager.history[HistoryManager.current].getFragment();var tgt=href.getFragment();if(tgt==cur||(cur==HistoryManager.orig_fragment&&tgt==HistoryManager.canonical.getFragment())){if(now){HistoryManager.notify(tgt);}
HistoryManager._updateRefererURI(tgt);return false;}
if(replace){HistoryManager.current--;}
var wipe=(HistoryManager.history.length-HistoryManager.current)-1;HistoryManager.history.splice(HistoryManager.current+1,wipe);HistoryManager.history.push(URI(href));return HistoryManager.go(1,now,replace);},getCurrentFragment:function(){var cur_fragment=HistoryManager._temporary_fragment!==undefined?HistoryManager._temporary_fragment:URI.getRequestURI(false).getFragment();return cur_fragment==HistoryManager.orig_fragment?HistoryManager.canonical.getFragment():cur_fragment;}};var PageTransitions={_transition_handlers:[],_scroll_positions:{},isInitialized:function(){return!!PageTransitions._initialized;},_init:function(){if(URI.getRequestURI(false).getProtocol().toLowerCase()=='https'){return;}
if(!env_get('ALLOW_TRANSITION_IN_IFRAME')&&window!=window.top){return;}
if(PageTransitions._initialized){return PageTransitions;}
PageTransitions._initialized=true;var req_uri=URI.getRequestURI(false);var canonical_uri=req_uri.getUnqualifiedURI();var uri_nofrag=URI(canonical_uri).setFragment(null);if(uri_nofrag.toString()===canonical_uri.getFragment()){canonical_uri=uri_nofrag;}
copy_properties(PageTransitions,{_current_uri:canonical_uri,_most_recent_uri:canonical_uri,_next_uri:canonical_uri});var canonical_uri_frag;if(req_uri.getFragment().startsWith('/')){canonical_uri_frag=req_uri.getFragment();}else{canonical_uri_frag=canonical_uri;}
HistoryManager.init().setCanonicalLocation('#'+canonical_uri_frag).registerURIHandler(PageTransitions._historyManagerHandler);LinkController.registerFallbackHandler(PageTransitions._rewriteHref,LinkController.TARGETS|LinkController.MODIFIERS);LinkController.registerFallbackHandler(PageTransitions._onlinkclick);window.onscroll=chain(window.onscroll,function(){var frag=HistoryManager.getCurrentFragment();if(PageTransitions._current_uri==frag){PageTransitions._scroll_positions[frag]=Vector2.getScrollPosition();}});return PageTransitions;},registerHandler:function(transition_handler,prepend){PageTransitions._init();if(PageTransitions._transition_handlers.contains(transition_handler)){Util.warn('Registering a transition handler that\'s already been '
+'registered.  Ur probably doin it wrong.');}
if(prepend){PageTransitions._transition_handlers.unshift(transition_handler);}else{PageTransitions._transition_handlers.push(transition_handler);}},getCurrentURI:function(suppress_warning){if(!PageTransitions._current_uri&&!suppress_warning){Util.warn('You\'ve requested the current URI, but there is no "current" '
+'URI.  This is probably because you\'re in the middle of a '
+'page transition.  That\'s an awkward time to ask for the '
+'current URI, and you should probably avoid this situation.  '
+'For now, I\'m just gonna return the most recent page URI, '
+'since that\'s better than returning null.');return new URI(PageTransitions._most_recent_uri);}
return new URI(PageTransitions._current_uri);},getMostRecentURI:function(){return new URI(PageTransitions._most_recent_uri);},getNextURI:function(){return new URI(PageTransitions._next_uri);},_rewriteHref:function(link){var old_href=link.getAttribute('href');var new_href=_computeRelativeURI(PageTransitions._most_recent_uri.getQualifiedURI(),old_href).toString();if(old_href!=new_href){link.setAttribute('href',new_href);}},_onlinkclick:function(link){_BusyUIManager.lookBusy(link);PageTransitions.go(link.getAttribute('href'));return false;},_rewriteSubDomain:function(uri){uri=URI(uri);var domain=uri.getDomain();if(domain.indexOf('apps.')===0){var cur_domain=URI.getRequestURI().getDomain();uri.addQueryData({_fb_qsub:domain}).setDomain(cur_domain);}
return uri;},_revertSubDomain:function(uri){uri=URI(uri);var query_data=uri.getQueryData();if('_fb_qsub'in query_data){var old_domain=query_data._fb_qsub;uri.removeQueryData('_fb_qsub').setDomain(old_domain).setProtocol(URI().getProtocol());}
return uri;},go:function(uri,replace){var qualified_uri=new URI(uri).removeQueryData('quickling').getQualifiedURI();qualified_uri=PageTransitions._rewriteSubDomain(qualified_uri);var unqualified_uri=qualified_uri.getUnqualifiedURI();delete PageTransitions._scroll_positions[unqualified_uri];_BusyUIManager.lookBusy();PageTransitions._loadPage(qualified_uri,function(handled){if(handled){HistoryManager.go(qualified_uri.toString(),false,replace);}else{qualified_uri=PageTransitions._revertSubDomain(qualified_uri);go_or_replace(window.location,qualified_uri,replace);}});},_historyManagerHandler:function(uri_s){if(uri_s.charAt(0)!='/'){return false;}
PageTransitions._loadPage(new URI(uri_s),function(handled){if(!handled){uri_s=PageTransitions._revertSubDomain(uri_s);go_or_replace(window.location,uri_s,true);}});return true;},_loadPage:function(uri,ondone){if(uri.getFragment()&&are_equal(URI(uri).setFragment(null).getQualifiedURI(),URI(PageTransitions._current_uri).setFragment(null).getQualifiedURI())){PageTransitions._current_uri=PageTransitions._most_recent_uri=uri;PageTransitions.restoreScrollPosition();_BusyUIManager.stopLookingBusy();return;}
var scroll_position=PageTransitions._scroll_positions[PageTransitions._current_uri];PageTransitions._current_uri=null;PageTransitions._next_uri=uri;if(scroll_position){DOMScroll.scrollTo(scroll_position,false);}
var handle_transition=function(){var handled=PageTransitions._handleTransition(uri);ondone&&ondone(handled);};var beforeleave_warning=_runHooks('onbeforeleavehooks');if(beforeleave_warning){_BusyUIManager.stopLookingBusy();PageTransitions._warnBeforeLeaving(beforeleave_warning,handle_transition);}else{handle_transition();}},_handleTransition:function(uri){window.onbeforeleavehooks=undefined;_BusyUIManager.lookBusy();for(var i=PageTransitions._transition_handlers.length-1;i>=0;--i){if(PageTransitions._transition_handlers[i](uri)===true){var message={sender:this,uri:uri};Arbiter.inform(Arbiter.PAGE_TRANSITION,message);return true;}else{PageTransitions._transition_handlers.splice(i,1);}}
return false;},transitionComplete:function(){_BusyUIManager.stopLookingBusy();PageTransitions._current_uri=PageTransitions._most_recent_uri=PageTransitions._next_uri;PageTransitions.restoreScrollPosition();},_warnBeforeLeaving:function(warning_text,continuation){new Dialog().setTitle(_tx("Are you sure you want to navigate away from this page?")).setSummary(_tx("Press {ok} to continue, or {cancel} to stay on the current page.",{ok:_tx("Okay"),cancel:_tx("Cancel")})).setBody(htmlize(warning_text)).setButtons(Dialog.OK_AND_CANCEL).setHandler(continuation).setModal().show();},restoreScrollPosition:function(){var current_uri=PageTransitions._current_uri;var scroll_position=PageTransitions._scroll_positions[current_uri];if(scroll_position){DOMScroll.scrollTo(scroll_position,false);return;}
function get_anchor(name){return(name||null)&&(DOM.find(document,sprintf('a[name=%e]',name))||ge(name));}
var anchor=get_anchor(current_uri.getFragment());if(anchor){var anchor_position=Vector2.getElementPosition(anchor);anchor_position.x=0;DOMScroll.scrollTo(anchor_position);}}};function _computeRelativeURI(original,delta){var ret=new URI(),delta_=delta;original=new URI(original);delta=new URI(delta);if(!delta.isFacebookURI()){return delta_;}
var source=original;var components=['Protocol','Domain','Port','Path','QueryData','Fragment'];components.forEach(function(component){var combine_paths=component=='Path'&&source===original;if(combine_paths){ret.setPath(_computeRelativePath(original.getPath(),delta.getPath()));}
if(!is_empty(delta['get'+component]())){source=delta;}
if(!combine_paths){ret['set'+component](source['get'+component]());}});return ret;}
function _computeRelativePath(original,delta){if(!delta){return original;}
if(delta.charAt(0)=='/'){return delta;}
var parts=original.split('/').slice(0,-1);if(parts[0]!==''){Util.warn('Original path is not absolute.');}
delta.split('/').forEach(function(part){if(part=='.'){}else if(part=='..'){if(parts.length>1){parts=parts.slice(0,-1);}}else{parts.push(part);}});return parts.join('/');}
function go_or_replace(location_obj,target_url,replace){var uri=new URI(target_url);if(location_obj.pathname=='/'&&uri.getPath()!='/'&&uri.isQuicklingEnabled()){var query_data=location_obj.search?{}:{q:''};uri=new URI().setPath('/').setQueryData(query_data).setFragment(uri.getUnqualifiedURI()).toString();target_url=uri.toString();}
if(replace&&!(ua.ie()<8)){location_obj.replace(target_url);}else if(location_obj.href==target_url){location_obj.reload();}else{location_obj.href=target_url;}}
var _BusyUIManager={_looking_busy:false,_original_cursors:[],lookBusy:function(link_element){if(link_element){_BusyUIManager._giveProgressCursor(link_element);}
if(_BusyUIManager._looking_busy){return;}
_BusyUIManager._looking_busy=true;_BusyUIManager._giveProgressCursor(document.body);},stopLookingBusy:function(){if(!_BusyUIManager._looking_busy){return;}
_BusyUIManager._looking_busy=false;while(_BusyUIManager._original_cursors.length){var element_and_cursor=_BusyUIManager._original_cursors.pop();var element=element_and_cursor[0];var cursor=element_and_cursor[1];if(element.style){element.style.cursor=cursor||'';}}},_giveProgressCursor:function(element){if(!ua.safari()){_BusyUIManager._original_cursors.push([element,element.style.cursor]);element.style.cursor='progress';}}};

if(!this.JSON){this.JSON=function(){function f(n){return n<10?'0'+n:n;}
Date.prototype.toJSON=function(){return this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+
f(this.getUTCDate())+'T'+
f(this.getUTCHours())+':'+
f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z';};var m={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};function stringify(value,whitelist){var a,i,k,l,v;switch(typeof value){case'string':return(new RegExp('[\x00-\x1f\\\\"]')).test(value)?'"'+value.replace(/[\x00-\x1f\\"]/g,function(a){var c=m[a];if(c){return c;}
c=a.charCodeAt();return'\\u00'+Math.floor(c/16).toString(16)+
(c%16).toString(16);})+'"':'"'+value+'"';case'number':return isFinite(value)?String(value):'null';case'boolean':return String(value);case'null':return'null';case'object':if(DOM.isNode(value)){return null;}
if(!value){return'null';}
if(typeof value.toJSON==='function'){return stringify(value.toJSON());}
a=[];if(typeof value.length==='number'&&!(propertyIsEnumerable(value,'length'))){l=value.length;for(i=0;i<l;i+=1){a.push(stringify(value[i],whitelist)||'null');}
return'['+a.join(',')+']';}
if(whitelist){l=whitelist.length;for(i=0;i<l;i+=1){k=whitelist[i];if(typeof k==='string'){v=stringify(value[k],whitelist);if(v){a.push(stringify(k)+':'+v);}}}}else{for(k in value){if(typeof k==='string'){v=stringify(value[k],whitelist);if(v){a.push(stringify(k)+':'+v);}}}}
return'{'+a.join(',')+'}';}}
return{stringify:stringify,parse:function(text,filter){var j;function walk(k,v){var i,n;if(v&&typeof v==='object'){for(i in v){if(Object.prototype.hasOwnProperty.apply(v,[i])){n=walk(i,v[i]);if(n!==undefined){v[i]=n;}}}}
return filter(k,v);}
if(text&&/^[\],:{}\s]*$/.test(text.replace(/\\./g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(:?[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof filter==='function'?walk('',j):j;}
throw new SyntaxError('decodeJSON');}};}();}
this.JSON.encode=this.JSON.stringify;this.JSON.decode=this.JSON.parse;function propertyIsEnumerable(o,p){if(o.propertyIsEnumerable){return o.propertyIsEnumerable(p);}
for(var prop in o){if(prop==p)return true;}
return false;}

if (window.Bootloader) { Bootloader.done(["js\/bxfp2n4e75wg4gks.pkg.js"]); }
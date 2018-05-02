/*    HTTP Host:  static.ak.fbcdn.net                                          */
/*    Generated:  September 11th 2009 4:00:36 PM PDT                           */
/*      Machine:  10.16.140.104                                                */
/*       Source:  Local Cache                                                  */
/*     Location:  rsrc:4:arbolqy6                                              */
/*       Locale:  nu_ll                                                        */
/*         Path:  js/9c2ta3vx27gogc84.pkg.js                                   */


if(navigator&&navigator.userAgent&&document.domain.toLowerCase().match(/(^|\.)facebook\..*/)&&!(parseInt((/Gecko\/([0-9]+)/.exec(navigator.userAgent)||[]).pop(),10)<=20060508)){document.domain=window.location.hostname.replace(/^.*(facebook\..*)$/i,'$1');}
var onloadRegister=window.onloadRegister||function(h){onloadhooks.push(h);};var onloadhooks=window.onloadhooks||[];var onafterloadRegister=window.onafterloadRegister||function(h){onafterloadhooks.push(h);};var onafterloadhooks=window.onafterloadhooks||[];function run_if_loaded(element,f){f=bind(element,f);if(window.loaded){return(element.returnValue=f());}};function run_now(element,f){f=bind(element,f);return(element.returnValue=f());};function run_with(element,deps,f){f=bind(element,f);Bootloader.loadComponents(deps,function(){element.returnValue=f();});return false;}
function wait_for_load(element,e,f){f=bind(element,f,e);if(window.loaded){return(element.returnValue=f());}
switch((e||event).type){case'load':case'focus':onloadRegister(f);return;case'click':var es=element.style,ds=document.body.style;es.cursor=ds.cursor='progress';onafterloadRegister(function(){es.cursor=ds.cursor='';if(element.tagName.toLowerCase()=='a'){if(false!==f()&&element.href){window.location.href=element.href;}}else if(element.click){element.click();}});break;}
return false;};function bind(obj,method){var args=[];for(var ii=2;ii<arguments.length;ii++){args.push(arguments[ii]);}
var fn=function(){var _obj=obj||(this==window?false:this);var _args=args.slice();for(var jj=0;jj<arguments.length;jj++){_args.push(arguments[jj]);}
if(typeof(method)=="string"){if(_obj[method]){return _obj[method].apply(_obj,_args);}}else{return method.apply(_obj,_args);}};if(typeof method=='string'){fn.name=method;}else if(method&&method.name){fn.name=method.name;}
fn.toString=function(){return bind._toString(obj,args,method);};return fn;};var curry=bind(null,bind,null);bind._toString=bind._toString||function(obj,args,method){return(typeof method=='string')?('late bind<'+method+'>'):('bound<'+method.toString()+'>');};function goURI(uri,force_reload){uri=uri.toString();if(!force_reload&&window.PageTransitions&&PageTransitions.isInitialized()){PageTransitions.go(uri);}else if(window.location.href==uri){window.location.reload();}else{window.location.href=uri;}}
function loadExternalJavascript(urls,callback,body){if(urls instanceof Array){var url=urls.shift(0);if(url){loadExternalJavascript(url,function(){if(urls.length){loadExternalJavascript(urls,callback,body);}else{callback&&callback();}},body);}else if(callback){callback();}}else{var node=body?document.body:document.getElementsByTagName('head')[0];var script=document.createElement('script');script.type='text/javascript';script.src=urls;if(callback){script.onerror=script.onload=callback;script.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded"){callback();}};}
node.appendChild(script);return script;}}
window.loadFirebugConsole&&loadFirebugConsole();var rsrcProvideAndRequire=function(){var loaded={},pending={};function isBlocked(local,foreign,exclude){if(local in pending){exclude=exclude||{};for(var ii in pending[local].requires){if(!(ii in exclude)){for(var jj in pending[local].provides){exclude[jj]=1;}
if((ii in foreign)||isBlocked(ii,foreign,exclude)){return true;}}}}
return false;}
function checkSatisfied(){do{var hit=false;for(var ii in pending){var res=pending[ii];for(var jj in res.requires){if(!loaded[jj]&&!isBlocked(jj,res.provides)){res=null;break;}}
if(res){for(jj in res.provides){delete pending[jj];loaded[jj]=1;}
res.fn.call();hit=true;}}}while(hit);}
return function(provides,requires,fn){if(window.disableRPAR){fn();return;}
var desc={provides:provides,requires:requires,fn:fn};for(var ii in provides){pending[ii]=desc;}
checkSatisfied();};}();

function hasArrayNature(obj){if(!obj){return false;}
if(typeof obj!='object'){return false;}
if(obj instanceof Array){return true;}
if(!('length'in obj)){return false;}
if('callee'in obj){return true;}
if('push'in obj&&'pop'in obj){return true;}
return false;}
function copy_properties(u,v){if(!u||!v){throw new TypeError("Can not copy between types "+typeof(u)+" and "+typeof(v)+".");}
for(var k in v){u[k]=v[k];}
if(v.hasOwnProperty&&v.hasOwnProperty('toString')&&(typeof v.toString!='undefined')&&(u.toString!==v.toString)){u.toString=v.toString;}
return u;}
function arrayize(obj){if(!hasArrayNature(obj)){return[obj];}
return obj;}
function is_empty(obj){if(obj instanceof Array){return obj.length==0;}else if(obj instanceof Object){for(var i in obj){return false;}
return true;}else{return!obj;}}

function Arbiter(){copy_properties(this,{_listeners:[],_events:{}});copy_properties(this,Arbiter);}
copy_properties(Arbiter,{SUBSCRIBE_NEW:'new',SUBSCRIBE_ALL:'all',BEHAVIOR_EVENT:'event',BEHAVIOR_PERSISTENT:'persistent',BEHAVIOR_STATE:'state',LIVEMESSAGE:'livemessage',BOOTLOAD:'bootload',FUNCTION_EXTENSION:'function_ext',PAGECACHE_EXEC:'pagecache_exec',PAGE_TRANSITION:'pagetransitions/transition',CONTEXT_CHANGE:'ui/context-change',PROFILE_PUBLISHER:'profile/publisher',REPLAYABLE_AJAX:'ajax/replayable',PAGECACHE_INVALIDATE:'pagecache/invalidate',NEW_NOTIFICATIONS:'chat/new_notifications',BEEPS_EXPIRED:'beeper/beeps_expired',USER_ACTIVITY:'useractivity/activity',LIST_EDITOR_LISTS_CHANGED:'listeditor/friend_lists_changed',BALANCE_SET:'credits/balance_set',ONLOAD_DOMCONTENT:'onload/dom_content_ready',subscribe:function(types,callback,subscription_policy){if(!types){return null;}
var a=Arbiter._getInstance(this);a._listeners.push({callback:callback,types:types});subscription_policy=subscription_policy||Arbiter.SUBSCRIBE_ALL;if(subscription_policy==Arbiter.SUBSCRIBE_ALL){if(!(types instanceof Array)){types=[types];}
var data;var type;var ret;for(var idx=0;idx<types.length;idx++){type=types[idx];if(typeof type!="string"){throw new TypeError("Event types must be strings.");}
if(type in a._events){for(var ii=0;ii<a._events[type].length;ii++){data=a._events[type][ii];ret=callback.apply(null,[type,data]);if(ret===false){a._events[type].splice(ii,1);ii--;}}}}}else if(subscription_policy!=Arbiter.SUBSCRIBE_NEW){throw new TypeError("Bad subscription policy.");}
return{arbiterID:a._listeners.length-1};},unsubscribe:function(token){if(!('arbiterID'in token)){throw new TypeError("Not an arbiter token.");}
delete Arbiter._getInstance(this)._listeners[token.arbiterID];},inform:function(type,e,behavior){var a=Arbiter._getInstance(this);var idx=null;behavior=behavior||Arbiter.BEHAVIOR_EVENT;if(behavior==Arbiter.BEHAVIOR_PERSISTENT){idx=a._events.length;if(!(type in a._events)){a._events[type]=[];}
a._events[type].push(e);a._events[type]._stateful=false;}else if(behavior==Arbiter.BEHAVIOR_STATE){idx=0;a._events[type]=[e];a._events[type]._stateful=true;}else if(type in a._events){a._events[type]._stateful=false;}
var res;for(var ii=0;ii<a._listeners.length;ii++){if(a._listeners[ii]){if(Arbiter._checkType(type,a._listeners[ii].types)){res=a._listeners[ii].callback.apply(null,[type,e]);if(res===false){if(idx!==null){a._events[type].splice(idx,1);}
break;}}}}
a._updateCallbacks(type,e);},query:function(type){var a=Arbiter._getInstance(this);if(!(type in a._events)){return null;}
if(!a._events[type]._stateful){throw new Error("Querying state of an unstateful event.");}
if(a._events[type].length){return a._events[type][0];}
return null;},_instance:null,_getInstance:function(self){if(self instanceof Arbiter){return self;}
if(!Arbiter._instance){Arbiter._instance=new Arbiter();}
return Arbiter._instance;},_checkType:function(event_type,callback_type){if(event_type===callback_type){return true;}
if(callback_type.length){for(var ii=0;ii<callback_type.length;ii++){if(callback_type[ii]===event_type){return true;}}}
return false;},_callbacks:{},_last_id:1,_listen:{},registerCallback:function(callback,deps){var my_id,depnum=0,a=Arbiter._getInstance(this);if(typeof callback=='function'){my_id=a._last_id;a._last_id++;}else{if(!a._callbacks[callback]){return null;}
my_id=callback;}
if(deps instanceof Array){var tmp={};for(var i=0;i<deps.length;i++){tmp[deps[i]]=1;}
deps=tmp;}
for(var type in deps){try{if(a.query(type)){continue;}}catch(ex){}
depnum+=deps[type];if(a._listen[type]===undefined){a._listen[type]={};}
a._listen[type][my_id]=(a._listen[type][my_id]||0)+deps[type];}
if(depnum==0&&my_id!=callback){callback();return null;}
if(my_id==callback){a._callbacks[my_id].depnum+=depnum;}else{a._callbacks[my_id]={callback:callback,depnum:depnum};}
return my_id;},_updateCallbacks:function(type,data){if(data===null||!this._listen[type]){return;}
for(var cid in this._listen[type]){this._listen[type][cid]--;if(this._listen[type][cid]<=0){delete this._listen[type][cid];}
this._callbacks[cid].depnum--;if(this._callbacks[cid].depnum<=0){var callback=this._callbacks[cid].callback;delete this._callbacks[cid];callback();}}}});

var Bootloader=window.Bootloader=(window.Bootloader&&window.Bootloader.realBootloader)?window.Bootloader:(function(oldBootloader){return{realBootloader:true,configurePage:function(reverse_map){var links=document.getElementsByTagName('link');this._cssLinks=[];for(var ii=0;ii<links.length;++ii){if(links[ii].rel!='stylesheet'){continue;}
for(var k in reverse_map){if(links[ii].href.indexOf(k)!==-1){var name=reverse_map[k][0],permanent=reverse_map[k][1];this._cssLinkMap[name]=this._cssLinks.length;if(permanent){this._permanent[name]=true;}
delete reverse_map[k];break;}}
this._cssLinks.push(links[ii]);}},loadComponents:function(components,callback){components=arrayize(components);var required_resources=[];for(var ii=0;ii<components.length;++ii){if(!components[ii]){continue;}
var component_resource_list=this._componentMap[components[ii]];if(!!component_resource_list){for(var jj=0;jj<component_resource_list.length;++jj){required_resources.push(component_resource_list[jj]);}}else{}}
return this.loadResources(required_resources,callback);},preloadComponents:function(){var comps=[];for(var i in this._componentMap){comps.push(i);}
this.loadComponents(comps);},loadResources:function(resources,callback,replace){resources=arrayize(resources);if(replace){var map={};for(var ii=0;ii<resources.length;++ii){map[resources[ii].name]=true;}
for(var k in this._requested){if(!(k in this._permanent)&&!(k in map)){this._unloadResource(k);}}}
var will_request=[];var pending=[];for(var ii=0;ii<resources.length;++ii){var rsrc=resources[ii];if(rsrc.permanent){this._permanent[rsrc.name]=true;}
var s=Arbiter.BOOTLOAD+'/'+rsrc.name;if(Arbiter.query(s)!==null){continue;}
pending.push(s);if(!this._requested[rsrc.name]){this.requested(rsrc.name);will_request.push(rsrc);}}
if(callback){callback=Arbiter.registerCallback(callback,pending);}
for(var ii=0;ii<will_request.length;++ii){this.requestResource(will_request[ii].type,will_request[ii].src,will_request[ii].name);}
return callback;},requestResource:function(type,source,name){var h=this._getHardpoint();switch(type){case'js':var script=document.createElement('script');script.src=source;script.type='text/javascript';h.appendChild(script);break;case'css':var link=null;for(var jj=0;jj<this._cssLinks.length;++jj){if(this._cssLinks[jj]._unused){link=this._cssLinks[jj];if(name){this._cssLinkMap[name]=jj;}
break;}}
if(!link){var link=document.createElement('link');link.rel="stylesheet";link.type="text/css";link.media="all";link.href=source;this._cssLinks.push(link);h.appendChild(link);}else{link.href=source;}
link._unused=false;var id=Bootloader._getDivIdForCSSComponent(name);var div=document.getElementById(id);if(!div){div=document.createElement('div');div.id=id;document.body.appendChild(div);setTimeout(bind(Bootloader,Bootloader._pollCSS,name,Bootloader._CSS_POLL_EXPIRATION),Bootloader._CSS_POLL_INTERVAL,false);}
break;default:throw new TypeError("Bad resource type `"+type+"'.");}},_getDivIdForCSSComponent:function(name){return'bootloader_'+name.replace(/[^a-z0-9]/ig,'_');},_pollCSS:function(name,remaining){var id=Bootloader._getDivIdForCSSComponent(name);var div=document.getElementById(id);if(!div){return;}
var expected='42';var computedStyle;var done=div.offsetHeight==expected||div.currentStyle&&div.currentStyle['height']==expected+'px'||window.getComputedStyle&&(computedStyle=document.defaultView.getComputedStyle(div,null))&&computedStyle.getPropertyValue('height')==expected+'px';if(done||remaining<=0){Bootloader.done([name]);div.parentNode.removeChild(div);if(!done&&window.Util){Util.error('Bootloading css file/package %s times out.',name);}}else{setTimeout(bind(Bootloader,Bootloader._pollCSS,name,remaining-Bootloader._CSS_POLL_INTERVAL),Bootloader._CSS_POLL_INTERVAL,false);}},done:function(names){var preloaded=(oldBootloader&&oldBootloader._preloaded)||[];(oldBootloader||{})._preloaded=[];for(var ii=0;ii<preloaded.length;++ii){names.push(preloaded[ii]);}
this.requested(names);var message={sender:this};Arbiter.inform(Arbiter.BOOTLOAD,message,Arbiter.BEHAVIOR_EVENT);for(var ii=0;ii<names.length;++ii){var loaded_resource=names[ii];Arbiter.inform(Arbiter.BOOTLOAD+'/'+loaded_resource,true,Arbiter.BEHAVIOR_STATE);}},requested:function(resources){resources=arrayize(resources);for(var ii=0;ii<resources.length;++ii){this._requested[resources[ii]]=true;}},enableBootload:function(map){for(var resource in map){if(!this._componentMap[resource]){this._componentMap[resource]=map[resource];}
if(oldBootloader){var callbacks=oldBootloader._callbacks[resource]||[];for(var i=0;i<callbacks.length;i++){Bootloader.loadComponents(resource,callbacks[i]);}
delete oldBootloader._callbacks[resource];}}
onafterloadRegister(function(){Bootloader.preloadComponents();});},_unloadResource:function(name){if(this._cssLinks&&(name in this._cssLinkMap)){var link_id=this._cssLinkMap[name];var link=this._cssLinks[link_id];link.href=Bootloader._UNUSED_CSS_URL;link._unused=true;delete this._cssLinkMap[name];delete this._requested[name];Arbiter.inform(Arbiter.BOOTLOAD+'/'+name,null,Arbiter.BEHAVIOR_STATE);}},_getHardpoint:function(){if(!this._hardpoint){var n,heads=document.getElementsByTagName('head');if(heads.length){n=heads[0];}else{n=document.body;}
this._hardpoint=n;}
return this._hardpoint;},_requested:{},_permanent:{},_componentMap:{},_cssLinkMap:{},_cssLinks:[],_hardpoint:null,_CSS_POLL_EXPIRATION:5000,_CSS_POLL_INTERVAL:20,_UNUSED_CSS_URL:'javascript:void(0)'};})(window.Bootloader);

Function.prototype.extend=function(superclass){if(typeof superclass!='string'){throw new TypeError('You must extend() with the name of a class, not the function object. '+'This generally means you need to replace "Dog.extend(Animal);" with '+'"Dog.extend(\'Animal\');".');}
if(!Metaprototype._arbiterHandle){Metaprototype._arbiterHandle=Arbiter.subscribe(Arbiter.BOOTLOAD,Metaprototype._onbootload.bind(Metaprototype));}
Metaprototype._queue(this,superclass);}
function Metaprototype(){}
copy_properties(Metaprototype,{_pending:{},_queue:function(subclass,superclass){subclass.__class_extending=true;var handler=Arbiter.registerCallback(bind(Metaprototype,Metaprototype._apply,subclass,superclass),[Arbiter.FUNCTION_EXTENSION+'/'+superclass,Arbiter.BOOTLOAD]);if(handler!==null){this._pending[superclass]=true;}},_onbootload:function(type,data){this._update();},_update:function(){for(var node in this._pending){if(!!window[node]){delete this._pending[node];if(!window[node].__class_extending){Arbiter.inform(Arbiter.FUNCTION_EXTENSION+'/'+node,true,Arbiter.BEHAVIOR_STATE);}else{window[node].__class_name=node;}}}},_apply:function(subclass,superclass_name){delete subclass.__class_extending;var superprototype=__metaprototype(window[superclass_name],0);var subprototype=__metaprototype(subclass,superprototype.prototype.__level+1);subprototype.parent=superprototype;if(!!subclass.__class_name){Arbiter.inform(Arbiter.FUNCTION_EXTENSION+'/'+subclass.__class_name,true,Arbiter.BEHAVIOR_STATE);}}});function __metaprototype(obj,level){if(obj.__metaprototype){return obj.__metaprototype;}
var metaprototype=new Function();metaprototype.construct=__metaprototype_construct;metaprototype.prototype.construct=__metaprototype_wrap(obj,level,true);metaprototype.prototype.__level=level;metaprototype.base=obj;obj.prototype.parent=metaprototype;obj.__metaprototype=metaprototype;return metaprototype;}
function __metaprototype_construct(instance){__metaprototype_init(instance.parent);var parents=[];var obj=instance;while(obj.parent){parents.push(new_obj=new obj.parent());new_obj.__instance=instance;obj=obj.parent;}
instance.parent=parents[1];parents.reverse();parents.pop();instance.__parents=parents;instance.__instance=instance;return instance.parent.construct.apply(instance.parent,arguments);}
function __metaprototype_init(metaprototype){if(metaprototype.initialized)return;var base=metaprototype.base.prototype;if(metaprototype.parent){__metaprototype_init(metaprototype.parent);var parent_prototype=metaprototype.parent.prototype;for(i in parent_prototype){if(i!='__level'&&i!='construct'&&base[i]===undefined){base[i]=metaprototype.prototype[i]=parent_prototype[i]}}}
metaprototype.initialized=true;var level=metaprototype.prototype.__level;for(i in base){if(i!='parent'){base[i]=metaprototype.prototype[i]=__metaprototype_wrap(base[i],level);}}}
function __metaprototype_wrap(method,level,shift){if(typeof method!='function'||method.__prototyped){return method;}
var func=function(){var instance=this.__instance;if(instance){var old_parent=instance.parent;instance.parent=level?instance.__parents[level-1]:null;if(shift){var args=[];for(var i=1;i<arguments.length;i++){args.push(arguments[i]);}
var ret=method.apply(instance,args);}else{var ret=method.apply(instance,arguments);}
instance.parent=old_parent;return ret;}else{return method.apply(this,arguments);}}
func.__prototyped=true;return func;}
Function.prototype.mixin=function(){var argc=arguments.length;var argv=[this.prototype];for(var ii=0;ii<argc;ii++){argv.push(arguments[ii]);}
Function.mixin.apply(null,argv);}
Function.mixin=function(){var object=arguments[0];var argc=arguments.length;var mixin;for(var ii=1;ii<argc;ii++){mixin=arguments[ii];if((typeof mixin=='string'&&typeof Mixins[mixin]!='object')&&typeof mixin!='object'&&typeof mixin!='function'){throw new TypeError('mixin was called with an invalid argument. mixin '+'may be called with a variable number of '+'arguments, but each must either be an object or '+'the name of a mixin in "Mixins"');}
mixin=Mixins[mixin]||mixin;copy_properties(object,mixin);}}
Function.prototype.bind=function(context){var argv=[arguments[0],this];var argc=arguments.length;for(var ii=1;ii<argc;ii++){argv.push(arguments[ii]);}
return bind.apply(null,argv);}
Function.prototype.curry=Function.prototype.bind.bind(null,null);Function.prototype.shield=function(context){if(typeof this!='function'){throw new TypeException();}
var bound=this.bind.apply(this,to_array(arguments));return function(){return bound();}};Function.prototype.defer=function(msec,clear_on_quickling_event){if(typeof this!='function'){throw new TypeError();}
msec=msec||0;return setTimeout(this,msec,clear_on_quickling_event);};Function.prototype.deferUntil=function(callback,timeout,clear_on_quickling_event){if(typeof this!='function'){throw new TypeError();}
if(timeout&&typeof timeout!='number'){throw new TypeError();}
if(callback()){this();return;}
var orig=this,interval=null,start_time=(new Date()).getTime();var fn=function(){if(callback()||timeout&&((new Date()).getTime()-start_time)>=timeout){orig();interval&&clearInterval(interval);}};interval=setInterval(fn,50,clear_on_quickling_event);return interval;};Function.prototype.recur=function(msec,clear_on_quickling_event){if(typeof this!='function'){throw new TypeError();}
return setInterval(this,msec,clear_on_quickling_event);};Function.prototype.occur=function(){if(typeof this!='function'){throw new TypeError();}
return this.apply(this,arguments);};Function.prototype.memoize=function(){if(typeof this!='function'){throw new TypeError();}
var cache={};var functor=this;return function(){var key=JSON.encode(arguments);if(!(key in cache)){cache[key]=functor.apply(this,arguments);}
return cache[key];};};Function.prototype.toString=(function(native_fn){return function(full){var raw_output=native_fn.call(this);if(full){return raw_output;}
var lines=raw_output.split('\n'),max_lines=5;if(lines.length>max_lines){lines.splice(3,lines.length-max_lines,'    ...');}
return lines.join('\n');};})(Function.prototype.toString);function bagofholding(){return undefined;}
function abstractMethod(){throw new Error('You must implement this function in your base class.');}
function identity(input){return input;}
function truth(){return true;}
function fireonce(fn){var fired=false;return function(){if(!fired){fired=true;return fn();}}}
function call_or_eval(obj,func,args_map){if(!func){return undefined;}
args_map=args_map||{};if(typeof(func)=='string'){var params=keys(args_map).join(', ');func=eval('({f: function('+params+') { '+func+'}})').f;}
if(typeof(func)!='function'){Util.error('handler was neither a function nor a string of JS code');return undefined;}
return func.apply(obj,values(args_map));}

var Mixins={Arbiter:{_getArbiterInstance:function(){if(!this._arbiter){this._arbiter=new Arbiter();}
return this._arbiter;},subscribe:function(types,callback,subscription_policy){return this._getArbiterInstance().subscribe(types,callback,subscription_policy);},inform:function(type,data,behavior){this._getArbiterInstance().inform(type,data,behavior);},unsubscribe:function(token){this._getArbiterInstance().unsubscribe(token);}}};

InitialJSLoader={INITIAL_JS_READY:'BOOTLOAD/JSREADY',load:function(resources){InitialJSLoader.callback=Bootloader.loadResources(resources,InitialJSLoader.callback);},callback:Arbiter.registerCallback(function(){Arbiter.inform(InitialJSLoader.INITIAL_JS_READY,true,Arbiter.BEHAVIOR_STATE);},[Arbiter.ONLOAD_DOMCONTENT])};

var ua={ie:function(){return ua._populate()||this._ie;},firefox:function(){return ua._populate()||this._firefox;},opera:function(){return ua._populate()||this._opera;},safari:function(){return ua._populate()||this._safari;},safariPreWebkit:function(){return ua._populate()||this._safari<500;},windows:function(){return ua._populate()||this._windows;},osx:function(){return ua._populate()||this._osx;},linux:function(){return ua._populate()||this._linux;},_populated:false,_populate:function(){if(ua._populated){return;}
ua._populated=true;var agent=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera.(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))/.exec(navigator.userAgent);var os=/(Mac OS X)|(Windows;)|(Linux)/.exec(navigator.userAgent);if(agent){ua._ie=agent[1]?parseFloat(agent[1]):NaN;if(ua._ie>=8&&!window.HTMLCollection){ua._ie=7;}
ua._firefox=agent[2]?parseFloat(agent[2]):NaN;ua._opera=agent[3]?parseFloat(agent[3]):NaN;ua._safari=agent[4]?parseFloat(agent[4]):NaN;}else{ua._ie=ua._firefox=ua._opera=ua._safari=NaN;}
if(os){ua._osx=!!os[1];ua._windows=!!os[2];ua._linux=!!os[3];}else{ua._osx=ua._windows=ua._linux=false;}}};

function env_get(k){return typeof(window['Env'])!='undefined'&&Env[k];}
function muffinize(str){var muffin_top='a';var muffin_bottom='d';var muffin=[muffin_top,muffin_bottom].join('');return str.replace(/muffin/g,muffin);}
var Util=window.Util||{isDevelopmentEnvironment:function(){return env_get('dev');},warn:bagofholding,error:bagofholding,info:bagofholding,group:bagofholding,groupEnd:bagofholding,log:bagofholding,stack:bagofholding,trace:bagofholding};

function chain(u,v){var fn,calls=[];for(var ii=0;ii<arguments.length;ii++){calls.push(arguments[ii]);}
fn=function(event){event=event||window.event;for(var ii=0;ii<calls.length;ii++){if(calls[ii]&&calls[ii].apply(this,arguments)===false){return false;}else if(event&&event.cancelBubble){return true;}}
return true;};fn.toString=function(){return chain._toString(calls);};return fn;}
if(!chain._toString){chain._toString=function(calls){var ret='chained fns',call=calls.filter();for(var i=0;i<calls.length;i++){ret+='\n'+calls[i].toString();}
return ret;};}

window.onloadRegister=function(handler){window.loaded?_runHook(handler):_addHook('onloadhooks',handler);};function onafterloadRegister(handler){window.afterloaded?setTimeout(function(){_runHook(handler);},0):_addHook('onafterloadhooks',handler);}
function onpagecacheRegister(handler,id){id=(id===undefined?'':String(id));window.Quickling&&Quickling.registerPageCacheHook(handler,id);}
function _include_quickling_events_default(){return!window.loading_page_chrome;}
function onbeforeunloadRegister(handler,include_quickling_events){if(include_quickling_events===undefined){include_quickling_events=_include_quickling_events_default();}
if(include_quickling_events){_addHook('onbeforeleavehooks',handler);}else{_addHook('onbeforeunloadhooks',handler);}}
function onunloadRegister(handler,include_quickling_events){if(include_quickling_events===undefined){include_quickling_events=_include_quickling_events_default();}
if(include_quickling_events){_addHook('onleavehooks',handler);}else{_addHook('onunloadhooks',handler);}}
function _onloadHook(){_runHooks('onloadhooks');!window.loaded&&window.CavalryLogger&&CavalryLogger.getInstance().setTimeStamp('t_hooks');window.loaded=true;if(window.logOnloadData){aggregate_js_onload('onloadRegister');}}
function _onafterloadHook(){_runHooks('onafterloadhooks');window.afterloaded=true;if(window.logOnloadData){aggregate_js_onload('onafterloadRegister');}}
function _runHook(handler){try{handler();}catch(ex){Util.error('Uncaught exception in hook (run after page load): %x',ex);}}
function _runHooks(hooks){var isbeforeunload=hooks=='onbeforeleavehooks'||hooks=='onbeforeunloadhooks';var warn=null;if(window.logOnloadData){var startTime=new Date().getTime();window.totalHookTime=window.totalHookTime||{};}
do{var h=window[hooks];if(!isbeforeunload){window[hooks]=null;}
if(!h){break;}
for(var ii=0;ii<h.length;ii++){try{if(isbeforeunload){warn=warn||h[ii]();}else{h[ii]();}}catch(ex){Util.error('Uncaught exception in hook (%q) %q: %x',hooks,h[ii],ex);}}
if(isbeforeunload){break;}}while(window[hooks]);if(window.logOnloadData){var endTime=new Date().getTime();window.totalHookTime[hooks]=endTime-startTime;}
if(isbeforeunload&&warn){return warn;}}
function _addHook(hooks,handler){(window[hooks]?window[hooks]:(window[hooks]=[])).push(handler);}
function removeHook(hooks){window[hooks]=[];}
function _domcontentready(){window.CavalryLogger&&CavalryLogger.getInstance().setTimeStamp('t_domcontent');Arbiter.inform(Arbiter.ONLOAD_DOMCONTENT,true,Arbiter.BEHAVIOR_STATE);}
function _bootstrapEventHandlers(){if(document.addEventListener){if(ua.safari()){var timeout=setInterval(function(){if(/loaded|complete/.test(document.readyState)){_domcontentready();clearTimeout(timeout);}},3);}else{document.addEventListener("DOMContentLoaded",function(){_domcontentready();},true);}}else{var src='javascript:void(0)';if(window.location.protocol=='https:'){src='//:';}
document.write('<script onreadystatechange="if (this.readyState==\'complete\') {'+'this.parentNode.removeChild(this);_domcontentready();}" defer="defer" '+'src="'+src+'"><\/script\>');}
window.onload=chain(window.onload,function(){window.CavalryLogger&&CavalryLogger.getInstance().setTimeStamp('t_layout');var force_layout=document&&document.body&&document.body.offsetWidth;window.CavalryLogger&&CavalryLogger.getInstance().setTimeStamp('t_onload');Arbiter.registerCallback(_onafterloadHook,[Arbiter.ONLOAD_DOMCONTENT,InitialJSLoader.INITIAL_JS_READY]);});window.onbeforeunload=function(){var warn=_runHooks('onbeforeleavehooks')||_runHooks('onbeforeunloadhooks');if(!warn){window.loaded=false;window.afterloaded=false;}
return warn;};window.onunload=chain(window.onunload,function(){_runHooks('onleavehooks');_runHooks('onunloadhooks');});}
function keep_window_set_as_loaded(){if(window.loaded==false){window.loaded=true;_runHooks('onloadhooks');}
if(window.afterloaded==false){window.afterloaded=true;_runHooks('onafterloadhooks');}}
function log_js_onload(onloadHook,total_time,task_name){window.logOnloadData=window.logOnloadData||{};window.logOnloadData[onloadHook]=window.logOnloadData[onloadHook]||{};var logOnloadData=window.logOnloadData[onloadHook];if(logOnloadData[task_name]){logOnloadData[task_name].count++;logOnloadData[task_name].total_time+=total_time;}else{logOnloadData[task_name]={};logOnloadData[task_name]={count:1,total_time:total_time};}}
function aggregate_js_onload(onloadHook){var logOnloadData=window.logOnloadData[onloadHook];var array=[];var total_time=0;for(var task_name in logOnloadData){total_time+=logOnloadData[task_name].total_time;array.push(sprintf("%' 4.4d",logOnloadData[task_name].total_time)+'ms : '+
sprintf("%' 2.2d",logOnloadData[task_name].count)+' calls : '+
task_name.replace('Task_','(Task) '));}
if(!array.length){return;}
array.sort().reverse();var key;if(onloadHook=='onloadRegister'){key='onloadhooks';}else{key='onafterloadhooks';}
Util.group(onloadHook+' took a total of '+total_time+' ms with '+
window.totalHookTime[key]+' ms spent in _runHooks');array.each(function(item){Util.info(item);});Util.groupEnd(onloadHook);window.logOnloadData[onloadHook]={};}
if(!window._eventHandlersBootstrapped){_eventHandlersBootstrapped=true;_bootstrapEventHandlers();Arbiter.registerCallback(_onloadHook,[Arbiter.ONLOAD_DOMCONTENT,InitialJSLoader.INITIAL_JS_READY]);}

function _fbt(text){return fbt(arguments);}
function fbt(text){if(arguments.length==1){return text;}
var name_map=new Object();var match;var arg_index=1;var fbt_reg=/(?:[^\{]|^)(\{\w\})(?!\})/g;while((match=fbt_reg.exec(text))!=null){var token=match[1].slice(1,-1);while(!(token in name_map)){if(arg_index<arguments.length){var arg=arguments[arg_index++];var t_arg=typeof arg;if(arg==null){Util.error('fbt: null value for arg for text: %s',text);}else if(arg instanceof Array||t_arg=="array"){Util.error(sprintf('fbt: cannot use Array type as arg in js fbt. '+'Use Object instead. text: %s',text));}else if(t_arg=='number'||t_arg=='string'){name_map[token]=arg;}else if(t_arg=='object'){copy_properties(name_map,arg);}else{Util.error(sprintf('fbt: cannot use %s type as arg in fbt: %s',t_arg,text));}}else{Util.error('fbt: Too few arguments for text: %s',text);break;}}}
if(arg_index<arguments.length&&typeof arguments[arg_index++]=="string"&&arg_index<arguments.length){Util.error('fbt: Too many arguments.');}
return fbt_replace_braces(text,name_map);}
function fbts(project,text){return fbt.apply(this,to_array(arguments).slice(1));}
function fbt_replace_braces(text,args){if(args){if(typeof args!='object'){Util.error('intl.js: the 2nd argument must be a keyed array (not a string) for tx('+text+', ...)');}else{for(var key in args){var reg=new RegExp("([^\\{]|^)\\{"+key+"\\}(?!\\})",'g');text=text.replace(reg,'$1'+args[key]);}}}
return text.replace(/\{\{/g,'{').replace(/\}\}/g,'}');}
function tx(str,args){if(typeof _string_table=='undefined'){return;}
str=_string_table[str];return _tx(str,args);}
function intl_ends_in_punct(str){if(typeof str!='string'){return false;}
return str.match(new RegExp(intl_ends_in_punct.punct_char_class+'['+')"'+"'"+'\u00BB'+'\u0F3B'+'\u0F3D'+'\u2019'+'\u201D'+'\u203A'+'\u3009'+'\u300B'+'\u300D'+'\u300F'+'\u3011'+'\u3015'+'\u3017'+'\u3019'+'\u301B'+'\u301E'+'\u301F'+'\uFD3F'+'\uFF07'+'\uFF09'+'\uFF3D'+'\s'+']*$'));}
intl_ends_in_punct.punct_char_class='['+'.!?'+'\u3002'+'\uFF01'+'\uFF1F'+'\u0964'+'\u2026'+'\u0EAF'+'\u1801'+'\u0E2F'+'\uFF0E'+']';function intl_phonological_rules(str){var rules=window.intl_locale_rewrites;var regexp;var old_str=str;try{if(rules){var pats=[];var reps=[];for(var p in rules['patterns']){var pat=p;var rep=rules['patterns'][p];for(var m in rules['meta']){regexp=new RegExp(m.slice(1,-1),'g');pat=pat.replace(regexp,rules['meta'][m]);rep=rep.replace(regexp,rules['meta'][m]);}
pats[pats.length]=pat;reps[reps.length]=rep;}
for(var ii=0;ii<pats.length;ii++){regexp=new RegExp(pats[ii].slice(1,-1),'g');if(reps[ii]=='javascript'){if(m=new String(str.match(regexp))){str=str.replace(regexp,m.slice(1).toLowerCase());}}else{str=str.replace(regexp,reps[ii]);}}}}catch(e){Util.log(e);str=old_str;}
regexp=new RegExp('\x01','g');str=str.replace(regexp,'');return str;}
function _tx(str,args){if(args){if(typeof args!='object'){Util.error('intl.js: the 2nd argument must be a keyed array (not a string) for tx('+str+', ...)');}else{var regexp;for(var key in args){if(intl_ends_in_punct(args[key])){regexp=new RegExp('\{'+key+'\}'+
intl_ends_in_punct.punct_char_class+'*','g');}else{regexp=new RegExp('\{'+key+'\}','g');}
var delim='';if(args[key][0]!='~'){delim='\x01';}
str=str.replace(regexp,delim+args[key]+delim);}
str=intl_phonological_rules(str);}}
return str;}

var CSSLite=(function(){var clean=function(string){return string.replace(/\s+/g,' ').trim();};return{hasClass:function(element,className){return(' '+element.className+' ').indexOf(' '+className+' ')>-1;},addClass:function(element,className){if(className&&!CSSLite.hasClass(element,className)){element.className=clean(element.className+' '+className);}
return element;},removeClass:function(element,className){if(className&&CSSLite.hasClass(element,className)){element.className=clean(element.className.replace(new RegExp('(^|\\s)'+className+'(?:\\s|$)'),'$1'));}
return element;}};})();

var KEYS={BACKSPACE:8,TAB:9,RETURN:13,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46};

var NodeAugment=(function(){var augments={},support=!!window.HTMLElement,proto=support?HTMLElement.prototype:{},merge=function(u,v){for(var i in v){u[i]=v[i];}},methodize=function(fn){return function(){return fn.apply(null,[this].concat([].slice.call(arguments)));};};return{add:function(methods,tag){var obj=proto;if(tag){tag=tag.toUpperCase();obj=augments[tag]||(augments[tag]={});}
for(var i in methods){if(typeof methods[i]=='function'){obj[i]=methodize(methods[i]);}}},extend:function(element){if(!element||element==window||element.nodeType!=1||element.nodeName in{OBJECT:1,EMBED:1,APPLET:1}){return element;}!support&&merge(element,proto);merge(element,augments[element.nodeName]||{});return element;}};})();

function fc_expand(elem){var item=elem.form;if(CSSLite.hasClass(item,'hidden_add_button')){CSSLite.removeClass(item,'collapsed_comments');CSSLite.removeClass(item,'hidden_add_button');item.add_comment_text.focus();}
return false;}

if (window.Bootloader) { Bootloader.done(["js\/9c2ta3vx27gogc84.pkg.js"]); }
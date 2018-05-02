/*    HTTP Host:  b.static.ak.fbcdn.net                                        */
/*    Generated:  September 11th 2009 4:00:39 PM PDT                           */
/*      Machine:  10.16.139.108                                                */
/*       Source:  Local Cache                                                  */
/*     Location:  rsrc:4:dom3d6nb                                              */
/*       Locale:  nu_ll                                                        */
/*         Path:  js/3zhq7w06afqc0cwo.pkg.js                                   */


function PlatformCanvasController(app_id,session_key,session_timeout,app_name,callback,api_key){this.sessionKey=session_key;this.appName=app_name;this.appId=app_id;this.callback=callback;this.api_key=api_key;this.isFirstPage=false;this.isIFrame=false;this._movingPage=false;this.sessionRefresh=(session_timeout*900);if(this.appId&&this.sessionKey&&this.sessionRefresh){setTimeout(this.refreshAppSession.bind(this),this.sessionRefresh);}
PlatformCanvasController.singleton=this;Arbiter.inform('PLATFORM_CANVAS_CONTROLLER_INIT',null,Arbiter.BEHAVIOR_PERSISTENT);}
PlatformCanvasController.AUTO_REFRESH=30000;PlatformCanvasController.prototype.setUpIFrame=function($is_static){PageTransitions.registerHandler(this.handleChange.bind(this));this.isIFrame=true;this.isStatic=$is_static;}
PlatformCanvasController.prototype.autoRefreshAd=function(){if(this.isIFrame){this.isFirstPage=true;$('app'+this.appId+'_iframe_canvas').onload=this._clickRefresh.bind(this);}
this._ignoreNext=true;this._loopRefresh();}
PlatformCanvasController.prototype.requireLogin=function(){var loginResponse=FB.IFrameUtil.CanvasUtilServer.loginResponse;FBML.requireLogin(this.appId,loginResponse.bind(null,true),loginResponse.bind(null,false),null,true,true);}
PlatformCanvasController.prototype.closeLogin=function(){FBML.closeLoginDialog();}
PlatformCanvasController.prototype.showFeedDialog=function(template_bundle_id,template_data,body_general,target_id,user_msg_prompt,user_msg){FBML.showFeedDialog(this.appId,template_bundle_id,template_data,body_general,target_id,FB.IFrameUtil.CanvasUtilServer.loginResponse.bind(null),user_msg_prompt,user_msg);}
PlatformCanvasController.prototype._loopRefresh=function(){if(this._ignoreNext){this._ignoreNext=false;}else{this.refreshAd();}
this._loopRefresh.bind(this).defer(PlatformCanvasController.AUTO_REFRESH);}
PlatformCanvasController.prototype._clickRefresh=function(){this.refreshAd();this._ignoreNext=true;}
PlatformCanvasController.prototype.refreshAppSession=function(){new AsyncRequest().setURI('/ajax/session.php').setData({'app_id':this.appId,'session_key':this.sessionKey}).setReadOnly(true).setHandler(function(response){var payload=response.getPayload();if(payload['session_end']>0){setTimeout(this.refreshAppSession.bind(this),this.sessionRefresh);}}.bind(this)).send();}
PlatformCanvasController.prototype.refreshUrl=function(newUrl){var href=newUrl.href;if(href.startsWith(this.callback)){var newSuffix=new URI(href.substring(this.callback.length));this.changeUrlSuffix(newSuffix,true);}
return false;}
PlatformCanvasController.refreshUrl=function(newUrl){if(PlatformCanvasController.singleton){PlatformCanvasController.singleton.refreshUrl(newUrl);}}
PlatformCanvasController.prototype.changeUrlSuffix=function(suffix,is_refresh){this.currentUri=URI.getRequestURI().getUnqualifiedURI();var newPath=new URI(this.getAppPrefix()+suffix);this.stripFbParams(newPath);var dontAddBackEntry=is_refresh&&PlatformCanvasController.storesIFrameHistory(this.isStatic);if(this.currentUri.toString()!=newPath.toString()){this.currentUri=newPath;this.refreshAd();PageTransitions.go(newPath.toString(),dontAddBackEntry);}}
PlatformCanvasController.prototype.getAppPrefix=function(){return"/"+this.appName+"/";}
PlatformCanvasController.prototype.convertFromApps=function(uri){var prefix=this.getAppPrefix();var suffix=uri.getUnqualifiedURI().toString().substring(prefix.length);return new URI(this.callback+suffix);}
PlatformCanvasController.prototype.convertToApps=function(uri){var suffix=uri.toString().substring(this.callback.length);return new URI(this.getAppPrefix()+suffix);}
PlatformCanvasController.prototype.stripFbParams=function(uri){var queryData=uri.getQueryData();var newQueryData={};for(key in queryData){if((!key.startsWith("fb_")||key.startsWith("fb_force_mode"))&&!key.startsWith("_fb")&&!key.startsWith("quickling_apps")){newQueryData[key]=queryData[key];}}
uri.setQueryData(newQueryData);}
PlatformCanvasController.prototype.refreshAd=function(){if(this.isFirstPage){this.isFirstPage=false;}else{ads_refresh(this.appName,'/canvas.php');}}
PlatformCanvasController.prototype.handleChange=function(uri){if(!uri.getPath().startsWith("/"+this.appName)||this._movingPage){return false;}
var unqualUri=uri.getUnqualifiedURI();this.stripFbParams(unqualUri);if(this.currentUri.toString()!=unqualUri.toString()){FB.IFrameUtil.CanvasUtilServer.loadNewUrl(this.convertFromApps(uri).toString());this.currentUri=unqualUri;}
PageTransitions.transitionComplete();return true;}
PlatformCanvasController.prototype.goURI=function(uri){this._movingPage=true;var decorated_uri=new URI(uri);decorated_uri.addQueryData({_fb_q:true});PageTransitions.go(decorated_uri);}
PlatformCanvasController.storesIFrameHistory=function(is_static){if(ua.ie()){return true;}else if(ua.firefox()){if(is_static){return true;}else{return false;}}else if(ua.safari()){return false;}else{return false;}}
var smartIframes=[];function smartSizingFrameAdded(){window.onresize=_resizeSmartFrames;smartIframes=[];var allIframes=document.getElementsByTagName('iframe');for(var i=0;i<allIframes.length;i++){var frame=allIframes[i];if(frame.className=='smart_sizing_iframe'){smartIframes.push(frame);frame.style.width=frame.parentNode.scrollWidth-2+"px";}}
_resizeSmartFrames();}
if(window.innerHeight){var windowHeight=function(){return window.innerHeight;};}else if(document.documentElement&&document.documentElement.clientHeight){var windowHeight=function(){return document.documentElement.clientHeight;};}else{var windowHeight=function(){return DOMScroll.getScrollRoot().clientHeight;};}
function _resizeSmartFrames(){var height=windowHeight();for(var i=0;i<smartIframes.length;i++){var frame=smartIframes[i];var spaceLeft=height-elementY(frame)-61;frame.style.height=spaceLeft/(smartIframes.length-i)+'px';}}

function dropmenu(clickTarget){if(this==window){return new dropmenu(clickTarget);}else{this.className=null;this.menu=null;this.menuClickArea=null;this.showHandler=null;this.hideHandler=null;this.alignment=null;this.direction=null;this.isShown=false;this.canHide=false;this.show_hooks=[];this.hide_hooks=[];this.clickTarget=$(clickTarget);this.displayTarget=$(clickTarget);this.id=null;this.rtl=false;this._clickToHide=true;this._markupContentCallback=bagofholding;this.clickHandle=this.clickTarget.listen('click',this.toggle.bind(this));this.container=ge('dropmenu_container')||document.body;return this;}}
dropmenu.ALIGN_RIGHT=1;dropmenu.ALIGN_LEFT=2;dropmenu.DIRECTION_UP=3;dropmenu.DIRECTION_DOWN=4;dropmenu.INSTANCES={};dropmenu.prototype.setPosition=function(alignment){this.alignment=alignment;return this;}
dropmenu.prototype.setDirection=function(direction){this.direction=direction;return this;}
dropmenu.prototype.setMenuClickArea=function(id){this.menuClickArea=$(id);return this;}
dropmenu.prototype.setDisplayTarget=function(id){this.displayTarget=$(id);return this;}
dropmenu.prototype.setClickToHide=function(click_to_hide){this._clickToHide=click_to_hide;return this;}
dropmenu.prototype.setMarkupContent=function(id,className,markup){this.menuContent=markup;this.className=className;this.id=id;return this;}
dropmenu.prototype.setMarkupContentCallback=function(fn){this._markupContentCallback=fn;return this;}
dropmenu.prototype._getMarkupContent=function(){return this.menuContent||this._markupContentCallback();}
dropmenu.prototype.registerHTMLMenu=function(menu_id){this.registered_menu_id=menu_id;return this;}
dropmenu.prototype.addHook=function(type,fn){this[type+'_hooks'].push(fn);return this;}
dropmenu.prototype.removeHook=function(type,fn){for(var i=0;i<this[type+'_hooks'].length;i++){if(fn==this[type+'_hooks'][i]){this[type+'_hooks'].splice(i,1);return true;}}
return this;}
dropmenu.prototype.toggle=function(e){if(!this.isShown){this._show();this.canHide=false;}else{this._hide();}
$E(e).prevent();}
dropmenu.prototype.show=function(){this._show();}
dropmenu.prototype.hide=function(){if(!this.menu){return;}
this._hide();}
dropmenu.prototype.destroy=function(){if(this.menu&&this.menu.parentNode){this.menu.parentNode.removeChild(this.menu);this.menu=null;}}
dropmenu.prototype._buildMenu=function(){if(intl_locale_is_rtl()&&!this.rtl){this.alignment=(this.alignment==dropmenu.ALIGN_RIGHT)?dropmenu.ALIGN_LEFT:dropmenu.ALIGN_RIGHT;this.rtl=true;}
if(this.registered_menu_id){this.menu=$(this.registered_menu_id);if(this.alignment||this.direction){this.container.appendChild(this.menu);}}else{this._buildDynamicMenu();}
dropmenu.INSTANCES[this.id]=this;this.menuClickArea=this.menuClickArea||DOM.scry(this.menu,'div.menu_content');this.menuClickArea.onclick=chain(this.menuClickArea.onclick,Event.stop);var menu_links=DOM.scry(this.menu,'a');for(var i=0;i<menu_links.length;i++){addEventBase(menu_links[i],'click',function(){if(this._clickToHide){this._hide();}}.bind(this),this.menu_id+'_link_'+i);}}
dropmenu.prototype._buildDynamicMenu=function(){this.menu=document.createElement('div');this.menu.className='dropdown_menu hidden_elem '+(this.className?' '+this.className:'');this.menu.id='dropdown_menu_'+this.id;var markupContent=this._getMarkupContent();if(!is_scalar(markupContent)){DOM.setContent(this.menu,markupContent);}else{set_inner_html(this.menu,markupContent);}
this.container.appendChild(this.menu);}
dropmenu.prototype._positionMenu=function(){if(this.alignment||this.direction||(!this.alignment&&!this.direction&&!this.registered_menu_id)){if(this.menu.parentNode!=this.container){this.container.appendChild(this.menu);}
var menuPos=Vector2.getElementPosition(this.displayTarget,'document');var contPos=Vector2.getElementPosition(this.container,'document');var x=menuPos.x-contPos.x;var y=menuPos.y-contPos.y+this.displayTarget.offsetHeight;if(this.alignment==dropmenu.ALIGN_RIGHT||this.direction==dropmenu.DIRECTION_UP){CSS.removeClass(this.menu,'hidden_elem');this.menu.style.left='-9999px';this.menu.style.top='-9999px';if(this.alignment==dropmenu.ALIGN_RIGHT){var menu_width=this.menu.offsetWidth;x=x+this.displayTarget.offsetWidth-menu_width;}
if(this.direction==dropmenu.DIRECTION_UP){var menu_height=this.menu.offsetHeight;y=y-this.displayTarget.offsetHeight-menu_height+1;}
CSS.addClass(this.menu,'hidden_elem');}
this.menu.style.left=x+'px';this.menu.style.top=y+'px';}}
dropmenu.prototype._onclick=function(event){this._hide();return false;}
dropmenu.prototype._show=function(){if(!this.menu){this._buildMenu();}
this._positionMenu();CSS.removeClass(this.menu,'hidden_elem');var hide=this._documentHideHandler.bind(this);this.click_event=addEventBase(document.body,'click',hide,this.menu.id);onbeforeunloadRegister(hide);this.isShown=true;for(var i=0;i<this.show_hooks.length;i++){this.show_hooks[i]();}}
dropmenu.prototype._documentHideHandler=function(e){if(!this.canHide){this.canHide=true;}else{this._hide();}}
dropmenu.prototype._hide=function(){if(this.menu){CSS.addClass(this.menu,'hidden_elem');}
if(this.click_event){removeEventBase(document.body,'click',this.click_event,this.menu.id);}
this.click_event=null;this.isShown=false;for(var i=0;i<this.hide_hooks.length;i++){this.hide_hooks[i]();}
if(!this.registered_menu_id){this.destroy();}}
dropmenu.prototype._build_menu_shim=function(){this.shim=null;if(ua.ie()<7){this.shim=document.createElement('iframe');CSS.setClass(shim,'iframe_shim');this.container.appendChild(this.shim);}}
dropmenu.getExistingInstance=function(id){return dropmenu.INSTANCES[id];}
function flyout_menu(clickTarget){if(this==window){return new flyout_menu(clickTarget);}else{this.title='';this.parent.construct(this,clickTarget);}}
flyout_menu.extend('dropmenu');flyout_menu.prototype.setMarkupContent=function(id,className,title,markup){this.parent.setMarkupContent(id,className,markup);this.title=title;return this;}
flyout_menu.prototype.setIconPosition=function(iconElem){this.iconElem=iconElem;return this;}
flyout_menu.prototype._buildDynamicMenu=function(){this.menu=document.createElement('div');CSS.addClass(this.menu,(this.className||'')+' flyout_menu hidden_elem');if(this.alignment==dropmenu.ALIGN_RIGHT){CSS.addClass(this.menu,'flyout_menu_left');}
this.menu.id='flyout_menu_'+this.id;var menuContentId='content_'+this.id;var html=[];html.push('<div class="flyout_menu_header_shadow">');html.push('<div class="flyout_menu_header clearfix">');html.push('<div class="flyout_menu_mask"></div>');html.push('<div class="flyout_menu_title">'+this.title+'</div>');html.push('</div></div>');html.push('<div class="flyout_menu_content_shadow">');html.push('<div class="menu_content" id="content_'+this.id+'">');html.push('</div></div>');set_inner_html(this.menu,html.join(''));this.container.appendChild(this.menu);var markupContent=this._getMarkupContent();if(!is_scalar(markupContent)){DOM.setContent($(menuContentId),markupContent);}else{set_inner_html($(menuContentId),markupContent);}
this.menuClickArea=$(menuContentId);}
flyout_menu.prototype._positionMenu=function(){if(this.alignment||(!this.alignment&&!this.registered_menu_id)){var x;var icon_anchor=this.iconElem?this.iconElem:this.clickTarget;switch(this.alignment){case dropmenu.ALIGN_LEFT:case null:x=elementX(icon_anchor)-elementX(this.container);break;case dropmenu.ALIGN_RIGHT:this.menu.style.left='-9999px';this.menu.style.top='-9999px';CSS.removeClass(this.menu,'hidden_elem');var menuWidth=Vector2.getElementDimensions(this.menu).x;var right_anchor_pos=Rect.getElementBounds(icon_anchor).r-elementX(this.container);var padding=4;x=right_anchor_pos-menuWidth+padding*2;CSS.addClass(this.menu,'hidden_elem');break;}
var y=elementY(icon_anchor)-elementY(this.container);this.menu.style.left=x+'px';this.menu.style.top=y+'px';}}
function hover_menu(clickTarget){if(this==window){return new hover_menu(clickTarget);}else{this.parent.construct(this,clickTarget);this.timeOut=0;this.clickHandle.remove();this.enterTimer=null;this.exitTimer=null;}}
hover_menu.extend('dropmenu');hover_menu.prototype.setTimeoutInterval=function(time){this.timeOut=time;return this;}
hover_menu.prototype._clickTarget_onmouseover=function(target,e){clearTimeout(this.exitTimer);if(!this.isShown){this.enterTimer=setTimeout(function(){this._show();}.bind(this),this.timeOut);}}
hover_menu.prototype._clickTarget_onmouseout=function(target,e){e=e||window.event;var relatedTarget=(e.relatedTarget)?e.relatedTarget:e.toElement;if(DOM.contains(target,relatedTarget)){return;}
clearTimeout(this.enterTimer);if(this.isShown&&!DOM.contains(this.menu,relatedTarget)){this.exitTimer=setTimeout(function(){this._hide();}.bind(this),this.timeOut);}}
hover_menu.prototype._menu_onmouseover=function(target,e){clearTimeout(this.exitTimer);}
hover_menu.prototype._menu_onmouseout=function(target,e){e=e||window.event;var relatedTarget=(e.relatedTarget)?e.relatedTarget:e.toElement;if(DOM.contains(target,relatedTarget)){return;}
clearTimeout(this.enterTimer);if(this.isShown){this.exitTimer=setTimeout(function(){this._hide();}.bind(this),this.timeOut);}}
hover_menu.prototype.initialize=function(){if(!this.menu){this._buildMenu();}
this.clickTarget.listen('mouseover',this._clickTarget_onmouseover.bind(this,this.clickTarget));this.clickTarget.listen('mouseout',this._clickTarget_onmouseout.bind(this,this.clickTarget));this.menu.listen('mouseout',this._menu_onmouseout.bind(this,this.menu));this.menu.listen('mouseover',this._menu_onmouseover.bind(this,this.menu));this._positionMenu();return this;}

var details_shown=false;function toggle_stored_cc(obj){if(obj.checked==true){show('cvv2_div');hide_new_cc();}else{hide('cvv2_div');show_new_cc();}}
function hide_cc_payment(){hide('card_payment');hide('cvv2_div');hide_new_cc();var sel_cc=ge('cc_id');if(sel_cc){sel_cc.checked=false;}}
function show_cc_payment(){show('card_payment');}
function hide_new_cc(){hide('cc_input');hide('enter_new_card');}
function show_new_cc(){show('cc_input');show('enter_new_card');if(details_shown){toggleStoredCreditCardDetails();}}
function toggleStoredCreditCardDetails(){var link=ge('toggle_stored_credit_card_details_link');if(!details_shown){show('stored_credit_card_details');link.innerHTML=_tx("hide details");details_shown=true;}else{hide('stored_credit_card_details');link.innerHTML=_tx("show details");details_shown=false;}}
function show_csc_info(cc_type){var csc_description=_tx("A Card Security Code (CSC) is a security feature of debit and credit cards that helps fight credit card fraud.  The following graphic illustrates where to find the CSC code on your credit card.");var csc_div_style='float: left;';var paragraph_style='text-align: center; margin: 5px 0;';var amex_html='';amex_html+='<div style="'+csc_div_style+'">';amex_html+='<img src="/images/cvv2_types/amex_csc.gif" alt="" />';amex_html+='<p style="'+paragraph_style+'">'+_tx("American Express")+'</p>';amex_html+='</div>';var non_amex_html='';non_amex_html+='<div style="margin-right: 8px;'+csc_div_style+'">';non_amex_html+='<img src="/images/cvv2_types/backofcard.gif" alt="" />';non_amex_html+='<p style="'+paragraph_style+'">'+_tx("Visa, Mastercard, JCB")+'</p>';non_amex_html+='</div>';var html='';html+='<div class="clearfix">';html+='<p>'+csc_description+'</p>';if(cc_type==null){html+=non_amex_html;html+=amex_html;}else if(cc_type==65){html+=amex_html;}else{html+=non_amex_html;}
html+='</div>';new Dialog().setClassName('csc_type').setTitle(_tx("What's a CSC code?")).setBody(html).setButtons([Dialog.OK]).show();}
function show_csc_validation_info(){var html='';html+='<div class="clearfix">';html+='<div style="float: left">';html+='<p style="text-align: left; margin: 5px 0;">';html+=_tx("In order to fight credit card fraud, we have started to enforce CSC code validation in credit card payments.  For credit cards we have stored before, this means they will need to be CSC validated once for later uses.  You will not be prompted in the future once the card gets validated.");html+='</p>';html+='</div>';html+='</div>';new Dialog().setClassName('validation').setTitle(_tx("Why is CSC validation required?")).setBody(html).setButtons([Dialog.OK]).show();}
function get_selected_cc_type(cc_select_name,dialog_pro){if(dialog_pro){cc_type=get_form_select_value(get_dialog_pro_elem(cc_select_name));}else{cc_type=get_form_select_value(ge(cc_select_name));}
return cc_type;}
function validate_csc(cc_select_name,dialog_pro){if(dialog_pro){var cvv2_elem=get_dialog_pro_elem('cc_cvv2');}else{var cvv2_elem=ge('cc_cvv2');}
var cc_type=get_selected_cc_type(cc_select_name,dialog_pro);if(cc_type==65){if(cvv2_elem.value.length!=4){cvv2_elem.style.border="1px solid red;"}else{cvv2_elem.style.border="";}}else{if(cvv2_elem.value.length!=3){cvv2_elem.style.border="1px solid red;"}else{cvv2_elem.style.border="";}}}
function get_dialog_pro_elem(elem_name){var candidates=document.getElementsByName(elem_name);var i;var result=null;for(i=0;i<candidates.length;i++){var candidate=candidates[i];if(DOM.contains('pop_content',candidate)){result=candidate;}}
return result;}

function newBoxAdded(profile_id,app_id,tab_id,elem_prefix){if(!ge(elem_prefix+app_id)){return;}
var app_box=$(elem_prefix+app_id);var border=document.createElement('div');var border_frame='<div class="popcontent_advanced border_frame">'+'<div class="pop_content popcontent_old" id="pop_content"></div>'+'<div class="dialog_buttons">'+'<input type="submit" class="inputsubmit inputbutton" value="Keep"/>'+'<input type="submit" class="inputaux inputbutton" value="Remove">'+'</div></div>';set_inner_html(border,border_frame);border.getElementsByTagName('input')[0].onclick=function(){animation(app_box.previousSibling).to('opacity',0).duration(200).hide().go();return false;}
border.getElementsByTagName('input')[1].onclick=function(){removeAppBox(profile_id,app_id,tab_id,elem_prefix);DOM.remove(app_box.previousSibling);}
CSS.addClass(border,'add_new_box_border');border.childNodes[0].style.width=app_box.offsetWidth+20+'px';border.childNodes[0].style.position='absolute';border.childNodes[0].childNodes[0].style.height=app_box.offsetHeight+9+'px';app_box.parentNode.insertBefore(border,app_box);animation(DOMScroll.getScrollRoot()).to('scrollTop',elementY(app_box)-40).ease(animation.ease.end).duration(800).go();}
function removeAppBox(profile_id,app_id,tab_id,elem_prefix){if(!ge(elem_prefix+app_id)){return false;}
new AsyncRequest().setURI('/ajax/profile/box.php').setData({profile_id:profile_id,app_id:app_id,action:'remove',tab_id:tab_id}).send();var app_box=$(elem_prefix+app_id);animation(app_box).to('opacity',0).duration(200).hide().ondone(DOM.remove.bind(null,elem_prefix+app_id)).go();return false;}
function moveToTab(profile_id,app_id,from_tab,to_tab,to_tab_name,next_uri){new AsyncRequest().setURI('/ajax/profile/box.php').setData({to_tab:to_tab,profile_id:profile_id,app_id:app_id,action:'move_to_tab',from_tab:from_tab}).setHandler(function(resp){tab_controller.dirtyCachedView(to_tab_name);if(to_tab_name=='feed'||to_tab_name=='wall'){tab_controller.dirtyCachedView('box_3');}
DOM.remove('box_app_'+app_id);goURI(next_uri);DOMScroll.scrollTo(new Vector2(0,0,'document'),false);}).send();return false;}
function profile_show_all_profile_actions(wrapper_class,individual_class){var wrapper_div=DOM.find($('left_column'),'div.'+wrapper_class);var actions=DOM.scry(wrapper_div,'a.'+individual_class);for(var i=0;i<actions.length;i++){CSS.removeClass(actions[i],'hidden_elem');}
CSS.addClass(DOM.find(wrapper_div,'a.profile_actions_more_arrow'),'hidden_elem');CSS.removeClass(DOM.find(wrapper_div,'a.profile_actions_less_arrow'),'hidden_elem');return false;}
function profile_hide_extra_profile_actions(wrapper_class){var wrapper_div=DOM.find($('left_column'),'div.'+wrapper_class);var hidden_actions=DOM.scry(wrapper_div,'a.hidden_action');for(var i=0;i<hidden_actions.length;i++){CSS.addClass(hidden_actions[i],'hidden_elem');}
CSS.removeClass(DOM.find(wrapper_div,'a.profile_actions_more_arrow'),'hidden_elem');CSS.addClass(DOM.find(wrapper_div,'a.profile_actions_less_arrow'),'hidden_elem');return false;}

function ProfileTabController(id,viewer,can_edit,top_bar,root,canvas,selected_tab,tab_more_id,tab_add_id,ajax_tab_load,is_impersonated,ads_wanted,non_sortable_tabs,composer_tab){this.tabs={};this.addTabLink=null;this.moreLink=null;this.topBar=top_bar;this.numTabs=0;addEventBase($('top_bar_pic'),'click',function(controller,event){controller.onselect('wall')
return Event.kill(event);}.bind(null,this));var tab_li=root.getElementsByTagName('li');for(var i=0;i<tab_li.length;i++){var attr=tab_li[i].getAttributeNode('view');if(attr?attr.specified:false){var view=tab_li[i].getAttribute('view');if(CSS.hasClass(tab_li[i],'selected')){this.currentView=view;}
this._hookUpTab(tab_li[i],view);this.tabs[view]=tab_li[i];var app_link=tab_li[i].getElementsByTagName('a')[0];$(app_link).listen('click',function(event){if(this.activeDrag){return event.kill();}});if(tab_li[i].getElementsByTagName('a').length>1){var edit_link=tab_li[i].getElementsByTagName('a')[1];this._hookUpEdit(edit_link,view,app_link.innerHTML);}
this.numTabs++;}}
if(ge(tab_more_id)){this.tab_more=$(tab_more_id);this.moreDropMenu=dropmenu(this.tab_more.childNodes[0]).registerHTMLMenu('menu_tab_more').setPosition(dropmenu.ALIGN_LEFT).addHook('show',function(){CSS.addClass(this.tab_more,'selected_tab_more');}.bind(this)).addHook('hide',function(){CSS.removeClass(this.tab_more,'selected_tab_more');}.bind(this));}
if(ge(tab_add_id)){this.add_tab=$(tab_add_id);this.addMenu=flyout_menu(this.add_tab.childNodes[0]).registerHTMLMenu('flyout_menu_profile_add_tab').setMenuClickArea(DOM.find($('profile_tab_add'),'div.add_tab_app_typeahead')).setPosition(dropmenu.ALIGN_LEFT).addHook('show',function(){CSS.addClass(this.add_tab,'selected_menu_icon');}.bind(this)).addHook('hide',function(){CSS.removeClass(this.add_tab,'selected_menu_icon');}.bind(this));}
this.id=id;this.viewer=viewer;this.is_impersonated=is_impersonated;this.can_edit=can_edit;this.root=root;this.canvas=canvas;this.leftColumn=canvas.firstChild;this.href='';this.cachedTabs={};this.ads_wanted=ads_wanted;this.rightColumn=$('tab_canvas');if(!ajax_tab_load){this.cachedTabs[selected_tab]=this.rightColumn.childNodes[0];}else{onloadRegister(this.selectView.bind(this,selected_tab));}
this.nonSortables=non_sortable_tabs;this.maxSortableTabs=ProfileTabController.MAX_TABS-this.nonSortables.length;this.composerTab=composer_tab;if(can_edit){this.sortableMainRoot=$('profile_tabs');this.sortableMoreRoot=this.tab_more&&this.tab_more.getElementsByTagName('ul')[0];this.sortableMain=new SortableGroup();if(this.sortableMore=this.sortableMoreRoot&&new SortableGroup()){this.sortableMain.link(this.sortableMore);}
this.sortableMain.setLinkJumpHandler(this.onSortableLinkJump.bind(this));for(view in this.tabs){var tab=this.tabs[view];if(!this.nonSortables.contains(tab.getAttribute('view'))){(tab.parentNode==this.sortableMainRoot?this.sortableMain:this.sortableMore).addSortable(view,tab,tab.getElementsByTagName('a')[0]);}}
this.sortableMain.setOrderChangeHandler(this.saveTabOrder.bind(this));this.sortableMore.setOrderChangeHandler(this.saveTabOrder.bind(this));}
PageTransitions.registerHandler(bind(this,'handleNavigation',selected_tab));tab_controller=this;}
ProfileTabController.MAX_TABS=6;ProfileTabController.viewasTabs=['photos','info','posts','wall'];ProfileTabController.twoColumnViews={'posts':true,'info':true,'wall':true};ProfileTabController.facebookTabs=['wall','posts','info','photos','box_3','app_2347471856','app_2392950137','app_2344061033','app_2373072738','app_6261817190'];ProfileTabController.prototype.getLastDisplayedView=function(){var order=this.sortableMain.getOrder();if(!order.length){return null;}
return order[order.length-1];}
ProfileTabController.prototype.getFirstOverflowView=function(){var order=this.sortableMore.getOrder();if(!order.length){return null;}
return order[0];}
ProfileTabController.prototype.onSortableLinkJump=function(key){var order=this.sortableMain.getOrder(),migrateKey=null;if(order.length>this.maxSortableTabs){for(var i=order.length-1;i>=0;i--){if(order[i]!=key&&order[i]!=this.currentView){migrateKey=order[i];break;}}
this.sortableMoreRoot.insertBefore(this.tabs[migrateKey],this.sortableMoreRoot.firstChild);this.sortableMore.migrateLinkedSortable(migrateKey);}else if(order.length<this.maxSortableTabs){order=this.sortableMore.getOrder();for(var i=0;i<order.length;i++){if(order[i]!=key){migrateKey=order[i];break;}}
this.sortableMainRoot.insertBefore(this.tabs[migrateKey],this.tab_more);this.sortableMain.migrateLinkedSortable(migrateKey);}
if(this.moreDropMenu){this.moreDropMenu._positionMenu();}}
ProfileTabController.prototype._hookUpTab=function(tab,view,addNewTab){var sortable=null;if(this.numTabs>=ProfileTabController.MAX_TABS){if(addNewTab){var menu=$('tabs_more_menu').firstChild;menu.appendChild(tab);this.numTabs++;CSS.removeClass(this.tab_more,'hidden_elem');sortable=this.sortableMore;}}else{if(addNewTab){if(this.tab_more){this.root.insertBefore(tab,this.tab_more);}else{this.root.insertBefore(tab,this.add_tab);}
this.numTabs++;sortable=this.sortableMain;}}
if(sortable){sortable.addSortable(view,tab,tab.getElementsByTagName('a')[0]);}}
ProfileTabController.prototype.onselect=function(view){if(this.currentView==view||this.waitingForAjax){return;}
goURI(URI.getRequestURI().addQueryData({v:view}));}
ProfileTabController.prototype._hookUpEdit=function(target,tab_name,app_name){var menu_content=document.createElement('div');var delete_link=document.createElement('a');delete_link.innerHTML=_tx("Delete Tab");delete_link.setAttribute('href','#');delete_link.onclick=this.deleteTab.bind(this,tab_name);menu_content.appendChild(delete_link);flyout_menu(target).setMarkupContent('edit_menu_'+tab_name,'link_menu flyout_menu_18',_tx("Tab Options"),menu_content).addHook('show',function(){CSS.addClass(target,'selected');}.bind(this)).addHook('hide',function(){CSS.removeClass(target,'selected');}.bind(this));return false;}
ProfileTabController.prototype.handleNavigation=function(default_tab,uri){var query=uri.getQueryData();var requested_viewer=query.viewas||this.viewer;var ondone=function(cached){if(this.ads_wanted&&parseInt(this.viewer)>0){ads_refresh(this.currentView,new URI(uri).getPath(),false,false,false,cached);}
PageTransitions.transitionComplete();}.bind(this);if(query.app_page){this.selectPage(query.fbhref,ondone);return true;}
if(query.story_fbid){return false;}
if(!(ProfileURIController.isDestinationURIProfilePage(uri)&&requested_viewer==this.viewer)){return false;}
if(!query.v&&this.currentView==default_tab){return false;}
if(window.ProfilePhotosTabController){var result=ProfilePhotosTabController.transitionHandler(this.currentView,uri,default_tab);if(result!==null){return result;}}
var okay_params={'v':1,'id':1,'viewas':1,'ref':1};for(var param in query){if(!okay_params[param]){return false;}}
if(query.ref=='search'){search_log_2nd_action('Select tab:'+query.v);}
this.selectView(query.v||default_tab,ondone);return true;}
ProfileTabController.prototype.selectView=function(view,ondone){if(this.addMenu){this.addMenu.hide();}
if(this.is_impersonated&&!ProfileTabController.viewasTabs.contains(view)){var uri=URI.getRequestURI().addQueryData({'v':view});if(this.viewer){uri.addQueryData({'viewas':this.id});}
uri.go();return false;}
if(!this.tabs[view]){new URI('/profile.php').addQueryData({'v':view}).go();return false;}
this.selectTab(view);if(!ProfileTabController.twoColumnViews[view]&&ProfileTabController.twoColumnViews[this.currentView]){CSS.removeClass(document.body,'profile_two_columns');}else if(ProfileTabController.twoColumnViews[view]&&!ProfileTabController.twoColumnViews[this.currentView]){CSS.addClass(document.body,'profile_two_columns');}
this.changePage(view,'',ondone);}
ProfileTabController.prototype.selectTab=function(view){if(intl_locale_is_rtl()){var padding_dir='padding-left';}else{var padding_dir='padding-right';}
for(var i in this.tabs){if(i==view){if(this.sortableMore&&this.sortableMore.getOrder().contains(view)){var lastDisplayedView=this.getLastDisplayedView();var lastDisplayedTab=this.tabs[lastDisplayedView];var firstOverflowView=this.getFirstOverflowView();var firstOverflowTab=this.tabs[firstOverflowView];var newLastTab=lastDisplayedTab.previousSibling;DOM.insertBefore(lastDisplayedTab,firstOverflowTab);DOM.insertAfter(newLastTab,this.tabs[i]);this.sortableMore.migrateLinkedSortable(lastDisplayedView);this.sortableMain.migrateLinkedSortable(view);}
if(this.tabs[i].childNodes[1]){animation(this.tabs[i].childNodes[0]).from(padding_dir,'11px').to(padding_dir,'25px').duration(100).go();animation(this.tabs[i].childNodes[1]).from('width','0').to('width','19px').duration(100).go();}
CSS.addClass(this.tabs[i],'selected');}else if(CSS.hasClass(this.tabs[i],'selected')){CSS.removeClass(this.tabs[i],'selected');if(this.tabs[i].childNodes[1]){animation(this.tabs[i].childNodes[0]).from(padding_dir,'25px').to(padding_dir,'11px').duration(100).go();}}}}
ProfileTabController.prototype.selectPage=function(href,ondone){this.changePage(this.currentView,href,ondone);}
ProfileTabController.prototype.setTabContent=function(name,html,js){this.cachedTabs[name]=HTML(html).setAction(js);}
ProfileTabController.prototype.fetchPage=function(view,href,handler,lastView,ondone){lastView=lastView||'';subdomain=ProfileTabController.facebookTabs.contains(view)?'www':'apps';var viewData={id:this.id,v:view,href:href,iframe:true};if(this.is_impersonated&&this.viewer){viewData['viewas']=this.viewer;}
new AsyncRequest().setOption('useIframeTransport',true).setReadOnly(true).setMethod('GET').setURI(new URI('/ajax/profile/tab.php').setSubdomain(subdomain)).setData(viewData).setContextData('src_tab_name',lastView).setContextData('dst_tab_name',view).setNectarActionData().setHandler(function(response){var payload=response.getPayload();if(payload.redirect){goURI(payload.redirect);}else{var should_cache=!href;handler(HTML(payload.tab_content),view,should_cache,payload.additional_content);}}.bind(this)).setFinallyHandler(function(response){this.waitingForAjax=false;ondone&&ondone(0);}.bind(this)).send();this.waitingForAjax=true;}
ProfileTabController.prototype.changePage=function(view,href,ondone){var target=this.rightColumn;while(this.rightColumn.childNodes.length){this.rightColumn.removeChild(this.rightColumn.childNodes[0]);}
CSS.addClass(this.rightColumn,'loading');var lastView=this.currentView;this.currentView=view;this.href=href;var loadTab=function(node,view,should_cache,additional_content){if(additional_content){for(var i=0;i<additional_content.length;++i){var content=additional_content[i];DOM.setContent($(content.div_id),HTML(content.html));}}
CSS.removeClass(target,'loading');var was_node;if(node instanceof HTML){var d=$N('div');target.appendChild(d);DOM.setContent(d,node);if(should_cache){this.cachedTabs[view]=d;}
was_node=false;}else{target.appendChild(node);was_node=true;}}.bind(this);if(this.cachedTabs[view]&&!href&&(lastView!=view)){loadTab(this.cachedTabs[view],view,true);ondone&&ondone(1);}else{this.fetchPage(view,href,loadTab,lastView,ondone);}}
ProfileTabController.prototype.dirtyCachedView=function(view){if(this.cachedTabs[view]){delete this.cachedTabs[view];}}
ProfileTabController.prototype.addNewTab=function(target,app_id,tab_name,new_box_tab){if(this.addMenu){this.addMenu.hide();}
var new_tab=document.createElement('li');var new_link=document.createElement('a');CSS.setClass(new_link,'tab_link');new_link.innerHTML=tab_name;var new_edit=document.createElement('a');CSS.setClass(new_edit,'edit');new_tab.appendChild(new_link);new_tab.appendChild(new_edit);if(new_box_tab){new AsyncRequest().setURI('/ajax/profile/tab.php').setData({id:this.id,action:'add_app_tab'}).setHandler(function(response){var view='box_'+response.payload.tab_id;new_tab.setAttribute('view',view);this._hookUpTab(new_tab,view,true);this._hookUpView(new_tab,new_link,new_edit,tab_name,view);if(target){CSS.addClass(target,'hidden_elem');}}.bind(this)).send();}else{new AsyncRequest().setURI('/ajax/profile/tab.php').setData({id:this.id,action:'add_tab',tab_id:app_id}).setHandler(function(response){var view=(tab_name=="Photos"?'photos':'app_'+app_id);new_tab.setAttribute('view',view);this._hookUpTab(new_tab,view,true);this._hookUpView(new_tab,new_link,new_edit,tab_name,view);if(target){CSS.addClass(target,'hidden_elem');}}.bind(this)).send();}}
ProfileTabController.prototype._hookUpView=function(new_tab,new_link,new_edit,app_name,view){var base_uri=ProfileURIController.getCurrentProfileBaseURI();var query_data={v:view};if(this.is_impersonated&&this.viewer){query_data['viewas']=this.viewer;}
new_link.href=base_uri.addQueryData(query_data).toString();this._hookUpEdit(new_edit,view,app_name);this.tabs[view]=new_tab;this.onselect(view);}
ProfileTabController.prototype.editTabName=function(view,e){var tab_id=view.split('_')[1];var tab=this.tabs[view];tab.style.width=tab.offsetWidth-2+'px';tab.style.height=tab.offsetheight+'px';var cur_width=tab.firstChild.offsetWidth-16;for(var i=0;i<tab.childNodes.length;i++){hide(tab.childNodes[i]);}
var name_form=document.createElement('form');var oldname=DOM.find(tab,'.app_tab_title').innerHTML;name_form.innerHTML='<input type="text" id="tab_name_edit" class="inputtext" style="width:'+cur_width+'px" value="'+oldname+'">';tab.appendChild(name_form);$('tab_name_edit').focus();function clickedOut(e){name_form.onsubmit();}
function clickedIn(e){Event.kill(e);}
name_form.onsubmit=function(){var new_name=name_form.firstChild.value;var title_node=DOM.find(tab,'.app_tab_title');title_node.innerHTML=new_name;tab.removeChild(name_form);for(var i=0;i<tab.childNodes.length;i++){show(tab.childNodes[i]);}
document.body.removeEventListener('click',clickedOut,false);tab.removeEventListener('click',clickedIn,true);new AsyncRequest().setURI('/ajax/profile/tab.php').setData({id:this.id,action:'rename_tab',tab_id:tab_id,tab_name:new_name}).send();tab.style.width=null;return false;}.bind(this);document.body.addEventListener('click',clickedOut,false);tab.addEventListener('click',clickedIn,true);Event.kill(e);}
ProfileTabController.prototype.deleteTab=function(view){var tab_id;if(view=='photos'){tab_id=2305272732;}else{tab_id=view.split('_')[1];}
new AsyncRequest().setURI('/ajax/profile/tab.php').setData({id:this.id,action:'delete_tab',tab_id:tab_id}).send();var firstOverflowView=this.getFirstOverflowView();var firstOverflowTab=this.tabs[firstOverflowView];var lastDisplayedView=this.getLastDisplayedView();var lastDisplayedTab=this.tabs[lastDisplayedView];if(firstOverflowView){DOM.insertAfter(lastDisplayedTab,firstOverflowTab);}
this.sortableMain.migrateLinkedSortable(firstOverflowView);this.sortableMain.removeSortable(view);this.root.removeChild(this.tabs[view]);delete this.tabs[view];this.numTabs--;var menu_tab_id=ge('new_tab_'+tab_id);if(menu_tab_id)CSS.removeClass(menu_tab_id,'hidden_elem');var newFirstOverflowView=this.getFirstOverflowView();if(!newFirstOverflowView){CSS.addClass(this.tab_more,'hidden_elem');}
this.onselect('wall');return false;}
ProfileTabController.prototype.saveTabOrder=function(){var order=this.sortableMain.getOrder();if(this.sortableMore){order=order.concat(this.sortableMore.getOrder());}
new AsyncRequest().setURI('/ajax/profile/tab.php').setData({id:this.id,action:'reorder_tabs',tab_order:order}).send();}
var ProfileURIController={_profileId:0,_profilePage:false,init:function(profile_id){this._profileId=profile_id;this._profileURI=URI.getRequestURI();this._setProfilePage(true);onunloadRegister(this._setProfilePage.bind(this,false));},_setProfilePage:function(profile_page){this._profilePage=profile_page;},isProfilePage:function(){return this._profilePage;},isDestinationURIProfilePage:function(uri){if(!this.isProfilePage()){return false;}
var requested_id=uri.getQueryData().id;if(uri.getPath()=='/profile.php'){return requested_id==this._profileId;}
return this._profileURI.getPath()==uri.getPath();},getCurrentProfileBaseURI:function(){var most_recent_uri=URI.getMostRecentURI();var current_id=most_recent_uri.getQueryData().id;var query_data={};if(current_id){query_data.id=current_id;}
return most_recent_uri.setQueryData(query_data);}};

function motion_spawn_delete_dialog(video_id,parent_oid){var data={v:video_id,delete_dialog:true};if(parent_oid){data.parent_oid=parent_oid;}
new AsyncRequest().setURI('/ajax/motion.php').setData(data).setHandler(function(response){dialog_data=response.getPayload();_motion_show_delete_dialog(video_id,dialog_data.preview_content,dialog_data.success_content,parent_oid);}).send();}
function _motion_show_delete_dialog(video_id,content,success_content,parent_oid){var dialog=new Dialog().setTitle(content.title).setBody(content.html).setButtons([Dialog.newButton(content.verb.toLowerCase(),content.verb,'',function(){_motion_delete_video(video_id,success_content,parent_oid);}),Dialog.CANCEL]).show();}
function _motion_delete_video(video_id,success_content,parent_oid){var data={delete_video:true,v:video_id};if(parent_oid){data.parent_oid=parent_oid;}
new AsyncRequest().setURI('/ajax/motion.php').setData(data).setHandler(function(response){var current_dialog=Dialog.getCurrent();if(current_dialog){current_dialog.hide();}
new Dialog().setTitle(success_content.title).setBody(success_content.html).show();goURI.bind(null,success_content.url).defer(2000);}).send();}
function motion_show_profile_video_dialog(video_id,content,success_content){var dialog=new Dialog().setTitle(content.title).setBody(content.html).setButtons([Dialog.newButton('make-profile-video',_tx("Make Profile Video"),'',function(){_motion_set_profile_video(video_id,success_content);}),Dialog.CANCEL]).show();}
function _motion_set_profile_video(video_id,success_content){new AsyncRequest().setURI('/ajax/motion.php').setData({profile_video:1,v:video_id}).setHandler(function(response){goURI('/video/video.php?profile&v='+video_id);return true;}).send();}
function video_send_email_when_processed(video_id,send_email){var args={action:'set_send_email',video_id:video_id,send_email:send_email?1:0};new AsyncRequest().setURI('/ajax/motion_upload.php').setData(args).setHandler(function(response){$('notification_status').innerHTML=response.getPayload();}).send();}
var recorder_dialog;function motion_submit_video_handler(fvr_data){video_id=fvr_data['video_id'];video_category=fvr_data['video_category'];oid=fvr_data['parent_oid'];if(!video_id){goURI('/video/editvideo.php?error');}
switch(video_category){case 1:new AsyncRequest().setURI('/ajax/motion_fvr_dialog.php').setData({'action':'fvr_get_permalink','video_id':video_id}).setHandler(function(response){inboxAttachments.attach_link_url(ge('attachment_stage_area'),response.getPayload(),true);}).send();break;case 2:new AsyncRequest().setURI('/ajax/motion.php').setData({obj_attach:1,v:video_id,parent_oid:oid}).setHandler(function(response){goURI('/video/editvideo.php?created&v='+video_id+'&oid='+oid);}).send();break;case 0:default:goURI('/video/editvideo.php?created&v='+video_id);break;}}
function video_add_video_msg_inputs(fvr_data){video_id=fvr_data['video_id'];if(inboxAttachments.is_active){var attachment=ge(inboxAttachments.edit_id);}else{var attachment=ge(wallAttachments.edit_id);}
if(attachment){if(ge('video_msg_id')){$('video_msg_id').value=video_id;}else{var video_msg_id=document.createElement('input');video_msg_id.name='attachment[params][0]';video_msg_id.id='video_msg_id';video_msg_id.value=video_id;video_msg_id.type='hidden';var share_type=document.createElement('input');share_type.name='attachment[type]';share_type.id='video_msg_share_type';share_type.value=15;share_type.type='hidden';attachment.appendChild(video_msg_id);attachment.appendChild(share_type);}}}
function video_remove_video_msg_inputs(){if(inboxAttachments.is_active){var attachment=ge(inboxAttachments.edit_id);}else{var attachment=ge(wallAttachments.edit_id);}
if(attachment){var video_msg_id=ge('video_msg_id');if(video_msg_id){attachment.removeChild(video_msg_id);var video_msg_share_type=ge('video_msg_share_type');if(video_msg_share_type){attachment.removeChild(video_msg_share_type);}}}}
function video_toggle_dialog(dialog_type,value){var args={action:'toggle_dialog',dialog_type:dialog_type,dialog_value:value};new AsyncRequest().setURI('/ajax/motion_invite.php').setData(args).setHandler(function(response){}).send();}

if (window.Bootloader) { Bootloader.done(["js\/3zhq7w06afqc0cwo.pkg.js"]); }
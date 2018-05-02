/*    HTTP Host:  static.ak.fbcdn.net                                          */
/*    Generated:  September 9th 2009 11:41:36 AM PDT                           */
/*      Machine:  10.16.139.107                                                */
/*       Source:  Local Cache                                                  */
/*     Location:  rsrc:4:d3j1vtg6                                              */
/*       Locale:  nu_ll                                                        */
/*         Path:  js/8yz5wj6bru4osoww.pkg.js                                   */


function ads_fetch_admarket_ad(page,location,adnetwork_id,handler,error_handler){var data={'page':page,'location':location,'adnetwork_id':adnetwork_id};var r=new AsyncRequest().setURI(muffinize('/muffins/ajax/fetch_admarket_muffin.php')).setData(data).setHandler(handler).setErrorHandler(error_handler).send();}

function ComposerAttachment(){this._container=null;}
copy_properties(ComposerAttachment,{newFromURL:function(url,errorCallback){if(!/(?:https?:\/\/)?\w+\.\w+/.test(url)){return false;}
var attachment=new ComposerAttachment();attachment.url=url;new AsyncRequest().setURI('/ajax/inbox/ajax.php').setData({action:'attachment',url:url}).setHandler(attachment._asyncCallback.bind(attachment)).setErrorHandler(errorCallback).send();return attachment;},setupThumbnails:function(imgs,obj){var sandbox=new ImageSandbox();sandbox.onfinish=function(){imgs=sandbox.getImages();for(var i=imgs.length-1;i>=0;i--){if(imgs[i].width&&(imgs[i].height<50||imgs[i].width<50||imgs[i].height/imgs[i].width>3||imgs[i].width/imgs[i].height>3)){imgs.splice(i,1);}}
if(!imgs.length){CSS.removeClass(obj,'loading');CSS.removeClass(obj.parentNode,'has_image');var input=obj;while(input.parentNode&&input.tagName.toLowerCase()!='form'){input=input.parentNode;}
input=input.getElementsByTagName('input');for(var i=0;i<input.length;i++){if(input[i].name.indexOf('[params][images]')!=-1){input[i].parentNode.removeChild(input[i]);}}
return;}
for(var si=0;si<imgs.length-1;si++){for(var sj=imgs.length-1;sj>=si;sj--){if(imgs[si].width*imgs[si].height<imgs[sj].width*imgs[sj].height){temp=imgs[si];imgs[si]=imgs[sj];imgs[sj]=temp;}}}
var input=obj;while(input.parentNode&&input.tagName.toLowerCase()!='form'){input=input.parentNode;}
input=input.getElementsByTagName('input');for(var i=0;i<input.length;i++){if(input[i].name.indexOf('[params][images]')!=-1){input=input[i];break;}}
CSS.removeClass(obj,'loading');new ThumbnailSelector(obj,input,imgs);}.bind(this);sandbox.loadImages(imgs);}});copy_properties(ComposerAttachment.prototype,{containerReady:function(obj,show_loading){this._container=obj;var inputs=obj.getElementsByTagName('input');var html=[''];for(var i=0;i<inputs.length;i++){if(inputs[i].type=='text'||inputs[i].type=='hidden'){html.push('<input type="hidden" name="'+htmlspecialchars(inputs[i].name)+'" value="'+htmlspecialchars(inputs[i].value)+'" />');}}
if(show_loading){html.push('&nbsp;');obj.innerHTML=html.join('');CSS.addClass(obj,'share_attachment_loading');}else{obj.innerHTML+=html.join('');}},_renderInputsRecursive:function(name,params){if(params===null){return'';}
var html=[];if(typeof(params)=='object'){for(var i in params){html.push(this._renderInputsRecursive(name+'['+i+']',params[i]));}}else if(typeof(params)!='function'){html.push('<input type="hidden" name="',name,'" value="',htmlspecialchars(params),'" />');}
return html.join('');},_asyncCallback:function(response){var payload=response.getPayload();var html=[payload.html];html.push(this._renderInputsRecursive('attachment[params]',payload.params));html.push('<input type="hidden" name="attachment[type]" value="',payload.type,'" />');CSS.removeClass(this._container,'share_attachment_loading');set_inner_html(this._container,html.join(''));}});function ThumbnailSelector(obj,input,images){var html=['<div class="thumbnail_stage"><h4>'+_tx("Choose a Thumbnail")+'</h4><div class="selector clearfix"><div class="arrows clearfix">','<span class="left"><a href="#" class="arrow disabled">&nbsp;</a></span>','<span class="right"><a href="#" class="arrow ',images.length>1?'enabled':'disabled','">&nbsp;</a></span>','</div><div class="counter"><span>1 of ',images.length,'</span></div></div>'];for(var k=0;k<images.length;k++){html.push('<div class="thumbnail',k==0?' thumbnail_selected':' thumbnail_unselected','">','<img class="img_loading" src="',images[k].src,'" onload="adjustImage(this);" />','</div>');}
html.push('<label style="white-space:nowrap"><input name="no_picture" type="checkbox" onclick="this.parentNode.parentNode.parentNode.thumbnail.use_thumbnail(this.checked)" />'+_tx("No Picture")+'</label></div>');obj.innerHTML=html.join('');this.images=images;this.input=input;input.value=this.images[0].src;this.obj=obj;this.obj.thumbnail=this;this.label=obj.getElementsByTagName('span')[2];this.index=0;var anchors=obj.getElementsByTagName('a');this.left=anchors[0];this.right=anchors[1];this.left.onclick=this.left_arrow_press.bind(this);this.right.onclick=this.right_arrow_press.bind(this);this.left.onselectstart=this.right.onselectstart=function(){return false};this.left.onmousedown=this.right.onmousedown=this._onmousedown;this.left.onmouseout=this.right.onmouseout=this._onmouseout;}
copy_properties(ThumbnailSelector.prototype,{use_thumbnail:function(checkbox){if(!checkbox){this.move_selection(0);CSS.removeClass(this.obj,'thumbnail_dont_use');}else{this.input.value='';CSS.addClass(this.obj,'thumbnail_dont_use');}},_onmousedown:function(){CSS.addClass(this,'active');return false;},_onmouseout:function(){CSS.removeClass(this,'active');},left_arrow_press:function(){CSS.addClass(this.left,'active');this.move_selection(-1);return false;},right_arrow_press:function(){CSS.removeClass(this.right,'active');this.move_selection(1);return false;},move_selection:function(offset){var index=this.index+offset;if(index>=0&&index<this.images.length){var divs=this.obj.getElementsByTagName('div');var j=0;this.index=index;for(var i=0;i<divs.length;i++){var className=divs[i].className;if(!CSS.hasClass(divs[i],'thumbnail ')){continue;}
var selected=j==index;if(className.indexOf(selected?'_unselected':'_selected')!=-1){CSS.setClass(divs[i],className.replace(/thumbnail_(?:un)?selected/,selected?'thumbnail_selected':'thumbnail_unselected'));}
j++;}
this.label.innerHTML=_tx("{selected} of {total}",{selected:(index+1),total:j});CSS.setClass(this.left,this.left.className.replace(/[^ ]+abled/,index==0?'disabled':'enabled'));CSS.setClass(this.right,this.right.className.replace(/[^ ]+abled/,index==this.images.length-1?'disabled':'enabled'));this.input.value=this.images[index].src;}}});function ImageSandbox(){this.obj=document.createElement('div');this.obj.style.left=this.obj.style.top='-100px';this.obj.style.width=this.obj.style.height='1px';this.obj.style.overflow='hidden';this.images=0;this.done=0;DOM.getRootElement().appendChild(this.obj);}
copy_properties(ImageSandbox.prototype,{loadImages:function(imgs){this.images=imgs.length;for(var i=0;i<imgs.length;i++){new ImageSandboxLoader(this,imgs[i]);}},onImageLoaded:function(img_loader){this.done++;this._stateChange();},onImageFailed:function(img_loader){img_loader.destroy();this.images--;this._stateChange();},getImages:function(){var imgs=new Array();var collection=this.obj.getElementsByTagName('img');for(var i=0;i<collection.length;i++){imgs.push(collection[i]);}
return imgs;},_stateChange:function(){if(this.done==this.images){if(this.onfinish){this.onfinish();}}}});function ImageSandboxLoader(sandbox,img){this._timeout=4000;this._start=new Date().getTime();this._sandbox=sandbox;if(typeof img!='object'){img={src:img};}
this._obj=document.createElement('img');this._obj.onload=function(){if(this._pollImage)this._pollImage(1);}.bind(this);this._obj.onerror=function(){if(this._pollImage)this._pollImage(2);}.bind(this);copy_properties(this._obj,img);this._sandbox.obj.appendChild(this._obj);if(this._pollImage!==null){this._pollImage();}}
copy_properties(ImageSandboxLoader.prototype,{_pollImage:function(state){if(state==1){this._pollImage=null;this._sandbox.onImageLoaded(this);}else if(state==2){this._pollImage=null;this._sandbox.onImageFailed(this);}else{if(image_has_failed(this._obj)){this._pollImage(2);}else if(image_has_loaded(this._obj)){this._pollImage(1);}else if((this._start+this._timeout)<new Date().getTime()){this._pollImage(2);}else{setTimeout(function(){if(this._pollImage)this._pollImage();}.bind(this),20);}}},destroy:function(){DOM.remove(this._obj);this._obj=null;}});

function UrlDetector(element){this.element=element;this.lastCharCount=0;this.lastScrapedURL=null;this.detectionInterval=null;this.suppressDetection=bagofholding;Event.listen(element,'focus',this.startDetectionInterval.bind(this));Event.listen(element,'blur',this.stopDetectionInterval.bind(this));var useValue=DOM.isNode(this.element,['input','textarea']);copy_properties(this,{getText:useValue?function(){return this.element.value;}:function(){return DOM.getText(this.element);},setText:useValue?function(value){this.element.value=value;}:function(text){DOM.setText(this.element,text);}});};UrlDetector.mixin('Arbiter',{getText:bagofholding,setText:bagofholding,setSuppressDetectionCheck:function(fn){this.suppressDetection=fn;},startDetectionInterval:function(){if(this.detectionInterval||this.suppressDetection()){return;}
this.detectionInterval=setInterval(this.detectionIntervalFire.bind(this),250);},stopDetectionInterval:function(){this.detectionInterval=clearInterval(this.detectionInterval);},detectionIntervalFire:function(){if(this.suppressDetection()){return;}
var charCount=this.getText().length;if((charCount-this.lastCharCount)>5||(this.lastCharCount==0&&charCount>1)){var pastedText=true;}
this.lastCharCount=charCount;var url=this.detectUrl(pastedText);if(url){this.inform('urlDetected',url);}},detectUrl:function(pastedText){var url='',text=this.getText(),startPos=endPos=-1;if(pastedText){url=text.match(/www\.\S*/i);if(url){startPos=text.indexOf(url[0]);endPos=startPos+url[0].length;url="http://"+url[0];}else{var match=text.match(/(http|fb):\/\/\S*/i);if(match){url=match[0];startPos=text.indexOf(match[0]);endPos=startPos+match[0].length;}}}else{url=text.match(/www\.\S*[\s|\)|\!]/i);if(url){startPos=text.indexOf(url[0]);endPos=startPos+url[0].length;url="http://"+url[0];}else{var match=text.match(/(http|fb):\/\/\S*[\s|\)|\!]/i);if(match){url=match[0];startPos=text.indexOf(match[0]);endPos=startPos+match[0].length;}}}
if(url){url=url.replace(/[\s|\)|\!]/g,'');var lastChar=url.charAt(url.length-1);if(lastChar.match(/[,|.]/)){url=url.substr(0,url.length-1);}
if(url!=this.lastScrapedURL){this.lastScrapedURL=url;if(url.search('fb:')==0){this.setText(text.substr(0,startPos)+text.substr(endPos));}}else{url='';}}
return url;}});

function fix_attachment_more_menu_alignment(more_link){var attachment_buttons_list=ge('attachment_buttons_list');var total_width=attachment_buttons_list.offsetWidth;if(more_link){var more_offset=Vector2.getElementPosition(more_link).x;var attachments_offset=Vector2.getElementPosition(attachment_buttons_list).x;var offset=more_offset-attachments_offset;var icon_width=more_link.offsetWidth;var space_left=total_width-offset;if(space_left>=icon_width&&space_left<126){var more_menu=ge('wall_more_menu');var right_margin=0;more_menu.style.left='auto';more_menu.style.right=right_margin+'px';}}}
function wall_video_thumb_adjust(play_img_div,thumb_img){if(ua.ie()>=6&&ua.ie()<7){play_img_div.style.marginTop=(-1*thumb_img.height-3)+'px';play_img_div.style.paddingTop=(thumb_img.height-19)+'px';}
play_img_div.style.display='block';}
function attachments(context_id){this.attachment_added=false;this.attachment_oid=null;this.attachment_app_id=null;this.is_share=false;this.attached_share=false;this.scrape_last_count=0;this.dialog=null;this.wall_attachments={};this.last_url_scraped=null;this.context=context_id;this.edit_container_id='attachment_edit_container_'+context_id;this.edit_loading_id='attachment_edit_loading_'+context_id;this.edit_id='attachment_edit_'+context_id;this.view_container_id='attachment_view_container_'+context_id;this.view_wrapper_id='attachment_view_wrapper_'+context_id;this.view_id='attachment_view_'+context_id;this.remove_id='attachment_remove_'+context_id;this.view_loading_id='attachment_view_loading_'+context_id;this.is_active=false;}
attachments.prototype.show_edit_loading=function(){show(this.edit_loading_id);}
attachments.prototype.hide_edit_loading=function(){hide(this.edit_loading_id);}
attachments.prototype.show_attachment_edit=function(title,html,share_type,ajax_params){this.is_active=true;if(this.dialog){return;}
var is_app=(share_type==14);this.is_share=(share_type==100);var wrapper='<div id="'+this.edit_container_id+'">'+'<div id="'+this.edit_loading_id+'">&nbsp;</div>'+'</div>';this.dialog=new Dialog().setImmediateRendering(true).setClassName('attachment_dialog').setTitle(title).setBody(wrapper).setStackable(true).setButtons([Dialog.newButton('attach',_tx("Attach"),'',function(){if(this.is_share){this._share_attach();}else{this._attach(is_app,ajax_params,true);}
this.dialog.hide();this.dialog=null;this.is_active=false;}.bind(this)),Dialog.newButton('cancel',_tx("Cancel"),'inputaux',function(){this.dialog.hide();this.remove_attachment_view();this.dialog=null;this.is_active=false;}.bind(this))]).show();var container=ge(this.edit_container_id);var div=document.createElement('div');div.className='share_stage';CSS.addClass(div,'attachment_edit');div.id=this.edit_id;div.is_app=is_app;container.appendChild(div);set_inner_html(div,html);if(this.is_share){placeholderSetup('share_link');if(ua.ie()<7){$('share_link').focus();}}
return div;}
attachments.prototype._show_attachment_view=function(html,is_app){var container=ge(this.view_container_id);var div=document.createElement('div');div.className='share_stage';CSS.addClass(div,'attachment_view');div.id=this.view_id;div.is_app=is_app;container.appendChild(div);set_inner_html(div,html);hide('attachment_buttons_list');var wrapper=ge(this.view_wrapper_id);wrapper.style.display='block';this.attachment_added=true;return div;}
attachments.prototype.remove_attachment_view=function(){var container=ge(this.view_container_id);var attachment=ge(this.view_id);if(this.attachment_added&&attachment){this.removed=true;container.removeChild(attachment);hide(this.view_wrapper_id);if(ge('attachment_buttons_list')){show('attachment_buttons_list');}
var attachment_remove=ge(this.remove_id);CSS.setClass(attachment_remove,attachment_remove.className.replace(' edit',''));}
this.attachment_added=false;this.attachment_oid=null;this.attachment_app_id=null;this.is_share=false;this.attached_share=false;}
attachments.prototype.get_all_form_elements=function(attachment){var inputs=[];if(attachment){var html_input=attachment.getElementsByTagName('input');for(var i=0;i<html_input.length;i++){inputs.push(html_input[i]);}
var html_select=attachment.getElementsByTagName('select');for(var i=0;i<html_select.length;i++){inputs.push(html_select[i]);}
var html_textarea=attachment.getElementsByTagName('textarea');for(var i=0;i<html_textarea.length;i++){inputs.push(html_textarea[i]);}}
return inputs;}
attachments.prototype._add_attachment_input_data=function(data,attachment){if(!attachment){return false;}
var inputs=this.get_all_form_elements(attachment);if(attachment.is_app){data['attachment']={'app':{},'type':14};for(var i=0;i<inputs.length;i++){if(!(inputs[i].type=="radio"||inputs[i].type=="checkbox")||inputs[i].checked){data['attachment']['app'][inputs[i].name]=inputs[i].value;}}}else{var has_type=false;for(var i=0;i<inputs.length;i++){if(inputs[i].name=='attachment[type]'){has_type=true;}
if(inputs[i].name=='attachment[params][url]'){if(!inputs[i].value||inputs[i].value=='http://'){return false;}}
data[inputs[i].name]=inputs[i].value;}
if(!has_type){return false;}}
data['context']=this.context;return true;}
attachments.prototype._attach=function(is_app,ajax_params,has_form_data){var asyncData={};if(has_form_data){var attachment=ge(this.edit_id);var added=this._add_attachment_input_data(asyncData,attachment);if(!added){return;}}
if(ajax_params){for(var param in ajax_params){asyncData[param]=ajax_params[param];}}
var loading=ge(this.view_loading_id);loading.style.display='block';var view_container=this._show_attachment_view('',is_app);var onDone=function(response){var responseObj=response.getPayload();if(!view_container.removed){hide(this.view_loading_id);set_inner_html(view_container,responseObj['html']);this.attachment_oid=responseObj['oid'];this.attachment_app_id=responseObj['app_id'];}}.bind(this);new AsyncRequest().setHandler(onDone).setURI('/ajax/attachments.php').setErrorHandler(this.remove_attachment_view).setTransportErrorHandler(this.remove_attachment_view).setData(asyncData).send();}
attachments.prototype.add_post_data=function(post_data){if(this.attachment_added){if(this.attached_share){this._add_attachment_input_data(post_data,ge(this.view_id));}else{post_data['attachment']={'oid':this.attachment_oid,'app_id':this.attachment_app_id};}}}
attachments.prototype.prepare_wall_post=function(){var attachment=ge(this.view_id);if(attachment){var inputs=this.get_all_form_elements(attachment);for(var i=0;i<inputs.length;i++){inputs[i].disabled=true;}}}
attachments.prototype.show_full_attachment=function(post_id){if(typeof this.wall_attachments[post_id]!='string'){return;}
hide('attachment_compact_'+post_id);hide('attached_item_info_'+post_id);hide('attachment_compact_td_'+post_id);attachment_div=ge('wall_attachment_'+post_id);set_inner_html(attachment_div,this.wall_attachments[post_id]);}
attachments.prototype.fix_app_inputs_on_send=function(){var attachment=ge(this.view_id);if(!this.attachment_added||!attachment){return;}
if(!this.attached_share){new_inputs=[];new_inputs.push(create_hidden_input('attachment[oid]',this.attachment_oid));new_inputs.push(create_hidden_input('attachment[app_id]',this.attachment_app_id));if(attachment.is_app){new_inputs.push(create_hidden_input('attachment[type]',14));new_inputs.push(create_hidden_input('attachment[app][message_sent]',true));}
for(var i=0,il=new_inputs.length;i<il;i++){attachment.appendChild(new_inputs[i]);}}}
attachments.prototype.share_attach_from_dialog=function(){this._share_attach();Dialog.getCurrent().hide();this.dialog=null;}
attachments.prototype._share_attach=function(){var share_link=ge('share_link');var url=share_link.value;if(url&&url!='http://'){this._share_submit_url(url);}}
attachments.prototype._share_submit_url=function(url){this._show_attachment_view(this.share_html_block,false);var view_container=ge(this.view_container_id);var stage_area=view_container.childNodes[0].childNodes[0].childNodes[0];this._attach_link_url(stage_area,url,true);var attachment_remove=ge(this.remove_id);attachment_remove.className+=' edit';this.attached_share=true;}
attachments.prototype._attach_link_url=function(obj,url,show_loading){var errorCallback=function(resp){this.remove_attachment_view();}.bind(this);var attachment=ComposerAttachment.newFromURL(url,errorCallback);attachment.containerReady(obj,show_loading);}
attachments.prototype._is_fb_code_url=function(url){return url.search('fb:')==0;}
attachments.prototype._auto_attach_link=function(event,url){if(this._is_fb_code_url(url)){var data={'code':url,'context':this.context};this._attach(true,data,false);}else{this._share_submit_url(url);}}
attachments.prototype.register_url_detection=function(textarea_id){var detector=new UrlDetector($(textarea_id));detector.subscribe('urlDetected',this._auto_attach_link.bind(this));detector.setSuppressDetectionCheck(function(){return this.attachment_added;}.bind(this));}

function ConnectDialog(profile_id,source,ondone_func,ondone_data,ondone_reload,contextData,pymk_score,pymk_source,pymk_page){this.parent.construct(this);this.setClassName('UIConnect_Dialog');this.setAutoFocus(false);this.setStackable(true);var req=new AsyncRequest().setURI('/ajax/profile/connect.php').setData({'dialog':1,'profile_id':profile_id,'source':source}).setFinallyHandler(function(){this.getButtonElement('connect').focus()}.bind(this));for(key in contextData){req.setContextData(key,contextData[key]);}
this.setAsync(req);this.ondone_func=ondone_func;this.ondone_data=ondone_data;this.ondone_reload=ondone_reload;this.pymk_score=pymk_score;this.pymk_source=pymk_source;this.pymk_page=pymk_page;this.setCloseHandler(ConnectDialog.deleteInstance);ConnectDialog.setInstance(this);return this;}
ConnectDialog.extend('Dialog');ConnectDialog.deleteInstance=function(){delete ConnectDialog.instance;}
ConnectDialog.setInstance=function(instance){ConnectDialog.instance=instance;}
ConnectDialog.getInstance=function(){return ConnectDialog.instance;}

function FeedFormBase(){this._storyType=63;this._feedData=null;this._uri='/fbml/ajax/prompt_feed.php';this._buttonCallback=null;this._isNile=false;this._supportsUserMessage=false;this._userMessagePrompt='';this._userMessage={value:''};this._currentSize=0;this._connectLocation=0;this._postId=null;};FeedFormBase.SIZES={"small":1,"medium":2};FeedFormBase.AUTO_PUBLISH_OPTIONS={"never":2,"small":4,"medium":5};FeedFormBase.shouldShowLoadingToSelf=false;FeedFormBase.shouldShowLoadingToOthers=false;FeedFormBase.prototype.setStoryType=function(storyType){this._storyType=storyType;return this;};FeedFormBase.prototype.setForm=function(id){if(this._elements){Util.error('Cannot use both setForm and setElements.  Pick one or the other.');return null;}
this._form=$(id);return this;};FeedFormBase.prototype.setElements=function(elements){if(this._form){Util.error('Cannot use both setForm and setElements.  Pick one or the other.');return null;}
this._elements=elements;return this;}
FeedFormBase.prototype.setFeedData=function(feedData){this._feedData=feedData;return this;};FeedFormBase.prototype.setAppId=function(appId){this._appid=appId;return this;};FeedFormBase.prototype.setConnectLocation=function(connectLocation){this._connectLocation=connectLocation;return this;};FeedFormBase.prototype.setUserMessagePrompt=function(userMessagePrompt){this._userMessagePrompt=userMessagePrompt;return this;};FeedFormBase.prototype.setUserMessage=function(userMessage){if(userMessage){if(typeof userMessage=='string'){this._userMessage={value:userMessage};}else{this._userMessage=userMessage;}}
return this;};FeedFormBase.prototype.setURI=function(uri){this._uri=uri;return this;};FeedFormBase.prototype.setContinuation=function(continuation){this._continuation=continuation;return this;};FeedFormBase.prototype.setButtonCallback=function(callback){this._buttonCallback=callback;return this;}
FeedFormBase.prototype._selectSize=function(option){var size=option['size'];if(size!=this._currentSize){CSS.removeClass(this._selectedSize,'Tabset_selected');animation($('preview_'+this._currentSize)).to('opacity',0).hide().duration(150).go();animation($('preview_'+size)).duration(150).checkpoint().show().from('opacity',0).to('opacity',1).duration(150).go();this._selectedSize=option;this._currentSize=size;CSS.addClass(this._selectedSize,'Tabset_selected');}
return false;};FeedFormBase.prototype.attachHandlers=function(dialog){if(!this._isNile){this._attachSizeHandlers(dialog);}
var links=$('preview_container').scry('a');links.forEach(function(link){link.listen('click',function(e){e.kill();})});if(this._supportsUserMessage){$('feedform_user_message').focus();}
return this;}
FeedFormBase.prototype._attachSizeHandlers=function(dialog){var options=this._selectorOptions;var id_prefix=this._feedformFilter;for(var i=0;i<options.length;i++){var node=$(id_prefix+'_'+options[i]['size']);var anchor=$(id_prefix+'_'+options[i]['size']+'_anchor');var size=options[i]['size'];options[i]['node']=node;if(CSS.hasClass(node,'Tabset_selected')){this._selectedSize=options[i];this._currentSize=size;}
addEventBase(anchor,'click',this._selectSize.bind(this,options[i]),size);}
return true;}
FeedFormBase.prototype._finish=function(){this._enableSubmitButtons();if(this._dialog){this._dialog.hide();}
if(this._continuation){this._continuation(this._postId,null,{user_message:this._userMessage.value});}};FeedFormBase.prototype.shouldShowLoading=function(){return false;}
FeedFormBase.prototype.showDialog=function(async){this._dialog=new Dialog().setContentWidth(580).setClassName('interaction_form').setAsync(async).setHandler(this.handleButton.bind(this)).onloadRegister(this.attachHandlers.bind(this));if(this.shouldShowLoading()){this._dialog.show();}
return this;};FeedFormBase.prototype._confirm=function(data){if(this._isNile&&this._supportsUserMessage){user_message=$('feedform_user_message').value;this._userMessage.value=data.user_message=user_message;}
new AsyncRequest().setURI(this._uri).setData(data).setNectarActionData().setHandler(this.showConfirmed.bind(this)).send();};FeedFormBase.prototype.handleButton=function(button){if(this._buttonCallback){this._buttonCallback(button);}
if(button.name=="publish"){var buttonObj=this._dialog?this._dialog.getButtonElement(button.name):button;if(buttonObj){buttonObj.disabled=true;}
this.confirmFeed();return false;}else if(button.name=="cancel"){this.cancelFeed();}};FeedFormBase.prototype.cancelFeed=function(){this._finish();}
FeedFormBase.prototype.attachProperties=function(userData){copy_properties(this,userData);if(this._continuationJS){this._continuation=new Function(this._continuationJS);delete this._continuationJS;}
return this;};FeedFormBase.prototype._showBase=function(data){var async=new AsyncRequest().setURI(this._uri).setHandler(function(r){var user_data=r.getPayload().userData;this.attachProperties(user_data);if(user_data['no_dialog_shown']){this._finish();}
return true;}.bind(this)).setNectarActionData().setErrorHandler(this._showApplicationError.bind(this)).setData(data);this.showDialog(async);return this;};FeedFormBase.prototype.showConfirmedWithMessage=function(msg,response){this.attachProperties(response.payload.userData);var confirmation='<div class="interim_status">'+msg+'</div>';var title=_tx("Post Published");if(this._dialog){this._dialog.setBody(confirmation);this._dialog.setTitle(title);this._dialog.setButtons(Dialog.OK);this._dialog.setButtonsMessage('');}else{$('dialog_body').innerHTML=confirmation;var publishButton=ge('publish');if(publishButton!=null){DOM.remove(publishButton);}
var cancelButton=ge('cancel');if(cancelButton!=null){cancelButton.value=_tx("Done");}}
setTimeout(this._finish.bind(this),2500);return false;};FeedFormBase.prototype._enableSubmitButtons=function(){var feedFormSubmitButtons=['send','publish'];for(var i=0;i<feedFormSubmitButtons.length;i++){var button=ge(feedFormSubmitButtons[i]);if(button){button.disabled=false;break;}}}
FeedFormBase.prototype._showApplicationError=function(response){this._enableSubmitButtons();var userData=response.getPayload().userData;var showError=function(showMsg){var msg=(showMsg&&(userData.errorMessage!=null))?userData.errorMessage:_tx("There was an application error. Please try again later.");(new ErrorDialog()).showError(userData.errorTitle,msg);}
var err=response.getError();if(err==kError_Platform_ApplicationResponseInvalid){if(userData.showDebug){showError(true);}else{if(this._continuation){this._continuation();}else{showError(false);}}}else{showError(true);}
return false;};function FeedForm(){this.parent.construct(this);}
FeedForm.extend('FeedFormBase');FeedForm.attachSubmitHandler=function(form,app_id,should_show_dialog){form.onsubmit='';form.listen('submit',function(form,app_id,should_show_dialog,event){FeedForm.shouldShowLoadingToSelf=should_show_dialog;new FeedForm().setForm(form).setAppId(app_id).show();return false;}.curry(form,app_id,should_show_dialog));}
FeedForm.prototype._setPublishButtonText=function(text){this.publish_button.value=text;}
FeedForm.prototype._setCancelButtonText=function(text){this.cancel_button.value=text;}
FeedForm.prototype.shouldShowLoading=function(){return FeedForm.shouldShowLoadingToSelf;}
FeedForm.prototype.show=function(){var more={};if(this._form){more={callback:this._form.getAttribute('action'),elements:serialize_form(this._form)};}else if(this._elements){more.elements=this._elements;}
var data={app_id:this._appid,feedform_type:this._storyType,feed_info:this._feedData,user_message_prompt:this._userMessagePrompt,user_message:this._userMessage.value,preview:true,feed_target_type:'self_feed',extern:this._connectLocation};copy_properties(data,more);return this._showBase(data);}
FeedForm.prototype.cancelFeed=function(){this._finish();}
FeedForm.prototype.showConfirmed=function(response){var msg=this.is_never_publish?_tx("Setting Saved."):_tx("The post is now visible on your Wall and your friends' home pages.");this.showConfirmedWithMessage(msg,response);}
FeedForm.prototype.confirmFeed=function(){var data={feed_info:this._feedData,feedform_type:this._storyType,preview:false,feed_target_type:'self_feed',app_id:this._appid,size:FeedFormBase.SIZES[this._currentSize],extern:this._connectLocation};this._confirm(data);};function MultiFeedForm(){this.parent.construct(this);}
MultiFeedForm.extend('FeedFormBase');MultiFeedForm.prototype.setPrefillId=function(prefillId){if(prefillId>0){this._prefillId=prefillId;}else{this._prefillId=null;}
return this;};MultiFeedForm.prototype.removeRecipient=function(user){this._toIds=this._toIds.filter(function(u){return u!=user;});if(this._toIds.length==0){this._finish();}else{DOM.remove('sp'+user);}
return false;};MultiFeedForm.prototype.showConfirmed=function(response){var msg=_tx("The post is now visible on your friend's Wall.");this.showConfirmedWithMessage(msg,response);}
MultiFeedForm.prototype.confirmFeed=function(){var data={feed_info:this._feedData,feedform_type:this._storyType,to_ids:this._toIds,preview:false,feed_target_type:'multi_feed',app_id:this._appid,size:FeedFormBase.SIZES[this._currentSize],extern:this._connectLocation};this._confirm(data);};MultiFeedForm.prototype.shouldShowLoading=function(){return FeedFormBase.shouldShowLoadingToOthers;}
MultiFeedForm.prototype.show=function(){var ids=[];if(this._prefillId){ids.push(this._prefillId);}else{var inputs=this._form.getElementsByTagName('input');for(var i=0;i<inputs.length;i++){if(inputs[i].getAttribute('fb_protected')=='true'&&(CSS.hasClass(inputs[i],'fb_token_hidden_input')||inputs[i].name=='ids[]'||inputs[i].name=='friend_selector_id')&&(inputs[i].type!='checkbox'||inputs[i].checked)){ids.push(inputs[i].value);}}}
this._toIds=ids;var data={app_id:this._appid,to_ids:this._toIds,callback:this._form.action,preview:true,form_id:this._form.id,prefill:(this.prefillId>0),elements:serialize_form(this._form),user_message_prompt:this._userMessagePrompt,user_message:this._userMessage.value,feed_target_type:'multi_feed',extern:this._connectLocation};return this._showBase(data);};MultiFeedForm.prototype.attachHandlers=function(dialog){for(var i=0;i<this._toIds.length;i++){var person_link=ge('spl_'+this._toIds[i]);if(person_link){person_link.onclick=this.removeRecipient.bind(this,this._toIds[i]);}}
this.parent.attachHandlers(dialog);return this;};function TargetFeedForm(){this.parent.construct(this);}
TargetFeedForm.extend('MultiFeedForm');TargetFeedForm.prototype.confirmFeed=function(){var data={feed_info:this._feedData,feedform_type:this._storyType,to_ids:this._toIds,preview:false,feed_target_type:'target_feed',app_id:this._appid,size:FeedFormBase.SIZES[this._currentSize],extern:this._connectLocation};this._confirm(data);};TargetFeedForm.prototype.setTarget=function(target){this._toIds=[target];return this;}
TargetFeedForm.prototype.show=function(){var data={app_id:this._appid,to_ids:this._toIds,feed_info:this._feedData,preview:true,prefill:(this.prefillId>0),user_message_prompt:this._userMessagePrompt,user_message:this._userMessage.value,feed_target_type:'target_feed',extern:this._connectLocation};return this._showBase(data);};

function typeaheadpro(obj,source,properties){if(!typeaheadpro.hacks){typeaheadpro.should_check_missing_events=ua.safari()<500;typeaheadpro.should_simulate_keypress=(ua.ie()<8)||(ua.safari()>500&&ua.safari()<523||ua.safari()>=525);if(typeaheadpro.should_use_iframe==undefined){typeaheadpro.should_use_iframe=typeaheadpro.should_simulate_keypress;}
typeaheadpro.should_use_overflow=ua.opera()<9.5||ua.safari()<500;if(ua.firefox()){this.activate_poll_on_focus_events=true;}
typeaheadpro.hacks=true;}
typeaheadpro.instances=(typeaheadpro.instances||[]);typeaheadpro.instances.push(this);this.instance=typeaheadpro.instances.length-1;copy_properties(this,properties||{});this.obj=obj;this.obj.typeahead=this;this.obj.onfocus=this._onfocus.bind(this);this.obj.onblur=chain(this.obj.onblur,this._onblur.bind(this));this.obj.onchange=this._onchange.bind(this);this.obj.onkeyup=function(event){return this._onkeyup(event||window.event);}.bind(this);this.obj.onkeydown=function(event){return this._onkeydown(event||window.event);}.bind(this);this.obj.onkeypress=function(event){return this._onkeypress(event||window.event);}.bind(this);this.want_icon_list=false;this.showing_icon_list=false;this.stop_suggestion_select=false;if(this.typeahead_icon_class&&this.typeahead_icon_get_return){this.typeahead_icon=document.createElement('div');CSS.addClass(this.typeahead_icon,'typeahead_list_icon');CSS.addClass(this.typeahead_icon,this.typeahead_icon_class);this.typeahead_icon.innerHTML='&nbsp;';this.setup_typeahead_icon();setTimeout(function(){this.focus();}.bind(this),50);this.typeahead_icon.onmousedown=function(event){return this.typeahead_icon_onclick(event||window.event);}.bind(this);}
this.focused=this.focused||this.obj.offsetWidth?true:false;this.anchor=this.setup_anchor();this.dropdown=document.createElement('div');CSS.addClass(this.dropdown,'typeahead_list');if(!this.focused){this.dropdown.style.display='none';}
this.anchor_block=this.anchor_block||this.anchor.tagName.toLowerCase()=='div';DOMScroll.getScrollRoot().appendChild(this.dropdown);this.dropdown.className+=' typeahead_list_absolute';this.list=$N('div');this.dropdown.appendChild(this.list);this.dropdown.onmousedown=function(event){return this.dropdown_onmousedown(event||window.event);}.bind(this);if(typeaheadpro.should_use_iframe&&!typeaheadpro.iframe){typeaheadpro.iframe=document.createElement('iframe');typeaheadpro.iframe.src="/common/blank.html";CSS.setClass(typeaheadpro.iframe,'typeahead_iframe');typeaheadpro.iframe.style.display='none';typeaheadpro.iframe.frameBorder=0;DOMScroll.getScrollRoot().appendChild(typeaheadpro.iframe);}
if(typeaheadpro.should_use_iframe&&typeaheadpro.iframe){typeaheadpro.iframe.style.zIndex=parseInt(CSS.getStyle(this.dropdown,'zIndex'))-1;}
this.log_data={'kt':0,'kp':0,'sm':null,'ty':0,'f':1};this.results_text='';this.last_key_suggestion=0;this.status=typeaheadpro.STATUS_BLOCK_ON_SOURCE_BOOTSTRAP;this.clear_placeholder();if(source){this.set_source(source);}
if(this.source){this.selectedindex=-1;if(this.focused){this._onfocus();this.show();this._onkeyup();this.set_class('');this.capture_submit();}}else{this.hide();}
onunloadRegister(this._onunload.bind(this),true);}
typeaheadpro.prototype.enumerate=false;typeaheadpro.prototype.interactive=false;typeaheadpro.prototype.changed=false;typeaheadpro.prototype.render_block_size=50;typeaheadpro.prototype.typeahead_icon_class=false;typeaheadpro.prototype.typeahead_icon_get_return=false;typeaheadpro.prototype.old_value=null;typeaheadpro.prototype.poll_handle=null;typeaheadpro.prototype.activate_poll_on_focus_events=false;typeaheadpro.prototype.suggestion_count=0;typeaheadpro.STATUS_IDLE=0;typeaheadpro.STATUS_WAITING_ON_SOURCE=1;typeaheadpro.STATUS_BLOCK_ON_SOURCE_BOOTSTRAP=2;typeaheadpro.prototype.clear_value_on_blur=true;typeaheadpro.prototype.max_results=0;typeaheadpro.prototype.max_display=10;typeaheadpro.prototype.allow_placeholders=false;typeaheadpro.prototype.auto_select=true;typeaheadpro.dirty_instances=function(){if(typeaheadpro.instances){typeaheadpro.instances.forEach(function(instance){instance.update_status(typeaheadpro.STATUS_BLOCK_ON_SOURCE_BOOTSTRAP);if(instance.source){instance.source.is_ready=false;}});}}
typeaheadpro.prototype.set_source=function(source){this.source=source;this.source.set_owner(this);this.status=typeaheadpro.STATUS_IDLE;this.cache={};this.last_search=0;this.suggestions=[];}
typeaheadpro.prototype.setup_anchor=function(){return this.obj;}
typeaheadpro.prototype.destroy=function(){if(this.typeahead_icon){DOM.remove(this.typeahead_icon);this.toggle_icon_list=function(){};}
this.clear_render_timeouts();if(!this.anchor_block&&this.anchor.nextSibling.tagName.toLowerCase()=='br'){DOM.remove(this.anchor.nextSibling);}
if(this.dropdown){DOM.remove(this.dropdown);}
if(this.obj){this.obj.onfocus=this.obj.onblur=this.obj.onkeyup=this.obj.onkeydown=this.obj.onkeypress=this.obj.typeahead=null;DOM.remove(this.obj);}
this.anchor=this.obj=this.dropdown=null;delete typeaheadpro.instances[this.instance];}
typeaheadpro.prototype.check_value=function(){if(this.obj){var new_value=this.obj.value;if(new_value!=this.old_value){this.dirty_results();this.old_value=new_value;if(this.old_value===''){this._onselect(false);}}}}
typeaheadpro.prototype._onkeyup=function(e){e=$E(e);this.last_key=e?e.keyCode:-1;if(this.key_down==this.last_key){this.key_down=0;}
var return_val=true;switch(this.last_key){case KEYS.ESC:this.selectedindex=-1;this._onselect(false);this.hide();e.stop();return_val=false;break;}
return return_val;}
typeaheadpro.prototype._onkeydown=function(e){e=$E(e);this.key_down=this.last_key=e?e.keyCode:-1;this.interactive=true;switch(this.last_key){case 33:case 34:case KEYS.UP:case KEYS.DOWN:this.log_data.kt+=1;if(typeaheadpro.should_simulate_keypress){this._onkeypress({keyCode:this.last_key});}
return false;case KEYS.TAB:this.log_data.kt+=1;this.select_suggestion(this.selectedindex);if(e.shiftKey){this.reverse_focus();}else{this.advance_focus();}
break;case KEYS.RETURN:this.log_data.sm='key_ret';if(this.select_suggestion(this.selectedindex)){this.hide();}
if(typeof(this.submit_keydown_return)!='undefined'){this.submit_keydown_return=this._onsubmit(this.get_current_selection());}
return this.submit_keydown_return;case 229:if(!this.poll_handle){this.poll_handle=setInterval(this.check_value.bind(this),100);}
break;default:this.log_data.kp+=1;setTimeout(bind(this,'check_value'),this.source.check_limit);}}
typeaheadpro.prototype._onkeypress=function(e){e=$E(e);var multiplier=1;this.last_key=e?event_get_keypress_keycode(e):-1;this.interactive=true;switch(this.last_key){case 33:multiplier=this.max_display;case KEYS.UP:this.set_suggestion(multiplier>1&&this.selectedindex>0&&this.selectedindex<multiplier?0:this.selectedindex-multiplier);this.last_key_suggestion=(new Date()).getTime();return false;case 34:multiplier=this.max_display;case KEYS.DOWN:if(trim(this.get_value())==''&&!this.enumerate){this.enumerate=true;this.results_text=null;this.dirty_results();}else{this.set_suggestion(this.suggestions.length<=this.selectedindex+multiplier?this.suggestions.length-1:this.selectedindex+multiplier);this.last_key_suggestion=(new Date()).getTime();}
return false;case KEYS.RETURN:var ret=null;if(typeof(this.submit_keydown_return)=='undefined'){ret=this.submit_keydown_return=this._onsubmit(this.get_current_selection());}else{ret=this.submit_keydown_return;delete this.submit_keydown_return;}
return ret;default:setTimeout(bind(this,'check_value'),this.source.check_limit);break;}
return true;}
typeaheadpro.prototype._onchange=function(){this.changed=true;}
typeaheadpro.prototype._onfound=function(obj){return this.onfound?this.onfound.call(this,obj):true;}
typeaheadpro.prototype._onsubmit=function(obj){if(this.onsubmit){var ret=this.onsubmit.call(this,obj);if(ret&&this.obj.form){if(!this.obj.form.onsubmit||this.obj.form.onsubmit()){this.obj.form.submit();}
return false;}
return ret;}else{this.advance_focus();return false;}}
typeaheadpro.prototype._onselect=function(obj){var call_select_handler=(function(){if(this.onselect){this.onselect.call(this,obj);}}).bind(this);if(obj.no_email){var async=new AsyncRequest().setData({action:'require',require_field:'email',uid:obj.i}).setMethod('GET').setReadOnly(true).setURI('/friends/ajax/external.php');new Dialog().setCloseHandler(function(typeahead){var email=this.getUserData();if(email){call_select_handler();}else{typeahead.set_value('');}}.bind(null,this)).setAsync(async).show();}else{call_select_handler();}}
typeaheadpro.prototype._onfocus=function(){if(!this.poll_handle&&this.activate_poll_on_focus_events){this.poll_handle=setInterval(this.check_value.bind(this),100);}
if(this.source){this.source.bootstrap();}
if(this.last_dropdown_mouse>(new Date()).getTime()-10||this.focused){return;}
if(this.changed){this.dirty_results();}
this.focused=true;this.changed=false;this.clear_placeholder();this.results_text='';this.set_class('');this.show();this.capture_submit();if(this.typeahead_icon){show(this.typeahead_icon);}}
typeaheadpro.prototype._onblur=function(event){if(this.last_dropdown_mouse&&this.last_dropdown_mouse>(new Date()).getTime()-10&&this.is_showing_suggestions()){Event.kill(event);setTimeout(function(){this.focus();}.bind(this),0);return false;}
if(!this.stop_hiding){if(this.showing_icon_list){this.toggle_icon_list(true);}}else{this.focus();return false;}
this.focused=false;if(this.changed&&!this.interactive){this.dirty_results();this.changed=false;return;}
if(!this.suggestions){this._onselect(false);}else if(this.selectedindex>=0&&this.auto_select){this.select_suggestion(this.selectedindex);}
this.hide();this.update_class();if(this.clear_value_on_blur&&!this.get_value()){var noinput=this.allow_placeholders?this.source.gen_noinput():'';this.set_value(noinput?noinput:'');this.set_class('typeahead_placeholder')}
if(this.poll_handle){clearInterval(this.poll_handle);this.poll_handle=null;}}
typeaheadpro.prototype._onunload=function(){if(typeaheadpro.instances[this.instance]){this.hide();}}
typeaheadpro.prototype.typeahead_icon_onclick=function(event){this.stop_hiding=true;this.focus();setTimeout(function(){this.toggle_icon_list();}.bind(this),50);Event.kill(event);return false;}
typeaheadpro.prototype.dropdown_onmousedown=function(event){this.last_dropdown_mouse=(new Date()).getTime();}
typeaheadpro.prototype.setup_typeahead_icon=function(){this.typeahead_parent=document.createElement('div');CSS.addClass(this.typeahead_parent,'typeahead_parent');this.typeahead_parent.appendChild(this.typeahead_icon);this.obj.parentNode.insertBefore(this.typeahead_parent,this.obj);}
typeaheadpro.prototype.mouse_set_suggestion=function(index){if(!this.visible){return;}
if((new Date()).getTime()-this.last_key_suggestion>50){this.set_suggestion(index);}}
typeaheadpro.prototype.capture_submit=function(){if(!typeaheadpro.should_check_missing_events)return;if((!this.captured_form||this.captured_substitute!=this.captured_form.onsubmit)&&this.obj.form){this.captured_form=this.obj.form;this.captured_event=this.obj.form.onsubmit;this.captured_substitute=this.obj.form.onsubmit=function(){return((this.key_down&&this.key_down!=KEYS.RETURN&&this.key_down!=KEYS.TAB)?this.submit_keydown_return:(this.captured_event?this.captured_event.apply(arguments,this.captured_form):true))?true:false;}.bind(this);}}
typeaheadpro.prototype.set_suggestion=function(index){this.stop_suggestion_select=false;if(!this.suggestions||this.suggestions.length<=index){return}
var old_node=this.get_suggestion_node(this.selectedindex);this.selectedindex=(index<=-1)?-1:index;var cur_node=this.get_suggestion_node(this.selectedindex);if(old_node){CSS.removeClass(old_node,'typeahead_selected');CSS.addClass(old_node,'typeahead_not_selected');}
if(cur_node){CSS.removeClass(cur_node,'typeahead_not_selected');CSS.addClass(cur_node,'typeahead_selected');}
this.recalc_scroll();this._onfound(this.get_current_selection());}
typeaheadpro.prototype.get_suggestion_node=function(index){var nodes=this.list.childNodes;return index==-1?null:nodes[Math.floor(index/this.render_block_size)].childNodes[index%this.render_block_size];}
typeaheadpro.prototype.get_current_selection=function(){return this.selectedindex==-1?false:this.suggestions[this.selectedindex];}
typeaheadpro.prototype.update_class=function(){if(this.suggestions&&this.selectedindex!=-1&&typeahead_source.flatten_string(this.get_current_selection().t)==typeahead_source.flatten_string(this.get_value())){this.set_class('typeahead_found');}else{this.set_class('');}}
typeaheadpro.prototype.select_suggestion=function(index){if(!this.stop_suggestion_select&&this.current_selecting!=index){this.current_selecting=index;}
var suggestion_found=true;if(!this.suggestions||index==undefined||index===false||this.suggestions.length<=index||index<0){this._onfound(false);this._onselect(false);this.selectedindex=-1;this.set_class('');suggestion_found=false;}else{this.selectedindex=index;var type=this.suggestions[index].ty;if(type!='web'&&type!='search'){this.set_value(this.suggestions[index].t);}
this.set_class('typeahead_found');this._onfound(this.suggestions[this.selectedindex]);this._onselect(this.suggestions[this.selectedindex]);}
if(!this.interactive){this.hide();this.blur();}
this.current_selecting=null;if(!suggestion_found&&this.ignore_invalid_suggestion){return false;}
return true;}
typeaheadpro.prototype.is_showing_suggestions=function(){return(this.suggestions)&&(this.suggestions.length>0);}
typeaheadpro.prototype.set_value=function(value){this.obj.value=value;}
typeaheadpro.prototype.get_value=function(){if(this.showing_icon_list&&this.old_typeahead_value!=this.obj.value){this.toggle_icon_list();}
if(this.want_icon_list){return this.typeahead_icon_get_return;}else{if(this.showing_icon_list){this.toggle_icon_list();}}
return this.obj.value;}
typeaheadpro.prototype.found_suggestions=function(suggestions,text,fake_data){if(!suggestions){suggestions=[];}
this.suggestion_count=suggestions.length;if(!fake_data){this.status=typeaheadpro.STATUS_IDLE;this.add_cache(text,suggestions);}
this.clear_render_timeouts();if(!this._allowDuplicateFoundCalls&&this.get_value()==this.results_text){return;}else if(!fake_data){this.results_text=typeahead_source.flatten_string(text);if(this.enumerate&&trim(this.results_text)!=''){this.enumerate=false;}}
var current_selection=-1;if(this.selectedindex!=-1){var selected_id=this.suggestions[this.selectedindex].i;for(var i=0,l=suggestions.length;i<l;i++){if(suggestions[i].i==selected_id){current_selection=i;break;}}}
if(current_selection==-1&&this.auto_select&&suggestions.length){current_selection=0;this._onfound(suggestions[0]);}
this.selectedindex=current_selection;this.suggestions=suggestions;if(!fake_data){this.real_suggestions=suggestions;}
if(suggestions.length){var html=[],blocks=Math.ceil(suggestions.length/this.render_block_size),must_render={},firstblock,samplenode=null;DOM.empty(this.list);for(var i=0;i<blocks;i++){this.list.appendChild(document.createElement('div'));}
if(current_selection>-1){firstblock=Math.floor(current_selection/this.render_block_size);must_render[firstblock]=true;if(current_selection%this.render_block_size>this.render_block_size/2){must_render[firstblock+1]=true;}else if(firstblock!=0){must_render[firstblock-1]=true;}}else{must_render[0]=true;}
for(var node in must_render){this.render_block(node);sample=this.list.childNodes[node].firstChild;}
this.show();if(blocks){var suggestion_height=sample.offsetHeight;this.render_timeouts=[];for(var i=1;i<blocks;i++){if(!must_render[i]){this.list.childNodes[i].style.height=suggestion_height*Math.min(this.render_block_size,suggestions.length-i*this.render_block_size)+'px';this.render_timeouts.push(setTimeout(this.render_block.bind(this,i),700+i*50));}}}}else{this.selectedindex=-1;this.set_message(this.status==typeaheadpro.STATUS_IDLE?this.source.gen_nomatch():this.source.gen_loading());this._onfound(false);}
this.recalc_scroll();if(!fake_data&&((this.results_text!=typeahead_source.flatten_string(this.get_value()))||this._allowDuplicateFoundCalls)){this.dirty_results();}}
typeaheadpro.prototype.render_block=function(block,stack){var suggestions=this.suggestions,selectedindex=this.selectedindex,text=this.get_value(),instance=this.instance,html=[],node=this.list.childNodes[block];for(var i=block*this.render_block_size,l=Math.min(suggestions.length,(block+1)*this.render_block_size);i<l;i++){html.push('<div class="');if(selectedindex==i){html.push('typeahead_suggestion typeahead_selected');}else{html.push('typeahead_suggestion typeahead_not_selected');}
if(i>0&&suggestions[i-1].o<0&&suggestions[i].o>=0){html.push(' typeahead_delimiter');}
html.push('" onmouseover="typeaheadpro.instances[',instance,'].mouse_set_suggestion(',i,')" ','onmousedown="var instance=typeaheadpro.instances[',instance,']; instance.select_suggestion(',i,');instance.hide();Event.kill(event);">',this.source.gen_html(suggestions[i],text),'</div>');}
node.innerHTML=html.join('');node.style.height='auto';CSS.addClass(node,'typeahead_suggestions');}
typeaheadpro.prototype.clear_render_timeouts=function(){if(this.render_timeouts){for(var i=0;i<this.render_timeouts.length;i++){clearTimeout(this.render_timeouts[i]);}
this.render_timeouts=null;}}
typeaheadpro.prototype.recalc_scroll=function(){var cn=this.list.firstChild;if(!cn){return;}
if(cn.childNodes.length>this.max_display){var last_child=cn.childNodes[this.max_display-1];var height=last_child.offsetTop+last_child.offsetHeight;this.dropdown.style.height=height+'px';var selected=this.get_suggestion_node(this.selectedindex);if(selected){var scrollTop=this.dropdown.scrollTop;if(selected.offsetTop<scrollTop){this.dropdown.scrollTop=selected.offsetTop;}else if(selected.offsetTop+selected.offsetHeight>height+scrollTop){this.dropdown.scrollTop=selected.offsetTop+selected.offsetHeight-height;}}
if(!typeaheadpro.should_use_overflow){this.dropdown.style.overflowY='scroll';this.dropdown.style.overflowX='hidden';}}else{this.dropdown.style.height='auto';if(!typeaheadpro.should_use_overflow){this.dropdown.style.overflowY='hidden';}}}
typeaheadpro.prototype.search_cache=function(text){return this.cache[typeahead_source.flatten_string(text)];}
typeaheadpro.prototype.add_cache=function(text,results){if(this.source.cache_results){this.cache[typeahead_source.flatten_string(text)]=results;}}
typeaheadpro.prototype.update_status=function(status){this.status=status;this.dirty_results();}
typeaheadpro.prototype.set_class=function(name){CSS.setClass(this.obj,(this.obj.className.replace(/typeahead_[^\s]+/g,'')+' '+name).replace(/ {2,}/g,' '));}
typeaheadpro.prototype.dirty_results=function(){if(!this.enumerate&&this.get_value().trim()==''){DOM.empty(this.list);this.results_text='';this.set_message(this.source.gen_placeholder());this.suggestions=[];this.selectedindex=-1;return;}else if(this.results_text==typeahead_source.flatten_string(this.get_value())){return;}else if(this.status==typeaheadpro.STATUS_BLOCK_ON_SOURCE_BOOTSTRAP){this.set_message(this.source.gen_loading());return;}
var time=(new Date).getTime();var updated=false;if(this.last_search<=(time-this.source.search_limit)&&this.status==typeaheadpro.STATUS_IDLE){updated=this.perform_search();}else{if(this.status==typeaheadpro.STATUS_IDLE){if(!this.search_timeout){this.search_timeout=setTimeout(function(){this.search_timeout=false;if(this.status==typeaheadpro.STATUS_IDLE){this.dirty_results();}}.bind(this),this.source.search_limit-(time-this.last_search));}}}
if(this.source.allow_fake_results&&this.real_suggestions&&!updated){var ttext=typeahead_source.tokenize(this.get_value()).sort(typeahead_source._sort);var fake_results=[];for(var i=0;i<this.real_suggestions.length;i++){if(typeahead_source.check_match(ttext,this.real_suggestions[i].t+' '+this.real_suggestions[i].n)){fake_results.push(this.real_suggestions[i]);}}
if(fake_results.length){this.found_suggestions(fake_results,this.get_value(),true);}else{this.selectedindex=-1;this.set_message(this.source.gen_loading());}}}
typeaheadpro.prototype.perform_search=function(){if(this.get_value()==this.results_text){return true;}
var results;if((results=this.search_cache(this.get_value()))===undefined&&!(results=this.source.search_value(this.get_value()))){this.status=typeaheadpro.STATUS_WAITING_ON_SOURCE;this.last_search=(new Date).getTime();return false;}
this.found_suggestions(results,this.get_value(),false);return true;}
typeaheadpro.prototype.set_message=function(text){this.clear_render_timeouts();if(text){this.list.innerHTML='<div class="typeahead_message">'+text+'</div>';this.reset_iframe();}else{this.hide();}
this.recalc_scroll();}
typeaheadpro.prototype.reset_iframe=function(){if(!typeaheadpro.should_use_iframe){return}
typeaheadpro.iframe.style.top=this.dropdown.style.top;typeaheadpro.iframe.style.left=this.dropdown.style.left;typeaheadpro.iframe.style.width=this.dropdown.offsetWidth+'px';typeaheadpro.iframe.style.height=this.dropdown.offsetHeight+'px';typeaheadpro.iframe.style.display='';}
typeaheadpro.prototype.advance_focus=function(){return this._move_focus(true);}
typeaheadpro.prototype.reverse_focus=function(){return this._move_focus(false);}
typeaheadpro.prototype._move_focus=function(move_forward){var inputs=this.obj.form?get_all_form_inputs(this.obj.form):get_all_form_inputs();var next_inputs=[];next_inputs._insert=move_forward?next_inputs.push:next_inputs.unshift;var should_insert=!move_forward;for(var i=0;i<inputs.length;i++){if(!move_forward&&inputs[i]==this.obj){should_insert=false;}else if(should_insert&&inputs[i].type!='hidden'&&inputs[i].tabIndex!=-1&&inputs[i].offsetParent){next_inputs._insert(inputs[i]);}else if(inputs[i]==this.obj){should_insert=true;}}
setTimeout(function(){for(var i=0;i<this.length;i++){try{if(this[i].offsetParent){this[i].focus();setTimeout(function(){try{this.focus();}catch(e){}}.bind(this[i]),0);return;}}catch(e){}}}.bind(next_inputs?next_inputs:[]),0);this.blur();this.hide();}
typeaheadpro.prototype.clear_placeholder=function(){if(this.obj.className.indexOf('typeahead_placeholder')!=-1){this.set_value('');this.set_class('');}}
typeaheadpro.prototype.clear=function(){this.set_value('');this.set_class('');this.selectedindex=-1;this.enumerate=false;this.dirty_results();}
typeaheadpro.prototype.hide=function(){if(this.stop_hiding){return;}
this.visible=false;this.dropdown.style.display='none';this.clear_render_timeouts();if(typeaheadpro.should_use_iframe){typeaheadpro.iframe.style.display='none';}}
typeaheadpro.prototype.show=function(){this.visible=true;if(this.focused){this.dropdown.style.top=elementY(this.anchor)+this.anchor.offsetHeight+'px';this.dropdown.style.left=elementX(this.anchor)+'px';this.dropdown.style.width=(this.anchor.offsetWidth-2)+'px';this.dropdown.style.display='';if(typeaheadpro.should_use_iframe){typeaheadpro.iframe.style.display='';this.reset_iframe();}}}
typeaheadpro.prototype.toggle_icon_list=function(no_focus){if(this.showing_icon_list){this.showing_icon_list=false;this.source.showing_icon_list=false;if(!no_focus){this.focus();}
CSS.removeClass(this.typeahead_icon,'on_selected');this.want_icon_list=false;this.showing_icon_list=false;this.stop_suggestion_select=true;if(this.obj){this.dirty_results();}}else{this.source.showing_icon_list=true;this.old_typeahead_value=this.obj.value;this.stop_suggestion_select=true;this.want_icon_list=true;this.dirty_results();this.focus();CSS.addClass(this.typeahead_icon,'on_selected');this.show();this.set_suggestion(-1);this.showing_icon_list=true;}
setTimeout(function(){this.stop_hiding=false;}.bind(this),100)}
typeaheadpro.prototype.focus=function(){this.obj.focus();}
typeaheadpro.prototype.blur=function(e){if(this.obj){this.obj.blur(e);}}
typeaheadpro.kill_typeahead=function(obj){if(obj.typeahead){if(!this.anchor_block){obj.parentNode.removeChild(obj.nextSibling);}
obj.parentNode.removeChild(obj.nextSibling);if(obj.typeahead.source){obj.typeahead.source=obj.typeahead.source.owner=null;}
obj.onfocus=obj.onblur=obj.onkeypress=obj.onkeyup=obj.onkeydown=obj.typeahead=null;}}

var FBML=(function(){var invoked_dialogs={};if(typeof typeaheadpro!='undefined'){function friendSelector(obj,source,properties){var idInput=document.createElement('INPUT');idInput.name=obj.getAttribute('idname');idInput.type='hidden';idInput.setAttribute('fb_protected','true');idInput.typeahead=this;if(obj.form){obj.form.appendChild(idInput);}
this._idInput=idInput;return this.parent.construct(this,obj,source,properties);}
friendSelector.extend('typeaheadpro');friendSelector.prototype.updateID=function(obj){if(obj.i){this._idInput.value=obj.i;}else if(obj.is){this._idInput.value=obj.is;}else{this._idInput.value='';}}
friendSelector.prototype.destroy=function(){this._idInput.parentNode.removeChild(this._idInput);this._idInput.typeahead=null;this._idInput=null;this.parent.destroy();}
friendSelector.prototype._onselect=function(obj){this.updateID(obj);this.parent._onselect(obj);}}else{friendSelector=null;}
var Contexts=new Object();function err(msg){if(window.console){window.console.log('Facebook FBML Mock AJAX ERROR: '+msg);}
return false;}
function attachCurlFromObject(ajax_params,container,pre_fn,post_fn){if(!ajax_params['url']){return err("no input with id url in form");}
if(!ajax_params['fb_sig_api_key']){return err("no input with id fb_api_key in form");}
if(pre_fn){pre_fn();}
attachCurlFromFormValues(ajax_params,container,post_fn);}
function attachCurlFromFormValues(ajax_params,container,post_fn){new AsyncRequest().setURI('/fbml/ajax/attach.php').setData(ajax_params).setMethod('POST').setHandler(function(response){if(post_fn){post_fn();}
if(!container.removed){set_inner_html(container,response.getPayload().html);}}.bind(this)).send();}
function attachFromPreview(context){if(context=='wall'){var attachments=wallAttachments;}else if(context=='message'){var attachments=inboxAttachments;}
if(attachments){var parent=ge(attachments.edit_id);var inputs=attachments.get_all_form_elements(parent);var params=Object();for(var i=0;i<inputs.length;i++){if(!(inputs[i].type=="radio"||inputs[i].type=="checkbox")||inputs[i].checked){params[inputs[i].name]=inputs[i].value;}}
params['context']=attachments.context;params['action']='edit';attachCurlFromFormValues(params,parent);}}
function clickRewriteAjax(app_id,loggedIn,targetId,url,form,loadingHTML){this.requireLogin(app_id,function(){return _clickRewriteAjax(targetId,url,form,loadingHTML);});return false;}
function _clickRewriteAjax(targetId,url,form,loadingHTML){var target=ge(targetId);if(!target){return err("target "+targetId+" not found");}
var hContext=target.getAttribute("fbcontext");var sContext=FBML.Contexts[hContext];if(!form){return err("You must either specify a clickrewriteform (an id) or use the clickrewrite attribute inside a form");}
var owner_id=typeof this.PROFILE_OWNER_ID=='undefined'?0:this.PROFILE_OWNER_ID;var post=serialize_form(form);post["fb_mockajax_context"]=sContext;post["fb_mockajax_context_hash"]=hContext;post["fb_mockajax_url"]=url;post["fb_target_id"]=owner_id;post["fb_mockajax_rewrite_id"]=targetId;new AsyncRequest().setURI('/fbml/mock_ajax_proxy.php').setMethod("POST").setFBMLForm().setData(post).setHandler(function(response){var ma=response.getPayload();if(ma.ok){set_inner_html(target,ma.html);}else{return err(ma["error_message"]);}
FBML.mockAjaxResponse=ma;return ma.ok;}.bind(this)).setErrorHandler(function(response){return err("Failed to successfully retrieve data from Facebook when making mock AJAX call to rewrite id "+targetId);}.bind(this)).send();if(loadingHTML){DOM.setContent(target,HTML(loadingHTML));}
return false;}
function clickToShow(targetId){return clickToSetDisplay(targetId,"");}
function clickToShowDialog(targetId){var dialog_elem=null;if(dialog_elem=ge(targetId)){var dialog_content=dialog_elem.parentNode.innerHTML;dialog_elem.id='dialog_invoked_'+dialog_elem.id;var content_width=parseInt(dialog_elem.getAttribute('fb_dialog_width'));var elem=dialog_elem.cloneNode(true);DOM.setContent(dialog_elem,'');var dialog=new Dialog();if(content_width)dialog.setContentWidth(content_width);dialog.setImmediateRendering(true).setStackable(true).setBody(dialog_content).setFullBleed(true).show();invoked_dialogs[dialog_elem.id]={'elem':elem,'dialog':dialog};}
return false;}
function closeDialogInvoked(targetId){var hidden_dialog_elem=null;var dialog_target_id='dialog_invoked_'+targetId;for(dialog_id in invoked_dialogs){if(hidden_dialog_elem=ge(dialog_id)){var old_id=hidden_dialog_elem.id.replace('dialog_invoked_','');var old_elem=null;if(old_elem=ge(old_id)){old_elem.id='dialog_closed_'+old_id;}
var parent=hidden_dialog_elem.parentNode;DOM.setContent(parent,'');parent.appendChild(invoked_dialogs[dialog_id].elem);invoked_dialogs[dialog_id].elem.id=old_id;}}
if(invoked_dialogs[dialog_target_id].dialog){invoked_dialogs[dialog_target_id].dialog.hide();}}
function clickToHide(targetId){return clickToSetDisplay(targetId,"none");}
function clickToToggle(targetId){var target=ge(targetId);if(!target){return err("Could not find target "+targetId);}else{target.style.display=(target.style.display=="none")?'':'none';return false;}}
function clickToSetDisplay(targetId,disp){var target=ge(targetId);if(!target){return err("Could not find target "+targetId);}else{target.style.display=disp;return false;}}
function clickToEnable(targetId){return clickToSetDisabled(targetId,'');}
function clickToDisable(targetId){return clickToSetDisabled(targetId,'disabled');}
function clickToSetDisabled(targetId,disabled){var target=ge(targetId);if(!target){return err("Could not find target "+targetId);}else{target.disabled=disabled;return false;}}
function fbmlLogin(app_id,form_id){new AsyncRequest().setURI('/ajax/api/tos.php').setData({app_id:app_id,grant_perm:1,profile_id:typeof PROFILE_OWNER_ID=='undefined'?0:PROFILE_OWNER_ID,api_key:$('api_key').value,auth_token:$('auth_token').value,connect:this.connectParams}).setHandler(bind(this,function(response){if(response.getPayload()){var sig_params=response.getPayload();if(form_id){var form=ge(form_id);addHiddenInputs(form,sig_params);if(this.loginContinuation){this.loginContinuation=this.loginContinuation.bind(form);}}
if(this.sendParams){if(this.loginContinuation){this.loginContinuation=this.loginContinuation.bind(null,sig_params);}}}
this.loginDialog&&this.loginDialog.hide();this.loginContinuation&&this.loginContinuation();this.loginCancellation=this.loginContinuation=this.loginDialog=null;})).send();}
function cancelLogin(){this.loginCancellation&&this.loginCancellation();this.loginDialog&&this.loginDialog.hide();this.loginContinuation=this.loginCancellation=this.loginDialog=null;}
function addHiddenInputs(form_obj,form_hidden_inputs){var i;for(i=form_obj.childNodes.length-1;i>=0;i--){if(form_obj.childNodes[i].name&&form_obj.childNodes[i].name.indexOf('fb_sig')==0){form_obj.removeChild(form_obj.childNodes[i]);}}
for(keyVar in form_hidden_inputs){DOM.appendContent(form_obj,$N('input',{name:keyVar,value:form_hidden_inputs[keyVar],type:'hidden'}));}}
function _promptPermissionHandler(form,button){this.grantedPerms=true;if(form){DOM.appendContent(form,$N('input',{name:'fb_perms_approved',value:'1',type:'hidden'}));}
Dialog.getCurrent()._submitForm('POST','/fbml/ajax/permissions.php',button);return false;}
function _promptPermissionCloseHandler(next_js,form){if(window.ApiExtendedPermissions&&window.ApiExtendedPermissions.closeHandler){window.ApiExtendedPermissions.closeHandler();}
if(this.grantedPerms){next_js();}
if(form){form.submit();}}
function promptPermission(app_id,perms,next_js,form){var async=new AsyncRequest().setURI('/fbml/ajax/permissions.php').setData({app_id:app_id,perms:perms});this.grantedPerms=false;var dialog=new Dialog().setAsync(async).setHandler(_promptPermissionHandler.bind(this,form)).setCloseHandler(_promptPermissionCloseHandler.bind(this,next_js,form)).show();}
function promptPermissionPro(app_id,perms,callback){var async=new AsyncRequest().setURI('/fbml/ajax/permissions.php').setData({app_id:app_id,perms_string:perms});this.grantedPerms=false;var self=this;var dialog=new Dialog().setAsync(async).setHandler(_promptPermissionHandler.bind(this,null)).setCloseHandler(function(){_promptPermissionCloseHandler.call(self,bagofholding,null);if(self.grantedPerms&&this.getUserData()){callback(this.getUserData().profile_id);}}).show();}
function showPermissionDialog(perms,callback,enableProfileSelector,profileSelectorIds){_callWithConnect(function(){FB.Connect.showPermissionDialog(perms,callback,enableProfileSelector,profileSelectorIds);});}
function createApplication(application_name,callback){_callWithConnect(function(){FB.Connect.createApplication(application_name,callback);});}
function streamPublish(user_message,attachment,action_links,target_id,user_message_prompt,callback,auto_publish){_callWithConnect(function(){FB.Connect.streamPublish(user_message,attachment,action_links,target_id,user_message_prompt,callback,auto_publish);});}
function _callWithConnect(callback){Arbiter.subscribe('PLATFORM_CANVAS_CONTROLLER_INIT',function(){FB.init({"apiKey":PlatformCanvasController.singleton.api_key,"xdChannelUrl":"/xd_receiver_v0.4.php"});FB.ensureInit(callback);});}
function showFeedDialog(app_id,template_bundle_id,template_data,body_general,target_id,continuation,user_message_prompt,user_message){var feed_data={template_id:template_bundle_id,template_data:template_data,body_general:body_general};var feedform;if(target_id&&(!hasArrayNature(target_id)||target_id.length>0)){if(hasArrayNature(target_id)){target_id=target_id[0];}
feedform=new TargetFeedForm().setTarget(target_id);}else{feedform=new FeedForm();}
feedform.setContinuation(continuation).setFeedData(feed_data).setAppId(app_id).setUserMessagePrompt(user_message_prompt).setUserMessage(user_message).show();}
function closeLoginDialog(){if(this.loginDialog){this.loginDialog.close();}}
function requireLogin(app_id,continuation,cancellation,form,send_params,need_connect_params){if(this.loginDialog){return;}
var form_id=form?form.id:'';this.sendParams=send_params;this.connectParams=need_connect_params?need_connect_params:false;this.loginDialog=new Dialog().setStackable(true).setClassName('api_confirmation');this.loginContinuation=continuation;this.loginCancellation=cancellation;new AsyncRequest().setURI('/ajax/api/tos.php').setData({login_form_id:form_id,app_id:app_id,profile_id:typeof PROFILE_OWNER_ID=='undefined'?0:PROFILE_OWNER_ID,next:document.location.href}).setReadOnly(true).setHandler(bind(this,function(continuation,response){var resp=response.getPayload();if(resp){if(resp.redirect){goURI(resp.uri);}else{this.loginDialog.setTitle(resp.title).setBody(resp.content).show();}}else{continuation();this.loginCancellation=null;this.loginContinuation=null;this.loginDialog=null;}},continuation)).send();}
function sendRequest(request_form,app_id,request_type,invite,preview,is_multi,prefill){var message='';if(!preview){if(is_multi){request_form.onSubmit=fsth.captured_event;}
message=$('message').value;}
if(prefill){var ids=[];ids.push(prefill);}else{var inputs=request_form.getElementsByTagName('input');var ids=[];var emails=[];for(var i=0;i<inputs.length;i++){if(inputs[i].getAttribute('fb_protected')=='true'&&(inputs[i].name=='ids[]'||inputs[i].name=='friend_selector_id')&&(inputs[i].type!='checkbox'||inputs[i].checked)){ids.push(inputs[i].value);}
else if(inputs[i].getAttribute('fb_protected')=='true'&&inputs[i].name=='emails[]'){emails.push(inputs[i].value);}}}
var data={app_id:app_id,to_ids:ids,to_emails:emails,request_type:request_type,invite:invite,content:request_form.getAttribute('content'),preview:preview,is_multi:is_multi,form_id:request_form.id,prefill:(prefill>0),message:message,donot_send:ge('donotsend')?$('donotsend').checked:false};var async=new AsyncRequest().setURI('/fbml/ajax/prompt_send.php').setData(data);if(preview){new Dialog().setClassName('req_dialog').setAsync(async).setStackable(true).show();}else{async.setHandler(function(result){request_form.submit();}).send();}
return false;}
function cancelDialog(elem){if(Dialog.getCurrent()){Dialog.getCurrent().hide();return;}
generic_dialog.get_dialog(elem).fade_out(100);}
function removePreviewRecipients(id){var span=$('sp'+id);var recipients_list=span.parentNode;recipients_list.removeChild(span);for(var i=0;i<recipients_list.childNodes.length;i++){if(recipients_list.childNodes[i].nodeName=='SPAN'){return false;}}
generic_dialog.get_dialog(recipients_list).fade_out(100);return false;}
function removeTokenizerRecipient(id,request_form,is_multi){var inputs=request_form.getElementsByTagName('input');for(var i=0;i<inputs.length;i++){if(((inputs[i].name=='emails[]')||(inputs[i].name=='ids[]'))&&(inputs[i].value==id)){delNode=inputs[i].parentNode.parentNode.parentNode.parentNode.parentNode.token;if(delNode){delNode.remove(false);}}}
removePreviewRecipients(id);return false;}
function removeReqRecipient(userid,request_form,is_multi){if(is_multi){if(fs.selected_ids[userid]){fs.unselect(userid);fs.force_reset();}
else{removeTokenizerRecipient(userid,request_form,is_multi);return false;}}else{var inputs=request_form.getElementsByTagName('input');for(var i=0;i<inputs.length;i++){if(inputs[i].getAttribute('fb_protected')=='true'&&inputs[i].value==userid){if(inputs[i].name=='ids[]'){if(inputs[i].type=='checkbox'){if(inputs[i].checked){inputs[i].click();}}else{inputs[i].parentNode.parentNode.parentNode.parentNode.parentNode.token.remove(true);}}else if(inputs[i].name=='friend_selector_id'){inputs[i].typeahead.select_suggestion(false);inputs[i].typeahead.set_value('');inputs[i].value='';}}}}
removePreviewRecipients(userid);return false;}
var stripLinks=function(container){var links=container.getElementsByTagName('a');for(var i=0;i<links.length;i++){if(!links[i].getAttribute('flash')){addEventBase(links[i],'click',Event.kill);}}
var forms=container.getElementsByTagName('form');for(var i=0;i<forms.length;i++){forms[i].onsubmit=function(){return false;};}}
var enforceStyle=function(element,styles){for(styleName in styles){element.style[styleName]=styles[styleName];}}
var registerFBJSBridge=function(appid,bridgeHash){var sb=fbjs_sandbox.getSandbox(appid);if(sb){sb.setBridgeHash(bridgeHash);}}
var submitForm=function(form,event){if(form.onsubmit){try{if(!form.onsubmit(event)){return;}}catch(e){if(e.message=="Object doesn't support this action"){if(!form.onsubmit()){return;}}else{throw e;}}}
form.submit();}
return{friendSelector:friendSelector,Contexts:Contexts,attachCurlFromObject:attachCurlFromObject,attachFromPreview:attachFromPreview,clickRewriteAjax:clickRewriteAjax,clickToShow:clickToShow,clickToShowDialog:clickToShowDialog,clickToHide:clickToHide,clickToEnable:clickToEnable,clickToDisable:clickToDisable,clickToToggle:clickToToggle,closeDialogInvoked:closeDialogInvoked,createApplication:createApplication,sendRequest:sendRequest,removeTokenizerRecipient:removeTokenizerRecipient,removeReqRecipient:removeReqRecipient,cancelDialog:cancelDialog,addHiddenInputs:addHiddenInputs,fbmlLogin:fbmlLogin,cancelLogin:cancelLogin,requireLogin:requireLogin,closeLoginDialog:closeLoginDialog,showFeedDialog:showFeedDialog,streamPublish:streamPublish,promptPermission:promptPermission,promptPermissionPro:promptPermissionPro,showPermissionDialog:showPermissionDialog,stripLinks:stripLinks,enforceStyle:enforceStyle,registerFBJSBridge:registerFBJSBridge,submitForm:submitForm};})();

FriendSuggesterDialog={_dialog:null,_close_handler:null,_newcomer:null,show:function(newcomer,friend_added,close_handler,ref){this._close_handler=close_handler||bagofholding;friend_added=friend_added||false;this._newcomer=newcomer;var async=new AsyncRequest().setURI('/ajax/friend_suggester.php').setData({newcomer:newcomer,friend_added:friend_added}).setContextData('clicktype','Suggest a Friend',ref==="profile_others");this._dialog=new Dialog().setAsync(async).show();},cancelMultiselect:function(){this._dialog.hide();this._close_handler(false,null);},submitMultiselect:function(){var data=serialize_form($('friend_suggester_popup_form'));if(!data['ids']){try{fs.notice_show(_tx("You have not selected any friends. Select friends by clicking on their pictures."),true);}catch(ex){this.cancelMultiselect();Util.error('SUGGEST: could not warn user submitting an empty selection: %x',ex);}
return false;}
data['suggest']=1;var async=new AsyncRequest().setURI('/ajax/friend_suggester.php').setData(data);var dialog=new Dialog().setAsync(async);dialog.setCloseHandler(this._close_handler.bind(null,true,dialog));dialog.show();}};

Base64={_initialized:false,_chars:null,_inv:null,_init:function(){Base64._chars=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","+","/"];Base64._inv={"A":0,"B":1,"C":2,"D":3,"E":4,"F":5,"G":6,"H":7,"I":8,"J":9,"K":10,"L":11,"M":12,"N":13,"O":14,"P":15,"Q":16,"R":17,"S":18,"T":19,"U":20,"V":21,"W":22,"X":23,"Y":24,"Z":25,"a":26,"b":27,"c":28,"d":29,"e":30,"f":31,"g":32,"h":33,"i":34,"j":35,"k":36,"l":37,"m":38,"n":39,"o":40,"p":41,"q":42,"r":43,"s":44,"t":45,"u":46,"v":47,"w":48,"x":49,"y":50,"z":51,"0":52,"1":53,"2":54,"3":55,"4":56,"5":57,"6":58,"7":59,"8":60,"9":61,"+":62,"/":63};Base64._initialized=true;},encodeObject:function(obj){return Base64.encode(JSON.encode(obj));},decodeObject:function(base64Data){return JSON.decode(Base64.decode(base64Data));},_toUtf8:function(s){var result='';for(var i=0;i<s.length;i++){var c=s.charCodeAt(i);if(c<0x80){result+=String.fromCharCode(c);}else{if(c<0x800){result+=String.fromCharCode((c>>6)|0xc0);}else{if(c<0x10000){result+=String.fromCharCode((c>>12)|0xe0);}else{result+=String.fromCharCode((c>>18)|0xf0);result+=String.fromCharCode(((c>>12)&0x3f)|0x80);}
result+=String.fromCharCode(((c>>6)&0x3f)|0x80);}
result+=String.fromCharCode((c&0x3f)|0x80);}}
return result;},_fromUtf8:function(s){var result='';for(var i=0;i<s.length;i++){var c=s.charCodeAt(i);if(c<0x80){result+=String.fromCharCode(c);}else if(c<0xc0){}else if(c<0xe0&&s.length>i+1){result+=String.fromCharCode(((c&0x1f)<<6)|(s.charCodeAt(++i)&0x3f));}else if(c<0xf0&&s.length>i+2){result+=String.fromCharCode(((c&0x0f)<<12)|((s.charCodeAt(++i)&0x3f)<<6)|(s.charCodeAt(++i)&0x3f));}else if(c<0xf8&&s.length>i+3){result+=String.fromCharCode(((c&0x07)<<18)|((s.charCodeAt(++i)&0x3f)<<12)|((s.charCodeAt(++i)&0x3f)<<6)|(s.charCodeAt(++i)&0x3f));}}
return result;},encode:function(s){if(!Base64._initialized){Base64._init();}
s=Base64._toUtf8(s);var r='';var p='';var c=s.length%3;if(c>0){for(;c<3;c++){p+='=';s+="\0";}}
for(c=0;c<s.length;c+=3){var n=(s.charCodeAt(c)<<16)+(s.charCodeAt(c+1)<<8)+s.charCodeAt(c+2);n=[(n>>>18)&63,(n>>>12)&63,(n>>>6)&63,n&63];r+=Base64._chars[n[0]]+Base64._chars[n[1]]+Base64._chars[n[2]]+Base64._chars[n[3]];}
return r.substring(0,r.length-p.length)+p;},decode:function(s){if(!Base64._initialized){Base64._init();}
s=s.replace(new RegExp('[^'+Base64._chars.join("")+'=]','g'),"");var p=(s.charAt(s.length-1)=='='?(s.charAt(s.length-2)=='='?'AA':'A'):"");var r="";s=s.substr(0,s.length-p.length)+p;for(var c=0;c<s.length;c+=4){var n=(Base64._inv[s.charAt(c)]<<18)+(Base64._inv[s.charAt(c+1)]<<12)+
(Base64._inv[s.charAt(c+2)]<<6)+Base64._inv[s.charAt(c+3)];r+=String.fromCharCode((n>>>16)&255,(n>>>8)&255,n&255);}
r=r.substring(0,r.length-p.length);return Base64._fromUtf8(r);}};

function UIPagelet(element,src,context_data,data){this._id=element||null;this._element=ge(element||$N('div'));this._src=src||null;this._context_data=context_data||{};this._data=data||{};this._handler=bagofholding;return this;}
copy_properties(UIPagelet.prototype,{getElement:function(){return this._element;},setHandler:function(handler){this._handler=handler;return this;},go:function(src,data){if(arguments.length>=2||typeof src=='string'){this._src=src;this._data=data||{};}else if(arguments.length==1){this._data=src;}
this.refresh();return this;},refresh:function(reattach){var handler=function(response){if(reattach&&this._id){this._element=ge(this._id);}
this._element.setContent(HTML(response.getPayload()));this._handler();}.bind(this);new AsyncRequest().setURI(this._src).setMethod('GET').setData({data:JSON.encode(merge(this._context_data,this._data))}).setReadOnly(true).setHandler(handler).setOption('bundle',true).send();return this;}});

function UISelectList(){this._callback=bagofholding;this.container=$N('div',{className:'UISelectList clearfix'});this._mode=UISelectList.MULTI_SELECT_MODE;this._inputName='UISelectList_name_'+gen_unique();this._items={};}
copy_properties(UISelectList,{MULTI_SELECT_MODE:1,SINGLE_SELECT_MODE:2,MULTI_SELECT_MODE_CHECKED_CLASS_NAME:'UISelectList_check_Checked',SINGLE_SELECT_MODE_CHECKED_CLASS_NAME:'UISelectList_radio_Checked'});UISelectList.prototype={setMode:function(mode){if(mode!=UISelectList.MULTI_SELECT_MODE&&mode!=UISelectList.SINGLE_SELECT_MODE){Util.error('invalid mode %s passed to UISelectList.selectMode',mode);return this;}
if(!is_empty(this._items)){Util.error("You have to set `mode' before adding any items to "+"UISelectList");return this;}
this._mode=mode;return this;},setCallback:function(fn){this._callback=fn;return this;},addItem:function(label,checked,key){var item={label:label,checked:checked,key:key};this._renderItem(item);return this;},addItems:function(items){for(var i=0;i<items.length;i++){this.addItem(items[i].label,items[i].checked,items[i].key);}
return this;},clearItems:function(){this._items={};DOM.empty(this.container);return this;},setSelected:function(key,selected){if(this._items[key]){var input=this._items[key].input;input.checked=!selected;input.click();}
return this;},getElement:function(){return this.container;},reset:function(){for(var key in this._items){var input=this._items[key].input;var label=this._items[key].label;input.checked=input.defaultChecked;CSS.conditionClass(label,this._getCheckedClass(),input.checked);}},_renderItem:function(item){var input=$N('input',{type:this._getInputType(),name:this._inputName});input.checked=item.checked;input.defaultChecked=item.checked;var link=$N('a',{className:'UISelectList_Label',href:'#'},item.label);if(item.checked){link.addClass(this._getCheckedClass());}
link.listen('click',Event.kill);link.listen('mouseup',this._linkClicked.bind(this,input));input.listen('click',this._clicked.bind(this,input,link,item.key));this.container.appendContent($N('div',{className:'UISelectList_Item'},[input,link]));item.input=input;item.label=link;this._items[item.key]=item;},_getInputType:function(){if(this._mode==UISelectList.MULTI_SELECT_MODE){return'checkbox';}
return'radio';},_getCheckedClass:function(){if(this._mode==UISelectList.MULTI_SELECT_MODE){return UISelectList.MULTI_SELECT_MODE_CHECKED_CLASS_NAME;}
return UISelectList.SINGLE_SELECT_MODE_CHECKED_CLASS_NAME;},_linkClicked:function(input,e){input.click();},_clicked:function(input,label,key,e){var clickedElemChecked;if(this._mode==UISelectList.SINGLE_SELECT_MODE){for(var k in this._items){var checked=input==this._items[k].input;CSS.conditionClass(this._items[k].label,this._getCheckedClass(),checked);}
clickedElemChecked=true;}else{clickedElemChecked=input.checked;CSS.conditionClass(label,this._getCheckedClass(),input.checked);}
this._callback(clickedElemChecked,key);$E(e).stop();}};

function Scroller(canvas){this.canvas=canvas;this.scrollZone=50;this.velocity=100;this.coefficient=1;}
Scroller.findScrollParent=function(el){var sty;el=el.parentNode;while(el){if(el.scrollHeight!=el.offsetTop){sty=CSS.getStyle(el,'overflowY');if(sty=='scroll'||sty=='auto'){return el;}}
el=el.parentNode;}
return document.body;}
Scroller.prototype.activate=function(){this.activate=bagofholding;this.event=Event.listen(document,'mousemove',this._onmousemove.bind(this));this.interval=this._intervalHandler.bind(this).recur(50);this.cursor=null;}
Scroller.prototype.deactivate=function(){delete this.activate;this.event&&this.event.remove();this.event=null;clearInterval(this.interval);}
Scroller.prototype._onmousemove=function(event){this.cursor=new Vector2.getEventPosition(event);}
Scroller.prototype._intervalHandler=function(){if(!this.cursor){return;}
var viewport=this.canvas==document.body?Rect.getViewportBounds():Rect(this.canvas);var rect=new Rect(this.cursor.y-viewport.t,viewport.r-this.cursor.x,viewport.b-this.cursor.y,this.cursor.x-viewport.l);var scrollBy=new Vector2(0,0);if(rect.t<rect.b&&rect.t<this.scrollZone){scrollBy.y=-this.scrollZone+rect.t;}else if(rect.b<this.scrollZone){scrollBy.y=this.scrollZone-rect.b;}
scrollBy.y=this._doMath(scrollBy.y);if(rect.l<rect.r&&rect.l<this.scrollZone){scrollBy.x=-this.scrollZone+rect.l;}else if(rect.r<this.scrollZone){scrollBy.x=this.scrollZone-rect.r;}
scrollBy.x=this._doMath(scrollBy.x);if(scrollBy.x||scrollBy.y){scrollBy.scrollElementBy(this.canvas);if(document.body==this.canvas){this.cursor=this.cursor.add(scrollBy);}
Arbiter.inform('scroller/scroll',this.cursor);}}
Scroller.prototype._doMath=function(diff){return Math.floor(Math.pow((diff>=0?Math.min(diff,this.scrollZone):Math.max(diff,-this.scrollZone))/this.scrollZone*this.velocity,this.coefficient));}

var Drag={};Drag.currentDraggable=null;Drag.grab=function(draggable){if(Drag.currentDraggable){Drag._onmouseup();}
draggable.lastDragOver=null;Drag.attachDragEvents();Drag.currentDraggable=draggable;}
Drag.attachDragEvents=function(){document.onselectstart=function(){document.onselectstart=null;return false;}
if(Drag.dragEventsAttached){return;}
Drag.dragEventsAttached=true;Arbiter.subscribe('scroller/scroll',Drag._onmousemove);Event.listen(document,'mousemove',Drag._onmousemove);Event.listen(document,'mouseup',Drag._onmouseup);}
Drag.droppables={};Drag.addDroppable=function(namespace,droppable){(Drag.droppables[namespace]=Drag.droppables[namespace]||[]).push(droppable);}
Drag.removeDroppable=function(namespace,droppable){Drag.droppables[namespace]=Drag.droppables[namespace].filter(function(a){return a!=droppable;});}
Drag._onmousemove=function(event,cursor){if(!Drag.currentDraggable){return;}
var cursorPosition=cursor||Vector2.getEventPosition(event),currentDraggable=Drag.currentDraggable,droppables=Drag.droppables[currentDraggable.namespace];if(currentDraggable.namespace&&currentDraggable.active&&droppables){var zIndexesDict={};droppables.each(function(droppable){zIndexesDict[droppable.zIndex]=droppable.zIndex;});var zIndexes=[];for(var i in zIndexesDict){zIndexes.push(zIndexesDict[i]);}
zIndexes.sort();var lastDragOver=currentDraggable.lastDragOver,currentDragOver=null;for(var z=zIndexes.length;z>=0;z--){if(lastDragOver&&lastDragOver.dom!=null&&lastDragOver.zIndex==zIndexes[z]&&lastDragOver.pointInside(cursorPosition)){currentDragOver=lastDragOver;break;}else{for(var i=0;i<droppables.length;i++){if(zIndexes[z]!=droppables[i].zIndex){continue;}
if(lastDragOver!=droppables[i]&&currentDraggable.dom!=droppables[i].dom&&droppables[i].pointInside(cursorPosition)){currentDragOver=droppables[i];z=-1;break;}}}}
if(currentDragOver&&currentDragOver!=lastDragOver){currentDragOver.ondragover(currentDraggable);}
if(currentDragOver){currentDragOver.ondragmove(currentDraggable,cursorPosition.sub(Vector2.getElementPosition(currentDragOver.dom)));}
currentDraggable.lastDragOver=currentDragOver;}
Drag.currentDraggable._onmousemove(cursorPosition);}
Drag._onmouseup=function(e){document.onselectstart=null;if(Drag.currentDraggable){Drag.currentDraggable._ondrop();Drag.currentDraggable=null;}}
function Draggable(element){if(!element){throw new Error('Element should be a DOM node');}
if(this==window){if(element instanceof Array){var collection=[];element.each(function(instance){collection.push(new Draggable(instance));});return new Collection(Draggable,collection);}else{return new Draggable(element);}}else{this.data={};this.handles=[];this.dom=element;this.boundingBox=null;this.addHandle(this.dom);}}
Draggable.prototype.destroy=function(){this.handles.each(function(handle){this.removeHandle(handle.obj);}.bind(this));this.data=this.dom=null;}
Draggable.prototype._onclick=function(event){if(this.active){return Event.kill(event);}}
Draggable.prototype._ongrab=function(vector){this.ongrab();if(!this.scroller){this.scroller=new Scroller(Scroller.findScrollParent(this.dom));}
this.scroller.activate();if(this.active){if(!this.oldPosition){this.oldPosition=this.dom.style.position;}
this.dom.style.position=this.absolute?'absolute':'relative';vector.sub(this.cursorPositionVector).setElementPosition(this.dom);}}
Draggable.prototype._onmousedown=function(event){var target=$E(event).getTarget();if(DOM.isNode(target,['input','select','textarea','object','embed'])){return true;}
var vector=Vector2.getEventPosition(event);this.draggableInitialVector=Vector2.getElementPosition(this.dom);this.cursorPositionVector=vector.sub(this.draggableInitialVector);Drag.grab(this,event);if(this.gutter){this.cursorInitialVector=vector;}else{this._setActive(true);this._ongrab(vector);}
return Event.kill(event);}
Draggable.prototype._onmousemove=function(vector){if(!this.active){if(vector.distanceTo(this.cursorInitialVector)>=this.gutter){this._setActive(true);this._ongrab(vector);}}
if(this.active){var sub_vector=Vector2.getElementPosition(this.dom).sub(new Vector2(parseInt(this.dom.style.left?this.dom.style.left:CSS.getStyle(this.dom,'left'),10)||0,parseInt(this.dom.style.top?this.dom.style.top:CSS.getStyle(this.dom,'top'),10)||0));var vector2=vector.sub(sub_vector).sub(this.cursorPositionVector);if(this.boundingBox){var box=Rect.newFromVectors(vector2,Vector2.getElementDimensions(this.dom));box=box.boundWithin(this.boundingBox);vector2=box.getPositionVector(box);if(this.boundingBox.w()==0){var final_vector=new Vector2(this.draggableInitialVector.x,vector2.y,'document');}else if(this.boundingBox.h()==0){var final_vector=new Vector2(vector2.x,this.draggableInitialVector.y,'document');}else{var final_vector=vector2;}}else{var final_vector=vector2;}
final_vector.setElementPosition(this.dom);this.ondrag(vector);}}
Draggable.prototype._ondrop=function(){this.scroller&&this.scroller.deactivate();if(this.active){(function(){this._setActive(false);}).bind(this).defer();this.ondrop();if(this.lastDragOver){this.lastDragOver.ondrop(this);}}}
Draggable.prototype.killDrag=function(){this._setActive(false);Drag._onmouseup();}
Draggable.prototype.setBoundingBox=function(bounding_box){this.boundingBox=bounding_box;return this;}
Draggable.prototype.resetPosition=function(){this.dom.style.position=this.oldPosition;this.oldPosition=null;this.dom.style.left=null;this.dom.style.top=null;return this;}
Draggable.prototype.setUseAbsolute=function(absolute){this.absolute=absolute;return this;}
Draggable.prototype.ondrag=bagofholding;Draggable.prototype.setDragHandler=function(func){this.ondrag=func;return this;}
Draggable.prototype.ongrab=bagofholding;Draggable.prototype.setGrabHandler=function(func){this.ongrab=func;return this;}
Draggable.prototype.ondrop=bagofholding;Draggable.prototype.setDropHandler=function(func){this.ondrop=func;return this;}
Draggable.prototype.gutter=0;Draggable.prototype.setGutter=function(gutter){this.gutter=gutter;return this;}
Draggable.prototype.setNamespace=function(namespace){this.namespace=namespace;return this;}
Draggable.prototype.handles=null;Draggable.prototype.addHandle=function(handle){if(this.handles.length==1&&this.handles[0].obj==this.dom){this.removeHandle(this.dom);}
this.handles.push({obj:handle,evt:[Event.listen(handle,'mousedown',this._onmousedown.bind(this)),Event.listen(handle,'click',this._onclick.bind(this)),Event.listen(handle,'drag',Event.kill),Event.listen(handle,'selectstart',Event.kill)]});return this;}
Draggable.prototype.removeHandle=function(handle){this.handles=this.handles.filter(function(a){if(a.obj!=handle){return true;}else{a.evt.each(function(evt){evt.remove();});return false;}});}
Draggable.prototype.getDOM=function(){return this.dom;}
Draggable.prototype.setKey=function(key,value){this.data[key]=value;return this;}
Draggable.prototype.getKey=function(key){return this.data[key];}
Draggable.prototype._setActive=function(state){this.dom.activeDrag=this.active=state;for(var i=0;i<this.handles.length;i++){this.handles[i].obj.activeDrag=state;}}
function Droppable(element){if(!element){throw new Error('Element should be a DOM node');}
if(this==window){if(element instanceof Array){var collection=[];element.each(function(instance){collection.push(new Droppable(instance));});return new Collection(Droppable,collection);}else{return new Droppable(element);}}else{this.data={};this.dom=element;this.namespace=null;}}
Droppable.prototype.destroy=function(){if(this.namespace){Drag.removeDroppable(this.namespace,this);}
this.data=this.dom=null;}
Droppable.prototype.setNamespace=function(namespace){if(this.namespace){Drag.removeDroppable(namespace,this);}
this.namespace=namespace;Drag.addDroppable(namespace,this);return this;}
Droppable.prototype.zIndex=0;Droppable.prototype.setZIndex=function(index){this.zIndex=index;return this;}
Droppable.prototype.pointInside=function(vector){var position=Vector2.getElementPosition(this.dom);return position.x<=vector.x&&this.dom.offsetWidth+position.x>vector.x&&position.y<=vector.y&&this.dom.offsetHeight+position.y>vector.y;}
Droppable.prototype.ondragover=bagofholding;Droppable.prototype.setDragOverHandler=function(func){this.ondragover=func;return this;}
Droppable.prototype.ondragmove=bagofholding;Droppable.prototype.setDragMoveHandler=function(func){this.ondragmove=func;return this;}
Droppable.prototype.ondrop=bagofholding;Droppable.prototype.setDropHandler=function(func){this.ondrop=func;return this;}
Droppable.prototype.getDOM=Draggable.prototype.getDOM;Droppable.prototype.setKey=Draggable.prototype.setKey;Droppable.prototype.getKey=Draggable.prototype.getKey;

function SortableGroup(){this.namespace='sortable'+(++SortableGroup.instanceCount);this.draggables={};this.droppables={};this.sortables={};this.linkedGroups=[];this.linkedGroups.onlinkjump=bagofholding;this.rootNode=null;this.boundingBox=null;this.neverEmpty=false;this.hasEmptyMessage=false;this.isDroppable=true;this.anchor=null;}
SortableGroup.instanceCount=0;SortableGroup.prototype.gutter=15;SortableGroup.prototype.setBoundingBox=function(bounding_box){this.boundingBox=bounding_box;for(var k in this.draggables){this.draggables[k].setBoundingBox(this.boundingBox);}
return this;}
SortableGroup.prototype.setDroppable=function(val){this.isDroppable=val;return this;}
SortableGroup.prototype._initializeAdded=function(key,obj){if(this.rootNode===null){this.rootNode=obj.parentNode;if(!this.linkedGroups.placeholder){this.linkedGroups.placeholder=this.placeholder=$N(obj.tagName,{className:'dragPlaceholder',style:{padding:'0px'}});}else{this.placeholder=this.linkedGroups.placeholder;}}else if(this.rootNode!=obj.parentNode){throw new Error('All sortables of a collection must share the same parentNode');}
if(key in this.draggables){throw new Error('All sortables must have a unique key');}}
SortableGroup.prototype.addSortable=function(key,obj,handle){this._initializeAdded(key,obj);this.sortables[key]=obj;this.draggables[key]=(new Draggable(obj)).setNamespace(this.namespace).setGutter(this.gutter).setUseAbsolute(true).setGrabHandler(this.grabHandler.bind(this,key)).setDropHandler(this.dropHandler.bind(this,key)).setKey('key',key).setBoundingBox(this.boundingBox);if(handle){this.draggables[key].addHandle(handle);}
this.droppables[key]=(new Droppable(obj)).setNamespace(this.namespace).setDragOverHandler(this._dragOverHandlerShim.bind(null,this,key));return this;}
SortableGroup.prototype.addEmptyMessage=function(obj,root){var key='placeholder';if(obj.parentNode!=root){root.appendContent(obj);}
this._initializeAdded(key,obj);this.hasEmptyMessage=true;this.sortables[key]=obj;this.droppables[key]=(new Droppable(obj)).setNamespace(this.namespace).setDragOverHandler(this._dragOverHandlerShim.bind(null,this,key));return this;}
SortableGroup.prototype.setNeverEmpty=function(neverEmpty){this.neverEmpty=neverEmpty;}
SortableGroup.prototype.link=function(sortgroup){sortgroup.linkedGroups=this.linkedGroups;if(!this.linkedGroups.length){this.linkedGroups.push(this);}
this.linkedGroups.push(sortgroup);for(var i=0;i<this.linkedGroups.length;i++){if(this.linkedGroups[i].namespace!=this.namespace){this.linkedGroups[i].namespace=this.namespace;for(var j in this.linkedGroups[i].droppables){this.linkedGroups[i].droppables[j].setNamespace(this.namespace);this.linkedGroups[i].draggables[j].setNamespace(this.namespace);}}}
return this;}
SortableGroup.prototype.getOrder=function(){if(!this.rootNode){return[];}
var ret=[],childNodes=this.rootNode.childNodes;for(var i=0;i<childNodes.length;i++){for(var k in this.sortables){if(this.sortables[k]==childNodes[i]){ret.push(k);break;}}}
return ret;}
SortableGroup.prototype.migrateLinkedSortable=function(key){for(var i=0;i<this.linkedGroups.length;i++){if(key in this.linkedGroups[i].draggables){this.sortables[key]=this.linkedGroups[i].sortables[key];this.draggables[key]=this.linkedGroups[i].draggables[key];this.draggables[key].setGrabHandler(this.grabHandler.bind(this,key)).setDropHandler(this.dropHandler.bind(this,key));this.droppables[key]=this.linkedGroups[i].droppables[key];this.droppables[key].setDragOverHandler(this._dragOverHandlerShim.bind(null,this,key));delete this.linkedGroups[i].sortables[key];delete this.linkedGroups[i].draggables[key];delete this.linkedGroups[i].droppables[key];return true;}}
return false;}
SortableGroup.prototype.setLinkJumpHandler=function(func){this.linkedGroups.onlinkjump=func;return this;}
SortableGroup.prototype.onorderchange=bagofholding;SortableGroup.prototype.setOrderChangeHandler=function(func){this.onorderchange=func;return this;}
SortableGroup.prototype.ongrabcallback=bagofholding;SortableGroup.prototype.setGrabCallback=function(func){this.ongrabcallback=func;return this;}
SortableGroup.prototype._checkLastRemaining=function(draggable){var oneNodeLeft=this.hasEmptyMessage?2:1;return this.neverEmpty&&this.rootNode.childNodes.length==oneNodeLeft;}
SortableGroup.prototype.grabHandler=function(draggableKey){if(this._checkLastRemaining()){this.draggables[draggableKey].killDrag();return;}
CSS.setClass(this.placeholder,this.sortables[draggableKey].className);CSS.addClass(this.placeholder,'droppable_placeholder');CSS.addClass(this.sortables[draggableKey],'drag');Vector2.getElementDimensions(this.sortables[draggableKey]).setElementDimensions(this.placeholder);this.rootNode.insertBefore(this.placeholder,this.sortables[draggableKey]);this.ongrabcallback(draggableKey);if(!this.isDroppable){var sortable=this.sortables[draggableKey];this.anchor=sortable.nextSibling;if(!this.anchor){this.anchor=$N('div');sortable.parentNode.appendChild(this.anchor);}}}
SortableGroup.prototype.ondropcallback=bagofholding;SortableGroup.prototype.setDropCallback=function(func){this.ondropcallback=func;return this;}
SortableGroup.prototype.dropHandler=function(draggableKey){if(this._checkLastRemaining()){this.draggables[draggableKey].resetPosition();return;}
CSS.removeClass(this.sortables[draggableKey],'drag');this.draggables[draggableKey].resetPosition();this.rootNode.insertBefore(this.sortables[draggableKey],this.placeholder);this.rootNode.removeChild(this.placeholder);for(var i=0;i<this.linkedGroups.length;i++){if(this.linkedGroups[i].anchor){delete this.linkedGroups[i].anchor;}}
this.ondropcallback(draggableKey);this.onorderchange();}
SortableGroup.prototype._dragOverHandlerShim=function(that,droppableKey,draggable){that.dragOverHandler(droppableKey,draggable.getKey('key'));};SortableGroup.prototype.dragOverHandler=function(droppableKey,draggableKey){if(!this.isDroppable&&!this.anchor){return;}
var jumped=false;if(!(draggableKey in this.draggables)){if(!this.migrateLinkedSortable(draggableKey)){throw new Error('Draggable dropped onto a foreign droppable!');}
jumped=true;}
var before=true,childNodes=this.rootNode.childNodes,draggable=this.sortables[draggableKey],droppable=this.sortables[droppableKey];if(!this.anchor){for(var i=0;i<childNodes.length;i++){if(childNodes[i]==droppable){break;}else if(childNodes[i]==draggable){before=false;break;}}}else{droppable=this.anchor;}
if(before||this.anchor){this.rootNode.insertBefore(this.placeholder,droppable);}else{this.rootNode.insertBefore(this.placeholder,droppable.nextSibling);}
this.rootNode.insertBefore(draggable,this.placeholder);this.ondragover(draggable,droppable);if(jumped){this.linkedGroups.onlinkjump.call(this,draggableKey);}}
SortableGroup.prototype.ondragover=bagofholding;SortableGroup.prototype.setDragOverCallback=function(func){this.ondragover=func;return this;}
SortableGroup.prototype.destroy=function(){for(var k in this.droppables){this.droppables[k].destroy();}
for(var k in this.draggables){this.draggables[k].destroy();}
this.droppables=this.draggables=this.rootNode=null;this.linkedGroups.remove(this);for(var i=0;i<this.linkedGroups.length;i++){this.linkedGroups[i].linkedGroups=this.linkedGroups;}}
SortableGroup.prototype.removeSortable=function(key){if(key in this.sortables){this.draggables[key].destroy();this.droppables[key].destroy();delete this.draggables[key];delete this.droppables[key];delete this.sortables[key];}}
SortableGroup.prototype.keyExists=function(key){return this.sortables[key];}

function typeahead_source(){}
typeahead_source.prototype.cache_results=false;typeahead_source.prototype.enumerable=false;typeahead_source.prototype.allow_fake_results=false;typeahead_source.prototype.search_limit=10;typeahead_source.prototype.check_limit=10;typeahead_source.prototype.bootstrap=bagofholding;typeahead_source.check_match=function(search,value){value=typeahead_source.tokenize(value);for(var i=0,il=search.length;i<il;i++){if(search[i].length){var found=false;for(var j=0,jl=value.length;j<jl;j++){if(value[j].length>=search[i].length&&value[j].substring(0,search[i].length)==search[i]){found=true;value[j]='';break;}}
if(!found){return false;}}}
return true;}
typeahead_source.tokenize=function(text,capture,noflatten){return(noflatten?text:typeahead_source.flatten_string(text)).split(capture?typeahead_source.normalizer_regex_capture:typeahead_source.normalizer_regex);}
typeahead_source.normalizer_regex_str='(?:(?:^| +)["\'.\\-]+ *)|(?: *[\'".\\-]+(?: +|$)|[@_]| +)';typeahead_source.normalizer_regex=new RegExp(typeahead_source.normalizer_regex_str,'g');typeahead_source.normalizer_regex_capture=new RegExp('('+typeahead_source.normalizer_regex_str+')','g');typeahead_source.flatten_string=function(text){if(!typeahead_source.accents){typeahead_source.accents={a:/\u0430|\u00e0|\u00e1|\u00e2|\u00e3|\u00e4|\u00e5/g,b:/\u0431/g,c:/\u0446|\u00e7/g,d:/\u0434|\u00f0/g,e:/\u044d|\u0435|\u00e8|\u00e9|\u00ea|\u00eb/g,f:/\u0444/g,g:/\u0433/g,h:/\u0445/g,i:/\u0438|\u00ec|\u00ed|\u00ee|\u00ef/g,j:/\u0439/g,k:/\u043a/g,l:/\u043b/g,m:/\u043c/g,n:/\u043d|\u00f1/g,o:/\u043e|\u00f8|\u00f6|\u00f5|\u00f4|\u00f3|\u00f2/g,p:/\u043f/g,r:/\u0440/g,s:/\u0441/g,t:/\u0442/g,u:/\u0443|\u044e|\u00fc|\u00fb|\u00fa|\u00f9/g,v:/\u0432/g,y:/\u044b|\u00ff|\u00fd/g,z:/\u0437/g,ae:/\u00e6/g,oe:/\u0153/g,ts:/\u0446/g,ch:/\u0447/g,sh:/\u0448/g,ya:/\u044f/g}}
text=text.toLowerCase();for(var i in typeahead_source.accents){text=text.replace(typeahead_source.accents[i],i);}
return text;}
typeahead_source.prototype.set_owner=function(obj){this.owner=obj;if(this.is_ready){this.owner.update_status(typeaheadpro.STATUS_IDLE);}}
typeahead_source.prototype.ready=function(){if(this.owner&&!this.is_ready){this.is_ready=true;this.owner.update_status(typeaheadpro.STATUS_IDLE);}else{this.is_ready=true;}}
typeahead_source.highlight_found=function(result,search){var html=[];resultv=typeahead_source.tokenize(result,true,true);result=typeahead_source.tokenize(result,true);search=typeahead_source.tokenize(search);search.sort(typeahead_source._sort);for(var i=0,il=resultv.length;i<il;i++){var found=false;for(var j=0,jl=search.length;j<jl;j++){if(search[j]&&result[i].lastIndexOf(search[j],0)!=-1){html.push('<em>',htmlspecialchars(resultv[i].substring(0,search[j].length)),'</em>',htmlspecialchars(resultv[i].substring(search[j].length,resultv[i].length)));found=true;break;}}
if(!found){html.push(htmlspecialchars(resultv[i]));}}
return html.join('');}
typeahead_source._sort=function(a,b){return b.length-a.length;}
typeahead_source.prototype.gen_nomatch=function(){return this.text_nomatch!=null?this.text_nomatch:_tx("No matches found");}
typeahead_source.prototype.gen_loading=function(){return this.text_loading!=null?this.text_loading:_tx("Loading...");}
typeahead_source.prototype.gen_placeholder=function(){return this.text_placeholder!=null?this.text_placeholder:_tx("Start typing...");}
typeahead_source.prototype.gen_noinput=function(){return this.text_noinput!=null?this.text_noinput:_tx("Start typing...");}
typeahead_source.prototype.onselect_not_found=function(){if(typeof this.tokenizer._ontokennotfound!='undefined'){this.tokenizer._ontokennotfound(this.obj.value);}
if(typeof this.tokenizer.onselect!='undefined'){return this.tokenizer.onselect();}}

function static_source(){this.values=null;this.index=null;this.index_includes_hints=false;this.exclude_ids={};this.parent.construct(this);}
static_source.extend('typeahead_source');static_source.prototype.enumerable=true;static_source.prototype.filter_excluded=function(values){return values.filter((function(value){return!this.exclude_ids[value.i];}).bind(this));}
static_source.prototype.build_index=function(){var index=[];var values=this.values;var gen_id=values.length&&typeof values[0].i=='undefined';for(var i=0,il=values.length;i<il;i++){var tokens=typeahead_source.tokenize(values[i].t);for(var j=0,jl=tokens.length;j<jl;j++){index.push({t:tokens[j],o:values[i]});}
if(this.index_includes_hints&&values[i].s){var tokens=typeahead_source.tokenize(values[i].s);for(var j=0,jl=tokens.length;j<jl;j++){index.push({t:tokens[j],o:values[i]});}}
if(gen_id){values[i].i=i;}}
index.sort(function(a,b){return(a.t==b.t)?0:(a.t<b.t?-1:1)});this.index=index;this.ready();}
static_source.prototype._sort_text_obj=function(a,b){if(a.e&&!b.e){return 1;}
if(!a.e&&b.e){return-1;}
return a.t.localeCompare(b.t);}
static_source.prototype.search_value=function(text){if(!this.is_ready){return;}
var results;if(text==''){results=this.values;}else{var ttext=typeahead_source.tokenize(text).sort(typeahead_source._sort);var index=this.index;var lo=0;var hi=this.index.length-1;var p=Math.floor(hi/2);while(lo<=hi){if(index[p].t>=ttext[0]){hi=p-1;}else{lo=p+1;}
p=Math.floor(lo+((hi-lo)/2));}
var results=[];var stale_keys={};var check_ignore=typeof _ignoreList!='undefined';for(var i=lo;i<index.length&&index[i].t.lastIndexOf(ttext[0],0)!=-1;i++){var elem_id=index[i].o.flid?index[i].o.flid:index[i].o.i;if(typeof stale_keys[elem_id]!='undefined'){continue;}else{stale_keys[elem_id]=true;}
if((!check_ignore||!_ignoreList[elem_id])&&!this.exclude_ids[elem_id]&&(ttext.length==1||typeahead_source.check_match(ttext,index[i].o.t))){results.push(index[i].o);}}}
results.sort(this._sort_text_obj.bind(this));if(this.owner&&this.owner.max_results){results=results.slice(0,this.owner.max_results);}
return results;}
static_source.prototype.set_exclude_ids=function(ids){this.exclude_ids=ids;}

function search_friend_source(get_param,manual_init){this.get_param=get_param;this.parent.construct(this);if(!manual_init){this.initialize();}}
search_friend_source.extend('static_source');search_friend_source.prototype.text_noinput=search_friend_source.prototype.text_placeholder=search_friend_source.prototype.text_nomatch='';search_friend_source.prototype.cache_results=true;search_friend_source.prototype.updated_pics={};search_friend_source.prototype._allowed_types=null;search_friend_source.prototype.initialize=function(callback){var current_time=(new Date()).getTime();new AsyncRequest().setMethod('GET').setReadOnly(true).setURI('/ajax/typeahead_search.php?'+this.get_param).setErrorHandler(function(){}).setTransportErrorHandler(function(){}).setHandler(function(response){var payload=response.getPayload();this.values=payload.entries;this.build_index.bind(this).defer();search_typeahead_log(this.udata,'getdata',current_time);var now_minus_5_min=((new Date()).getTime()/1000)-60*5;if(payload.gen_time<now_minus_5_min){new AsyncRequest().setMethod('GET').setReadOnly(true).setURI('/ajax/recent_pics.php').setData({ref_time:payload.gen_time}).setErrorHandler(function(){}).setTransportErrorHandler(function(){}).setHandler(function(response){this.updated_pics=response.getPayload().updated_pics;}.bind(this)).send();}
if(callback){callback();}}.bind(this)).send();};search_friend_source.url_templates={};search_friend_source.loaded_images={};search_friend_source.TYPES={USER:'u',CONNECTION:'c',FOLLOWER:'fl',PAGE:'p',APP:'a',GROUP:'g',EVENT:'e',SEARCH:'search',WEB:'web'};search_friend_source.prototype.build_index=function(){var history=this.history?this.history.entries:undefined;if(history!=undefined){this.values=this.values.each(function(value){value.o=history[value.i]!=undefined?history[value.i]:value.o;return value;});}
this.parent.build_index();};search_friend_source.image_load=function(image_elm,insertion_time,user_id){var current_time=(new Date()).getTime();search_friend_source.loaded_images[user_id]=true;if((current_time-insertion_time)<100){CSS.setOpacity(image_elm,1);}else{animation(image_elm).to('opacity',1).duration(100).go();}};search_friend_source.prototype.gen_html=function(friend,highlight){var icon_url=friend.it;if(!icon_url&&friend.ty&&search_friend_source.url_templates[friend.ty]){icon_url=search_friend_source.url_templates[friend.ty].icon;}
if(this.updated_pics[friend.i]){icon_url=this.updated_pics[friend.i];}
switch(friend.ty){case search_friend_source.TYPES.USER:case search_friend_source.TYPES.CONNECTION:case search_friend_source.TYPES.PAGE:if(!icon_url){return['<div>',typeahead_source.highlight_found(friend.t,highlight),'</div><div><small>',friend.n||'&nbsp;','</small></div>'].join('');}else{if(!search_friend_source.loaded_images[friend.i]){var insertion_time=(new Date()).getTime();var attrs=sprintf('onload="search_friend_source.image_load(this, %d, %d);" style="opacity:0;filter:alpha(opacity=0);"',insertion_time,friend.i);}
return['<img ',attrs,' alt="" src="',icon_url,'"/>','<div class="with_pic"><span>',typeahead_source.highlight_found(friend.t,highlight),'</span><small>',friend.n||'&nbsp;','</small></div>'].join('');}
break;case search_friend_source.TYPES.SEARCH:return['<div class="app"><div class="icon" style="background-image: url(',icon_url,')">&nbsp;</div>','<span>',friend.t,'</span></div>'].join('');break;default:return['<div class="app clearfix"><div class="icon" style="background-image: url(',icon_url,')">&nbsp;</div>','<span>',typeahead_source.highlight_found(friend.t,highlight),'</span></div>'].join('');}};search_friend_source.prototype.allowTypes=function(type_arr){this._allowed_types=type_arr;return this;};search_friend_source.prototype.search_value=function(text,searching){var results;if(this.owner.enableSearchResults){if(this._searchQueryTimer){clearTimeout(this._searchQueryTimer);this._searchQueryTimer=null;}}
var enough_tokens=false;var tokens=typeahead_source.tokenize(text);for(var i=0;i<tokens.length;i++){if(tokens[i]!=''){enough_tokens=true;break;}}
if(enough_tokens){this.owner.less_than_n_chars=false;results=this.parent.search_value(text);}else if(this.is_ready){this.owner.less_than_n_chars=true;results=[];}
var non_people_search=(results&&results.length)?false:true;if(results){for(var i=0;i<results.length;i++){if((results[i].ty!=search_friend_source.TYPES.USER)&&(results[i].ty!=search_friend_source.TYPES.CONNECTION)){non_people_search=true;break;}}}
if(this.owner.enableSearchResults){if(!searching&&!(results&&results.length>(this.search_limit-1))){this._searchQueryTimer=setTimeout(this.search_value.bind(this,text,true),300);if(!results||(results&&results.length==0)){this.owner.set_message(_tx("Searching Facebook..."));this.owner.show();return;}
this.owner.loadingResults=true;}
if(searching&&!(results&&results.length>(this.search_limit-1))){new AsyncRequest().setMethod('GET').setReadOnly(true).setData({q:text}).setURI('/ajax/universal_search.php').setHandler(function(text,results,response){if(this._searchQueryTimer){return;}
this.owner.loadingResults=false;var new_results=response.payload.results;if(!results){var results=[];}
for(var i=0;i<new_results.length;i++){if(results.length>(this.search_limit-1)){break;}
results.push(new_results[i]);}
this.owner.found_suggestions(results,text,false);}.bind(this,text,results)).send();return;}}
if(results&&non_people_search&&enough_tokens&&search_friend_source.WEBSEARCH_USER){results.push({t:_tx("Search Facebook"),ty:search_friend_source.TYPES.SEARCH,i:text});results.push({t:_tx("Search the Web"),ty:search_friend_source.TYPES.WEB,i:text});}
if(results&&this._allowed_types){results=results.filter(function(result){return this._allowed_types.contains(result.ty);}.bind(this));}
return results;};search_friend_source.prototype._sort_text_obj=function(a,b){var history=this.history?this.history.entries:undefined;if(history!=undefined){a.o=history[a.i]||a.o;b.o=history[b.i]||b.o;}
if(a.o!=b.o){return a.o-b.o;}
return a.t.localeCompare(b.t);};search_friend_source.WEBSEARCH_USER=false;window.ADVANCED_SEARCH_TYPEAHEAD=false;

PresenceMessage={STARTED:'presence/started',SHUTDOWN:'presence/shutdown',RESTARTED:'presence/restarted',WINDOW_RESIZED:'presence/window-resized',TAB_CLOSED:'presence/tab-closed',TAB_OPENED:'presence/tab-opened',PRESENCE_UPDATER_READY:'presence/updater-ready',getAppMessageType:function(appid,event_name){return'presence/app_message:'+appid+':'+event_name;},getArbiterMessageType:function(event_name){return'presence/message:'+event_name;}};

function search_selector_onfound(result){var n;if(!(n=ge('n'))){return;}
n.value=result?result.i:-1;}
function search_result_selector_onsubmit(result){$('search').init.value=ge('filter_init')?$('filter_init').value:'';$('search').sf.value=ge('filter_sf')?$('filter_sf').value:'';$('search').submit();this.hide();this.advance_focus();}
function search_logged_ajax(data){new AsyncSignal('/ajax/search_log.php',data).send();}
function search_log_2nd_action(data){new AsyncRequest().setURI('/ajax/search_log_2nd_action.php').setMethod('POST').setReadOnly(true).setContextData('clicktype',data).setContextData('source','profile_from_search').setHandler(function(){}).send();}
function search_typeahead_log(data,evt,timestart){if(!data){return;}
var moddata=data;if(evt){moddata.evt=evt;}
moddata.t=(new Date()).getTime();if(timestart){moddata.dt=moddata.t-timestart;}
new AsyncSignal('/ajax/typeahead_log.php',moddata).send();}
var SearchDashboardKeyboardHandler=function(){return{right_arrow_key_handler:function(event,type){if(event.ctrlKey){if($('search_dashboard_next_session').href){goURI($('search_dashboard_next_session').href);}}else{if($('search_dashboard_next_query').href){goURI($('search_dashboard_next_query').href);}}
return false;},left_arrow_key_handler:function(event,type){if(event.ctrlKey){if($('search_dashboard_prev_session').href){goURI($('search_dashboard_prev_session').href);}}else{if($('search_dashboard_prev_query').href){goURI($('search_dashboard_prev_query').href);}}
return false;},right_arrow_key_filter:function(event,type){return true;}}}();

function search_validate(search_input_id){var search_input=$(search_input_id);var value=search_input.value;if(!value.match(/^\s*$/)&&value!=search_input.getAttribute('placeholder')){return true;}
search_input.focus();return false;}

if(typeof deconcept=="undefined")var deconcept={};if(typeof deconcept.util=="undefined")deconcept.util={};if(typeof deconcept.SWFObjectUtil=="undefined")deconcept.SWFObjectUtil={};deconcept.SWFObject=function(swf,id,w,h,ver,c,quality,xiRedirectUrl,redirectUrl,detectKey){if(!document.getElementById){return;}
this.DETECT_KEY=detectKey?detectKey:'detectflash';this.skipDetect=deconcept.util.getRequestParameter(this.DETECT_KEY);this.params={};this.variables={};this.attributes=[];this.fallback_html='';this.fallback_js_fcn=function(){};if(swf){this.setAttribute('swf',swf);}
if(id){this.setAttribute('id',id);}
if(w){this.setAttribute('width',w);}
if(h){this.setAttribute('height',h);}
this.installedVer=deconcept.SWFObjectUtil.getPlayerVersion();if(ver){if(!(ver instanceof Array)){ver=[ver];}
var x;ver.each(function(ii){x=new deconcept.PlayerVersion(ii.toString().split('.'));if(x.major==this.installedVer.major){this.setAttribute('version',x);return;}else if(!this.getAttribute('version')||x.major<this.getAttribute('version').major){this.setAttribute('version',x);}}.bind(this));}
if(!window.opera&&document.all&&this.installedVer.major>7){if(!deconcept.unloadSet){deconcept.SWFObjectUtil.prepUnload=function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){};window.attachEvent("onunload",deconcept.SWFObjectUtil.cleanupSWFs);}
window.attachEvent("onbeforeunload",deconcept.SWFObjectUtil.prepUnload);deconcept.unloadSet=true;}}
if(c){this.addParam('bgcolor',c);}
var q=quality?quality:'high';this.addParam('quality',q);this.setAttribute('useExpressInstall',false);this.setAttribute('doExpressInstall',false);var xir=(xiRedirectUrl)?xiRedirectUrl:window.location;this.setAttribute('xiRedirectUrl',xir);this.setAttribute('redirectUrl','');if(redirectUrl){this.setAttribute('redirectUrl',redirectUrl);}}
deconcept.SWFObject.prototype={useExpressInstall:function(path){this.xiSWFPath=!path?"/swf/expressinstall.swf":path;this.setAttribute('useExpressInstall',true);},setAttribute:function(name,value){this.attributes[name]=value;},getAttribute:function(name){return this.attributes[name]||"";},addParam:function(name,value){this.params[name]=value;},getParams:function(){return this.params;},addVariable:function(name,value){this.variables[name]=value;},getVariable:function(name){return this.variables[name]||"";},getVariables:function(){return this.variables;},getVariablePairs:function(){var variablePairs=[];var key;var variables=this.getVariables();for(key in variables){variablePairs[variablePairs.length]=key+"="+variables[key];}
return variablePairs;},getSWFHTML:function(){var swfNode="";if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","PlugIn");this.setAttribute('swf',this.xiSWFPath);}
swfNode='<embed type="application/x-shockwave-flash" src="'+htmlspecialchars(this.getAttribute('swf'))+'" width="'+htmlspecialchars(this.getAttribute('width'))+'" height="'+htmlspecialchars(this.getAttribute('height'))+'" style="'+htmlspecialchars(this.getAttribute('style')||"")+'"';swfNode+=' id="'+htmlspecialchars(this.getAttribute('id'))+'" name="'+htmlspecialchars(this.getAttribute('id'))+'" ';var params=this.getParams();for(var key in params){swfNode+=htmlspecialchars(key)+'="'+htmlspecialchars(params[key])+'" ';}
var pairs=this.getVariablePairs().join("&");if(pairs.length>0){swfNode+='flashvars="'+pairs+'"';}
swfNode+='/>';}else{if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX");this.setAttribute('swf',this.xiSWFPath);}
swfNode='<object id="'+this.getAttribute('id')+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+this.getAttribute('width')+'" height="'+this.getAttribute('height')+'" style="'+(this.getAttribute('style')||"")+'">';swfNode+='<param name="movie" value="'+this.getAttribute('swf')+'" />';var params=this.getParams();for(var key in params){swfNode+='<param name="'+key+'" value="'+params[key]+'" />';}
var pairs=this.getVariablePairs().join("&");if(pairs.length>0){swfNode+='<param name="flashvars" value="'+pairs+'" />';}
swfNode+="</object>";}
return swfNode;},write:function(elementId){if(this.getAttribute('useExpressInstall')){var expressInstallReqVer=new deconcept.PlayerVersion([6,0,65]);if(this.installedVer.versionIsValid(expressInstallReqVer)&&!this.installedVer.versionIsValid(this.getAttribute('version'))){this.setAttribute('doExpressInstall',true);this.addVariable("MMredirectURL",escape(this.getAttribute('xiRedirectUrl')));document.title=document.title.slice(0,47)+" - Flash Player Installation";this.addVariable("MMdoctitle",document.title);}}
var n=(typeof elementId=='string')?document.getElementById(elementId):elementId;if(this.skipDetect||this.getAttribute('doExpressInstall')||this.installedVer.versionIsValid(this.getAttribute('version'))){n.innerHTML=this.getSWFHTML();return true;}else{if(this.getAttribute('redirectUrl')!=""){document.location.replace(this.getAttribute('redirectUrl'));}
need_version=this.getAttribute('version').major+'.'+this.getAttribute('version').minor+'.'+this.getAttribute('version').rev;have_version=this.installedVer.major+'.'+this.installedVer.minor+'.'+this.installedVer.rev;this.fallback_js_fcn(have_version,need_version);n.innerHTML=this.fallback_html;}
return false;}}
deconcept.SWFObjectUtil.getPlayerVersion=function(){var PlayerVersion=new deconcept.PlayerVersion([0,0,0]);if(navigator.plugins&&navigator.mimeTypes.length){for(k=0;k<navigator.plugins.length;k++){try{x=navigator.plugins[k];if(x.name=='Shockwave Flash'){PlayerVersion_tmp=new deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."));if(typeof PlayerVersion=='undefined'||PlayerVersion_tmp.major>PlayerVersion.major||(PlayerVersion_tmp.major==PlayerVersion.major&&(PlayerVersion_tmp.minor>PlayerVersion.minor||(PlayerVersion_tmp.minor==PlayerVersion.minor&&PlayerVersion_tmp.rev>PlayerVersion.rev)))){PlayerVersion=PlayerVersion_tmp;}}}catch(honk){}}}else if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){var axo=1;var counter=3;while(axo){try{counter++;axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+counter);PlayerVersion=new deconcept.PlayerVersion([counter,0,0]);}catch(e){axo=null;}}}else{try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");}catch(e){try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");PlayerVersion=new deconcept.PlayerVersion([6,0,21]);axo.AllowScriptAccess="always";}catch(e){if(PlayerVersion.major==6){return PlayerVersion;}}
try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}catch(e){}}
if(axo!=null){PlayerVersion=new deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));}}
return PlayerVersion;}
deconcept.PlayerVersion=function(arrVersion){this.major=arrVersion[0]!=null?parseInt(arrVersion[0]):0;this.minor=arrVersion[1]!=null?parseInt(arrVersion[1]):0;this.rev=arrVersion[2]!=null?parseInt(arrVersion[2]):0;}
deconcept.PlayerVersion.prototype.versionIsValid=function(fv){if(this.major<fv.major)return false;if(this.major>fv.major)return true;if(this.minor<fv.minor)return false;if(this.minor>fv.minor)return true;if(this.rev<fv.rev)return false;return true;}
deconcept.util={getRequestParameter:function(param){var q=document.location.search||document.location.hash;if(param==null){return q;}
if(q){var pairs=q.substring(1).split("&");for(var i=0;i<pairs.length;i++){if(pairs[i].substring(0,pairs[i].indexOf("="))==param){return pairs[i].substring((pairs[i].indexOf("=")+1));}}}
return"";}}
deconcept.SWFObjectUtil.cleanupSWFs=function(){var objects=document.getElementsByTagName("OBJECT");for(var i=objects.length-1;i>=0;i--){objects[i].style.display='none';for(var x in objects[i]){if(typeof objects[i][x]=='function'){objects[i][x]=function(){};}}}}
if(!document.getElementById&&document.all){document.getElementById=function(id){return document.all[id];}}
var getQueryParamValue=deconcept.util.getRequestParameter;var FlashObject=deconcept.SWFObject;var SWFObject=deconcept.SWFObject;var flash_update_dialog_shown=false;function spawn_flash_update_dialog(have_version,need_version){if(flash_update_dialog_shown){return;}
flash_update_dialog_shown=true;new AsyncRequest().setURI('/ajax/flash_update_dialog.php').setData({have_version:have_version,need_version:need_version}).setHandler(function(response){message_data=response.getPayload();new Dialog().setClassName('errorDialog').setTitle(message_data.title).setBody(message_data.body).setButtons([Dialog.CLOSE]).show();}).send();}
function setFlashFallback(id,required_versions){var fallback=ge(id);var current_version=deconcept.SWFObjectUtil.getPlayerVersion();var min_version;required_versions.each(function(ii){ii=new deconcept.PlayerVersion(ii.toString().split('.'));if(ii.major==current_version.major){min_version=ii;return;}else if(typeof min_version=='undefined'||ii.major<min_version.major){min_version=ii;}}.bind(this));if(fallback&&current_version.major>0){var have_version_str=current_version.major+'.'+current_version.minor+'.'+current_version.rev;var need_version_str=min_version.major+'.'+min_version.minor+'.'+min_version.rev;fallback.innerHTML=_tx("Flash {required-version} is required to view this content. Your current version is {current-version}. Please download the latest Flash Player.",{'required-version':need_version_str,'current-version':have_version_str});}}
function getFlashPlayer(){goURI('http://get.adobe.com/flashplayer');return false;}

if (window.Bootloader) { Bootloader.done(["js\/8yz5wj6bru4osoww.pkg.js"]); }
/*    HTTP Host:  static.ak.fbcdn.net                                          */
/*    Generated:  September 9th 2009 11:41:57 AM PDT                           */
/*      Machine:  10.16.139.103                                                */
/*       Source:  Local Cache                                                  */
/*     Location:  rsrc:4:czpo5ia0                                              */
/*       Locale:  nu_ll                                                        */
/*         Path:  js/e9lv8s25etwsgg0c.pkg.js                                   */


var SHAREID_VIDEO_PREVIEW=-1;var share_last_comment={p:null,t:null};function share_internal_config(params){if(share_last_comment.p==params){params+='&c='+escapeURI(share_last_comment.t?share_last_comment.t:'');}else{share_last_comment.p=params;}
var async=new AsyncRequest().setURI('/ajax/share_dialog.php?'+params).setMethod('GET').setReadOnly(true);var dialog=new Dialog().setAsync(async).setStackable(true).show();return false;}

function share_show_error(params){var dialog=new Dialog().setTitle(_tx("Invalid URL")).setBody(_tx("Sorry, you have entered an invalid URL.")).setButtons(Dialog.OK).show();return false;}
function share_is_shareable(url){return(/(?:https?:\/\/)?\w+\.\w+/.test(url));}
function share_internal_bookmarklet(){if(/http:\/\/[^\/]*?\/posted?\.php/.test(document.location.href)){var dialog=new Dialog().setClassName('share_congratulations').setTitle(_tx("Share")).setBody('<div class="UIMessageBox status">'+'<h2>'+_tx("You've successfully installed the bookmarklet.")+'</h2>'+'<p class="sub_message">'+_tx("Click it on an external site to share it with your friends.")+'</p>'+'</div>').setButtons(Dialog.OK).show();}else{throw 0;}}
function share_show_delete_dialog(context,href){ProfileStream.hideConfirmation(_share_delete_clicked.curry(context,href));return false;}
function _share_delete_clicked(context,href){var classToFind='UIIntentionalStory';while(context.parentNode&&!CSS.hasClass(context,classToFind)){context=context.parentNode;}
if(!CSS.hasClass(context,classToFind)){return false;}
new AsyncRequest().setURI(href).send();DOM.remove(context);}
function share_composer_method(obj,method){if(method!="send"){obj.focus();}
var tabs=obj.parentNode.parentNode.getElementsByTagName('a');for(var i=0;i<tabs.length;i++){CSS.removeClass(tabs[i],'selected');}
CSS.addClass(obj,'selected');while(!CSS.hasClass(obj,'share_composer')&&obj){obj=obj.parentNode;}
if(!obj){Util.error("Could not find share composer");return true;}
CSS.setClass(obj,'share_composer share_status_'+method);return false;}
function share_send_onsubmit(obj){return _share_onsubmit_to('ids','send',obj);}
function share_wallpost_onsubmit(obj){return _share_onsubmit_to('wall_id','wall',obj);}
function share_post_onsubmit(obj,privacy_widget){return _share_onsubmit('post',obj,privacy_widget);}
function _share_onsubmit_to(ids,post_action,obj){var ids=$(ids);if(!ids.tokenizer||ids.tokenizer.count_names()==0){new ErrorDialog().showError(_tx("This field is required."),_tx("You must specifiy at least one recipient for this message."));return false;}
return _share_onsubmit(post_action,obj);}
function _share_onsubmit(post_action,obj,privacy_widget)
{var post=serialize_form(obj);post.action=post_action;var inputs=obj.getElementsByTagName('input');for(var i=0;i<inputs.length;i++){inputs[i].disabled=true;}
var inputs=obj.getElementsByTagName('textarea');for(var i=0;i<inputs.length;i++){inputs[i].disabled=true;}
share_last_comment.t=inputs[0].value;var divs=obj.getElementsByTagName('div');for(var i=0;i<divs.length;i++){if(typeof divs[i].tokenizer!='undefined'){divs[i].tokenizer.disable();}else if(!CSS.hasClass(divs[i],'tokenizer')){CSS.addClass(divs[i],'tokenizer_locked');}}
while(!CSS.hasClass(obj,'dialog_content')&&obj){obj=obj.parentNode;}
if(!obj){Util.error("Could not locate base element for dialog");return false;}
post.privacy_data={};if(privacy_widget){copy_properties(post.privacy_data,privacy_widget.getData());}
new AsyncRequest().setURI('/ajax/share.php').setData(post).setHandler(share_post_send_callback.bind(obj)).send();}
function share_post_send_callback(response){payload=response.getPayload();if(payload['html']){set_inner_html(this,payload['html']);if(payload['redr']){setTimeout(function(){goURI(payload['redr']);},3000);}else{var gd=generic_dialog.get_dialog(this);var tmout=payload['timeout']||3000;if(gd){gd.fade_out(500,tmout);}else if(payload['close']){setTimeout(function(){self.close();},tmout);}}}else if(payload['redr']){goURI(payload['redr']);}}

if (window.Bootloader) { Bootloader.done(["js\/e9lv8s25etwsgg0c.pkg.js"]); }
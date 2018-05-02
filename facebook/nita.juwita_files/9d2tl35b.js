/*    HTTP Host:  b.static.ak.fbcdn.net                                        */
/*    Generated:  September 4th 2009 4:18:09 PM PDT                            */
/*      Machine:  10.16.140.106                                                */
/*       Source:  Local Cache                                                  */
/*     Location:  rsrc:4:9d2tl35b                                              */
/*       Locale:  nu_ll                                                        */
/*         Path:  js/pages.js                                                  */


function fbpage_show_viewer_settings_dialog(fbpage_id,title){var src='/ajax/pages/viewer_settings.php?id='+fbpage_id;Dialog.showFormAjax(title,src,_tx("Save"),true);return false;}
function fbpage_set_fan_status(elem,fbpage_id,action_is_add,reload,handler,error_handler,extra_data){handler=handler?handler:function(asyncResponse){_fbpage_show_change_status_feedback(elem,asyncResponse.getPayload());};var data={'fbpage_id':fbpage_id,'add':action_is_add,'reload':reload};if(extra_data!=null){copy_properties(data,extra_data);}
var request=new AsyncRequest().setURI('/ajax/pages/fan_status.php').setData(data).setHandler(bind(this,handle_require_email_conf_response,handler,null,null));if(error_handler){request.setErrorHandler(error_handler);}
request.send();return false;}
function fbpage_set_favorite_status(elem,fbpage_id,action_is_add){var handler=function(){_fbpage_show_change_status_feedback(elem,this.getUserData());};var data={'fbpage_id':fbpage_id,'add':action_is_add};var async=new AsyncRequest().setMethod('POST').setURI('/ajax/pages/favorite_status.php').setData(data);new Dialog().setAsync(async).setCloseHandler(handler).show();return false;}
function _fbpage_show_change_status_feedback(elem,data){if(!data||!elem){return;}
if(data.reload){var uri=URI.getRequestURI();if(data.preserve_tab){if(!uri.getQueryData().v){uri.addQueryData({'v':window.profile_tab_controller.currentView});}}
goURI(uri,true);}else if(data.feedback){var newElem=document.createElement('span');newElem.innerHTML=data.feedback;CSS.setClass(newElem,'fan_status_inactive');elem.parentNode.replaceChild(newElem,elem);var handler=function(){if(data.can_repeat_action){newElem.parentNode.replaceChild(elem,newElem);}}
animation(newElem).duration(3000).checkpoint().to('backgroundColor','#FFFFFF').duration(1000).ondone(handler).go();}}
function fbpage_verification_reason_dialog(){new Dialog().setTitle(_tx("Why is this required?")).setBody(_tx("In order to upload music to your Page, we need you to submit a valid form of identification that identifies you, the admin of the Page. By submitting a valid form of identification, you are confirming that you either own the copyright to the content you will be uploading or that you are authorized by the copyright owner to upload that copyrighted content to your Page. Please note that you can black out any sensitive information on your identification if you wish, other than your name and picture. We currently only accept photo passports, school IDs, and drivers licenses.")).setButtons([Dialog.OK]).show();return false;}
function pages_show_block_app(app_id,action,source){var async=new AsyncRequest().setMethod('POST').setData({app_id:app_id,action:action,source:source}).setURI('/ajax/apps/block.php');new Dialog().setAsync(async).show();}
function pages_change_block_wording(app_id){hide('block_'+app_id);}
function pages_promote_sms_fanning(fan,vanity_url,shortcode){new Dialog().setTitle(_tx("Get more Fans through SMS")).setBody(_tx("Tell people to text \"{fan} {name}\" to {mobile-number} from their mobile phones, and they will be added as fans instantly. Standard charges may apply.",{'fan':fan,'name':vanity_url,'mobile-number':shortcode})).setButtons(Dialog.OK).show();return false;}
function fbpages_app_add(app_id){var async=new AsyncRequest().setURI('/ajax/apps/show_profile_add_dialog.php').setMethod('GET').setReadOnly(true).setData({profile_id:app_id});new Dialog().setAsync(async).show();return false;}
function fbpages_app_on_add(obj){var uri='/ajax/apps/add_to_profile.php';var data={profile_id:obj.profile_id,target_profile_id:obj.id};var handler=function(){ObjectBrowserController.getController(obj.element).removeItem(obj.id);};new AsyncRequest().setURI(uri).setMethod('POST').setData(data).setHandler(handler).send();}

if (window.Bootloader) { Bootloader.done(["js\/pages.js"]); }
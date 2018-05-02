/*    HTTP Host:  static.ak.fbcdn.net                                          */
/*    Generated:  August 31st 2009 7:07:37 AM PDT                              */
/*      Machine:  10.16.140.102                                                */
/*       Source:  Local Cache                                                  */
/*     Location:  rsrc:4:3uth6jp4                                              */
/*       Locale:  nu_ll                                                        */
/*         Path:  js/af4lasuiqqwoc08s.pkg.js                                   */


function MessageComposer(root,input,user,options){this.parent.construct(this,root,input,user,options);MessageComposer.instance=this;this.ensureInitialized();}
MessageComposer.extend('UIComposer');MessageComposer.mixin({isInbox:true,getData:function(){var data=this.parent.getData();if(data){var form_data=serialize_form(this.root);form_data.ids=form_data['ids_'+this.id];data=copy_properties(form_data,data);}
return data;},isValidPost:function(){return true;},postWithPhotoAttachment:function(pid){var app_data={'pid':pid};var data={app_data:app_data,app_id:this.app_id,id:this.user,target_id:this.targetID,app_id:this.attachmentArea.attachment.app_id,comment_text:this.getMessage()};var form_data=serialize_form(this.root);form_data.ids=form_data['ids_'+this.id];data=copy_properties(form_data,data);data=copy_properties(form_data,this.getContextData());new AsyncRequest().setURI('/gigaboxx/endpoint/MessageComposerEndpoint.php').setData(data).setHandler(handle_require_email_conf_response.bind(this,this.handleResponse.bind(this),null,null)).setErrorHandler(this.handleError.bind(this)).setFinallyHandler(this.enable.bind(this)).send();},reset:function(resetAttachment,resetMessage,focusInput){this.parent.reset(resetAttachment,resetMessage,focusInput);if(resetMessage){this.hideError();var dialog=Dialog.getCurrent();if(dialog){dialog.hide();}}
return this;},showError:function(title,message){$(this.id+'_title').setContent(HTML(title));$(this.id+'_msg').setContent(HTML(message));show($(this.id+'_error'));},hideError:function(){$(this.id+'_title').empty();$(this.id+'_msg').empty();hide($(this.id+'_error'));},focusInput:function(){this.input.focus();}});

function MessageComposerContentArea(user_id){copy_properties(this,{_userId:user_id});}
copy_properties(MessageComposerContentArea,{instances:{},getInstance:function(user_id){return MessageComposerContentArea.instances[user_id]||(MessageComposerContentArea.instances[user_id]=new MessageComposerContentArea(user_id));}});MessageComposerContentArea.mixin({addContent:function(content){var notified=false;if(window.GigaboxxManager){var controller=GigaboxxManager.getInstance(this._userId);if(controller&&controller.isGigaboxxURI(URI.getRequestURI())){if(controller.getActiveThread()!=content.thread_id){controller.buildURI(true).addQueryData({tid:content.thread_id}).go();}else{DOM.find(document,'div.gigaboxx_thread_header_authors').setContent(HTML(content.participant_list));}
notified=controller.addReplyContent(content);}}
if(!notified){new Dialog().setTitle(_tx("Message Sent")).setBody($N('div',{className:'status UIMessageBox'},$N('h2',{id:'status_title'},_tx("Your message has been sent.")))).setAutohide(750).setButtons(Dialog.CLOSE).show();}}});

if (window.Bootloader) { Bootloader.done(["js\/af4lasuiqqwoc08s.pkg.js"]); }
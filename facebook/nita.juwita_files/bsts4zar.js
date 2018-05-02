/*    HTTP Host:  static.ak.fbcdn.net                                          */
/*    Generated:  August 31st 2009 7:14:37 AM PDT                              */
/*      Machine:  10.16.139.103                                                */
/*       Source:  Global Cache                                                 */
/*     Location:  js/group_profile.js h:bsts4zar                               */
/*       Locale:  nu_ll                                                        */
/*         Path:  js/group_profile.js                                          */


function group_remove_user(gid,uid){var base_link='/groups.php';if(uid!=0){base_link+='?id='+uid;}
new AsyncRequest().setURI('/ajax/group_actions_ajax.php').setData({gid:gid,remove:1}).setHandler(goURI.bind(null,base_link)).setErrorHandler(ErrorDialog.showAsyncError).send();}
function group_add_user(gid){new AsyncRequest().setURI('/ajax/group_actions_ajax.php').setData({gid:gid,join:1}).setHandler(bind(this,handle_require_email_conf_response,goURI.curry('/group.php?gid='+gid,false),null,null)).setErrorHandler(ErrorDialog.showAsyncError).send();}
function group_remove_officer(gid,uid){new AsyncRequest().setURI('/ajax/group_actions_ajax.php').setData({gid:gid,uid:uid,remove_officer:1}).setHandler(function(){document.location.reload();}).setErrorHandler(ErrorDialog.showAsyncError).send();}
function confirm_group_join(gid){group_add_user(gid);}
function group_ask_leave(gid,uid,msg,name){if(msg!=""){msg+="<br /><br />";}
msg+=_tx("Are you sure you want to remove your membership from {group-name}?",{'group-name':htmlize(name)});var dialog=new Dialog().setTitle(_tx("Remove group membership?")).setBody(msg).setButtons([Dialog.newButton('remove',_tx("Remove"),'',function(){group_remove_user(gid,uid);dialog.hide();}),Dialog.CANCEL]).show();return false;}
function group_ask_join(gid,name){var msg_text=_tx("Do you want to join {group-name}?",{'group-name':htmlize(name)});var dialog=new Dialog().setTitle(_tx("Add group membership?")).setBody(msg_text).setButtons([Dialog.newButton('join',_tx("Join"),'',function(){group_add_user(gid);dialog.hide();}),Dialog.CANCEL]).show();return false;}

if (window.Bootloader) { Bootloader.done(["js\/group_profile.js"]); }
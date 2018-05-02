/*    HTTP Host:  static.ak.fbcdn.net                                          */
/*    Generated:  September 8th 2009 7:41:19 AM PDT                            */
/*      Machine:  10.16.140.108                                                */
/*       Source:  Global Cache                                                 */
/*     Location:  js/lib/ui/typeaheadpro/sources/friend_and_email_source.js h:d6oic26v */
/*       Locale:  nu_ll                                                        */
/*         Path:  js/lib/ui/typeaheadpro/sources/friend_and_email_source.js    */


function friend_and_email_source(get_param){get_param=get_param?get_param+'&include_emails=1':'';this.parent.construct(this,get_param);}
friend_and_email_source.extend('friend_source');friend_and_email_source.prototype.text_noinput=friend_and_email_source.prototype.text_placeholder=_tx("Type the name of a friend, list, or email address");friend_and_email_source.prototype.text_nomatch=_tx("You can type an email address...");friend_and_email_source.prototype.onselect_not_found=function(){emails=this.results_text.split(/[,; ]/);for(var i=0;i<emails.length;i++){var text=emails[i].replace(/^\s+|\s+$/g,'');var email_regex=/.*\@.*\.[a-z]+$/;if(!email_regex.test(text)){continue;}
var email_entry={t:text,e:text};var new_token=new token(email_entry,this.tokenizer,this.element);var async_params={email:text,pluses:false};new AsyncRequest().setMethod('GET').setReadOnly(true).setURI('/ajax/typeahead_email.php').setData(async_params).setHandler(function(response){if(response.getPayload()){var obj=response.getPayload().token;this.render_obj(obj);this.tokenizer._ontokenadded(obj);}else{this.tokenizer._ontokennotfound(text);}}.bind(new_token)).setErrorHandler(function(response){ErrorDialog.showAsyncError(response);this.remove(false);}.bind(new_token)).send();}
this.clear();}

if (window.Bootloader) { Bootloader.done(["js\/lib\/ui\/typeaheadpro\/sources\/friend_and_email_source.js"]); }
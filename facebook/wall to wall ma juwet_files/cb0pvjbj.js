/*    HTTP Host:  b.static.ak.fbcdn.net                                        */
/*    Generated:  August 31st 2009 6:59:55 AM PDT                              */
/*      Machine:  10.16.140.106                                                */
/*       Source:  Global Cache                                                 */
/*     Location:  js/2w00dew62hycc8kc.pkg.js h:cb0pvjbj                        */
/*       Locale:  nu_ll                                                        */
/*         Path:  js/2w00dew62hycc8kc.pkg.js                                   */


function UntrustedLink(dom,hash,evt){this.dom=dom;this.url=dom.href;this.hash=hash;this.dom.listen('click',this.onclick.bind(this));this.dom.listen('mousedown',this.onmousedown.bind(this));this.dom.listen('mouseup',this.onmouseup.bind(this));this.dom.listen('mouseout',this.onmouseout.bind(this));this.onmousedown($E(evt));}
UntrustedLink.bootstrap=function(dom,hash,evt){if(dom.__untrusted){return;}
dom.__untrusted=true;new UntrustedLink(dom,hash,evt);}
UntrustedLink.prototype.getRewrittenURI=function(){return(new URI('/l.php')).setQueryData({u:this.url,h:this.hash}).setSubdomain('www');}
UntrustedLink.prototype.onclick=function(){(function(){this.dom.href=this.url;}).bind(this).defer(100);this.dom.href=this.getRewrittenURI();}
UntrustedLink.prototype.onmousedown=function(evt){if(evt.button==2){this.dom.href=this.getRewrittenURI();}}
UntrustedLink.prototype.onmouseup=function(){this.dom.href=this.getRewrittenURI();}
UntrustedLink.prototype.onmouseout=function(){this.dom.href=this.url;}

function share_play_video(share_id,unique_id){if(share_id!=SHAREID_VIDEO_PREVIEW){_share_log_play_content(share_id,'video');}
if(holder=ge(unique_id+'_holder')){if(container=holder.parentNode.parentNode){CSS.addClass(container,'playing');}}
return false;}
function _share_log_play_content(share_id,media_type){new AsyncRequest().setURI('/ajax/shareplay_ajax.php').setData({s:share_id,m:media_type}).send();}

if (window.Bootloader) { Bootloader.done(["js\/2w00dew62hycc8kc.pkg.js"]); }
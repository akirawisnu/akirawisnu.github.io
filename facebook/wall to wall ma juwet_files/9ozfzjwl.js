/*    HTTP Host:  static.ak.fbcdn.net                                          */
/*    Generated:  August 31st 2009 7:56:41 AM PDT                              */
/*      Machine:  10.16.139.101                                                */
/*       Source:  Global Cache                                                 */
/*     Location:  js/stream/UIIntentionalStreamWallToWall.js h:9ozfzjwl        */
/*       Locale:  nu_ll                                                        */
/*         Path:  js/stream/UIIntentionalStreamWallToWall.js                   */


function UIIntentionalStreamWallToWall(root,instanceName,newest,oldest,hiddenCount,id,banter_id,storyCount,hasAdditionalStories){this.parent.construct(this,root,instanceName,newest,oldest,hiddenCount,0,storyCount,hasAdditionalStories);copy_properties(this,{id:id,banter_id:banter_id});}
UIIntentionalStreamWallToWall.prototype.getValidParams=function(){return UIIntentionalStreamWallToWall.VALID_PARAMS;}
UIIntentionalStreamWallToWall.prototype.getEndpoint=function(){return UIIntentionalStreamWallToWall.ENDPOINT;}
UIIntentionalStreamWallToWall.extend('UIIntentionalStream');copy_properties(UIIntentionalStreamWallToWall,{VALID_PARAMS:['id','banter_id'],ENDPOINT:'/ajax/stream/walltowall.php'});

if (window.Bootloader) { Bootloader.done(["js\/stream\/UIIntentionalStreamWallToWall.js"]); }
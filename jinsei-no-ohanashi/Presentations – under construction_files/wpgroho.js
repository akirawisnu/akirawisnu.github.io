var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

WPGroHo=jQuery.extend({my_hash:'',data:{},renderers:{},syncProfileData:function(hash,id){if(!WPGroHo.data[hash]){WPGroHo.data[hash]={};a=jQuery('div.grofile-hash-map-'+hash+' span').each(function(){WPGroHo.data[hash][this.className]=jQuery(this).text();});}
WPGroHo.appendProfileData(WPGroHo.data[hash],hash,id);},appendProfileData:function(data,hash,id){for(var key in data){if(jQuery.isFunction(WPGroHo.renderers[key])){return WPGroHo.renderers[key](data[key],hash,id,key);}
jQuery('#'+id).find('h4').after(jQuery('<p class="grav-extra '+key+'" />').html(data[key]));}}},WPGroHo);

}
/*
     FILE ARCHIVED ON 04:11:02 Apr 16, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:35:19 Aug 30, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots.policy: 0.144
  exclusion.robots: 0.158
  LoadShardBlock: 714.502 (6)
  CDXLines.iter: 175.226 (3)
  esindex: 0.009
  PetaboxLoader3.resolve: 101.576
  PetaboxLoader3.datanode: 472.124 (7)
  RedisCDXSource: 19.394
  load_resource: 143.026
*/
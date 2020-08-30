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
     FILE ARCHIVED ON 22:53:57 Apr 15, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:08:33 Aug 30, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  RedisCDXSource: 31.74
  exclusion.robots: 0.138
  esindex: 0.015
  PetaboxLoader3.datanode: 420.373 (8)
  CDXLines.iter: 164.598 (3)
  load_resource: 1375.609
  PetaboxLoader3.resolve: 422.272 (4)
  LoadShardBlock: 554.317 (6)
  exclusion.robots.policy: 0.125
*/
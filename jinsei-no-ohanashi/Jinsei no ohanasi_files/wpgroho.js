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
     FILE ARCHIVED ON 01:56:41 Jan 11, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:24:24 Aug 30, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 929.279
  PetaboxLoader3.datanode: 484.816 (5)
  exclusion.robots: 0.132
  RedisCDXSource: 18.273
  esindex: 0.013
  CDXLines.iter: 71.013 (3)
  exclusion.robots.policy: 0.122
  LoadShardBlock: 410.285 (3)
  PetaboxLoader3.resolve: 312.588 (2)
  load_resource: 457.83
*/
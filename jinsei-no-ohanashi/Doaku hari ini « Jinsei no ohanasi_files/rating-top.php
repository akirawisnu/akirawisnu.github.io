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


var top_rated_output = '<p><strong>Posts</strong> | <a href="javascript:" onclick="PDRTJS_TOP.get_top( \'pages\', \'0\' );">Pages</a> | <a href="javascript:" onclick="PDRTJS_TOP.get_top( \'comments\', \'0\' );">Comments</a></p><p><strong><small>All</small></strong> | <a href="javascript:" title="Posts created today" onclick="PDRTJS_TOP.get_top( \'posts\', \'1\' );"><small>Today</small></a> | <a href="javascript:" title="Posts created this week" onclick="PDRTJS_TOP.get_top( \'posts\', \'7\' );"><small>This Week</small></a> | <a href="javascript:" title="Posts created this month" onclick="PDRTJS_TOP.get_top( \'posts\', \'31\' );"><small>This Month</small></a></p> <ul id="top_posts"><li>There are no rated items for this period.</li></ul>';
var items = document.getElementsByClassName('pd_top_rated_holder_posts'), i, len;
if ( items.length > 0 ) {
	// loop through all elements
	for (i = 0, len = items.length; i < len; i++) {
    	items[i].innerHTML = top_rated_output;
	}
} else {
	document.getElementById('pd_top_rated_holder').innerHTML = top_rated_output;
}

}
/*
     FILE ARCHIVED ON 00:22:34 Jun 01, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:21:27 Aug 30, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  PetaboxLoader3.datanode: 381.791 (4)
  captures_list: 722.032
  RedisCDXSource: 45.071
  CDXLines.iter: 20.487 (3)
  exclusion.robots.policy: 0.206
  LoadShardBlock: 649.349 (3)
  esindex: 0.013
  exclusion.robots: 0.216
  load_resource: 343.336
  PetaboxLoader3.resolve: 184.718
*/
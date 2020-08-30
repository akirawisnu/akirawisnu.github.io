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

function PDRTJS_RATING_TOP( posts_id, pages_id, comments_id, seq, item_count ) {

	var server = 'https://web.archive.org/web/20130111063154/http://polldaddy.com';
	
	this.filters = new Array;

	function $( id ) {
		return document.getElementById( id );
	}

	this.make_call = function ( url ) {		
		var s = document.createElement( 'SCRIPT' );
		s.charset = 'utf-8';
		s.src = server + url;
		var h = document.getElementsByTagName( 'head' ).item( 0 );
		h.appendChild( s );
	}

	this.get_top = function( content, period ){

		id = 0;
		
		switch ( content ) {
			case 'posts':
				id = posts_id;
				break;
			case 'pages':
				id = pages_id;
				break;
			case 'comments':
				id = comments_id;
				break;
		}
		
		link = '/ratings/rating-top.php?id=' + id + '&period=' + period + '&content=' + content + '&seq=' + seq + '&item_count=' + item_count;
		
		if ( this.filters.length > 0 ) {
			link += '&filters=';	
			for( var i=0;i<this.filters.length;i++ ) {
				link += this.filters[i] + ':';				
			}
			link = link.slice( 0, -1 );
		}
		
		this.make_call( link );
	}
}


}
/*
     FILE ARCHIVED ON 06:31:54 Jan 11, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:24:19 Aug 30, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  RedisCDXSource: 48.639
  exclusion.robots: 0.139
  captures_list: 430.435
  esindex: 0.01
  PetaboxLoader3.datanode: 190.309 (5)
  CDXLines.iter: 27.72 (3)
  load_resource: 218.015
  PetaboxLoader3.resolve: 98.712 (2)
  LoadShardBlock: 326.714 (3)
  exclusion.robots.policy: 0.13
*/
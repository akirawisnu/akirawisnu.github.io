function cpbOn(target) {
  document.getElementById(target).style.background = 'url(http://images.friendster.com/images/cp_btn_bg.gif) repeat bottom left';
}
function cpbOff(target) {
  document.getElementById(target).style.background = 'url(http://images.friendster.com/images/cp_btn_bg.gif) repeat top left';
}

function toggleShoutout() {
  main = document.getElementById("cpShoutoutBox");
  edit = document.getElementById("cpShoutoutEditBox");
  if (edit.style.display == "none" || edit.style.display == "") {
    edit.style.display = "block";
    main.style.display = "none";
  } else {
    edit.style.display = "none";
    main.style.display = "block";
  }
}

function getTargetColors(el) {
  var x = document.getElementById(el);
	if (x.currentStyle) {
		var primary = x.currentStyle.color;
		var secondary = x.currentStyle.backgroundColor;
  } else if (window.getComputedStyle) {
		var primary = document.defaultView.getComputedStyle(x,null).getPropertyValue("color");
		var secondary = document.defaultView.getComputedStyle(x,null).getPropertyValue("background-color");
  }
  var colors = {"primary": primary, "secondary": secondary }
	return colors;
}

function fixNavColors() {
  var colors = getTargetColors("controlpanel_header");
  var primary = colors.primary;
  var secondary = colors.secondary;

  var navbar = document.getElementById("mainnav");
  //Fix navbar color
  navbar.style.background = secondary;
  document.getElementById("mainnav_left").style.background = secondary;
  document.getElementById("mainnav_right").style.background = secondary;
  //Fix link color
  var links = navbar.getElementsByTagName("a");
  for (var i=0; i < links.length; i++) {
    links[i].style.color = primary;
  }
  //Fix seperator color
  var dividers = navbar.getElementsByTagName("span");
  for (var i=0; i < dividers.length; i++) {
    dividers[i].style.color = primary;
  }
}

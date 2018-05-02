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

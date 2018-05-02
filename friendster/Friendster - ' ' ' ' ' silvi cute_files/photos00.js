var f_images = new Array;
var f_imageDefaults = {"active": false, "activeID": null, "height": 0, "speed": 5, "amount": 2, "zoom": 0.20, "min": 75, "max": 100, "timeoutID": null};

function f_growTheImage(objectID) {
  imageZoom = f_images[objectID];
  height= imageZoom.height;
  percent = imageZoom.zoom;
  image = document.getElementById(objectID);
  image.style.height = image.height + imageZoom.amount;
  if (image.height > imageZoom.max)
    return false;
  zoomAmount = ((image.height / height) - 1);
  if (zoomAmount < percent) imageZoom.timeoutID = setTimeout("f_growTheImage('"+objectID+"')", imageZoom.speed);
}

function f_enlargeImage(image) {
  if (f_images[image.id] == null) {
    f_images[image.id] = f_imageDefaults;
    f_images[image.id].height = image.height;
    f_images[image.id].activeID = image.id;
    f_images[image.id].min = image.height;
    f_images[image.id].max = image.height * (1 + f_images[image.id].zoom);
  }
  imageZoom = f_images[image.id];
  if (imageZoom.active)	
    f_restoreImage(imageZoom.activeID);
  imageZoom.active = true;
  image.style.height = imageZoom.min;
  if (!window.XMLHttpRequest) {
    image.parentNode.parentNode.style.border= "3px solid #FF5319";
  }
  setTimeout("f_growTheImage('"+image.id+"')", imageZoom.speed);
}

function f_restoreImage(id) {
  if (f_images[id] == null)
    return false;
  imageZoom = f_images[id];
  clearTimeout(imageZoom.timeoutID);
  image = document.getElementById(id);
  image.style.height = 75;
  imageZoom.active = false;
  imageZoom.activeID = null;
  if (!window.XMLHttpRequest) {
    image.parentNode.parentNode.style.border= "0px";
  }
}

function f_restoreAll() {
  imgs = document.getElementsByTagName("img");
  for (i=0; i<imgs.length; i++) {
    if (/zoom/.test(imgs[i].className))
      f_restoreImage(imgs[i].id);
  }
}

function activateZoomImages() {
  imgs = document.getElementsByTagName("img");
  for (i=0; i<imgs.length; i++) {
    if (/zoom/.test(imgs[i].className))
      imgs[i].onmouseover = function() {f_enlargeImage(this);};
  }
}

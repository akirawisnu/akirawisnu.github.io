// Correctly handle PNG transparency in Win IE 5.5 or higher.
function correctPNG(img, width, height, imgURL) {
  if (imgURL != null)
    img.src = imgURL;
  var imgID = (img.id) ? "id='" + img.id + "' " : "";
  var imgClass = (img.className) ? "class='" + img.className + "' " : "";
  var imgTitle = (img.title) ? "title='" + img.title + "' " :
                               "title='" + img.alt + "' ";
  var imgStyle = "display:inline-block;" + img.style.cssText;
  if (img.align == "left") imgStyle = "float:left;" + imgStyle;
  if (img.align == "right") imgStyle = "float:right;" + imgStyle;
  if (img.parentElement.href) imgStyle = "cursor:hand;" + imgStyle;
  var strNewHTML = "<span " + imgID + imgClass + imgTitle + 
                   " style=\"" + "width: " + width + "px; height:" +
                   height + "px;" + imgStyle + "; " + 
                   "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader" +
                   "(src=\'" + img.src + "\', sizingMethod='scale');\"></span>";
  img.outerHTML = strNewHTML;
  return true;
}

function correctPNGImage(image, width, height, imgURL) {
  if (document.all) {
    correctPNG(image, width, height, imgURL);
  } else if (imgURL != null) {
    image.src = imgURL;
  }
}

var FS = FS || {};
FS.UIHelper = FS.UIHelper || {};
FS.UIHelper.TxtBox = ({}).prototype = {
  setDefaultMsg : function(id, defaultMsg) {
    var onClickEvent = function(e) {
      if(this.value == defaultMsg) this.value = '';
    }
    var onBlurEvent = function(e) {
      if(this.value == '') this.value = defaultMsg;
    }
    YAHOO.util.Event.addListener(id, "click", onClickEvent);
    YAHOO.util.Event.addListener(id, "blur", onBlurEvent);
  }
}

var FS = FS || {};
FS.Validator = ({}).prototype = {
  isValidEmail : function(email) {
    var emailPattern = new RegExp(/[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]+)/);
    return emailPattern.test(email);
  }
}

FS.JoinBox = ({}).prototype = {
  init : function() {
    YAHOO.util.Event.addListener("joinNowBtn", "click", this.joinBtnClick, this);
    YAHOO.util.Event.addListener("signup_form", "submit", this.joinBtnClick, this);
    this.showBusyState(false);
    this.showErrorMsg('');
  },
  showSuccessMsgBox : function(title, msg) {
    var successMsgBox = YAHOO.util.Dom.get('emailconfirm');
    var emailForm = YAHOO.util.Dom.get('emailinput');
    emailForm.style.display = 'none';
    successMsgBox.style.display = '';
    successMsgBox.innerHTML = '<h2>' + title + '</h2><p>' + msg + '</p>';
  },
  joinBtnClick : function(e, me) {
    YAHOO.util.Event.preventDefault(e);
    var emailAddrTxtBox = YAHOO.util.Dom.get('reg_email');
    var defaultTxtBoxMsg = Locale.getString('enterValidEmail');
    me.showErrorMsg('');
    if(FS.Validator.isValidEmail(emailAddrTxtBox.value) && emailAddrTxtBox.value != defaultTxtBoxMsg) {
      me.showBusyState(true);
      var data = 'format=json&type=add_pending&email=' + emailAddrTxtBox.value;
      var callback = {
        success: me.handleResponse,
        argument: {
          origin: me,
          email : emailAddrTxtBox.value
        }
      }
      YAHOO.util.Connect.asyncRequest('POST', 'joinrpc.php', callback, data); 
    } else {
      me.showErrorMsg(Locale.getString('errorMsgInvalidEmail'));
      if(emailAddrTxtBox.value == defaultTxtBoxMsg) emailAddrTxtBox.value = '';
      emailAddrTxtBox.focus();
    }
  },
  showErrorMsg : function(msg) {
    var errorMsgBox = YAHOO.util.Dom.get('reverseLookup');
    errorMsgBox.innerHTML = msg;
  },
  showBusyState : function(busy) {
    if(busy) {
      YAHOO.util.Dom.addClass('joinNowBtn', 'buttonOff');
      YAHOO.util.Dom.get('reg_email').disabled = 1;
      YAHOO.util.Dom.get('waiting').style.display = '';
    } else {
      YAHOO.util.Dom.removeClass('joinNowBtn', 'buttonOff');
      YAHOO.util.Dom.get('reg_email').disabled = 0;
      YAHOO.util.Dom.get('waiting').style.display = 'none';
    }
  },//end showBusyState : function
  handleResponse : function(r) {
    var me = r.argument.origin;
    try {
      var jrsp = YAHOO.lang.JSON.parse(r.responseText);
      var msg = jrsp.message;
    
      if('OK' == jrsp.req_stat) {
        me.showSuccessMsgBox(Locale.getString('emailConfirmation'), msg);
      } else {
        me.showBusyState(false);
        me.showErrorMsg(msg);
      }
      
    } catch(e) {}
  }
}

YAHOO.util.Event.onDOMReady(function() {
  FS.UIHelper.TxtBox.setDefaultMsg('reg_email', Locale.getString('enterValidEmail'));
  FS.UIHelper.TxtBox.setDefaultMsg('searchfield', "Type your friend's name or email");
  FS.JoinBox.init();
});

var modules = new Array();

function getModuleContent(id) {
  try {
    moduleData = modules[id];
    target = moduleData.moduleName;
    uid  = moduleData.owner;
    
    url="/modules/module.php?uid="+uid+"&_pmr=h&_pmmo="+id;

    sendXMLHttpRequestText(url, "loadModuleContent");
  } catch (e) {}
}

function loadModuleContent(xmlresponse) {
  content_tag = "content_";
  target_str = xmlresponse.substr(0, 50);
  target = target_str.replace(/^\s*|\s*$/g,"");
  newContent = xmlresponse.substr(50);
  if (newContent.replace(/^\s*|\s*$/g,"") == "")
    newContent = "<div class=\"boxcontent center\">" + Locale.getString('noContent') + "</div>";
  content_id = content_tag + target;
  content_div = document.getElementById(content_id);
  content_div.innerHTML = newContent;
}

function getModuleResponse(id, params, method) {
  try {
    moduleData = modules[id];
    target = moduleData.moduleName;
    uid  = moduleData.owner;

    if (params.length < 1) {
      getModuleContent(id);
      return false;
    }

    url="/modules/module.php?uid="+uid+"&_pmr=h&_pmmo="+id+"&_pma="+method+"&_pmt="+target;
    alert(url);
    for (i=0; i<params.length; i++) {
      url += "&"+params[i].name+"="+escape(params[i].value);
    }

    sendXMLHttpRequestText(url, "loadModuleContent");
  } catch (e) {}
}

function submitModuleAction(id, form, method, target_id, action_text) {
  try {
    moduleData = modules[id];
    target = moduleData.moduleName;
    uid  = moduleData.owner;
    params = new Array();
    
    if (method == null)
      method = "vs";

    activeForm = document.forms[form];
    if (activeForm == undefined)
      return false;
    
    for (i = 0; i < activeForm.elements.length; i++) {
      name = activeForm.elements[i].name;
      value = activeForm.elements[i].value;
      params[i] = { "name": name, "value": value };
    }

    content_tag = "content_";

    if (action_text ==  undefined) {
      action_text = "submitting...";
    }

    if (target_id != undefined) {
      loading = document.getElementById(target_id);
      loading.innerHTML = "<div class=\"center\"><img src=\"http://images.friendster.com/images/loading.gif\" />"+action_text+"</div>";
    } else if (method != "so") {
      loading = document.createElement("div");
      loading.innerHTML = "<div class=\"boxcontent center\"><img src=\"http://images.friendster.com/images/loading.gif\" />"+action_text+"</div>";
      content_div = document.getElementById(content_tag + target);
      content_div.insertBefore(loading, content_div.firstChild);
    }

    getModuleResponse(id, params, method);  
  } catch (e) {}
}

function submitOnEnter(e, id, form, method, target_id, action_text) {
  var keycode;
  if (window.event) 
    keycode = window.event.keyCode;
  else if (e)
    keycode = e.which;
  else
    return true;

  if (keycode == 13) {
    submitModuleAction(id, form, method, target_id, action_text);
    return false;
  } else
    return true;
}


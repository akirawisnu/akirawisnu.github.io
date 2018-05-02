/**
 * WHAT NOT WORKS
 * - qTip with qMenu makes the menu flicker in IE 6
 */

function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload(); func(); 
		};
	}
}

function updateSessionCounter()
{
	var min = $('ss_min');
	var sec = $('ss_sec');
	var vSec = parseInt(sec.innerHTML, 10);
	var vMin = parseInt(min.innerHTML, 10);
	if (vSec === 0 && vMin === 0) { 
		return; 
	}
	vSec = vSec-1;
	if (vSec < 0) { vSec = 59; vMin = vMin - 1; }
	if (vSec < 10) { vSec = "0" + vSec; }
	min.innerHTML = vMin;
	sec.innerHTML = vSec;
	// function pointer, don't know if this works in all versions of IE
	var updateFunc = updateSessionCounter;
	setTimeout(updateFunc, 1000);
}

function init() {
    var xBtns = document.getElementsByTagName("input");
    for (var i = 0; i < xBtns.length; i++) {
        if (xBtns[i].type == "button" || xBtns[i].type == "submit" || xBtns[i].type == "reset") {
            xBtns[i].className = "button";
        }
    }
	var updateFunc = updateSessionCounter;
	setTimeout(updateFunc, 1000);
}
addLoadEvent(init);

var zoomLevel = 100;
function zoom_out() { zoomLevel -= 10; document.getElementById("ti_m").style.fontSize = (zoomLevel + "%"); }
function zoom_in() { zoomLevel += 10; document.getElementById("ti_m").style.fontSize = (zoomLevel + "%"); }

// Set persistent zoom level
function zoom(sel) {
    var z = sel.options[sel.selectedIndex].value;
	var u = window.location;
    window.location = "../Default/SetZoomLevel?z=" + z + "&n=" + encodeURI(u);
}

/**
 * Set the target of form named formName into target and
 * submit the form.
 * Used for multiple actions in one form.
 * @author char
 */
function submitForm(formName, action) {
    var f = document.forms[formName];
    f.action = action;
	if (typeof f.onsubmit == "function") {
        f.onsubmit();
	}
    f.submit();
}

/* Checking functions */

// -------------- CHECK ALL / UNCHECK ALL CHECKBOXES ------------------ //

function toggleCheck(o, f, n) {
	// Local variables declaration
	var len, i, el, state;

	len = f.elements.length;
	state = o.checked;
	for (i = 0; i < len; ++i) {
		el = f.elements[i];
		if (el.name == n || el.className == n) {
			el.checked = state;
		}
	}
}

Element.prototype.getElementsByClassName = function(strClass, strTag) {
  strTag = strTag || "*";
  objContElm = this;
  var objColl = objContElm.getElementsByTagName(strTag);
  if (!objColl.length &&  strTag == "*" &&  objContElm.all) objColl = objContElm.all;
  var arr = new Array();
  var delim = strClass.indexOf('|') != -1  ? '|' : ' ';
  var arrClass = strClass.split(delim);
  for (var i = 0, j = objColl.length; i < j; i++) {
    var arrObjClass = objColl[i].className.split(' ');
    if (delim == ' ' && arrClass.length > arrObjClass.length) continue;
    var c = 0;
    comparisonLoop:
    for (var k = 0, l = arrObjClass.length; k < l; k++) {
      for (var m = 0, n = arrClass.length; m < n; m++) {
        if (arrClass[m] == arrObjClass[k]) c++;
        if (( delim == '|' && c == 1) || (delim == ' ' && c == arrClass.length)) {
          arr.push(objColl[i]);
          break comparisonLoop;
        }
      }
    }
  }
  return arr;
}

Element.prototype.addClassName = function(cls) {
	this.className = this.className + ' ' + cls;
}

// Zebra form
function alternateForm() {
	var forms, i, divs;
	forms = document.forms;
	for (i = 0; i < forms.length; ++i) {
		if (forms[i].className = 'zebra') {
			divs = forms[i].getElementsByClassName('input');
			for (j = 0; j < divs.length; ++j) {
				divs[j].addClassName(j % 2 == 0 ? 'even' : 'odd');
			}
		}
	}
}
addLoadEvent(alternateForm);

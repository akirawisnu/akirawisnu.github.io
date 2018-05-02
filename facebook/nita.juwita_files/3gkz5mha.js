/*    HTTP Host:  static.ak.fbcdn.net                                          */
/*    Generated:  September 8th 2009 7:40:01 AM PDT                            */
/*      Machine:  10.16.139.104                                                */
/*       Source:  Global Cache                                                 */
/*     Location:  js/3qjara4kghyco8gg.pkg.js h:3gkz5mha                        */
/*       Locale:  nu_ll                                                        */
/*         Path:  js/3qjara4kghyco8gg.pkg.js                                   */


function friend_source(get_param){this.bootstrap=this.bootstrap.bind(this,get_param);this.parent.construct(this);}
friend_source.extend('static_source');friend_source.prototype.text_noinput=friend_source.prototype.text_placeholder=_tx("Start typing a name");friend_source.friends={};friend_source.friends_index={};friend_source.viewer_id=0;friend_source.prototype.cache_results=true;friend_source.prototype.bootstrap=function(get_param){if(friend_source.friends[get_param]){this.values=friend_source.friends[get_param];this.index=friend_source.friends_index[get_param];this.ready();}else{new AsyncRequest().setMethod('GET').setReadOnly(true).setURI('/ajax/typeahead_friends.php?'+get_param).setHandler(function(response){friend_source.friends[get_param]=this.values=this.filter_excluded(response.getPayload().friends);this.viewer_id=response.getPayload().viewer_id;this.build_index();friend_source.friends_index[get_param]=this.index;}.bind(this)).send();}}
friend_source.dirty=function(){friend_source.friends={};friend_source.friends_index={};typeaheadpro.dirty_instances();}
friend_source.prototype.gen_html=function(friend,highlight){var text=friend.n||'&nbsp;';if(friend.n===false){text=_tx("0 friends");}else if(typeof(friend.n)=="object"){var names=[];for(var k in friend.n){names.push(friend.n[k]);}
if(names.length>3){text=_tx("{name1}, {name2}, {count} others",{name1:names[0],name2:names[1],count:names.length-2});}else if(names.length){text=names.join(', ');}else{text=_tx("0 friends");}}
return['<div>',typeahead_source.highlight_found(friend.t,highlight),'</div><div><small>',text,'</small></div>'].join('');}
friend_source.prototype.search_value=function(text){if(text=='\x5e\x5f\x5e'){return[{t:text,n:'\x6b\x65\x6b\x65',i:10,it:'http://static.ak.facebook.com/pics/t_default.jpg'}];}
return this.parent.search_value(text);}
friend_source.prototype._sort_text_obj=function(a,b){if(a.e&&!b.e){return 1;}
if(!a.e&&b.e){return-1;}
if(this.viewer_id==a.i){return-1;}
if(this.viewer_id==b.i){return 1;}
return a.t.localeCompare(b.t);}

function token(obj,tokenizer,caret){if(obj.is&&(tokenizer.count_names(obj.is)>tokenizer.max_selections)){new ContextualDialog().setContext(tokenizer.obj).setTitle(_tx("Cannot add list.")).setBody(_tx("You may only message up to 20 people at once.")).show().setAutohide(1500);return null;}
this.tokenizer=tokenizer;this.element=document.createElement('a');CSS.setClass(this.element,'token'+('class'in obj?' '+obj['class']:''));this.element.href='#';this.element.tabIndex=-1;this.element.onclick=function(event){return this._onclick(event?event:window.event)}.bind(this);this.element.onmousedown=function(event){(event?event:window.event).cancelBubble=true;return false};this.render_obj(obj);this.obj=obj;this.element.token=this;this.tokenizer.hide_inline_placeholder();caret?this.tokenizer.obj.insertBefore(this.element,caret):this.tokenizer.obj.appendChild(this.element);}
token.prototype.render_obj=function(obj){var inputs='';if(obj.np){var fb_protected='';}else{var fb_protected='fb_protected="true" ';}
var class_name='class="fb_token_hidden_input" ';if(obj.e){inputs=['<input type="hidden" ',class_name,fb_protected,'name="emails[]" value="',obj.e,'" />'].join('');}else if(obj.i||obj.i===0){inputs=['<input type="hidden" ',class_name,fb_protected,'name="',this.tokenizer.obj.name,'[]" value="',obj.i,'" />'].join('');}else if(obj.is){for(var i=0,il=obj.is.length;i<il;i++){inputs+=['<input type="hidden" ',class_name,fb_protected,'name="',this.tokenizer.obj.name,'[]" value="',obj.is[i],'" />'].join('');}
this.explodable=true;this.n=obj.n;}
this.text=obj.t;this.element.innerHTML=['<span><span><span><span>',inputs,htmlspecialchars(obj.t),'<span onclick="this.parentNode.parentNode.parentNode.parentNode.parentNode.token.remove(true); event.cancelBubble=true; return false;" ','onmouseover="CSS.setClass(this, \'x_hover\');" onmouseout="CSS.setClass(this, \'x\');" class="x">&nbsp;</span>','</span></span></span></span>'].join('');this.obj=obj;}
token.prototype._onclick=function(event){var this_select_time=(new Date()).getTime();if(this.explodable&&this.tokenizer.last_select_time&&(this_select_time-this.tokenizer.last_select_time<1400)){var to_add=this.n;this.remove();var inputs=this.tokenizer.obj.getElementsByTagName('input');var already_ids={};for(var i=0;i<inputs.length;++i){if(inputs[i].name==this.tokenizer.obj.id+'[]'){already_ids[inputs[i].value]=true;}}
for(var id in to_add){if(!already_ids[id]){new token({'t':to_add[id],'i':id},this.tokenizer);}}}else{this.select();}
this.tokenizer.last_select_time=this_select_time;event.cancelBubble=true;return false;}
token.prototype.select=function(again){if(this.tokenizer.selected_token&&!again){this.tokenizer.selected_token.deselect();}
CSS.setClass(this.element,trim(this.element.className.replace('token_selected',''))+' token_selected');this.tokenizer.tab_stop_ignore_focus=true;if(this.tokenizer.tab_stop.disabled){this.tokenizer.tab_stop.disabled=false;}
this.tokenizer.tab_stop.focus();this.tokenizer.selected_token=this;if(again!==true){setTimeout(function(){this.select(true)}.bind(this),0);}else{setTimeout(function(){this.tab_stop_ignore_focus=false}.bind(this.tokenizer),0);}}
token.prototype.remove=function(focus){this.element.parentNode.removeChild(this.element);this.element.token=null;this.tokenizer.selected_token=null;if(focus){this.tokenizer._onmousedown();}
if(this.obj){this.tokenizer._ontokenremoved(this.obj);}}
token.prototype.deselect=function(){CSS.setClass(this.element,trim(this.element.className.replace('token_selected','')));this.tokenizer.selected_token=null;}

function tokenizer_input(tokenizer,caret){if(!tokenizer_input.hacks){tokenizer_input.should_use_borderless_hack=ua.safari();tokenizer_input.should_use_shadow_hack=ua.ie()<8||ua.opera();tokenizer_input.hacks=true;}
this.tokenizer=tokenizer;tokenizer.tokenizer_input=this;this.obj=document.createElement('input');this.obj.input=this;this.obj.tabIndex=-1;this.obj.size=1;this.obj.onmousedown=function(event){(event?event:window.event).cancelBubble=true}.bind(this);this.shadow=document.createElement('span');CSS.setClass(this.shadow,'tokenizer_input_shadow');this.element=document.createElement('div');CSS.setClass(this.element,'tokenizer_input'+(tokenizer_input.should_use_borderless_hack?' tokenizer_input_borderless':''));this.element.appendChild(document.createElement('div'));this.element.firstChild.appendChild(this.obj);var root=(tokenizer_input.should_use_shadow_hack?DOM.getRootElement():this.element.firstChild);root.appendChild(this.shadow);caret?tokenizer.obj.insertBefore(this.element,caret):tokenizer.obj.appendChild(this.element);this.tokenizer.tab_stop.disabled=true;this.update_shadow();this.update_shadow=this.update_shadow.bind(this);this.tokenizer.inputs.push(this);this.parent.construct(this,this.obj,this.tokenizer.typeahead_source);if(this.focused){this.focus();this.obj.select();}
copy_properties(this,tokenizer.properties||{});setInterval(this.update_shadow.bind(this),100);}
tokenizer_input.extend('typeaheadpro');tokenizer_input.prototype.gen_nomatch=tokenizer_input.prototype.gen_loading=tokenizer_input.prototype.gen_placeholder=tokenizer_input.prototype.gen_noinput='';tokenizer_input.prototype.max_display=8;tokenizer_input.prototype.setup_anchor=function(){return this.tokenizer.obj;}
tokenizer_input.prototype.update_shadow=function(){if(this.obj===null){return;}
try{var val=this.obj.value;}catch(e){return};if(this.shadow_input!=val){this.shadow.innerHTML=htmlspecialchars((this.shadow_input=val)+'^_^');if(tokenizer_input.should_use_shadow_hack){this.obj.style.width=this.shadow.offsetWidth+'px';this.obj.value=val;}}}
tokenizer_input.prototype._onblur=function(e){if(this.parent._onblur(e)===false){return false;}
this.tokenizer._onblur(e);if(this.changed&&!this.interactive){this.dirty_results();this.changed=false;return;}
if(this.changed||this.interactive){this.select_suggestion(this.selectedindex);}
setTimeout(function(){this.disabled=false}.bind(this.tokenizer.tab_stop),1000);tokenizerToDestroy=this;setTimeout(function(){tokenizerToDestroy.destroy();},0);}
tokenizer_input.prototype._onfocus=function(){this.tokenizer.tab_stop.disabled=true;this.parent._onfocus();return true;}
tokenizer_input.prototype._onkeydown=function(event){switch(event.keyCode){case 13:break;case 37:case 8:if(this.get_selection_start()!=0||this.obj.value!=''){break;}
var prev=this.element.previousSibling;if(prev&&prev.token){setTimeout(prev.token.select.bind(prev.token),0);}
break;case 39:case 46:if(this.get_selection_start()!=this.obj.value.length){break;}
var next=this.element.nextSibling;if(next&&next.token){setTimeout(next.token.select.bind(next.token),0);}
break;case 188:this._onkeydown({keyCode:13});return false;case 9:if(this.obj.value){this.advance_focus();this._onkeydown({keyCode:13});return false;}else if(!event.shiftKey){this.advance_focus();this.parent._onkeydown(event);return false;}
break;}
return this.parent._onkeydown(event);}
tokenizer_input.prototype._onkeypress=function(event){switch(event.keyCode){case 9:return false;}
setTimeout(this.update_shadow,0);return this.parent._onkeypress(event);}
tokenizer_input.prototype.select_suggestion=function(index){if(this.suggestions&&index>=0&&this.suggestions.length>index){var inputs=this.tokenizer.obj.getElementsByTagName('input');var id=this.suggestions[index].i;for(i=0;i<inputs.length;i++){if(inputs[i].name==this.tokenizer.obj.id+'[]'&&inputs[i].value==id){return false;}}}
return this.parent.select_suggestion(index);}
tokenizer_input.prototype.get_selection_start=function(){if(this.obj.selectionStart!=undefined){return this.obj.selectionStart;}else{return Math.abs(document.selection.createRange().moveStart('character',-1024));}}
tokenizer_input.prototype.onselect=function(obj){if(this.get_value()==''&&this.last_key==13){return this.tokenizer.onsubmit();}else if(obj){var inputs=this.tokenizer.obj.getElementsByTagName('input');for(i=0;i<inputs.length;i++){if(inputs[i].name==this.tokenizer.obj.id+'[]'&&inputs[i].value==obj.i){return false;}}
new token(obj,this.tokenizer,this.element);this.clear();if(this.tokenizer.max_selections<=this.tokenizer.count_names()){this.destroy.bind(this).defer();}
this.tokenizer._ontokenadded(obj);}
this.tokenizer.typeahead_source.onselect_not_found.call(this);return false;}
tokenizer_input.prototype._onsubmit=function(){return false;}
tokenizer_input.prototype.capture_submit=function(){return false;}
tokenizer_input.prototype.clear=function(){this.parent.clear();this.update_shadow();}
tokenizer_input.prototype.destroy=function(){this.parent.destroy();if(this.shadow&&tokenizer_input.should_use_shadow_hack){DOM.remove(this.shadow);}
if(this.element){DOM.remove(this.element);}
if(this.tokenizer){var index=this.tokenizer.inputs.indexOf(this);if(index!=-1){this.tokenizer.inputs.splice(index,1);}}
this.tokenizer=this.element=this.shadow=null;return null;}

function tokenizer(obj,typeahead_source,nofocus,max_selections,properties){if(ua.safari()<500){tokenizer.valid_arrow_count=0;tokenizer.valid_arrow_event=function(){return tokenizer.valid_arrow_count++%2==0};}else{tokenizer.valid_arrow_event=function(){return true};}
this.obj=obj;this.obj.tokenizer=this;this.obj.name=obj.id;this.typeahead_source=typeahead_source;while(!/\btokenizer\b/.test(this.obj.className)){this.obj=this.obj.parentNode;}
this.tab_stop=this.obj.getElementsByTagName('input')[0];this.inputs=[];this.tokenizer_inputs=[];this.obj.onmousedown=function(event){return this._onmousedown(event?event:window.event)}.bind(this);this.tab_stop.onfocus=function(event){return this._onfocus(event?event:window.event)}.bind(this);this.tab_stop.onblur=function(event){return this.tab_stop_onblur(event?event:window.event)}.bind(this);this.tab_stop.onkeydown=function(event){return this.tab_stop_onkeydown(event?event:window.event)}.bind(this);if(!nofocus&&elementY(this.obj)>0&&this.obj.offsetWidth){this._onfocus();}
this.max_selections=max_selections;copy_properties(this,properties||{});this.properties=properties;if(this.inline_placeholder_text){this.init_inline_placeholder();}}
tokenizer.prototype.onsubmit=bagofholding;tokenizer.prototype.setName=function(name){this.obj.name=name;}
tokenizer.is_empty=function(obj){if(CSS.hasClass(obj,'tokenizer_locked')){return obj.getElementsByTagName('input').length==0;}else{return(!obj.tokenizer||obj.tokenizer.count_names()==0);}}
tokenizer.prototype.get_token_values=function(){var r=[];var inputs=this.obj.getElementsByTagName('input');for(var i=0;i<inputs.length;++i){if(inputs[i].name&&inputs[i].value){r.push(inputs[i].value);}}
return r;}
tokenizer.prototype.get_token_strings=function(){var r=[];var tokens=this.obj.getElementsByTagName('a');for(var i=0;i<tokens.length;++i){if(typeof tokens[i].token!='undefined'){r.push(tokens[i].token.text);}}
return r;}
tokenizer.prototype.clear=function(){var tokens=this.obj.getElementsByTagName('a');for(var i=tokens.length-1;i>=0;--i){if(typeof tokens[i].token!='undefined'){tokens[i].token.remove();}}}
tokenizer.prototype.clear_current_input=function(){this.tokenizer_input.clear();}
tokenizer.prototype._onmousedown=function(event){if(this.onfocus){this.onfocus();}
this.hide_inline_placeholder();setTimeout(function(){if(!this.inputs.length){if(this.max_selections>this.count_names()){this.tokenizer_inputs.push(new tokenizer_input(this));}else{var tokens=this.obj.getElementsByTagName('a');for(var i=tokens.length-1;i>=0;i--){if(typeof tokens[i].token!='undefined'){tokens[i].token.select();break;}}}}else{this.inputs[0].focus();}}.bind(this),0);event?event.cancelBubble=true:false;return false;}
tokenizer.prototype._onfocus=function(event){if(this.tab_stop_ignore_focus){this.tab_stop_ignore_focus=false;return;}
this._onmousedown();}
tokenizer.prototype._onblur=function(event){if(this.onblur){this.onblur();}
this.show_inline_placeholder();}
tokenizer.prototype.tab_stop_onblur=function(event){this.selected_token?this.selected_token.deselect():false;}
tokenizer.prototype.tab_stop_onkeydown=function(event){if(!event.keyCode||!this.selected_token){return;}
switch(event.keyCode){case 8:case 46:var tok=this.selected_token;var prev=tok.element.previousSibling;if(prev&&prev.input){prev.input.element.focus();}else{this.tokenizer_inputs.push(new tokenizer_input(this,tok.element));}
tok.remove();return false;case 37:if(!tokenizer.valid_arrow_event()){break;}
var tok=this.selected_token;var prev=tok.element.previousSibling;if(prev&&prev.input){prev.input.element.focus();}else if(this.max_selections>this.count_names()){this.tokenizer_inputs.push(new tokenizer_input(this,tok.element));}else{return false;}
tok.deselect();return false;case 39:if(!tokenizer.valid_arrow_event()){break;}
var tok=this.selected_token;var next=tok.element.nextSibling;if(next&&next.input){next.input.focus();}else if(this.max_selections>this.count_names()){var new_input=new tokenizer_input(this,tok.element.nextSibling);this.tokenizer_inputs.push(new_input);}else{return false;}
tok.deselect();return false;}}
tokenizer.prototype.count_names=function(plus){var inputs=this.obj.getElementsByTagName('input');var uniq={};var count=0;for(var i=0;i<inputs.length;i++){if(inputs[i].type=='hidden'&&!uniq[inputs[i].value]){uniq[inputs[i].value]=true;++count;}}
if(plus){for(var j=0;j<plus.length;j++){if(!uniq[plus[j]]){uniq[plus[j]]=true;++count;}}}
return count;}
tokenizer.prototype.disable=function(){this.tab_stop.parentNode.removeChild(this.tab_stop);this.obj.className+=' tokenizer_locked';}
tokenizer.prototype._ontokenadded=function(obj){if(this.ontokenadded){this.ontokenadded.call(this,obj);}}
tokenizer.prototype._ontokenremoved=function(obj){if(this.ontokenremoved){this.ontokenremoved.call(this,obj);}}
tokenizer.prototype._ontokennotfound=function(text){if(this.ontokennotfound){this.ontokennotfound.call(this,text);}}
tokenizer.prototype.init_inline_placeholder=function(){if(this.inline_placeholder){return;}
var placeholder=$N('span',{className:'inline_placeholder'},this.inline_placeholder_text);if(!tokenizer.is_empty(this.obj)){placeholder.setStyle('display','none');}
this.obj.appendChild(placeholder);this.inline_placeholder=placeholder;}
tokenizer.prototype.show_inline_placeholder=function(){if(this.inline_placeholder&&tokenizer.is_empty(this.obj)){show(this.inline_placeholder);}}
tokenizer.prototype.hide_inline_placeholder=function(){if(this.inline_placeholder&&shown(this.inline_placeholder)){hide(this.inline_placeholder);}}
tokenizer.prototype.get_source=function(){return this.typeahead_source;}
tokenizer.prototype.set_source=function(source){this.typeahead_source=source;if(this.tokenizer_inputs.length){for(var ii=0;ii<this.tokenizer_inputs.length;ii++){this.tokenizer_inputs[ii].set_source(source);}}
if(this.tokenizer_input){this.tokenizer_input.set_source(source);}}

if (window.Bootloader) { Bootloader.done(["js\/3qjara4kghyco8gg.pkg.js"]); }
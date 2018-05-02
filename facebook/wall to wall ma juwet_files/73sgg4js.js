/*    HTTP Host:  b.static.ak.fbcdn.net                                        */
/*    Generated:  September 2nd 2009 3:50:39 PM PDT                            */
/*      Machine:  10.16.140.103                                                */
/*       Source:  Local Cache                                                  */
/*     Location:  rsrc:4:73sgg4js                                              */
/*       Locale:  nu_ll                                                        */
/*         Path:  js/ec01ciwev88ckgco.pkg.js                                   */


function pymkGrid(grid_id,show_explanation){copy_properties(this,{used_ids:[],boxes_displayed:0,payload_timeouts:0,grid_id:null,pymk_more_link:null,show_explanation:null});if(grid_id&&ge(grid_id)){this.grid_id=grid_id;this.show_explanation=!!show_explanation;this.grid_obj=$(grid_id);var id_divs=DOM.scry(this.grid_obj,'div.friend_grid_col');for(var i=0;i<id_divs.length;i++){div_id=id_divs[i].getAttribute('id');index=div_id.lastIndexOf('_');this.used_ids.push(parseInt(div_id.substring(index+1)));this.boxes_displayed++;}
var more_link=DOM.scry(this.grid_obj,'a.show_more');if(more_link){this.pymk_more_link=more_link[0];}}else{Util.error('pymkGrid: Either the grid you have specified is invalid or is not detectable in the DOM.');}}
copy_properties(pymkGrid.prototype,{addFriend:function(uid,page,score,source,log){this.modifyFriendship(uid,'add',null,page,score,source,log);return;},hideFriend:function(uid,page,score,source){this.modifyFriendship(uid,'blacklist',null,page,score,source);return;},modifyFriendship:function(uid,action_type,home_panel,page,score,source,log){var friend_data=this.getGridData($('fg_'+this.grid_id+'_'+uid));var asyncData={used:this.used_ids,replace:uid,get:1,explanation:this.show_explanation,page:page,ajax_id:this.grid_id};if(action_type=='blacklist'){asyncData.click_type='hide';asyncData.blacklist_type='blacklist';asyncData.score=score;asyncData.source=source;}else if(log){asyncData.click_type='add';asyncData.score=score;asyncData.source=source;}
new AsyncRequest().setURI('/ajax/friend_guess.php').setData(asyncData).setHandler(bind(this,this.asyncHandleModify)).setReplayable(false).send();var friend_box=$('fg_'+this.grid_id+'_'+uid);animation(friend_box).from('opacity',1).to('opacity',0).duration(300).go();if(home_panel){home_panel.addTo('outgoing',home_panel.constructGridItem(friend_data));}
return;},asyncHandleRefresh:function(async){payload=async.getPayload();if(payload.victim&&payload.victim.length>0){for(var i=0;i<payload.victim.length;i++){if(this.used_ids[i]){animation($('fg_'+this.grid_id+'_'+this.used_ids[i])).from('opacity',1).to('opacity',0).duration(300).go();}}
for(var i=0;i<payload.victim.length;i++){if(this.used_ids[i]){this.replaceItem(this.used_ids[i],payload.victim[i]);}}
for(var i=0;i<payload.victim.length;i++){this.used_ids.unshift(payload.victim[i].uid);}}
if(!payload.more){this._hideMoreLink();}},asyncHandleModify:function(async){payload=async.getPayload();if(payload.victim&&payload.victim.length>0){this.replaceItem(payload.replace,payload.victim[0]);}else{this.hideItem(payload.replace);}
return;},replaceItem:function(replace,victim){var replace_id='fg_'+this.grid_id+'_'+replace;var box_id='fg_'+this.grid_id+'_'+victim.uid;if(!ge(box_id)){var new_box=DOM.create('div',{id:box_id,className:'friend_grid_col clearfix'},HTML(victim.box_content));DOM.replace($(replace_id),new_box);animation($(box_id)).from('opacity',0).to('opacity',1).duration(400).go();this.used_ids.push(victim.uid);}else{this.hideItem(replace);}},hideItem:function(replace){this.payload_timeouts++;var replace_id='fg_'+this.grid_id+'_'+replace;var anim=null;var suggestions=$$('#home_sidebar .sidebar_item.pymk');if(1==suggestions.length&&1==$$('#pymk_ajax_grid .friend_grid_row').length){anim=animation(suggestions[0]);}else{$(replace_id).unreplaceable=true;var pymkRow=$(replace_id).parentNode;var collapseRow=true;for(var i=0;i<pymkRow.childNodes.length;i++){if(!pymkRow.childNodes[i].unreplaceable){collapseRow=false;break;}}
if(collapseRow){anim=animation(pymkRow).ondone(DOM.remove.bind(null,pymkRow));}}
if(anim){anim.to('height',0).duration(550).hide().ease(animation.ease.end).go();}
this._hideMoreLink();},constructGridItem:function(grid_data){return this.constructRawGridItem(grid_data.uid,grid_data.content);},constructRawGridItem:function(uid,item_content){var gridItem=document.createElement('div');CSS.addClass(gridItem,'friend_grid_col');gridItem.setAttribute('id','friend_'+uid);gridItem.innerHTML=item_content;return gridItem;},getGridData:function(grid_object){if(CSS.hasClass(grid_object,'friend_grid_col')){var gridData={content:grid_object.innerHTML,uid:grid_object.getAttribute('id').toString().slice(3)}
return gridData;}},_removeID:function(uid){for(var i=0;i<this.used_ids.length;i++){if(this.used_ids[i]==uid){this.used_ids.splice(i,1);}}
return;},_hideMoreLink:function(){if(this.pymk_more_link){this.pymk_more_link.style.visibility='hidden';this.pymk_more_link=null;}}});function pymk_friend_added(link_object){pymk_disable_add_friend_links(link_object.uid);pymk_add_friend(link_object.uid,link_object.render_explanation,null,link_object.page,null,null,null,link_object.grid_id);}
function pymk_friend_added_no_ajax(link_object){pymk_disable_add_friend_links(link_object.uid);var asyncData={uid:link_object.uid,page:link_object.page,click_type:'add',score:link_object.score,source:link_object.source};new AsyncSignal('/ajax/pymk_logging.php',asyncData).send();}
function pymk_disable_add_friend_links(uid){var add_links=DOM.scry(document,'a.fg_add_'+uid);for(var i=0;i<add_links.length;i++){var newNode=$N('span',{className:'holder inactive'},_tx("Friend Requested"));DOM.replace(add_links[i],newNode);}
var hide_links=DOM.scry(document,'a.fg_hide_'+uid);for(var i=0;i<hide_links.length;i++){DOM.remove(hide_links[i]);}}
function pymk_page_added(uid,has_explanation,page,score,source,log,grid_id){pymk_add_friend(uid,has_explanation,null,page,score,source,log,grid_id);}
function pymk_add_friend(uid,has_explanation,existingGrid,page,score,source,log,grid_id){if(!existingGrid){if(!grid_id){grid_id='pymk_ajax_grid';}
existingGrid=new pymkGrid(grid_id,has_explanation||false);}
existingGrid.addFriend(uid,page,score,source,log);}
function pymk_hide_friend(uid,has_explanation,existingGrid,page,score,source,grid_id){if(!existingGrid){if(!grid_id){grid_id='pymk_ajax_grid';}
existingGrid=new pymkGrid(grid_id,has_explanation);}
if(!score){score=-1;}
if(!source){source='u';}
existingGrid.hideFriend(uid,page,score,source);}
function pymk_log_profile_click(uid,page,score,source){var asyncData={click_type:'profile',replace:uid,page:page,score:score,source:source};new AsyncRequest().setURI('/ajax/friend_guess.php').setData(asyncData).setReplayable(false).send();}
function req_ab_friend_confirmed(link_object){var add_links=DOM.scry(document,'a.fg_add_'+link_object.uid);for(var i=0;i<add_links.length;i++){var newNode=$N('span',{className:'holder inactive'},link_object.confirmed_text);DOM.replace(add_links[i],newNode);}
var hide_links=DOM.scry(document,'a.fg_hide_'+link_object.uid);for(var i=0;i<hide_links.length;i++){DOM.remove(hide_links[i]);}
var asyncData={friend_id:link_object.uid,click_type:'req_ab_friend_confirmed'};new AsyncSignal('/ajax/requests/ab_logging.php',asyncData).send();}
function req_ab_log_profile_click(uid){var asyncData={friend_id:uid,click_type:'req_ab_profile_click'};new AsyncSignal('/ajax/requests/ab_logging.php',asyncData).send();}

function UINav(controller,item_data,data){this.controller=controller;this.data=data;copy_properties(this,{controller:controller,data:data,items:[],selectedItem:null,selectedClass:this.selectedClass||''});this.initializeItems(item_data);UINav.instances[controller.id]=this;}
UINav.instances={};UINav.prototype.getItemContainers=abstractMethod;UINav.prototype.getItemLinks=abstractMethod;UINav.prototype.getItems=function(){return this.items;}
UINav.prototype.initializeItems=function(item_data){var containers=this.getItemContainers();for(var i=0;i<containers.length;i++){var link=(containers[i].scry('a')||[])[0];if(!link){break;}
var item={};if(this.is_wrapped){item=(item_data[i]||{});}else{item={'container':containers[i],'link':link,'data':(item_data[i]||{})};}
this.items.push(item);if(CSS.hasClass(item.container,this.selectedClass)){this.selectedItem=item;}
item.addClickHandler=this.addClickHandler.bind(this,item);item.addClickHandler(this.selectItem.bind(this,item));}}
UINav.prototype.selectItem=function(item){if(item==this.selectedItem){return true;}
if(this.selectedItem){CSS.removeClass(this.selectedItem.container,this.selectedClass);}
if(item){CSS.addClass(item.container,this.selectedClass);}
this.selectedItem=item;return true;}
UINav.prototype.deselectAll=function(){if(this.selectedItem){CSS.removeClass(this.selectedItem.container,this.selectedClass);}
this.selectedItem=null;}
UINav.prototype.getSelectedItem=function(){return this.selectedItem;}
UINav.prototype.addClickHandler=function(item,handler){if(typeof item=='function'){handler=item;this.getItems().each(function(handler,item){this.addClickHandler(item,handler);}.bind(this,handler));return true;}else{return Event.listen(item.link,'click',handler);}}
function UINavGeneric(controller,item_data,data){if(!this.selectedClass){this.selectedClass='UINavGeneric_ItemSelected';}
this.parent.construct(this,controller,item_data,data);}
UINavGeneric.extend('UINav');UINavGeneric.prototype.getItemContainers=function(){if(!this.containers){this.containers=DOM.scry(this.controller,'li');}
return this.containers;}
UINavGeneric.prototype.getItemLinks=function(){if(!this.containerLinks){this.containerLinks=DOM.scry(this.controller,'li a');}
return this.containerLinks;}
function UITabStructure(controller,item_data,data){if(!this.selectedClass){this.selectedClass='UITabStructure_TabSelected';}
this.parent.construct(this,controller,item_data,data);}
UITabStructure.extend('UINavGeneric');UITabStructure.prototype.getItemContainers=function(){if(!this.tab_containers){this.tab_containers=[];var li_elements=DOM.scry(this.controller,'li');for(var i=0;i<li_elements.length;i++){this.tab_containers.push(li_elements[i].childNodes[0]);}}
return this.tab_containers;}
function UISourceList(controller,item_data,data){if(!this.selectedClass){this.selectedClass='UISourceList_ItemSelected';}
this.parent.construct(this,controller,item_data,data);}
UISourceList.extend('UINavGeneric');

function UIFilterList(controller,item_data,data){this.selectedClass='UIObject_SelectedItem';this._itemsContainer=DOM.scry(controller,'div.UIFilterList_List')[0];this.parent.construct(this,controller,item_data,data);}
UIFilterList.extend('UINav');UIFilterList.prototype.getItemContainers=function(){if(!this.containers){this.containers=DOM.scry(this.controller,'div.UIFilterList_Item');}
return this.containers;}
UIFilterList.prototype.getItemLinks=function(){if(!this.containerLinks){this.containerLinks=DOM.scry(this.controller,'div.UIFilterList_Item a');}
return this.containerLinks;}
UIFilterList.prototype.resetItemContainers=function(){this.containers=null;}
UIFilterList.prototype.resetItemLinks=function(){this.containerLinks=null;}
UIFilterList.prototype.setEditIconHandler=function(handler){this._editIconHandler=handler;return this;}
UIFilterList.prototype.setLoading=function(loading){CSS.conditionClass(this.controller,'UIFilterList_Loading',loading);}
UIFilterList.prototype.setCreateLinkHandler=function(handler){var elem=DOM.find(this.controller,'a.UIFilterList_Create');elem.listen('click',handler);}
UIFilterList.prototype.addItem=function(title,href,pos,icon,data){if(!pos){pos=0;}
var items=this.getItems();data=data?data:{};var main_div=$N('div',{className:'UIFilterList_Item'});var link=$N('a',{className:'UIFilterList_ItemLink',href:href});if(icon){var icon_span=$N('span',{className:'UIImageBlock_Image UIFilterList_Icon'});icon_span.setStyle('backgroundImage','url('+icon+')');var image_block=$N('div',{className:'UIImageBlock clearfix'});image_block.appendContent(icon_span);image_block.appendContent($N('div',{className:'UIImageBlock_Content UIFilterList_Title'},title));link.appendContent(image_block);}else{link.appendContent($N('div',{className:'UIImageBlock_Content UIFilterList_Title'},title));}
var loading=$N('span',{className:'UIFilterList_LoadingIndicator'});main_div.setContent([link,loading]);var item={container:main_div,link:link,data:data};if(items.length>0){if(this.getItems()[pos]){DOM.insertBefore(main_div,items[pos].container);}else{pos=pos-1;DOM.insertAfter(items[pos].container,main_div);}}else{this._itemsContainer.appendContent(main_div);CSS.removeClass(this.controller,'UIFilterList_HasBlankState');}
this.getItems().splice(pos,0,item);this.getItemContainers().splice(pos,0,item.container);this.getItemLinks().splice(pos,0,item.link);return item;}
UIFilterList.prototype.setItemTitle=function(item,title){var title_span=DOM.find(item.link,'span.UIFilterList_Title');title_span.setContent(title);}
UIFilterList.prototype.removeItem=function(item){var items=this.getItems();var item_index=null;for(var i=0;i<items.length;i++){if(items[i]==item){item_index=i;break;}}
if(item_index!=null){if(this.selectedItem==item){this.selectItem(null);}
this.getItemContainers().splice(item_index,1);this.getItemLinks().splice(item_index,1);this.getItems().splice(item_index,1);DOM.remove(item.container);}
if(items.length==0){CSS.addClass(this.controller,'UIFilterList_HasBlankState');}}

if (window.Bootloader) { Bootloader.done(["js\/ec01ciwev88ckgco.pkg.js"]); }
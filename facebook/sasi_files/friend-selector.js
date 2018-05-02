FRIENDSTER.components.friendSelector = function (

      user_id,  //required
      input_id,  //required
      container_id, //required
      hidden_input,//required
      include_me, 
      exclude_ids,
      src

      ) {

   //optional params
   var includeMe   = include_me   || false;
   var excludeIds  = exclude_ids  || [];
   var src  = src  || 'friend-selector';

   //create data store
   this.oACDS = new YAHOO.widget.DS_XHR("/ajax/autofill_names.php");

   this.oACDS.responseType = YAHOO.util.XHRDataSource.TYPE_JSON;
   this.oACDS.responseSchema = {
resultsList: "users",
             fields: [{key: "name"}, {key: "id"}]
   };
   this.oACDS.queryMatchContains = true;
   this.oACDS.scriptQueryParam = "search_prefix";
   this.oACDS.scriptQueryAppend = "include_me="+includeMe+"&exclude_ids="+excludeIds+"&uid="+user_id+"&src="+src;

   // Instantiate AutoComplete
   this.oAutoComp = new YAHOO.widget.AutoComplete(input_id,container_id, this.oACDS);
   this.oAutoComp.useShadow = true;
   this.oAutoComp.resultTypeList = false;
   this.oAutoComp.formatResult = function(oResultItem, sQuery) {
      return oResultItem.name;
   };

   this.oAutoComp.doBeforeExpandContainer = function(oTextbox, oContainer, sQuery, aResults) {   
      var pos = YAHOO.util.Dom.getXY(oTextbox);
      pos[1] += YAHOO.util.Dom.get(oTextbox).offsetHeight + 2;
      YAHOO.util.Dom.setXY(oContainer,pos);
      return true;  
   };

   this.oAutoComp.itemSelectEvent.subscribe(function(e, args) {
         _updateFormFields(args[2]);
         });

   //helper
   function _updateFormFields(obj) {
      var id = obj.id || "";
      var name = obj.name || "";
      YAHOO.util.Dom.get(hidden_input).value = id;
      YAHOO.util.Dom.get(input_id).value = name;  

   }    

};

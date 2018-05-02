/*!CK:2246422750!*//*1392692706,178174815*/

if (self.CavalryLogger) { CavalryLogger.start_js(["3T1pE"]); }

__d("XIntlSeeTranslationControllerURIBuilder",["XControllerURIBuilder"],function(a,b,c,d,e,f,g){e.exports=g.create("\/intl\/see_translation\/",{ftid:{type:"String",required:true}});});
__d("IntlSeeTranslate",["AsyncRequest","cx","DOM","Event","fbt","highlight","LoadingIndicator.react","React","XIntlSeeTranslationControllerURIBuilder"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){function p(r,s){var t=i.create('div',{'class':"_5yn0"},s||"No translation available");i.replace(r,t);if(s)l(t);}var q={bindListener:function(r,s){j.listen(r,'click',function(){n.renderComponent(m({size:"small",color:"white"}),r);var t=new o().setString('ftid',s).getURI();new g().setURI(t).setHandler(function(u){var v=u.getPayload();p(r,v&&v.text);}).setErrorHandler(function(){p(r,null);}).send();});}};e.exports=q;});
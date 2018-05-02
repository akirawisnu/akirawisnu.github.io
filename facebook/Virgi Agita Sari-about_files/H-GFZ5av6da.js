/*!CK:574476064!*//*1392699324,178174743*/

if (self.CavalryLogger) { CavalryLogger.start_js(["kdx20"]); }

__d("TimelineYearOverviewClickLogging",["BanzaiLogger","Event","Parent","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j){var k=10,l='data-logging';function m(n,o){j(h.listen(o,'click',function(p){var q=i.byAttribute(p.getTarget(),l);if(q){n.event=q.getAttribute(l);g.create({delay:k}).log('TimelineYearOverviewLoggerConfig',n);}}));}f.init=m;});
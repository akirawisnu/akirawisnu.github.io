var Class  = {};
Class.create = function() {
	return function(){};
}

var Container = Class.create();
Container.prototype = {
        maxHeight: 4096,
        
        initialize: function() {
        
                // rpc services our container supports
                gadgets.rpc.register('resize_iframe', this.setHeight);
                gadgets.rpc.register('set_pref', this.setUserPref);
                gadgets.rpc.register('set_title', this.setTitle);
                gadgets.rpc.register('requestNavigateTo', this.requestNavigateTo);
        },
        
        setHeight: function(height) {
                if (document.getElementById(this.f) != undefined) {
                        // change the height of the gadget iframe, limit to maxHeight height
                        if (height > gadgets.container.maxHeight) {
                           height = gadgets.container.maxHeight;
                        }
	                    document.getElementById(this.f).height=(height+'px');
                }
        },
        
        _parseIframeUrl: function(url) {
                // parse the iframe url to extract the key = value pairs from it
                var ret = new Object();
                var hashParams = url.split('&');
                var param = key = val = '';
                for (i = 0 ; i < hashParams.length - 1 ; i++) {
                        param = hashParams[i];
                        key = param.substr(0, param.indexOf('='));
                        val = param.substr(param.indexOf('=') + 1);
                        ret[key] = val;
                }
                return ret;
        },
        
        setUserPref: function(editToken, name, value) {
                // we use the security token to tell our backend who this is (app/mod/viewer)
                // since it's the only fail safe way of doing so
                if (document.getElementById(this.f) != undefined) {
                        var params = gadgets.container._parseIframeUrl(document.getElementById(this.f).src);
                        //TODO use params.st to make the store request, it holds the owner / viewer / app id / mod id required
//                        new Ajax.Request('/prefs/set?st='+encodeURIComponent(params.st)+'&name='+encodeURIComponent(name)+'&value='+encodeURIComponent(value), {method: 'get'});

                }
        },
        
        setTitle: function(title) {
				var element = document.getElementById(this.f+'_title');
                if (element != undefined) {
                        // update the title, and make sure we don't break it's html
                        element.innerHTML = title.replace(/&/g, '&amp;').replace(/</g, '&lt;');
                }
        },
//synd=friendster&container=default&viewer=18881&owner=18881&aid=2002&mid=1&nocache=1&country=US&lang=EN&view=profile&parent=http%3A%2F%2Fvm.testprofiles.friendster.com&st=st&url=http%3A%2F%2Fvm.test.friendster.com%2Fdeveloper%2Fsamples%2Fnotifications%2Fnotification.xml#rpctoken=1369123840
        _getUrlForView: function(view, person, app, mod) {
                if (view === 'home') {
//                        return '/home';
                        return null;
                } else if (view === 'profile') {
                        return profileURL + "/" + person;
                } else if (view === 'canvas') {
                        return widgetsURL + "/" + app;
                } else {
                        return null;
                }
        },
        
        requestNavigateTo: function(view, opt_params) {
        
                if (document.getElementById(this.f) != undefined) {
                        var params = gadgets.container._parseIframeUrl(document.getElementById(this.f).src);
                        var url = gadgets.container._getUrlForView(view, params.owner, params.appName, params.mid);
                        if (opt_params) {
                                var paramStr = gadgets.json.stringify(opt_params);
                                if (paramStr.length > 0) {
                                        url += '?appParams=' + encodeURIComponent(paramStr);
                                }
                        }
                        if (url && document.location.href.indexOf(url) == -1) {
                                document.location.href = url;
                        }
                }
        }
}

// Create and initialize our container class
gadgets.container = new Container();
gadgets.container.initialize();

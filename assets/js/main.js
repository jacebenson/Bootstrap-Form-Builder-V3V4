require.config({
  baseUrl: "assets/js/lib/",
  paths: {
	'jquery': '//code.jquery.com/jquery-2.1.0',
	'mustache' : "//rawgithub.com/janl/mustache.js/master/mustache",
	'bootstrap' : "//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap",
	'underscore' :  "//rawgithub.com/jashkenas/underscore/master/underscore",
	'text'  : "//rawgithub.com/requirejs/text/latest/text",
	'app'   : "..",
	 collections : "../collections", 
	 data        : "../data", 
	 models      : "../models", 
	 helper      : "../helper", 
	 templates   : "../templates", 
	 views       : "../views"
  }, shim: {
    'underscore': {
	      exports: '_'
	},  
	  
    'bootstrap': {
      deps: ['jquery'],
      exports: '$.fn.popover'
    }
  }
});

require(['app/app'], function(app){
  app.initialize();
});
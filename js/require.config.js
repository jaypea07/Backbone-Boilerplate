var require = {
	paths: {

		// Libraries
		bootstrap: [
			'//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min'
			, 'js/libs/bootstrap.min'
		]
		, backbone: [
			'http://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.0/backbone-min'
			, 'js/libs/backbone.min'
		]
		, jquery: [
			'//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min'
			, 'js/libs/jquery.min'
		]
		, underscore: [
			'//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min'
			, 'js/libs/underscore.min'
		]

		// Plugins
		, text: 'js/text'
	}

	, shim: {
		'backbone': {
			deps: ['jquery', 'underscore']
			, exports: 'Backbone'
		}
		, 'bootstrap': {
			deps: ['jquery']
			, exports: 'Bootstrap'
		}
		, 'jquery': {
			exports: '$'
		}
		, 'underscore': {
			exports: '_'
		}
	}
};
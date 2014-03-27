var require = {
	paths: {
		bootstrap: [
			'//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min'
			, 'js/bootstrap.min'
		]
		, backbone: 'http://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.0/backbone-min'
		, jquery: 'http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min'
		, text: 'js/text'
		, underscore: 'http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min'
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
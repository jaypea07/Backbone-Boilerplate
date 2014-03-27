require([
	'jquery'
	, 'underscore'
	, 'bootstrap'
	, 'backbone'
	, 'text!templates/header.html'
	, 'text!templates/home.html'
	, 'text!templates/footer.html'
], function ($, _, bootstrap, Backbone, headerTpl, homeTpl, footerTpl) {

	var App = new (Backbone.View.extend({
		Models: {}
		, Collections: {}
		, Views: {}
		, events: {

		}
	}))({el: document.body});


	App.Views.Header = Backbone.View.extend({
		el: '#header',
		templateFileName: 'header.html',
		template: headerTpl,

		initialize: function() {
			// $.get(this.templateFileName, function(data){console.log(data);this.template=data});		
		},
		render: function() {
			$(this.el).html(_.template(this.template));
		}
	});


	App.Views.Footer = Backbone.View.extend({
		el: '#footer',
		template: footerTpl,
		render: function() {
			this.$el.html(_.template(this.template));
		}
	});


	App.Views.Home = Backbone.View.extend({
		el: '#content',
		template: homeTpl,
		initialize: function() {

		},
		render: function() {
			$(this.el).html(_.template(this.template));
		}
	});


	App.Router = new (Backbone.Router.extend({
		routes: {
			'': 'home'
			, '*actions': 'home'
		},
		initialize: function() {
			this.headerView = new App.Views.Header();
			this.headerView.render();
			this.footerView = new App.Views.Footer();
			this.footerView.render();
			Backbone.history.start();
		},
		home: function() {
			this.homeView = new App.Views.Home();
			this.homeView.render();
		}
	}))();
});
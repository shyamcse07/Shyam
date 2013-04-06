Ext.define("Verizon.controller.HomeController", {
	extend : "Ext.app.Controller",
	views : [ "HomeView", "home.CenterHomePanel", "home.WestHomePanel",
			"home.NorthHomePanel" ],
	models : [ "Theatre" ],
	stores : [ "TheatreStore" ],
	refs : [ {
		ref : "centerhomepanel",
		selector : "#centerhomepanel"
	}, {
		ref : "theatresGrid",
		selector : "#theatresgrid"
	} ],

	init : function() {
		this.control({
			"#centerhomepanel" : {
				beforerender : this.beforeRenderCenterHomePanel
			}
		});
	},

	beforeRenderCenterHomePanel : function() {
		var store = Ext.getStore("TheatreStore");
		store.load();
		this.getTheatresGrid().reconfigure(store);
	}

});
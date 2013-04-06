Ext.Loader.setConfig({
	enabled : true
});

Ext.application({
	name : "Verizon",
	appFolder : "app",
	controllers : [ "LoginController", "HomeController" ],
	launch : function() {
		this.mainView = Ext.create("Ext.container.Viewport", {
			renderTo : Ext.getBody(),
			layout : "card",			
			items : [ {
				xtype : "loginpanel"
			} ]
		});
	}
});
Ext.define("Verizon.view.HomeView", {
	extend : "Ext.container.Viewport",
	xtype : "homeview",
	layout : "border",
	items : [ {
		xtype : "container",
		height : 200,
		html : "Welcome",
		region : "north"
	}, {
		xtype : "container",
		html : "Center",
		region : "center"
	}, {
		xtype : "container",		
		html : "West",
		width : 400,
		region : "west"
	}

	]
});
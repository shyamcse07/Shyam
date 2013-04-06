Ext.define("Verizon.view.HomeView", {
	extend : "Ext.panel.Panel",
	xtype : "homeview",
	layout : "border",
	items : [ {
		xtype : "northhomepanel",
		height : 200,
		region : "north",
		id : "northhomepanel"
	}, {
		xtype : "centerhomepanel",
		region : "center",
		id : "centerhomepanel"
	}, {
		xtype : "westhomepanel",
		width : 300,
		region : "west",
		id : "westhomepanel"
	}

	]
});
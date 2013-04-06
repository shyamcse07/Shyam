Ext.define("Verizon.view.home.CenterHomePanel", {
	extend : "Ext.panel.Panel",
	xtype : "centerhomepanel",
	items : [ {
		xtype : "grid",
		height: 500,
		id : "theatresgrid",
		store : null,
		columns : [ {
			text : "Name",
			dataIndex : "name"
		}, {
			text : "Location",
			dataIndex : "location"
		}, {
			text : "Screens",
			dataIndex : "screens"
		} ]

	} ]
});
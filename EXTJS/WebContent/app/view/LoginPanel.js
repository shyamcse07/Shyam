Ext.define("Verizon.view.LoginPanel", {
	extend : "Ext.panel.Panel",
	xtype : "loginpanel",
	title : "Login",
	height : 200,
	width : 300,
	bodyPadding : 20,
	layout : {
		type : "vbox",
	},
	items : [ {
		xtype : "textfield",
		fieldLabel : "Username",
		id : "userName"
	}, {
		xtype : "textfield",
		fieldLabel : "Password",
		inputType : "password",
		id : "passWord"
	}, {
		xtype : "button",
		text : "Submit",
		id : "submitBtn"
	}, {
		xtype : "label",
		id : "statusLabel",
		margin : '10 5 2 3'
	} ]
});



/*Ext.define("Verizon.view.LoginPanel", {
	extend : "Ext.container.Viewport",
	xtype : "loginpanel",
	layout : {
		type : "vbox",
	},
	items : [ {
		xtype : "panel",
		title : "Login",
		id    : "lPanel" 
		height : 200,
		width : 300,
		bodyPadding : 20,
		layout : {
			type : "vbox",
		},
		items : [

		{
			xtype : "textfield",
			fieldLabel : "Username",
			id : "userName"
		},

		{
			xtype : "textfield",
			fieldLabel : "Password",
			inputType : "password",
			id : "passWord"
		},

		{
			xtype : "button",
			text : "Submit",
			id : "submitBtn"
		}, {
			xtype : "label",
			id : "statusLabel",
			margin : '10 5 2 3'
		}

		]
	}

	]
});
 */


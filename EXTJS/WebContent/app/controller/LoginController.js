Ext.define("Verizon.controller.LoginController", {
	extend : "Ext.app.Controller",
	views : [ "LoginPanel" ],
	models : [],
	stores : [],
	refs : [ {
		ref : "submitBtn",
		selector : "#submitBtn"
	}, {
		ref : "userName",
		selector : "#userName"
	}, {
		ref : "passWord",
		selector : "#passWord"
	}, {
		ref : "statusLabel",
		selector : "#statusLabel"
	} ],
	init : function() {
		this.control({

			"#submitBtn" : {
				click : this.onSubmitButtonClicked
			}

		}

		);
	},

	onSubmitButtonClicked : function() {
		this.application.mainView.add({
			xtype : "homeview",
			id : "homeview"
		});
		this.application.mainView.getLayout().setActiveItem("homeview");

	}
});
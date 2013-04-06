Ext.define("Verizon.store.TheatreStore",{
	extend : "Ext.data.Store",
	model : "Verizon.model.Theatre",
	autoLoad : false,
	proxy : {
		type : "ajax",
		url : "Theatre.txt",
		reader : {
			type : "json",
			root : "theatresInChennai"
		}
	}
});
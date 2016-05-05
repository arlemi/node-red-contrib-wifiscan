module.exports = function(RED) {

	var wifiscanner = require('wifiscanner.js');

	function WifiScanNode(config) {
		RED.nodes.createNode(this,config);
		var node = this;

		this.log('wifiscan - Initialized') ;

		node.on("input", function(msg) {
			this.log('wifiscan - Input received');
			wifiscanner.scan(function(err, data){
			    if (err) {
			        console.log("Error : " + err);
			        return;
			    }

			    console.log(data);
			});
		});


	}
	RED.nodes.registerType("wifiscan", WifiScanNode);
};

var wifiscanner = require('wifiscanner.js');

module.exports = function(RED) {

	function WifiScanNode(n) {
		RED.nodes.createNode(this,n);
		var node = this;
		node.target = n.target;
		node.scantype = n.scantype;

		node.on("input", function(msg) {
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

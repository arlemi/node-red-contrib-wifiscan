module.exports = function(RED) {

	var wifiscanner = require('node-wifiscanner');

	function WifiScanNode(config) {
		RED.nodes.createNode(this,config);
		var node = this;

		this.log('wifiscan - Initialized') ;

		node.on("input", function(msg) {
			this.log('wifiscan - Input received');
      		this.status({fill:'blue', shape:'ring', text:'requesting'});
			wifiscanner.scan(function(err, data){
			    if (err) {
		          msg.payload = 'Error: ' + err;
		          node.send(msg);
		          node.status({fill:'red', shape:'ring', text:'request error'});
			    } else {
		          msg.payload = data;
		          node.send(msg);
		          node.status({});
			    }
			});
		});


	}
	RED.nodes.registerType("wifiscan", WifiScanNode);
};

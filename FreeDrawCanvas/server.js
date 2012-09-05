	//require.paths.unshift('./node_modules')

var express = require('express');
var app = module.exports = express.createServer();
var port = process.env.PORT || 8080;

app.configure(function() {
  // app configuration
  app.use(express.logger());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.session({ secret: "FreeDrawCanvas" }));
  app.use(express.static(__dirname + '/public'));
});

require('./FDC_SocketServer');
require('./main');

app.listen(port);

console.log('Ready for Free Drawing on port ' + port );
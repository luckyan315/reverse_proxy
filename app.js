var logger = require('./logger.js');
var proxy = require('./proxy.js');

var PORT = 3000;

var proxyServer = proxy({target: 'http://127.0.0.1:8888'});

proxyServer.listen(3000, function(){
  logger.log('Proxy Server is listening on ', PORT);
});

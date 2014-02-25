/**
 * Proxy Server Factory
 *
 * Copyright (C) 2014 guanglin.an (lucky315.an@gmail.com)
 * 
 */

"use strict";

var ReverseProxy = require('./reverse_proxy');

/**
 * Expose `createServer()`.
 */
exports = module.exports = createServer;

function createServer(opt){
  var proxy = new ReverseProxy(opt);
  proxy.createServer();

  return proxy;
}

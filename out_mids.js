/**
 * Middlewares about dealing with outgoing message (response) from target webserver
 *
 * Copyright (C) 2014 guanglin.an (lucky315.an@gmail.com)
 * 
 */

"use strict";

var logger = require('./logger.js');

var OutgoingMiddlewares = exports = module.exports;

[
  function beforeResponse(req, res, proxyRes, proxy){
    //TODO:
    logger.debug('[out][BeforeResponse] middleware entered!');
  },
  function wrapResponse(req, res, proxyRes, proxy){
    //TODO:
    logger.debug('[out][WrapResponse] middleware entered!');
    logger.debug('[ProxyRes][Header]', proxyRes.headers);

    //copy headers
    Object.keys(proxyRes.headers).forEach(function(attr){
      logger.debug('[SetHeader]', attr, proxyRes.headers[attr]);
      res.setHeader(attr, proxyRes.headers[attr]);
    });

    //copy status code
    res.writeHead(proxyRes.statusCode);

  }
].forEach(function(middleware){
  OutgoingMiddlewares[middleware.name] = middleware;
});

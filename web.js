var express = require('express');

var app = express.createServer(express.logger());

fs = require('fs')
fs.readFile('./index.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var snowman = new Buffer(data)
  snowman.toString("utf-8",data);
});

/**
 * Created by lenovo on 2017/10/31.
 */
const express = require('express');
const path = require('path');
const glob = require('glob');
const fs = require('fs');

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  next();
});

app.use(function(req, res) {
  let url = req.path;
  let query = req.query;
  console.log(query);
  let path = resolve('../mock' + url + '/' + query.name + '.json');
  console.log(path);
  if (fs.existsSync(path)) {
    res.sendFile(path);
  } else {
    res.status(404);
    res.send("NOT FOUND FILE");
  }
});

app.listen(8098, function() {
  console.log('server start at: localhost:8098');
});


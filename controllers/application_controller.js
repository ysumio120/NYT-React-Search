var express = require("express");
var path = require("path");
var Articles = require("../models/articles");

var router = express.Router();

router.get("/", function(req, res) {
	res.sendFile(path.join(__dirname + '/../index.html'))
})

router.get("/api/saved", function(req, res) {
  res.send("test");
})

router.post("/api/saved", function(req, res) {
  var title = req.body.title;
  var date = req.body.date;
  var url = req.body.url;

  Articles.create({title: title, url: url, date: date}, function(err, article) {
    if(err) throw err;

    res.send("ok");
  })
})

router.delete("/api/saved", function(req, res) {
  
})

module.exports = router;
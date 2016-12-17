var express = require("express");
var path = require("path");
var mongoose = require("mongoose");
var Articles = require("../models/articles");

var router = express.Router();

router.get("/", function(req, res) {
	res.sendFile(__dirname + "/../index.html");
})

router.get("/api/saved", function(req, res) {
  Articles.find({}, function(err, articles) {
  	res.json(articles);
  })
})

router.post("/api/saved", function(req, res) {
  var title = req.body.title;
  var date = req.body.date;
  var url = req.body.url;

  var article = {
    title, date, url
  }

  Articles.update({$and: [{title: title}, {url: url}]},{$setOnInsert: article}, {upsert: true}, function(err, article) {
    if(err) throw err;

    res.send("ok");
  })
})

router.delete("/api/saved/:id", function(req, res) {
  var id = mongoose.Types.ObjectId(req.params.id);
  Articles.findByIdAndRemove(id, function(err, article) {
    res.send(article);
  })
})

module.exports = router;
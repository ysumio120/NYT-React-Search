var express = require("express");
var path = require("path");

var router = express.Router();

router.get("/", function(req, res) {
	res.sendFile(path.join(__dirname + '/../index.html'))
})

router.get("/api/saved", function(req, res) {

})

router.post("/api/saved", function(req, res) {
  
})

router.delete("/api/saved", function(req, res) {
  
})

module.exports = router;
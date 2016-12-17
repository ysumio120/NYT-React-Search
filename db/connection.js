var mongoose = require("mongoose");

// Local Connection
// mongoose.connect("mongodb://localhost:27017/nytreact", function(err) {
// 	if(err) throw err;
// 	console.log('database connected');
// });

// mLab Connection (Heroku)
mongoose.connect("mongodb://heroku_nmkzfgp1:gutihm1dkfmaihh3vtbolcqoma@ds113628.mlab.com:13628/heroku_nmkzfgp1", function(err) {
  if(err) throw err;
  console.log('database connected');
})
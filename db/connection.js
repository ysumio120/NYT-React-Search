var mongoose = require("mongoose");

// Local Connection
mongoose.connect("mongodb://localhost:27017/nytreact", function(err) {
	if(err) throw err;
	console.log('database connected');
});

// mLab Connection (Heroku)
// mongoose.connect("mongodb://heroku_h8wn5m54:q9uhgn7ejhj91em7c7hjkplr2b@ds129038.mlab.com:29038/heroku_h8wn5m54", function(err) {
//   if(err) throw err;
//   console.log('database connected');
// })
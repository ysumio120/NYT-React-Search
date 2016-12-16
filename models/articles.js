var mongoose = require("mongoose");

var nytSchema = new mongoose.Schema({
  title: {type: String, required: true},
  date: {type: Date, required: true},
  url: {type: String, required: true}
});

var Articles = mongoose.model("Articles", nytSchema);

module.exports = Articles;

/*
Tabs Array Structure
{
	[
		label: String,
		streamers: [ { name: String, display_name: String } ]
	]
}
*/

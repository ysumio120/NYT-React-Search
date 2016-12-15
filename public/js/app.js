import React from "react";
import ReactDOM from "react-dom";
import Main from "../components/Main";

var key = "6601e964b0224f6e952a2a58be8d2d82";

var main = document.getElementById("main");
ReactDOM.render(<Main/>, main);

// $(document).on("click", ".save", function() {
// 	let title = $(this).attr("data-title");
// 	let date = $(this).attr("data-date");
// 	let url = $(this).attr("data-url");

// 	$.post("/api/saved", {title, date, url}, function(response) {
		
// 	})
// })
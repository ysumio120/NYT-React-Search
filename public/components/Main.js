import React from "react";
import Search from "./Search";
import Saved from "./Saved";


export default class Main extends React.Component {
  constructor(){
    super();
    this.state = {
      lastSaved: null
    }
    this.saveHandler = this.saveHandler.bind(this);
  }

  saveHandler(e) {
    let button = $(e.currentTarget);
    let title = button.attr("data-title");
    let date = button.attr("data-date");
    let url = button.attr("data-url");
    console.log(title);
    $.post("/api/saved", {title: title, date: date, url: url}, function(response) {
      console.log(response);
    })
  }

  render() {
    return (
      <div>
        <Search onSave={this.saveHandler} test="test"/>
        <Saved />
      </div>
    )
  }
}
import React from "react";
import Search from "./Search";
import Saved from "./Saved";
import axios from "axios";


export default class Main extends React.Component {
  constructor(){
    super();
    this.state = {
      lastSaved: null,
      lastRemoved: null
    }
    this.saveHandler = this.saveHandler.bind(this);
    this.removeHandler = this.removeHandler.bind(this);
  }

  saveHandler(e) {
    let button = e.currentTarget;
    let title = button.getAttribute("data-title");
    let date = button.getAttribute("data-date");
    let url = button.getAttribute("data-url");

    axios.post("/api/saved", {title: title, date: date, url: url}).then(function(data) {
      this.setState({lastSaved: data});
    }.bind(this))
  }

  removeHandler(e) {
    let button = e.currentTarget;
    let id = button.getAttribute("data-id");

  axios.delete("/api/saved/" + id).then(function(data) {
      this.setState({lastRemoved: data});
    }.bind(this))
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron text-center">
          <h1>New York Times Search</h1>
        </div>      
        <Search onSave={this.saveHandler} />
        <Saved saved={this.state.lastSaved} onRemove={this.removeHandler}/>
      </div>
    )
  }
}
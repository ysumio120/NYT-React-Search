import React from "react";
import Search from "./Search";
import Saved from "./Saved";


export default class Main extends React.Component {
  constructor(){
    super();
    this.state = {
      saved: [];
    }
    this.saveHandler = this.saveHandler.bind(this);
    this.removeHandler = this.removeHandler.bind(this);
  }

  saveHandler(e) {
    let button = $(e.currentTarget);
    let title = button.attr("data-title");
    let date = button.attr("data-date");
    let url = button.attr("data-url");

    $.post("/api/saved", {title: title, date: date, url: url}, function(data) {
      console.log(response);
      this.setState({lastSaved: data});
    })
  }

  getSaved() {
    $.get("/api/saved", function(data) {
      console.log(data);
      let saved = data.map(function(article, index) {
        return (
          <li key={index}>
            <a href={article.url} target="_blank">{article.title}</a>
            <button onClick={self.props.onRemove} className="remove" data-id={article._id}>Remove</button>
          </li>
        )
      })

      this.setState({saved: saved});
    })
  }

  removeHandler(e) {

  }

  render() {
    return (
      <div>
        <Search onSave={this.saveHandler} />
        <Saved saved={this.state.lastSaved} onRemove={this.removeHandler}/>
      </div>
    )
  }
}
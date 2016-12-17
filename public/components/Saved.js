import React from "react";
import axios from "axios";

export default class Saved extends React.Component {
  constructor(){
    super();

    this.state = {
      saved: []
    }
   // console.log(this.displaySaved());
  }

  componentDidUpdate(prevProps, prevState) {
    axios.get("/api/saved").then(function(response) {
      this.setState({saved: response.data});
    }.bind(this))
  }

  componentDidMount() {
    axios.get("/api/saved").then(function(response) {
      this.setState({saved: response.data});
    }.bind(this))
  }

  displaySaved() {
    return this.state.saved.map(function(article, index) {
      return (
        <li key={index}>
          <a href={article.url} target="_blank">{article.title}</a>
          <button onClick={this.props.onRemove} className="remove btn btn-danger" data-id={article._id}>Remove</button>
        </li>
      )
    }, this)
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading text-center"><h4>Saved</h4></div>
        <div className="panel-body">
          <ul>
            {this.displaySaved()}
          </ul>
        </div>
      </div>
    )
  }
}
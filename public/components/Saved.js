import React from "react";

export default class Saved extends React.Component {
  constructor(){
    super();

    this.state = {
      saved: [];
    }
   // console.log(this.displaySaved());
  }

  displaySaved() {
    var self = this;
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

  render() {
    console.log(this.displaySaved());
    return (
      <div className="panel panel-default">
        <div className="panel-heading text-center">Saved</div>
        <div className="panel-body">
          <ul>
            {this.state.saved}
          </ul>
        </div>
      </div>
    )
  }
}
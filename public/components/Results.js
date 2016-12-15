import React from "react";

export default class Saved extends React.Component {
 constructor(props){
    super(props);
    this.state = {
      results: this.props.results
    }
  }

  displayArticles() {
    if(this.state.results == null)
      return []
    else {
      this.state.results.docs.map(function(doc, index) {
        return (
          <div>{doc.web_url}</div>
        )
      })
    }
  }
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading text-center">Results</div>
        <div className="panel-body">
          <ul>
            {this.displayArticles()}
          </ul>
        </div>
      </div>
    ) 
  }
}
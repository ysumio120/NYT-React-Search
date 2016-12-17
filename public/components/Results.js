import React from "react";

export default class Results extends React.Component {
 constructor(){
    super();

  }

  displayArticles() {
    console.log(this.props.results)
    if(this.props.results == null)
      return []
    else {
      return this.props.results.docs.map(function(doc, index) {
        if(index < 5) {
          return (
            <li key={index}>
              <a href={doc.web_url} target="_blank">{doc.headline.main}</a>
              <button onClick={this.props.onSave} className="save btn btn-primary" data-title={doc.headline.main} data-date={doc.pub_date} data-url={doc.web_url}>Save</button>
            </li>
          )
        }
      }, this)
    }
  }
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading text-center"><h4>Results</h4></div>
        <div className="panel-body">
          <ul>
            {this.displayArticles()}
          </ul>
        </div>
      </div>
    ) 
  }
}
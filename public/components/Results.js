import React from "react";

export default class Results extends React.Component {
 constructor(){
    super();

    //this.saveHandler = this.saveHandler.bind(this);
  }

  // saveHandler(e) {
  //   let button = $(e.currentTarget);
  //   let title = button.attr("data-title");
  //   let date = button.attr("data-date");
  //   let url = button.attr("data-url");
  //   console.log(title);
  //   $.post("/api/saved", {title: title, date: date, url: url}, function(response) {
  //     console.log(response);
  //   })
  // }

  displayArticles() {
    console.log(this.props.results)
    if(this.props.results == null)
      return []
    else {
      return this.props.results.response.docs.map(function(doc, index) {
        if(index < 5) {
          return (
            <li key={index}>
              <a href={doc.web_url} target="_blank">{doc.headline.main}</a>
              <button onClick={this.props.onSave} className="save" data-title={doc.headline.main} data-date={doc.pub_date} data-url={doc.web_url}>Save</button>
            </li>
          )
        }
      }, this)
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
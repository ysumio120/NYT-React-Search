import React from "react";
import Query from "./Query";
import Results from "./Results";
import $ from "jquery";

export default class Search extends React.Component {
  constructor(){
    super();
    this.state = {
      results: null
    }
    this.getValues = this.getValues.bind(this);
  }

  getValues() {
    var topic = document.getElementById("topic").value;
    var startYear = document.getElementById("startYear").value.replace(/-/g, "");
    var endYear = document.getElementById("endYear").value.replace(/-/g, "");

    var queryObj = {
      topic,
      startYear,
      endYear
    }

    this.onAPICall(queryObj);
  }

  onAPICall(query) {
    var url = "http://api.nytimes.com/svc/search/v2/articlesearch.json";
    var self = this;
    if(query == null) 
      return; 

    $.ajax({
      url: url,
      dataType: "json",
      data: {
        q: query.topic,
        begin_date: query.startYear,
        end_date: query.endYear,
        "api-key": "6601e964b0224f6e952a2a58be8d2d82"
      }
    }).then(function(response) {
      self.setState({results: response});
    })
  }

  render() {
    return (
      <div>
        <Query onSearch={this.getValues}/>
        <Results results={this.state.results} />
      </div> 
    )  
  }
}
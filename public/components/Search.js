import React from "react";
import Query from "./Query";
import Results from "./Results";
import axios from "axios";

export default class Search extends React.Component {
  constructor(props){
    super(props);
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
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
    url += "q=" + query.topic + "&";
    url += "begin_date=" + query.startYear + "&";
    url += "end_date=" + query.endYear + "&";
    url += "api-key=" + "6601e964b0224f6e952a2a58be8d2d82";
    if(query == null) 
      return; 

    axios.get(url: url).then(function(response) {
      this.setState({results: response.data.response});
    }.bind(this))
  }

  render() {
    return (
      <div>
        <Query onSearch={this.getValues}/>
        <Results results={this.state.results} onSave={this.props.onSave}/>
      </div> 
    )  
  }
}
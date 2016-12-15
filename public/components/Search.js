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
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(query) {
    var url = "http://api.nytimes.com/svc/search/v2/articlesearch.json";
    // url += "api-key=" + "6601e964b0224f6e952a2a58be8d2d82" + "&";
    // url += "q=" + query.topic + "&";
    // url += "begin_date=" + query.startYear + "&";
    // url += "end_date=" + query.endYear;
    //console.log(url);
    let self = this; 
    // $.ajax({
    //   url: url,
    //   dataType: "json",
    //   data: {
    //     q: query.topic,
    //     begin_date: query.startYear,
    //     end_date: query.endYear,
    //     "api-key": "6601e964b0224f6e952a2a58be8d2d82"
    //   }
    // }).then(function(response) {
    //     self.setState({results: response});
    // })
  }

  render() {
    return (
      <div>
        <p>{this.state.results}</p>
        <Query onSearch={this.onSearch}/>
        <Results results={this.state.results} />
      </div> 
    )  
  }
}
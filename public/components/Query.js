import React from "react";

export default class Saved extends React.Component {
  constructor(){
    super();
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

    return queryObj;
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading text-center">Search</div>
        <div className="panel-body">
          <label htmlFor="topic">Topic</label>
          <input type="text"  id="topic"/>
          <label htmlFor="startYear">Start Year</label>
          <input type="date" placeholder="YYYY-MM-DD" id="startYear"/>
          <label htmlFor="endYear">End Year</label>
          <input type="date" placeholder="YYYY-MM-DD" id="endYear"/>
          <button onClick={() => this.props.onSearch(this.getValues())} className="search">Search</button>
        </div>
      </div>
    )
  }
}
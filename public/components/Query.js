import React from "react";

export default class Saved extends React.Component {
  constructor(){
    super();
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
          <button onClick={this.props.onSearch} className="search btn btn-default">Search</button>
        </div>
      </div>
    )
  }
}
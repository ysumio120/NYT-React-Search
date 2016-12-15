import React from "react";
import Search from "./Saved";
import Saved from "./Search";


export default class Main extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div>
        <Search />
        <Saved />
      </div>
    )
  }
}
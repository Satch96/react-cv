import React, { Component } from "react"
import "./App.css"
import {PersonalInfo} from "./components/Personal"
import {WorkHistory2} from "./components/Work2"

class App extends Component{

  render(){

    return(
    <div>
      <PersonalInfo />
      <WorkHistory2 />
    </div>
    )
  }
}

export default App;

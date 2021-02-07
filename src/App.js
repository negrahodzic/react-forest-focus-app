import React, { Component } from "react";
import './App.css';
import TreeList from "./components/TreeList";
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  state = {
    trees: [
      {
        id: 1,
        name: "Water Spirit",
        description: "Very watery tree",
        points: 15 
      },
      {
        id: 2,
        name: "Wisteria",
        description: "The orange tree",
        points: 10
      }],
    tree: {}
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <nav>
              <ul style={{ decoration: "none", margin: "0", width: "100%", textAlign: "center" }}>
                <li style={{ display: "inline-block", margin: "20px" }}><a href="/">Home</a></li>
                <li style={{ display: "inline-block", margin: "20px" }}><a href="/c">Chosen tree</a></li>
                <li style={{ display: "inline-block", margin: "20px" }}><a href="/h">History</a></li>
              </ul>
            </nav>
            <p></p>
            <h1>React Forest app</h1>
            <Route path="/" exact render={()=><h1>Negra</h1>}/>
            <Route path="/h" exact render={()=><TreeList
              trees={this.state.trees}
            />}/>

            {/* <TreeList
              trees={this.state.trees}
            /> */}
          </header>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

import React, { Component } from "react";
import './App.css';
import TreeList from "./components/TreeList";
import Info from "./components/Info";
import { BrowserRouter, Route } from 'react-router-dom';
import Tree from "./components/Tree";

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
      },
      {
        id: 3,
        name: "Moon Tree",
        description: "To Moon and back",
        points: 13
      },
      {
        id: 4,
        name: "Ginko",
        description: "The yellow tree",
        points: 18
      }],
    tree: {
      id: 5,
      name: "WiQa",
      description: "The purple tree",
      points: 9
    }
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <nav>
              <ul style={{ decoration: "none", margin: "0", width: "100%", textAlign: "center" }}>
                <li style={{ display: "inline-block", margin: "20px" }}><a href="/">Home</a></li>
                <li style={{ display: "inline-block", margin: "20px" }}><a href="/c">Choose tree</a></li>
              </ul>
            </nav>
            <p></p>
            <Route path="/" exact render={()=><Info 
              info = "Dobrodosli! Treba da izaberete drvo i vreme koliko zelite da sadite. Nakon toga dobijate bodove." 
              />}/>
            <Route path="/c" exact render={()=><TreeList
              trees={this.state.trees}
            />}/>
          </header>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

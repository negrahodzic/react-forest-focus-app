import React, { Component } from "react";
import './App.css';
import TreeList from "./components/TreeList";
import Info from "./components/Info";
import { BrowserRouter, Route } from 'react-router-dom';
import { Nav, Navbar } from "react-bootstrap";
import Forest from "./img/forest.jpg";

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
            <Navbar bg="dark" variant="dark" fixed="top" style={{ paddingLeft: "43%" }}>
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/choose">Choose tree</Nav.Link>
              </Nav>
            </Navbar>
            <Route path="/" exact render={() =>
                <div>
                  <img src={Forest} />
                  <Info info="Forest is an app that helps you stay focused on the important things in life." />
                  <Info info="Go trough our list of available trees and see which one you like the most." />
                  <Info info="After choosing your tree and minutes, timer will start!" />
                  <Info info="Happy planting!" />
                </div>

            } />
            <Route path="/choose" exact render={() =>
              <div>
                <TreeList trees={this.state.trees} />
              </div>
            } />
          </header>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

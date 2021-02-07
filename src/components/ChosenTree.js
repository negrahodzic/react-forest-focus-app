import React, { Component } from "react";
import Tree from "./Tree";

class ChosenTree extends Component {
    state = {
        tree: {
            id: 1,
            name: "Water Spirit",
            description: "Very watery tree",
            points: 15
        }
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Chosen Tree</h1>
                    <Tree
                        tree={this.state.tree}
                    />
                </header>
            </div>
        );
    }
}

export default ChosenTree;

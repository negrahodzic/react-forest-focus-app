import React, { Component } from "react";
import ChosenTree from "./ChosenTree";
import Tree from "./Tree";

class TreeList extends Component {
    state = {
        showChosen: false,
        chosenTree: {}
    };
    handler(someArg){
        const doesShow = this.state.showChosen;
        this.setState({
            showChosen: true,
            chosenTree: someArg
        });
    }
    render() {
        const trees = this.props.trees;
        var handler  =   this.handler;
        return (
            <div>
                { this.state.showChosen == false ?
                    <table>
                        <thead>
                            <tr>
                                <th style={{ width: "50px", textAlign: "center" }}>#</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Points</th>
                                <th style={{ width: "148px" }}>Choose</th>
                            </tr>
                        </thead>
                        <tbody>
                            {trees.map(tree => {
                                return (
                                    <Tree
                                        key={tree.id}
                                        tree={tree}
                                        handler={handler.bind(this)}
                                    />
                                );
                            })
                            }
                        </tbody>
                    </table> : <div>
                        <ChosenTree tree={this.state.chosenTree}/>
                    </div>
                }
            </div>
        );
    }
}

export default TreeList;
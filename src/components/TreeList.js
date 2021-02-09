import React, { Component } from "react";
import { Table } from "react-bootstrap";
import ChosenTree from "./ChosenTree";
import Info from "./Info";
import Tree from "./Tree";

class TreeList extends Component {
    state = {
        showChosen: false,
        chosenTree: {}
    };
    handler(someArg) {
        const doesShow = this.state.showChosen;
        this.setState({
            showChosen: true,
            chosenTree: someArg
        });
    }
    render() {
        const trees = this.props.trees;
        var handler = this.handler;
        return (
            <div>
                { this.state.showChosen == false ?
                    <div>
                        <Info info="Here is the list of available trees." />
                        <Info info="Click choose after you decide which one you want to plant!" />
                        <br></br>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th style={{ width: "60px", textAlign: "center" }}>#</th>
                                    <th>Name</th>
                                    <th style={{ width: "300px", textAlign: "center" }}>Description</th>
                                    <th style={{ width: "100px", textAlign: "center" }}>Points</th>
                                    <th style={{ width: "150px" }}>Choose</th>
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
                        </Table>
                    </div>
                    : <div>
                        <ChosenTree tree={this.state.chosenTree} />
                    </div>
                }
            </div>
        );
    }
}

export default TreeList;
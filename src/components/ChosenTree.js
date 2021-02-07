import React, { Component } from "react";
import Tree from "./Tree";

class ChosenTree extends Component {
    render() {
        const { id, name, description, points } = this.props.tree;
        return (
            <div>
                <h3>Your chosen tree is: </h3>
                <tr>
                    <td style={{ width: "50px", textAlign: "center" }}>{id}</td>
                    <td>{name}</td>
                    <td style={{ width: "200px" }}>{description}</td>
                    <td style={{ width: "50px" }}>{points}</td>
                </tr>
                <p>timer goes here</p>
            </div>
        );
    }
}

export default ChosenTree;

import Button from 'react-bootstrap/Button';
import React, { Component } from "react";

class Tree extends Component {
    render() {
        var handler  =   this.props.handler;
        const { id, name, description, points } = this.props.tree;
        const tr = { id, name, description, points }
        return (
            <tr >
                <td style={{ width: "50px", textAlign: "center" }}>{id}</td>
                <td>{name}</td>
                <td style={{ width: "200px" }}>{description}</td>
                <td style={{ width: "50px" }}>{points}</td>
                <td style={{ width: "100px" }} >
                    <Button variant="dark" onClick={()=>handler(tr)}>
                        Choose
                    </Button>
                </td>
            </tr>
        );
    }
}

export default Tree;
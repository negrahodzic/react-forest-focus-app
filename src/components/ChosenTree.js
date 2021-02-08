import React, { Component } from "react";
import Info from "./Info";
import Timer from "./Timer";
import Tree from "./Tree";

class ChosenTree extends Component {
    state = {
        min: '',
        submitted: false
    }
    handleSubmit = this.handleSubmit.bind(this);
    handleChange = this.handleChange.bind(this);

    handleChange(event) {
        this.setState({ 
            min: event.target.value,
            submitted: false
        });
    }

    handleSubmit(event) {
        this.setState({
            min: this.state.min,
            submitted: true
        });
        event.preventDefault();
    }
    render() {
        const { id, name, description, points } = this.props.tree;
        let m = this.state.min;
        return (
            <div>
                <h3>Your chosen tree is: </h3>
                <tr>
                    <td style={{ width: "50px", textAlign: "center" }}>{id}</td>
                    <td>{name}</td>
                    <td style={{ width: "200px" }}>{description}</td>
                    <td style={{ width: "50px" }}>{points}</td>
                </tr>
                <br></br>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Koliko minuta:
                    <input type="number" value={this.state.min} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                
                {   this.state.submitted!=false ?
                    <Timer minutes={this.state.min} />
                    : <div>
                        <p id="timer">Here goes timer</p>
                    </div>
                }

            </div>
        );
    }
}

export default ChosenTree;

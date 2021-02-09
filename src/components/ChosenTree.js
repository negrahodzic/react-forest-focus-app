import React, { Component } from "react";
import { Button, Card, Form } from "react-bootstrap";
import Info from "./Info";
import Timer from "./Timer";
import TreeImg from "../img/tree.png";

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
            <div  style={{marginTop: "80px"}}>
                <Info info="This is your chosen tree." />
                <Card style={{ width: '18rem', height: '17rem', marginBottom: "20px" }}>
                <Card.Img variant="top" src={TreeImg} style={{ height: '150px', padding: "10px" }}/>
                    <Card.Body>
                        <Card.Title className="mb-2 text-muted">{name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{points} points </Card.Subtitle>
                        <Card.Text className="mb-2 text-muted"> {description}</Card.Text>
                    </Card.Body>
                </Card>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="minutes">
                        <Form.Label> How many minutes?</Form.Label>
                        <Form.Control type="text" placeholder="Enter minutes" value={this.state.min} onChange={this.handleChange} />
                    </Form.Group>
                    <Button variant="dark" type="submit">
                        Start
                    </Button>
                </Form>
                <br></br>
                {   this.state.submitted != false ?
                    <Timer minutes={this.state.min} />
                    : <div>
                        <p id="timer"></p>
                        <p id="status"></p>
                    </div>
                }

            </div>
        );
    }
}

export default ChosenTree;

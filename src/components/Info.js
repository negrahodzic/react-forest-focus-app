import React, {Component} from "react";

class Info extends Component{
    render(){
        const info = this.props.info;
        return(
            <p> {info} </p>
        );
    }
}

export default Info;
import React, {Component} from "react";

class Tree extends Component{
    onChoose = () => {
        
    };
    render(){
        const{id, name, description, points} = this.props.tree;
        return(
            <tr>
                <td style={{textAlign: "center"}}>{id}</td>
                <td>{name}</td>
                <td>{description}</td>
                <td>{points}</td>
                <td>
                    <button onClick={this.onChoose}>
                        Choose
                    </button>
                </td>
            </tr>
        );
    }
}

export default Tree;
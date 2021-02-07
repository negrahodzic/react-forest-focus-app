import React, {Component} from "react";
import Tree from "./Tree";

class TreeList extends Component{
    render(){
        const trees = this.props.trees;
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th style={{width:"50px", textAlign:"center"}}>#</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Points</th>
                            <th style={{width:"148px"}}>Choose</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trees.map(tree =>{
                            return(
                                <Tree
                                    key={tree.id}
                                    tree={tree}
                                />
                            );
                        })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TreeList;
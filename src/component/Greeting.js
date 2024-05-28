import React, {Component} from 'react';

class Greeting extends Component{
    constructor(props){
        super(props)

        this.props = props;
    }

render(){
    return(
        <div>
            <h1>Thank You... </h1>
            <h2>{this.props.name}</h2>
        </div>
    )
}
}
export default Greeting;
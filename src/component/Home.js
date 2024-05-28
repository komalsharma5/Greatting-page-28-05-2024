import React, { Component } from "react";

class Home extends Component{
    constructor(props){
        super(props)

        this.props = props;
    }
    render(){
        return(
            <>
                <h1>Home</h1>
                <h4>city:{this.props.city}</h4>
            </>
        )
    }
}
export default Home;
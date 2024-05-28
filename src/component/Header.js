import React, { Component } from "react";


//class component
/*import React,{Component} from "react";
class Header extends Component{
    render(){
        return(
            <div>
                <h1>Header</h1>
                <h2>komal</h2>
            </div>
        )
    }
}

export default Header;*/

//functoion component
/*function Header(){
    return(
        <div>
            <h1>komal</h1>
        </div>
    )

}
export default Header;*/

//state and props eg


class Header extends React.Component {
    constructor(props) {
        super(props)

        this.props = props;
    }
    render() {
        return (
            <div className="border w-50 mt-3 mx-auto text-center">
                <h1>Header</h1>
                <h4>name:{this.props.name}</h4>
                <h4>email:{this.props.email}</h4>
                <h4>password:{this.props.password}</h4>
                <h4>city:{this.props.city}</h4>
                <button className="btn btn-danger d-block mx-auto p-2" onClick={this.props.remove}>Delete</button>

            </div>
        )
    }
}
export default Header;
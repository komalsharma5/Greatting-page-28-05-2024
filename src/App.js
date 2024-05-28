//class component
import React, { Component } from "react";
//import Header from "./component/Header";
import Greeting from "./component/Greeting";
import './App.css'



class App extends Component{
  constructor(){
    super()

    this.state={
      isSubmit:false,
      name:"",
      email:"",
    }
  }
  formSubmitHandler = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;

    this.setState({
      name:name,
      email:email,
      isSubmit:true
    }, () => {
      e.target.name.value="";
      e.target.email.value="";
    })
  }
  render(){
    console.log(this.state);
    return(
      <div className="mb-3">
        {
        this.state.isSubmit === true ?<Greeting></Greeting>:
          <>
          <form onSubmit={this.formSubmitHandler}>
          <div className="mb-3">
              <label htmlFor="name" className="form-label">name</label>
              <input type="text" className="name1" name="name" placeholder="Enter Name"></input>
            </div>
            
            <div className="mb-3">
                <label htmlFor="email" className="form-label">email</label>
                <input type="email" className="email1" name="email" placeholder="Enter email"></input>
              </div>
              
              <div className="mb-3">
                <input type="submit" className="btn btn-primary"></input>
              </div>
              </form>
              </>
          
        }
      </div>
    )
  }
}

export default App;
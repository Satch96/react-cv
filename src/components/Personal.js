import React, { Component } from "react"
import uniqid from "uniqid";

class PersonalInfo extends Component{
  
    constructor(props){
      super();
  
      this.state = {
        
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        done: true
      }
    }
  
    handleChange=(e)=>{
      this.setState({
        [e.target.name]: [e.target.value]
      })
    };
  
    submitForm=(e)=>{
      e.preventDefault()
      if (this.state.done)
      this.setState({
        done: false
      })
      else{
        this.setState({
          done: true
        })        
      }
    }

    render(){
      if(this.state.done){
        return(
          <div>
            <div>
              <h2>Personal Info</h2>
            </div>
            <form onSubmit={this.submitForm}>
              <div>
                <textarea rows="2" cols="40" className="personal" placeholder="First Name" name="firstName" value={this.state.firstName} onChange={this.handleChange}></textarea>
              </div>
              <div>
                <textarea rows="2" cols="40" className="personal" placeholder="Last Name" name="lastName" value={this.state.lastName} onChange={this.handleChange}></textarea>
              </div>
              <div>
                <textarea rows="2" cols="40"className="personal" placeholder="Email Address" name="email" value={this.state.email} onChange={this.handleChange}></textarea>
              </div>
              <div>
                <textarea rows="2" cols="40" className="personal" placeholder="Phone Number" name="phone" value={this.state.phone} onChange={this.handleChange}></textarea>
              </div>
              <div>
                <button rows="2" cols="40" type="submit">Add</button>
              </div>
            </form>
        </div>
        )
      }
      else{
        return(
          <div>
             <div>
              <h2>Personal Info</h2>
            </div>
            <p>{"Name: " + this.state.firstName + " " + this.state.lastName}</p>
            <p>{"Email Address: " + this.state.email}</p>
            <p>{"Phone Number: " + this.state.phone}</p>
            <button onClick={this.submitForm}>Edit</button>
          </div>
        )
      }
      
    }
};




export {PersonalInfo};
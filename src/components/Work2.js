import React, { Component } from "react"
import uniqid from "uniqid"

// need to figure out how to put this in state without async fucking it up
let size = 0;

class WorkHistory2 extends Component{

    constructor(props){
        super();
        this.state = {
            jobTitle: "",
            organization: "",
            duties: "",
            dateStart: "",
            dateEnd: "",
            list: [],
            list2: [],
            list3: [],
            case: 1,
            id: 0,
        }
    }


    changeState1=()=>{
      this.setState({case: 1})
    }
    changeState2=()=>{
      this.setState({case: 2})
    }
    changeState3=()=>{
      this.setState({case: 3})
    }
    
    changeState4=(e)=>{
        
        size = parseInt(e.target.value)
      
        this.setState({
          list2: this.state.list.slice(0,size),
          list3: this.state.list.slice(size+1),

          jobTitle: this.state.list[size].jobTitle,
          organization: this.state.list[size].organization,
          duties: this.state.list[size].duties,
          dateStart: this.state.list[size].dateStart,
          dateEnd: this.state.list[size].dateEnd,
          case: 4
      
        })
    }

    

    handleChange=(e)=>{
        this.setState({
          [e.target.name]: [e.target.value]
        })
    };

    onSubmitTask=(e)=>{
        e.preventDefault();
        this.setState({
          
          list: this.state.list.concat({
              jobTitle: this.state.jobTitle,
              organization: this.state.organization,
              duties: this.state.duties,
              dateStart: this.state.dateStart,
              dateEnd: this.state.dateEnd,
              id: this.state.id
          }),

          jobTitle: "",
          organization: "",
          duties: "",
          dateStart: "",
          dateEnd: "",
          id: this.state.id + 1

        },
        this.changeState2)
    }

    onEditTask=(e)=>{
        
        e.preventDefault()

        const newList = this.state.list.slice();

        newList[size].jobTitle = this.state.jobTitle;
        newList[size].organization = this.state.organization;
        newList[size].duties = this.state.duties;
        newList[size].dateStart = this.state.dateStart;
        newList[size].dateEnd = this.state.dateEnd;

        this.setState({
            list: newList,
            jobTitle: "",
            organization: "",
            duties: "",
            dateStart: "",
            dateEnd: "",

        }, this.changeState2)
    }

    render(){

        if (this.state.case === 1){
            return(
                <div>
                    <div>
                        <h2>Work History</h2>
                    </div>
                    <Form jobTitle = {this.state.jobTitle} organization ={this.state.organization} duties={this.state.duties} dateStart={this.state.dateStart} dateEnd = {this.state.dateEnd} handleChange = {this.handleChange} onSubmitTask={this.onSubmitTask}/>
                </div>
            )
        }
        else if( this.state.case === 2){
            return(
                <div>
                    <div>
                        <h2>Work History</h2>
                    </div>
                    <WorkList list={this.state.list} changeState4={this.changeState4}/>
                    <button onClick={this.changeState3}>Add Other Experience</button>
                </div>
            )
        }
        else if(this.state.case === 3){
            return(
                <div>
                    <div>
                        <h2>Work History</h2>
                    </div>
                    <WorkList list={this.state.list} changeState4={this.changeState4}/>
                    <Form jobTitle = {this.state.jobTitle} organization ={this.state.organization} duties={this.state.duties} dateStart={this.state.dateStart} dateEnd = {this.state.dateEnd} handleChange = {this.handleChange} onSubmitTask={this.onSubmitTask}/>
                </div>
            )
        }
        else if(this.state.case === 4){
            return(
                <div>
                    <div>
                        <h2>Work History</h2>
                    </div>
                    <WorkList list={this.state.list2} changeState4={this.changeState4}/>
                    <Form jobTitle = {this.state.jobTitle} organization ={this.state.organization} duties={this.state.duties} dateStart={this.state.dateStart} dateEnd = {this.state.dateEnd} handleChange = {this.handleChange} onSubmitTask={this.onEditTask}/>
                    <WorkList list={this.state.list3} changeState4={this.changeState4}/>
                </div>
            )
        }
    }
        
}

class Form extends Component{
    render(){
    return (
        <form>
            <div>
                <textarea rows="2" cols="40" placeholder="Job Title" name="jobTitle" value={this.props.jobTitle} onChange={this.props.handleChange}></textarea>
            </div>
            <div>
                <textarea rows="2" cols="40" placeholder="Organization" name="organization" value={this.props.organization} onChange={this.props.handleChange}></textarea>
            </div>
            <div>
                <textarea rows="7" cols="40" type="textarea" placeholder="Roles and Responsibilities" name="duties" value={this.props.duties} onChange={this.props.handleChange}></textarea>
            </div>
            <div>
                <input type="date" placeholder="Date Start" name="dateStart" value={this.props.dateStart} onChange={this.props.handleChange}></input>
                <input type="date" placeholder="Date End" name="dateEnd" value={this.props.dateEnd} onChange={this.props.handleChange}></input>
            </div>
            <div>
                <button type="submit" onClick={this.props.onSubmitTask}>Add</button>
            </div>
        </form>
    )}
}

class WorkList extends Component{
    render(){
    return (
        <div>
            {this.props.list.map((x) => {
                return (
                <div key={uniqid()}>
                    <p>{x.dateStart + " to " + x.dateEnd}</p>
                    <p>{x.jobTitle}</p>
                    <p>{x.organization}</p>
                    <p>{x.duties}</p>
                    <button onClick={this.props.changeState4} value={x.id}>Edit</button>
                </div>
                );
            })}
        </div>
    )}
};


export {WorkHistory2}
import React from 'react';

export class Contact extends React.Component{
    constructor(props){
        super();
        this.state  ={
            fullName: "",
            phone: null,
            email: "",
        }
    }
    inputChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    render(){
        return(
            <div id="contact">
                
                    <label>Full Name:</label> <br></br>
                    <input 
                        type="text"
                        name="fullName"
                        value={this.state.fullName}
                        placeholder="Enter your Full Name"
                        onChange={this.inputChangeHandler}
                    />
                    <br></br>

                    <label>Phone:</label> <br></br>
                    <input
                        type="text"
                        name="phone"
                        value={this.state.phone}
                        placeholder="Phone ex:(012) 345 678"
                        onChange={this.inputChangeHandler} 
                    /> 
                    
                    <br></br>

                    <label>Email:</label> <br></br>
                    <input
                        type="text"
                        name="email"
                        value={this.state.email}
                        placeholder="Enter your Email"
                        onChange={this.inputChangeHandler} 
                    /> 
                    
                    <br></br>

                    <button className="action-button" 
                    onClick={()=>{this.props.addContact(this.state.fullName, this.state.phone, this.state.email)}} 
                    >
                        Submit
                    </button>
                
            </div>
        )
    }
}
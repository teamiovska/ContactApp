import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Navigation} from './Navigation';
import {Contact} from './Contact';
import {List} from './List';


export class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            contacts: [
                {id: 1, fullName: "Michael John", email: "michael-john@gmail.com"},
                {id: 2, fullName: "William Reyn", email: "william-reyn@gmail.com"},
                {id: 3, fullName: "Ethan Smit", email: "ethan-smit@gmail.com"},
                {id: 4, fullName: "Alexander Noah", email: "alexander-noah@gmail.com"},
                {id: 5, fullName: "Jacob Toy", email: "jacob-toy@gmail.com"},
                {id: 6, fullName: "Ryan Jose", email: "ryan-jose@gmail.com"},
                {id: 7, fullName: "Daniel Gavin", email: "daniel-gavin@gmail.com"},
                {id: 8, fullName: "Kevin Logan", email: "kevin-logan@gmail.com"},
                {id: 9, fullName: "Christopher Delt", email: "christopher-delt@gmail.com"},
                {id: 10, fullName: "Landon Carter", email: "landon-carter@gmail.com"},
            ]
        }
    }

    addContact = (fullName, phone, email) => {
        debugger
        let regexEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        let regexName = /^[A-Za-z]+$/;
        let regexPhone = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{3}$/;

        //Validation on name input
        if(fullName === ""){
            alert('Pleace enter Full Name');
            return false;
        }

        if(!regexName.test(fullName)){
            alert('Pleace enter correct Full Name');
            return false;
        }

        //validation on phone input
        if(phone === ""){
            alert('Pleace enter Phone');
            return false;
        }

        if(!regexPhone.test(phone)){
            alert('Pleace enter correct Phone');
            return false;
        }

        //validation on email input
        if(email === ""){
            alert('Pleace enter Email');
            return false;
        }

        if (!regexEmail.test(email)) { 
            alert('Pleace enter correct Email');
            return false;
        }

        alert('Submited!')

        //Funkcija za dodavanje na kontakt od formata vo listata
        
        // this.setState({
        //     contacts: {
        //         ...this.props.contacts,
        //         id: this.props.contacts.length,
        //         fullName: fullName,
        //         email: email,
        //     }
        // })
    }

  

    render(){
        return(
            <div id="app">
                <Navigation/>
                <Switch>
                    <Route exact path="/"  
                        render={()=>{ return <Contact addContact={this.addContact}/> }}
                    />
                    <Route path="/list"  
                        render={()=>{ return <List contactList={this.state.contacts}/> }}
                    />
                </Switch>
            </div>
        )
    }
}
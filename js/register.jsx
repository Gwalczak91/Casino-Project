import React from "react";
import {HashRouter, Route, Redirect, Link, Switch, NavLink} from 'react-router-dom';

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            login: "",
            age: "",
            wrongAge: "",
            pass: "",
            register: false
        }
    }

    loginChange = (e) => {
        this.setState({
            login: e.currentTarget.value
        })
    };

    ageChange = (e) => {
        this.setState({
            age: e.currentTarget.value
        })
    };

    passChange = (e) => {
        this.setState({
            pass: e.currentTarget.value
        })
    };


    componentDidMount(){

    }

    acceptButton = () => {
        let newUser = {
            name: this.state.login,
            age: this.state.age,
            password: this.state.pass
        };

        console.log(newUser);

        fetch("http://localhost:3000/user", {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body:  JSON.stringify( newUser )
        })
            .then( resp => resp.json())
            .then( resp => {
                console.log( resp );
            });

        this.setState({
            register: true
        })
    };


    render(){
        if(this.state.register === true){
            return <Redirect to="/logIn"/>
        }else {
            return (
                <div className="home">
                    <div>
                        <label>Podaj swój login:</label>
                        <br/>
                        <input className="breaker" onChange={this.loginChange} type="text" value={this.state.login}/>
                        <br/>
                        <label>Podaj swój wiek: <span>{this.state.wrongAge}</span></label>
                        <br/>
                        <input className="breaker" onChange={this.ageChange} type="number" value={this.state.age}/>
                        <br/>
                        <label>Wpisz hasło:</label>
                        <br/>
                        <input className="breaker" onChange={this.passChange} type="password" value={this.state.pass}/>
                        <br/>
                        <button onClick={this.acceptButton}>Zatwierdź</button>

                    </div>
                </div>
            )
        }
    }
}

export default Register
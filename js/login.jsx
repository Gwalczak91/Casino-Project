import React from "react";
import {HashRouter, Route, Redirect, Link, Switch, NavLink} from 'react-router-dom';

class LogIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            password: "",
            baseName: [],
            basePassword: [],
            logginIn: false,
            serverStatus: ""
        }
    }

    componentDidMount() {

        fetch("http://localhost:3000/user")
            .then(r => r.json())
            .then(r => {

                let arrayName = r.map((e,i) => {
                    return e.name
                });

                let arrayPass = r.map((e,i) => {
                    return e.password
                });


                this.setState({
                    baseName: arrayName,
                    basePassword: arrayPass,

                })
            })
            .catch(r => {
                alert("Brak połączenia z serwerem.Strona niedostępna", r)
                this.setState({
                    serverStatus: "down"
                })
            })

    }

    nameChange = (e) => {
        this.setState({
            name: e.currentTarget.value
        })
    };

    passwordChange = (e) => {
        this.setState({
            password: e.currentTarget.value
        })
    };

    checkData = () => {
        if(this.state.baseName.indexOf(this.state.name) >= 0 && this.state.basePassword.indexOf(this.state.password) >= 0){
            this.setState({
                logginIn: true
            })
        }else {
            alert("Nieprawidłowe login lub hasło");
        }
    };

    goToRegisterPage = () => {
        this.setState({
            register: true
        })
    };


    render(){
        if(this.state.logginIn === true){
            return <Redirect to="/adult"/>
        }else if (this.state.serverStatus === "down"){
            return <Redirect to="/"/>
        }else if (this.state.register === true){
            return <Redirect to="/logIn/register" />
        }else {
            return (
                <div>
                    <label>Podaj Swoje Imie:</label>
                    <br/>
                    <input onChange={this.nameChange} type="text" value={this.state.name}/>
                    <br/>
                    <label>Podaj Hasło:</label>
                    <br/>
                    <input onChange={this.passwordChange} type="password" value={this.state.password}/>
                    <br/>
                    <button onClick={this.checkData}>Zaloguj</button>
                    <button onClick={this.goToRegisterPage}>Rejestracja</button>
                </div>

            )
        }
    }
}


export default LogIn
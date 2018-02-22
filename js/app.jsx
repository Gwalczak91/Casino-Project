import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import {HashRouter, Route, Redirect, Link, Switch, NavLink} from 'react-router-dom';
import GameOver from './gameover.jsx'
import BlackJack from './blackjack.jsx'
import DiceGame from './dicegame.jsx'
import Start from './start.jsx'
import Young from './young.jsx'
import Rulette from './rulette.jsx'
import Adult from './adult.jsx'
require("../scss/main.scss");


class App extends React.Component {
  constructor(props){
        super(props);
    }

    render(){
        return(
            <HashRouter>
                <div>
                    <Switch>
                        <Route exact path="/" component={Start}></Route>
                        <Route exact path="/logIn" component={LogIn}></Route>
                        <Route exact path="/logIn/register" component={Register}></Route>
                        <Route exact path="/adult" component={Adult}></Route>
                        <Route exact path="/young" component={Young}></Route>
                        <Route exact path="/adult/rulette" component={Rulette}></Route>
                        <Route exact path="/adult/dice" component={DiceGame}></Route>
                        <Route exact path="/adult/blackjack" component={BlackJack}></Route>
                        <Route exact path="/adult/gameover" component={GameOver}></Route>
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}



class LogIn extends React.Component {
  constructor(props){
        super(props);
        this.state = {
            name: "",
            password: "",
            baseName: "",
            basePassword: "",
            logginIn: false,
            serverStatus: ""
        }
    }

    componentDidMount() {
        console.log("Jestem juz zrenderowany");
        fetch("http://localhost:3000/user")
            .then(r => r.json())
            .then(r => {

                console.log(r);
                console.log(r[0].name);
                console.log(r[0].password);
                this.setState({
                    baseName: r[0].name,
                    basePassword: r[0].password,

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
        if(this.state.baseName === this.state.name && this.state.basePassword === this.state.password){
            this.setState({
                logginIn: true
            })
        }else {
            alert("Nieprawidłowe login lub hasło")
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


class Register extends React.Component {
  constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                Rejestracja
            </div>
        )
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});



import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import {HashRouter, Route, Redirect, Link, Switch, NavLink} from 'react-router-dom';
import LogIn from "./login.jsx"
import Register from "./register.jsx"
import GameOver from './gameover.jsx'
import Winner from './winner.jsx'
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
                        <Route exact path="/adult/winnerlist" component={Winner}></Route>
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});



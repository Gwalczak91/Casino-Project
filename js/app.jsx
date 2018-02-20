import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import {HashRouter, Route, Redirect, Link, Switch, NavLink} from 'react-router-dom';
import img from '../img/under18.jpeg'
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
                        <Route exact path="/adult" component={Adult}></Route>
                        <Route exact path="/young" component={Young}></Route>
                        <Route exact path="/adult/rulette" component={Rulette}></Route>
                        <Route exact path="/adult/dice" component={DiceGame}></Route>
                        <Route exact path="/adult/blackjack" component={BlackJack}></Route>
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}

class Start extends React.Component {
  constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>Great Casino</h1>
                <p>Aby wejść na strone trzeba mieć ukonczone 18 lat</p>
                <button><NavLink  exact to="/adult">Mam skończone 18 lat</NavLink></button>
                <button><NavLink  exact to="/young">Mam poniżej 18 lat</NavLink></button>

            </div>
        )
    }
}

class Adult extends React.Component {
  constructor(props){
        super(props);
        this.state = {
            option: "Ruletka",
            go: false
        }
    }

    changeGameBoard = (e) => {
      this.setState({
          option: e.currentTarget.value
      })
    };

    chosenGame = () => {
        this.setState({
            go: true
        })
    };

    render(){
        if(this.state.option ==="Ruletka" && this.state.go === true){
            return <Redirect to="/adult/rulette/" />
        }else if(this.state.option ==="Gra w kości" && this.state.go === true){
            return <Redirect to="/adult/dice" />
        }else if(this.state.option ==="BlackJack" && this.state.go === true){
            return <Redirect to="/adult/blackjack" />
        }else {
             return (
                 <div>
                     <div>
                         <h1>Wybierz Gre</h1>
                         <select value={this.state.value} onChange={this.changeGameBoard}>
                             <option value="Ruletka">Ruletka</option>
                             <option value="Gra w kości">Gra w kości</option>
                             <option value="BlackJack">BlackJack</option>
                         </select>
                         <button onClick={this.chosenGame}>Zagraj</button>
                     </div>
                 </div>
             )
         }
    }
}


class Rulette extends React.Component {
  constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                Witaj na rulettce
            </div>

        )
    }
}

class DiceGame extends React.Component { // do zrobienia później
  constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                Witaj na grze w kosci
            </div>
        )
    }
}

class BlackJack extends React.Component {   // do zrobienia później
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                Witaj na BlackJacku
            </div>
        )
    }
}





class Young extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div>
                    <img src={img}></img>
                    <h1>Wymagane posiadanie 18 lat</h1>
                </div>
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
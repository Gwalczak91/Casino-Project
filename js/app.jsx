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
            option: ""
        }
    }

    render(){
          return (
              <HashRouter>
                  <div>
                      <Switch>
                          <Route exact path="/adult/" component={Adult}></Route>
                          <Route exact path="/young/" component={Young}></Route>
                      </Switch>
                  </div>
              </HashRouter>
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
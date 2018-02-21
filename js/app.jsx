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
        this.state ={
            kwota: 4000,
            row1: [1,2,3,4,5,6,7,8,9,10,11,12],
            row2: [13,14,15,16,17,18,19,20,21,22,23,24],
            row3: [25,26,27,28,29,30,31,32,33,34,35,36],
            randomNum: 0,
            disable: false,
            betSpace: "",
            bet: 0

        }
    }

    randomizer = () => {
      this.setState({
          randomNum: Math.floor(Math.random()* 37),
          disable: true
      })
    };

    handleNumber = (e) => {
        let addBet = prompt("Ile chcesz obstawić");
        console.log(e.currentTarget);
        console.log(Number(addBet));
        this.setState({
            kwota: this.state.kwota - addBet,
            betSpace: e.currentTarget.innerText,
            bet: addBet
        })
    };

    checkResult = () => {
        this.setState({
            disable: false
        })
    };


    render(){

      let firstRow = this.state.row1.map((e,i) => {
          return <td onClick={this.handleNumber} key={i}>{e}</td>
      });

      let secondRow = this.state.row2.map((e,i) => {
          return <td onClick={this.handleNumber} key={i}>{e}</td>
      });

      let thirdRow = this.state.row3.map((e,i) => {
          return <td onClick={this.handleNumber} key={i}>{e}</td>
      });

        return(
            <div className="HolyGrail">
                <Header>
                    <h1>Moja strona</h1>
                </Header>
                <Container>
                    <Content>
                            <table>
                                <tbody>
                                    <tr>
                                        {firstRow}
                                    </tr>
                                    <tr>
                                        {secondRow}
                                    </tr>
                                    <tr>
                                        {thirdRow}
                                    </tr>
                                </tbody>
                            </table>
                            <button disabled={this.state.disable} onClick={this.randomizer}>Losuj</button>
                            <h1>{this.state.randomNum}</h1>
                            <button onClick={this.checkResult}>Sprawdź</button>
                    </Content>
                    <Menu>
                        <h1>Zasady gry w ruletke:</h1>
                    </Menu>
                    <Ad>
                        <p>Plansza Gracza</p>
                        <p>Twoja kwota to: {this.state.kwota}</p>
                        <p>Postawiłeś: {this.state.bet} zł na pole {this.state.betSpace}</p>
                    </Ad>
                </Container>
                <Footer>

                </Footer>
            </div>

        )
    }
}

class Header extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                {this.props.children}
            </div>

        )
    }
}

class Content extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="HolyGrail-content">
                {this.props.children}
            </div>

        )
    }
}

class Menu extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="HolyGrail-nav">
                {this.props.children}
            </div>

        )
    }
}

class Ad extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                {this.props.children}
            </div>

        )
    }
}

class Footer extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                {this.props.children}
            </div>

        )
    }
}

class Container extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="HolyGrail-body">
                {this.props.children}
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













document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
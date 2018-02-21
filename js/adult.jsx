import React from "react";
import {HashRouter, Route, Redirect, Link, Switch, NavLink} from 'react-router-dom';


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


export default Adult
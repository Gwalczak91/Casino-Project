import React from "react";
import {HashRouter, Route, Redirect, Link, Switch, NavLink} from 'react-router-dom';
import img1 from "../img/rouletteImg.jpeg"
import img2 from "../img/dice.jpeg"
import img3 from "../img/blackjack.jpeg"

class Adult extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            roulette: "off",
            dice: "off",
            blackjack: "off"
        }
    }

    goToRoulletSite = () => {
        this.setState({
            roulette: "on"
        })
    };

    goToDiceSite = () => {
        this.setState({
            dice: "on"
        })
    };

    goToBlackJackSite = () => {
        this.setState({
            blackjack: "on"
        })
    };
    
    render(){
        if (this.state.roulette === "on"){
            return <Redirect to="/adult/rulette" />
        }else if (this.state.dice === "on"){
            return <Redirect to="/adult/dice" />
        }else if (this.state.blackjack === "on"){
            return <Redirect to="/adult/blackjack" />
        }else {
            return (
                <div className="adult">
                    <h1 className="headerAdultStyles">Wybierz Gre</h1>
                    <div className="container3col">
                        <div className="singleColStyles">
                            <h3>Ruletka</h3>
                            <img className="wrapperImgAdult" src={img1} alt="roulette" title="roulette"/>
                            <button onClick={this.goToRoulletSite}>Zagraj</button>
                        </div>
                        <div className="singleColStyles">
                            <h3>Gra w kości</h3>
                            <img className="wrapperImgAdult" src={img2} alt="roulette" title="roulette"/>
                            <button onClick={this.goToDiceSite}>Zagraj</button>
                        </div>
                        <div className="singleColStyles">
                            <h3>BlackJack</h3>
                            <img className="wrapperImgAdult" src={img3} alt="roulette" title="roulette"/>
                            <button onClick={this.goToBlackJackSite}>Zagraj</button>
                        </div>
                    </div>
                </div>
            )
        }
    }
}


export default Adult
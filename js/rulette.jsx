import React from "react";
import {HashRouter, Route, Redirect, Link, Switch, NavLink} from 'react-router-dom';

class Rulette extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            kwota: 4000,
            row1: [1,2,3,4,5,6,7,8,9,10,11,12],
            row2: [13,14,15,16,17,18,19,20,21,22,23,24],
            row3: [25,26,27,28,29,30,31,32,33,34,35,36],
            randomNum: 0,
            disableRandomBtn: false,
            betSpace: "",
            bet: 0,
            disableCheckBtn: true

        }
    }

    randomizer = () => {
        this.setState({
            randomNum: Math.floor(Math.random()* 37),
            disableRandomBtn: true,
            disableCheckBtn: false
        })
    };

    handleNumber = (e) => {
        let addBet = prompt("Ile chcesz obstawić");
        this.setState({
            kwota: this.state.kwota - addBet,
            betSpace: e.currentTarget.innerText,
            bet: addBet
        })
    };

    checkResult = () => {
        if(this.state.randomNum === Number(this.state.betSpace)){
            alert("Gratulacje wygrałeś zakład");
            this.setState({
                kwota: this.state.kwota + (this.state.bet*36)
            })
        }else if(this.state.randomNum % 2 === 0 && this.state.betSpace == "Even"){
            alert("Gratulacje wygrałeś zakład");
            this.setState({
                kwota: this.state.kwota + (this.state.bet*2)
            })
        }else if(this.state.randomNum % 2 != 0 && this.state.betSpace == "Odds"){
            alert("Gratulacje wygrałeś zakład");
            this.setState({
                kwota: this.state.kwota + (this.state.bet*2)
            })
        }else{
            alert("Porażka ;(")
        }

        this.setState({
            disableRandomBtn: false,
            disableCheckBtn: true
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


        if(this.state.kwota < 0){
            return <Redirect to="/adult/gameover"/>
        }else {
            return (
                <div className="HolyGrail">
                    <h1>Moja strona</h1>
                    <div className="HolyGrail-body">
                        <div className="HolyGrail-content">
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
                                <tr>
                                    <td onClick={this.handleNumber} colSpan="6">Odds</td>
                                    <td onClick={this.handleNumber} colSpan="6">Even</td>
                                </tr>
                                </tbody>
                            </table>
                            <button disabled={this.state.disableRandomBtn} onClick={this.randomizer}>Losuj</button>
                            <h1>{this.state.randomNum}</h1>
                            <button disabled={this.state.disableCheckBtn} onClick={this.checkResult}>Sprawdź</button>
                        </div>
                        <div className="HolyGrail-nav">
                            <h1>Zasady gry w ruletke:</h1>
                        </div>
                    </div>
                    <div>
                        <p>Plansza Gracza</p>
                        <p>Twoja kwota to: {this.state.kwota}</p>
                        <p>Postawiłeś: {this.state.bet} zł na pole {this.state.betSpace}</p>
                    </div>
                </div>
            )
        }
    }
}


export default Rulette
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
            disableRandomBtn: true,
            betSpace: "",
            bet: 0,
            disableCheckBtn: true,
            low: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
            high: [18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36],
            red: [1,3,5,7,9,11,14,16,18,20,22,24,25,27,29,31,33,35],
            black: [2,4,6,8,10,12,13,15,17,19,21,23,26,28,30,32,34,36]
        }
    }

    randomizer = () => {

        this.rando = setInterval(() => {
            this.setState({
                randomNum: Math.floor(Math.random()* 37),

            });
        },100);

        this.timer = setTimeout(() => {
            clearInterval(this.rando);
            this.setState({
                disableRandomBtn: true,
                disableCheckBtn: false
            })
        },3000);


    };

    handleNumber = (e) => {
        let addBet = prompt("Ile chcesz obstawić");
        this.setState({
            kwota: this.state.kwota - addBet,
            betSpace: e.currentTarget.innerText,
            bet: addBet,
            disableRandomBtn: false
        })
    };

    checkResult = () => {
        if(this.state.randomNum === Number(this.state.betSpace)){
            alert("Gratulacje wygrałeś zakład");
            this.setState({
                kwota: this.state.kwota + (this.state.bet*35)
            })
        }else if(this.state.randomNum % 2 === 0 && this.state.betSpace === "Even"){
            alert("Gratulacje wygrałeś zakład");
            this.setState({
                kwota: this.state.kwota + (this.state.bet*2)
            })
        }else if(this.state.randomNum % 2 !== 0 && this.state.betSpace === "Odds"){
            alert("Gratulacje wygrałeś zakład");
            this.setState({
                kwota: this.state.kwota + (this.state.bet*2)
            })
        }else if(this.state.low.indexOf(this.state.randomNum) >= 0 && this.state.betSpace === "Low"){
            alert("Gratulacje wygrałeś zakład");
            this.setState({
                kwota: this.state.kwota + (this.state.bet*2)
            })
        }else if(this.state.high.indexOf(this.state.randomNum) >= 0 && this.state.betSpace === "High"){
            alert("Gratulacje wygrałeś zakład");
            this.setState({
                kwota: this.state.kwota + (this.state.bet*2)
            })
        }else if(this.state.red.indexOf(this.state.randomNum) >= 0 && this.state.betSpace === "Red"){
            alert("Gratulacje wygrałeś zakład");
            this.setState({
                kwota: this.state.kwota + (this.state.bet*2)
            })
        }else if(this.state.black.indexOf(this.state.randomNum) >= 0 && this.state.betSpace === "Black"){
            alert("Gratulacje wygrałeś zakład");
            this.setState({
                kwota: this.state.kwota + (this.state.bet*2)
            })
        }else{
            alert("Porażka ;(")
        }

        this.setState({
            disableCheckBtn: true
        })

    };


    render(){

        let firstRow = this.state.row1.map((e,i) => {
            return <td className="tableTDStyles" onClick={this.handleNumber} key={i}>{e}</td>
        });

        let secondRow = this.state.row2.map((e,i) => {
            return <td className="tableTDStyles" onClick={this.handleNumber} key={i}>{e}</td>
        });

        let thirdRow = this.state.row3.map((e,i) => {
            return <td className="tableTDStyles" onClick={this.handleNumber} key={i}>{e}</td>
        });


        if(this.state.kwota < 0){
            return <Redirect to="/adult/gameover"/>
        }else {
            return (
                <div className="HolyGrail homeRulette">
                    <h1 className="headerRuletteSyles">Ruletka</h1>
                    <div className="HolyGrail-body">
                        <div className="HolyGrail-nav">
                            <h1>Zasady gry:
                                <ol>
                                    <li>Gracz rozpoczyna gre ze stanem konta równym: 4000</li>
                                    <li>Gdy stan konta spadnie poniżej zera gracz przegrywa</li>
                                    <li>Po obstawieniu wybranego pola z konta gracza odejmowana jest wartość postawionego zakładu</li>
                                    <li>
                                        <ol id="gameTurn">
                                            Tura gracza polega na :
                                            <li>Wybraniu 1 pola do obstawienia</li>
                                            <li>Zadeklarowaniu sumy jaką chce postawić na wybrane pole</li>
                                            <li>Wylosowaniu liczby poprzez kliknięcie w przycisk losuj</li>
                                            <li>Sprawdzeniu wyniku poprzez kliknięcie w przycisk sprawdź</li>
                                        </ol>
                                    </li>
                                </ol>
                            </h1>
                        </div>
                        <div className="HolyGrail-content">
                            <table>
                                <tbody>
                                <tr  id="row1">
                                    {firstRow}
                                </tr>
                                <tr  id="row2">
                                    {secondRow}
                                </tr>
                                <tr  id="row3">
                                    {thirdRow}
                                </tr>
                                <tr>
                                    <td className="tableTDStyles" onClick={this.handleNumber} colSpan="6">Odds</td>
                                    <td className="tableTDStyles" onClick={this.handleNumber} colSpan="6">Even</td>
                                </tr>
                                <tr>
                                    <td className="tableTDStyles" onClick={this.handleNumber} colSpan="6">Low</td>
                                    <td className="tableTDStyles" onClick={this.handleNumber} colSpan="6">High</td>
                                </tr>
                                <tr>
                                    <td className="tableTDStyles" onClick={this.handleNumber} colSpan="6">Red</td>
                                    <td className="tableTDStyles" onClick={this.handleNumber} colSpan="6">Black</td>
                                </tr>
                                </tbody>
                            </table>
                            <div>
                                <button disabled={this.state.disableRandomBtn} onClick={this.randomizer}>Losuj</button>
                                <h1>{this.state.randomNum}</h1>
                                <button disabled={this.state.disableCheckBtn} onClick={this.checkResult}>Sprawdź</button>
                            </div>
                        </div>
                        <div className="HolyGrail-ads">
                            <h2>Stan konta: {this.state.kwota}</h2>

                            <ul>
                                <li>Postawienie na pole 1-36. Możliwa wygrana 35:1 </li>
                                <li>Postawienie na pole Odds lub Even. Możliwa wygrana 1:1</li>
                                <li>Postawienie na pole Low lub High. Możliwa wygrana 1:1</li>
                                <li>Postawienie na pole Red lub Black. Możliwa wygrana 1:1</li>
                            </ul>
                            <h2>Postawiłeś: <span style={{color: "white"}}>{this.state.bet}</span> na pole <span style={{color: "white"}}>{this.state.betSpace}</span></h2>
                        </div>
                    </div>
                </div>
            )
        }
    }
}


export default Rulette
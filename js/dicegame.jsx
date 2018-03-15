import React from "react";


class DiceGame extends React.Component { // do zrobienia później
    constructor(props){
        super(props);
        this.state = {
            diceOne: 1,
            diceTwo: 1
        }
    }


    randomizer = () => {

      this.rando = setInterval(() => {
          this.setState({
              diceOne: Math.floor( Math.random() * ( 6 - 1 + 1 ) + 1 ),
              diceTwo: Math.floor( Math.random() * ( 6 - 1 + 1 ) + 1 ),
          })
      }, 250);

      this.timer = setTimeout(() => {
          clearInterval(this.rando);
      },2500);

    };

    render(){

        let diceSum = Number(this.state.diceOne) + Number(this.state.diceTwo)

        return(
            <div className="homeDice">
                <h1>Kości</h1>
                <button onClick={this.randomizer}>Rzuć</button>
                <div className="dice-contener">
                    <div className="dice">{this.state.diceOne}</div>
                    <div className="dice">{this.state.diceTwo}</div>
                </div>
                <p>Wynik rzutu = {diceSum} </p>
                <div className="allNumbers-container">
                    <div className="numbers">1</div>
                    <div className="numbers">2</div>
                    <div className="numbers">3</div>
                    <div className="numbers">4</div>
                    <div className="numbers">5</div>
                    <div className="numbers">6</div>
                    <div className="numbers">7</div>
                    <div className="numbers">8</div>
                    <div className="numbers">9</div>
                    <div className="numbers">10</div>
                    <div className="numbers">11</div>
                    <div className="numbers">12</div>
                </div>
                <div className="allNumbers-container">
                    <div className="special-dice-result-space">Double</div>
                    <div className="special-dice-result-space">Less than 7</div>
                    <div className="special-dice-result-space">More than 7</div>
                </div>
    
            </div>
        )
    }
}

export default DiceGame;
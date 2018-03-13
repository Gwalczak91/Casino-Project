import React from "react";


class DiceGame extends React.Component { // do zrobienia później
    constructor(props){
        super(props);
        this.state = {
            diceOne: 1,
            diceTwo: 1
        }
    }

    render(){
        return(
            <div className="homeDice">
                <h1>Kości</h1>
                <button>Rzuć</button>
                <div className="dice-contener">
                    <div className="dice">{this.state.diceOne}</div>
                    <div className="dice">{this.state.diceTwo}</div>
                </div>
            </div>
        )
    }
}

export default DiceGame;
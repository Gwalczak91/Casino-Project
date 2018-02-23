import React from "react";
import {HashRouter, Route, Redirect, Link, Switch, NavLink} from 'react-router-dom';

class GameOver extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            return: false
        }
    }

    changeButton = () => {
        this.setState({
            return: true
        })
    };

    render(){
        if(this.state.return === false) {
            return (
                <div className="home">
                    <div style={{textAlign: "center"}}>
                        <h1>Skończyły sie środki</h1>
                        <button onClick={this.changeButton} style={{fontSize: "16px", marginTop: "20px"}}>Powrót do strony wyboru gier</button>
                    </div>
                </div>
            )
        }else {
            return <Redirect to="/adult"/>
        }
    }
}

export default GameOver;
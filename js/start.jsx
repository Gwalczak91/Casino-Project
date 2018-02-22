import React from "react";
import {HashRouter, Route, Redirect, Link, Switch, NavLink} from 'react-router-dom';

class Start extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="home">
                <div>
                    <h1 className="headerHomeStyle">Great Casino</h1>
                    <p className="paragrafHomeStyle">Aby wejść na strone trzeba mieć ukończone 18 lat !!!</p>
                    <div className="wrapperHomeButtons">
                        <button className="btnStart homeButtons"><NavLink  exact to="/young">Mam poniżej 18 lat</NavLink></button>
                        <button className="btnStart homeButtons"><NavLink  exact to="/logIn">Mam skończone 18 lat</NavLink></button>
                    </div>
                </div>
            </div>
        )
    }
}



export default Start
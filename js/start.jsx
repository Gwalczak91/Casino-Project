import React from "react";
import {HashRouter, Route, Redirect, Link, Switch, NavLink} from 'react-router-dom';

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



export default Start
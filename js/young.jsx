import React from "react";
import imgZakaz from '../img/under18.jpeg'

class Young extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="home">
                <div className="youngStylePage">
                    <img src={imgZakaz} alt="Zakaz" title="Zakaz"></img>
                    <h1 style={{marginTop: "25px"}}>Wymagane posiadanie 18 lat !!!</h1>
                </div>
            </div>
        )
    }
}


export default Young
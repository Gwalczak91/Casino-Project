import React from "react";
import img from '../img/under18.jpeg'

class Young extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div>
                    <img src={img}></img>
                    <h1>Wymagane posiadanie 18 lat</h1>
                </div>
            </div>
        )
    }
}


export default Young
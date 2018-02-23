import React from "react";
import {HashRouter, Route, Redirect, Link, Switch, NavLink} from 'react-router-dom';

class Winner extends React.Component {
  constructor(props){
        super(props);
        this.state = {
            winningList: []
        }
    }


    componentDidMount(){

      this.load = setTimeout(() => {


          fetch("http://localhost:3000/winner")
              .then(r => r.json())
              .then(r => {
                  console.log(r);

                  let price = r.map((e,i) => {
                      return e.wygrana
                  });

                  this.setState({
                      winningList: price.sort(function(a, b){return b - a})
                  })
              })

      },3000)



    }

    render(){

      let list = this.state.winningList.map((e,i) => {
          return <li key={i}>{e}</li>
      });

        return(
            <div className="home">
                <ul> Tabela z wynikami:
                    {list}
                </ul>
            </div>

        )
    }
}

export default Winner
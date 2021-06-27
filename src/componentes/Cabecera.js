import React from 'react';
import "./css/cabecera.css";

import logo_clinica from "../recursos/img/logo-clinica.png"

class Cabecera extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="cabecera">
                <img src={logo_clinica}/>
                <div className="">
                    <h1>La Clínica de la Familia</h1>
                </div>
            </div>
         );
    }
}
 

export default Cabecera;
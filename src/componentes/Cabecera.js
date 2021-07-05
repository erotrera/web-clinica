import React from 'react';
import {Link} from "react-router-dom";
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
                <img src={logo_clinica} alt=""/>

                
                <div className="titulo">
                                               
                </div>
                
                <div className="busqueda">
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                        <Link className="btn btn-outline-warning" type="button" to="/busqueda">Buscar</Link>
                    </form>
                </div>
            </div>
         );
    }
}
 

export default Cabecera;
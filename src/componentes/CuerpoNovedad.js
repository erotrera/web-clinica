import React, { Component } from 'react';

import Tarjeta from "./Tarjeta";
import "./css/cprincipal.css";
//import img_doc1 from "../recursos/img/doc1.jpg";

export default class CuerpoNovedad extends Component {
    render() {
        return (
            <div className="cprin">
                
                <div className="titulo">
                    <div className="h3">Novedad:</div>
                </div>
                <div className="desc">
                    <Tarjeta/>
                    
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react';
import "./css/cprincipal.css";
import ban from "../recursos/img/bannerCob.jpg";

export default class CuerpoCob extends Component {
    render() {
        return (
            <div className="cprin">
                
                <div className="titulo">
                    <div className="h3">Coberturas que nos eligen:</div>
                </div>
                <div className="desc">
                    <div className="col-md-6">
                        <div className="h-100 p-5 text-white rounded-3">
                        <h2>Bienvenidos a la Clínica C&O, calidad y servicio al cuidado de la salud.</h2>
                        <p>Estas son algunas de las empresas con las cuales la Clínica C&O tiene convenios de atención. Recomendamos consultar previamente el alcance de tu cobertura, en tu obra social o prepaga. </p>          
                        
                        </div>
                    </div>           

                </div>
                <div className="banP">
                    <img src={ban} alt=""/>
                </div>

            </div>
        )
    }
}

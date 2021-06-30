import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./css/cprincipal.css";
import ban1 from "../recursos/img/banner1.jpg";

export default class CuerpoPrincipal extends Component {
    render() {
        return (
            <div className="cprin">
                <div className="ban">
                    <img src={ban1} alt=""/>
                </div>
                <div className="desc">
                    <div className="col-md-6">
                        <div className="h-100 p-5 text-white rounded-3">
                        <h2>Calidad y servicio al cuidado de la salud.</h2>
                        <p>Clínica C&O se constituyó como una clínica abierta, de excelente nivel tecnológico y humano, que se destaca por contar en su staff con profesionales de reconocida trayectoria.</p>
                        <p>La Clínica cuenta hoy con 156 camas para internación y ofrece una amplia gama de servicios de alta calidad y tecnología, dentro de un confortable ambiente recientemente renovado.</p>
                        <Link className="btn btn-outline-light" type="button" to="/filosofia">Leer más</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react';
import {Link} from "react-router-dom";

import "./css/cprincipal.css";
import "./css/busqueda.css";

export default class CuerpoBusqueda extends Component {
    render() {
        return (
            <div className="cprin">
                
                <div className="titulo">
                    <div className="h3">Busqueda:</div>
                </div>
                <div className="desc">
                    
                    <div id="resultados">
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse1" aria-expanded="false" aria-controls="flush-collapse1">
                                Coincidencias en [Inicio]
                            </button>
                            </h2>
                            <div id="flush-collapse1" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <Link to="/">Coincidencia #1</Link>
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse2" aria-expanded="false" aria-controls="flush-collapse2">
                                Coincidencias en [Institución]
                            </button>
                            </h2>
                            <div id="flush-collapse2" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <Link to="/filosofia">Coincidencia #1</Link>
                                </div>
                                <div class="accordion-body">
                                    <Link to="/institucional">Coincidencia #2</Link>
                                </div>
                                <div class="accordion-body">
                                    <Link to="/politica">Coincidencia #3</Link>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse3" aria-expanded="false" aria-controls="flush-collapse3">
                                Coincidencias en [Areas]
                            </button>
                            </h2>
                            <div id="flush-collapse3" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <Link to="/areas">Coincidencia #1</Link>
                            </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse4" aria-expanded="false" aria-controls="flush-collapse4">
                                Coincidencias en [Consultorios Externos]
                            </button>
                            </h2>
                            <div id="flush-collapse4" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <Link to="/consultorios">Coincidencia #1</Link>
                            </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse5" aria-expanded="false" aria-controls="flush-collapse5">
                                Coincidencias en [Coberturas]
                            </button>
                            </h2>
                            <div id="flush-collapse5" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <Link to="/coberturas">Coincidencia #1</Link>
                            </div>
                            </div>
                        </div>

                        </div>

                    </div>
                    
                </div>
            </div>
        )
    }
}

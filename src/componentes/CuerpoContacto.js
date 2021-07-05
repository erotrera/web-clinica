import React, { Component } from 'react';
//import {Link} from "react-router-dom";
import "./css/cprincipal.css";
import "./css/contacto.css";


export default class CuerpoContacto extends Component {
    render() {

        function irInicio(){
          window.location.href="/";            
        }
        
        return (
            <div className="cprin">
                
                <div className="titulo">
                    <div className="h3">Contacto:</div>
                </div>
                <div className="desc desc-cc">
                <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="well well-sm">
                                    <form className="form-horizontal" method="post">
                                        <fieldset>
                                            <legend className="text-center header">Formulario de contacto:</legend>

                                            <div className="fcontrol form-group">
                                                <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                <div className="col-md-8">
                                                    <input id="fname" name="name" type="text" placeholder="Nombre" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="fcontrol form-group">
                                                <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                <div className="col-md-8">
                                                    <input id="lname" name="name" type="text" placeholder="Apellido" className="form-control"/>
                                                </div>
                                            </div>

                                            <div className="fcontrol form-group">
                                                <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-envelope-o bigicon"></i></span>
                                                <div className="col-md-8">
                                                    <input id="email" name="email" type="text" placeholder="Dirección de Correo electrónico" className="form-control"/>
                                                </div>
                                            </div>

                                            <div className="fcontrol form-group">
                                                <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-phone-square bigicon"></i></span>
                                                <div className="col-md-8">
                                                    <input id="phone" name="phone" type="text" placeholder="Número de teléfono" className="form-control"/>
                                                </div>
                                            </div>

                                            <div className="fcontrol form-group">
                                                <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                <div className="col-md-8">
                                                    <textarea className="form-control" id="message" name="message" placeholder="Ingrese su mensaje o consulta por aquí, y lo responderemos en un maximo de 24 horas, saludos." rows="7"></textarea>
                                                </div>
                                            </div>

                                            <div className="fcontrol form-group">
                                                <div className="col-md-12 text-center">
                                                    <button type="button" className="btn btn-primary btn-lg" id="b-enviar" data-bs-toggle="modal" data-bs-target="#resultado">Enviar</button>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="resultado" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Envío de Consulta</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Su consulta fue enviada correctamente! Recibirá una respuesta a la brevedad, gracias.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"  onClick={irInicio}>Volver</button>                        
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

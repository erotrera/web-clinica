import React, { Component } from 'react'
import { Link } from "react-router-dom";

import "./css/pie.css";

export default class Pie extends Component {
    render() {
        return (
            <div className="pie">
                
                <footer className="page-footer font-small indigo">

                
                    <div className="container">

                        
                        <div className="row text-center d-flex justify-content-center pt-5 mb-3">

                        
                        <div className="col-md-2 mb-3">
                            <h6 className="text-uppercase font-weight-bold">
                            <Link to="/filosofia">Lo que somos</Link>             </h6>
                        </div>
                        
                        <div className="col-md-2 mb-3">
                            <h6 className="text-uppercase font-weight-bold">
                            <Link to="/areas">Áreas</Link>
                            </h6>
                        </div>
                        
                        <div className="col-md-2 mb-3">
                            <h6 className="text-uppercase font-weight-bold">
                            <Link to="/coberturas">Coberturas</Link>
                            </h6>
                        </div>
                                                               
                        <div className="col-md-2 mb-3">
                            <h6 className="text-uppercase font-weight-bold">
                            <a href="#!">Contactos</a>
                            </h6>
                        </div>
                        

                        </div>
                        
                        <hr className="hr1 rgba-white-light"/>

                    
                        <div className="row d-flex text-center justify-content-center mb-md-0 mb-4">

                        
                            <div className="col-md-8 col-12 mt-5">
                                <figure className="text-center">
                                    <blockquote className="blockquote">
                                        <p>Creemos que el mejor regalo que le puedes hacer a tu familia y al mundo eres tú en buena salud</p>
                                    </blockquote>
                                    <figcaption className="blockquote-footer">
                                    Y es que debes cuidar tu salud no solo para ti, sino para la gente que te quiere
                                    <cite title="Source Title"> - Clinica C&O</cite>
                                    </figcaption>
                                </figure> 
                            </div>
                        

                        </div>
                        
                        <hr className="hr2 clearfix d-md-none rgba-white-light"  />

                        
                        <div className="picn row">

                        
                        <div className="col-md-12">

                            <div className="icn mb-5 flex-center">

                            
                            <a className="fb-ic">
                                <i className="fab fa-facebook-f fa-lg white-text mr-4"> </i>
                            </a>
                            
                            <a className="tw-ic">
                                <i className="fab fa-twitter fa-lg white-text mr-4"> </i>
                            </a>
                            
                            <a className="gplus-ic">
                                <i className="fab fa-google-plus-g fa-lg white-text mr-4"> </i>
                            </a>
                            
                            <a className="li-ic">
                                <i className="fab fa-linkedin-in fa-lg white-text mr-4"> </i>
                            </a>
                            
                            <a className="ins-ic">
                                <i className="fab fa-instagram fa-lg white-text mr-4"> </i>
                            </a>
                            
                            <a className="pin-ic">
                                <i className="fab fa-pinterest fa-lg white-text"> </i>
                            </a>

                            </div>

                        </div>                    

                        </div>  

                        <hr className="hr1 rgba-white-light"/>                

                    </div>   

                    <div className="footer-copyright text-center py-3">© 2021 Copyright:
                        <a href="https://es.reactjs.org"> Carranza - Otrera</a>
                    </div>                

                </footer>

                
                
            </div>
        )
    }
}






                     
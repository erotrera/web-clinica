import React, { Component } from 'react';
import "./css/cprincipal.css";


export default class CuerpoAreas extends Component {
    render() {
        
        return (
            <div className="cprin">
                <div className="video">
                    <div  className='embed-responsive embed-responsive-4by3'>
                    
                        <iframe className='embed-responsive-item' width="861" height="574" src="https://www.youtube.com/embed/uGck1pWIqBU" title='Areas de la clínica' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>

                    
                    
                </div>
                <div className="titulo">
                    <div className="h3">Nuestras áreas:</div>
                </div>
                <div className="desc">
                    <div className="col-md-6">
                        <div className="h-100 p-5 text-white rounded-3">
                        <h2>Bienvenidos a la Clínica C&O, calidad y servicio al cuidado de la salud.</h2>
                        <p>La filosofía del diseño arquitectónico de la Clínica se fundamenta en la disposición de espacios confortables y adecuados en los diferentes servicios, con un moderno equipamiento tecnológico y la capacitación permanente de los recursos humanos que la integran.</p>
                                        
                        
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

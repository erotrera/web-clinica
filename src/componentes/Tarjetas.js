import React from 'react';
import Tarjeta from "./Tarjeta";

import "./css/tarjetas.css"

class Tarjetas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (            
            <div className="tarjetas">
                <div className="titulo">
                    <div className="h3">Novedades:</div>
                </div>

                <div className="ptarjetas container d-flex justify-content-center align-items-center">
                    <div className="tr row">
                        <div className="t col-md-4">
                            <Tarjeta/>    
                        </div>
                        <div className="t col-md-4">
                            <Tarjeta/>    
                        </div>  
                        <div className="t col-md-4">
                            <Tarjeta/>    
                        </div>                      
                    </div>    
                    
                </div>
            </div>            
        );
    }
}
 
export default Tarjetas;
import React from 'react';
import Tarjeta from "./Tarjeta";

class Tarjetas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container d-flex justify-content-center align-items-center">
                <div className="row">
                    <div className="col-md-4">
                        <Tarjeta/>    
                    </div>
                    <div className="col-md-4">
                        <Tarjeta/>    
                    </div>  
                    <div className="col-md-4">
                        <Tarjeta/>    
                    </div>                      
                </div>    
                
            </div>            
        );
    }
}
 
export default Tarjetas;
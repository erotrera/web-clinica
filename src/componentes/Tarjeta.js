import React from 'react';

import img_doc1 from "../recursos/img/doc1.jpg";

class Tarjeta extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="card">
                <img src={img_doc1}/>
                <div className="card-body">
                    <h4 className="card-title">Titulo de tarjeta</h4>
                    <p className="card-text">Descripción de la tarjeta</p>
                    <button className="btn btn-primary">Leer más</button>
                </div>
            </div> 
            
        );
    }
}
 
export default Tarjeta;
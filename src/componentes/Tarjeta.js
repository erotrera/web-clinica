import React from 'react';
import { Link } from 'react-router-dom';
import img_doc1 from "../recursos/img/doc1.jpg";

class Tarjeta extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="card">
                <img src={img_doc1} alt=""/>
                <div className="card-body">
                    <h4 className="card-title">Título de la noticia</h4>
                    <p className="card-text">Descripción de la noticia</p>
                    <Link className="btn btn-primary" to="/novedad">Leer más</Link>
                </div>
            </div> 
            
        );
    }
}
 
export default Tarjeta;
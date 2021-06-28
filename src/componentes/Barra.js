import React from 'react';
import {Link} from "react-router-dom";
import "./css/barra.css";

class Barra extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="barra">

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Inicio</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Institución
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><Link className="dropdown-item" to="/filosofia">Filosofía</Link></li>
                            <li><Link className="dropdown-item" to="/institucional">Reseña institucional</Link></li>
                            <li><Link className="dropdown-item" to="/politica">Política de calidad</Link></li>
                        </ul>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/areas">Areas</Link>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Consultorios Externos</a>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/coberturas">Coberturas</Link>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Contactos</a>
                        </li>
                        
                    </ul>
                    </div>
                </div>
                </nav>

            </div>
            
        );
    }
}
 
export default Barra;
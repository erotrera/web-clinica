import React, { Component } from 'react';
import "./css/cprincipal.css";
import ban from "../recursos/img/banner2.jpg";

export default class CuerpoFil extends Component {
    render() {
        return (
            <div className="cprin">
                <div className="ban">
                    <img src={ban}/>
                </div>
                <div className="titulo">
                    <div className="h3">Filosofía:</div>
                </div>
                <div className="desc">
                    <div className="col-md-6">
                        <div className="h-100 p-5 text-white rounded-3">
                        <h2>Bienvenidos a la Clínica C&O, calidad y servicio al cuidado de la salud.</h2>
                        <p>En el 2010, la Clínica C&O cumplió su 50° Aniversario y obtuvo además una nueva acreditación plena de ITAES. A lo largo de este medio siglo, la Clínica Santa Isabel -ubicada en el centro geográfico de la Ciudad de Santiago del Estero- se constituyó como una clínica abierta, de excelente nivel tecnológico y humano, que se destaca por contar en su staff con profesionales de reconocida trayectoria. </p>
                        <p>La Clínica Santa Isabel focaliza su acción en el cuidado y contención de los pacientes y sus familias, prestando especial atención a las normas éticas de los servicios médicos, basadas en la dignidad y en los derechos. El personal está integrado por profesionales, técnicos y auxiliares, altamente capacitados para la atención asistencial directa de internación y servicios ambulatorios.</p>
                        
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

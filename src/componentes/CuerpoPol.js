import React, { Component } from 'react';
import "./css/cprincipal.css";
import ban from "../recursos/img/banner4.jpg";

export default class CuerpoPol extends Component {
    render() {
        return (
            <div className="cprin">
                <div className="ban">
                    <img src={ban}/>
                </div>
                <div className="titulo">
                    <div className="h3">Política de calidad:</div>
                </div>
                <div className="desc">
                    <div className="col-md-6">
                        <div className="h-100 p-5 text-white rounded-3">
                        <h2>Bienvenidos a la Clínica C&O, calidad y servicio al cuidado de la salud.</h2>
                        
                            <p>La Política de Calidad de CLINICA C&O, establecida por el Equipo Directivo, se fundamenta en
                            los siguientes ejes estratégicos:</p>
                            
                            <blockquote>
                            <p>•	Personalización de la Atención Médica de los pacientes y sus familias bajo las premisas de la Atención centrada en la persona.</p><p>
                            •	Brindar un servicio personalizado y humanizado a los pacientes y sus familiares, así como la creación de un clima de satisfacción, seguridad y armonía entre el personal de salud.</p><p>
                            •	Unir la satisfacción con la seguridad y la calidad.</p>
                            
                            </blockquote>
                            <p>La Dirección de División Clínicas se compromete a implementar y mejorar continuamente su Sistema de Gestión de la Calidad con el propósito de maximizar la satisfacción de sus usuarios, a través de:    </p>
                            
                            <blockquote>
                            <p> •	La identificación de sus necesidades.</p><p>
                            •	El respeto por los derechos del paciente y su grupo familiar y de los aspectos particulares de las diferentes comunidades desde todos los puntos de vista.</p><p>
                            •	El involucramiento de los pacientes y sus familiares en los procesos de atención, con el objetivo de facilitar su colaboración con el proceso asistencial.</p><p>
                            •	La prestación de servicios y de asistencia médica, con la garantía de  calidad médica y ética profe-sional.</p><p>
                            •	Optimizar la seguridad hospitalaria, en todos sus aspectos,  tanto en lo que hace a pacientes y familiares como así también a personal y público en general, reduciendo y controlando las fuentes de riesgo.
                            </p><p>
                            •	Un servicio personalizado,  cordial y contenedor con la más alta calidad de atención.</p><p>
                            •	La mejora continua de sus procesos.</p><p>
                            •	la adecuada capacitación de sus colaboradores.</p><p>
                            •	la comunicación, comprensión e implementación de esta Política a todos los niveles de la organización.</p>
                            
                            </blockquote>
                            <p>Esta Dirección se compromete a liderar y apoyar permanentemente el entendimiento, aplicación y cumplimiento de esta Política de Calidad, así como propiciar un clima organizacional óptimo para el logro de la misma a través del esfuerzo conjunto de todos sus colaboradores.</p>
                            <span>
                            <p>Cdor. Alfredo Arien
                            </p>
                            <p>
                            Director División Clínicas
                            </p>                           
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

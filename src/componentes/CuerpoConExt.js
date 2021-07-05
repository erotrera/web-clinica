import React, { Component } from 'react';
import "./css/cprincipal.css";
import "./css/consultorios.css";
import ban from "../recursos/img/banner5.jpg";

export default class CuerpoConExt extends Component {
    render() {

        //const especialidades=["Cardiología", "Cirugía", "Clínica médica","Dermatología", "Endocrinología", "Ginecología", "Hemodinamia", "Neurología", "Nutrición", "Traumatología","Urología"];

        //const medicos=[[1,"Dr Carlos Pelegrini"],[1,"Dr Andres Iniesta"],[1,"Dr Julio Roca"], [1,"Dr Karles Puyol"], [2,"Dra Andrea Gamarra"], [2,"Dra Cristina Fernandez"],[2,"Dr Manuel Cinola"],[3,"Dra Romina Frigerio"],[3,"Dra Esmeralda Mitre"],[4,"Dr Emilio Tucznio"],[5,"Dr Enzo Perez"],[5,"Dr Pedro Pony"],[6,"Dra Amelia Coronel"],[7,"Dr Gregorio Argento"],[8,"Dr Ramon Reyes"],[9,"Dra Ana Nolita"],[10,"Dr Francisco Ceballo"],[11,"Dr German Binner"]];
       
        /*
        function listarMedicos(x){
            x++;
            const med=medicos.map((medico,x)=>{
                console.log("nro medico: "+medico[0]+" x="+x)
                if(medico[0]===x){
                    return medico[1];
                }
                return null;                                
            });
            console.log(med);
            return med.map(
                (m)=>{
                    console.log(m);
                    return <li key={m} value={m}>{m}</li>;    
                    
                }
            );
            
        }
                
        const listEsp = especialidades.map((especialidad,indice) => {
            // Correcto! La key debería ser especificada dentro del array.

            var y = <li key={indice} value={especialidad}>{especialidad.toString()}<ul>{listarMedicos(indice)}</ul></li>;
            indice++;
            return y;            
        }
        );

        */
        
        //console.log(listarMedicos(1));


        return (
            <div className="cprin">
                <div className="ban">
                    <img src={ban} alt=""/>
                </div>
                <div className="titulo">
                    <div className="h3">Consultorios Externos:</div>
                </div>
                <div className="desc-cce desc">
                    <div className="dht">
                        <p>Dirección: Calle principal 777</p>
                        <p>Horario de atención: Lunes a Viernes de 8 a 20 hs.</p>
                        <p>Teléfono: (0385) 4-77-7777</p>
                    </div>
                    <div className="consultorios">
                        <ul className="lesp list-group">
                            <div className="list-group-item btn btn-secondary active" type="button" data-bs-toggle="collapse" data-bs-target="#l1" aria-expanded="false" aria-controls="collapseExample">Cardiología</div>
                            <ul className="lmed list-group list-group-flush collapse" id="l1">
                                <li className="list-group-item ">Dr Carlos Pelegrini</li>
                                <li className="list-group-item">Dr Andres Iniesta</li>
                                <li className="list-group-item">Dr Julio Roca</li>
                                <li className="list-group-item">Dr Karles Puyol</li>
                            </ul>
                            <div className="list-group-item btn btn-secondary active" type="button" data-bs-toggle="collapse" data-bs-target="#l2" aria-expanded="false" aria-controls="collapseExample"> Cirugía</div>
                            <ul className="lmed list-group collapse list-group-flush" id="l2">
                                <li className="list-group-item ">Dra Andrea Gamarra</li>
                                <li className="list-group-item">Dra Cristina Fernandez</li>
                                <li className="list-group-item">Dr Manuel Cinola</li>
                            </ul>
                            <div className="list-group-item btn btn-secondary active" type="button" data-bs-toggle="collapse" data-bs-target="#l3" aria-expanded="false" aria-controls="collapseExample">Clínica médica</div>
                            <ul className="lmed list-group collapse list-group-flush" id="l3">
                                <li className="list-group-item">Dra Mariana Fabiani</li>
                                <li className="list-group-item">Dra Cristina Fernandez</li>
                                <li className="list-group-item">Dr Edgar Roldan</li>
                                <li className="list-group-item">Dra Mauricio Fernandez</li>
                                <li className="list-group-item">Dr Manuel Gerez</li>
                            </ul>
                            <div className="list-group-item btn btn-secondary active" type="button" data-bs-toggle="collapse" data-bs-target="#l4" aria-expanded="false" aria-controls="collapseExample">Dermatología</div>
                            <ul className="lmed list-group collapse list-group-flush" id="l4">
                                <li className="list-group-item">Dra Celia Gonzalez</li>
                                <li className="list-group-item">Dra Carla Pereira</li>                                
                            </ul>
                            <div className="list-group-item btn btn-secondary active" type="button" data-bs-toggle="collapse" data-bs-target="#l5" aria-expanded="false" aria-controls="collapseExample">Endocrinología</div>
                            <ul className="lmed list-group collapse list-group-flush" id="l5">
                                <li className="list-group-item">Dra Veronica Salvatierra</li>
                                <li className="list-group-item">Dra Fernanda Mirolo</li>                                
                            </ul>
                            <div className="list-group-item btn btn-secondary active" type="button" data-bs-toggle="collapse" data-bs-target="#l6" aria-expanded="false" aria-controls="collapseExample">Ginecología</div>
                            <ul className="lmed list-group collapse list-group-flush" id="l6">
                                <li className="list-group-item">Dra Margarita Silva</li>                                        
                            </ul>
                            <div className="list-group-item btn btn-secondary active" type="button" data-bs-toggle="collapse" data-bs-target="#l7" aria-expanded="false" aria-controls="collapseExample">Hemodinamia</div>
                            <ul className="lmed list-group collapse list-group-flush" id="l7">
                                <li className="list-group-item">Dra Rosa Fuentes</li>                                        
                            </ul>
                            <div className="list-group-item btn btn-secondary active" type="button" data-bs-toggle="collapse" data-bs-target="#l8" aria-expanded="false" aria-controls="collapseExample">Neurología</div>
                            <ul className="lmed list-group collapse list-group-flush" id="l8">
                                <li className="list-group-item">Dra Valeria Robles</li>
                                <li className="list-group-item">Dra Luna Cartila</li>
                                <li className="list-group-item">Dr Ernesto Pais</li>
                            </ul>
                            <div className="list-group-item btn btn-secondary active" type="button" data-bs-toggle="collapse" data-bs-target="#l9" aria-expanded="false" aria-controls="collapseExample">Nutrición</div>
                            <ul className="lmed list-group collapse list-group-flush" id="l9">
                                <li className="list-group-item">Dra Celia Cruz</li>
                                <li className="list-group-item">Dra Carla Mirolo</li>                                
                            </ul>
                            <div className="list-group-item btn btn-secondary active" type="button" data-bs-toggle="collapse" data-bs-target="#l10" aria-expanded="false" aria-controls="collapseExample">Traumatología</div>
                            <ul className="lmed list-group collapse list-group-flush" id="l10">
                                <li className="list-group-item">Dra Valeria Robles</li>
                                <li className="list-group-item">Dra Georgina Barba</li>
                                <li className="list-group-item">Dr Ricardo Juez</li>
                            </ul>
                            <div className="list-group-item btn btn-secondary active" type="button" data-bs-toggle="collapse" data-bs-target="#l11" aria-expanded="false" aria-controls="collapseExample">Urología</div>
                            <ul className="lmed list-group collapse list-group-flush" id="l11">
                                <li className="list-group-item">Dra Romina Malaspina</li>
                                <li className="list-group-item">Dra Carla Mirolo</li>                                
                            </ul>

                        </ul>
                    </div>

                </div>
                
            </div>
        )
    }
}

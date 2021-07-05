import React, { Component } from 'react';
import "./css/cprincipal.css";
import ban from "../recursos/img/banner3.jpg";

export default class CuerpoRes extends Component {
    render() {
        return (
            <div className="cprin">
                <div className="ban">
                    <img src={ban} alt=""/>
                </div>
                <div className="titulo">
                    <div className="h3">Reseña institucional:</div>
                </div>
                <div className="desc">
                    <div className="col-md-6">
                        <div className="h-100 p-5 text-white rounded-3">
                        <h2>Bienvenidos a la Clínica C&O, calidad y servicio al cuidado de la salud.</h2>
                        <p className="texto">La Clínica Santa Isabel fue fundada el 26 de julio de 1960 por Adelqui T. Santucci, quien utilizó inicialmente su casa materna de la calle Lautaro 369, donde en la actualidad se encuentra la entrada a los Consultorios Externos.</p><p>Este proyecto se gestó durante la presidencia de Arturo Frondizi, con la ayuda de un crédito destinado a la construcción de clínicas debido a la falta de camas en la Capital Federal.</p><p>La Familia Santucci, de profunda fe religiosa, solicitó colaboración a las Hermanas Franciscanas de la Tercera Orden, cuya casa matriz se encuentra en Viena, Austria. Las hermanas residían en el sexto piso de la Clínica y asistían como enfermeras a los pacientes internados; cada una de ellas cumplía una función como responsable en cada servicio de la Clínica (internación, cocina, admisión, entre otras).</p><p>La Institución, ubicada en el centro geográfico de la Ciudad Autónoma de Buenos Aires (barrio de Flores), fue diseñada originalmente para desarrollarse como un centro materno infantil; de allí su nombre Clínica y Maternidad Santa Isabel, y contó en su apertura con 6 pisos y 65 camas.</p><p>La composición accionaria inicial se conformaba con el 85% perteneciente a la familia Santucci; y el 15% restante, a diez médicos fundadores que se desempeñaban en las principales especialidades: doctores Guillermo Bosch, Luis Bosch, Santiago Chouhy Aguirre, José De All, Jorge Fossatti, Marcos Peluffo, Héctor Pierangeli, Sergio Poklepovic, Licurgo Santucci y Luis María Zorraquín.</p><p>En 1972 fue adquirido un terreno lindero al edificio de la calle Lautaro, donde se construyó un anexo con 40 nuevas camas; con lo que se llegó a un total de 100.</p><p>A raíz de la fuerte necesidad de los habitantes de la zona oeste de la Capital Federal, en 1985 la Clínica abrió un sistema prepago propio que alcanzó los 25.000 asociados y fue llamado “Centro Médico Santa Isabel”.</p><p>Posteriormente, la familia Santucci compró el 15% de las acciones que estaban en manos de los médicos fundadores; y ya en 1998 posee la totalidad de la tenencia accionaria.</p><p>En junio de 1998, la Clínica es adquirida por el grupo ADESLAS, la primera Compañía de Seguros de Salud de España, que construyó el actual edificio sobre la avenida Directorio (terreno que había sido originalmente comprado por la familia Santucci pero que se mantuvo sin edificar). Se duplica así la superficie a más de 13.000 m² y se la dota de una moderna estructura edilicia, lo que demandó una gran inversión en tecnología y en recursos humanos.</p><p>En el 2003, la Clínica es comprada por el Grupo BBVA Consolidar, que desarrolla una política de crecimiento con estándares de calidad; y aumenta su dotación de camas a un total de 146.</p><p>En octubre de 2008, OMINT adquiere la prepaga Consolidar Salud y con ella las Clínicas Santa Isabel y Bazterrica. Desde entonces, el objetivo de la Clínica Santa Isabel es reafirmar el liderazgo en el oeste tanto de la Ciudad Autónoma de Buenos Aires, como del primer cordón del conurbano, asegurando un excelente nivel médico y acceso a la tecnología de primer nivel en una institución polivalente de gran prestigio en la zona.</p><p>En el 2010, la Clínica Santa Isabel cumple su 50° Aniversario y obtiene además una nueva acreditación plena de ITAES. Se trata de una asociación civil sin fines de lucro cuyo objetivo es elevar la calidad de atención médica en la República Argentina a través de la acreditación de establecimientos de salud en los que se evalúa desde la planta física hasta el proceso de atención médica, incluyendo el nivel de satisfacción de los usuarios.</p>
                        <p className="texto">En la actualidad, en la Clínica se construyen equipos de trabajo sólidos y pujantes. En forma semanal se realizan Ateneos, una actividad científica que se desarrolla con todos los equipos médicos, y donde se presentan y discuten casos problema.</p><p>A lo largo de este medio siglo, la Clínica C&O -ubicada en el centro geográfico de la ahora Ciudad Autónoma de Buenos Aires- se constituyó como una clínica abierta, de excelente nivel tecnológico y humano, que se destaca por contar en su staff con médicos reconocidos que crecieron junto a ella.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

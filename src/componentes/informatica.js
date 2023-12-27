import React from "react";
import "../App.css";
import { useEffect } from "react";
import { useState } from "react";
import App from "../App";
import 'bootstrap/dist/css/bootstrap.css';
function Informatica({tema, setTema, setEng, eng}){
    return(
        <div className={"informatica container"}>
            <div className="row informaticaBackground">
               <div className="col topBar">
                {/*boton de tema*/}
                  <div onClick={setTema} className={tema?"col textoTema-c":"col textoTema-n"}>
                <h5 className='textoTema-posicion'>{tema?"Claro":"Oscuro"}</h5>
                  </div>
                {/*boton de tema*/}
                {/*boton idioma*/}
               <div className={"col language"} onClick={setEng}> 
                 {eng?"ESP":"ENG"}
             </div>
              {/*boton idioma*/}
        </div>
             <div className="bienvenidaInformatica">
              Bienvenido al apartado de programacion!.
              </div>     
             <div className="cuerpoInformatica">
                En este apartado se expondran los diversos temas que abarcan a la programacion.
             </div>       
             <a href="sentenciaIf" className="cuerpoInformatica">Sentencia IF</a>

             <div className="" id="sentenciaIf"></div>
            </div>
        </div>
    );
}

export default Informatica;
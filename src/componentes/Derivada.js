import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Derivada({tema, setTema}){
    return(
        <div className={tema?"fondoBlanco":"fondoNegro"}>
            <div onClick={setTema} className={tema?"textoTema-c":"textoTema-n"}>
        {/*boton de tema*/}
        <h5 className='textoTema-posicion'>{tema?"Claro":"Oscuro"}</h5>
        </div>
                <h2 className={tema?"textoNegro":"textoBlanco"}>Bienvenido a la sección!.</h2>      

                <Link className={tema?"redireccionamientosOscuro volverAlInicioBoton":"redireccionamientosClaro volverAlInicioBoton"} to={"/"}>volver al inicio</Link>
        </div>
    );
}

export default Derivada;
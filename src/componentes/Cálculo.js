import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Cálculo({tema, setTema}){
    return(
        <div className={tema?"fondoNegro":"fondoBlanco"}>

        {/*boton de tema*/}                
        <div onClick={setTema} className={tema?"textoTema-c":"textoTema-n"}>
         <h5 className='textoTema-posicion'>{tema?"Claro":"Oscuro"}</h5>
         </div>
        {/*boton de tema*/}
        
            <h1 className="textoBlanco textoMediano">Estas dentro de la opción de Cálculo I !.
            <br/>
            <br/>Contenido de cálculo I:</h1>
            
           
            <Link className={tema?"redireccionamientosClaro":"redireccionamientosOscuro"} to={"/Cálculo/Funciones"}>Funciones</Link>
            <br/>

            <Link className={tema?"redireccionamientosClaro":"redireccionamientosOscuro"} to={"/Cálculo/Limites"}>Limites</Link>
            <br/>

            <Link className={tema?"redireccionamientosClaro":"redireccionamientosOscuro"} to={"/Cálculo/Continuidad"}>Continuidad</Link>
            <br/>

            <Link className={tema?"redireccionamientosClaro":"redireccionamientosOscuro"} to={"/Cálculo/Derivada"}>Derivada</Link>
            <br/>
             
            <Link className={tema?"redireccionamientosClaro volverAlInicioBoton":"redireccionamientosOscuro volverAlInicioBoton"} to={"/"}>volver al inicio</Link>
        </div>
    );
}

export default Cálculo;
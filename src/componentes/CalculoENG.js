import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function CalculoENG({tema, setTema, setEng}){
    return(
        <div className={tema?"fondoNegro":"fondoBlanco"}>

        {/*boton de tema*/}                
        <div onClick={setTema} className={tema?"textoTema-c":"textoTema-n"}>
         <h5 className='textoTema-posicion'>{tema?"Claro":"Oscuro"}</h5>
         </div>
        {/*boton de tema*/}
        {/*boton idioma*/}
        <div className={""} onClick={setEng}> 
           ENG
        </div>
        {/*boton idioma*/}
            <h1 className="textoBlanco textoMediano">Your are inside of the calculus I section!.
            <br/>
            <br/>Calculus I content:</h1>
            
           
            <Link className={tema?"redireccionamientosClaro":"redireccionamientosOscuro"} to={"/Cálculo/Funciones"}>Functions</Link>
            <br/>

            <Link className={tema?"redireccionamientosClaro":"redireccionamientosOscuro"} to={"/Cálculo/Limites"}>Limits</Link>
            <br/>

            <Link className={tema?"redireccionamientosClaro":"redireccionamientosOscuro"} to={"/Cálculo/Continuidad"}>continuity</Link>
            <br/>

            <Link className={tema?"redireccionamientosClaro":"redireccionamientosOscuro"} to={"/Cálculo/Derivada"}>Derivative</Link>
            <br/>
             
            <Link className={tema?"redireccionamientosClaro volverAlInicioBoton":"redireccionamientosOscuro volverAlInicioBoton"} to={"/"}>Back to HUB</Link>
        </div>
    );
}

export default CalculoENG;
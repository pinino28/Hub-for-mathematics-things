import React from 'react';
import "../App.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

function BienvenidaENG({tema, setTema, eng, setEng}) {

  const [text, setText] = useState("");
  const [num, setNum] = useState(1);

  useEffect(() => {

    const intervalId = setInterval(() => {
    
      const completeText = "Welcome to the HUB...";

      // funcion que permite leer el texto y tomar una casilla mas cada vez que es leido
      const updatedText = completeText.slice(0, num)
      //Actualizar el numero, asi cuando se repite la funcion se puede agregar el nuevo texto.
      setNum(num+1);
      // Actualizar el estado con el nuevo texto
      setText(updatedText);
    }, 100); 

    return () => clearInterval(intervalId);
  }, [text]);

  return (
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

          <div className={tema?"bienvenidaTexto blanco":"bienvenidaTexto negro"} >

            <h1 id="textoBienvenida">{text}</h1> 
            Select some of this options for go to another sections

            <br/><br/>
            <div id="calculoCont">
            <Link id="calculo" className={tema?"redireccionamientosClaro":"redireccionamientosOscuro"} to="/Cálculo">Calculus</Link>
            <img id="calculoImg" src=''/>
            </div>
            <br/><br/>

            <Link id="informatica" className={tema?"redireccionamientosClaro":"redireccionamientosOscuro"} to="/informatica">Computing</Link>
            <br/><br/>
            
            <strong>Soon new options avaible</strong>
    
           <footer>CD</footer>
        </div>
       </div>
    );
  }

  export default BienvenidaENG;
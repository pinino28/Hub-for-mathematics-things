import React from 'react';
import "../App.css";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

function Bienvenida({tema, setTema, eng, setEng}) {
  
  const [text, setText] = useState("");
  const [num, setNum] = useState(1);
  useEffect(() => {

    const intervalId = setInterval(() => {
    
      const completeText = "Bienvenido al HUB...";

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
           ESP
        </div>
        {/*boton idioma*/}

          <div className={tema?"bienvenidaTexto blanco":"bienvenidaTexto negro"} >

            <h1 id="textoBienvenida">{text}</h1> 
            Seleccione alguna de las opciones para ir a otro apartado.
            <br/><br/>
            <div id="calculoCont">
            <Link id="calculo" className={tema?"redireccionamientosClaro":"redireccionamientosOscuro"} to="/Cálculo">Cálculo</Link>
            <img id="calculoImg" src=''/>
            </div>
            <br/><br/>

            <Link id="informatica" className={tema?"redireccionamientosClaro":"redireccionamientosOscuro"} to="/informatica">Informática</Link>
            <br/><br/>
            
            <strong>Proximamente nuevas opciones disponibles...</strong>
    
           <footer>CD</footer>
        </div>
       </div>
    );
  }

  export default Bienvenida;
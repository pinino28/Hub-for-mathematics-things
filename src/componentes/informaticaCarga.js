import React from "react";
import "../App.css";
import { useState } from "react";
import { useEffect } from "react";
import App from "../App";
function InformaticaCarga({tema, setTema, setAct}){
    const [text, setText] = useState("");
  const [num, setNum] = useState(1);

  const [text2, setText2] = useState("");
  const [num2, setNum2] = useState(1); 

  

        //La idea de este use effect era que la variable act se actualice y se envie al modulo App para que arranque el otro useEffect. El problema es que no lo hace. . . 
    useEffect(() => {
        setAct() 
        const intervalId = setInterval(() => {
            const completeText = "function loquito(){<br/>if(loquito==true){<br/>setLoquito(false)<br/>};"
            const updatedText = completeText.slice(0, num);
            setNum(num+1);
            setText(updatedText);
          }, 50); 
        //Al parecer el setAct se tiene que volver a ejecutar como funcion, sino me va a tirar un error de funcion
        //(no se porque, debe ser tema del useEffect, ya que fuera de el si funciona).
        
        //No importa que esta cuestion se ejecute infinitamente, porque al final el valor de false no va a cambiar, ademas de que si cambiara solo lo va a hacer a false
        //(y ya es false), aunque igualmente le puse un if para que se ejecute solo cuando es true.
      
          return () => clearInterval(intervalId);
      }, [text]);
    return(
        <div dangerouslySetInnerHTML={{ __html: text }} className={"carga"}>
        </div>
    );
}

export default InformaticaCarga;
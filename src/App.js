import Bienvenida from "./componentes/bienvenida";
import Cálculo from "./componentes/Cálculo";
import Limites from "./componentes/Limites";
import Derivada from "./componentes/Derivada";
import Funciones from "./componentes/Funciones";
import Continuidad from "./componentes/Continuidad";
import BienvenidaENG from "./componentes/bienvenidaENG";
import CalculoENG from "./componentes/CalculoENG";
import Informatica from "./componentes/informatica";
import InformaticaCarga from "./componentes/informaticaCarga";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import './App.css';
import { useState } from "react";
import { useEffect, useRef } from "react";

//escribe en la terminal ¨npm start¨ para ejecutar la aplicación web.
function App() {
  const [tema, setTema] = useState(false);
  const [eng, setEng] = useState(false);
  const [infoCharge, setInfoCharge] = useState(false);
  const [act, setAct] = useState(false);
  //IMPORTANTE!!
  //este use effect no se va a ejecutar por segunda vez (Por ser el modulo MAIN), por lo tanto necesito una actualizacion de variable que llegue desde el modulo informaticaCarga
  useEffect(() => {
    //puedo activarlo cuando presiono un boton en el link de bienvenida, asi cuando eso sucede entonces cambia infoCharge y un if va a evaluarlo en true, luego de 
    //eso se va a ejecutar.
    if(infoCharge==true){ 
    setTimeout(()=>{
       setInfoCharge(false);
     }, 5000)
    }
   }, [act]);

  return (
    <div>    
      <BrowserRouter>
        <Routes>
         
         <Route path="/Cálculo/Limites" element={<Limites setEng={()=>setEng(!eng)} tema={tema} setTema={()=>setTema(!tema)}/>}/>
         <Route path="/Cálculo/Funciones" element={<Funciones setEng={()=>setEng(!eng)} tema={tema} setTema={()=>setTema(!tema)}/>}/>
         <Route path="/Cálculo/Derivada" element={<Derivada setEng={()=>setEng(!eng)} tema={tema} setTema={()=>setTema(!tema)}/>}/>
         <Route path="/Cálculo/Continuidad" element={<Continuidad setEng={()=>setEng(!eng)} tema={tema} setTema={()=>setTema(!tema)}/>}/>
         <Route path="/" element={eng?<Bienvenida setInfoCharge={()=>setInfoCharge(true)} tema={tema} setEng={()=>setEng(!eng)} setTema={()=>setTema(!tema)}/>:<BienvenidaENG setInfoCharge={()=>setInfoCharge(true)} tema={tema} setEng={()=>setEng(!eng)} setTema={()=>setTema(!tema)}/>}/>
         <Route path="/Cálculo" element={eng?<Cálculo tema={tema} setEng={()=>setEng(!eng)} setTema={()=>setTema(!tema)}/>:<CalculoENG tema={tema} setEng={()=>setEng(!eng)} setTema={()=>setTema(!tema)}/>}/>
         <Route path="/Informatica" element={infoCharge?<InformaticaCarga setAct={()=>setAct(!act)} infoCharge={infoCharge}/>:<Informatica setTema={()=>setTema(!tema)} tema={tema} setEng={()=>setEng(!eng)} eng={eng}/>}/>
         {//entonce, para que la variable pase a travez del componente se tiene que declarar la variable para ser 
         //usada en el componente, Y LUEGO se tiene que pasar la variable existen en el use state que esta aca.
         //y así es como pasamos la variable a otro componente...
        }
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

import Bienvenida from "./componentes/bienvenida";
import Cálculo from "./componentes/Cálculo";
import Limites from "./componentes/Limites";
import Derivada from "./componentes/Derivada";
import Funciones from "./componentes/Funciones";
import Continuidad from "./componentes/Continuidad";
import BienvenidaENG from "./componentes/bienvenidaENG";
import CalculoENG from "./componentes/CalculoENG";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import './App.css';
import { useState } from "react";

//escribe en la terminal ¨npm start¨ para ejecutar la aplicación web.
function App() {
  const [tema, setTema] = useState(false);
  const [eng, setEng] = useState(false);
  
  return (
    <div>    
      <BrowserRouter>
        <Routes>
         
         <Route path="/Cálculo/Limites" element={<Limites setEng={()=>setEng(!eng)} tema={tema} setTema={()=>setTema(!tema)}/>}/>
         <Route path="/Cálculo/Funciones" element={<Funciones setEng={()=>setEng(!eng)} tema={tema} setTema={()=>setTema(!tema)}/>}/>
         <Route path="/Cálculo/Derivada" element={<Derivada setEng={()=>setEng(!eng)} tema={tema} setTema={()=>setTema(!tema)}/>}/>
         <Route path="/Cálculo/Continuidad" element={<Continuidad setEng={()=>setEng(!eng)} tema={tema} setTema={()=>setTema(!tema)}/>}/>
         <Route path="/" element={eng?<Bienvenida tema={tema} setEng={()=>setEng(!eng)} setTema={()=>setTema(!tema)}/>:<BienvenidaENG tema={tema} setEng={()=>setEng(!eng)} setTema={()=>setTema(!tema)}/>}/>
         <Route path="/Cálculo" element={eng?<Cálculo tema={tema} setEng={()=>setEng(!eng)} setTema={()=>setTema(!tema)}/>:<CalculoENG tema={tema} setEng={()=>setEng(!eng)} setTema={()=>setTema(!tema)}/>}/>
         {//tonce, para que la variable pase a travez del componente se tiene que declarar la variable para ser 
         //usada en el componente, Y LUEGO se tiene que pasar la variable existen en el use state que esta aca.
         //y así es como pasamos la variable a otro componente...
        }
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

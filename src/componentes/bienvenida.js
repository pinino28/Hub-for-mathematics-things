import React from 'react';
import "../App.css";
import { Link } from 'react-router-dom';
import $ from "jquery";

function Bienvenida({tema, setTema, eng, setEng}) {
  //para que no se vuelva a cargar el texto de bienvenida cada vez que cambio el tema o el idioma, podria poner el jQuery en un archivo aparte para que no vuelva a cargarse
  $(function(){
  // $("#calculo").hide()
  // $("#informatica").hide()
  // 
  // $("#calculo").on("mouseover", function(){
  //  $("#calculo").show();
  // })

  $(setTimeout(function(){
    $("#textoBienvenida").text("Bi|")
  }, 0))

     $(setTimeout(function(){
       $("#textoBienvenida").text("Bie|")
     }, 100))

     $(setTimeout(function(){
       $("#textoBienvenida").text("Bien|")
     }, 200))

     $(setTimeout(function(){
      $("#textoBienvenida").text("Bienv|")
    }, 300))

    $(setTimeout(function(){
      $("#textoBienvenida").text("Bienve|")
    }, 500))

    $(setTimeout(function(){
      $("#textoBienvenida").text("Bienven|")
    }, 700))

    $(setTimeout(function(){
      $("#textoBienvenida").text("Bienveni|")
    }, 1000))

    $(setTimeout(function(){
      $("#textoBienvenida").text("Bienvenid|")
    }, 1400))

    $(setTimeout(function(){
      $("#textoBienvenida").text("Bienvenido|")
    }, 1500))
     
    $(setTimeout(function(){
      $("#textoBienvenida").text("Bienvenido |")
    }, 1800))

    $(setTimeout(function(){
      $("#textoBienvenida").text("Bienvenido a|")
    }, 2000))

    $(setTimeout(function(){
      $("#textoBienvenida").text("Bienvenido al|")
    }, 2100))

    $(setTimeout(function(){
      $("#textoBienvenida").text("Bienvenido al |")
    }, 2200))

    $(setTimeout(function(){
      $("#textoBienvenida").text("Bienvenido al h|")
    }, 2500))

    $(setTimeout(function(){
      $("#textoBienvenida").text("Bienvenido al hu|")
    }, 2800))

    $(setTimeout(function(){
      $("#textoBienvenida").text("Bienvenido al hub|")
    }, 3000))

    $(setTimeout(function(){
      $("#textoBienvenida").text("Bienvenido al hub1|")
    }, 3200))

    $(setTimeout(function(){
      $("#textoBienvenida").text("Bienvenido al hub|")
    }, 3400))

    $(setTimeout(function(){
      $("#textoBienvenida").text("Bienvenido al hub!|")
    }, 3600))

    $(setTimeout(function(){
      $("#textoBienvenida").text("Bienvenido al hub!.|")
    }, 3800))

    $(setTimeout(function(){
      $("#textoBienvenida").text("Bienvenido al hub!..|")
    }, 4000))

    $(setTimeout(function(){
      $("#textoBienvenida").text("Bienvenido al hub!...|")
    }, 4200))

    $(setTimeout(function(){
      $("#textoBienvenida").text("Bienvenido al hub!...")
    }, 4400))

    $("#calculoCont").on("mouseover", function(){
     $("#calculoImg").slideUp()
    })

  });

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

            <h1 id="textoBienvenida"></h1> 
            Seleccione alguna de las opciones para ir a otro apartado.
            <br/><br/>
            <div id="calculoCont">
            <Link id="calculo" className={tema?"redireccionamientosClaro":"redireccionamientosOscuro"} to="/Cálculo">Cálculo</Link>
            <img id="calculoImg" src=''/>
            </div>
            <br/><br/>

            <Link id="informatica" className={tema?"redireccionamientosClaro":"redireccionamientosOscuro"} to="/informatica">Informatica</Link>
            <br/><br/>
            
            <strong>Proximamente mas opciones?</strong>
    
           <footer>CD</footer>
        </div>
       </div>
    );
  }

  export default Bienvenida;
import React from 'react';
import "../App.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

function BienvenidaENG({tema, setTema, eng, setEng}) {
  //$(function(){
  // $("#calculo").hide()
  // $("#informatica").hide()
  // 
  // $("#calculo").on("mouseover", function(){
  //  $("#calculo").show();
  // })

 //$(setTimeout(function(){
 //  $("#textoBienvenida").text("Bi|")
 //}, 0))

 //   $(setTimeout(function(){
 //     $("#textoBienvenida").text("Bie|")
 //   }, 100))

 //   $(setTimeout(function(){
 //     $("#textoBienvenida").text("Bien|")
 //   }, 200))

 //   $(setTimeout(function(){
 //    $("#textoBienvenida").text("Bienv|")
 //  }, 300))

 //  $(setTimeout(function(){
 //    $("#textoBienvenida").text("Bienve|")
 //  }, 500))

 //  $(setTimeout(function(){
 //    $("#textoBienvenida").text("Bienven|")
 //  }, 700))

 //  $(setTimeout(function(){
 //    $("#textoBienvenida").text("Bienveni|")
 //  }, 1000))

 //  $(setTimeout(function(){
 //    $("#textoBienvenida").text("Bienvenid|")
 //  }, 1400))

 //  $(setTimeout(function(){
 //    $("#textoBienvenida").text("Bienvenido|")
 //  }, 1500))
 //   
 //  $(setTimeout(function(){
 //    $("#textoBienvenida").text("Bienvenido |")
 //  }, 1800))

 //  $(setTimeout(function(){
 //    $("#textoBienvenida").text("Bienvenido a|")
 //  }, 2000))

 //  $(setTimeout(function(){
 //    $("#textoBienvenida").text("Bienvenido al|")
 //  }, 2100))

 //  $(setTimeout(function(){
 //    $("#textoBienvenida").text("Bienvenido al |")
 //  }, 2200))

 //  $(setTimeout(function(){
 //    $("#textoBienvenida").text("Bienvenido al h|")
 //  }, 2500))

 //  $(setTimeout(function(){
 //    $("#textoBienvenida").text("Bienvenido al hu|")
 //  }, 2800))

 //  $(setTimeout(function(){
 //    $("#textoBienvenida").text("Bienvenido al hub|")
 //  }, 3000))

 //  $(setTimeout(function(){
 //    $("#textoBienvenida").text("Bienvenido al hub1|")
 //  }, 3200))

 //  $(setTimeout(function(){
 //    $("#textoBienvenida").text("Bienvenido al hub|")
 //  }, 3400))

 //  $(setTimeout(function(){
 //    $("#textoBienvenida").text("Bienvenido al hub!|")
 //  }, 3600))

 //  $(setTimeout(function(){
 //    $("#textoBienvenida").text("Bienvenido al hub!.|")
 //  }, 3800))

 //  $(setTimeout(function(){
 //    $("#textoBienvenida").text("Bienvenido al hub!..|")
 //  }, 4000))

 //  $(setTimeout(function(){
 //    $("#textoBienvenida").text("Bienvenido al hub!...|")
 //  }, 4200))

 //  $(setTimeout(function(){
 //    $("#textoBienvenida").text("Bienvenido al hub!...")
 //  }, 4400))

 //  $("#calculoCont").on("mouseover", function(){
 //   $("#calculoImg").slideUp()
 //  })

  //});

  const [text, setText] = useState("W");

useEffect(() => {

 setTimeout(()=>{
 setText("W|")
}, 200);

 setTimeout(()=>{
 setText("We|")
}, 400)  

 setTimeout(()=>{
  setText("Wel|")
 }, 500)  

  setTimeout(()=>{
  setText("Welc|")
 }, 600)  

  setTimeout(()=>{
  setText("Welco|")
 }, 800)  

  setTimeout(()=>{
  setText("Welcom|")
 }, 850)  

  setTimeout(()=>{
  setText("Welcome|")
 }, 1000)  

  setTimeout(()=>{
  setText("Welcome |")
 }, 1200)  

  setTimeout(()=>{
  setText("Welcome t|")
 }, 1300)  

  setTimeout(()=>{
  setText("Welcome to|")
 }, 1500)  

  setTimeout(()=>{
  setText("Welcome to |")
 }, 1600)  

  setTimeout(()=>{
  setText("Welcome to t|")
 }, 1700)  

  setTimeout(()=>{
  setText("Welcome to th|")
 }, 1900)  

  setTimeout(()=>{
  setText("Welcome to the|")
 }, 2000)  

  setTimeout(()=>{
  setText("Welcome to the |")
 }, 2100)  

  setTimeout(()=>{
  setText("Welcome to the h|")
 }, 2200)  

  setTimeout(()=>{
  setText("Welcome to the hu|")
 }, 2400)  

  setTimeout(()=>{
  setText("Welcome to the hub|")
 }, 2600)  

  setTimeout(()=>{
  setText("Welcome to the hub.|")
 }, 2700)  

  setTimeout(()=>{
  setText("Welcome to the hub..|")
 }, 2800)  

  setTimeout(()=>{
  setText("Welcome to the hub...|")
 }, 2900)  
 
  setTimeout(()=>{
  setText("Welcome to the hub...")
 }, 3000)  

 setTimeout(()=>{
  
 }, 3100)



}, [])

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
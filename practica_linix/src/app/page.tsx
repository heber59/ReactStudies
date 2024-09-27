//'use client'

import NavComponent from "@/components/nav";
import React from "react";
import Footer from "@/components/footer";
import StaredRestaurants from "@/components/starRestaurants";

//import React, { useState } from 'react';

export default function Home() {
  /*const  [title,setTitle] = useState("");
  const [nuevoTitulo,setNuevoTitulo] = useState<string[]>([]);

  const manejarValor = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setTitle(e.target.value);
  }
  const crearTitulo = ()=>{
    setNuevoTitulo([...nuevoTitulo,title]);
    setTitle('');
    console.log(nuevoTitulo)
  }
  const eliminarTitulo = (index: number) =>{
    const titulosActualizados = nuevoTitulo.filter((_, i) => i !== index); // Filtramos para eliminar el título en el índice dado
    setNuevoTitulo(titulosActualizados);
  }
    */
  return (
    /*<main>
      <input
      className='bg-black text-white'
       type="text"
       placeholder='ingresa un tema a evaluar' 
       value={title}
       onChange={manejarValor} 
       /> 
       <button onClick={crearTitulo}>crear nuevo gusto</button>
        {nuevoTitulo.map((nuevoTitulo,index)=>(
          <section key={index}>
            <h1 key={index}>{nuevoTitulo}</h1>
            <label>
              <input type="checkbox" />
              me gusta           </label>
            <label>
              <input type="checkbox"/>
              no me gusta
            </label>
            <button onClick={()=>eliminarTitulo(index)}>
              eliminar
            </button>
          </section>
        ))}
       
    </main>
    */
        // todo este codigo comentado sera usado mas adelante aqui va a ir landing page.
    <main className="w-screen h-screen flex flex-col justify-between">
      <header >
        <NavComponent/>
      </header>
      <StaredRestaurants/>     
      <Footer/>
    </main>     
  );
}

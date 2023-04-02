import React, {useEffect,useState} from "react";
import { useParams, Link } from "react-router-dom";

export const Saludar=()=>{
    const param = useParams();
    const {nombre} =useParams();//destructuring del objeto params
    //param es un objeto 
    /*
    param = {
        nombre: "Pedro"||"Marcos"|| "Cata"
    }
    */
   const[detalle, setDetalle]= useState({})
   
   useEffect(()=>{
    fetch("https://pokeapi.co/api/v2/pokemon/"+nombre)
    .then(resp=>resp.json())
    .then(data=>setDetalle(data))
   },[])

    return <div>Hola! {param.nombre}  
        <ul>
            <li><img src={detalle?.sprites?.back_default}></img></li>
        </ul>
    
    
    </div>
}
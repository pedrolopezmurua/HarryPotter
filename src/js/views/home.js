import React,{useContext,useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => {
	const {store,actions} = useContext(Context)

	return(
	<div className="text-center mt-5">
		<h1>Hello Pokemon</h1>
		
		{store.pokemon?.results?.map((pokemon,index)=>{
			return <Link to={'/saludar/'+pokemon}><div className="alert alert-primary">{pokemon.name}</div></Link>
		})}
	</div>
)};

import React from "react";// ok
import { BrowserRouter, Route, Routes } from "react-router-dom";// ok
import ScrollToTop from "./component/scrollToTop";//irrelevante

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Saludar } from "./views/saludar";
import Patito from "./views/patito";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			{/*Todo lo que envuelve el component browser router
			será parte de las rutas de la aplicación y cada componente definido dentro estará en todas las rutas */}
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					{/*En el componente routes tengo todas las rutas
					de mi aplicación*/}
					<Routes>
						{/*Cada route implica una ruta 
						por cada ruta  se renderiza un
						componente diferente*/}
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="/saludar/:nombre" element={<Saludar/>}/>
						

						<Route path='/patito'  element={<Patito/>}/>
						{/*  ruta '*' pintará un not found  */}
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

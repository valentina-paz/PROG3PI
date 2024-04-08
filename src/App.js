import React from "react";
import {Link, Route, Switch} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Favorito from "./components/Favorito/Favorito";
import Pelicula from "./components/Pelicula/Pelicula";
import PeliculaCartel from "./components/PeliculaCartel/PeliculaCartel";
import Popular from "./components/Popular/Popular";
import NotFound from "./components/NotFound/NotFound";


let navegacion = [
  {
    nombre: 'Home',
    link:'/'
  },
  {
    nombre: 'Favoritos',
    link:'/'
  },
  {
    nombre: 'Peliculas en cartel',
    link:'/'
  },
  {
    nombre: 'Peliculas mas populares',
    link:'/'
  },
]

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
    //hacer <Route path= "/componente" component={nombreComponente}/> para cada screen y para detlle de pelicula y resultados de busqueda se usa <Route path= "/componente/:parametro" component={nombreComponente}/>
  ); 
}

export default App;

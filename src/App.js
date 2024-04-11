import React from "react";
import {Link, Route, Switch} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import DetallePelicula from "./screens/DetallePelicula";
import Favorito from "./screens/Favorito";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound404";
import ResultadoBusqueda from "./screens/ResultadoBusqueda";
import PeliculaCartelera from "./screens/PeliculaCartelera";
import PeliculaPopular from "./screens/PeliculaPopular";


let menu = [
  {
    nombre: 'Home',
    path:'/'
  },
  {
    nombre: 'Favorito',
    path:'/favoritos'
  },
  {
    nombre: 'Peliculas en cartelera',
    path:'/peliculasCartelera'
  },
  {
    nombre: 'Peliculas populares',
    path:'/peliculasPopulares'
  }
]

function App() {
  return (
    <React.Fragment>
      <Header elementosMenu={menu}/>
      <Switch>
        <Route path='/detail/id/:id' component={DetallePelicula} />
        <Route path= '/favoritos' component={Favorito} />
        <Route path='/' exact={true} component={Home} />
        <Route path= '/peliculasCartelera' component={PeliculaCartelera} />
        <Route path='/peliculasPopulares' component={PeliculaPopular} />
        <Route path='/resultadosBusqueda/:resultadosBusqueda' component={ResultadoBusqueda} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </React.Fragment>
  ); 
}

export default App;

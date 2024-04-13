import React, { Component } from 'react'
import PeliculaCartel from '../components/PeliculaCartel/PeliculaCartel'
import ContenedorFav from '../components/ContenedorFav/ContenedorFav';

let pelisCartelera = 'https://api.themoviedb.org/3/movie/now_playing?api_key=fa2e1f3d35f9c24f149ede55b3cf6a06'

class Favorito extends Component {

  constructor(props){
    super(props)
    this.state={
      Favorito: [],
      estaEnFav: false
    }
  }

  componentDidMount(){
    console.log("Películas recibidas en ContenedorFav:", this.props.peliculas);
    let storageFavs = localStorage.getItem('Favorito')
    if(storageFavs !== null){
      let storageParseado = JSON.parse(storageFavs)
      Promise.all(
        storageParseado.map((id)=> fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=fa2e1f3d35f9c24f149ede55b3cf6a06`)
        .then(resp => resp.json())
        )
      )
      .then((data)=> 
      this.setState({
        Favorito: data,
        estaEnFav: true}))
      .catch((err)=> console.log(err))
    }
    console.log("Películas en ContenedorFav:", this.props.peliculas);
  }

//  actualizarStateFav(id) {
//     let stateAct = this.state.Favorito.filter(elm => elm.id !== id)
//     this.setState({
//       Favorito: stateAct
//     })
//   }
actualizarStateFav(idPelicula) {
  this.setState(prevState => ({
    estaEnFav: false, 
    peliculas: prevState.peliculas.filter(pelicula => pelicula.id !== idPelicula)
  }));
}
  render() {
    console.log("Data recibida:", this.props.data);
    console.log("ID de la película:", this.props.data.id);
    return (
      <div>
        {
          this.state.estaEnFav
           ? (
          this.state.Favorito.length === 0 ?
          <div>
          <h1 className='titulos'>No tenes peliculas favoritas </h1>
          </div>
          :
          <div>
            <h1>Tus peliculas favoritas</h1>
            <ContenedorFav
            actualizarStateFav={(id) => this.actualizarStateFav(id)} 
            peliculas={this.state.Favorito}
            />
            </div>

           )
          :
          <h1 className='titulos'>Cargando...</h1>
        
        }
      </div>
    )
  }
}

export default Favorito
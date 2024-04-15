import React, { Component } from 'react'
import ContenedorFav from '../components/ContenedorFav/ContenedorFav';

class Favorito extends Component {

  constructor(props){
    super(props)
    this.state={
      Favorito: [],
      yaHizoElFetch: false,
    }
  }

  componentDidMount(){
    let storageFavs = localStorage.getItem('Favorito')
    if(storageFavs !== null){
      let storageParseado = JSON.parse(storageFavs)
      Promise.all(
        storageParseado.map((id)=> fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=fa2e1f3d35f9c24f149ede55b3cf6a06`)
        .then(resp => resp.json())
        )
      )
      .then((data)=> this.setState({
        Favorito: data,
        yaHizoElFetch: true}))
      .catch((err)=> console.log(err))
    }
  }

actualizarStateFav(idPelicula) {
  this.setState({
    Favorito: this.state.Favorito.filter(pelicula => pelicula.id !== idPelicula)
  });
}
  render() {
    return (
      <div>
        {
          this.state.yaHizoElFetch ? (
          this.state.Favorito.length === 0 ?
          <div>
          <h1 className='titulos-noHayFav'>No tenes peliculas favoritas </h1>
          </div>
          :
          <div>
            <h1 className='titulos'>TUS PELICULAS FAVORITAS</h1>
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
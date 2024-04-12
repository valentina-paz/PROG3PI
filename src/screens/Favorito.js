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
        estaEnFav: true}))
      .catch((err)=> console.log(err))
    }
  }

 actualizarStateFav(id) {
    let stateAct = this.state.Favorito.filter(elm => elm.id !== id)
    this.setState({
      Favorito: stateAct
    })
  }

  render() {
    return (
      <div>
        {
          this.state.peliculas.length > 0 ?
          <div>
          <h1 className='titulos'>Tus peliculas favoritas: </h1>
           
            <ContenedorFav
            actualizarStateFav={(id) => this.actualizarState(id)} 
            peliculas={this.state.Favorito}
            />
            </div>
          :
          <h1>No hay peliculas en favoritos</h1>
        
        }
      </div>
    )
  }
}

export default Favorito
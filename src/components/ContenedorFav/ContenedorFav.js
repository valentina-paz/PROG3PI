import React, { Component } from 'react'
import Favorito from '../Favorito/Favorito'

class ContenedorFav extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="">
        {
          this.props.peliculas.map((pelicula) =>
            <Favorito
              id={pelicula.id}
              titulo={pelicula.title}
              imagen={'https://image.tmdb.org/t/p/w500' + pelicula.poster_path}
              descripcion={pelicula.overview}
              actualizarState={this.props.actualizarState ? (id) => this.props.actualizarState(id) : false}
            />)
        }
      </ div>
    )
  }
}

export default ContenedorFav;
import React, { Component } from 'react'
import ContenedorPeliCartel from '../components/ContenedorPeliCartel/ContenedorPeliCartel'

class PeliculaCartelera extends Component {
  render() {
    return (
      <React.Fragment>
      <h1>PELICULAS EN CARTELERA</h1>
      <p>aca va el componente del formulario para buscar peliculas</p>
      <ContenedorPeliCartel />
      </React.Fragment>
    )
  }
}

export default PeliculaCartelera


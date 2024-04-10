import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PeliculaCartel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      descripcionOculta: true,
      botonText: 'Ver descripcion',
    }
  }

  agregarFavoritos(idPelicula) {
    let storage = localStorage.getItem('favorito')


    if (storage !== null) {
      let storageParse = JSON.parse(storage)
      storageParse.push(idPelicula)
      this.props.actualizarStateFav(storageParse)
      let storageStringificado = JSON.stringify(storageParse)
      localStorage.setItem('favorito', storageStringificado)
    } else {
      let addArr = [idPelicula]
      this.props.actualizarStateFav(addArr)
      let arrayString = JSON.stringify(addArr)
      localStorage.setItem('favorito', arrayString)
    }

  }

  sacarFavoritos(idPelicula) {
    let storage = localStorage.getItem('favoritos')
    let storageParseado = JSON.parse(storage)
    let storageFiltrado = storageParseado.filter((elm) => elm !== idPelicula)
    this.props.actualizarStateFav(storageFiltrado)
    let storageStringificado = JSON.stringify(storageFiltrado)
    localStorage.setItem('favoritos', storageStringificado)

  }

  ocultarYMostrarDescripcion() {
    if (this.state.descripcionOculta === true) {
      this.setState({
        descripcionOculta: false,
        botonText: 'Ocultar descripcion'
      })
    } else {
      this.setState({
        descripcionOculta: true,
        botonText: 'Ver descripcion'
      })
    }
  }

  render() {
    return (
      <article className='character-card'>
        <Link to={'/peliculasCartelera' + this.props.data.id}>
          <img src={"https://image.tmdb.org/t/p/w342/" + this.props.data.poster_path} alt="" />
        </Link>
        <h2>{this.props.data.title}</h2> {/* Nombre */}
        <section className='extra'> {/* descripcion */}
          {
            this.state.descripcionOculta ?
              ''
              :
              <p>{this.props.data.overview}</p>
          }
        </section>

        {
          
          this.props.estaEnFav ?
            <button
              onClick={() => this.sacarFavoritos(this.props.data.id)}
            >
              Sacar de Favoritos
            </button>
            :
            <button
              onClick={() => this.agregarFavoritos(this.props.data.id)}
            >
              Agregar a Favoritos
            </button>

        }

        <button onClick={() => this.ocultarYMostrarDescripcion()}>{this.state.botonText}</button>
        <button>Ir a detalle</button>

      </article>
    )
  }
}

export default PeliculaCartel

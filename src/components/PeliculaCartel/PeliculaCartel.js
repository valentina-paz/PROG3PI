import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

class PeliculaCartel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      descripcionOculta: true,
      botonText: 'Ver descripcion',
      Favorito: [],
      estaEnFav: false
    }
    console.log(this.state.estaEnFav);
  }

  componentDidMount() {
    let storageFav = localStorage.getItem('Favorito')
    let arrParseado = JSON.parse(storageFav)
    if (arrParseado !== null) {
        let estaMiPeli = arrParseado.includes(this.props.data.id)
        if (estaMiPeli) {
            this.setState({
                estaEnFav: true
            })
        }
    }
}


  agregarFavorito(idPelicula) {
    let storageFav = localStorage.getItem('Favorito')
    if (storageFav === null) {
      let arrayId = [idPelicula]
      let arrStringificado = JSON.stringify(arrayId)
      localStorage.setItem('Favorito', arrStringificado)
    } else {
      let arrParseado = JSON.parse(storageFav)
      arrParseado.push(idPelicula)
      let arrStringificado = JSON.stringify(arrParseado)
      localStorage.setItem('Favorito', arrStringificado)
    }
    this.setState({
      estaEnFav: true
    })
    console.log(this.state.estaEnFav);
  }


  sacarFavorito(idPelicula) {
    let storageFav = localStorage.getItem('Favorito')
    let arrParseado = JSON.parse(storageFav)
    let favFiltrados = arrParseado.filter((id) => id !== idPelicula)
    let arrStringificado = JSON.stringify(favFiltrados)
    localStorage.setItem('Favorito', arrStringificado)
    this.setState({
      estaEnFav: false
    })
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
      <article className='imagen'>
        <Link to={`/detail/id/${this.props.data.id}`}>
          <img className= 'imgTarjeta'src={"https://image.tmdb.org/t/p/w342/" + this.props.data.poster_path} alt="" />
        </Link>
        <h2 className='nombrePeli'>{this.props.data.title}</h2> {/* Nombre */}
        <section className='extra'> {/* descripcion */}
          {
            this.state.descripcionOculta ?
              ''
              :
              <p>{this.props.data.overview}</p>
          }
        </section>

        {
          
          this.state.estaEnFav ?
            <button className='botones'
              onClick={() => this.sacarFavorito(this.props.data.id)}
            >
              Sacar de Favorito
            </button>
            :
            <button className='botones'
              onClick={() => this.agregarFavorito(this.props.data.id)}
            >
              Agregar a Favorito
            </button>

        }

        <button className='botones'onClick={() => this.ocultarYMostrarDescripcion()}>{this.state.botonText}</button>
        <button className='botones'>
          <Link  to={`/detail/id/${this.props.data.id}`}>Ir a detalle</Link>
        </button>

      </article>
    )
  }
}

export default PeliculaCartel

import React, {Component} from 'react'
import './styles.css'

class Pelicula extends Component {
  constructor(props) {
    super(props)
    this.state = {
      estaEnFav: false
    }
  }

  componentDidMount() {
    let storageFav = localStorage.getItem('Favorito')
    let arrParseado = JSON.parse(storageFav)
    if (arrParseado !== null) {
        let estaMiPeli = arrParseado.includes(this.props.id)
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

  render() {
    let generos = this.props.pelicula.genres
    return (
      <article className=''>
        <h2>{this.props.pelicula.title}</h2> 
        <img src={"https://image.tmdb.org/t/p/w342/" + this.props.pelicula.poster_path} alt="" />
        <p className="">Rating: {this.props.pelicula.vote_average}</p>
        <p className="">Fecha de estreno: {this.props.pelicula.release_date}</p>
        <p className="n">Duración(minutos): {this.props.pelicula.runtime}</p>
        <p className="">Sinopsis: {this.props.pelicula.overview}</p>
        <ul className=""> Géneros: {generos.map((genero) => <li> {genero.name}</li>)} </ul>

        {
            this.state.estaEnFav ?
            <button
                onClick={() => this.sacarFavorito(this.props.pelicula.id)}
            >
                Sacar de Favorito
            </button>
            :
            <button
                onClick={() => this.agregarFavorito(this.props.pelicula.id)}
            >
                Agregar a Favorito
            </button>
        }
      
      </article>
    )
  }
}

export default Pelicula
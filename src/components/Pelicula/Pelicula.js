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
    let generos = this.props.pelicula.genres;
    return (
      <div className='container'>
        <article className='detalles'>
        <div className='imagen-titulo'>
          <h2>{this.props.pelicula.title}</h2>
          <img className='imagen'src={'https://image.tmdb.org/t/p/w342/' + this.props.pelicula.poster_path} alt='' />
        </div>
        <div className='info'>
          <p className='detalleRating'>Rating: {this.props.pelicula.vote_average}</p>
          <p className='detalelEstreno'>Fecha de estreno: {this.props.pelicula.release_date}</p>
          <p className='detalleDuracion'>Duración(minutos): {this.props.pelicula.runtime}</p>
          <p className='sinopsis'>Sinopsis: 
          <h4 className='overview'>{this.props.pelicula.overview}</h4>
          </p>
          <div className='generosContainer'>
             <span className='generosTitulo'>GÉNEROS: </span>
           <ul className='detalleGeneros'> 
           {generos.map((genero) => (
            <li key={genero.id}>{genero.name}</li>
            ))}
          </ul>
          </div>
           
        </div>
        {this.state.estaEnFav ? (
          <button className='botones' onClick={() => this.sacarFavorito(this.props.pelicula.id)}>
            Sacar de Favorito
          </button>
        ) : (
          <button className='botones' onClick={() => this.agregarFavorito(this.props.pelicula.id)}>
            Agregar a Favorito
          </button>
        )}
      </article>
      </div>
      
    );
  }
}

export default Pelicula
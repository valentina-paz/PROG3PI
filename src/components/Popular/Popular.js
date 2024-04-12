import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Popular extends Component {
  constructor(props){
    super(props)
    this.state = {
      descripcionOculta: true,
      botonText: 'Ver descripcion',
      Favorito: []
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
            <Link to={'/peliculasPopulares' + this.props.data.id}>
                <img src={this.props.data.image} alt="" />
            </Link>
            <h2>{this.props.data.name}</h2> {/* Nombre */}
            <p>{this.props.data.status}</p> {/* Estado */}
            <p>{this.props.data.species}</p> {/* Especie */}
            <p className='more'>Ver más</p> 
            <section className='extra'>
                <p>Origen:{this.props.data.origin.name}</p> 
            </section>
            <button 
            className='delete'
            onClick={()=> this.props.borrar(this.props.data.id)}
            >
                Borrar
            </button>
        </article> 

    )
  }
}

export default Popular

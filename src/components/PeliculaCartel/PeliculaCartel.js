import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PeliculaCartel extends Component {
  constructor(props){
    super(props)
    this.state= {
      descripcionOculta: true,
      botonText: 'Ver descripcion'
    }
  }

  ocultarYMostrarDescripcion(){
    if(this.state.descripcionOculta === true){
      this.setState({
        descripcionOculta: false,
        botonText: 'Ocultar descripcion'
      })
    }else{
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
            <button onClick={() => this.ocultarYMostrarDescripcion()}>{this.state.botonText}</button>
            <button>Ir a detalle</button>
            <button>Agregar a favoritos</button>
        </article>
    )
  }
}

export default PeliculaCartel

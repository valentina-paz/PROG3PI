import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

class SearchResult extends Component {
    constructor(props) {
      super(props)
      this.state = {
        descripcionOculta: true,
        botonText: 'Ver descripcion',
      }
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
            <img className='imgTarjeta' src={"https://image.tmdb.org/t/p/w342/" + this.props.data.poster_path} alt="" />
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
  
          <button className='botones' onClick={() => this.ocultarYMostrarDescripcion()}>{this.state.botonText}</button>
          <button className='botones'>
            <Link to={`/detail/id/${this.props.data.id}`}>Ir a detalle</Link>
          </button>
  
        </article>
      )
    }
  }

export default SearchResult
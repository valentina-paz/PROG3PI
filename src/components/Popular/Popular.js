import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Popular extends Component {
  constructor(props){
    super(props)
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

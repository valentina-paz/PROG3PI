import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PeliculaCartel extends Component {
  constructor(props){
    super(props)
  }
  
    render() {
        return (
        <article className='character-card'>
            <Link to={'/peliculasCartelera' + this.props.data.id}>
                <img src={"https://image.tmdb.org/t/p/w342/" + this.props.data.poster_path} alt="" />
            </Link>
            <h2>{this.props.data.title}</h2> {/* Nombre */}
            <p>{this.props.data.overview}</p> {/* descripcion */}
            <p className='more'>Ver más</p> 
        </article>

    )
  }
}

export default PeliculaCartel

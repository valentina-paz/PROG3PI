import React from 'react'
import PeliculaCartel from '../PeliculaCartel/PeliculaCartel'
import './styles.css'

function ContenedorPeliCartel(props){
    return (
        <div className='pelisCartelContainer'>
            {props.pelisCartelera.length > 0 ?
                props.pelisCartelera.map((elm, idx) => 
                <PeliculaCartel 
                key={idx + elm.title} 
                data={elm} 
                imagen= {"https://image.tmdb.org/t/p/w342/" + elm.poster_path}
                titulo= {elm.title}
                descripcion= {elm.overview}
                />)
            :
            <h1>Cargando..</h1>
            }
        </div>)}
        
export default ContenedorPeliCartel




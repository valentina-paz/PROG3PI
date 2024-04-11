import React from 'react'
import PeliculaCartel from '../PeliculaCartel/PeliculaCartel'

function ContenedorPeliCartel(props){
    return (
        <div className='pelisCartelContainer'>
            {props.pelisCartelera.length > 0 ?
                props.pelisCartelera.map((elm, idx) => 
                <PeliculaCartel key={idx + elm.title} data={elm} 
                />)
            :
            <h1>Cargando</h1>
            }
        </div>)}

export default ContenedorPeliCartel




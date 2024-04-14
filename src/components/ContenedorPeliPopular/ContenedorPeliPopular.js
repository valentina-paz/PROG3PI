import React from 'react'
import Popular from '../Popular/Popular'
import './styles.css'

function ContenedorPeliPopular(props) {
    return (
        <div className='pelisCartelContainer'>
            {props.pelisPopulares.length > 0 ?
                props.pelisPopulares.map((elm, idx) =>
                    <Popular 
                    key={idx + elm.title} 
                    data={elm}
                    />)
                :
                <h1>Cargando</h1>
            }
        </div>
    )
}

export default ContenedorPeliPopular
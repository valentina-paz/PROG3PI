import React from 'react'
import SearchResult from '../SearchResult/SearchResult'
import './styles.css'

function SearchResultContainer() {
  return (
    <div className='pelisCartelContainer'>
            {props.pelisCartelera.length > 0 ?
                props.pelisCartelera.map((elm, idx) => 
                <SearchResult 
                key={idx + elm.title} 
                data={elm} 
                imagen= {"https://image.tmdb.org/t/p/w342/" + elm.poster_path}
                titulo= {elm.title}
                descripcion= {elm.overview}
                />)
            :
            <h1>Cargando</h1>
            }
        </div>
  )
}

export default SearchResultContainer
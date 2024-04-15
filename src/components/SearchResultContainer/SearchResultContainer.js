import React from 'react'
import SearchResult from '../SearchResult/SearchResult'
import './styles.css'

function SearchResultContainer(props) {
  return (
    <div className='pelisCartelContainer'>
            {props.peliBuscada.length > 0 ?
                props.peliBuscada.map((elm, idx) => 
                <SearchResult 
                key={idx + elm.title} 
                data={elm}
                />)
            :
            <h1>Cargando</h1>
            }
        </div>
  )
}

export default SearchResultContainer
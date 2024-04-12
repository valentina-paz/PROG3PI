import React from 'react'
import Popular from '../Popular/Popular'

 function contenedorPopular(props) {
  return (
    <div className= 'popuplarContainer'>
    {props.pelisPopulares.length > 0 ?
                props.pelisPopulares.map((elm, idx) => 
                <Popular key={idx + elm.title} data={elm} 
                />)
            :
            <h1>Cargando</h1>
            }
    
    
    
    </div>
  )
}
export default contenedorPopular

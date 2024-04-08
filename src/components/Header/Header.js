import React from "react";

function Header(props){
    return(
        <nav>
        <ul className="main-nav">
            {
                props.dataHeader.map((itemHeader, idx)=> <li key={idx + itemHeader.nombre}>{itemHeader.nombre}</li>)
            }
        </ul>
    </nav>
    )
}

export default Header
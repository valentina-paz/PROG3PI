import React from 'react';
import {Link} from 'react-router-dom';

function Header(props){

    return (
        <nav>
            <ul className="main-nav">
                { 
                    props.elementosMenu.map((elm, idx)=> <Link to= {elm.path} key={`${idx}${elm.nombre}`}>
                    {elm.nombre} </Link>)}
            </ul>
        </nav>
    )
}

export default Header
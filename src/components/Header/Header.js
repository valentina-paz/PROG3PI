import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css'

function Header(props){

    return (
        <nav>
            <ul className="main-nav">
                { 
                    props.elementosMenu.map((elm, idx)=> <Link to= {elm.path} key={`${idx}${elm.path}`}>
                    {elm.nombre} </Link>)}
            </ul>
        </nav>
    )
}

export default Header
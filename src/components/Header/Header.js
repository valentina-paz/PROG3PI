import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Header(props) {

  return (
    <header className="header">
      <nav className="nav">
        <ul className="main-nav">
          {props.elementosMenu.map((elm, idx) => (
            <li className="lista_nav" key={`${idx}${elm.path}`}>
              <Link to={elm.path}>{elm.nombre}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <img className="logo" src="./img/logoMovie.png" alt="Logo" />
    </header>
  );
}

export default Header;
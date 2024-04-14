import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import logo from './logo.png';

function Menu() {


  return (
    <div> 
      <header>
      </header>
      <div className="menu1 z-depth-2">
        <h2 className="texto_titulo">Menu</h2>
        <img className="logo_ingreso1" src={logo} alt="Logo" />
        <br />
        <br />
        <Link to="/registro_pedido"> 
          <button className="boton_menu_ovalado1">Registro pedido</button>
        </Link>
        <br />
        <Link to="/registro">
          <button className="boton_menu_ovalado2">Registro usuario</button>
        </Link>
        <br />
        <Link to="/seguimiento">
          <button className="boton_menu_ovalado3">Seguimiento</button>
        </Link>
      </div>
    </div>
  );
}

export default Menu;



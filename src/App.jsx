import React from 'react';
import './App.css';
import fondo from './imgr.webp';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Menu from './Componentes/Menu/Menu'; // Importa el componente Menu
import Login from './Componentes/Login/Login'; // Importa el componente Login

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          {/* Agrega tu contenido de encabezado aquí */}
        </header>
        <img className="img_fondo" src={fondo} alt="Imagen de fondo" />
        <Login /> {/* Reemplaza el formulario de inicio de sesión anterior */}
        <Routes>
          <Route path="/menu" element={<Menu />} /> {/* Agrega la ruta para el componente Menu */}
        </Routes>
        <footer>
          {/* Agrega tu contenido de pie de página aquí */}
        </footer>
      </div>
    </Router>
  );
}

export default App;




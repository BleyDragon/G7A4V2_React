import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logo from './logo.png';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const allowedUsers = {
    david: {
      username: 'david',
      password: '123',
      nombre: 'David García',
      rol: 'administrador',
    },
    maria: {
      username: 'maria',
      password: '456',
      nombre: 'María Pérez',
      rol: 'usuario',
    },
    pedro: {
      username: 'pedro',
      password: '789',
      nombre: 'Pedro López',
      rol: 'editor',
    },
  };

  const handleLogin = (event) => {
    event.preventDefault();

    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    let validCredentials = false;
    Object.keys(allowedUsers).forEach(user => {
      if (allowedUsers[user].username === trimmedUsername && allowedUsers[user].password === trimmedPassword) {
        validCredentials = true;
      }
    });

    if (validCredentials) {
      console.log('¡Inicio de sesión exitoso!');
      navigate('/menu');
    } else {
      setErrorMessage('Usuario o contraseña incorrectos');
    }
  };

  const handleInputChange = (e) => {
    setErrorMessage(null); // Clear error message when user starts typing
    if (e.target.name === 'username') {
      setUsername(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  };

  return (
    <div className="login-container">
      <h2 className="texto_titulo">Ingreso</h2>
      <img className="logo_ingreso1" src={logo} alt="logo" />
      <form onSubmit={handleLogin}>
        <label className="texto2" htmlFor="username">Usuario:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleInputChange}
          required
        />
        <label className="texto2" htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleInputChange}
          required
        />
        <br />
        <button className="boton" type="submit">Iniciar sesión</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
}

export default Login;

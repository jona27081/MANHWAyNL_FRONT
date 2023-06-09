import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/nav.css"
import { AUTH_TOKEN } from '../constans';

const Header = () => {
  const navigate = useNavigate();
  const authToken = localStorage.getItem(AUTH_TOKEN);
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/manhwas"}>Home</Link>
        </li>
        <li>
          <Link to={"/subir"}>Subir</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
          {authToken ? (
            <>
            <Link
              className='also'
              onClick={() => {
                localStorage.removeItem(AUTH_TOKEN);
                navigate(`/`);
              } }
            >
              Logout
            </Link>
            <Link to={"/menuias"} className='also'>Services IA</Link>
            <Link to={"/search"} className='also'>Mis Consultas</Link>
            </>
          ) : (
            <Link to="/login" className='also'> Iniciar Sesion </Link>
          )}
      </ul>
    </nav >
  );
};

export default Header;
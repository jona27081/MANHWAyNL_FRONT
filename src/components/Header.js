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
            <Link to={"/davinci"} className='also'>Davinci</Link>
            <Link to={"/imagesIA"} className='also'>Imagen IA</Link>
            </>
          ) : (
            <Link to="/login"> Iniciar Sesion </Link>
          )}
      </ul>
    </nav >
  );
};

export default Header;
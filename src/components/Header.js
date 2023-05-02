import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/nav.css"

const Header = () => {
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
      </ul>
    </nav>
  );
};

export default Header;
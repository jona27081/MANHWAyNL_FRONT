import React from 'react';
import "../styles/card.css";

const Link = (props) => {
  const { link } = props;
  return (
    <div class="card">
      <div class="card-content">
        <div class="card-title">{link.titulo}</div>
        <div class="card-description">{link.descripcion}</div>
      </div>
    </div>
  );
};

export default Link;
import React from 'react';
import './styles.css';

function Header({ title, description }) {
  return (
    <header className='allvid-header'>
      <h2>{title}</h2>
      <p>{description}</p>
    </header>
  );
}

export default Header;

import React, { useState, useEffect } from 'react';
import NavGuest from './navGuest.jsx';
import NavUser from './navUser.jsx';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State untuk menentukan status login pengguna

  // Fungsi untuk mengubah status login pengguna
  const handleLoginStatus = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <header className="header">
      <nav className="navbar">
        {isLoggedIn ? <NavUser /> : <NavGuest />}
      </nav>
      <button onClick={handleLoginStatus}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </header>
  );
};

export default Navbar;

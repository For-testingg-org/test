import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    useEffect(() => {
        const handleHamburgerClick = () => {
          const hamburgerMenu = document.querySelector(".hamburger-menu");
          const navbar = document.querySelector(".navbar");
          const navLinks = document.querySelector(".nav-links");
    
          hamburgerMenu.classList.toggle("active");
          navbar.classList.toggle("show-menu");
          navLinks.classList.toggle("show-menu");
        };
    
        const handleLoginButtonClick = () => {
          // Mengarahkan pengguna ke halaman login.html
          window.location.href = "login.html";
        };
    
        const handleSignUpButtonClick = () => {
          // Mengarahkan pengguna ke halaman signup.html
          window.location.href = "signup.html";
        };
    
        const hamburgerMenu = document.querySelector(".hamburger-menu");
        hamburgerMenu.addEventListener("click", handleHamburgerClick);
    
        const loginButton = document.getElementById("login");
        loginButton.addEventListener("click", handleLoginButtonClick);
    
        const signUpButton = document.getElementById("signup");
        signUpButton.addEventListener("click", handleSignUpButtonClick);
    
        return () => {
          // Membersihkan event listener saat komponen di-unmount
          hamburgerMenu.removeEventListener("click", handleHamburgerClick);
          loginButton.removeEventListener("click", handleLoginButtonClick);
          signUpButton.removeEventListener("click", handleSignUpButtonClick);
        };
      }, []);
      
    return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="logo">
          <img src="src/assets/img/logo.png" alt="Learny logo" />
        </Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/category">Category</Link></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="nav-btn">
        <button id="profile" style={{ display: 'none' }}>
            <img src="../landing page/img/icon-profile.png" width="30" alt="username" />
            Skilvul - FE 15
          </button>
        </div>

        <div className="hamburger-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

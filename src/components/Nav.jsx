
import { useState } from 'react';
import './Nav.css'
import { ThemeToggle, ThemeToggleMobile } from './ThemeToggle';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="nav">
      <h1 className="logo">Julia Becho <span className="highlight">Portfolio</span></h1>

      {/* Theme toggle para desktop - fixo no canto superior direito */}
      <ThemeToggle />

      {/* Botão hambúrguer para mobile */}
      <button
        className={`hamburger ${isMenuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-links ${isMenuOpen ? 'nav-links-mobile' : ''}`}>
        <a href="#" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>

        {/* Theme toggle para mobile - dentro do menu */}
        <ThemeToggleMobile onClick={closeMenu} />
      </div>

      {/* Overlay para fechar o menu ao clicar fora */}
      {isMenuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
    </nav>
  )
}
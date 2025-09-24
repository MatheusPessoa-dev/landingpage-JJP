import React, { useState, useEffect } from 'react';
import { useApp } from '../contexts/AppContext';
import ThemeToggle from './ThemeToggle';
import logoImg from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <img src={logoImg} alt="J.J.P CALDEIRARIA & MANUTENÇÃO INDUSTRIAL" className="navbar-logo" />
        </div>
        
        <div className={`navbar-menu ${isMobileMenuOpen ? 'navbar-menu-open' : ''}`}>
          <a href="#inicio" onClick={() => scrollToSection('inicio')} className="navbar-link">
            Início
          </a>
          <a href="#sobre" onClick={() => scrollToSection('sobre')} className="navbar-link">
            Sobre
          </a>
          <a href="#servicos" onClick={() => scrollToSection('servicos')} className="navbar-link">
            Serviços
          </a>
          <a href="#projetos" onClick={() => scrollToSection('projetos')} className="navbar-link">
            Projetos
          </a>
          <a href="#depoimentos" onClick={() => scrollToSection('depoimentos')} className="navbar-link">
            Depoimentos
          </a>
          <a href="#faq" onClick={() => scrollToSection('faq')} className="navbar-link">
            FAQ
          </a>
          <a href="#contato" onClick={() => scrollToSection('contato')} className="navbar-link">
            Contato
          </a>
        </div>

        <div className="navbar-controls">
          <ThemeToggle />
        </div>

        <div 
          className={`navbar-toggle ${isMobileMenuOpen ? 'navbar-toggle-open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
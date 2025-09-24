import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="hero-title-main">J.J.P Caldeiraria & Manutenção Industrial</span>
              <span className="hero-title-sub">Excelência em Caldeiraria e Manutenção Industrial</span>
            </h1>
            
            <p className="hero-description">
              Especialistas em caldeiraria, manutenção industrial e serviços metalúrgicos. Oferecemos soluções completas para indústrias com qualidade, segurança e confiabilidade comprovadas.
            </p>
            
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('servicos')}
              >
                Nossos Serviços
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contato')}
              >
                Entre em Contato
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <div className="scroll-arrow" onClick={() => scrollToSection('sobre')}>
          <span>↓</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { AppProvider } from './contexts/AppContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

import FAQ from './components/FAQ';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import SmoothAnimations from './components/SmoothAnimations';
import logoImg from './assets/logo.png';
import './App.css';
import './styles/variables.css';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <SmoothAnimations />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Services />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <img src={logoImg} alt="J.J.P CALDEIRARIA & MANUTENÇÃO INDUSTRIAL" className="footer-logo" />
              <p></p>
            </div>
            <div className="footer-section">
              <h4>Serviços</h4>
              <ul>
                <li>Soldas Especiais</li>
                <li>Fabricação de Estruturas</li>
                <li>Manutenção Industrial</li>
                <li>Projetos Customizados</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contato</h4>
              <p>Entre em contato conosco para mais informações sobre nossos serviços.</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 J.J.P Caldeiraria & Manutenção Industrial. Todos os direitos reservados.</p>
            <p>CNPJ: 34.970.708/0001-97</p>
            <p>Desenvolvido com React</p>
          </div>
        </div>
      </footer>
      <BackToTop />
    </div>
    </AppProvider>
  );
}

export default App;
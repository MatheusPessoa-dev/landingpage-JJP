import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="sobre" className="about py-20">
      <div className="container">
        <div className="about-content">
          <div className="about-header text-center mb-8">
            <h2 className="section-title">Sobre Nós</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Conheça nossa história e compromisso com a excelência
            </p>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <div className="about-card">
                <h3>Nossa Empresa</h3>
                <p>
                  A J.J.P Caldeiraria & Manutenção Industrial é uma empresa especializada em soluções completas de caldeiraria, manutenção industrial e serviços metalúrgicos, atendendo diversos setores industriais com qualidade e segurança.
                </p>
                <p>
                  Com anos de experiência no mercado, desenvolvemos expertise em projetos complexos de caldeiraria, sempre priorizando a satisfação do cliente e a entrega de resultados excepcionais com total segurança operacional.
                </p>
              </div>

              <div className="about-card">
                <h3>Nossa Especialidade</h3>
                <p>
                  Oferecemos serviços especializados em caldeiraria industrial, manutenção preventiva e corretiva, fabricação e reparo de equipamentos industriais, utilizando tecnologia de ponta e profissionais altamente qualificados para garantir a máxima qualidade e segurança em cada projeto.
                </p>
              </div>
            </div>

            <div className="about-features">
              <div className="feature-card">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4>Qualidade Garantida</h4>
                <p>Utilizamos os melhores materiais e técnicas para garantir resultados duradouros e confiáveis.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4>Agilidade</h4>
                <p>Prazos cumpridos e entregas rápidas sem comprometer a qualidade do trabalho.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4>Precisão</h4>
                <p>Trabalhos executados com máxima precisão e atenção aos detalhes.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7ZM21 8V14M18 11H24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4>Confiança</h4>
                <p>Relacionamento sólido e duradouro com nossos clientes baseado na confiança mútua.</p>
              </div>
            </div>
          </div>

          <div className="about-stats">
            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-number">+100</div>
                <div className="stat-label">Projetos Concluídos</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">+50</div>
                <div className="stat-label">Clientes Atendidos</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Anos de Experiência</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Satisfação do Cliente</div>
              </div>
            </div>
          </div>

          <div className="about-commitment">
            <div className="commitment-card">
              <h3>Nosso Compromisso</h3>
              <p>
                Estamos comprometidos em fornecer soluções de alta qualidade que atendam e superem as expectativas de nossos clientes. Nossa missão é ser referência em caldeiraria e manutenção industrial, sempre inovando e aprimorando nossos processos com foco na segurança e excelência operacional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
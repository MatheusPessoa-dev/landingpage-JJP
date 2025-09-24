import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "ISO 9001:2015",
      description: "Sistema de Gestão da Qualidade",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      details: "Certificação internacional que garante processos de qualidade em todos os nossos serviços"
    },
    {
      id: 2,
      title: "NR-13",
      description: "Caldeiras, Vasos de Pressão e Tubulações",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15L12 12L12 9M12 6V6.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      details: "Conformidade com normas regulamentadoras para trabalhos em caldeiras e vasos de pressão"
    },
    {
      id: 3,
      title: "AWS D1.1",
      description: "Código de Soldagem Estrutural",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      details: "Certificação internacional para soldagem estrutural em aço"
    },
    {
      id: 4,
      title: "ASME IX",
      description: "Qualificação de Soldadores",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      details: "Qualificação de soldadores conforme padrões internacionais ASME"
    }
  ];

  const qualifications = [
    {
      id: 1,
      title: "Soldadores Certificados",
      description: "Equipe com certificações nacionais e internacionais",
      value: "100%"
    },
    {
      id: 2,
      title: "Experiência Comprovada",
      description: "Anos de atuação no mercado industrial",
      value: "10+"
    },
    {
      id: 3,
      title: "Projetos Executados",
      description: "Projetos concluídos com sucesso",
      value: "500+"
    },
    {
      id: 4,
      title: "Clientes Atendidos",
      description: "Empresas que confiam em nossos serviços",
      value: "50+"
    }
  ];

  const standards = [
    "ABNT NBR 8800 - Projeto de estruturas de aço",
    "ABNT NBR 14323 - Estruturas de aço em situação de incêndio",
    "AWS D1.1 - Structural Welding Code - Steel",
    "ASME Section IX - Welding and Brazing Qualifications",
    "API 1104 - Welding of Pipelines and Related Facilities",
    "NR-18 - Condições e Meio Ambiente de Trabalho na Indústria da Construção"
  ];

  return (
    <section id="certificacoes" className="certifications py-20">
      <div className="container">
        <div className="certifications-header text-center mb-8">
          <h2 className="section-title">Certificações e Qualificações</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Nosso compromisso com a qualidade e segurança é respaldado por certificações reconhecidas internacionalmente
          </p>
        </div>

        <div className="certifications-content">
          <div className="certifications-grid">
            {certifications.map((cert) => (
              <div key={cert.id} className="certification-card">
                <div className="cert-icon">
                  {cert.icon}
                </div>
                <div className="cert-content">
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-description">{cert.description}</p>
                  <p className="cert-details">{cert.details}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="standards-section">
            <h3 className="standards-title">Normas Técnicas Seguidas</h3>
            <div className="standards-grid">
              {standards.map((standard, index) => (
                <div key={index} className="standard-item">
                  <div className="standard-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="standard-text">{standard}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
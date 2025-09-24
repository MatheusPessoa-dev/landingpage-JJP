import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Caldeiraria Industrial",
      description: "Fabricação, reparo e manutenção de caldeiras, vasos de pressão e equipamentos industriais com total segurança.",
      features: [
        "Caldeiras industriais",
        "Vasos de pressão",
        "Trocadores de calor",
        "Tubulações industriais"
      ]
    },
    {
      id: 2,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.7 6.3C16.2 7.8 16.2 10.2 14.7 11.7L11.7 14.7C10.2 16.2 7.8 16.2 6.3 14.7C4.8 13.2 4.8 10.8 6.3 9.3L9.3 6.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.3 17.7C7.8 16.2 7.8 13.8 9.3 12.3L12.3 9.3C13.8 7.8 16.2 7.8 17.7 9.3C19.2 10.8 19.2 13.2 17.7 14.7L14.7 17.7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Manutenção Industrial",
      description: "Serviços completos de manutenção preventiva e corretiva para equipamentos industriais e sistemas.",
      features: [
        "Manutenção preventiva",
        "Manutenção corretiva",
        "Inspeção de equipamentos",
        "Paradas programadas"
      ]
    },
    {
      id: 3,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "Soldas Especializadas",
      description: "Soldagem industrial com certificação e técnicas avançadas para equipamentos de alta responsabilidade.",
      features: [
        "Solda em caldeiras",
        "Solda TIG/MIG",
        "Soldas certificadas",
        "Reparos estruturais"
      ]
    },

    {
      id: 4,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M23 21V19C23 18.1332 22.7361 17.3328 22.2882 16.6906C21.8402 16.0484 21.2426 15.5961 20.5 15.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 3.13C16.7426 3.39612 17.3402 3.84836 17.7882 4.49061C18.2361 5.13285 18.5 5.93322 18.5 6.8C18.5 7.66678 18.2361 8.46715 17.7882 9.10939C17.3402 9.75164 16.7426 10.2039 16 10.47" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Fabricação Metalúrgica",
      description: "Fabricação de peças e componentes metálicos sob medida para indústrias e equipamentos especiais.",
      features: [
        "Peças sob medida",
        "Componentes industriais",
        "Estruturas metálicas",
        "Equipamentos especiais"
      ]
    }
  ];

  return (
    <section id="servicos" className="services py-20">
      <div className="container">
        <div className="services-header text-center mb-8">
          <h2 className="section-title">Nossos Serviços</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Soluções completas em caldeiraria e manutenção industrial com qualidade e segurança
          </p>
        </div>

        <div className="services-intro">
          <div className="intro-card">
            <h3>Excelência em Cada Projeto</h3>
            <p>
              Com anos de experiência no mercado, oferecemos serviços especializados em caldeiraria, manutenção industrial e fabricação metalúrgica. Nossa equipe qualificada garante a máxima qualidade e segurança em cada etapa do projeto.
            </p>
          </div>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index}>
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <div className="cta-card">
            <h3>Pronto para Começar seu Projeto?</h3>
            <p>
              Entre em contato conosco e solicite um orçamento personalizado. Nossa equipe está pronta para atender suas necessidades em caldeiraria e manutenção industrial com a máxima qualidade, segurança e eficiência.
            </p>
            <button 
              className="btn btn-primary"
              onClick={() => {
                const element = document.getElementById('contato');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "Quais tipos de serviços de caldeiraria vocês oferecem?",
      answer: "Oferecemos uma ampla gama de serviços incluindo fabricação de estruturas metálicas, soldagem especializada, manutenção industrial, fabricação de peças sob medida, instalação de equipamentos industriais e consultoria técnica. Trabalhamos com diversos tipos de materiais e seguimos todas as normas técnicas de segurança."
    },
    {
      id: 2,
      question: "Vocês possuem certificações técnicas?",
      answer: "Sim, possuímos diversas certificações importantes como ISO 9001:2015 para gestão da qualidade, conformidade com NR-13 para trabalhos em caldeiras e vasos de pressão, certificação AWS D1.1 para soldagem estrutural e qualificação ASME IX para soldadores. Nossa equipe é altamente qualificada e certificada."
    },
    {
      id: 3,
      question: "Qual é o prazo médio para execução dos projetos?",
      answer: "O prazo varia conforme a complexidade e escopo do projeto. Projetos menores podem ser concluídos em 1-2 semanas, enquanto projetos maiores podem levar de 1 a 3 meses. Sempre fornecemos um cronograma detalhado durante a fase de orçamento e nos comprometemos com os prazos acordados."
    },
    {
      id: 4,
      question: "Vocês fazem orçamentos gratuitos?",
      answer: "Sim, oferecemos orçamentos completamente gratuitos e sem compromisso. Nossa equipe técnica faz uma análise detalhada do seu projeto e fornece um orçamento transparente com todos os custos discriminados. Entre em contato conosco para agendar uma visita técnica."
    },
    {
      id: 5,
      question: "Atendem projetos em outras cidades além de São José dos Campos?",
      answer: "Sim, atendemos projetos em toda a região do Vale do Paraíba e Grande São Paulo. Para projetos em outras regiões, avaliamos cada caso individualmente. Temos experiência em projetos de grande porte que exigem deslocamento da equipe."
    },
    {
      id: 6,
      question: "Oferecem garantia nos serviços executados?",
      answer: "Sim, todos os nossos serviços possuem garantia. O período varia conforme o tipo de serviço: soldas e estruturas metálicas têm garantia de 2 anos, manutenções preventivas têm garantia de 6 meses, e peças fabricadas têm garantia de 1 ano. A garantia cobre defeitos de fabricação e mão de obra."
    },
    {
      id: 7,
      question: "Trabalham com que tipos de materiais?",
      answer: "Trabalhamos com diversos tipos de materiais incluindo aço carbono, aço inoxidável, alumínio, ferro fundido e ligas especiais. Nossa equipe tem experiência com diferentes espessuras e especificações técnicas, sempre seguindo as normas ABNT e internacionais."
    },
    {
      id: 8,
      question: "Fazem manutenção preventiva em equipamentos industriais?",
      answer: "Sim, oferecemos serviços completos de manutenção preventiva e corretiva. Nossos técnicos fazem inspeções regulares, lubrificação, ajustes, substituição de peças desgastadas e elaboram relatórios técnicos detalhados. Também oferecemos contratos de manutenção programada."
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section id="faq" className="faq py-20">
      <div className="container">
        <div className="faq-header text-center mb-8">
          <h2 className="section-title">Perguntas Frequentes</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Encontre respostas para as dúvidas mais comuns sobre nossos serviços de caldeiraria e manutenção industrial
          </p>
        </div>

        <div className="faq-content">
          <div className="faq-intro">
            <div className="intro-card">
              <h3>Tire Suas Dúvidas</h3>
              <p>
                Preparamos esta seção com as perguntas mais frequentes de nossos clientes. 
                Se você não encontrar a resposta que procura, entre em contato conosco 
                diretamente pelo WhatsApp ou telefone.
              </p>
            </div>
          </div>

          <div className="faq-list">
            {faqs.map((faq) => (
              <div key={faq.id} className={`faq-item ${openFAQ === faq.id ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => toggleFAQ(faq.id)}>
                  <h4>{faq.question}</h4>
                  <div className="faq-icon">
                    <svg 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className={openFAQ === faq.id ? 'rotated' : ''}
                    >
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="faq-answer">
                  <div className="faq-answer-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
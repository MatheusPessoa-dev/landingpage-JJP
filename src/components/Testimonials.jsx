import React, { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Carlos Silva",
      company: "Metalúrgica São Paulo",
      position: "Gerente de Produção",
      text: "A JJP Caldeiraria superou nossas expectativas. O trabalho de soldagem especializada foi executado com perfeição e dentro do prazo. Profissionais altamente qualificados e comprometidos com a qualidade.",
      rating: 5
    },
    {
      id: 2,
      name: "Ana Costa",
      company: "Indústria Química ABC",
      position: "Engenheira de Manutenção",
      text: "Excelente serviço de manutenção industrial. A equipe da JJP é muito técnica e sempre encontra soluções eficientes para nossos equipamentos. Recomendo sem hesitação.",
      rating: 5
    },
    {
      id: 3,
      name: "Roberto Oliveira",
      company: "Construções Industriais RO",
      position: "Diretor Técnico",
      text: "Parceria de longa data com a JJP. Sempre entregam estruturas metálicas de alta qualidade. O atendimento é personalizado e o resultado final sempre impecável.",
      rating: 5
    },
    {
      id: 4,
      name: "Marina Santos",
      company: "Petroquímica Delta",
      position: "Coordenadora de Projetos",
      text: "Trabalho excepcional na fabricação de bases estruturais para nossos equipamentos pesados. Cumpriram todos os prazos e especificações técnicas rigorosamente.",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };

  return (
    <section id="depoimentos" className="testimonials py-20">
      <div className="container">
        <div className="testimonials-header text-center mb-8">
          <h2 className="section-title">O Que Nossos Clientes Dizem</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Conheça a experiência de empresas que confiam em nossos serviços de caldeiraria e manutenção industrial
          </p>
        </div>

        <div className="testimonials-carousel">
          <div className="testimonial-container">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="quote-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21V9.996C14.017 4.462 17.479 1 23.013 1V3.5C19.24 3.5 16.517 6.223 16.517 9.996V12H23.013V21H14.017ZM0 21V9.996C0 4.462 3.462 1 8.996 1V3.5C5.223 3.5 2.5 6.223 2.5 9.996V12H8.996V21H0Z" fill="currentColor"/>
                  </svg>
                </div>
                
                <p className="testimonial-text">
                  "{testimonials[currentTestimonial].text}"
                </p>
                
                <div className="testimonial-rating">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>
                
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4 className="author-name">{testimonials[currentTestimonial].name}</h4>
                    <p className="author-position">{testimonials[currentTestimonial].position}</p>
                    <p className="author-company">{testimonials[currentTestimonial].company}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonials-controls">
            <button className="testimonial-btn prev" onClick={prevTestimonial}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div className="testimonials-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => goToTestimonial(index)}
                />
              ))}
            </div>
            
            <button className="testimonial-btn next" onClick={nextTestimonial}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
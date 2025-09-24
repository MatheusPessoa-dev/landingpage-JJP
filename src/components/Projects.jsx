import React, { useState, useEffect } from 'react';
import './Projects.css';

import Img1 from '../assets/projeto1.jpg';
import Img2 from '../assets/projeto2.jpg';
import Img3 from '../assets/projeto3.jpg';
import Img4 from '../assets/projeto4.jpg';
import Img5 from '../assets/projeto5.jpg';

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Array com as imagens dos projetos
  const projects = [
    {
      id: 1,
      image: Img1,
      title: "Caldeira Industrial de Vapor",
      description: "Fabricação e instalação de caldeira industrial de 5 toneladas/hora para indústria alimentícia"
    },
    {
      id: 2,
      image: Img2,
      title: "Manutenção de Vaso de Pressão",
      description: "Reparo e modernização de vaso de pressão com certificação e testes hidrostáticos"
    },
    {
      id: 3,
      image: Img3,
      title: "Trocador de Calor Industrial",
      description: "Fabricação de trocador de calor casco-tubo para processo petroquímico"
    },
    {
      id: 4,
      image: Img4,
      title: "Tubulação Industrial",
      description: "Sistema completo de tubulações industriais com soldas certificadas para alta pressão"
    },
    {
      id: 5,
      image: Img5,
      title: "Manutenção de Caldeira",
      description: "Serviço de manutenção preventiva e inspeção técnica em caldeira de processo industrial"
    }
  ];

  // Auto-play do carrossel
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % projects.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, projects.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="projetos" className="projects py-20">
      <div className="container">
        <div className="projects-header text-center mb-8">
          <h2 className="section-title">Nossos Projetos</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Conheça alguns dos projetos de caldeiraria e manutenção industrial que desenvolvemos com excelência e segurança
          </p>
        </div>

        <div className="projects-carousel">
          <div 
            className="carousel-container"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div 
              className="carousel-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={project.id} className="carousel-slide">
                  <div className="project-card">
                    <div className="project-image">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="image-placeholder" style={{ display: 'none' }}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 16L8.586 11.414C9.367 10.633 10.633 10.633 11.414 11.414L16 16M14 14L15.586 12.414C16.367 11.633 17.633 11.633 18.414 12.414L20 14M14 8H14.01M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>Projeto {project.id}</span>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            <button className="carousel-btn carousel-btn-prev" onClick={prevSlide}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <button className="carousel-btn carousel-btn-next" onClick={nextSlide}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="carousel-indicators">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>

        <div className="projects-grid">
          <div className="grid-header">
            <h3>Galeria de Projetos</h3>
            <p>Visualize todos os nossos projetos realizados</p>
          </div>
          <div className="projects-thumbnails">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className={`thumbnail ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="thumbnail-placeholder" style={{ display: 'none' }}>
                  <span>{project.id}</span>
                </div>
                <div className="thumbnail-overlay">
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
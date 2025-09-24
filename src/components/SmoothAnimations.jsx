import { useEffect } from 'react';

const SmoothAnimations = () => {
  useEffect(() => {
    // Intersection Observer para animações de entrada
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          
          // Animar elementos filhos com delay
          const children = entry.target.querySelectorAll('.animate-child');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('animate-in');
            }, index * 100);
          });
        }
      });
    }, observerOptions);

    // Selecionar todas as seções para observar
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      section.classList.add('animate-section');
      observer.observe(section);
    });

    // Animar cards e elementos específicos
    const animateElements = document.querySelectorAll(
      '.service-card, .project-card, .testimonial-card, .cert-card, .faq-item, .about-card'
    );
    
    animateElements.forEach((element, index) => {
      element.classList.add('animate-child');
      element.style.animationDelay = `${index * 0.1}s`;
    });

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  // Adicionar estilos CSS dinamicamente
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      /* Animações de entrada suaves */
      .animate-section {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .animate-section.animate-in {
        opacity: 1;
        transform: translateY(0);
      }

      .animate-child {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .animate-child.animate-in {
        opacity: 1;
        transform: translateY(0);
      }

      /* Animações específicas para diferentes elementos */
      .service-card.animate-child {
        transform: translateY(30px) scale(0.95);
      }

      .service-card.animate-child.animate-in {
        transform: translateY(0) scale(1);
      }

      .project-card.animate-child {
        transform: translateX(-30px);
      }

      .project-card.animate-child.animate-in {
        transform: translateX(0);
      }

      .testimonial-card.animate-child {
        transform: scale(0.9);
      }

      .testimonial-card.animate-child.animate-in {
        transform: scale(1);
      }

      .cert-card.animate-child {
        transform: rotateY(10deg) translateY(20px);
      }

      .cert-card.animate-child.animate-in {
        transform: rotateY(0) translateY(0);
      }

      .faq-item.animate-child {
        transform: translateX(30px);
      }

      .faq-item.animate-child.animate-in {
        transform: translateX(0);
      }

      /* Animação para títulos de seção */
      .section-title {
        opacity: 0;
        transform: translateY(20px);
        animation: fadeInUp 0.8s ease forwards;
      }

      .section-subtitle {
        opacity: 0;
        transform: translateY(15px);
        animation: fadeInUp 0.8s ease 0.2s forwards;
      }

      .section-divider {
        width: 0;
        animation: expandWidth 0.8s ease 0.4s forwards;
      }

      @keyframes fadeInUp {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes expandWidth {
        to {
          width: 60px;
        }
      }

      /* Animações de hover melhoradas */
      .service-card,
      .project-card,
      .testimonial-card,
      .cert-card {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .service-card:hover {
        transform: translateY(-8px) scale(1.02);
      }

      .project-card:hover {
        transform: translateY(-5px);
      }

      .testimonial-card:hover {
        transform: scale(1.02);
      }

      .cert-card:hover {
        transform: translateY(-5px) rotateY(2deg);
      }

      /* Animação para botões */
      .btn {
        position: relative;
        overflow: hidden;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        border-radius: 20px;
      }

      .btn::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.5s ease;
      }

      .btn:hover::before {
        left: 100%;
      }

      /* Animação para navbar */
      .navbar-link {
        position: relative;
        transition: all 0.3s ease;
      }

      .navbar-link::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 2px;
        background: var(--primary-color);
        transition: width 0.3s ease;
      }

      .navbar-link:hover::after {
        width: 100%;
      }

      /* Reduzir animações para usuários que preferem menos movimento */
      @media (prefers-reduced-motion: reduce) {
        .animate-section,
        .animate-child,
        .service-card,
        .project-card,
        .testimonial-card,
        .cert-card,
        .btn {
          animation: none;
          transition: none;
        }

        .animate-section {
          opacity: 1;
          transform: none;
        }

        .animate-child {
          opacity: 1;
          transform: none;
        }
      }
    `;

    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null; // Este componente não renderiza nada visualmente
};

export default SmoothAnimations;
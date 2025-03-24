'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Détection de la section active au défilement
      const sections = ['hero', 'mission', 'sponsors'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fonction de défilement fluide
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Ajustement pour la hauteur de la navbar
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/80 backdrop-blur-md py-3' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo avec nom Wespee à côté */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="relative flex items-center bg-transparent border-none cursor-pointer"
          >
            <div className="h-8 md:h-10 relative flex items-center">
              <NextImage 
                src="/logo-primary@2x.png" 
                alt="Wespee Logo" 
                width={140}
                height={40}
                className="object-contain h-full w-auto"
                style={{ maxHeight: '100%' }}
                priority
              />
              <span className="text-white font-bold text-xl md:text-2xl ml-2 tracking-tight">
                Wespee
              </span>
            </div>
          </button>
          
          {/* Navigation principale avec défilement */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')} 
              className={`transition-colors bg-transparent border-none cursor-pointer font-medium ${
                activeSection === 'hero' ? 'text-green-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('mission')} 
              className={`transition-colors bg-transparent border-none cursor-pointer font-medium ${
                activeSection === 'mission' ? 'text-green-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              Mission
            </button>
            <button 
              onClick={() => scrollToSection('sponsors')} 
              className={`transition-colors bg-transparent border-none cursor-pointer font-medium ${
                activeSection === 'sponsors' ? 'text-green-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              Partenaires
            </button>
          </div>
          
          {/* Bouton d'action */}
          <div>
            <button className="px-5 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-500 transition-colors">
              S'inscrire
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
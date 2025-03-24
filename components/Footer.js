'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';

export default function Footer() {
  useEffect(() => {
    // Animation subtile des orbes lumineux
    const interval = setInterval(() => {
      document.querySelectorAll('.footer-glow').forEach(el => {
        el.style.transform = `scale(${1 + Math.random() * 0.1}) translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px)`;
      });
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  // Fonction de défilement fluide pour les liens de navigation
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="relative pt-24 pb-10 overflow-hidden bg-gray-900">
      {/* Éléments lumineux verts */}
      <div className="glow-effect-green footer-glow -bottom-40 left-1/4 opacity-30 transition-transform duration-7000"></div>
      <div className="glow-effect-green footer-glow -top-40 right-1/4 opacity-20 transition-transform duration-7000"></div>
      
      {/* Motif de fond */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-noise-pattern opacity-3 mix-blend-soft-light"></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        {/* Citation inspirante en haut */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="relative inline-block">
            <svg className="w-12 h-12 text-green-500/20 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <p className="text-2xl text-white font-light italic mb-4">
            "La sécurité numérique n'est pas juste une fonctionnalité, c'est un droit fondamental."
          </p>
          <div className="flex items-center justify-center">
            <span className="text-gray-400">Notre vision chez</span>
            <span className="text-green-400 font-bold ml-1">Wespee</span>
          </div>
        </div>
        
        {/* Liens principaux du footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-16">
          {/* Colonne logo et infos */}
          <div className="space-y-6">
          <div className="flex items-center">
            <div className="h-10 w-auto relative mr-3 flex-shrink-0">
              <NextImage 
                src="/logo-primary@2x.png" 
                alt="Wespee Logo" 
                width={120} 
                height={40} 
                className="object-contain h-full w-auto" 
                style={{ maxHeight: '100%' }}
              />
            </div>
            <span className="text-white font-bold text-2xl tracking-tight">
              Wespee
            </span>
          </div>
            
            <p className="text-gray-400 mb-6">
              Nous rendons les transactions Mobile Money plus sûres pour des millions d'utilisateurs à travers l'Afrique.
            </p>
            
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600/20 hover:border-green-500/50 transition-all border border-gray-700">
                <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600/20 hover:border-green-500/50 transition-all border border-gray-700">
                <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                  <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z" />
                  <circle cx="18.406" cy="5.594" r="1.44" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600/20 hover:border-green-500/50 transition-all border border-gray-700">
                <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Colonne 2 - Navigation du site */}
          <div>
            <h4 className="text-white font-semibold mb-6">Explorer</h4>
            <ul className="space-y-4">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')} 
                  className="text-gray-400 hover:text-green-400 transition-colors bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('mission')} 
                  className="text-gray-400 hover:text-green-400 transition-colors bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  Notre mission
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('sponsors')} 
                  className="text-gray-400 hover:text-green-400 transition-colors bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  Partenaires
                </button>
              </li>
              <li><Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">Fonctionnalités</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">Témoignages</Link></li>
            </ul>
          </div>
          
          {/* Colonne 3 - Entreprise */}
          <div>
            <h4 className="text-white font-semibold mb-6">Entreprise</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">À propos</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">Carrières</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">Presse</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">Partenaires</Link></li>
            </ul>
          </div>
          
          {/* Colonne 4 - Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@wespee.com" className="text-gray-400 hover:text-green-400 transition-colors">info@wespee.com</a>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+22501234567" className="text-gray-400 hover:text-green-400 transition-colors">+225 01 23 45 67</a>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400">Abidjan, Côte d'Ivoire</span>
              </li>
              <li>
                <a href="#" className="inline-flex items-center text-gray-400 hover:text-green-400 mt-4 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Centre d'aide
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Barre inférieure avec copyright et mentions légales */}
        <div className="pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Wespee. Tous droits réservés.
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                Confidentialité
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                Conditions d'utilisation
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                Mentions légales
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                Cookies
              </Link>
              
              <div className="flex items-center">
                <span className="text-gray-500 text-sm mr-2">FR</span>
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
'use client';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Animation subtile des orbes lumineux
    const interval = setInterval(() => {
      document.querySelectorAll('.glow-effect-green').forEach(el => {
        el.style.transform = `scale(${1 + Math.random() * 0.1}) translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px)`;
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gray-900 pt-16 px-4">
      {/* Éléments lumineux verts améliorés */}
      <div className="glow-effect-green top-1/4 -left-20 opacity-60 transition-transform duration-7000"></div>
      <div className="glow-effect-green bottom-1/4 right-10 opacity-40 transition-transform duration-7000"></div>
      <div className="glow-effect-green top-1/3 right-32 opacity-30 scale-75 transition-transform duration-7000"></div>
      <div className="glow-effect-green bottom-1/3 left-32 opacity-20 scale-50 transition-transform duration-7000"></div>
      
      {/* Motif de fond amélioré */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-noise-pattern opacity-3 mix-blend-soft-light"></div>
      
      <div className="container mx-auto z-10 flex flex-col items-center">
        
        {/* Contenu textuel - centré avec animation */}
        <div className="text-center max-w-4xl mx-auto mb-20 fade-in-up">
          <span className="inline-block px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-green-500/20">
            NOUVEAU
          </span>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight text-white tracking-tight">
            Chaque année, des milliers de personnes perdent leur argent à cause de fraudes sur le <span className="text-gradient-green">Mobile Money</span>
          </h1>
          
          <div className="w-24 h-1 bg-green-500 mx-auto mb-8 rounded-full glow-sm"></div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            Selon l'Observatoire des Services Financiers Africains, plus de 90 % des utilisateurs de Mobile Money sont exposés à des menaces potentielles.
          </p>
          
        </div>
        
        {/* Vidéo teaser YouTube */}
        <div className="relative max-w-4xl w-full fade-in-up delay-200" 
             onMouseEnter={() => setIsHovering(true)}
             onMouseLeave={() => setIsHovering(false)}>
          {/* Effets lumineux améliorés autour de la vidéo */}
          <div className="absolute -top-16 -left-16 w-64 h-64 bg-green-500/15 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-green-500/15 rounded-full blur-3xl opacity-70"></div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50 backdrop-filter backdrop-blur-sm bg-black/40">
            {/* Coins décoratifs */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-green-500/50 rounded-tl-2xl"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-green-500/50 rounded-br-2xl"></div>
            
            {/* Badge teaser amélioré */}
            <div className="absolute top-5 left-5 bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium z-20 flex items-center border border-white/10 shadow-glow-sm">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Teaser
            </div>
            
            {/* Intégration YouTube avec ratio d'aspect vidéo */}
            <div className="aspect-video w-full relative">
              <iframe 
                className="w-full h-full absolute inset-0"
                src="https://www.youtube.com/embed/2MZGQybM-x0?autoplay=0&rel=0&showinfo=0&modestbranding=1"
                title="Wespee Mobile Money Protection"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              
              {/* Bouton play - disparaît lorsque l'iframe est chargée */}
              <div className="absolute inset-0 flex items-center justify-center group cursor-pointer hover:bg-black/30 transition-all duration-500 z-10 pointer-events-none opacity-0">
                <div className={`w-24 h-24 rounded-full bg-green-600/90 flex items-center justify-center transition-all duration-500 shadow-glow-lg ${isHovering ? 'scale-110' : 'scale-100'}`}>
                  <svg className="w-10 h-10 text-white ml-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Barre d'info sous la vidéo */}
            <div className="bg-black/50 backdrop-blur-md border-t border-gray-800/50 py-4 px-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-400">Durée: 0:18 min</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Indicateur de défilement stylisé */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce-slow opacity-70">
        <span className="text-sm text-gray-400 mb-2">Découvrir</span>
        <div className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
}
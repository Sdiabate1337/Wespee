'use client';
import { useRef, useEffect } from 'react';
import Image from 'next/image';

export default function Sponsors() {
  const containerRef = useRef(null);
  
  // Effet de défilement subtil pour le carrousel
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    let animationId;
    let position = 0;
    const speed = 0.5;
    
    const animate = () => {
      position += speed;
      
      // Réinitialise la position pour créer un défilement infini
      if (position >= container.scrollWidth / 2) {
        position = 0;
      }
      
      container.scrollLeft = position;
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    // Arrête l'animation au survol
    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => { animationId = requestAnimationFrame(animate); };
    
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      cancelAnimationFrame(animationId);
      if (container) {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);
  
  // Partenaires technologiques
  const partners = [
    { 
      id: 1, 
      name: "Microsoft for Startups", 
      logo: "/partners/Capture_d_écran_2025-03-24_à_05.23.00-removebg-preview.png" 
    },
    { 
      id: 2, 
      name: "Cloudflare", 
      logo: "/partners/Capture_d_écran_2025-03-24_à_05.23.11-removebg-preview.png" 
    },
    { 
      id: 3, 
      name: "Bucents", 
      logo: "/partners/Capture_d_écran_2025-03-24_à_05.23.24-removebg-preview.png" 
    },
  ];
  
  return (
    <div id="sponsors" className="relative py-20 overflow-hidden bg-gray-900">
      {/* Éléments lumineux verts */}
      <div className="glow-effect-green -bottom-40 -left-20 opacity-30 transition-transform duration-7000"></div>
      <div className="glow-effect-green -top-40 right-10 opacity-20 transition-transform duration-7000"></div>
      
      {/* Motif de fond */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-noise-pattern opacity-3 mix-blend-soft-light"></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center max-w-4xl mx-auto mb-16 fade-in-up">
          <span className="inline-block px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-green-500/20">
            PARTENAIRES
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-white">
            Une solution innovante développée avec des <span className="text-gradient-green">technologies de pointe</span>
          </h2>
          
          <div className="w-24 h-1 bg-green-500 mx-auto mb-8 rounded-full glow-sm"></div>
          
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Notre technologie est construite sur des infrastructures de premier plan 
            pour vous offrir une sécurité maximale dès le lancement.
          </p>
        </div>
        
        {/* Partenaires technologiques */}
        <div className="relative mt-16">
          <h3 className="text-lg font-medium text-green-400 mb-8 text-center">Propulsé par</h3>
          
          {/* Effet de flou aux extrémités */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
          
          {/* Carrousel de logos */}
          <div 
            ref={containerRef}
            className="flex overflow-x-auto scrollbar-hide gap-8 py-8 relative items-center"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Double les éléments pour créer l'illusion d'un défilement infini */}
            {[...partners, ...partners].map((partner, index) => (
              <div 
                key={`${partner.id}-${index}`} 
                className="flex-shrink-0 bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-green-500/30 transition-all duration-300 hover:bg-black/60 group w-48 h-24 flex items-center justify-center"
              >
                <div className="h-12 w-40 relative grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                  <Image
                    src={partner.logo || '/placeholder-logo.svg'}
                    alt={partner.name}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="max-w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}
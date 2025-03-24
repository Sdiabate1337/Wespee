'use client';
import React, { useEffect } from 'react';

export default function Mission() {
  useEffect(() => {
    // Animation subtile des orbes lumineux
    const interval = setInterval(() => {
      document.querySelectorAll('.mission-glow').forEach(el => {
        el.style.transform = `scale(${1 + Math.random() * 0.1}) translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px)`;
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="mission" className="relative py-20 flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Éléments lumineux verts */}
      <div className="glow-effect-green mission-glow top-1/4 -left-20 opacity-60 transition-transform duration-7000"></div>
      <div className="glow-effect-green mission-glow bottom-1/4 right-10 opacity-40 transition-transform duration-7000"></div>
      <div className="glow-effect-green mission-glow top-1/3 right-32 opacity-30 scale-75 transition-transform duration-7000"></div>
      
      {/* Motif de fond amélioré - identique au Hero */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-noise-pattern opacity-3 mix-blend-soft-light"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 lg:col-start-3 fade-in-up">
            <div className="relative">
              {/* Éléments décoratifs autour du contenu */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-green-500 opacity-75"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-green-500 opacity-75"></div>
              
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-800/50 bg-black/40 backdrop-blur-sm p-10">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-green-500/10 text-green-400 rounded-full mb-4 backdrop-blur-sm border border-green-500/20">
                  NOTRE MISSION
                </span>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-white">
                  Chez Wespee, notre mission est de te protéger contre les fraudes et arnaques, 
                  afin que tu puisses faire plus et dépenser en toute <span className="text-gradient-green">sécurité</span> avec ton Mobile Money.
                </h2>
                
                <div className="w-20 h-1 bg-green-500 mb-6 rounded-full glow-sm"></div>
                
                <p className="text-xl md:text-2xl text-gray-300 font-semibold">
                  "Votre sécurité, notre engagement."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
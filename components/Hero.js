'use client';
import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Hero() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      <Head>
        {/* Importer Circular Std depuis un CDN */}
        <link 
          rel="stylesheet" 
          href="https://db.onlinewebfonts.com/c/860c3ec7bbc5da3e97233ccecafe512e?family=Circular+Std+Book" 
        />
      </Head>

      <div id="hero" className="relative min-h-screen flex flex-col justify-center bg-white pt-16 mt-20 px-4" style={{ fontFamily: 'Circular Std Book, Arial, sans-serif' }}>
        <div className="container mx-auto z-10 flex flex-col items-center">

          
          
          {/* Contenu textuel - centré avec animation */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            
            <h1 className="text-center mb-8 text-gray-900" 
                style={{ 
                  fontSize: '50px', 
                  fontWeight: 450, 
                  lineHeight: '100%', 
                  letterSpacing: '0px',
                  fontFamily: 'Circular Std, sans-serif'
                }}>
              Chaque jour, des milliers de personnes perdent leur argent à cause de fraudes sur le Mobile Money
            </h1>            
            <p className="text-gray-600 mb-10 max-w-3xl mx-auto text-center"
               style={{ 
                 fontSize: '30px', 
                 fontWeight: 450, 
                 lineHeight: '100%', 
                 letterSpacing: '0px',
                 fontFamily: 'Circular Std, sans-serif'
               }}>
              Selon l'Observatoire des Services Financiers Africains, plus de 90 % des utilisateurs de Mobile Money sont exposés à des menaces potentielles.
            </p>
            
          </div>
          
          {/* Vidéo teaser YouTube */}
          <div className="relative max-w-4xl w-full" 
               onMouseEnter={() => setIsHovering(true)}
               onMouseLeave={() => setIsHovering(false)}>
            
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white">
              {/* Coins décoratifs */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-green-400 rounded-tl-2xl"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-green-400 rounded-br-2xl"></div>
              
              {/* Badge teaser */}
              <div className="absolute top-5 left-5 bg-white text-gray-800 px-4 py-2 rounded-full text-sm font-medium z-20 flex items-center border border-gray-200 shadow-sm">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Teaser
              </div>
              
              {/* Intégration YouTube avec ratio d'aspect vidéo */}
              <div className="aspect-video w-full relative">
              <iframe 
                className="w-full h-full absolute inset-0"
                src="https://www.youtube.com/embed/2MZGQybM-x0?autoplay=1&mute=1&rel=0&showinfo=0&modestbranding=1&loop=1&playlist=2MZGQybM-x0"
                title="Wespee Mobile Money Protection"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
              
              {/* Barre d'info sous la vidéo */}
              <div className="bg-gray-50 border-t border-gray-200 py-4 px-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Durée: 0:18 min</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
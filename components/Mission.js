'use client';
import React from 'react';

export default function Mission() {
  return (
    <div id="mission" className="relative py-20 flex items-center justify-center overflow-hidden bg-white">
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 lg:col-start-3">
            <div className="relative">
              {/* Éléments décoratifs autour du contenu */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-green-500 opacity-75"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-green-500 opacity-75"></div>
              
              <div className="relative rounded-xl overflow-hidden shadow-md border border-gray-200 bg-white p-10">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-green-50 text-green-600 rounded-full mb-4 border border-green-200">
                  NOTRE MISSION
                </span>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-gray-900"
                  style={{ 
                    fontSize: '50px', 
                    fontWeight: 450, 
                    lineHeight: '100%', 
                    letterSpacing: '0px',
                    fontFamily: 'Circular Std, sans-serif'
                  }}
                >
                Chez Wespee, notre mission est de te protéger contre les fraudes et arnaques, afin que tu puisses faire plus et dépenser en toute sécurité avec ton Mobile Money.
                </h2>
                
                <div className="w-20 h-1 bg-green-500 mb-6 rounded-full"></div>
                
                <p className="text-xl md:text-2xl text-gray-600 font-semibold">
                  "Do more & Spend safe with your mobile Money"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
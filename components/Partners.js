'use client';
import { useRef } from 'react';
import Image from 'next/image';

export default function SponsorLogos() {
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
    <div id="sponsors" className="relative py-16 overflow-hidden bg-white">
      <div className="container mx-auto px-4 z-10 relative">
        {/* Uniquement les logos des partenaires */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner) => (
            <div 
              key={partner.id} 
              className="w-40 md:w-48 h-24 flex items-center justify-center"
            >
              <div className="h-full w-full relative">
                <Image
                  src={partner.logo}
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
  );
}
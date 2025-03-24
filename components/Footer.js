'use client';
import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative py-8 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          {/* Logo gris */}
          <div className="w-32 h-auto mb-4">
            <Image 
              src="/logo-gri.png" 
              alt="Wespee Logo" 
              width={128}
              height={40}
              className="object-contain"
            />
          </div>
          
          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            ©2025 Wespee S.A.
          </p>
        </div>
      </div>
    </footer>
  );
}
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, ArrowUpRight } from 'lucide-react';
import { REEMPLAZAR_LINK_ENCUADRADO, REEMPLAZAR_PRECIO_USD, REEMPLAZAR_PRECIO_MXN } from '../constants';

interface HeaderProps {
  onStartQuiz?: () => void;
}

export default function Header({ onStartQuiz }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#F8F6F3]/90 backdrop-blur-md border-b border-[#D6D3CF]/40 py-3.5 px-4 sm:px-8 md:px-12 lg:px-20 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Editorial Brand Lockup */}
        <a 
          href="#home" 
          onClick={(e) => {
            e.preventDefault();
            window.location.hash = '#home';
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3.5 group focus:outline-none"
        >
          <img 
            src="https://lh3.googleusercontent.com/d/1OXQwXR_WjzMPEjWV0_yGSTWhe6f8C93q" 
            alt="Paulina Benítez Logo" 
            className="h-9 sm:h-11 w-auto object-contain rounded-full border border-[#D6D3CF]/40 p-0.5"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col">
            <span className="font-serif text-[#122033] font-bold tracking-tight text-base sm:text-lg leading-tight group-hover:text-[#2F4A45] transition-colors">
              Paulina Benítez
            </span>
            <span className="text-[10px] text-[#2F4A45] tracking-widest uppercase font-sans font-medium">
              Nutrición Funcional • GLP-1
            </span>
          </div>
        </a>

        {/* Minimal Nav / CTA */}
        <div className="flex items-center gap-4 sm:gap-6">
          <span className="hidden md:inline-block text-xs font-sans text-[#2D2D2D]/70 font-medium">
            "Control consciente sobre tu cuerpo"
          </span>

          {onStartQuiz && (
            <button
              onClick={onStartQuiz}
              className="cursor-pointer text-xs font-sans font-semibold text-[#122033] bg-[#EFEAE4] hover:bg-[#122033] hover:text-white border border-[#D6D3CF] px-4 py-2.5 rounded-xl transition-all duration-200"
            >
              Test Gratuito GLP-1
            </button>
          )}

          <a
            href={REEMPLAZAR_LINK_ENCUADRADO}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hidden sm:inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-white bg-[#2F4A45] hover:bg-[#122033] px-4 py-2.5 rounded-xl transition-all shadow-2xs hover:shadow-sm"
          >
            Inscribirme (${REEMPLAZAR_PRECIO_USD} USD)
            <ArrowUpRight className="w-3.5 h-3.5 text-[#D8B8B5]" />
          </a>
        </div>

      </div>
    </header>
  );
}


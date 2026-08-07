/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles } from 'lucide-react';
import { REEMPLAZAR_LINK_ENCUADRADO } from '../constants';

interface HeaderProps {
  onStartQuiz?: () => void;
}

export default function Header({ onStartQuiz }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#F4F4F8]/85 backdrop-blur-md border-b border-[#A0B0B8]/10 py-3 px-4 sm:py-4 sm:px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo / Brand Signature */}
        <div className="flex items-center gap-3">
          <img 
            src="https://lh3.googleusercontent.com/d/1OXQwXR_WjzMPEjWV0_yGSTWhe6f8C93q" 
            alt="Nutripau Logo" 
            className="h-10 sm:h-12 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col">
            <span className="font-serif text-[#947884] font-medium tracking-wide text-sm sm:text-base leading-none">
              NP Academy
            </span>
            <span className="text-[9px] sm:text-[10px] text-[#A0B0B8] tracking-widest uppercase font-light mt-0.5">
              Programa GLP-1 (45 Días)
            </span>
          </div>
        </div>

        {/* Minimal Nav / Call to Action */}
        <nav className="flex items-center gap-6">
          <span className="hidden sm:inline-block text-xs font-sans text-[#A0B0B8] font-medium transition-colors hover:text-[#947884]">
            Nutripau.
          </span>
        </nav>
      </div>
    </header>
  );
}

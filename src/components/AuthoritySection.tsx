/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Star, Award, ShieldCheck, GraduationCap } from 'lucide-react';

export default function AuthoritySection() {
  return (
    <section className="relative w-full py-16 md:py-24 px-6 sm:px-12 md:px-24 bg-white/50 border-t border-b border-[#A0B0B8]/10 overflow-hidden">
      
      {/* Decorative botanical leaf background watermark */}
      <div className="absolute left-4 bottom-4 w-60 h-60 text-[#A0B0B8]/10 rotate-[-15deg] pointer-events-none select-none">
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
          <path d="M50,10 C45,30 20,40 20,60 C20,80 40,90 50,90 C60,90 80,80 80,60 C80,40 55,30 50,10 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Clinical Profile Portrait Representation in Squircle Outline */}
        <div className="col-span-1 lg:col-span-5 flex flex-col items-center gap-6 relative">
          
          {/* SQUIRCLE FRAME with the portrait image */}
          <div 
            className="relative w-full max-w-sm aspect-[4/5] bg-[#EAD7DB]/50 border border-white shadow-lg overflow-hidden group flex flex-col justify-end"
            style={{ borderRadius: '48px 48px 12px 48px' }}
          >
            {/* The beautiful portrait image */}
            <img 
              src="https://lh3.googleusercontent.com/d/1aJTQ48QcT9SltxcHqmbrtZ5kkaIMSZMg" 
              alt="Nut. Paulina Benítez" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            
            {/* Elegant vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Content layered gracefully at the bottom of the portrait */}
            <div className="relative z-10 p-6 flex flex-col gap-3">
              <div className="text-left">
                <p className="font-serif text-white text-2xl font-semibold tracking-wide">
                  Nut. Paulina Benítez
                </p>
                <p className="text-[10px] text-white/80 tracking-widest uppercase font-sans mt-0.5">
                  Dirección Académica NP
                </p>
              </div>

              {/* Verified badge with delicate glassmorphism backdrop */}
              <div className="flex items-center gap-1.5 self-start bg-white/15 backdrop-blur-md border border-white/20 text-white text-[9px] px-3 py-1.5 rounded-full uppercase tracking-wider font-sans font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-white/90" />
                Cédula Profesional 12592-MX
              </div>
            </div>
          </div>

          {/* Gold/Slate ratings at the bottom of portrait */}
          <div className="w-full max-w-sm bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-[#A0B0B8]/10 text-center flex flex-col items-center shadow-sm">
            <div className="flex gap-0.5 text-[#C09CB4] mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <p className="text-[10px] text-[#5C5C5C] font-sans">
              Calificación 5.0 sobre <span className="text-[#947884] font-medium">606 evaluaciones</span>
            </p>
          </div>

          {/* Aesthetic botanical leaf or cinta washi overlay */}
          <div className="absolute right-4 top-4 rotate-[15deg] z-20 pointer-events-none select-none">
            <div className="bg-[#9CB4C0]/20 border border-white/45 backdrop-blur-md px-3 py-1 rounded-md text-[9px] font-sans text-white tracking-wide shadow-sm">
              Nutrióloga Certificada
            </div>
          </div>
        </div>

        {/* Right Side: Authority Copy, Badges, and Credentials */}
        <div className="col-span-1 lg:col-span-7 flex flex-col">
          
          <span className="text-xs font-sans text-[#A0B0B8] font-medium uppercase tracking-widest mb-3 block">
            Respaldo Clínico Especializado
          </span>
          
          <h2 className="font-serif text-[#C09CB4] text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-6">
            Liderando tu salud, <span className="text-[#947884]">no solo tu peso.</span>
          </h2>

          <div className="h-[2px] w-16 bg-[#C09CB4]/30 mb-8" />

          {/* Detailed Biography Copy */}
          <div className="space-y-6">
            <p className="font-sans text-[#5C5C5C] text-sm sm:text-base leading-relaxed font-light">
              <span className="text-[#947884] font-medium">Paulina Benítez.</span> es Licenciada en Nutrición y Dietética certificada por el ISSSTE en México.
            </p>

            <p className="font-sans text-[#5C5C5C] text-sm sm:text-base leading-relaxed font-light">
              Su trayectoria incluye estudios sobre la Dieta Basada en Plantas y Deporte, complementados con un enfoque de vanguardia en Nutrición Clínica Aplicada a Endocrinología Ginecológica. 
            </p>

            <p className="font-sans text-[#5C5C5C] text-sm sm:text-base leading-relaxed font-light">
              Cuenta con certificaciones en Dieta Cetogénica adaptativa, Salud Digestiva Intestinal, Nutrición Funcional Integrativa y FODMAPs avalada por la prestigiosa <span className="text-[#947884] font-medium">Academy of Nutrition and Dietetics (Estados Unidos)</span>.
            </p>
          </div>

          {/* Bullet highlights with icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-[#A0B0B8]/10">
            <div className="flex items-center gap-3">
              <div className="text-[#9CB4C0]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-xs text-[#5C5C5C] font-sans">
                Especialista en Endocrinología Ginecológica
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-[#9CB4C0]">
                <Award className="w-5 h-5" />
              </div>
              <span className="text-xs text-[#5C5C5C] font-sans">
                Certificada en FODMAP por la Academy of Nutrition & Dietetics
              </span>
            </div>
          </div>

          {/* Closing line containing custom co-authorship mention */}
          <div className="mt-8 bg-[#9CB4C0]/5 p-4 rounded-xl border border-[#9CB4C0]/10">
            <p className="text-xs text-[#5C5C5C] font-serif italic text-center sm:text-left">
              * Diseñado con rigurosidad científica por la <span className="text-[#947884] font-semibold font-sans not-italic">Nut. Paulina Benítez</span>.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

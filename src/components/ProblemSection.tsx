/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Flame, ShieldAlert, Sparkle, RefreshCw } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      title: 'Pierdes músculo',
      emphasis: 'Catabolismo acelerado.',
      description: 'comer menos sin una ingesta estratégica de proteína de alta calidad biológica sacrifica directamente tu masa muscular, dañando tu fuerza y frenando el metabolismo basal.',
      icon: (
        <svg className="w-6 h-6 text-[#9CB4C0]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 18V6M18 18V6M6 12H18M12 6c0 3.333-2 6-6 6M12 6c0 3.333 2 6 6 6M12 18c0-3.333-2-6-6-6M12 18c0-3.333 2-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Los síntomas se instalan',
      emphasis: 'Malestar constante.',
      description: 'náuseas, reflujo gástrico persistente, fatiga y estreñimiento severo acaban convirtiéndose en tu molesta nueva normalidad, afectando drásticamente tu calidad de vida diaria.',
      icon: (
        <svg className="w-6 h-6 text-[#9CB4C0]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 9v4M12 17h.01M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'El rebote',
      emphasis: 'Ausencia de transición.',
      description: 'al suspender el medicamento, recuperas rápidamente el peso perdido porque tu cuerpo carece de adaptación nutricional y nunca se estructuró un plan de salida metabólico real.',
      icon: (
        <svg className="w-6 h-6 text-[#9CB4C0]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8M20 8h-5V3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative w-full py-16 md:py-24 px-6 sm:px-12 md:px-24 bg-[#FAF8F5] border-t border-[#A0B0B8]/10">
      
      {/* Sparkle star accent */}
      <div className="absolute top-12 right-12 opacity-40 select-none hidden md:block">
        <Sparkle className="w-6 h-6 text-[#C09CB4]" />
      </div>

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-sans text-[#A0B0B8] font-medium uppercase tracking-widest block mb-3">
            Efectos Colaterales Ocultos
          </span>
          <h2 className="font-serif text-[#C09CB4] text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.12]">
            El GLP-1 reduce tu apetito. <span className="text-[#947884]">No diseña tu alimentación.</span>
          </h2>
          <div className="h-[1px] w-24 bg-[#C09CB4]/30 mt-6" />
        </div>

        {/* 3 Columns Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((prob, idx) => (
            <div
              key={idx}
              className="group relative bg-white/40 p-8 rounded-[24px] border border-white/60 hover:border-[#9CB4C0]/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Icon wrapper with soft backdrop */}
                <div className="w-12 h-12 rounded-2xl bg-[#9CB4C0]/10 flex items-center justify-center mb-6 transition-colors group-hover:bg-[#9CB4C0]/15">
                  {prob.icon}
                </div>

                {/* Card Title */}
                <h3 className="font-serif text-[#947884] text-xl font-semibold tracking-wide mb-3">
                  {prob.title}
                </h3>

                {/* Description adhering to the rule of emphasis (first words key branded malva) */}
                <p className="font-sans text-[#5C5C5C] text-sm leading-relaxed font-light">
                  <span className="text-[#C09CB4] font-medium">{prob.emphasis}</span> {prob.description}
                </p>
              </div>

              {/* Elegant bottom lines */}
              <div className="w-full h-[2px] bg-gradient-to-r from-[#9CB4C0]/0 via-[#A0B0B8]/20 to-[#9CB4C0]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-6" />
            </div>
          ))}
        </div>

        {/* Balanced Bottom Reminder Quote in 2nd Person */}
        <div className="mt-16 text-center max-w-xl mx-auto">
          <p className="font-serif text-base italic text-[#947884] font-medium mb-2">
            "Aquí no venimos a hacer dietas extremas, a contar calorías ni a sobrevivir a tus síntomas hormonales digestivos."
          </p>
        </div>

      </div>
    </section>
  );
}

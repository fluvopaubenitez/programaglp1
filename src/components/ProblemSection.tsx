/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Activity, ShieldAlert, RefreshCw, AlertCircle } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      title: 'Pérdida acelerada de masa muscular',
      emphasis: 'Catabolismo proteico.',
      description: 'Reducir calorías sin un cálculo proteico preciso degrada el tejido muscular, afectando la fuerza y reduciendo drásticamente el gasto calórico en reposo.',
      icon: <Activity className="w-5 h-5 text-[#2F4A45]" />
    },
    {
      title: 'Síntomas gastrointestinales persistentes',
      emphasis: 'Malestar digestivo no tratado.',
      description: 'Las náuseas, el reflujo gástrico y el estreñimiento moderado a severo son señales de un vaciado gástrico alterado que requiere ajuste nutricional inmediato.',
      icon: <ShieldAlert className="w-5 h-5 text-[#2F4A45]" />
    },
    {
      title: 'Efecto rebote al suspender el tratamiento',
      emphasis: 'Falta de protocolo de salida.',
      description: 'Sin reeducación nutricional basada en ciencia ni hábitos consolidados, el organismo recupera el peso graso al retirar el fármaco.',
      icon: <RefreshCw className="w-5 h-5 text-[#2F4A45]" />
    }
  ];

  return (
    <section className="relative w-full py-16 md:py-24 px-6 sm:px-12 md:px-20 bg-[#EFEAE4] border-t border-[#D6D3CF]/60">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-sans text-[#2F4A45] font-bold uppercase tracking-widest block mb-2">
            Riesgos Clínicos Desatendidos
          </span>
          <h2 className="font-serif text-[#122033] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.12]">
            El fármaco reduce el apetito. <span className="text-[#2F4A45] italic font-normal">La nutrición funcional preserva tu salud.</span>
          </h2>
          <p className="font-sans text-[#2D2D2D]/80 text-sm sm:text-base font-normal mt-3">
            Para evitar secuelas metabólicas es indispensable acompañar el tratamiento con un protocolo estructurado.
          </p>
          <div className="h-[2px] w-20 bg-[#2F4A45] mt-6" />
        </div>

        {/* 3 Columns Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((prob, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-xl border border-[#D6D3CF] hover:border-[#122033] transition-all duration-200 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Icon wrapper */}
                <div className="w-10 h-10 rounded-lg bg-[#EFEAE4] border border-[#D6D3CF] flex items-center justify-center mb-6">
                  {prob.icon}
                </div>

                {/* Card Title */}
                <h3 className="font-serif text-[#122033] text-xl font-bold tracking-tight mb-3">
                  {prob.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-[#2D2D2D]/80 text-xs sm:text-sm leading-relaxed font-normal">
                  <strong className="text-[#2F4A45] font-semibold">{prob.emphasis}</strong> {prob.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#D6D3CF]/50 text-[11px] font-sans text-[#2D2D2D]/60 flex items-center justify-between">
                <span>Riesgo {idx + 1} de 3</span>
                <span className="text-[#2F4A45] font-semibold">Prevención Clínica</span>
              </div>
            </div>
          ))}
        </div>

        {/* Clinical Note Quote */}
        <div className="mt-14 p-6 bg-white rounded-xl border border-[#D6D3CF] max-w-3xl mx-auto text-center">
          <p className="font-serif text-lg text-[#122033] font-medium italic">
            "El objetivo no es comer menos por inercia, sino nutrir con precisión estratégica para tomar el control consciente sobre tu composición corporal."
          </p>
          <span className="text-xs font-sans text-[#2F4A45] font-semibold uppercase tracking-wider block mt-2">
            — Nut. Paulina Benítez
          </span>
        </div>

      </div>
    </section>
  );
}


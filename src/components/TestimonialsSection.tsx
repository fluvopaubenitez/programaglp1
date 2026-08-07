/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MessageSquare, Sparkle, UserCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      initials: 'M.A',
      handle: '@mariana_alvarez',
      time: 'Hace 3 semanas',
      quote: 'Comencé con muchas dudas y náuseas horribles. Con el curso aprendí exactamente qué comer por la mañana y las náuseas desaparecieron a los 3 días. He bajado 8 kilos reteniendo toda mi fuerza física.',
      verified: 'Paciente con GLP-1 (Etapa: 0 a 4 semanas)'
    },
    {
      initials: 'S.R',
      handle: '@sofia_ruiz_m',
      time: 'Hace 1 mes',
      quote: 'Mi gran miedo era el rebote alimentario porque ya había usado medicamentos antes. Paulina me diseñó la transición final. Llevo 4 meses sin la inyección y mi peso sigue estable. ¡La mejor inversión de mi salud!',
      verified: 'Fase de Salida (4 meses limpia)'
    },
    {
      initials: 'C.V',
      handle: '@clau.villarreal',
      time: 'Hace 5 días',
      quote: 'La proteína estratégica fue un cambio de chip completo. Pensaba que comía sano pero estaba perdiendo masa muscular y sintiéndome débil. Ahora entreno con energía y mi músculo se siente firme.',
      verified: 'Paciente activo (Etapa: 1 a 3 meses)'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 18,
      },
    },
  };

  return (
    <section className="relative w-full py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-24 bg-[#FAF8F5] border-b border-[#A0B0B8]/10 overflow-hidden">
      
      {/* Sparkle top left decorative star */}
      <div className="absolute top-10 left-10 opacity-30 select-none">
        <Sparkle className="w-5 h-5 text-[#C09CB4]" />
      </div>

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 text-center mx-auto">
          <span className="text-xs font-sans text-[#A0B0B8] font-medium uppercase tracking-widest block mb-3">
            Efectividad Real Probada
          </span>
          <h2 className="font-serif text-[#C09CB4] text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
            Lo que dicen quienes ya completaron el <span className="text-[#947884]">programa de 45 días.</span>
          </h2>
          <p className="font-sans text-[#5C5C5C] text-sm font-light mt-4">
            Mensajes directos reales compartidos por pacientes voluntarias bajo tratamiento médico de GLP-1.
          </p>
          <div className="h-[1px] w-20 bg-[#C09CB4]/30 mt-6 mx-auto" />
        </div>

        {/* 3 screenshot-like columns tailored for vertical screenshots representation */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="relative flex flex-col justify-between bg-white border border-[#A0B0B8]/20 rounded-[32px] p-6 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div>
                {/* Simulated Smartphone status header inside screenshot */}
                <div className="flex items-center justify-between border-b border-[#A0B0B8]/10 pb-4 mb-5 text-[11px] text-[#A0B0B8] font-mono">
                  <span className="flex items-center gap-1.5 font-sans font-medium text-[#947884]">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Bandeja DM Directo
                  </span>
                  <span>{test.time}</span>
                </div>

                {/* User Info */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#9CB4C0]/10 border border-[#9CB4C0]/30 flex items-center justify-center font-serif text-xs font-semibold text-[#947884]">
                    {test.initials}
                  </div>
                  <div>
                    <h3 className="font-mono text-xs text-[#5C5C5C] font-semibold flex items-center gap-1">
                      {test.handle}
                      <span className="text-sky-400 text-[10px]" title="Verificado">✓</span>
                    </h3>
                    <p className="text-[10px] text-[#A0B0B8] font-sans flex items-center gap-1 mt-0.5">
                      <UserCheck className="w-3 h-3 text-[#A0B0B8]" />
                      {test.verified}
                    </p>
                  </div>
                </div>

                {/* Patient Chat bubble */}
                <div className="relative bg-[#F4F4F8] rounded-[20px] p-4 border border-[#A0B0B8]/10">
                  <p className="font-sans text-[#5C5C5C] text-xs sm:text-sm leading-relaxed font-light italic">
                    "{test.quote}"
                  </p>
                  {/* Bubble tail decoration */}
                  <div className="absolute top-4 -left-1.5 w-3 h-3 bg-[#F4F4F8] rotate-45 border-l border-b border-[#A0B0B8]/10" />
                </div>
              </div>

              {/* Status footer inside card */}
              <div className="mt-6 pt-4 border-t border-[#A0B0B8]/10 text-center">
                <span className="text-[10px] text-[#9CB4C0] uppercase tracking-wider font-sans font-medium">
                  ★ Programa Validado 10/10
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MessageSquare, UserCheck, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      initials: 'M.A',
      handle: 'Mariana Álvarez',
      time: 'Hace 3 semanas',
      quote: 'Comencé con muchas dudas y náuseas horribles. En las consultas iniciales y con el curso aprendí exactamente qué comer. Las náuseas desaparecieron a los 3 días. He mantenido mi masa muscular intacta.',
      verified: 'Paciente con GLP-1 (Etapa: 0 a 4 semanas)'
    },
    {
      initials: 'S.R',
      handle: 'Sofía Ruiz',
      time: 'Hace 1 mes',
      quote: 'Mi gran miedo era el rebote alimentario. Paulina me diseñó la transición de salida en la consulta final. Llevo 4 meses sin la inyección y mi peso sigue totalmente estable.',
      verified: 'Fase de Salida (4 meses de mantenimiento)'
    },
    {
      initials: 'C.V',
      handle: 'Claudia Villarreal',
      time: 'Hace 5 días',
      quote: 'El recetario y el ajuste proteico personalizado me cambiaron todo. Pensaba que comía suficiente pero estaba perdiendo tono muscular. Ahora entreno con mucha energía y fuerza.',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 90,
        damping: 18,
      },
    },
  };

  return (
    <section className="relative w-full py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-20 bg-[#EFEAE4] border-b border-[#D6D3CF] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-center mx-auto">
          <span className="text-xs font-sans text-[#2F4A45] font-bold uppercase tracking-widest block mb-2">
            Resultados & Evidencia
          </span>
          <h2 className="font-serif text-[#122033] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.12]">
            Experiencias reales de pacientes en el <span className="text-[#2F4A45] italic font-normal">programa de 45 días.</span>
          </h2>
          <p className="font-sans text-[#2D2D2D]/80 text-sm font-normal mt-3">
            Casos clínicos de acompañamiento continuo durante el uso de medicamentos análogos del GLP-1.
          </p>
          <div className="h-[2px] w-16 bg-[#2F4A45] mt-6 mx-auto" />
        </div>

        {/* Testimonials Cards */}
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
              className="bg-white border border-[#D6D3CF] rounded-xl p-6 sm:p-7 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between border-b border-[#D6D3CF]/60 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#EFEAE4] border border-[#D6D3CF] flex items-center justify-center font-serif text-xs font-bold text-[#122033]">
                      {test.initials}
                    </div>
                    <div>
                      <h3 className="font-serif text-sm font-bold text-[#122033]">
                        {test.handle}
                      </h3>
                      <p className="text-[10px] text-[#2F4A45] font-sans font-medium">
                        {test.verified}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-0.5 text-[#2F4A45]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <p className="font-sans text-[#2D2D2D]/85 text-xs sm:text-sm leading-relaxed font-normal italic">
                  "{test.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#D6D3CF]/50 text-right">
                <span className="text-[10px] text-[#2D2D2D]/60 font-sans font-medium">
                  {test.time} • Verificado
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}


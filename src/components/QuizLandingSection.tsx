/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Sparkle, 
  RotateCcw, 
  ShieldCheck, 
  Clock, 
  FileText, 
  Activity, 
  AlertCircle, 
  Flame, 
  CornerDownRight 
} from 'lucide-react';

interface QuizLandingSectionProps {
  onStartQuiz: () => void;
  onBackToCourse: () => void;
}

export default function QuizLandingSection({ onStartQuiz, onBackToCourse }: QuizLandingSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section className="min-h-[85vh] py-12 px-4 sm:px-8 md:px-16 lg:px-24 flex items-center justify-center bg-[#FAF8F5]">
      <motion.div 
        className="w-full max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Subtle navigation indicator or return prompt for main page */}
        <motion.div variants={itemVariants} className="flex justify-between items-center mb-8">
          <button
            onClick={onBackToCourse}
            className="cursor-pointer group text-xs text-[#A0B0B8] hover:text-[#947884] transition-colors flex items-center gap-1.5 focus:outline-none"
          >
            <RotateCcw className="w-3.5 h-3.5 group-hover:-rotate-45 transition-transform" />
            Ver detalles del Programa de 45 Días
          </button>
          <span className="hidden sm:inline-block text-[10px] tracking-widest font-mono text-[#A0B0B8] uppercase">
            Valoración 100% Digital / Sin Costo
          </span>
        </motion.div>

        {/* Central Card with clean high-contrast boundaries */}
        <div className="bg-white border border-[#A0B0B8]/15 rounded-[40px] shadow-sm p-6 sm:p-12 md:p-16 relative overflow-hidden">
          {/* Glowing gradient visual backdrops */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#EAD7DB]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#9CB4C0]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center">
            
            {/* Tag/Badge Motif */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EAD7DB]/45 border border-[#C09CB4]/20 text-[#947884] text-[10px] sm:text-xs tracking-wider uppercase font-medium mb-6"
            >
              <Sparkle className="w-3.5 h-3.5 text-[#C09CB4] animate-pulse" />
              Nutrición de Precisión en GLP-1
            </motion.div>

            {/* Main Editorial Header */}
            <motion.h1 
              variants={itemVariants}
              className="font-serif text-[#C09CB4] text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.12] mb-6"
            >
              ¿Cómo está reaccionando tu cuerpo al tratamiento con <span className="text-[#947884]">GLP-1</span>?
            </motion.h1>

            {/* Strategic Value Proposition */}
            <motion.p 
              variants={itemVariants}
              className="font-sans text-[#5C5C5C] text-sm sm:text-base md:text-lg font-light leading-relaxed mb-10 max-w-2xl"
            >
              Identifica debilidades nutricionales críticas, silencia síntomas clínicos digestivos y pon en marcha pautas de conservación muscular diseñadas por la especialista <span className="text-[#947884] font-medium font-serif italic">Nut. Paulina Benítez</span>.
            </motion.p>

            {/* 4 Pillars Grid Layout - High Visual Contrast */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left w-full mb-12"
            >
              {/* Pillar 1 */}
              <div className="p-5 rounded-2xl bg-[#F4F4F8] border border-transparent hover:border-[#9CB4C0]/20 hover:bg-white transition-all group">
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="w-8 h-8 rounded-lg bg-[#9CB4C0]/10 flex items-center justify-center text-[#9CB4C0]">
                    <Flame className="w-4 h-4" />
                  </span>
                  <h3 className="font-serif text-sm font-semibold tracking-tight text-[#947884] group-hover:text-[#C09CB4] transition-colors">
                    1. Composición corporal, músculo, cubrir proteína
                  </h3>
                </div>
                <p className="font-sans text-[11px] sm:text-xs text-[#5C5C5C] leading-relaxed font-light">
                  Asegura que tu pérdida de peso provenga exclusivamente de grasa y no de tejido magro activo. Aprende pautas científicas para cubrir tu requerimiento de proteína diario.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="p-5 rounded-2xl bg-[#F4F4F8] border border-transparent hover:border-[#9CB4C0]/20 hover:bg-white transition-all group">
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="w-8 h-8 rounded-lg bg-[#C09CB4]/10 flex items-center justify-center text-[#C09CB4]">
                    <Sparkle className="w-4 h-4" />
                  </span>
                  <h3 className="font-serif text-sm font-semibold tracking-tight text-[#947884] group-hover:text-[#C09CB4] transition-colors">
                    2. Suplementación
                  </h3>
                </div>
                <p className="font-sans text-[11px] sm:text-xs text-[#5C5C5C] leading-relaxed font-light">
                  Define los micronutrientes, minerales y apoyos esenciales necesarios para evitar deficiencias nutricionales críticas bajo el efecto de reducción de apetito.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="p-5 rounded-2xl bg-[#F4F4F8] border border-transparent hover:border-[#9CB4C0]/20 hover:bg-white transition-all group">
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="w-8 h-8 rounded-lg bg-[#9CB4C0]/10 flex items-center justify-center text-[#9CB4C0]">
                    <Activity className="w-4 h-4" />
                  </span>
                  <h3 className="font-serif text-sm font-semibold tracking-tight text-[#947884] group-hover:text-[#C09CB4] transition-colors">
                    3. Control de síntomas gastrointestinales
                  </h3>
                </div>
                <p className="font-sans text-[11px] sm:text-xs text-[#5C5C5C] leading-relaxed font-light">
                  Mitiga de manera efectiva efectos secundarios molestos como náuseas, reflujo y estreñimiento mediante hábitos y combinaciones de alimentos dirigidos.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="p-5 rounded-2xl bg-[#F4F4F8] border border-transparent hover:border-[#9CB4C0]/20 hover:bg-white transition-all group">
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="w-8 h-8 rounded-lg bg-[#C09CB4]/10 flex items-center justify-center text-[#C09CB4]">
                    <AlertCircle className="w-4 h-4" />
                  </span>
                  <h3 className="font-serif text-sm font-semibold tracking-tight text-[#947884] group-hover:text-[#C09CB4] transition-colors">
                    4. Red flags y errores comunes a evitar
                  </h3>
                </div>
                <p className="font-sans text-[11px] sm:text-xs text-[#5C5C5C] leading-relaxed font-light">
                  Identifica las alertas clínicas críticas a monitorear y los errores habituales de alimentación que debes evitar para proteger tu salud y sostener tus resultados.
                </p>
              </div>
            </motion.div>

            {/* Quick specifications / Trust Indicators */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-6 text-[11px] font-sans text-[#A0B0B8] mb-8 font-light"
            >
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#C09CB4]" />
                Solo toma 2 minutos
              </span>
              <span className="flex items-center gap-1">
                <FileText className="w-3.5 h-3.5 text-[#9CB4C0]" />
                Reporte de Perfil Clínico Seguro
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C09CB4]" />
                100% Gratuito y Confidencial
              </span>
            </motion.div>

            {/* Primary Action Button */}
            <motion.button
              variants={itemVariants}
              id="start-sublanding-quiz-btn"
              onClick={onStartQuiz}
              className="cursor-pointer group rounded-full bg-[#9CB4C0] hover:bg-[#86A0AC] px-14 py-5 text-sm font-semibold tracking-widest uppercase text-white shadow-md hover:shadow-lg hover:translate-y-[-2px] active:scale-98 transition-all duration-300 inline-flex items-center gap-2.5"
            >
              Iniciar Test Gratuito
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </motion.button>
          </div>
        </div>

        {/* Secondary Navigation Option */}
        <motion.div variants={itemVariants} className="text-center mt-8">
          <button
            onClick={onBackToCourse}
            className="cursor-pointer text-xs font-sans text-[#A0B0B8] hover:text-[#9CB4C0] underline underline-offset-4 decoration-[#A0B0B8]/40 transition-colors focus:outline-none"
          >
            Quiero conocer primero los módulos y precio del Programa Integral GLP-1 (45 Días)
          </button>
        </motion.div>

      </motion.div>
    </section>
  );
}

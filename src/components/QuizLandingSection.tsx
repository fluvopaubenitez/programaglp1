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
  CheckCircle2
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
    <section className="min-h-[85vh] py-12 px-4 sm:px-8 md:px-16 lg:px-24 flex items-center justify-center bg-[#F8F6F3]">
      <motion.div 
        className="w-full max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="flex justify-between items-center mb-6">
          <button
            onClick={onBackToCourse}
            className="cursor-pointer group text-xs font-sans text-[#2D2D2D]/70 hover:text-[#122033] transition-colors flex items-center gap-1.5 focus:outline-none"
          >
            <RotateCcw className="w-3.5 h-3.5 group-hover:-rotate-45 transition-transform" />
            Ver detalles del Programa de 45 Días
          </button>
          <span className="hidden sm:inline-block text-[10px] tracking-widest font-sans font-semibold text-[#2F4A45] uppercase">
            Valoración 100% Digital • Sin Costo
          </span>
        </motion.div>

        {/* Central Card */}
        <div className="bg-white border border-[#D6D3CF] rounded-2xl shadow-xs p-6 sm:p-12 md:p-16 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center">
            
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EFEAE4] border border-[#D6D3CF] text-[#2F4A45] text-[11px] tracking-wider uppercase font-sans font-bold mb-6"
            >
              <Sparkle className="w-3.5 h-3.5 text-[#2F4A45]" />
              Nutrición de Precisión en GLP-1
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="font-serif text-[#122033] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.12] mb-6"
            >
              ¿Cómo está respondiendo tu cuerpo al tratamiento con <span className="text-[#2F4A45] italic font-normal">GLP-1</span>?
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="font-sans text-[#2D2D2D]/80 text-sm sm:text-base md:text-lg font-normal leading-relaxed mb-10 max-w-2xl"
            >
              Identifica debilidades nutricionales críticas, mitiga síntomas digestivos y establece pautas de conservación muscular guiadas por la <strong className="text-[#122033]">Nut. Paulina Benítez</strong>.
            </motion.p>

            {/* 4 Pillars Grid Layout */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left w-full mb-10"
            >
              <div className="p-5 rounded-xl bg-[#F8F6F3] border border-[#D6D3CF]">
                <div className="flex items-center gap-3 mb-2">
                  <Flame className="w-4 h-4 text-[#2F4A45] shrink-0" />
                  <h3 className="font-serif text-sm font-bold text-[#122033]">
                    1. Preservación Muscular & Proteína
                  </h3>
                </div>
                <p className="font-sans text-xs text-[#2D2D2D]/80 leading-relaxed font-normal">
                  Asegura que tu pérdida de peso provenga exclusivamente de tejido graso y no de masa magra activa.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#F8F6F3] border border-[#D6D3CF]">
                <div className="flex items-center gap-3 mb-2">
                  <Sparkle className="w-4 h-4 text-[#2F4A45] shrink-0" />
                  <h3 className="font-serif text-sm font-bold text-[#122033]">
                    2. Estrategia de Suplementación
                  </h3>
                </div>
                <p className="font-sans text-xs text-[#2D2D2D]/80 leading-relaxed font-normal">
                  Define micronutrientes y apoyos esenciales para evitar deficiencias críticas bajo la saciedad prolongada.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#F8F6F3] border border-[#D6D3CF]">
                <div className="flex items-center gap-3 mb-2">
                  <Activity className="w-4 h-4 text-[#2F4A45] shrink-0" />
                  <h3 className="font-serif text-sm font-bold text-[#122033]">
                    3. Salud Digestiva Sintomática
                  </h3>
                </div>
                <p className="font-sans text-xs text-[#2D2D2D]/80 leading-relaxed font-normal">
                  Controla náuseas, reflujo y estreñimiento mediante ajustes nutricionales oportunos.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#F8F6F3] border border-[#D6D3CF]">
                <div className="flex items-center gap-3 mb-2">
                  <AlertCircle className="w-4 h-4 text-[#2F4A45] shrink-0" />
                  <h3 className="font-serif text-sm font-bold text-[#122033]">
                    4. Prevención del Efecto Rebote
                  </h3>
                </div>
                <p className="font-sans text-xs text-[#2D2D2D]/80 leading-relaxed font-normal">
                  Aprende a estructurar un plan de salida metabólico real para cuando concluyas tu medicación.
                </p>
              </div>
            </motion.div>

            {/* Specification indicators */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-6 text-xs font-sans text-[#2D2D2D]/70 mb-8 font-normal"
            >
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#2F4A45]" />
                Toma solo 2 minutos
              </span>
              <span className="flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#2F4A45]" />
                Reporte de Perfil Clínico
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2F4A45]" />
                100% Gratuito y Confidencial
              </span>
            </motion.div>

            <motion.button
              variants={itemVariants}
              id="start-sublanding-quiz-btn"
              onClick={onStartQuiz}
              className="cursor-pointer group rounded-xl bg-[#2F4A45] hover:bg-[#122033] px-12 py-4.5 text-xs font-semibold tracking-wider uppercase text-white shadow-xs transition-all duration-200 inline-flex items-center gap-2"
            >
              Iniciar Test Gratuito
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </motion.button>
          </div>
        </div>

        <motion.div variants={itemVariants} className="text-center mt-6">
          <button
            onClick={onBackToCourse}
            className="cursor-pointer text-xs font-sans text-[#2D2D2D]/70 hover:text-[#122033] underline underline-offset-4 transition-colors focus:outline-none"
          >
            Quiero conocer primero los detalles del Programa Integral GLP-1 (45 Días)
          </button>
        </motion.div>

      </motion.div>
    </section>
  );
}

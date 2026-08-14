/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Sparkles, 
  Calendar, 
  BookOpen, 
  FileText, 
  UtensilsCrossed, 
  UserCheck, 
  Tag, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Check
} from 'lucide-react';
import { motion } from 'motion/react';
import { 
  REEMPLAZAR_PRECIO_USD, 
  CUPON_DESCUENTO, 
  CUPON_PORCENTAJE, 
  PRECIO_CON_DESCUENTO_USD, 
  CUPON_LIMITE,
  REEMPLAZAR_LINK_ENCUADRADO 
} from '../constants';

interface HeroSectionProps {
  onStartQuiz?: () => void;
}

export default function HeroSection({ onStartQuiz }: HeroSectionProps) {
  const deliverables = [
    {
      num: "01",
      title: "Consulta Inicial",
      subtitle: "Evaluación clínica 1 a 1",
      desc: "Análisis personalizado de tu historial clínico, dosis de GLP-1, sintomatología y metas de composición corporal para definir tu estrategia inicial.",
      icon: <Calendar className="w-5 h-5 text-[#2F4A45]" />,
      badge: "Consulta 1 a 1"
    },
    {
      num: "02",
      title: "Curso GLP1",
      subtitle: "Educación de alimentación inteligente",
      desc: "Módulos prácticos en video bajo demanda para aprender qué comer, combinaciones clave, timing de nutrientes y preservación de masa muscular.",
      icon: <BookOpen className="w-5 h-5 text-[#2F4A45]" />,
      badge: "Video On-Demand"
    },
    {
      num: "03",
      title: "Ebook Especializado",
      subtitle: "Guía técnica y hábito sostenible",
      desc: "Manual digital estructurado con pautas nutricionales, manejo de saciedad, control de efectos secundarios digestivos y adaptación progresiva.",
      icon: <FileText className="w-5 h-5 text-[#2F4A45]" />,
      badge: "Guía PDF"
    },
    {
      num: "04",
      title: "Recetario (20 Recetas)",
      subtitle: "Optimizadas para saciedad y proteína",
      desc: "20 platillos deliciosos, prácticos y calculados para cubrir tu requerimiento proteico sin sobrecargar tu sistema digestivo.",
      icon: <UtensilsCrossed className="w-5 h-5 text-[#2F4A45]" />,
      badge: "20 Recetas"
    },
    {
      num: "05",
      title: "Consulta Final",
      subtitle: "Evaluación de cierre y plan de salida",
      desc: "Sesión 1 a 1 para medir tu progreso metabólico, ajustar tu pauta y entregarte la hoja de ruta para consolidar tus resultados a largo plazo.",
      icon: <UserCheck className="w-5 h-5 text-[#2F4A45]" />,
      badge: "Seguimiento 1 a 1"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 24,
        stiffness: 110,
      },
    },
  };

  return (
    <section className="relative w-full min-h-[90vh] py-14 sm:py-20 md:py-28 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden bg-[#F8F6F3]">
      
      {/* Subtle Background Geometry */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EFEAE4] rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-[#D8B8B5]/15 rounded-full blur-3xl pointer-events-none" />

      <motion.div 
        className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Pre-headline Pill */}
        <motion.div 
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFEAE4] border border-[#D6D3CF] text-[#2F4A45] text-xs font-sans font-semibold uppercase tracking-widest mb-6 shadow-2xs"
          variants={itemVariants}
        >
          <Clock className="w-3.5 h-3.5 text-[#2F4A45]" />
          Programa Integral • Acompañamiento en 45 Días
        </motion.div>

        {/* Display Headline */}
        <motion.h1 
          className="font-serif text-[#122033] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-6 max-w-4xl"
          variants={itemVariants}
        >
          Control consciente sobre tu cuerpo durante el tratamiento con <span className="text-[#2F4A45] italic font-normal">GLP-1</span>
        </motion.h1>

        {/* Support Subtitle */}
        <motion.p 
          className="font-sans text-[#2D2D2D]/80 text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-10 max-w-2xl"
          variants={itemVariants}
        >
          Nutrición funcional, evidencia científica y estrategia clínica para potenciar tu metabolismo en 45 días junto a la <strong className="text-[#122033] font-semibold">Nut. Paulina Benítez</strong>.
        </motion.p>

        {/* PROMO & COUPON HIGHLIGHT BANNER */}
        <motion.div 
          variants={itemVariants}
          className="w-full max-w-4xl mb-14 bg-[#122033] text-white p-6 sm:p-8 md:p-10 rounded-2xl border border-[#2F4A45]/40 shadow-xl relative overflow-hidden text-left"
        >
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#2F4A45]/30 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#2F4A45] px-3 py-1 rounded-md text-[11px] font-sans font-semibold uppercase tracking-wider text-white mb-3 border border-[#D8B8B5]/30">
                <Tag className="w-3.5 h-3.5 text-[#D8B8B5]" />
                Lanzamiento Exclusivo
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight">
                Acceso al programa completo por <span className="text-[#D8B8B5] font-bold">${REEMPLAZAR_PRECIO_USD} USD</span>
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#EFEAE4]/90 font-light mt-2 max-w-xl leading-relaxed">
                Aplica el cupón <span className="font-mono font-bold bg-[#2F4A45] px-2 py-0.5 rounded text-[#D8B8B5] uppercase border border-[#D8B8B5]/30">{CUPON_DESCUENTO}</span> para obtener <strong className="text-[#D8B8B5] font-semibold">{CUPON_PORCENTAJE} de descuento</strong> (${PRECIO_CON_DESCUENTO_USD} USD).
              </p>
            </div>

            <div className="shrink-0 flex flex-col items-start md:items-end gap-1 bg-[#2F4A45]/60 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-[#D6D3CF]/20">
              <span className="text-[10px] uppercase tracking-widest font-sans text-[#EFEAE4]/80 font-medium">Cupón Activo</span>
              <span className="font-mono text-xl sm:text-2xl md:text-3xl font-bold tracking-widest text-[#D8B8B5]">
                {CUPON_DESCUENTO}
              </span>
              <span className="text-[10px] text-[#D8B8B5] font-sans italic">
                * {CUPON_LIMITE}
              </span>
            </div>
          </div>
        </motion.div>

        {/* 5 DELIVERABLES SHOWCASE - EDITORIAL GRID */}
        <motion.div 
          className="w-full max-w-5xl bg-white border border-[#D6D3CF] rounded-2xl shadow-xs p-6 sm:p-10 md:p-12 mb-12 text-left relative overflow-hidden"
          variants={itemVariants}
        >
          {/* Header Bar */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#D6D3CF]/60 pb-6 mb-8 gap-4">
            <div>
              <span className="text-xs font-sans text-[#2F4A45] font-bold uppercase tracking-widest block mb-1">
                Estructura del Servicio
              </span>
              <h2 className="font-serif text-[#122033] text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                5 Componentes Estratégicos en 45 Días
              </h2>
              <p className="text-xs sm:text-sm font-sans text-[#2D2D2D]/70 font-normal mt-1">
                Acompañamiento clínico integral diseñado para mujeres inteligentes que buscan resultados medibles.
              </p>
            </div>
            
            <div className="inline-flex items-center gap-2 bg-[#EFEAE4] text-[#122033] text-xs font-semibold px-4 py-2.5 rounded-xl font-sans shrink-0 border border-[#D6D3CF]">
              <CheckCircle2 className="w-4 h-4 text-[#2F4A45]" />
              Duración: 45 Días
            </div>
          </div>

          {/* DELIVERABLES CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, index) => (
              <div 
                key={index}
                className={`bg-[#F8F6F3] p-6 rounded-xl border border-[#D6D3CF]/70 hover:border-[#122033] hover:bg-white hover:shadow-sm transition-all duration-300 flex flex-col justify-between group ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-2xl font-bold text-[#122033]">
                      {item.num}
                    </span>
                    <span className="text-[10px] font-sans font-semibold uppercase px-2.5 py-1 rounded-md bg-[#EFEAE4] text-[#2F4A45] border border-[#D6D3CF]">
                      {item.badge}
                    </span>
                  </div>

                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2.5 rounded-lg bg-white border border-[#D6D3CF] shrink-0 group-hover:bg-[#2F4A45] group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-serif text-[#122033] text-lg font-bold tracking-tight leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs font-sans text-[#2F4A45] font-medium mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs font-sans text-[#2D2D2D]/80 font-normal leading-relaxed pt-2">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#D6D3CF]/50 flex items-center justify-between text-[11px] font-sans text-[#2D2D2D]/60">
                  <span>Paso {item.num} de 05</span>
                  <span className="text-[#2F4A45] font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Incluido <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Program Summary Footer */}
          <div className="mt-8 pt-6 border-t border-[#D6D3CF]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#2D2D2D]/80">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4.5 h-4.5 text-[#2F4A45] shrink-0" />
              <span>Garantía de acompañamiento clínico personalizado y acceso permanente al material.</span>
            </div>
            <span className="font-semibold text-[#122033] font-serif text-sm italic shrink-0">
              Estructura clínica optimizada
            </span>
          </div>
        </motion.div>

        {/* Action Button & Quiz Trigger */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
          variants={itemVariants}
        >
          <a
            id="hero-buy-trigger"
            href={REEMPLAZAR_LINK_ENCUADRADO}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer group rounded-xl bg-[#2F4A45] hover:bg-[#122033] px-9 py-4.5 text-sm font-semibold tracking-wider text-white transition-all duration-200 hover:shadow-lg w-full sm:w-auto text-center flex items-center justify-center gap-2.5 uppercase shadow-xs"
          >
            <Sparkles className="w-4 h-4 text-[#D8B8B5]" />
            Inscribirme con Cupón {CUPON_DESCUENTO} →
          </a>

          {onStartQuiz && (
            <button
              onClick={onStartQuiz}
              className="cursor-pointer rounded-xl border border-[#D6D3CF] bg-white hover:bg-[#EFEAE4] px-8 py-4.5 text-sm font-semibold tracking-wider text-[#122033] transition-all duration-200 w-full sm:w-auto text-center flex items-center justify-center gap-2"
            >
              Hacer el test gratuito antes
            </button>
          )}
        </motion.div>

        <motion.p className="text-xs text-[#2D2D2D]/60 font-sans mt-4" variants={itemVariants}>
          Aplica el cupón <strong className="text-[#122033]">{CUPON_DESCUENTO}</strong> para obtener tu {CUPON_PORCENTAJE} de descuento (${PRECIO_CON_DESCUENTO_USD} USD).
        </motion.p>

      </motion.div>
    </section>
  );
}


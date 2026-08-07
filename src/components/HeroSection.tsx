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
  Award
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
      icon: <Calendar className="w-6 h-6 text-[#947884]" />,
      badge: "Consulta 1 a 1",
      tagColor: "bg-[#EAD7DB]/50 text-[#947884] border-[#C09CB4]/30",
      accent: "border-l-4 border-l-[#947884]"
    },
    {
      num: "02",
      title: "Curso GLP1",
      subtitle: "Educación de alimentación inteligente",
      desc: "Módulos prácticos en video bajo demanda para aprender qué comer, combinaciones clave, timing de nutrientes y preservación de masa muscular.",
      icon: <BookOpen className="w-6 h-6 text-[#C09CB4]" />,
      badge: "Video On-Demand",
      tagColor: "bg-[#C09CB4]/15 text-[#947884] border-[#C09CB4]/30",
      accent: "border-l-4 border-l-[#C09CB4]"
    },
    {
      num: "03",
      title: "Ebook Especializado",
      subtitle: "Guía técnica y hábito sostenible",
      desc: "Manual digital estructurado con pautas nutricionales, manejo de saciedad, control de efectos secundarios digestivos y adaptación progresiva.",
      icon: <FileText className="w-6 h-6 text-[#9CB4C0]" />,
      badge: "Guía PDF",
      tagColor: "bg-[#9CB4C0]/20 text-[#688498] border-[#9CB4C0]/30",
      accent: "border-l-4 border-l-[#9CB4C0]"
    },
    {
      num: "04",
      title: "Recetario (20 Recetas)",
      subtitle: "Optimizadas para saciedad y proteína",
      desc: "20 platillos deliciosos, prácticos y calculados para cubrir tu requerimiento proteico sin sobrecargar tu sistema digestivo.",
      icon: <UtensilsCrossed className="w-6 h-6 text-[#947884]" />,
      badge: "20 Recetas",
      tagColor: "bg-[#EAD7DB]/50 text-[#947884] border-[#C09CB4]/30",
      accent: "border-l-4 border-l-[#947884]"
    },
    {
      num: "05",
      title: "Consulta Final",
      subtitle: "Evaluación de cierre y plan de salida",
      desc: "Sesión 1 a 1 para medir tu progreso metabólico, ajustar tu pauta y entregarte la hoja de ruta para consolidar tus resultados a largo plazo.",
      icon: <UserCheck className="w-6 h-6 text-[#C09CB4]" />,
      badge: "Seguimiento 1 a 1",
      tagColor: "bg-[#C09CB4]/15 text-[#947884] border-[#C09CB4]/30",
      accent: "border-l-4 border-l-[#C09CB4]"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 24,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="relative w-full py-12 md:py-20 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden bg-[#FAF8F5]">
      
      {/* Soft Ambient Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#EAD7DB]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-[#9CB4C0]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Star Sparkle */}
      <div className="absolute top-12 left-10 opacity-70 select-none animate-pulse pointer-events-none hidden sm:block">
        <svg className="w-7 h-7 text-[#C09CB4]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
        </svg>
      </div>

      <motion.div 
        className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Pre-headline Pill */}
        <motion.div 
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAD7DB]/50 border border-[#C09CB4]/30 text-[#947884] text-xs font-sans font-semibold uppercase tracking-widest mb-5 shadow-xs"
          variants={itemVariants}
        >
          <Clock className="w-3.5 h-3.5 text-[#947884]" />
          Programa Integral Acompañado — Todo en 45 Días
        </motion.div>

        {/* Display Headline */}
        <motion.h1 
          className="font-serif text-[#C09CB4] text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-5 max-w-4xl"
          variants={itemVariants}
        >
          El programa completo para potenciar tu tratamiento con <span className="text-[#947884]">GLP-1</span> en 45 días
        </motion.h1>

        {/* Support Subtitle */}
        <motion.p 
          className="font-sans text-[#5C5C5C] text-sm sm:text-base md:text-lg font-light leading-relaxed mb-10 max-w-2xl"
          variants={itemVariants}
        >
          Combina la evaluación clínica personalizada, la educación nutricional inteligente, el recetario estratégico y las consultas de inicio y cierre con la <span className="text-[#947884] font-medium italic">Nut. Paulina Benítez</span>.
        </motion.p>

        {/* LAUNCH PROMO & COUPON HIGHLIGHT BANNER */}
        <motion.div 
          variants={itemVariants}
          className="w-full max-w-4xl mb-14 bg-gradient-to-r from-[#947884] to-[#7D636E] text-white p-6 sm:p-8 md:p-10 rounded-[32px] shadow-lg border border-white/20 relative overflow-hidden text-left"
        >
          <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white mb-2">
                <Tag className="w-3.5 h-3.5 text-amber-200" />
                Lanzamiento Especial
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight">
                Acceso completo por <span className="underline decoration-amber-300 decoration-2">${REEMPLAZAR_PRECIO_USD} USD</span>
              </h2>
              <p className="font-sans text-xs sm:text-sm text-white/90 font-light mt-1.5 max-w-xl">
                Aplica el cupón <span className="font-mono font-bold bg-white/20 px-2 py-0.5 rounded text-amber-200 uppercase">{CUPON_DESCUENTO}</span> y obtén un <strong className="font-semibold text-amber-200">{CUPON_PORCENTAJE} de descuento adicional</strong> (${PRECIO_CON_DESCUENTO_USD} USD).
              </p>
            </div>

            <div className="shrink-0 flex flex-col items-start md:items-end gap-1.5 bg-white/10 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/20">
              <span className="text-[10px] uppercase tracking-wider font-sans text-white/80 font-medium">Cupón Activo</span>
              <span className="font-mono text-xl sm:text-2xl md:text-3xl font-bold tracking-widest text-amber-200 bg-black/20 px-4 py-1.5 rounded-xl border border-amber-300/40">
                {CUPON_DESCUENTO}
              </span>
              <span className="text-[10px] text-amber-100/90 font-sans italic">
                * {CUPON_LIMITE}
              </span>
            </div>
          </div>
        </motion.div>

        {/* 5 DELIVERABLES SHOWCASE - PROMINENT & RESPONSIVE DESIGN */}
        <motion.div 
          className="w-full max-w-5xl bg-white border border-[#A0B0B8]/20 rounded-[36px] sm:rounded-[48px] shadow-sm p-6 sm:p-10 md:p-12 mb-12 text-left relative overflow-hidden"
          variants={itemVariants}
        >
          {/* Header Bar */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#A0B0B8]/15 pb-6 sm:pb-8 mb-8 sm:mb-10 gap-4">
            <div>
              <span className="text-xs font-sans text-[#A0B0B8] font-bold uppercase tracking-widest block mb-2">
                Estructura del Servicio
              </span>
              <h2 className="font-serif text-[#947884] text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
                Lo que incluye tu Programa de 45 Días
              </h2>
              <p className="text-xs sm:text-sm font-sans text-[#5C5C5C] font-light mt-1">
                Acompañamiento clínico integral, material educativo y seguimiento de inicio a fin.
              </p>
            </div>
            
            <div className="inline-flex items-center gap-2 bg-[#9CB4C0]/15 text-[#947884] text-xs font-semibold px-4 py-2.5 rounded-full font-sans shrink-0 border border-[#9CB4C0]/20">
              <CheckCircle2 className="w-4 h-4 text-[#9CB4C0]" />
              Duración Total: 45 Días
            </div>
          </div>

          {/* DELIVERABLES CARDS GRID - Responsive Layout (1 col mobile, 2 col tablet, 3 col desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, index) => (
              <div 
                key={index}
                className={`bg-[#FAF8F5] p-6 rounded-3xl border border-[#A0B0B8]/15 hover:border-[#C09CB4]/50 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${item.accent} ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div>
                  {/* Top Header: Badge & Number */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-[#C09CB4] tracking-tight">
                      {item.num}
                    </span>
                    <span className={`text-[10px] font-sans font-semibold uppercase px-3 py-1 rounded-full border ${item.tagColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="p-3 rounded-2xl bg-white border border-[#A0B0B8]/15 shadow-2xs group-hover:scale-105 transition-transform shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-serif text-[#947884] text-lg sm:text-xl font-semibold tracking-tight leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs font-sans text-[#C09CB4] font-medium mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Detailed Description */}
                  <p className="text-xs sm:text-sm font-sans text-[#5C5C5C] font-light leading-relaxed pt-2">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#A0B0B8]/10 flex items-center justify-between text-[11px] font-sans text-[#A0B0B8]">
                  <span>Paso {item.num} de 05</span>
                  <span className="text-[#947884] font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Incluido <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Program Summary Footer */}
          <div className="mt-10 pt-6 border-t border-[#A0B0B8]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#5C5C5C]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C09CB4] shrink-0" />
              <span>Garantía de acompañamiento clínico personalizado y acceso al material para siempre.</span>
            </div>
            <span className="font-semibold text-[#947884] font-serif text-sm italic shrink-0">
              Transformación sostenible en 45 días
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
            className="cursor-pointer group rounded-full bg-[#947884] hover:bg-[#7D636E] px-10 py-5 text-sm font-semibold tracking-wider text-white transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl active:translate-y-0 w-full sm:w-auto text-center flex items-center justify-center gap-2.5 uppercase shadow-md"
          >
            <Sparkles className="w-4 h-4 text-white animate-pulse" />
            Inscribirme con Cupón GLP1 →
          </a>

          {onStartQuiz && (
            <button
              onClick={onStartQuiz}
              className="cursor-pointer rounded-full border border-[#9CB4C0] hover:bg-[#9CB4C0]/10 px-8 py-5 text-sm font-semibold tracking-wider text-[#947884] transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-2"
            >
              Hacer el test gratuito antes
            </button>
          )}
        </motion.div>

        <motion.p className="text-xs text-[#A0B0B8] font-sans mt-4" variants={itemVariants}>
          Recuerda usar el cupón <strong className="text-[#947884]">GLP1</strong> para obtener tu 15% de descuento (primeras 5 personas).
        </motion.p>

      </motion.div>
    </section>
  );
}

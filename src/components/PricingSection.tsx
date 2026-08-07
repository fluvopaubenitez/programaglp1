/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  BookmarkCheck, 
  Tag, 
  Calendar, 
  BookOpen, 
  FileText, 
  UtensilsCrossed, 
  UserCheck,
  Clock,
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';
import { 
  REEMPLAZAR_PRECIO_USD, 
  CUPON_DESCUENTO,
  CUPON_PORCENTAJE,
  PRECIO_CON_DESCUENTO_USD,
  CUPON_LIMITE,
  REEMPLAZAR_LINK_ENCUADRADO,
  REEMPLAZAR_LINK_WHATSAPP
} from '../constants';

export default function PricingSection() {
  const serviceItems = [
    {
      num: '01',
      title: 'Consulta Inicial',
      subtitle: 'Evaluación clínica 1 a 1',
      desc: 'Evaluación personalizada para analizar tu historial clínico, dosis de GLP-1, síntomas actuales y metas de composición corporal.',
      icon: <Calendar className="w-6 h-6 text-[#947884]" />,
      badge: 'Consulta 1 a 1',
      accent: 'border-l-4 border-l-[#947884]'
    },
    {
      num: '02',
      title: 'Curso GLP1',
      subtitle: 'Educación en video',
      desc: 'Acceso a los módulos en video bajo demanda para aprender a estructurar tus comidas, sincronizar porciones y proteger tu masa muscular.',
      icon: <BookOpen className="w-6 h-6 text-[#C09CB4]" />,
      badge: 'Video On-Demand',
      accent: 'border-l-4 border-l-[#C09CB4]'
    },
    {
      num: '03',
      title: 'Ebook Digital',
      subtitle: 'Guía técnica paso a paso',
      desc: 'Guía técnica completa con estrategias para mitigar síntomas digestivos (náuseas, reflujo, estreñimiento) y establecer hábitos sostenibles.',
      icon: <FileText className="w-6 h-6 text-[#9CB4C0]" />,
      badge: 'Guía PDF',
      accent: 'border-l-4 border-l-[#9CB4C0]'
    },
    {
      num: '04',
      title: 'Recetario (20 Recetas)',
      subtitle: 'Alta proteína y fácil digestión',
      desc: '20 preparaciones deliciosas, prácticas y ricas en proteína biológica para mantener tu energía y saciedad día a día.',
      icon: <UtensilsCrossed className="w-6 h-6 text-[#947884]" />,
      badge: '20 Recetas',
      accent: 'border-l-4 border-l-[#947884]'
    },
    {
      num: '05',
      title: 'Consulta Final',
      subtitle: 'Evaluación de cierre',
      desc: 'Sesión clínica individual de cierre para revisar avances, ajustar tu nutrición y dejar establecido tu plan de mantenimiento.',
      icon: <UserCheck className="w-6 h-6 text-[#C09CB4]" />,
      badge: 'Seguimiento 1 a 1',
      accent: 'border-l-4 border-l-[#C09CB4]'
    }
  ];

  const includesList = [
    'Consulta clínica inicial individualizada con diagnóstico de partida.',
    'Curso GLP-1 completo en video bajo demanda para aprender qué y cómo comer.',
    'Ebook digital de alimentación inteligente con pautas de suplementación y control sintomático.',
    'Recetario exclusivo con 20 recetas optimizadas para saciedad y requerimiento proteico.',
    'Consulta clínica final para consolidar hábitos y definir tu plan de sostenibilidad.',
    'Duración total del programa acompañada durante 45 días.'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="relative w-full py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-20 bg-white border-t border-[#A0B0B8]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-sans text-[#A0B0B8] font-medium uppercase tracking-widest block mb-3">
            Oferta Integral de Acompañamiento
          </span>
          <h2 className="font-serif text-[#C09CB4] text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
            El nuevo servicio incluye <span className="text-[#947884]">5 componentes en 45 días.</span>
          </h2>
          <p className="font-sans text-[#5C5C5C] text-sm sm:text-base font-light mt-3">
            Todo lo que necesitas para asegurar tu salud, proteger tu músculo y dominar tu alimentación durante el tratamiento con GLP-1.
          </p>
          <div className="h-[1px] w-20 bg-[#C09CB4]/30 mt-6" />
        </div>

        {/* 5 Service Modules Cards - Responsive Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {serviceItems.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`bg-[#FAF8F5] p-6 sm:p-7 rounded-[32px] border border-[#A0B0B8]/15 hover:border-[#9CB4C0]/50 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between ${item.accent} ${idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl sm:text-3xl font-serif text-[#C09CB4] font-bold">
                    {item.num}
                  </span>
                  <span className="text-[10px] font-sans font-semibold uppercase px-3 py-1 rounded-full bg-white text-[#947884] border border-[#A0B0B8]/20 shadow-2xs">
                    {item.badge}
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-white w-fit border border-[#A0B0B8]/15 shrink-0 shadow-2xs">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-[#947884] text-xl font-semibold tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-xs font-sans text-[#C09CB4] font-medium">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <p className="font-sans text-[#5C5C5C] text-xs sm:text-sm leading-relaxed font-light mt-2">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#A0B0B8]/10 flex items-center justify-between text-[11px] font-sans text-[#A0B0B8]">
                <span>Componente {item.num} de 05</span>
                <span className="text-[#947884] font-medium">Incluido en 45 días</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 2-Column Split: Detailed Deliverables & Commercial Pricing Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mt-8 pb-8">
          
          {/* List Section: Service Summary */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAD7DB]/40 text-[#947884] text-xs font-sans font-semibold mb-4 w-fit border border-[#C09CB4]/20">
              <Clock className="w-3.5 h-3.5 text-[#947884]" />
              Programa Completo Acompañado en 45 Días
            </div>

            <h3 className="font-serif text-[#947884] text-2xl sm:text-3xl font-semibold tracking-wide mb-6">
              Resumen de lo que recibes
            </h3>
            
            <ul className="space-y-4 mb-8">
              {includesList.map((inc, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#9CB4C0]/20 flex items-center justify-center text-[#688498] mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="font-sans text-[#5C5C5C] text-sm font-light leading-relaxed">
                    {inc}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 text-xs text-[#A0B0B8] font-sans">
              <BookmarkCheck className="w-4 h-4 text-[#C09CB4]" />
              Programa guiado e impartido por la <span className="text-[#947884] font-medium">Nut. Paulina Benítez</span>.
            </div>
          </div>

          {/* Pricing Card with Coupon Highlight */}
          <div className="lg:col-span-5 flex justify-center">
            <div 
              className="w-full max-w-md bg-[#FAF8F5] border border-[#C09CB4]/30 p-8 flex flex-col justify-between relative shadow-sm"
              style={{ borderRadius: '40px' }}
            >
              {/* Glowing ribbon */}
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#947884] px-4 py-1 rounded-full text-[10px] font-sans font-bold text-white uppercase tracking-wider shadow-sm flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-200" />
                Lanzamiento Especial
              </div>

              <div>
                <span className="text-[10px] text-[#A0B0B8] tracking-widest uppercase font-sans font-semibold block mb-1">
                  SERVICIO COMPLETO • 45 DÍAS
                </span>
                <h4 className="font-serif text-[#947884] text-2xl font-semibold mb-4">
                  Programa Integral GLP-1
                </h4>

                {/* Price tag */}
                <div className="mb-6 flex flex-col">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-serif font-bold text-[#947884] tracking-tight">
                      ${REEMPLAZAR_PRECIO_USD}
                    </span>
                    <span className="text-sm text-[#5C5C5C] font-semibold uppercase tracking-wider font-sans">
                      USD
                    </span>
                  </div>
                  <span className="text-xs text-[#A0B0B8] font-sans mt-1">
                    Precio regular de lanzamiento
                  </span>
                </div>

                {/* PROMO COUPON HIGHLIGHT BOX */}
                <div className="bg-gradient-to-br from-[#EAD7DB]/60 to-[#F4EBEF] border border-[#C09CB4]/40 p-4.5 rounded-2xl mb-6">
                  <div className="flex items-center gap-2 text-xs font-sans font-bold text-[#947884] mb-1">
                    <Tag className="w-4 h-4 text-[#947884]" />
                    <span>¡Descuento de Lanzamiento!</span>
                  </div>
                  <p className="text-xs text-[#5C5C5C] font-sans leading-relaxed mb-3">
                    Usa el cupón <strong className="font-mono bg-white px-2 py-0.5 rounded text-[#947884] font-bold border border-[#C09CB4]/30">{CUPON_DESCUENTO}</strong> y obtén un <strong className="text-[#947884]">{CUPON_PORCENTAJE} de descuento</strong>.
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-[#C09CB4]/20 text-xs font-sans">
                    <span className="text-[#5C5C5C]">Precio final con cupón:</span>
                    <span className="font-serif text-lg font-bold text-[#947884]">${PRECIO_CON_DESCUENTO_USD} USD</span>
                  </div>
                  <span className="text-[10px] text-[#947884] font-sans block mt-1 italic">
                    ⚡ Válido exclusivamente {CUPON_LIMITE.toLowerCase()}.
                  </span>
                </div>

                <div className="h-[1px] bg-[#A0B0B8]/20 w-full mb-6" />

                <div className="space-y-2.5 mb-8 text-xs text-[#5C5C5C] font-sans">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C09CB4]" />
                    Consulta inicial + Consulta final individual
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C09CB4]" />
                    Curso GLP1 + Ebook + Recetario con 20 recetas
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C09CB4]" />
                    Acompañamiento continuo en 45 días
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href={REEMPLAZAR_LINK_ENCUADRADO}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer group flex items-center justify-center gap-2 w-full rounded-full bg-[#947884] hover:bg-[#7D636E] py-4 text-sm font-semibold text-white tracking-wider uppercase transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] text-center"
                >
                  Obtener programa con cupón GLP1
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href={REEMPLAZAR_LINK_WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer flex items-center justify-center gap-2 w-full rounded-full border border-[#25D366] text-[#128C7E] hover:bg-[#25D366]/5 py-3 text-xs font-semibold uppercase tracking-wider transition-all duration-300 text-center"
                >
                  <svg className="w-4 h-4 fill-current text-[#25D366]" viewBox="0 0 24 24">
                    <path d="M12.003 21.147l-.02.001c-1.8 0-3.565-.483-5.111-1.397l-.367-.218-3.799.996 1.013-3.704-.24-.382C2.551 14.86 1.996 12.871 2 10.824 2.01 5.408 6.425 1 11.846 1c2.628 0 5.097 1.023 6.954 2.883C20.658 5.744 21.68 8.216 21.677 10.84c-.01 5.418-4.426 9.828-9.844 9.828l-.02.001c-.004 0-.006-.001-.01-.001zM12.008.01C5.397.01.06 5.348.057 11.954c.002 2.097.549 4.142 1.587 5.946L0 24l6.335-1.662c1.751.956 3.719 1.457 5.724 1.458h.012c6.613 0 11.949-5.341 11.953-11.997.002-3.204-1.239-6.216-3.505-8.484C18.22.122 15.21.002 12.008.01z" />
                  </svg>
                  Consultar dudas por WhatsApp
                </a>

                <div className="pt-2 flex items-center justify-center gap-1.5 text-[9px] font-sans text-[#A0B0B8] uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  Plataforma de inscripción encriptada y segura.
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

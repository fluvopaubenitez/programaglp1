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
      desc: 'Análisis personalizado de tu historial clínico, dosis de GLP-1, sintomatología y metas de composición corporal.',
      icon: <Calendar className="w-5 h-5 text-[#2F4A45]" />,
      badge: 'Consulta 1 a 1'
    },
    {
      num: '02',
      title: 'Curso GLP1',
      subtitle: 'Educación de alimentación inteligente',
      desc: 'Módulos prácticos en video bajo demanda para aprender qué comer, combinaciones clave, timing y protección muscular.',
      icon: <BookOpen className="w-5 h-5 text-[#2F4A45]" />,
      badge: 'Video On-Demand'
    },
    {
      num: '03',
      title: 'Ebook Especializado',
      subtitle: 'Guía técnica y hábito sostenible',
      desc: 'Manual digital estructurado con pautas nutricionales, manejo de saciedad y control de efectos secundarios digestivos.',
      icon: <FileText className="w-5 h-5 text-[#2F4A45]" />,
      badge: 'Guía PDF'
    },
    {
      num: '04',
      title: 'Recetario (20 Recetas)',
      subtitle: 'Optimizadas para saciedad y proteína',
      desc: '20 platillos prácticos y calculados para cubrir tu requerimiento proteico sin sobrecargar tu sistema digestivo.',
      icon: <UtensilsCrossed className="w-5 h-5 text-[#2F4A45]" />,
      badge: '20 Recetas'
    },
    {
      num: '05',
      title: 'Consulta Final',
      subtitle: 'Evaluación de cierre y plan de salida',
      desc: 'Sesión 1 a 1 para medir tu progreso metabólico, ajustar tu pauta y entregarte la hoja de ruta para consolidar tus resultados.',
      icon: <UserCheck className="w-5 h-5 text-[#2F4A45]" />,
      badge: 'Seguimiento 1 a 1'
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
    <section className="relative w-full py-16 md:py-28 px-4 sm:px-8 md:px-12 lg:px-20 bg-[#F8F6F3] border-t border-[#D6D3CF] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-sans text-[#2F4A45] font-bold uppercase tracking-widest block mb-2">
            Inversión & Programa Completo
          </span>
          <h2 className="font-serif text-[#122033] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.12]">
            Estructura del servicio: <span className="text-[#2F4A45] italic font-normal">5 componentes en 45 días.</span>
          </h2>
          <p className="font-sans text-[#2D2D2D]/80 text-sm sm:text-base font-normal mt-3">
            Todo lo que necesitas para asegurar tu salud, proteger tu músculo y tomar el control de tu alimentación durante el tratamiento.
          </p>
          <div className="h-[2px] w-20 bg-[#2F4A45] mt-6" />
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
              className={`bg-white p-6 sm:p-7 rounded-xl border border-[#D6D3CF] hover:border-[#122033] hover:shadow-sm transition-all duration-200 flex flex-col justify-between ${idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl sm:text-3xl font-serif text-[#122033] font-bold">
                    {item.num}
                  </span>
                  <span className="text-[10px] font-sans font-semibold uppercase px-2.5 py-1 rounded-md bg-[#EFEAE4] text-[#2F4A45] border border-[#D6D3CF]">
                    {item.badge}
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-lg bg-[#EFEAE4] border border-[#D6D3CF] shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-[#122033] text-lg font-bold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs font-sans text-[#2F4A45] font-semibold mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <p className="font-sans text-[#2D2D2D]/80 text-xs sm:text-sm leading-relaxed font-normal mt-2">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#D6D3CF]/50 flex items-center justify-between text-[11px] font-sans text-[#2D2D2D]/60">
                <span>Componente {item.num} de 05</span>
                <span className="text-[#2F4A45] font-semibold">Incluido en 45 días</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 2-Column Split: Detailed Deliverables & Commercial Pricing Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mt-8 pb-8">
          
          {/* List Section: Service Summary */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFEAE4] text-[#2F4A45] text-xs font-sans font-semibold mb-4 w-fit border border-[#D6D3CF]">
              <Clock className="w-3.5 h-3.5 text-[#2F4A45]" />
              Programa Completo Acompañado en 45 Días
            </div>

            <h3 className="font-serif text-[#122033] text-2xl sm:text-3xl font-bold tracking-tight mb-6">
              Resumen de lo que incluye tu inversión
            </h3>
            
            <ul className="space-y-4 mb-8">
              {includesList.map((inc, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#2F4A45]/10 flex items-center justify-center text-[#2F4A45] mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="font-sans text-[#2D2D2D]/85 text-sm font-normal leading-relaxed">
                    {inc}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 text-xs text-[#2D2D2D]/70 font-sans">
              <BookmarkCheck className="w-4 h-4 text-[#2F4A45]" />
              Programa diseñado y liderado por la <strong className="text-[#122033] font-semibold">Nut. Paulina Benítez</strong>.
            </div>
          </div>

          {/* Pricing Card with Coupon Highlight */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-[#122033] border border-[#2F4A45]/40 p-8 rounded-2xl flex flex-col justify-between relative shadow-xl text-white">
              
              <div className="absolute top-0 right-6 -translate-y-1/2 bg-[#2F4A45] border border-[#D8B8B5]/30 px-3.5 py-1 rounded-md text-[10px] font-sans font-bold text-white uppercase tracking-wider shadow-sm flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#D8B8B5]" />
                Lanzamiento Exclusivo
              </div>

              <div>
                <span className="text-[10px] text-[#EFEAE4]/70 tracking-widest uppercase font-sans font-semibold block mb-1">
                  SERVICIO COMPLETO • 45 DÍAS
                </span>
                <h4 className="font-serif text-white text-2xl font-bold mb-4 tracking-tight">
                  Programa Integral GLP-1
                </h4>

                {/* Price tag */}
                <div className="mb-6 flex flex-col">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
                      ${REEMPLAZAR_PRECIO_USD}
                    </span>
                    <span className="text-sm text-[#D8B8B5] font-semibold uppercase tracking-wider font-sans">
                      USD
                    </span>
                  </div>
                  <span className="text-xs text-[#EFEAE4]/60 font-sans mt-1">
                    Precio regular de lanzamiento
                  </span>
                </div>

                {/* PROMO COUPON HIGHLIGHT BOX */}
                <div className="bg-[#2F4A45]/60 border border-[#D8B8B5]/30 p-4.5 rounded-xl mb-6">
                  <div className="flex items-center gap-2 text-xs font-sans font-bold text-[#D8B8B5] mb-1">
                    <Tag className="w-4 h-4 text-[#D8B8B5]" />
                    <span>¡Cupón especial de lanzamiento!</span>
                  </div>
                  <p className="text-xs text-[#EFEAE4]/90 font-sans leading-relaxed mb-3">
                    Usa el cupón <strong className="font-mono bg-[#122033] px-2 py-0.5 rounded text-[#D8B8B5] font-bold border border-[#D8B8B5]/30">{CUPON_DESCUENTO}</strong> y obtén un <strong className="text-[#D8B8B5]">{CUPON_PORCENTAJE} de descuento</strong>.
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-[#D8B8B5]/20 text-xs font-sans">
                    <span className="text-[#EFEAE4]">Precio final con cupón:</span>
                    <span className="font-serif text-xl font-bold text-[#D8B8B5]">${PRECIO_CON_DESCUENTO_USD} USD</span>
                  </div>
                  <span className="text-[10px] text-[#D8B8B5]/80 font-sans block mt-1.5 italic">
                    * Válido {CUPON_LIMITE.toLowerCase()}.
                  </span>
                </div>

                <div className="h-[1px] bg-white/10 w-full mb-6" />

                <div className="space-y-2.5 mb-8 text-xs text-[#EFEAE4]/80 font-sans">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D8B8B5]" />
                    Consulta inicial + Consulta final individual
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D8B8B5]" />
                    Curso GLP1 + Ebook + Recetario con 20 recetas
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D8B8B5]" />
                    Acompañamiento clínico continuo durante 45 días
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href={REEMPLAZAR_LINK_ENCUADRADO}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer group flex items-center justify-center gap-2 w-full rounded-xl bg-[#2F4A45] hover:bg-white hover:text-[#122033] py-4 text-xs font-semibold text-white tracking-wider uppercase transition-all duration-200 text-center shadow-xs"
                >
                  Inscribirme con cupón GLP1
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href={REEMPLAZAR_LINK_WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer flex items-center justify-center gap-2 w-full rounded-xl border border-white/20 text-[#EFEAE4] hover:bg-white/5 py-3 text-xs font-semibold uppercase tracking-wider transition-all duration-200 text-center"
                >
                  <svg className="w-4 h-4 fill-current text-emerald-400" viewBox="0 0 24 24">
                    <path d="M12.003 21.147l-.02.001c-1.8 0-3.565-.483-5.111-1.397l-.367-.218-3.799.996 1.013-3.704-.24-.382C2.551 14.86 1.996 12.871 2 10.824 2.01 5.408 6.425 1 11.846 1c2.628 0 5.097 1.023 6.954 2.883C20.658 5.744 21.68 8.216 21.677 10.84c-.01 5.418-4.426 9.828-9.844 9.828l-.02.001c-.004 0-.006-.001-.01-.001zM12.008.01C5.397.01.06 5.348.057 11.954c.002 2.097.549 4.142 1.587 5.946L0 24l6.335-1.662c1.751.956 3.719 1.457 5.724 1.458h.012c6.613 0 11.949-5.341 11.953-11.997.002-3.204-1.239-6.216-3.505-8.484C18.22.122 15.21.002 12.008.01z" />
                  </svg>
                  Consultar dudas por WhatsApp
                </a>

                <div className="pt-2 flex items-center justify-center gap-1.5 text-[9px] font-sans text-[#EFEAE4]/60 uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Plataforma de pago encriptada y segura.
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}


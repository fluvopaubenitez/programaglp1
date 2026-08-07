/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  MessageSquare, 
  ArrowRight, 
  FileText, 
  AlertTriangle,
  RotateCcw,
  Sparkle,
  Bookmark
} from 'lucide-react';
import { QuizAnswers, LeadData, ProfileId } from '../types';
import { PROFILE_DETAILS } from '../quizData';
import { 
  REEMPLAZAR_LINK_WHATSAPP, 
  REEMPLAZAR_LINK_ENCUADRADO 
} from '../constants';

interface DiagnosticResultsProps {
  answers: QuizAnswers;
  lead: LeadData;
  profileId: ProfileId;
  onRestart: () => void;
}

export default function DiagnosticResults({ answers, lead, profileId, onRestart }: DiagnosticResultsProps) {
  const content = PROFILE_DETAILS[profileId];

  return (
    <section className="min-h-[90vh] py-12 px-4 sm:px-12 md:px-24 bg-[#FAF8F5] flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white border border-[#A0B0B8]/15 rounded-[48px] shadow-sm p-8 sm:p-12 relative overflow-hidden">
        
        {/* Sparkle decorative star */}
        <div className="absolute top-12 right-12 opacity-40 select-none animate-pulse">
          <Sparkle className="w-6 h-6 text-[#C09CB4]" />
        </div>

        {/* Results title block */}
        <div className="mb-8">
          <span className="bg-[#9CB4C0]/15 text-[#947884] text-[10px] sm:text-xs font-sans font-semibold px-3 py-1.5 rounded-full uppercase tracking-widest inline-block mb-3">
            ★ Reporte Generado Exclusivo
          </span>
          <h2 className="font-serif text-[#C09CB4] text-3xl sm:text-5xl font-semibold tracking-tight leading-tight">
            Tu diagnóstico, <span className="text-[#947884]">{lead.nombre}</span>.
          </h2>
          <div className="h-[2px] w-24 bg-[#C09CB4]/30 mt-4" />
        </div>

        {/* Profile Card Container (Asymmetric design) */}
        <div className="bg-[#F4F4F8] rounded-[32px] p-6 sm:p-8 border border-[#A0B0B8]/10 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <p className="text-[10px] text-[#A0B0B8] uppercase tracking-widest font-mono">
                Segmentación Clínica Determinada
              </p>
              <h3 className="font-serif text-[#947884] text-2xl font-bold italic">
                {content.title}
              </h3>
            </div>
            <div className="text-[11px] text-[#A0B0B8] font-sans">
              ID del lead: {lead.whatsapp.slice(-4)}-{lead.nombre.slice(0, 3).toUpperCase()}
            </div>
          </div>

          <p className="text-[#C09CB4] font-serif text-lg sm:text-xl italic font-medium leading-relaxed mb-4">
            "{content.subtitle}"
          </p>

          <p className="font-sans text-[#5C5C5C] text-sm leading-relaxed font-light">
            {content.diagnosis}
          </p>
        </div>

        {/* Core Pillars actionable list */}
        <div className="mb-10">
          <h4 className="font-serif text-[#947884] text-lg font-semibold tracking-wide mb-5 flex items-center gap-2">
            <Bookmark className="w-4.5 h-4.5 text-[#C09CB4]" />
            Lo que necesitas trabajar ahora:
          </h4>

          <div className="space-y-4">
            {content.points.map((point, i) => (
              <div key={i} className="flex items-start gap-3.5 bg-white p-4 rounded-2xl border border-[#A0B0B8]/10">
                <div className="w-6 h-6 rounded-full bg-[#EAD7DB]/50 text-[#947884] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <p className="font-sans text-[#5C5C5C] text-sm leading-relaxed font-light">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer brief */}
        <div className="flex items-start gap-2.5 bg-[#9CB4C0]/5 border border-[#9CB4C0]/10 p-4 rounded-2xl mb-10">
          <AlertTriangle className="w-4 h-4 text-[#A0B0B8] mt-0.5 shrink-0" />
          <p className="text-[10px] sm:text-xs text-[#5C5C5C] font-sans leading-relaxed">
            <span className="font-medium text-[#947884]">Aviso médico:</span> Este diagnóstico es únicamente orientativo y educativo. No reemplaza, altera ni anula la indicación particular de tu médico endocrinólogo ni de tu nutriólogo clínico tratante.
          </p>
        </div>

        {/* HIGH-EMPHASIS COURSE PURCHASE CTA */}
        <div className="mt-8 mb-6">
          <div className="relative overflow-hidden rounded-[36px] bg-[#947884] p-8 text-white shadow-md border border-[#947884]/10 transition-all duration-300 hover:shadow-lg">
            {/* Subtle background glow or sparkle decoration */}
            <div className="absolute top-0 right-0 -translate-y-4 translate-x-4 opacity-10 pointer-events-none select-none">
              <svg className="w-48 h-48 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-md">
                <span className="inline-block text-[10px] uppercase tracking-widest font-sans font-bold bg-white/20 px-2.5 py-1 rounded-full mb-3 text-white">
                  Acompañamiento en 45 Días
                </span>
                <h4 className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight mb-2">
                  Programa Integral GLP-1 ($197 USD)
                </h4>
                <p className="font-sans text-xs text-white/90 font-light leading-relaxed mb-3">
                  Incluye: 1. Consulta Inicial, 2. Curso GLP1, 3. Ebook, 4. Recetario (20 recetas) y 5. Consulta Final en 45 días.
                </p>
                <div className="inline-block bg-white/15 px-3 py-1 rounded-lg text-xs font-sans text-amber-200 border border-white/20">
                  🎁 Cupón <strong className="font-mono text-white">GLP1</strong> = 15% OFF ($167.45 USD) para las primeras 5 personas.
                </div>
              </div>

              <div className="shrink-0 flex flex-col gap-2">
                <a
                  href={REEMPLAZAR_LINK_ENCUADRADO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#947884] font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:bg-neutral-50 hover:shadow-md hover:translate-y-[-1px] text-center"
                >
                  <Sparkle className="w-4 h-4 text-[#947884] animate-pulse" />
                  Inscribirme con Cupón GLP1
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <span className="text-[10px] text-center text-white/70 font-sans">
                  Acceso inmediato • Inscripción segura
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* SECONDARY LOWER FRICTION CTA (WhatsApp Support) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-[#9CB4C0]/10 border border-[#9CB4C0]/15">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#947884] font-serif">¿Dudas antes de comprar?</p>
              <p className="text-[11px] text-[#5C5C5C] font-light">Platica con Paulina y otras pacientes en el grupo de apoyo gratuito.</p>
            </div>
          </div>
          <a
            href={REEMPLAZAR_LINK_WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer font-sans text-xs font-semibold text-[#947884] hover:text-[#7D636E] underline flex items-center gap-1 shrink-0"
          >
            Únete al grupo gratis
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        {/* Restart link action code */}
        <div className="mt-10 text-center border-t border-[#F4F4F8] pt-6">
          <button
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onRestart(); }}
            id="restart-quiz-btn"
            onClick={onRestart}
            className="cursor-pointer text-xs text-[#A0B0B8] hover:text-[#947884] transition-colors inline-flex items-center gap-1.5 font-sans focus:outline-none"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Rehacer el test de diagnóstico
          </button>
        </div>

      </div>
    </section>
  );
}

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
  REEMPLAZAR_LINK_ENCUADRADO,
  CUPON_DESCUENTO,
  CUPON_PORCENTAJE,
  CUPON_LIMITE,
  PRECIO_CON_DESCUENTO_USD,
  PRECIO_CON_DESCUENTO_MXN,
  REEMPLAZAR_PRECIO_USD,
  REEMPLAZAR_PRECIO_MXN
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
    <section className="min-h-[90vh] py-12 px-4 sm:px-12 md:px-24 bg-[#F8F6F3] flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white border border-[#D6D3CF] rounded-2xl shadow-xs p-8 sm:p-12 relative overflow-hidden">
        
        {/* Results title block */}
        <div className="mb-8">
          <span className="bg-[#EFEAE4] text-[#2F4A45] text-xs font-sans font-bold px-3 py-1.5 rounded-md uppercase tracking-widest inline-block mb-3 border border-[#D6D3CF]">
            Reporte de Diagnóstico Personalizado
          </span>
          <h2 className="font-serif text-[#122033] text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
            Tu diagnóstico, <span className="text-[#2F4A45] italic font-normal">{lead.nombre}</span>.
          </h2>
          <div className="h-[2px] w-20 bg-[#2F4A45] mt-4" />
        </div>

        {/* Profile Card Container */}
        <div className="bg-[#F8F6F3] rounded-xl p-6 sm:p-8 border border-[#D6D3CF] mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
            <div>
              <p className="text-[10px] text-[#2F4A45] uppercase tracking-widest font-sans font-bold">
                Perfil Metabólico & Nutricional
              </p>
              <h3 className="font-serif text-[#122033] text-2xl font-bold">
                {content.title}
              </h3>
            </div>
            <div className="text-[11px] text-[#2D2D2D]/60 font-sans">
              Paciente: {lead.nombre}
            </div>
          </div>

          <p className="text-[#2F4A45] font-serif text-lg sm:text-xl italic font-normal mb-4">
            "{content.subtitle}"
          </p>

          <p className="font-sans text-[#2D2D2D]/80 text-sm leading-relaxed font-normal">
            {content.diagnosis}
          </p>
        </div>

        {/* Core Pillars list */}
        <div className="mb-8">
          <h4 className="font-serif text-[#122033] text-lg font-bold tracking-tight mb-4 flex items-center gap-2">
            <Bookmark className="w-4.5 h-4.5 text-[#2F4A45]" />
            Acciones clave recomendadas:
          </h4>

          <div className="space-y-3">
            {content.points.map((point, i) => (
              <div key={i} className="flex items-start gap-3 bg-[#F8F6F3] p-4 rounded-xl border border-[#D6D3CF]">
                <div className="w-5 h-5 rounded-full bg-[#2F4A45] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 font-sans">
                  {i + 1}
                </div>
                <p className="font-sans text-[#2D2D2D] text-xs sm:text-sm leading-relaxed font-normal">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="flex items-start gap-2.5 bg-[#EFEAE4] border border-[#D6D3CF] p-4 rounded-xl mb-8">
          <AlertTriangle className="w-4 h-4 text-[#2F4A45] mt-0.5 shrink-0" />
          <p className="text-xs text-[#2D2D2D]/80 font-sans leading-relaxed">
            <strong className="text-[#122033]">Nota médica:</strong> Este informe es puramente orientativo y educativo. No sustituye la consulta médica presencial ni las pautas de tu profesional de salud tratante.
          </p>
        </div>

        {/* COURSE PURCHASE CTA */}
        <div className="mb-6">
          <div className="rounded-2xl bg-[#122033] p-6 sm:p-8 text-white shadow-md border border-[#2F4A45]/40">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-md">
                <span className="inline-block text-[10px] uppercase tracking-widest font-sans font-bold bg-[#2F4A45] px-2.5 py-1 rounded-md mb-3 text-white border border-[#D8B8B5]/30">
                  Programa Integral • 45 Días
                </span>
                <h4 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight mb-2">
                  Programa Integral GLP-1
                </h4>
                <p className="font-sans text-xs text-[#EFEAE4]/80 leading-relaxed mb-3">
                  Incluye: Consulta Inicial, Curso GLP1, Ebook, Recetario con 20 recetas y Consulta Final en 45 días.
                </p>
                <div className="inline-block bg-[#2F4A45]/60 px-3 py-1.5 rounded-lg text-xs font-sans text-[#D8B8B5] border border-[#D8B8B5]/30">
                  🎁 Cupón <strong className="font-mono text-white">{CUPON_DESCUENTO}</strong> = {CUPON_PORCENTAJE} OFF (${PRECIO_CON_DESCUENTO_USD} USD / ${PRECIO_CON_DESCUENTO_MXN} MXN) {CUPON_LIMITE.toLowerCase()}.
                </div>
              </div>

              <div className="shrink-0 flex flex-col gap-2">
                <a
                  href={REEMPLAZAR_LINK_ENCUADRADO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2F4A45] text-white hover:bg-white hover:text-[#122033] font-semibold text-xs uppercase tracking-wider transition-all duration-200 text-center"
                >
                  Inscribirme con Cupón {CUPON_DESCUENTO}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Support CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-xl bg-[#F8F6F3] border border-[#D6D3CF]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#122033] font-sans">¿Tienes dudas antes de comenzar?</p>
              <p className="text-xs text-[#2D2D2D]/70 font-sans">Habla directamente con nuestro equipo por WhatsApp.</p>
            </div>
          </div>
          <a
            href={REEMPLAZAR_LINK_WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer font-sans text-xs font-bold text-[#2F4A45] hover:text-[#122033] underline flex items-center gap-1 shrink-0"
          >
            Consultar por WhatsApp
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Restart link */}
        <div className="mt-8 text-center border-t border-[#D6D3CF] pt-6">
          <button
            id="restart-quiz-btn"
            onClick={onRestart}
            className="cursor-pointer text-xs text-[#2D2D2D]/70 hover:text-[#122033] transition-colors inline-flex items-center gap-1.5 font-sans focus:outline-none"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Rehacer el test de diagnóstico
          </button>
        </div>

      </div>
    </section>
  );
}


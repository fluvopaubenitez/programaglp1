/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  ArrowRight, 
  User, 
  Mail, 
  Phone, 
  CheckCircle, 
  Sparkle,
  Loader2
} from 'lucide-react';
import { QUESTIONS } from '../quizData';
import { QuizAnswers, LeadData } from '../types';
import { REEMPLAZAR_ENDPOINT_LEADS } from '../constants';

interface DiagnosticsQuizProps {
  onQuizComplete: (answers: QuizAnswers, lead: LeadData) => void;
  onBackToLanding: () => void;
}

const COUNTRY_CODES = [
  { code: '+52', name: 'México' },
  { code: '+1', name: 'EE.UU.' },
  { code: '+34', name: 'España' },
  { code: '+57', name: 'Colombia' },
  { code: '+54', name: 'Argentina' },
  { code: '+56', name: 'Chile' },
  { code: '+51', name: 'Perú' },
  { code: '+593', name: 'Ecuador' },
  { code: '+506', name: 'Costa Rica' },
];

export default function DiagnosticsQuiz({ onQuizComplete, onBackToLanding }: DiagnosticsQuizProps) {
  // Funnel stage: -1 is Paso 0 (Captura), 0 to 5 are QUESTIONS P1 to P6
  const [step, setStep] = useState<number>(-1);
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);

  // Form states
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [countryCode, setCountryCode] = useState('+52');
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState('');

  // Answers state
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({});

  const optionsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const optionItemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 15
      }
    }
  };

  const sanitizeInput = (val: string): string => {
    return val
      .replace(/<[^>]*>/g, '')
      .replace(/[^\w\s\d@.,\-_+áéíóúñÁÉÍÓÚÑ]/gi, '')
      .trim();
  };

  const isEmailValid = (e: string) => {
    const trimmed = e.trim();
    if (trimmed.length > 80) return false;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
  };

  const isPhoneValid = (p: string) => {
    const cleaned = p.replace(/\s+/g, '');
    if (cleaned.length < 8 || cleaned.length > 15) return false;
    return /^\d{8,15}$/.test(cleaned);
  };

  const isFormValid = 
    nombre.trim().length >= 2 && 
    nombre.trim().length <= 60 && 
    isEmailValid(correo) && 
    isPhoneValid(whatsapp) && 
    consent;

  const verifyRateLimit = (): boolean => {
    try {
      const now = Date.now();
      const lastSub = localStorage.getItem('np_glp1_last_sub') || '0';
      const count = parseInt(localStorage.getItem('np_glp1_sub_count') || '0', 10);

      if (now - parseInt(lastSub, 10) > 600000) {
        localStorage.setItem('np_glp1_sub_count', '1');
        localStorage.setItem('np_glp1_last_sub', now.toString());
        return true;
      }

      if (count >= 5) {
        return false;
      }

      localStorage.setItem('np_glp1_sub_count', (count + 1).toString());
      localStorage.setItem('np_glp1_last_sub', now.toString());
      return true;
    } catch (_) {
      return true;
    }
  };

  const handleStartQuiz = async () => {
    if (!isFormValid || isSubmittingLead) return;

    if (honeypot.trim() !== '') {
      setStep(0);
      return;
    }

    const sanitizedNombre = sanitizeInput(nombre);
    const sanitizedCorreo = correo.trim().toLowerCase();
    const sanitizedWhatsapp = whatsapp.trim().replace(/\s+/g, '');

    const leadInfo: LeadData = {
      nombre: sanitizedNombre,
      correo: sanitizedCorreo,
      whatsapp: `${countryCode}${sanitizedWhatsapp}`,
      countryCode,
      consent,
      timestamp: new Date().toISOString()
    };

    setIsSubmittingLead(true);
    const isAllowedByRateLimit = verifyRateLimit();

    if (isAllowedByRateLimit && REEMPLAZAR_ENDPOINT_LEADS && REEMPLAZAR_ENDPOINT_LEADS.trim() !== '') {
      try {
        const csrfToken = Math.random().toString(36).substring(2, 15);
        await fetch(REEMPLAZAR_ENDPOINT_LEADS, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify({
            ...leadInfo,
            source: 'NP GLP-1 Course Diagnostic',
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            csrf_token: csrfToken,
            security_check: 'OK_FRONTEND_VALID'
          })
        });
      } catch (err) {
        console.warn('Silent registration failure:', err);
      }
    }

    setIsSubmittingLead(false);
    setStep(0);
  };

  const handleSelectOption = (questionId: keyof QuizAnswers, val: string) => {
    const updatedAnswers = { ...answers, [questionId]: val };
    setAnswers(updatedAnswers);

    setTimeout(() => {
      if (step < QUESTIONS.length - 1) {
        setStep(step + 1);
      } else {
        const finalAnswers: QuizAnswers = {
          p1: updatedAnswers.p1 || 'a',
          p2: updatedAnswers.p2 || 'a',
          p3: updatedAnswers.p3 || 'd',
          p4: updatedAnswers.p4 || 'c',
          p5: updatedAnswers.p5 || 'd',
          p6: updatedAnswers.p6 || 'd',
        };
        onQuizComplete(finalAnswers, {
          nombre: nombre.trim(),
          correo: correo.trim(),
          whatsapp: `${countryCode}${whatsapp.trim().replace(/\s+/g, '')}`,
          countryCode,
          consent,
          timestamp: new Date().toISOString()
        });
      }
    }, 220);
  };

  const handleBack = () => {
    if (step === -1) {
      onBackToLanding();
    } else {
      setStep(step - 1);
    }
  };

  const progressPercent = step === -1 ? 0 : Math.round(((step + 1) / QUESTIONS.length) * 100);

  return (
    <section className="min-h-[85vh] py-12 px-4 sm:px-12 md:px-24 flex items-center justify-center bg-[#F8F6F3]">
      <div className="w-full max-w-2xl bg-white border border-[#D6D3CF] rounded-2xl shadow-xs p-6 sm:p-10 relative overflow-hidden">
        
        {/* Back navigation button */}
        <button
          onClick={handleBack}
          className="cursor-pointer mb-6 text-xs font-sans text-[#2D2D2D]/70 flex items-center gap-1.5 hover:text-[#122033] transition-colors focus:outline-none"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          {step === -1 ? "Volver a la landing" : "Pregunta anterior"}
        </button>

        {/* Progress tracker elements */}
        {step >= 0 && (
          <div className="mb-8">
            <div className="flex justify-between items-center text-[10px] text-[#2D2D2D]/60 uppercase tracking-wider mb-2 font-sans font-semibold">
              <span>Test Diagnóstico GLP-1</span>
              <span>Pregunta {step + 1} de {QUESTIONS.length} ({progressPercent}%)</span>
            </div>
            <div className="w-full h-1.5 bg-[#EFEAE4] rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-[#2F4A45]" 
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          {step === -1 ? (
            /* PASO 0: CAPTURA DE DATOS */
            <motion.div
              key="step-lead"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col"
            >
              <div className="flex items-center gap-2 mb-3">
                <Sparkle className="w-4 h-4 text-[#2F4A45]" />
                <span className="text-xs uppercase tracking-widest font-sans font-bold text-[#2F4A45]">
                  Test de Evaluación
                </span>
              </div>

              <h2 className="font-serif text-[#122033] text-2xl sm:text-3xl font-bold tracking-tight pb-2 leading-tight">
                Antes de iniciar, ¿a dónde enviamos tu diagnóstico?
              </h2>
              <p className="text-xs sm:text-sm text-[#2D2D2D]/80 leading-relaxed font-normal mb-6">
                Tus respuestas serán evaluadas según los criterios de nutrición funcional de Paulina Benítez. Al finalizar obtendrás una valoración inmediata.
              </p>

              <div className="space-y-4 mb-6">
                <div className="absolute opacity-0 pointer-events-none w-0 h-0 overflow-hidden" aria-hidden="true">
                  <label htmlFor="input-website">Dejar vacío</label>
                  <input
                    id="input-website"
                    type="text"
                    tabIndex={-1}
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    autoComplete="off"
                  />
                </div>
                
                {/* Nombre */}
                <div>
                  <label htmlFor="input-nombre" className="block text-xs font-sans text-[#122033] font-semibold mb-1.5 pl-1">
                    Nombre completo
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#2D2D2D]/40" />
                    <input
                      id="input-nombre"
                      type="text"
                      maxLength={60}
                      className="w-full pl-10 pr-4 py-3 bg-[#F8F6F3] focus:bg-white border border-[#D6D3CF] focus:border-[#122033] rounded-xl text-xs sm:text-sm font-sans text-[#2D2D2D] focus:outline-none transition-all"
                      placeholder="Ej. Mariana Álvarez"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                    />
                  </div>
                </div>

                {/* Correo Electrónico */}
                <div>
                  <label htmlFor="input-correo" className="block text-xs font-sans text-[#122033] font-semibold mb-1.5 pl-1">
                    Correo electrónico
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#2D2D2D]/40" />
                    <input
                      id="input-correo"
                      type="email"
                      maxLength={80}
                      className="w-full pl-10 pr-4 py-3 bg-[#F8F6F3] focus:bg-white border border-[#D6D3CF] focus:border-[#122033] rounded-xl text-xs sm:text-sm font-sans text-[#2D2D2D] focus:outline-none transition-all"
                      placeholder="Ej. mariana@correo.com"
                      value={correo}
                      onChange={(e) => setCorreo(e.target.value)}
                    />
                  </div>
                </div>

                {/* WhatsApp */}
                <div>
                  <label htmlFor="input-whatsapp" className="block text-xs font-sans text-[#122033] font-semibold mb-1.5 pl-1">
                    WhatsApp para soporte
                  </label>
                  <div className="flex gap-2">
                    <div className="relative">
                      <select
                        aria-label="Código de país WhatsApp"
                        className="appearance-none h-full pl-3 pr-8 py-3 bg-[#F8F6F3] border border-[#D6D3CF] rounded-xl text-xs font-sans text-[#2D2D2D] focus:outline-none focus:border-[#122033] cursor-pointer"
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                      >
                        {COUNTRY_CODES.map((cc) => (
                          <option key={cc.code} value={cc.code}>
                            {cc.code} ({cc.name})
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-2.5 flex items-center text-[#2D2D2D]/40 text-xs">
                        ▼
                      </div>
                    </div>
                    <div className="relative flex-1">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#2D2D2D]/40" />
                      <input
                        id="input-whatsapp"
                        type="tel"
                        maxLength={15}
                        className="w-full pl-10 pr-4 py-3 bg-[#F8F6F3] focus:bg-white border border-[#D6D3CF] focus:border-[#122033] rounded-xl text-xs sm:text-sm font-sans text-[#2D2D2D] focus:outline-none transition-all"
                        placeholder="Mínimo 8 dígitos"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value.replace(/\D/g, ''))}
                      />
                    </div>
                  </div>
                </div>

              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-3 mb-8">
                <input
                  id="consent-checkbox"
                  type="checkbox"
                  className="w-4 h-4 mt-0.5 border-[#D6D3CF] rounded text-[#2F4A45] focus:ring-[#2F4A45] cursor-pointer"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                />
                <label htmlFor="consent-checkbox" className="text-[11px] text-[#2D2D2D]/80 leading-normal font-sans cursor-pointer select-none">
                  Acepto recibir mi diagnóstico personalizado y contenido exclusivo de Paulina Benítez.
                </label>
              </div>

              {/* Action Button */}
              <button
                id="start-survey-action"
                onClick={handleStartQuiz}
                disabled={!isFormValid || isSubmittingLead}
                className="cursor-pointer group flex items-center justify-center gap-2 rounded-xl py-4 text-xs font-semibold tracking-wider text-white uppercase transition-all duration-200 w-full disabled:opacity-50 disabled:cursor-not-allowed bg-[#2F4A45] hover:bg-[#122033]"
              >
                {isSubmittingLead ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Enviando datos...
                  </>
                ) : (
                  <>
                    Empezar el test gratuito
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </motion.div>
          ) : (
            /* QUESTIONS STEP-BY-STEP */
            <motion.div
              key={`question-${step}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col"
            >
              <div className="mb-6">
                <span className="text-xs font-sans text-[#2F4A45] font-bold uppercase tracking-wider block mb-2">
                  Protocolo de Diagnóstico
                </span>
                <h3 className="font-serif text-[#122033] text-xl sm:text-2xl font-bold leading-relaxed">
                  {QUESTIONS[step].text}
                </h3>
              </div>

              <motion.div 
                variants={optionsContainerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-3 mb-6"
              >
                {QUESTIONS[step].options.map((option) => {
                  const isSelected = answers[QUESTIONS[step].id] === option.value;
                  return (
                    <motion.div key={option.value} variants={optionItemVariants}>
                      <button
                        onClick={() => handleSelectOption(QUESTIONS[step].id, option.value)}
                        className={`cursor-pointer w-full text-left p-4 rounded-xl border text-xs sm:text-sm font-sans transition-all duration-200 flex items-center justify-between ${
                          isSelected 
                            ? 'bg-[#122033] border-[#122033] text-white font-medium' 
                            : 'bg-[#F8F6F3] border-[#D6D3CF] text-[#2D2D2D] hover:bg-white hover:border-[#122033]'
                        }`}
                      >
                        <span className="pr-2">{option.text}</span>
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                          isSelected 
                            ? 'border-white bg-white' 
                            : 'border-[#D6D3CF] bg-white'
                        }`}>
                          {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-[#122033]" />}
                        </div>
                      </button>
                    </motion.div>
                  );
                })}
              </motion.div>

              <div className="flex justify-between items-center pt-2 border-t border-[#D6D3CF]">
                <button
                  type="button"
                  onClick={handleBack}
                  className="cursor-pointer group inline-flex items-center gap-1.5 text-xs font-semibold text-[#122033] hover:text-[#2F4A45] transition-colors py-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
                  Volver atrás
                </button>
                <span className="text-[10px] text-[#2D2D2D]/60 font-sans italic">
                  Paso {step + 1} de 6
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}


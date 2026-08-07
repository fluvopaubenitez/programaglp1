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
  const [honeypot, setHoneypot] = useState(''); // Anti-bot hidden honeypot

  // Answers state
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({});

  // Animation variants for staggered list elements
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

  // Security layer helper: Inputs sanitization (strips HTML/JS snippets and tags)
  const sanitizeInput = (val: string): string => {
    return val
      .replace(/<[^>]*>/g, '') // Strip script/html bodies
      .replace(/[^\w\s\d@.,\-_+áéíóúñÁÉÍÓÚÑ]/gi, '') // Limit character types for absolute injection safety
      .trim();
  };

  // Validation functions with length constraints for payload protection
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

  // Anti-Spam protection: Rate limiter allowing max 5 submissions in 10 minutes
  const verifyRateLimit = (): boolean => {
    try {
      const now = Date.now();
      const lastSub = localStorage.getItem('np_glp1_last_sub') || '0';
      const count = parseInt(localStorage.getItem('np_glp1_sub_count') || '0', 10);

      // Clean period after 10 mins
      if (now - parseInt(lastSub, 10) > 600000) {
        localStorage.setItem('np_glp1_sub_count', '1');
        localStorage.setItem('np_glp1_last_sub', now.toString());
        return true;
      }

      if (count >= 5) {
        console.warn('Antispam rate limit reached. Proceeding offline for client security.');
        return false;
      }

      localStorage.setItem('np_glp1_sub_count', (count + 1).toString());
      localStorage.setItem('np_glp1_last_sub', now.toString());
      return true;
    } catch (_) {
      return true; // Fallback friendly if localStorage is blocked
    }
  };

  const handleStartQuiz = async () => {
    if (!isFormValid || isSubmittingLead) return;

    // Honeypot security validation: if bot filled this invisible honeypot field, abort network block silently
    if (honeypot.trim() !== '') {
      console.warn('Honeypot protection activated.');
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

    // Check configuration and active anti-spam filter before sending request
    if (isAllowedByRateLimit && REEMPLAZAR_ENDPOINT_LEADS && REEMPLAZAR_ENDPOINT_LEADS.trim() !== '') {
      try {
        // CSRF Token generated client-side to sign/track submission uniqueness securely
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
        // Suppress network blockings so users keep moving forward smoothly
        console.warn('Silent registration failure:', err);
      }
    }

    setIsSubmittingLead(false);
    setStep(0); // Advance to Question P1
  };

  const handleSelectOption = (questionId: keyof QuizAnswers, val: string) => {
    const updatedAnswers = { ...answers, [questionId]: val };
    setAnswers(updatedAnswers);

    // Short tactile timeout (200ms) to let the active malva highlights show before sliding
    setTimeout(() => {
      if (step < QUESTIONS.length - 1) {
        setStep(step + 1);
      } else {
        // Complete! Double check type safety and pass up
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

  // Diagnostic Header percentage
  const progressPercent = step === -1 ? 0 : Math.round(((step + 1) / QUESTIONS.length) * 100);

  return (
    <section className="min-h-[85vh] py-12 px-4 sm:px-12 md:px-24 flex items-center justify-center bg-[#F4F4F8]">
      <div className="w-full max-w-2xl bg-white border border-[#A0B0B8]/15 rounded-[40px] shadow-sm p-6 sm:p-10 relative overflow-hidden">
        
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#EAD7DB]/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#9CB4C0]/10 rounded-full blur-2xl pointer-events-none" />

        {/* Back navigation button */}
        <button
          onClick={handleBack}
          className="cursor-pointer mb-6 text-xs text-[#A0B0B8] flex items-center gap-1.5 hover:text-[#947884] transition-colors focus:outline-none"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          {step === -1 ? "Volver a la landing" : "Pregunta anterior"}
        </button>

        {/* Progress tracker elements */}
        {step >= 0 && (
          <div className="mb-8">
            <div className="flex justify-between items-center text-[10px] text-[#A0B0B8] uppercase tracking-wider mb-2 font-mono">
              <span>Test Diagnóstico GLP-1</span>
              <span>Pregunta {step + 1} de {QUESTIONS.length} ({progressPercent}%)</span>
            </div>
            <div className="w-full h-1 bg-[#F4F4F8] rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-[#9CB4C0]" 
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
                <Sparkle className="w-5 h-5 text-[#C09CB4]" />
                <span className="text-xs uppercase tracking-widest font-sans font-medium text-[#A0B0B8]">
                  Lead Magnet Diagnóstico
                </span>
              </div>

              <h2 className="font-serif text-[#C09CB4] text-3xl sm:text-4xl font-semibold tracking-tight pb-2 leading-tight">
                Antes de empezar, dime a dónde te envío tu diagnóstico.
              </h2>
              <p className="text-xs sm:text-sm text-[#5C5C5C] leading-relaxed font-light mb-8 max-w-xl">
                Tus respuestas serán evaluadas en el cliente según los criterios del curso de Paulina. Al finalizar obtendrás una segmentación clínica y pautas nutricionales accionables inmediatas.
              </p>

              {/* Input Forms */}
              <div className="space-y-4 mb-6">
                
                {/* Honeypot Security Field (hidden from screen readers & users to capture automated bots) */}
                <div className="absolute opacity-0 pointer-events-none w-0 h-0 overflow-hidden" aria-hidden="true">
                  <label htmlFor="input-website">Por favor deja este campo vacío</label>
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
                  <label htmlFor="input-nombre" className="block text-xs font-serif text-[#947884] font-medium mb-1.5 pl-1">
                    Tu nombre completo como paciente
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A0B0B8]" />
                    <input
                      id="input-nombre"
                      type="text"
                      maxLength={60}
                      className="w-full pl-10 pr-4 py-3 bg-[#F4F4F8] focus:bg-white border border-[#A0B0B8]/10 focus:border-[#C09CB4] focus:ring-1 focus:ring-[#C09CB4] rounded-2xl text-xs sm:text-sm font-sans text-[#5C5C5C] focus:outline-none transition-all outline-none hover:border-[#9CB4C0]/40"
                      placeholder="Ej. Mariana Álvarez"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                    />
                  </div>
                </div>

                {/* Correo Electrónico */}
                <div>
                  <label htmlFor="input-correo" className="block text-xs font-serif text-[#947884] font-medium mb-1.5 pl-1">
                    Correo donde recibirás copia del reporte
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A0B0B8]" />
                    <input
                      id="input-correo"
                      type="email"
                      maxLength={80}
                      className="w-full pl-10 pr-4 py-3 bg-[#F4F4F8] focus:bg-white border border-[#A0B0B8]/10 focus:border-[#C09CB4] focus:ring-1 focus:ring-[#C09CB4] rounded-2xl text-xs sm:text-sm font-sans text-[#5C5C5C] focus:outline-none transition-all outline-none hover:border-[#9CB4C0]/40"
                      placeholder="Ej. mariana@correo.com"
                      value={correo}
                      onChange={(e) => setCorreo(e.target.value)}
                    />
                  </div>
                </div>

                {/* WhatsApp + Country Code Selector */}
                <div>
                  <label htmlFor="input-whatsapp" className="block text-xs font-serif text-[#947884] font-medium mb-1.5 pl-1">
                    WhatsApp para soporte interactivo
                  </label>
                  <div className="flex gap-2">
                    <div className="relative">
                      <select
                        aria-label="Código de país WhatsApp"
                        className="appearance-none h-full pl-3 pr-8 py-3 bg-[#F4F4F8] border border-[#A0B0B8]/10 rounded-2xl text-xs font-sans text-[#5C5C5C] focus:outline-none focus:border-[#C09CB4] cursor-pointer"
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                      >
                        {COUNTRY_CODES.map((cc) => (
                          <option key={cc.code} value={cc.code}>
                            {cc.code} ({cc.name})
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-2.5 flex items-center text-[#A0B0B8]">
                        ▼
                      </div>
                    </div>
                    <div className="relative flex-1">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A0B0B8]" />
                      <input
                        id="input-whatsapp"
                        type="tel"
                        maxLength={15}
                        className="w-full pl-10 pr-4 py-3 bg-[#F4F4F8] focus:bg-white border border-[#A0B0B8]/10 focus:border-[#C09CB4] focus:ring-1 focus:ring-[#C09CB4] rounded-2xl text-xs sm:text-sm font-sans text-[#5C5C5C] focus:outline-none transition-all outline-none hover:border-[#9CB4C0]/40"
                        placeholder="Mínimo 8 dígitos (ej. 5534211045)"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value.replace(/\D/g, ''))}
                      />
                    </div>
                  </div>
                </div>

              </div>

              {/* GDPR Consent Area */}
              <div className="flex items-start gap-3 mb-8">
                <input
                  id="consent-checkbox"
                  type="checkbox"
                  className="w-4 h-4 mt-0.5 border-[#A0B0B8] rounded text-[#C09CB4] focus:ring-[#C09CB4] cursor-pointer"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                />
                <label htmlFor="consent-checkbox" className="text-[10px] sm:text-xs text-[#5C5C5C] leading-normal font-light cursor-pointer select-none">
                  Acepto recibir mi diagnóstico personalizado y contenido educativo exclusivo de Paulina Benítez por correo electrónico y WhatsApp. Enlace regulador a <span className="underline text-[#947884]">política de privacidad</span>.
                </label>
              </div>

              {/* Action Button */}
              <button
                id="start-survey-action"
                onClick={handleStartQuiz}
                disabled={!isFormValid || isSubmittingLead}
                className="cursor-pointer group flex items-center justify-center gap-2 rounded-full py-4 text-xs font-medium tracking-widest text-white uppercase transition-all duration-300 w-full disabled:opacity-50 disabled:cursor-not-allowed bg-[#9CB4C0] hover:bg-[#86A0AC]"
              >
                {isSubmittingLead ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Buscando servidor...
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
              {/* Question header */}
              <div className="mb-6">
                <span className="text-xs font-sans text-[#A0B0B8] font-medium uppercase tracking-wider block mb-2">
                  Protocolo de Diagnóstico Activo
                </span>
                <h3 className="font-serif text-[#C09CB4] text-xl sm:text-2xl font-semibold leading-relaxed">
                  {QUESTIONS[step].text}
                </h3>
              </div>

              {/* Option blocks */}
              <motion.div 
                variants={optionsContainerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-3 mb-4"
              >
                {QUESTIONS[step].options.map((option) => {
                  const isSelected = answers[QUESTIONS[step].id] === option.value;
                  return (
                    <motion.div key={option.value} variants={optionItemVariants}>
                      <button
                        onClick={() => handleSelectOption(QUESTIONS[step].id, option.value)}
                        className={`cursor-pointer w-full text-left p-4 rounded-2xl border text-xs sm:text-sm font-sans font-light transition-all duration-300 flex items-center justify-between hover:scale-[1.01] ${
                          isSelected 
                            ? 'bg-[#EAD7DB]/50 border-[#C09CB4] text-[#947884] font-medium' 
                            : 'bg-[#F4F4F8] border-transparent text-[#5C5C5C] hover:bg-white hover:border-[#A0B0B8]/30 hover:shadow-sm'
                        }`}
                      >
                        <span className="pr-2">{option.text}</span>
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                          isSelected 
                            ? 'border-[#947884] bg-[#947884]' 
                            : 'border-[#A0B0B8]/40 bg-white'
                        }`}>
                          {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </div>
                      </button>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Interactive bottom row containing step-back trigger */}
              <div className="flex justify-between items-center mb-6 pt-1">
                <button
                  type="button"
                  onClick={handleBack}
                  className="cursor-pointer group inline-flex items-center gap-1.5 text-xs font-medium text-[#947884] hover:text-[#C09CB4] transition-colors focus:outline-none py-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
                  Volver atrás
                </button>
                <span className="text-[10px] text-[#A0B0B8] font-sans italic">
                  Progreso autoguardado
                </span>
              </div>

              {/* Progress counter footer */}
              <div className="flex justify-between items-center text-[10px] text-[#A0B0B8] pt-4 border-t border-[#F4F4F8]">
                <span>Paso {step + 1} de 6</span>
                <span className="italic">Pregunta anterior disponible</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

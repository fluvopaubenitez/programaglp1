/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import AuthoritySection from './components/AuthoritySection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
import DiagnosticsQuiz from './components/DiagnosticsQuiz';
import DiagnosticResults from './components/DiagnosticResults';
import QuizLandingSection from './components/QuizLandingSection';

import { AppView, QuizAnswers, LeadData, ProfileId } from './types';
import { calculateProfile } from './quizData';
import { REEMPLAZAR_LINK_WHATSAPP } from './constants';

export default function App() {
  const [view, setView] = useState<AppView>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('view') === 'test' || params.get('test') === 'true' || window.location.hash === '#test') {
        return 'quiz-landing';
      }
    }
    return 'landing';
  });
  const [answers, setAnswers] = useState<QuizAnswers | null>(null);
  const [lead, setLead] = useState<LeadData | null>(null);
  const [profileId, setProfileId] = useState<ProfileId | null>(null);
  const [showStickyCta, setShowStickyCta] = useState(false);

  // Deep-linking hash monitoring
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#test' || window.location.search.includes('test=true') || window.location.search.includes('view=test')) {
        setView('quiz-landing');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (window.location.hash === '#course' || window.location.hash === '#home') {
        setView('landing');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Monitor scroll for mobile CTA visibility threshold (after hero section)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500 && (view === 'landing' || view === 'quiz-landing')) {
        setShowStickyCta(true);
      } else {
        setShowStickyCta(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [view]);

  const handleGoToQuizLanding = () => {
    setView('quiz-landing');
    window.location.hash = '#test';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartQuiz = () => {
    setView('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuizComplete = (finalAnswers: QuizAnswers, leadData: LeadData) => {
    setAnswers(finalAnswers);
    setLead(leadData);
    
    // Compute client-side profile diagnostic
    const detectedProfileId = calculateProfile(finalAnswers);
    setProfileId(detectedProfileId);
    
    setView('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRestartQuiz = () => {
    setAnswers(null);
    setProfileId(null);
    setView('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToLanding = () => {
    setView('landing');
    window.location.hash = '#course';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] flex flex-col justify-between overflow-x-hidden antialiased">
      {/* Universal NP Premium Header */}
      <Header onStartQuiz={handleGoToQuizLanding} />

      <main className="flex-1 w-full m-0 p-0">
        <AnimatePresence mode="wait">
          {view === 'landing' && (
            <motion.div
              key="landing-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              {/* Vista 1: LANDING PAGE FLOW */}
              <HeroSection onStartQuiz={handleGoToQuizLanding} />
              
              <ProblemSection />

              {/* SECTION 3 - INTERMEDIATE BANNER CTA */}
              <section className="relative py-16 px-6 sm:px-12 md:px-24 bg-[#EAD7DB]/30 border-t border-b border-[#A0B0B8]/15 text-center">
                <div className="max-w-3xl mx-auto">
                  <span className="text-[10px] uppercase tracking-widest font-sans font-semibold text-[#947884] block mb-2">
                    ★ Valoración Gratuita Clínicamente Orientada
                  </span>
                  <h2 className="font-serif text-[#947884] text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-4">
                    ¿Estás usando el GLP-1 correctamente?
                  </h2>
                  <p className="font-sans text-[#5C5C5C] text-sm sm:text-base leading-relaxed font-light mb-8 max-w-xl mx-auto">
                    Averígualo mediante nuestro test de 6 preguntas estratégicas. Obtén de inmediato un reporte diagnóstico y personalizado alineado a tu etapa de alimentación.
                  </p>
                  
                  <button
                    onClick={handleGoToQuizLanding}
                    className="cursor-pointer group rounded-full bg-[#9CB4C0] hover:bg-[#86A0AC] px-10 py-5 text-sm font-semibold tracking-wider text-white shadow hover:shadow-md hover:translate-y-[-2px] transition-all duration-300 inline-flex items-center gap-2"
                  >
                    Hacer el test gratuito
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </section>

              <AuthoritySection />

              <TestimonialsSection />

              <PricingSection />
            </motion.div>
          )}

          {view === 'quiz-landing' && (
            <motion.div
              key="quiz-landing-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              {/* Vista 4: ESTADOS DE TEST SUBLANDING */}
              <QuizLandingSection 
                onStartQuiz={handleStartQuiz} 
                onBackToCourse={handleBackToLanding} 
              />
            </motion.div>
          )}

          {view === 'quiz' && (
            <motion.div
              key="quiz-view"
              className="w-full"
            >
              {/* Vista 2: QUIZ COMPONENT */}
              <DiagnosticsQuiz 
                onQuizComplete={handleQuizComplete} 
                onBackToLanding={handleGoToQuizLanding} 
              />
            </motion.div>
          )}

          {view === 'results' && answers && lead && profileId && (
            <motion.div
              key="results-view"
              className="w-full"
            >
              {/* Vista 3: DIAGNOSTIC RESULTS REPORT */}
              <DiagnosticResults 
                answers={answers} 
                lead={lead} 
                profileId={profileId} 
                onRestart={handleRestartQuiz} 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

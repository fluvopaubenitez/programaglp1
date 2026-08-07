/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type AppView = 'landing' | 'quiz' | 'results' | 'quiz-landing';

export interface LeadData {
  nombre: string;
  correo: string;
  whatsapp: string;
  countryCode: string;
  consent: boolean;
  timestamp: string;
}

export type ProfileId = 'PREPARACIÓN' | 'SÍNTOMAS GI' | 'PROTEÍNA Y MÚSCULO' | 'SALIDA Y ANTI-REBOTE';

export interface QuizAnswers {
  p1: string; // 'a'|'b'|'c'|'d'
  p2: string; // 'a'|'b'|'c'|'d'
  p3: string; // 'a'|'b'|'c'|'d'
  p4: string; // 'a'|'b'|'c'|'d'
  p5: string; // 'a'|'b'|'c'|'d'
  p6: string; // 'a'|'b'|'c'|'d'
}

export interface Question {
  id: keyof QuizAnswers;
  text: string;
  options: {
    value: string;
    text: string;
  }[];
}

export interface Testimonios {
  id: string;
  author: string;
  age: string;
  quote: string;
  profileType: string;
  image?: string;
}

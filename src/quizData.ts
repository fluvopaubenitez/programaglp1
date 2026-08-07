/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question, QuizAnswers, ProfileId } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 'p1',
    text: '¿En qué momento estás con el GLP-1?',
    options: [
      { value: 'a', text: 'Aún no empiezo' },
      { value: 'b', text: 'Recién empecé, 0 a 4 semanas' },
      { value: 'c', text: 'Llevo 1 a 3 meses' },
      { value: 'd', text: 'Más de 3 meses o pensando en dejarlo' }
    ]
  },
  {
    id: 'p2',
    text: '¿Cuánta proteína comes al día?',
    options: [
      { value: 'a', text: 'No tengo idea' },
      { value: 'b', text: 'Poca, casi no me da hambre' },
      { value: 'c', text: 'Algo, pero no la mido' },
      { value: 'd', text: 'La calculo y la cumplo' }
    ]
  },
  {
    id: 'p3',
    text: '¿Qué molestia digestiva tienes más seguido?',
    options: [
      { value: 'a', text: 'Náuseas o reflujo' },
      { value: 'b', text: 'Estreñimiento' },
      { value: 'c', text: 'Diarrea o malestar' },
      { value: 'd', text: 'Casi ninguna' }
    ]
  },
  {
    id: 'p4',
    text: '¿Cómo está tu energía y tu fuerza?',
    options: [
      { value: 'a', text: 'Muy baja, me siento débil' },
      { value: 'b', text: 'Cae por momentos' },
      { value: 'c', text: 'Estable' },
      { value: 'd', text: 'Buena, entreno fuerza' }
    ]
  },
  {
    id: 'p5',
    text: '¿Cómo es tu ciclo o salud hormonal?',
    options: [
      { value: 'a', text: 'Irregular o con síntomas fuertes' },
      { value: 'b', text: 'Algunos síntomas' },
      { value: 'c', text: 'Bastante estable' },
      { value: 'd', text: 'Sin problemas' }
    ]
  },
  {
    id: 'p6',
    text: '¿Cuál es tu mayor miedo con el GLP-1?',
    options: [
      { value: 'a', text: 'Perder músculo' },
      { value: 'b', text: 'Los síntomas me frenan' },
      { value: 'c', text: 'Recuperar el peso al terminar' },
      { value: 'd', text: 'No sé si lo estoy haciendo bien' }
    ]
  }
];

export interface ProfileContent {
  title: string;
  subtitle: string;
  diagnosis: string;
  points: string[];
}

export const PROFILE_DETAILS: Record<ProfileId, ProfileContent> = {
  'PREPARACIÓN': {
    title: 'Preparación Inteligente',
    subtitle: 'Vas a empezar con el pie derecho.',
    diagnosis: 'Aún no inicias el tratamiento, lo que representa la mejor ventana de oportunidad posible para preparar tu cuerpo, acondicionar tu metabolismo y evitar los típivos errores que frenan al 90% de los pacientes.',
    points: [
      'Prepara tu intestino y microbiota las semanas previas.',
      'Define tu meta de proteína y nutrientes críticos desde el día uno.',
      'Aprende a decodificar y prevenir síntomas molestos antes de que aparezcan.'
    ]
  },
  'SÍNTOMAS GI': {
    title: 'Control de Síntomas Digestivos',
    subtitle: 'Tus síntomas tienen solución, no son el precio a pagar.',
    diagnosis: 'Las molestias digestivas son la causa número uno por la cual los pacientes abandonan el tratamiento de GLP-1. La buena noticia es que casi la totalidad de estos síntomas pueden corregirse con ajustes nutricionales estratégicos.',
    points: [
      'Identifica tu síntoma digestivo dominante y su disparador.',
      'Ajusta texturas, porciones y horarios de comida estratégicos.',
      'Sabe con exactitud qué alimentos preferir y cuáles evitar estrictamente en tu caso.'
    ]
  },
  'PROTEÍNA Y MÚSCULO': {
    title: 'Preservación de Masa Muscular',
    subtitle: 'Estás perdiendo peso, pero el músculo está en riesgo.',
    diagnosis: 'Comer menos sin una estrategia rigurosa de proteína sacrifica tu masa muscular. Este tejido es el que sostiene tu metabolismo, previene la flacidez y asegura que tus resultados sean sostenibles en el tiempo.',
    points: [
      'Calcula tu meta real de proteína por kilo de peso ideal.',
      'Distribuye la ingesta de manera inteligente a lo largo de tu día.',
      'Apóyate en los suplementos y alimentos correctos para optimizar la síntesis.'
    ]
  },
  'SALIDA Y ANTI-REBOTE': {
    title: 'Transición y Protocolo de Salida',
    subtitle: 'El verdadero reto empieza cuando dejas el medicamento.',
    diagnosis: 'Sin un plan nutricional de salida estructurado, el cuerpo tiende biológicamente a recuperar el peso perdido. La diferencia entre mantener el cambio y sufrir el rebote está en cómo gestiones esta transición crítica.',
    points: [
      'Construye tu base metabólica meses antes de suspender.',
      'Escala el medicamento progresivamente con respaldo nutricional dinámico.',
      'Mantén niveles proteicos e hidratación estable mientras se reactiva tu apetito natural.'
    ]
  }
};

/**
 * Calculates the profile of the user based on their answers.
 * Rules:
 * - Perfil PREPARACIÓN: si P1=a. Foco: cómo preparar tu intestino y qué esperar antes de empezar.
 * - Perfil SÍNTOMAS GI: si P3 es a, b o c con peso alto, o P6=b. Foco: identificar y manejar el síntoma digestivo.
 * - Perfil PROTEÍNA Y MÚSCULO: si P2 es a o b, o P4 es a o b, o P6=a. Foco: proteína estratégica para no perder masa muscular.
 * - Perfil SALIDA Y ANTI-REBOTE: si P1=d o P6=c. Foco: protocolo de salida para mantener resultados.
 * Si hay empate, prioriza en este orden: SALIDA Y ANTI-REBOTE, PROTEÍNA Y MÚSCULO, SÍNTOMAS GI, PREPARACIÓN.
 */
export function calculateProfile(answers: QuizAnswers): ProfileId {
  // Check direct triggers first to match user's explicit rules:
  
  // Rule 1: si P1=a -> PREPARACIÓN
  if (answers.p1 === 'a') {
    return 'PREPARACIÓN';
  }

  // Calculate scores for ties
  const scores = {
    'SALIDA Y ANTI-REBOTE': 0,
    'PROTEÍNA Y MÚSCULO': 0,
    'SÍNTOMAS GI': 0,
    'PREPARACIÓN': 0
  };

  // Base matches counting:
  
  // SALIDA Y ANTI-REBOTE keys:
  if (answers.p1 === 'd') scores['SALIDA Y ANTI-REBOTE'] += 2;
  if (answers.p6 === 'c') scores['SALIDA Y ANTI-REBOTE'] += 2;

  // PROTEÍNA Y MÚSCULO keys:
  if (answers.p2 === 'a' || answers.p2 === 'b') scores['PROTEÍNA Y MÚSCULO'] += 2;
  if (answers.p4 === 'a' || answers.p4 === 'b') scores['PROTEÍNA Y MÚSCULO'] += 2;
  if (answers.p6 === 'a') scores['PROTEÍNA Y MÚSCULO'] += 2;

  // SÍNTOMAS GI keys:
  if (answers.p3 === 'a' || answers.p3 === 'b' || answers.p3 === 'c') scores['SÍNTOMAS GI'] += 2;
  if (answers.p6 === 'b') scores['SÍNTOMAS GI'] += 2;

  // PREPARACIÓN keys:
  if (answers.p1 === 'a') scores['PREPARACIÓN'] += 2;

  // Determine maximum with priority-order mapping if tie:
  // Order of priority on ties: SALIDA, PROTEÍNA, SÍNTOMAS, PREPARACIÓN
  const priorityList: ProfileId[] = [
    'SALIDA Y ANTI-REBOTE',
    'PROTEÍNA Y MÚSCULO',
    'SÍNTOMAS GI',
    'PREPARACIÓN'
  ];

  let selected: ProfileId = priorityList[0];
  let highestScore = -1;

  for (const p of priorityList) {
    if (scores[p] > highestScore) {
      highestScore = scores[p];
      selected = p;
    }
  }

  return selected;
}

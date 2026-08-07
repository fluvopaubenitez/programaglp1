/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Star, Award, ShieldCheck, GraduationCap, CheckCircle } from 'lucide-react';

export default function AuthoritySection() {
  return (
    <section className="relative w-full py-16 md:py-28 px-6 sm:px-12 md:px-20 bg-[#F8F6F3] border-t border-b border-[#D6D3CF] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Portrait Card */}
        <div className="col-span-1 lg:col-span-5 flex flex-col items-center gap-6 relative">
          
          <div className="relative w-full max-w-sm aspect-[4/5] bg-[#EFEAE4] rounded-xl border border-[#D6D3CF] shadow-sm overflow-hidden group flex flex-col justify-end">
            {/* Portrait Image */}
            <img 
              src="https://lh3.googleusercontent.com/d/1aJTQ48QcT9SltxcHqmbrtZ5kkaIMSZMg" 
              alt="Nut. Paulina Benítez" 
              className="absolute inset-0 w-full h-full object-cover grayscale-[15%] transition-all duration-500 group-hover:grayscale-0 group-hover:scale-102"
              referrerPolicy="no-referrer"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#122033]/90 via-[#122033]/20 to-transparent" />

            <div className="relative z-10 p-6 flex flex-col gap-2">
              <div className="text-left">
                <p className="font-serif text-white text-2xl font-bold tracking-tight">
                  Nut. Paulina Benítez
                </p>
                <p className="text-[11px] text-[#D8B8B5] tracking-widest uppercase font-sans font-medium mt-0.5">
                  Nutrición Funcional Femenina
                </p>
              </div>

              <div className="flex items-center gap-1.5 self-start bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] px-3 py-1 rounded-md uppercase tracking-wider font-sans font-medium mt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D8B8B5]" />
                Cédula Profesional 12592-MX
              </div>
            </div>
          </div>

          {/* Social Proof Box */}
          <div className="w-full max-w-sm bg-white p-4 rounded-xl border border-[#D6D3CF] text-center flex flex-col items-center shadow-2xs">
            <div className="flex gap-1 text-[#2F4A45] mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <p className="text-xs text-[#2D2D2D]/80 font-sans">
              Calificación 5.0 sobre <strong className="text-[#122033] font-semibold">606 evaluaciones de pacientes</strong>
            </p>
          </div>

        </div>

        {/* Right Side: Authority Copy */}
        <div className="col-span-1 lg:col-span-7 flex flex-col">
          
          <span className="text-xs font-sans text-[#2F4A45] font-bold uppercase tracking-widest mb-2 block">
            Liderazgo & Respaldo Científico
          </span>
          
          <h2 className="font-serif text-[#122033] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.12] mb-6">
            Estrategia clínica y evidencia, <span className="text-[#2F4A45] italic font-normal">no tendencias de bienestar.</span>
          </h2>

          <div className="h-[2px] w-16 bg-[#2F4A45] mb-8" />

          {/* Detailed Biography Copy */}
          <div className="space-y-5 text-[#2D2D2D]/85 font-sans text-sm sm:text-base leading-relaxed font-normal">
            <p>
              <strong className="text-[#122033]">Paulina Benítez</strong> es Licenciada en Nutrición y Dietética, especialista en Nutrición Funcional Femenina y Salud Metabólica.
            </p>

            <p>
              Su enfoque combina la endocrinología ginecológica y la fisiología digestiva para tratar las causas de fondo del metabolismo en mujeres durante el uso de medicamentos GLP-1 (semaglutida, tirzepatida, liraglutida).
            </p>

            <p>
              Cuenta con certificaciones avanzadas en Salud Digestiva Intestinal, Nutrición Funcional Integrativa y FODMAPs por la prestigiosa <strong className="text-[#122033]">Academy of Nutrition and Dietetics (Estados Unidos)</strong>.
            </p>
          </div>

          {/* Credentials */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-[#D6D3CF]">
            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-[#D6D3CF]">
              <GraduationCap className="w-5 h-5 text-[#2F4A45] shrink-0 mt-0.5" />
              <span className="text-xs text-[#2D2D2D] font-sans font-medium leading-snug">
                Especialista en Endocrinología Ginecológica & Metabolismo
              </span>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-[#D6D3CF]">
              <Award className="w-5 h-5 text-[#2F4A45] shrink-0 mt-0.5" />
              <span className="text-xs text-[#2D2D2D] font-sans font-medium leading-snug">
                Certificada por la Academy of Nutrition & Dietetics (EE.UU.)
              </span>
            </div>
          </div>

          <div className="mt-8 bg-[#EFEAE4] p-4.5 rounded-xl border border-[#D6D3CF]">
            <p className="text-xs text-[#122033] font-serif italic">
              "El control sobre tu salud no se delega a un medicamento; se construye con conocimiento estructurado y nutrición consciente."
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}


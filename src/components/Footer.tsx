/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function Footer() {
  return (
    <footer className="w-full bg-[#FAF8F5] border-t border-[#A0B0B8]/15 py-12 px-6 sm:px-12 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        
        {/* Brand identity lockup */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-serif text-[#947884] font-medium text-lg">
              NP Academy
            </span>
          </div>
          <p className="text-xs text-[#A0B0B8] font-sans">
            © 2026 Programa Integral GLP-1 (45 Días). Todos los derechos reservados.
          </p>
          <p className="text-[10px] text-[#A0B0B8] font-mono mt-1 font-sans">
            Diseñado e impartido por la Nut. Paulina Benítez.
          </p>
        </div>

        {/* Clinical Disclaimer as required */}
        <div className="max-w-md">
          <p className="text-[10px] sm:text-xs text-[#A0B0B8] font-sans leading-relaxed">
            <span className="text-[#947884] font-medium">Aviso de responsabilidad:</span> Este diagnóstico, test y los contenidos del curso son de carácter estrictamente informativo, educativo e ilustrativo. Ninguno de estos materiales reemplaza el consejo, orden, dosificación ni supervisión de tu médico de cabecera ni de tu nutriólogo clínico tratante.
          </p>
        </div>

      </div>
    </footer>
  );
}

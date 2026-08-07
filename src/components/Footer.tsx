/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function Footer() {
  return (
    <footer className="w-full bg-[#122033] text-white border-t border-[#2F4A45]/40 py-12 px-6 sm:px-12 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        
        {/* Brand identity lockup */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-serif text-white font-bold text-xl tracking-tight">
              Paulina Benítez
            </span>
            <span className="text-[#D8B8B5] font-script text-xl ml-1">
              Nutrición
            </span>
          </div>
          <p className="text-xs text-[#EFEAE4]/70 font-sans">
            © 2026 Programa Integral GLP-1 (45 Días). Todos los derechos reservados.
          </p>
          <p className="text-xs text-[#2F4A45] font-sans font-semibold mt-1">
            Control consciente sobre tu cuerpo.
          </p>
        </div>

        {/* Clinical Disclaimer */}
        <div className="max-w-md">
          <p className="text-xs text-[#EFEAE4]/60 font-sans leading-relaxed">
            <strong className="text-white">Aviso de responsabilidad:</strong> Este test y los contenidos del programa son de carácter estrictamente informativo y educativo. No reemplazan el diagnóstico ni la supervisión de tu médico tratante o endocrinólogo.
          </p>
        </div>

      </div>
    </footer>
  );
}


import React from "react";

interface LiquorLoaderProps {
  text?: string;
  size?: "sm" | "md" | "lg";
}

export const LiquorLoader = ({
  text = "Cargando licores...",
  size = "md",
}: LiquorLoaderProps) => {
  const sizeClasses = {
    sm: "w-12 h-16",
    md: "w-20 h-24",
    lg: "w-28 h-32",
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 gap-4">
      {/* Vaso / Copa con Licor */}
      <div className={`relative ${sizeClasses[size]} flex items-end justify-center`}>
        {/* Silueta / Borde del Vaso de Licor */}
        <div className="absolute inset-0 border-4 border-amber-500/40 rounded-b-3xl rounded-t-sm shadow-[0_0_15px_rgba(245,158,11,0.2)] bg-neutral-900/60 backdrop-blur-sm overflow-hidden flex items-end">
          
          {/* Líquido (Licor Amber / Whiskey / Ron) con animación de subida y oleaje */}
          <div className="w-full h-3/4 bg-gradient-to-t from-amber-700 via-amber-500 to-amber-400 relative animate-pulse flex items-start justify-center">
            
            {/* Espuma / Brillo superior del licor */}
            <div className="w-full h-1.5 bg-amber-200/60 blur-[1px]"></div>

            {/* Burbujas del licor efervescente */}
            <div className="absolute bottom-1 left-2 w-1.5 h-1.5 bg-amber-200 rounded-full animate-bounce [animation-duration:1.2s]"></div>
            <div className="absolute bottom-2 left-1/2 w-2 h-2 bg-amber-100 rounded-full animate-bounce [animation-duration:0.8s]"></div>
            <div className="absolute bottom-1 right-3 w-1.5 h-1.5 bg-amber-200 rounded-full animate-bounce [animation-duration:1s]"></div>
          </div>
        </div>

        {/* Hielo flotante dentro del vaso */}
        <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-white/40 backdrop-blur-md rounded-md rotate-12 animate-pulse border border-white/50 shadow-sm"></div>

        {/* Destellos / Resplandor Neón de fondo */}
        <div className="absolute -inset-2 bg-amber-500/20 rounded-full blur-xl -z-10 animate-pulse"></div>
      </div>

      {/* Texto de Carga con estilo de Licorería */}
      {text && (
        <div className="flex items-center gap-1">
          <p className="text-amber-400 text-sm font-semibold tracking-wider uppercase drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]">
            {text}
          </p>
          <span className="flex gap-1 ml-1">
            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping"></span>
            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping [animation-delay:0.2s]"></span>
            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping [animation-delay:0.4s]"></span>
          </span>
        </div>
      )}
    </div>
  );
};
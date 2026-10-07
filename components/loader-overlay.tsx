"use client"
import { LiquorLoader } from "./loader";
import { createPortal } from "react-dom";

interface LiquorLoaderOverlayProps {
  isVisible: boolean;
  message?: string;
}

export const LoaderOverlay = ({
  isVisible,
  message = "Procesando solicitud...",
}: LiquorLoaderOverlayProps) => {
  if (!isVisible) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md transition-all duration-300">
      <div className="bg-neutral-900/90 border border-amber-500/30 p-8 rounded-2xl shadow-[0_0_30px_rgba(245,158,11,0.25)] flex flex-col items-center">
        <LiquorLoader text={message} size="lg" />
      </div>
    </div>
  , document.body);
};
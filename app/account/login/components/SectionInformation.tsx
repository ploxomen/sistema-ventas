"use client"
import { Lock, Wine } from "lucide-react";

export default function SectionInformation() {
  return (
    <section className="hidden lg:flex lg:w-[55%] relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient( 90deg, rgba(7,9,10,.95) 0%, rgba(7,9,10,.72) 55%, rgba(7,9,10,.35) 100% ), url('https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1800&q=85')",
            }}
          ></div>
          <div className="relative z-10 flex flex-col justify-between w-full p-12 xl:p-16">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500 shadow-lg shadow-amber-500/20">
                <Wine size={24} />
              </div>
              <div>
                <p className="text-lg font-bold tracking-tight">HEUSEIN</p>
                <p className="text-xs text-white/50">
                  Sistema interno de gestión
                </p>
              </div>
            </div>
            <div className="max-w-xl">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-amber-500"></span>
                <span className="text-xs font-semibold uppercase tracking-[.25em] text-amber-400">
                  Intranet
                </span>
              </div>
              <h1 className="text-4xl font-bold leading-tight tracking-tight xl:text-6xl">
                Gestiona tu negocio.
                <span className="text-amber-400">
                  Todo desde un solo lugar.
                </span>
              </h1>
              <p className="mt-6 max-w-lg text-base leading-7 text-white/60 xl:text-lg">
                Administra productos, inventario, ventas, compras y las
                operaciones de tu empresa desde una plataforma centralizada.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                  <span className="h-2 w-2 rounded-full bg-emerald-400"> </span>
                  Sistema operativo
                </div>
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                  <Lock size={20} className="text-amber-400"/>
                  Acceso seguro
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-white/10 pt-6">
              <p className="text-xs text-white/30"> © 2026 HEUSEIN </p>
              <p className="text-xs text-white/30">
                Acceso exclusivo para colaboradores
              </p>
            </div>
          </div>
        </section>
  )
}

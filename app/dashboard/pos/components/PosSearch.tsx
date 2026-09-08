"use client"
import InputCustom from "@/components/ui/input-custom";
import { Kbd } from "@heroui/react";
import { CreditCardIcon, Search } from "lucide-react";
import React from "react";

export default function PosSearch() {
  return (
    <section className="mb-5 py-4 rounded-2xl bg-white border-b border-slate-200 flex items-center px-5 shrink-0">
      <div className="w-[250px] flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary-600 text-white flex items-center justify-center">
          <CreditCardIcon />
        </div>
        <div>
          <h1 className="font-bold text-slate-700">Mi POS</h1>
          <p className="text-xs text-slate-400">Caja #01</p>
        </div>
      </div>
      <div className="flex-1 max-w-2xl relative">
        <InputCustom
            size="lg"
          startContent={<Search size={18} className="text-default-400" />}
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <Kbd keys={["command"]}>F12</Kbd>
        </div>
      </div>
      <div className="ml-auto flex items-center gap-4">
        <div className="text-right">
          <p className="text-sm font-semibold">Carlos Pérez</p>
          <p className="text-xs text-slate-400">Cajero</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold">
          CP
        </div>
      </div>
    </section>
  );
}

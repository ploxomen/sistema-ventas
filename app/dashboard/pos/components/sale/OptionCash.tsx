"use client"
import { ContentBox } from "@/components/setting-option";
import InputCustom from "@/components/ui/input-custom";
import { Button } from "@heroui/react";
import React from "react";

export default function OptionCash() {
  return (
    <ContentBox className="mt-5">
      <label
        className="block text-sm font-semibold mb-2"
        htmlFor="monto-recibido"
      >
        Monto recibido
      </label>
      <InputCustom
        id="monto-recibido"
        size="lg"
        startContent={<span className="text-slate-400 font-semibold">S/</span>}
      />
      <ContentBox className="grid grid-cols-6 gap-2 mt-3">
        <Button variant="flat">S/ 10</Button>
        <Button variant="flat">S/ 20</Button>
        <Button variant="flat">S/ 50</Button>
        <Button variant="flat">S/ 100</Button>
        <Button variant="flat">S/ 200</Button>
        <Button color="primary">Exacto</Button>
      </ContentBox>
      <ContentBox className="mt-4 rounded-xl bg-slate-50 p-4 flex justify-between">
        <span className="text-sm text-slate-500">Vuelto</span>
        <span id="change" className="font-bold text-lg">
          S/ 0.00
        </span>
      </ContentBox>
    </ContentBox>
  );
}

import { ContentBox } from "@/components/setting-option";
import InputCustom from "@/components/ui/input-custom";
import { ShieldCheck } from "lucide-react";
import React from "react";
interface Props {
  nameWallet: string;
}
export default function OptionWalletDigtal({ nameWallet = "" }: Props) {
  return (
    <ContentBox className="mt-5">
      <ContentBox
        className="rounded-xl bg-slate-50 border
                           border-slate-200
                           p-4 mb-4"
      >
        <ContentBox className="flex gap-3">
          <ContentBox
            id="referenceIcon"
            className="w-10 h-10
                                   rounded-xl
                                   bg-white
                                   flex items-center
                                   justify-center"
          >
            <ShieldCheck size={24} />
          </ContentBox>
          <ContentBox>
            <p className="font-semibold text-sm">Validar pago {nameWallet}</p>
            <p
              id="referenceDescription"
              className="text-xs
                                       text-slate-400
                                       mt-1"
            >
              Registra el código de operación y el nombre de la persona que
              realizó el pago.
            </p>
          </ContentBox>
        </ContentBox>
      </ContentBox>

      <ContentBox className="flex gap-3 mb-4">
        <InputCustom
          label="Código de operación / seguridad"
          required
          placeholder="Ej: 1234"
        />
        <InputCustom
          label="Nombre del titular / pagador"
          placeholder="Nombre de la persona que realizó el pago"
        />
      </ContentBox>
    </ContentBox>
  );
}

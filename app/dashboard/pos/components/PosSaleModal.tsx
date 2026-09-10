"use client";

import { ContentBox } from "@/components/setting-option";
import InputCustom from "@/components/ui/input-custom";
import { PropsModalHeroUI } from "@/types/global";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import {
  ArrowLeftRightIcon,
  Banknote,
  CreditCardIcon,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import OptionCash from "./sale/OptionCash";
import { useState } from "react";
import OptionWalletDigtal from "./sale/OptionWalletDigtal";
import { cn } from "@/lib/utils";
interface Props extends PropsModalHeroUI {
  total: number;
}
type PropWallet =
  "yape" | "plin" | "efectivo" | "otras-billeteras" | "transferencia";
export default function PosSaleModal({ total, isOpen, onOpenChange }: Props) {
  const [selectWallet, setSellectWallet] = useState<PropWallet>("yape");
  return (
    <Modal isOpen={isOpen} size="3xl" onClose={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              <ContentBox>
                <p className="text-xs text-slate-400 uppercase font-bold">
                  finalizar venta
                </p>
                <h2 className="text-xl font-bold">Procesar pago</h2>
              </ContentBox>
            </ModalHeader>
            <ModalBody>
              <ContentBox className="p-6">
                <ContentBox className="rounded-2xl bg-slate-900 text-white p-5 mb-5 flex justify-between">
                  <ContentBox>
                    <p className="text-sm text-slate-400">Total a pagar</p>
                    <p className="text-3xl font-black mt-1">
                      S/ {total.toFixed(2)}
                    </p>
                  </ContentBox>
                  <Wallet size={24} className="text-slate-500" />
                </ContentBox>
                <ContentBox className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  <button onClick={() => setSellectWallet("efectivo")} className={cn("rounded-xl border-2  p-4 text-left", selectWallet == "efectivo" && "border-primary-500 bg-primary-50")}>
                    <ContentBox className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
                      <Banknote size={24} />
                    </ContentBox>
                    <p className="font-semibold text-sm">Efectivo</p>
                  </button>
                  <button onClick={() => setSellectWallet("yape")} className={cn("rounded-xl border-2  p-4 text-left", selectWallet == "yape" && "border-primary-500 bg-primary-50")}>
                    <ContentBox className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-3">
                      <span className="text-[10px] font-black">YAPE</span>
                    </ContentBox>
                    <p className="font-semibold text-sm">Yape</p>
                  </button>
                  <button onClick={() => setSellectWallet("plin")} className={cn("rounded-xl border-2  p-4 text-left", selectWallet == "plin" && "border-primary-500 bg-primary-50")}>
                    <ContentBox className="w-10 h-10rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
                      <span className="text-[10px] font-black">PLIN</span>
                    </ContentBox>
                    <p className="font-semibold text-sm">Plin</p>
                  </button>
                  <button className="payment-method border-2 border-slate-200 rounded-xl p-4 text-left">
                    <ContentBox className="w-10 h-10rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-3">
                      <span className="text-[10px] font-black">Otros</span>
                    </ContentBox>
                    <p className="font-semibold text-sm">Billetera</p>
                  </button>
                  <button className="payment-method border-2 border-slate-200 rounded-xl p-4 text-left">
                    <ContentBox className="w-10 h-10 rounded-xlbg-cyan-100 text-cyan-600 flex items-center justify-center mb-3">
                      <ArrowLeftRightIcon size={24} />
                    </ContentBox>
                    <p className="font-semibold text-sm">Transferencia</p>
                  </button>
                </ContentBox>
                {selectWallet === "efectivo" && <OptionCash />}
                {selectWallet === "yape" && <OptionWalletDigtal nameWallet="Yape" />}
                {selectWallet === "plin" && <OptionWalletDigtal nameWallet="Plin" />}
                {selectWallet === "otras-billeteras" && <OptionWalletDigtal nameWallet="Otro" />}
              </ContentBox>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Action
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

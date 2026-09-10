"use client";
import { ContentBox } from "@/components/setting-option";
import { Button, Kbd, useDisclosure } from "@heroui/react";
import { ChevronRight, ShoppingBagIcon, UserIcon, Wallet } from "lucide-react";
import React from "react";

interface Props {
    openCar : () => void
}
export default function PosCar({openCar} : Props) {

  return (
    <aside className="w-[430px] bg-white border-l border-slate-200 flex flex-col rounded-2xl shrink-0">
      <ContentBox className="p-5 border-b border-slate-200 flex gap-2">
        <ContentBox className="flex-1">
          <h2 className="font-bold text-lg">Venta actual</h2>
          <p className="text-xs text-slate-400 mt-1">0 productos</p>
        </ContentBox>
        <Button variant="flat" color="danger" size="sm">
          Vaciar
        </Button>
      </ContentBox>
      <ContentBox className="px-5 py-4 border-b border-slate-100">
        <Button className="w-full flex h-auto items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-left">
          <ContentBox className="size-9 rounded-lg bg-white flex items-center justify-center">
            <UserIcon size={20} />
          </ContentBox>
          <ContentBox className="flex-1">
            <p className="text-sm font-medium">Cliente general</p>
            <p className="text-xs text-slate-400">DNI / RUC opcional</p>
          </ContentBox>
          <ChevronRight size={16} />
        </Button>
      </ContentBox>
      <ContentBox className="flex-1 overflow-y-auto p-5 space-y-3">
        <ContentBox className="h-full flex flex-col items-center justify-center text-center">
          <ContentBox className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
            <ShoppingBagIcon size={24} />
          </ContentBox>
          <p className="font-semibold text-slate-700">Tu carrito está vacío</p>
          <p className="text-xs text-slate-400 mt-1">
            Escanea o selecciona un producto
          </p>
        </ContentBox>
      </ContentBox>
      <ContentBox className="border-t border-slate-200 p-5">
        <ContentBox className="space-y-2 text-sm">
          <ContentBox className="flex justify-between">
            <span className="text-slate-500">Subtotal</span>
            <span>S/ 0.00</span>
          </ContentBox>
          <ContentBox className="flex justify-between">
            <span className="text-slate-500">IGV</span>
            <span id="tax">S/ 0.00</span>
          </ContentBox>
          <div
            className="border-t border-dashed
                               border-slate-200
                               pt-3 mt-3
                               flex justify-between
                               items-end"
          >
            <span className="font-semibold">Total</span>

            <span
              id="total"
              className="text-3xl
                                   font-black
                                   text-slate-900"
            >
              S/ 0.00
            </span>
          </div>
        </ContentBox>

        <Button
          className="flex mt-5 items-center justify-center gap-3"
          variant="solid"
          color="primary"
          size="lg"
          fullWidth
          onPress={openCar}
        >
          <Wallet size={24} />
          Cobrar
          <Kbd keys={["command"]} className="ml-auto mr-3 px-2 py-1  rounded text-xs">F4</Kbd>
        </Button>
      </ContentBox>
    </aside>
  );
}

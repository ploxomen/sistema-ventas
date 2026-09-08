"use client";

import { ContentBox } from "@/components/setting-option";
import { POSProduct } from "@/types/pos";
import { Button } from "@heroui/react";
import { PlusIcon } from "lucide-react";

export default function ProductItem({
    name,
    price,
    image,
    stock,
    subcategory,
    brand
} : POSProduct) {
  return (
    <Button
      className="bg-white h-auto block w-full p-4 text-left"
      fullWidth
      variant="bordered"
      color="primary"
    >
      <ContentBox className="flex justify-between items-start">
        <ContentBox className="w-14 h-14 rounded-xlbg-slate-100 flex items-center justify-center text-3xl">
          <img src={image} alt="Producto imagen principal" />
        </ContentBox>
      </ContentBox>
      <ContentBox className="mt-4">
        <p className="font-semibold text-slate-700 text-sm">
          {name}
        </p>
        <ContentBox className="flex items-center gap-2 mt-1">
          <span className="text-[10px] text-slate-400 bg-slate-100 px-2 py-1 rounded">
            {brand}
          </span>
          <span className="text-[10px] text-slate-400">{subcategory}</span>
        </ContentBox>
      </ContentBox>
      <ContentBox className="flex justify-between items-end mt-4">
        <ContentBox>
          <p className="text-lg text-slate-800 font-black">S/ {price.toFixed(2)}</p>
          <p className="text-[11px] text-slate-400">Stock: {stock}</p>
        </ContentBox>
        <ContentBox className="w-8 h-8 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center">
          <PlusIcon size={24} />
        </ContentBox>
      </ContentBox>
    </Button>
  );
}

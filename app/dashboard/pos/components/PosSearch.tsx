"use client"
import InputCustom from "@/components/ui/input-custom";
import { Kbd } from "@heroui/react";
import { CreditCardIcon, Search } from "lucide-react";
import { Button } from '@heroui/react'
import { useCategoryData } from '@/hooks/common/useCategoryData'

export default function PosSearch() {
    const {categories} = useCategoryData({idCategory : null});
  return (
    <section className="mb-5 py-4 rounded-2xl bg-white border-b border-slate-200 flex gap-3 items-center px-5 shrink-0">
      <div className="flex-1 max-w-2xl relative">
        <InputCustom
            size="lg"
          startContent={<Search size={18} className="text-default-400" />}
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <Kbd keys={["command"]}>F12</Kbd>
        </div>
      </div>
      <div className="flex gap-2">
            <Button color='primary'>
                Todos
            </Button>
            {
                categories.map(cat => (
                    <Button color='secondary' key={cat.id}>{cat.name}</Button>
                ))
            }
      </div>
    </section>
  );
}

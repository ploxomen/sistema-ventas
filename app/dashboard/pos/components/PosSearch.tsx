"use client";
import InputCustom from "@/components/ui/input-custom";
import { Kbd } from "@heroui/react";
import { CreditCardIcon, Search } from "lucide-react";
import { Button } from "@heroui/react";
import { useCategoryData } from "@/hooks/common/useCategoryData";
import { Category } from "@/types/category";
import { FilterProduct } from "@/types/pos";

interface Props {
  categories: Category[];
  filterCatId?: number;
  setFilter: <K extends keyof FilterProduct>(
    key: K,
    value: FilterProduct[K],
  ) => void;
}
export default function PosSearch({
  categories = [],
  setFilter = () => {},
  filterCatId = 0,
}: Props) {
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
      <div>
        <span className="block text-xs mb-1">CATEGORÍAS</span>
        <div className="flex gap-2">
          <Button color={filterCatId === 0 ? 'primary' : 'secondary'} onPress={() => setFilter("categoryId", 0)}>
            Todos
          </Button>
          {categories.map((cat) => (
            <Button
              color={filterCatId === cat.id ? 'primary' : 'secondary'}
              key={cat.id}
              onPress={() => setFilter("categoryId", cat.id)}
            >
              {cat.name}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import React from "react";
import PosSearch from "./PosSearch";
import { ContentBox } from "@/components/setting-option";
import PosProduct from "./PosProduct";
import PosCar from "./PosCar";
import { useDisclosure } from "@heroui/react";
import PosSaleModal from "./PosSaleModal";
import { useDataTable } from "@/hooks/tables/useDataTable";
import { FilterProduct } from "@/types/pos";
import { useCategoryData } from "@/hooks/common/useCategoryData";
import { ProductTable } from "../../product/types/product";
import { usePOS } from "@/hooks/dashboard/usePOS";

export default function PosManager() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { addProduct, cart, updateQuantity, totals, clearCart } = usePOS();
  const {
    data: products,
    filters,
    setFilter,
  } = useDataTable<ProductTable, FilterProduct>({
    endpoint: "product",
    initialPageSize: 15,
    initialFilters: {
      categoryId: 0,
      subcategoryId: 0,
    },
  });
  const { categories, subcategories } = useCategoryData({
    idCategory: filters.categoryId,
  });
  return (
    <>
      <PosSearch
        categories={categories}
        setFilter={setFilter}
        filterCatId={filters.categoryId}
      />
      <ContentBox className="flex gap-5">
        <PosProduct
          addProduct={addProduct}
          products={products}
          subcategories={subcategories}
          setFilter={setFilter}
          filterSubCatId={filters.subcategoryId}
        />
        <PosCar openCar={onOpen} clearCart={clearCart} updateQuantity={updateQuantity} totals={totals} cart={cart} />
      </ContentBox>
      <PosSaleModal isOpen={isOpen} onOpenChange={onOpenChange} total={totals.total} />
    </>
  );
}

"use client";
import { ContentBox } from "@/components/setting-option";
import { Button } from "@heroui/react";
import React from "react";
import ProductItem from "./ProductItem";
import { SubCategory } from "@/types/category";
import { ProductTable } from "../../product/types/product";
import { FilterProduct, POSProduct } from "@/types/pos";
interface Props {
  products: ProductTable[];
  subcategories: SubCategory[];
  filterSubCatId?: number;
  addProduct: (product: POSProduct) => void;
  setFilter: <K extends keyof FilterProduct>(
    key: K,
    value: FilterProduct[K],
  ) => void;
}
export default function PosProduct({
  products = [],
  subcategories = [],
  filterSubCatId = 9,
  setFilter = () => {},
  addProduct = () => {},
}: Props) {
  return (
    <section className="flex-1">
      <ContentBox className="bg-white rounded-2xl border border-slate-200 p-4 mb-4">
        <ContentBox className="flex items-center gap-2 mb-2">
          <span className="text-xs font-bold text-slate-500 uppercase">
            Subcategorías
          </span>
        </ContentBox>
        <ContentBox className="flex gap-2 overflow-x-auto hide-scrollbar">
          <Button
            color={filterSubCatId === 0 ? "primary" : "secondary"}
            onPress={() => setFilter("subcategoryId", 0)}
          >
            Todos
          </Button>
          {subcategories.map((sub) => (
            <Button
              color={filterSubCatId === sub.id ? "primary" : "secondary"}
              key={sub.id}
              onPress={() => setFilter("subcategoryId", sub.id!)}
            >
              {sub.name}
            </Button>
          ))}
        </ContentBox>
      </ContentBox>
      <ContentBox className="flex items-center justify-between mb-3">
        <h2 className="font-bold text-lg text-slate-900">Productos</h2>
        <p className="text-xs text-slate-400">8 productos</p>
      </ContentBox>
      <ContentBox className="flex-1 overflow-y-auto grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 pr-2 pb-5">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            image={product.url ?? ""}
            name={product.name}
            price={product.price}
            stock={product.stock}
            hasExpiration={product.hasExpiration}
            brand={product.brand}
            addProduct={addProduct}
            category={product.categoryName}
          />
        ))}
      </ContentBox>
    </section>
  );
}

"use client"
import ListCategories from "./list-categories";
import { useCategoryTree } from "@/hooks/dashboard/useCategoryTree";
import NewCategory from "./new-input";

export default function FormNewCategoriePrincipal() {
  const { tree, addChild } = useCategoryTree([
    { id: 1, categorie: "aaa", parent_id: null },
  ]);
  return (
    <>
      <NewCategory onAdd={(name) => addChild(null, name)} />
      <ListCategories tree={tree} addChild={addChild} />
    </>
  );
}

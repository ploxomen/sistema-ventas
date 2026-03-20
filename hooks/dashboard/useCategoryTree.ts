"use client";
import { Category, CategoryNode } from "@/data/categorie/crud";
import { addChildNode } from "@/utils/categories/treeActions";
import { treeBuilder } from "@/utils/categories/treeBuilder";
import { useCallback, useState } from "react";

export function useCategoryTree(initialData: Category[]) {
  const [tree, setTree] = useState<CategoryNode[]>(() =>
    treeBuilder(initialData),
  );
  const addChild = useCallback((parentId: number | null, name: string) => {
    const newNode: CategoryNode = {
      id: Date.now(),
      categorie: name,
      parent_id: parentId,
      children: [],
    };
    setTree((prev) =>
      parentId === null
        ? [...prev, newNode]
        : addChildNode(prev, parentId, newNode),
    );
  }, []);

  return {
    tree,
    addChild,
  };
}

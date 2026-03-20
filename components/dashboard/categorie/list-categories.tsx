"use client";

import SubTitleCard from "../SubTitleCard";
import { ListIcon } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CategoryNode } from "@/data/categorie/crud";
import EmptyList from "../empty-list-categories";
import TreeCategory from "./tree-category";
import { memo } from "react";

const ListCategories = ({
  tree = [],
  addChild = () => {},
}: {
  tree: CategoryNode[];
  addChild: (parentId: number | null, name: string) => void;
}) => {
    console.log('renderizando lista')
  return (
    <Card>
      <CardHeader>
        <SubTitleCard
          title="Lista de categorías"
          icon={ListIcon}
          description="Lista de categorías y subcategorías"
        />
      </CardHeader>
      <CardContent>
        {!tree.length ? (
          <EmptyList description="No se encontraron categorías para listar" />
        ) : (
          <ul>
            {tree.map((node) => (
              <TreeCategory
                key={node.id}
                category={node}
                onAddChild={addChild}
              />
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
export default memo(ListCategories)
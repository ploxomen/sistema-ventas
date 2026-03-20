"use client";
import { ContentBox } from "@/components/setting-option";
import { Button } from "@/components/ui/button";
import { CategoryNode } from "@/data/categorie/crud";
import {
  ChevronRightIcon,
  CirclePlusIcon,
  CircleXIcon,
  PencilIcon,
} from "lucide-react";
import { memo } from "react";

const TreeCategory = ({
  category,
  onAddChild,
}: {
  category: CategoryNode;
  onAddChild: (parentId: number | null, name: string) => void;
}) => {
  const handleAdd = () => {
    const name = prompt("Nombre de la categoría:");
    if (!name) return;

    onAddChild(category.id, name);
  };
  return (
    <li className=" text-slate-500 ">
      <ContentBox className="flex items-center py-2 pl-1 rounded-lg cursor-pointer justify-between hover:bg-slate-100">
        <ContentBox className="flex-1 items-center flex gap-1">
          <ChevronRightIcon size={16} />
          {category.categorie}
        </ContentBox>
        <ContentBox className="flex gap-2">
          <Button size={"sm"} variant="secondary" onClick={handleAdd}>
            <CirclePlusIcon size={12} />
          </Button>
          <Button size={"sm"} variant="default">
            <PencilIcon size={12} />
          </Button>
          <Button size={"sm"} variant="destructive">
            <CircleXIcon size={12} />
          </Button>
        </ContentBox>
      </ContentBox>
      {category.children.length > 0 && (
        <ul className="ml-3">
          {category.children.map((cat) => (
            <TreeCategory category={cat} onAddChild={onAddChild} />
          ))}
        </ul>
      )}
    </li>
  );
};
export default memo(TreeCategory);

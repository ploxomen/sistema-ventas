"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import SubTitleCard from "../SubTitleCard";
import {
  BaggageClaimIcon,
  CheckCheckIcon,
  CheckIcon,
  CirclePlusIcon,
  CircleXIcon,
  ListIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@heroui/input";
import { ContentBox } from "@/components/setting-option";
import { CategorieListProps } from "@/data/categorie/crud";
import ListCategories from "./list-categories";

export default function FormNewCategoriePrincipal() {
  const [newCategorie, setNewCategorie] = useState<boolean | string>(false);
  const [listCategories, setListCategories] = useState<CategorieListProps[]>(
    [],
  );
  const handleNewCategorie = () => {
    if (typeof newCategorie !== "string") return;
    setListCategories((listCategorie) => [
      ...listCategorie,
      { id: null, categorie: newCategorie, sub_categories: [] },
    ]);
  };
  return (
    <>
      <Card className="mb-5">
        <CardHeader>
          <SubTitleCard
            title="Categoría principal"
            icon={BaggageClaimIcon}
            description="Crea una nueva categoría principal"
          />
        </CardHeader>
        <CardContent>
          {newCategorie === false && (
            <Button
              variant={"outline"}
              onClick={() => setNewCategorie(true)}
              className="w-full text-medium"
              size="lg"
            >
              <CirclePlusIcon size={20} />
              <span>Nueva categoría principal</span>
            </Button>
          )}
          {newCategorie && (
            <ContentBox className="flex gap-2">
              <Input
                variant="bordered"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNewCategorie(e.target.value)
                }
              />
              <Button variant="outline" onClick={() => handleNewCategorie()}>
                <CheckIcon size={20} />
              </Button>
              <Button
                variant="destructive"
                onClick={() => setNewCategorie(false)}
              >
                <CircleXIcon size={20} />
              </Button>
            </ContentBox>
          )}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <SubTitleCard
            title="Lista de categorías"
            icon={ListIcon}
            description="Lista de categorías y subcategorías"
          />
        </CardHeader>
        <CardContent>
          {!listCategories.length ? (
            <span>Sin lista</span>
          ) : (
            <ListCategories categories={listCategories} />
          )}
        </CardContent>
      </Card>
    </>
  );
}

"use client"
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React, { useState } from "react";
import SubTitleCard from "../SubTitleCard";
import { Button } from "@/components/ui/button";
import { BaggageClaimIcon, CheckIcon, CirclePlusIcon, CircleXIcon } from "lucide-react";
import { ContentBox } from "@/components/setting-option";
import { Input } from "@heroui/input";

export default function NewCategory({ onAdd }: { onAdd: (name: string) => void }) {
  const [value, setValue] = useState<boolean | string>("");

  return (
    <Card className="mb-5">
      <CardHeader>
        <SubTitleCard
          title="Categoría principal"
          icon={BaggageClaimIcon}
          description="Crea una nueva categoría principal"
        />
      </CardHeader>
      <CardContent>
        {value === false && (
          <Button
            variant={"outline"}
            onClick={() => setValue(true)}
            className="w-full text-medium"
            size="lg"
          >
            <CirclePlusIcon size={20} />
            <span>Nueva categoría principal</span>
          </Button>
        )}
        {(value || value === "") && (
          <ContentBox className="flex gap-2">
            <Input
              variant="bordered"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setValue(e.target.value)
              }
            />
            <Button variant="outline" onClick={() => onAdd(typeof value === "boolean" ? "" : value)}>
              <CheckIcon size={20} />
            </Button>
            <Button
              variant="destructive"
              onClick={() => setValue(false)}
            >
              <CircleXIcon size={20} />
            </Button>
          </ContentBox>
        )}
      </CardContent>
    </Card>
  );
}

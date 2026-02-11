import { ContentBox } from "@/components/setting-option";
import React from "react";
import ContentFilter from "../ContentFilter";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CountState from "./CountState";
import SelectOptions from "@/components/ui/autocomplete";
import { Search } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ArrowDownToLineIcon, EllipsisVerticalIcon, PrinterIcon } from "lucide-react";

export default function ListFilter() {
  return (
    <ContentFilter>
      <ContentBox className="px-5">
        <Tabs>
          <TabsList variant="line" className="gap-10">
            <TabsTrigger value="all" className="py-2 h-8 px-0">
              Todos
              <CountState color="black">20</CountState>
            </TabsTrigger>
            <TabsTrigger value="active" className="py-2 h-8 px-0">
              Activos
              <CountState color="green">20</CountState>
            </TabsTrigger>
            <TabsTrigger value="pending" className="py-2 h-8 px-0">
              Pendientes
              <CountState color="yellow">20</CountState>
            </TabsTrigger>
            <TabsTrigger value="banned" className="py-2 h-8 px-0">
              Anulados
              <CountState color="red">20</CountState>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </ContentBox>
      <ContentBox className="p-5 flex gap-4 items-center">
        <ContentBox className="w-56">
          <SelectOptions
            label="Roles"
            initialOptions={[{ name: "Administrador", selected: false }]}
          />
        </ContentBox>
        <ContentBox className="flex-1">
          <Search />
        </ContentBox>
        <ContentBox>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary">
                <EllipsisVerticalIcon className="size-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <PrinterIcon />
                Imprimir
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ArrowDownToLineIcon />
                Descargar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ContentBox>
      </ContentBox>
    </ContentFilter>
  );
}

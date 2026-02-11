import { ContentBox } from "@/components/setting-option";
import React from "react";
import ContentFilter from "../ContentFilter";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CountState from "./CountState";

export default function ListFilter() {
  return (
    <ContentFilter>
      <ContentBox className="px-5">
        <Tabs>
          <TabsList variant="line" className="gap-10">
            <TabsTrigger value="all" className="py-2 h-10 px-0">
              Todos
              <CountState color="black">20</CountState>
            </TabsTrigger>
            <TabsTrigger value="active" className="py-2 h-10 px-0">
              Activos
              <CountState color="green">20</CountState>
            </TabsTrigger>
            <TabsTrigger value="pending" className="py-2 h-10 px-0">
              Pendientes
              <CountState color="yellow">20</CountState>
            </TabsTrigger>
            <TabsTrigger value="banned" className="py-2 h-10 px-0">
              Anulados
              <CountState color="red">20</CountState>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </ContentBox>
    </ContentFilter>
  );
}

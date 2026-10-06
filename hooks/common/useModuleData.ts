"use client"
import { apiAxios } from "@/lib/apiAxios";
import { Module } from "@/types/module";
import { useCallback, useEffect, useState } from "react";

export const useModuleData = () => {
  const [modules, setModules] = useState<Module[]>([]);
  const onFetch = useCallback(async () => {
    const response = await apiAxios.get("modules");
    setModules(response.data);
  }, []);
  useEffect(() => {
    onFetch();
  }, []);
  return {
    modules,
  };
};

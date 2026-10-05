import { useConfirm } from "@/components/modal-confirmation";
import { apiAxios } from "@/lib/apiAxios";
import { Category } from "@/types/category";
import { useState } from "react";

export const useCategorie = ({
  openModal = () => {},
  onFetch = () => {},
}: {
  openModal: () => void;
  onFetch: () => void;
}) => {
  const confirm = useConfirm();
  const [categorie, setCategorie] = useState<Category | null>(null);
  const [status, setStatus] = useState<"EN_PROGRESO" | "CARGADO">("CARGADO");
  const onEdit = async (idCategory: number) => {
    setStatus("EN_PROGRESO");
    const response = await apiAxios.get("/categories/" + idCategory);
    setStatus("CARGADO");
    setCategorie(response.data);
    openModal();
  };
  const onDelete = async (idCategory: number) => {
    const ok = await confirm({
      title: "Eliminar Categoría",
      description: `¿Estás seguro de que deseas eliminar esta categoría"? Esta acción no se puede deshacer.`,
      confirmText: "Sí, eliminar",
      color: "danger",
    });
    if (!ok) return;
    setStatus("EN_PROGRESO");
    await apiAxios.delete("/categories/" + idCategory);
    setStatus("CARGADO");
    onFetch();
  };
  return {
    status,
    categorie,
    setCategorie,
    onEdit,
    onDelete,
  };
};

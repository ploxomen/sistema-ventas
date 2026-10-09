import { useConfirm } from "@/components/modal-confirmation";
import { StatusHttp } from "@/data/common/types";
import { apiAxios } from "@/lib/apiAxios";
import { Brand } from "@/types/brand";
import { useState } from "react";

export const useBrand = ({
  openModal = () => {},
  onFetch = () => {},
}: {
  openModal: () => void;
  onFetch: () => void;
}) => {
  const confirm = useConfirm();
  const [brand, setBrand] = useState<Brand | null>(null);
  const [status, setStatus] = useState<StatusHttp>("CARGADO");
  const onEdit = async (idCategory: number) => {
    setStatus("EN_PROGRESO");
    const response = await apiAxios.get("/brands/" + idCategory);
    setStatus("CARGADO");
    setBrand(response.data);
    openModal();
  };
  const onDelete = async (idCategory: number) => {
    const ok = await confirm({
      title: "Eliminar marca",
      description: `¿Estás seguro de que deseas eliminar esta marca"? Esta acción no se puede deshacer.`,
      confirmText: "Sí, eliminar",
      color: "danger",
    });
    if (!ok) return;
    setStatus("EN_PROGRESO");
    await apiAxios.delete("/brands/" + idCategory);
    setStatus("CARGADO");
    onFetch();
  };
  return {
    status,
    brand,
    setBrand,
    onEdit,
    onDelete,
  };
};

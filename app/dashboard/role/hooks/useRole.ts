import { useConfirm } from "@/components/modal-confirmation";
import { apiAxios } from "@/lib/apiAxios";
import { RoleForm } from "@/types/role";
import { useCallback, useState } from "react";

export const useRole = ({ onFetch = () => {}, openModal = () => {}, }: { onFetch: () => void, openModal: () => void; }) => {
  const confirm = useConfirm();
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState<RoleForm | null>(null);
  const onEdit = useCallback(async (id: number) => {
    setLoading(true);
    try {
      const response = await apiAxios.get("roles/" + id);
      setRole(response.data);
      openModal();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);
  const onDelete = async (id: number) => {
    const ok = await confirm({
      title: "Eliminar Rol",
      description: `¿Estás seguro de que deseas eliminar este rol"? Esta acción no se puede deshacer.`,
      confirmText: "Sí, eliminar",
      color: "danger",
    });
    if (!ok) return;
    setLoading(true);
    try {
      const response = await apiAxios.delete("roles/" + id);
      setRole(response.data);
      onFetch();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return {
    role,
    loading,
    onEdit,
    onDelete
  };
};

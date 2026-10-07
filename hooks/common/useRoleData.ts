import { apiAxios } from "@/lib/apiAxios";
import { RoleData } from "@/types/role";
import { useCallback, useEffect, useState } from "react";

export const useRoleData = () => {
  const [roles, setRoles] = useState<RoleData[]>([]);
  const onFetch = useCallback(async () => {
    const response = await apiAxios.get("roles");
    setRoles(response.data);
  }, []);
  useEffect(() => {
    onFetch();
  }, []);
  return {
    roles,
    onFetch
  };
};

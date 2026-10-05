import { apiAxios } from "@/lib/apiAxios";
import { Role } from "@/types/user";
import { useCallback, useEffect, useState } from "react";

export const useRoleData = () => {
  const [roles, setRoles] = useState<Role[]>([]);
  const onFetch = useCallback(async () => {
    const response = await apiAxios.get("roles");
    setRoles(response.data);
  }, []);
  useEffect(() => {
    onFetch();
  }, []);
  return {
    roles,
  };
};

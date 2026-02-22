import React from "react";
import TableDashboard from "../TableDashboard";
import { Columns } from "@/types/dashboard/table";

interface User {
  id: number;
  name: string;
  last_name: string;
}

export default function ListTable() {
  const columns: Columns<User>[] = [
    {
      name: "Avatar",
      column: "id",
      render(value, row) {
        return (
          <img
            className="size-12 rounded-full"
            src={`https://ui-avatars.com/api/?name=${row?.name}${row?.last_name}&size=128`}
          />
        );
      },
    },
    {
      name: "Nombres",
      column: "name",
    },
    {
      name: "Apellidos",
      column: "last_name",
    },
  ];
  const cells: User[] = [
    {
      id: 1,
      name: "Juan",
      last_name: "Pepe",
    },
    {
      id: 2,
      name: "Lucas",
      last_name: "Mendoza",
    },
  ];
  return <TableDashboard<User> cells={cells} columns={columns} />;
}

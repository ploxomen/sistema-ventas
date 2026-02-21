import React from "react";
import TableDashboard from "../TableDashboard";

interface User {
    name: string;
    last_name: string;
}

export default function ListTable() {
  const columns = [
    {
      name: "Nombres",
    },
    {
      name: "Apellidos",
    },
  ];
  const cells = [
    {
        name: "Juan",
        last_name: "Pepe"
    }
  ]
  return (
      <TableDashboard<User> cells={cells} columns={columns} />
  );
}

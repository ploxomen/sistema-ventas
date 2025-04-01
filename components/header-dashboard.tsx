import React from "react";
import { SidebarHeader, SidebarUser } from "./ui/sidebar";
import { TeamSwitcher } from "./team-switcher";
import { NavUser } from "./nav-user";
import NavSettings from "./nav-settings";

const data = {
    headquarters : [
        {
            name: "Acme Inc",
            plan: "Enterprise",
        }
    ],
    user: {
        name: "Jean",
        email: "jeanpi.jpct@gmail.com",
        avatar: "/avatars/shadcn.jpg",
    }
}

export default function HeaderDashboard() {
  return (
    <header className="flex items-center px-4 py-2 shrink-0 justify-between gap-2 transition-[width,height] ease-linear">
      <SidebarHeader>
        <TeamSwitcher teams={data.headquarters} />
      </SidebarHeader>
      <SidebarUser className="flex gap-2">
        <NavSettings /> 
        <NavUser user={data.user} />
      </SidebarUser>
    </header>
  );
}

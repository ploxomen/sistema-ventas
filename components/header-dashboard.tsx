import { SidebarHeader, SidebarUser } from "./ui/sidebar";
import { TeamSwitcher } from "./team-switcher";
import { NavUser } from "./nav-user";
import NavSettings from "./nav-settings";
import Header from "./header";

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
    <Header>
      <SidebarHeader>
        <TeamSwitcher teams={data.headquarters} />
      </SidebarHeader>
      <SidebarUser className="flex gap-2">
        <NavSettings /> 
        <NavUser user={data.user} />
      </SidebarUser>
    </Header>
  );
}

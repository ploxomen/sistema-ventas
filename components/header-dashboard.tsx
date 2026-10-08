import { SidebarHeader, SidebarUser } from "./ui/sidebar";
import { NavUser } from "./nav-user";
import NavSettings from "./nav-settings";
import Header from "./header";

export default function HeaderDashboard() {
  return (
    <Header>
      <SidebarHeader/>
      <SidebarUser className="flex gap-2">
        <NavSettings />
        <NavUser/>
      </SidebarUser>
    </Header>
  );
}

import { AppSidebar } from "@/components/app-sidebar";
import HeaderDashboard from "@/components/header-dashboard";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
export default function LayoutDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <HeaderDashboard/>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}

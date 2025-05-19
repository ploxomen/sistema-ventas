import { AppSidebar } from "@/components/app-sidebar";
import ContentMain from "@/components/content-main";
import HeaderDashboard from "@/components/header-dashboard";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
export default function LayoutDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar/>
      <SidebarInset>
        <HeaderDashboard/>
        <ContentMain>{children}</ContentMain>
      </SidebarInset>
    </SidebarProvider>
  );
}

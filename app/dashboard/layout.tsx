"use client";
import { AppSidebar } from "@/components/app-sidebar";
import ContentMain from "@/components/content-main";
import HeaderDashboard from "@/components/header-dashboard";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { usePositionSidebar } from "@/store/usePositionSidebar";
export default function LayoutDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
    const { positionSidebar } = usePositionSidebar();
  return (
    <SidebarProvider>
      <SidebarInset>
        <HeaderDashboard/>
        {positionSidebar !== "top" && <ContentMain>{children}</ContentMain>}
      </SidebarInset>
      <AppSidebar/>
      {positionSidebar ==="top" && <ContentMain>{children}</ContentMain>}

    </SidebarProvider>
  );
}

"use client";
import { AppSidebar } from "@/components/app-sidebar";
import ContentMain from "@/components/content-main";
import HeaderDashboard from "@/components/header-dashboard";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { useAuthStore } from "@/store/useAuth";
import { usePositionSidebar } from "@/store/usePositionSidebar";
import { useEffect } from "react";
export default function LayoutDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  const { positionSidebar } = usePositionSidebar();
  const fetchUser = useAuthStore((state) => state.fetchUser);

  useEffect(() => {
    fetchUser();
  }, []);
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

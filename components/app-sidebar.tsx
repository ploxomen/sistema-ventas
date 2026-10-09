"use client";

import * as React from "react";
import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useDirectionStore } from "@/store/useDirectionStore";
import { Position, usePositionSidebar } from "@/store/usePositionSidebar";
import { useAuthStore } from "@/store/useAuth";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { isRTL } = useDirectionStore();
  const { positionSidebar } = usePositionSidebar();
  const {moduleGroup} = useAuthStore();
  let position: Position = "left";
  if (!isRTL && positionSidebar === "right") {
    position = "right";
  } else if (isRTL && positionSidebar === "left") {
    position = "right";
  } else if(positionSidebar === "top"){
    position = "top";
  }
  return (
    <Sidebar collapsible="icon" {...props} side={position}>
      <SidebarTrigger className="absolute cursor-pointer bg-white rounded-full z-10 top-2 ltr:-right-3.5 rtl:-left-3.5 group-data-[side=right]:-right-3.5 group-data-[side=right]:-left-3.5" />
      <SidebarContent>
        <NavMain items={moduleGroup} />
      </SidebarContent>
    </Sidebar>
  );
}

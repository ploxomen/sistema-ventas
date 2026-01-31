"use client";
import { useColorSidebar } from "@/store/useColorSidebar";
import { usePositionSidebar } from "@/store/usePositionSidebar";
export default function Header({ children }: { children: React.ReactNode }) {
  const { positionSidebar } = usePositionSidebar();
  const { colorSidebar} = useColorSidebar();
  return (
    <header
      className={`group flex items-center px-10 data-[slider=right]:flex-row-reverse data-[slider=top]:data-[sidebar-color=black]:bg-[#141A21] shrink-0 justify-between gap-2 transition-[width,height] ease-linear`}
      data-slider={positionSidebar}
      data-sidebar-color={colorSidebar}>
      {children}
    </header>
  );
}

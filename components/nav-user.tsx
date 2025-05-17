"use client";

import {
  BadgeCheck,
  BedSingle,
  Bell,
  ChevronsUpDown,
  CreditCard,
  House,
  LogOut,
  Sparkles,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";

export function NavUser({
  user,
}: {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}) {
  const { isMobile } = useSidebar();

  return (
    <Sheet>
      <SheetTrigger>
        <Avatar className="size-10 cursor-pointer">
          <AvatarImage src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/images/mock/avatar/avatar-25.webp" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px]" bgOverlay="bg-trasnparent">
        <SheetTitle className="hidden">Contenido usuario</SheetTitle>
        <div className="py-10 px-8">
          <Avatar className="size-30 cursor-pointer m-auto">
            <AvatarImage src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/images/mock/avatar/avatar-25.webp" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="text-center mt-1 mb-10">
            <p className="text-slate-700 font-bold">{user.name}</p>
            <p className="text-slate-400">{user.email}</p>
          </div>
          <div className="my-4">
            <ul className="flex flex-col gap-4 text-gray-500">
              <li className="hover:bg-slate-200 rounded-md">
                <a href="" className="p-2 flex gap-2">
                  <House />
                  <span className="font-semibold">Home</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <SheetFooter>
          <Button variant={"success"}>Cerrar sesión</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

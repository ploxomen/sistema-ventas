"use client";

import { House } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSidebar } from "@/components/ui/sidebar";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { useDirectionStore } from "@/store/useDirectionStore";

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
  const { isRTL } = useDirectionStore();
  return (
    <Sheet>
      <SheetTrigger>
        <div className="size-10 cursor-pointer p-1 relative overflow-hidden">
          <div className="border-t-blue-500 border-r-blue-500 border-1 rounded-full border-b-amber-500 border-l-amber-500 animate-[spin_4s_linear_infinite] size-full top-0 left-0 absolute"></div>
          <Avatar className="size-full">
            <AvatarImage src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/images/mock/avatar/avatar-25.webp" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </SheetTrigger>
      <SheetContent
        side={isRTL ? "left" : "right"}
        className="w-[320px]"
        bgOverlay="bg-trasnparent"
      >
        <SheetTitle className="hidden">Contenido usuario</SheetTitle>
        <div className="pt-14 pb-6 overflow-y-auto">
          <div className="p-1 relative size-[84px] m-auto overflow-hidden">
            <div className="animate-[spin_4s_linear_infinite] rounded-full border-b-2 border-blue-500 size-full absolute top-0 left-0"></div>
            <Avatar className="size-full">
              <AvatarImage src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/images/mock/avatar/avatar-25.webp" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="text-center mt-6 pb-6">
            <p className="text-white font-semibold text-base">{user.name}</p>
            <p className="text-slate-400 mt-1 text-sm">{user.email}</p>
          </div>
          <ul className="flex border-y-1 border-dashed px-5 py-6 flex-col gap-4 text-gray-500">
            <li className="hover:bg-accent rounded-md p-2">
              <a href="" className="flex gap-4">
                <House className="size-6" />
                <span className="text-sm">Home</span>
              </a>
            </li>
            <li className="hover:bg-accent rounded-md p-2">
              <a href="" className="flex gap-4">
                <House className="size-6" />
                <span className="text-sm">Home</span>
              </a>
            </li>
            <li className="hover:bg-accent rounded-md p-2">
              <a href="" className="flex gap-4">
                <House className="size-6" />
                <span className="text-sm">Home</span>
              </a>
            </li>
            <li className="hover:bg-accent rounded-md p-2">
              <a href="" className="flex gap-4">
                <House className="size-6" />
                <span className="text-sm">Home</span>
              </a>
            </li>
            <li className="hover:bg-accent rounded-md p-2">
              <a href="" className="flex gap-4">
                <House className="size-6" />
                <span className="text-sm">Home</span>
              </a>
            </li>
            <li className="hover:bg-accent rounded-md p-2">
              <a href="" className="flex gap-4">
                <House className="size-6" />
                <span className="text-sm">Home</span>
              </a>
            </li>
            <li className="hover:bg-accent rounded-md p-2">
              <a href="" className="flex gap-4">
                <House className="size-6" />
                <span className="text-sm">Home</span>
              </a>
            </li>
            <li className="hover:bg-accent rounded-md p-2">
              <a href="" className="flex gap-4">
                <House className="size-6" />
                <span className="text-sm">Home</span>
              </a>
            </li>
            <li className="hover:bg-accent rounded-md p-2">
              <a href="" className="flex gap-4">
                <House className="size-6" />
                <span className="text-sm">Home</span>
              </a>
            </li>
            <li className="hover:bg-accent rounded-md p-2">
              <a href="" className="flex gap-4">
                <House className="size-6" />
                <span className="text-sm">Home</span>
              </a>
            </li>
            <li className="hover:bg-accent rounded-md p-2">
              <a href="" className="flex gap-4">
                <House className="size-6" />
                <span className="text-sm">Home</span>
              </a>
            </li>
          </ul>
        </div>
        <SheetFooter>
          <Button
            variant={"default"}
            className="bg-red-400/15 h-12 hover:bg-red-500/25 text-red-400 font-bold"
          >
            Cerrar sesión
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

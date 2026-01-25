"use client";
import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import {
  ArrowRightLeft,
  Contrast,
  Scaling,
  Settings,
  SunMoon,
} from "lucide-react";
import { ButtonSvg, ContentBox, ContentSettignBox, ContentSettignOption } from "./setting-option";
import { useTheme } from "next-themes";
import { useDirectionStore } from "@/store/useDirectionStore";
import { useContract } from "@/store/useContract";
import { useContrast } from "@/store/useContrast";
import LayoutNavTop from "./icons/LayoutNavTop";
import LayoutNavLeft from "./icons/LayoutNavLeft";
import LayoutNavRight from "./icons/LayoutNavRight";

export default function NavSettings() {
  const { setTheme, theme } = useTheme();
  const { toggleRTL, isRTL } = useDirectionStore();
  const { toggleContract, isContract } = useContract();
  const { toggleContrast, isContrast } = useContrast();
  const handleChangeTheme = (checked: boolean) =>
    setTheme(checked ? "dark" : "light");
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <Settings className="animate-[spin_3s_linear_infinite] size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side={isRTL ? "left" : "right"}
        className="w-[360px] sm:w-[360px]"
        bgOverlay="bg-trasnparent"
      >
        <SheetHeader className="px-5 pt-5 pb-1">
          <SheetTitle className="text-xl font-semibold">Configuración</SheetTitle>
        </SheetHeader>
        <ContentBox className="pb-5 px-5 flex flex-col gap-4">
          <ContentBox className="grid grid-cols-2 gap-4">
            <ContentBox className="col-span-1">
              <ContentSettignOption
                text="Modo oscuro"
                icon={SunMoon}
                onCheckedChange={handleChangeTheme}
                checked={theme === "dark"}
              />
            </ContentBox>
            <ContentBox className="col-span-1">
              <ContentSettignOption
                text="Contraste"
                icon={Contrast}
                onCheckedChange={toggleContrast}
                checked={isContrast}
              />
            </ContentBox>
            <ContentBox className="col-span-1">
              <ContentSettignOption
                text="Posicionamiento"
                icon={ArrowRightLeft}
                onCheckedChange={toggleRTL}
                checked={isRTL}
              />
            </ContentBox>
            <ContentBox className="col-span-1">
              <ContentSettignOption
                text="Compacto"
                icon={Scaling}
                onCheckedChange={toggleContract}
                checked={isContract}
              />
            </ContentBox>
          </ContentBox>
          <ContentSettignBox>
            <ContentBox className="flex gap-3">
              <ButtonSvg Icon={LayoutNavLeft}></ButtonSvg>
              <ButtonSvg Icon={LayoutNavTop}></ButtonSvg>
              <ButtonSvg Icon={LayoutNavRight}></ButtonSvg>
            </ContentBox>
          </ContentSettignBox>
        </ContentBox>
      </SheetContent>
    </Sheet>
  );
}

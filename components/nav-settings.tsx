"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import {
  ArrowRightLeft,
  CaseSensitiveIcon,
  Contrast,
  Scaling,
  Settings,
  SunMoon,
} from "lucide-react";
import {
  BadgeAsNav,
  ButtonBase,
  ButtonSvg,
  ContentBox,
  ContentSettignBox,
  ContentSettignOption,
  SliderFont,
} from "./setting-option";
import { useTheme } from "next-themes";
import { useDirectionStore } from "@/store/useDirectionStore";
import { useContract } from "@/store/useContract";
import { useContrast } from "@/store/useContrast";
import LayoutNavTop from "./icons/LayoutNavTop";
import LayoutNavLeft from "./icons/LayoutNavLeft";
import LayoutNavRight from "./icons/LayoutNavRight";
import ColorIntegrate from "./icons/ColorIntegrate";
import ColorApparent from "./icons/ColorApparent";
import Layout from "./icons/Layout";
import { colorMap, colors, useThemeColor } from "@/store/useThemeColor";

export default function NavSettings() {
  const { setTheme, theme } = useTheme();
  const { toggleRTL, isRTL } = useDirectionStore();
  const { toggleContract, isContract } = useContract();
  const { toggleContrast, isContrast } = useContrast();
  const { setPrimaryColor, primaryColor } = useThemeColor();
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
          <SheetTitle className="text-xl font-semibold">
            Configuración
          </SheetTitle>
        </SheetHeader>
        <ContentBox className="no-scrollbar overflow-y-auto pb-5 px-5 flex flex-col gap-11">
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
            <BadgeAsNav text="Navegación" />
            <ContentBox className="flex gap-3 flex-col">
              <ContentBox className="flex gap-3 flex-col">
                <ButtonBase>Posición</ButtonBase>
                <ContentBox className="flex gap-3">
                  <ButtonSvg Icon={LayoutNavLeft}></ButtonSvg>
                  <ButtonSvg Icon={LayoutNavTop}></ButtonSvg>
                  <ButtonSvg Icon={LayoutNavRight}></ButtonSvg>
                </ContentBox>
              </ContentBox>
              <ContentBox className="flex gap-3 flex-col">
                <ButtonBase>Color</ButtonBase>
                <ContentBox className="flex gap-3">
                  <ButtonSvg
                    className="flex-1/2 justify-center text-xs h-14"
                    Icon={ColorIntegrate}
                    text="Claro"
                  />
                  <ButtonSvg
                    className="flex-1/2 justify-center text-xs h-14"
                    Icon={ColorApparent}
                    text="Oscuro"
                  />
                </ContentBox>
              </ContentBox>
            </ContentBox>
          </ContentSettignBox>
          <ContentSettignBox>
            <BadgeAsNav text="Color" />
            <ContentBox className="grid grid-cols-3 gap-3">
              {colors.map((color) => (
                <ButtonSvg
                  key={color}
                  className={`col-span-1 justify-center text-xs h-14 rounded-xl`}
                  style={{
                    backgroundColor:
                      color === primaryColor ? `rgb(${colorMap[color]},0.2)` : "",
                  }}
                  Icon={Layout}
                  onClick={(e) => setPrimaryColor(color)}
                  iconProps={{
                    style: {
                      color: `rgb(${colorMap[color]})`,
                    },
                  }}
                />
              ))}
            </ContentBox>
          </ContentSettignBox>
          <ContentSettignBox>
            <BadgeAsNav text="Fuentes" />
            <ContentBox className="flex gap-3 flex-col">
              <ContentBox className="flex gap-3 flex-col">
                <ButtonBase>Tipo de letra</ButtonBase>
                <ContentBox className="grid grid-cols-2 gap-3">
                  <ButtonSvg
                    Icon={CaseSensitiveIcon}
                    className="flex-col gap-0 py-4"
                    text="Public Sans"
                    iconProps={{
                      className: "text-2xl size-7",
                    }}
                  />
                  <ButtonSvg
                    Icon={CaseSensitiveIcon}
                    className="flex-col gap-0 py-4"
                    text="Public Sans"
                    iconProps={{
                      className: "text-2xl size-7",
                    }}
                  />
                  <ButtonSvg
                    Icon={CaseSensitiveIcon}
                    className="flex-col gap-0 py-4"
                    text="Public Sans"
                    iconProps={{
                      className: "text-2xl size-7",
                    }}
                  />
                  <ButtonSvg
                    Icon={CaseSensitiveIcon}
                    className="flex-col gap-0 py-4"
                    text="Public Sans"
                    iconProps={{
                      className: "text-2xl size-7",
                    }}
                  />
                </ContentBox>
              </ContentBox>
              <ContentBox className="flex flex-col gap-3">
                <ButtonBase>Tamaño</ButtonBase>
                <SliderFont valueInitial={20} />
              </ContentBox>
            </ContentBox>
          </ContentSettignBox>
        </ContentBox>
      </SheetContent>
    </Sheet>
  );
}

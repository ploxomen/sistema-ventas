"use client"
import React from 'react'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import { ArrowRightLeft, Contrast, Scaling, Settings, SunMoon } from 'lucide-react';
import { ContentBox, ContentSettignOption } from './setting-option';
import { useTheme } from 'next-themes';

export default function NavSettings() {
  const { setTheme, theme} = useTheme();
  const handleChangeTheme = (checked: boolean) => setTheme(checked ? 'dark' : 'light')
  
    return (
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
                <Settings />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[360px] sm:w-[540px] dark:bg-[rgba(20, 26, 33, 0.9)] bg-[url(/background-dialog.svg)] bg-no-repeat shadow-[-40px_40px_80px_-8px_red] bg-[size:50%] bg-[position:100%_0] backdrop-blur-xl" bgOverlay="bg-trasnparent">
            <SheetTitle className="hidden">Contenido configuración</SheetTitle>
            <div className="py-10 px-8">
              <div className="grid grid-cols-2 gap-4">
                <ContentBox className='col-span-1'>
                    <ContentSettignOption text='Modo oscuro' icon={SunMoon} onCheckedChange={handleChangeTheme} checked={theme === "dark"}/>
                </ContentBox>
                <ContentBox className='col-span-1'>
                    <ContentSettignOption text='Contraste' icon={Contrast} onCheckedChange={handleChangeTheme} checked={false}/>
                </ContentBox>
                <ContentBox className='col-span-1'>
                    <ContentSettignOption text='Posicionamiento' icon={ArrowRightLeft} onCheckedChange={handleChangeTheme} checked={false}/>
                </ContentBox>
                <ContentBox className='col-span-1'>
                    <ContentSettignOption text='Compacto' icon={Scaling} onCheckedChange={handleChangeTheme} checked={false}/>
                </ContentBox>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      );
}

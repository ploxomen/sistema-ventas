"use client"
import React from 'react'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import { ArrowRightLeft, Contrast, Scaling, Settings, SunMoon } from 'lucide-react';
import { ContentBox, ContentSettignOption } from './setting-option';
import { useTheme } from 'next-themes';
import { useDirectionStore } from '@/store/useDirectionStore';

export default function NavSettings() {
  const { setTheme, theme} = useTheme();
  const {toogleRTL,isRTL} = useDirectionStore();
  const handleChangeTheme = (checked: boolean) => setTheme(checked ? 'dark' : 'light')
  // const handleChangeDirection = (checked : boolean) => 
    return (
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost">
                <Settings className="animate-[spin_3s_linear_infinite] size-5"/>
            </Button>
          </SheetTrigger>
          <SheetContent side={isRTL ? 'left' : 'right'} className="w-[360px] sm:w-[540px]" bgOverlay="bg-trasnparent">
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
                    <ContentSettignOption text='Posicionamiento' icon={ArrowRightLeft} onCheckedChange={toogleRTL} checked={isRTL}/>
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

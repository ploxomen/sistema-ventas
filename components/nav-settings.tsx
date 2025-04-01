"use client"
import React from 'react'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import { ArrowRightLeft, Contrast, Scaling, Settings, SunMoon } from 'lucide-react';
import { ContentBox, ContentSettignOption } from './setting-option';

export default function NavSettings() {
    return (
        <Sheet>
          <SheetTrigger>
            <Button variant="secondary">
                <Settings />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[400px] sm:w-[540px]" bgOverlay="bg-trasnparent">
            <div className="py-10 px-8">
              <div className="grid grid-cols-2 gap-4">
                <ContentBox className='col-span-1'>
                    <ContentSettignOption text='Modo oscuro' icon={SunMoon}/>
                </ContentBox>
                <ContentBox className='col-span-1'>
                    <ContentSettignOption text='Contraste' icon={Contrast}/>
                </ContentBox>
                <ContentBox className='col-span-1'>
                    <ContentSettignOption text='Posicionamiento' icon={ArrowRightLeft}/>
                </ContentBox>
                <ContentBox className='col-span-1'>
                    <ContentSettignOption text='Compacto' icon={Scaling}/>
                </ContentBox>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      );
}

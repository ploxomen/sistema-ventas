"use client"
import React from 'react'
import PosSearch from './PosSearch'
import { ContentBox } from '@/components/setting-option'
import PosProduct from './PosProduct'
import PosCar from './PosCar'
import { useDisclosure } from '@heroui/react'
import PosSaleModal from './PosSaleModal'

export default function PosManager() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <>
    <PosSearch />
    <ContentBox className='flex gap-5'>
        <PosProduct/>
        <PosCar openCar={onOpen}/>
    </ContentBox>
    <PosSaleModal isOpen={isOpen} onOpenChange={onOpenChange} total={30}/>
    </>
  )
}

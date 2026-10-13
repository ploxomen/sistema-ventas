"use client"
import React from 'react'
import PosSearch from './PosSearch'
import { ContentBox } from '@/components/setting-option'
import PosProduct from './PosProduct'
import PosCar from './PosCar'
import { useDisclosure } from '@heroui/react'
import PosSaleModal from './PosSaleModal'
import { useDataTable } from "@/hooks/tables/useDataTable";

export default function PosManager() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const {data : products} = useDataTable({
    endpoint : "product",
    initialPageSize : 15,
    initialFilters : {
      categoryId : 0,
      subcategoryId : 0
    }
  });
  return (
    <>
    <PosSearch />
    <ContentBox className='flex gap-5'>
        <PosProduct products={products}/>
        <PosCar openCar={onOpen}/>
    </ContentBox>
    <PosSaleModal isOpen={isOpen} onOpenChange={onOpenChange} total={30}/>
    </>
  )
}

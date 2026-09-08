import React from 'react'
import PosSearch from './PosSearch'
import { ContentBox } from '@/components/setting-option'
import PosProduct from './PosProduct'
import PosCar from './PosCar'

export default function PosManager() {
  return (
    <>
    <PosSearch />
    <ContentBox className='flex gap-5'>
        <PosProduct/>
        <PosCar />
    </ContentBox>
    </>
  )
}

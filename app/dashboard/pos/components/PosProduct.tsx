"use client"
import { ContentBox } from '@/components/setting-option'
import { Button } from '@heroui/react'
import React from 'react'
import ProductItem from './ProductItem'

export default function PosProduct() {
    return (
        <section className='flex-1'>
            <ContentBox className='bg-white rounded-2xl border border-slate-200 p-4 mb-4'>
                <ContentBox className='flex items-center gap-2 mb-2'>
                    <span className='text-xs font-bold text-slate-500 uppercase'>Categoría</span>
                </ContentBox>
                <ContentBox className='flex gap-2 overflow-x-auto hide-scrollbar'>
                    <Button color='primary'>
                        Todos
                    </Button>
                    <Button color='secondary'>Bebidas</Button>
                    <Button color='secondary'>Snacks</Button>
                </ContentBox>
            </ContentBox>
            <ContentBox className="flex items-center justify-between mb-3">
                <h2 className="font-bold text-lg text-slate-900">
                    Productos
                </h2>
                <p className="text-xs text-slate-400">8 productos</p>
            </ContentBox>
            <ContentBox className='flex-1 overflow-y-auto grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 pr-2 pb-5'>
                <ProductItem key={1} image='https://dojiw2m9tvv09.cloudfront.net/70491/product/oreo3852.jpg' name='Galleta oreo' price={2.40} stock={20} hasExpiration={false} brand='Oreo' subcategory='Galletas'/>
                <ProductItem key={1} image='https://corporacionliderperu.com/52349-large_default/cerveza-pilsen-bt-x-630-ml.jpg' name='Cerveza Pilsen 650ml' price={7} stock={20} hasExpiration={false} brand='Pilsen' subcategory='Cerveza'/>
            </ContentBox>
        </section>
    )
}

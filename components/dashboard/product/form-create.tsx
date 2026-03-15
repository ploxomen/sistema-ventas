import { Card, CardContent, CardHeader } from '@/components/ui/card'
import React from 'react'
import SubTitleCard from '../SubTitleCard'
import { Apple } from 'lucide-react'

export default function FormProduct() {
  return (
    <Card className='gap-1'>
        <CardHeader>
          <SubTitleCard title='Producto' icon={Apple} description='Establece el nombre, categoria, modelo, descripción e imágenes'/>
        </CardHeader>
        <CardContent>
          <h1>sdsad</h1>
        </CardContent>
    </Card>
  )
}

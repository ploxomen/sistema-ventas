import React from 'react'
import { ContentBox } from '../setting-option'
import { Input } from '../ui/input'

export default function Filter({children}: {children?: React.ReactNode}) {
  return (
    <ContentBox className='p-4'>
      {children}
      <Input/>
    </ContentBox>
  )
}

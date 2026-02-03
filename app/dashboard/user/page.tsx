import BreadcrumbSeparatorNavegation from '@/components/breadcrumd-separator-navigation'
import { ContentBox } from '@/components/setting-option'
import TitleModule from '@/components/title-module'
import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'
import React from 'react'

export default function UserList() {
  return (
    <ContentBox className='flex gap-4'>
        <ContentBox className='flex flex-1 flex-col gap-4'>
          <TitleModule title='Lista de usuarios'/>
          <BreadcrumbSeparatorNavegation navigations={[
            { url: "/dashboard", title: "Dashboard" },
            { url: "/dashboard/user", title: "Usuarios" },
            { url: null, title: "Lista de usuarios" }
          ]}/>
        </ContentBox>
        <Button variant={'default'}>
          <PlusIcon className='size-4' />
          <strong>Nuevo usuario</strong>
        </Button>
    </ContentBox>
  )
}

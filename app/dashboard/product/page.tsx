import BreadcrumbSeparatorNavegation from '@/components/breadcrumd-separator-navigation';
import { ContentBox } from '@/components/setting-option';
import TitleModule from '@/components/title-module';
import { navigationProduct } from '@/data/product/navigation';
import React from 'react'
import { MisProductosManager } from './components/MisProductosManager';

export default function page() {
  return (
      <>
        <ContentBox className="mb-4">
          <TitleModule title="Mis productos" />
          <BreadcrumbSeparatorNavegation navigations={navigationProduct} />
        </ContentBox>
        <MisProductosManager />
      </>
    );
}

import BreadcrumbSeparatorNavegation from '@/components/breadcrumd-separator-navigation';
import { ContentBox } from '@/components/setting-option';
import TitleModule from '@/components/title-module';
import { navigationCategories } from '@/data/categorie/navigation';
import React from 'react'
import PosManager from './components/PosManager';

export default function Pos() {
  return (
    <>
      <ContentBox className="mb-4">
        <TitleModule title="Punto de venta" />
        <BreadcrumbSeparatorNavegation navigations={navigationCategories} />
      </ContentBox>
      <PosManager />
    </>
  );
}

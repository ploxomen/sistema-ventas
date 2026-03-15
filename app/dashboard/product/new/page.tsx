import BreadcrumbSeparatorNavegation from "@/components/breadcrumd-separator-navigation";
import FormProduct from "@/components/dashboard/product/form-create";
import { ContentBox } from "@/components/setting-option";
import TitleModule from "@/components/title-module";
import { navigationProductList } from "@/data/product/navigation";
import React from "react";

export default function NewProduct() {
  return (
    <>
      <ContentBox className="mb-4">
        <TitleModule title="Nuevo producto" />
        <BreadcrumbSeparatorNavegation navigations={navigationProductList} />
      </ContentBox>
      <FormProduct/>
    </>
  );
}

import BreadcrumbSeparatorNavegation from "@/components/breadcrumd-separator-navigation";
import { ContentBox } from "@/components/setting-option";
import TitleModule from "@/components/title-module";
import { navigationProductList } from "@/data/product/navigation";
import ProductForm from "../components/ProductForm";

export default function NewProduct() {

  return (
    <>
      <ContentBox className="mb-4">
        <TitleModule title="Nuevo producto" />
        <BreadcrumbSeparatorNavegation navigations={navigationProductList} />
      </ContentBox>
      <ProductForm />
    </>
  );
}

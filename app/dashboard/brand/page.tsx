import BreadcrumbSeparatorNavegation from "@/components/breadcrumd-separator-navigation";
import { ContentBox } from "@/components/setting-option";
import TitleModule from "@/components/title-module";
import { navigationBrands } from "@/data/categorie/navigation";
import { BrandManager } from "./components/BrandManager";

export default function Categorie() {
  return (
    <>
      <ContentBox className="mb-4">
        <TitleModule title="Marcas" />
        <BreadcrumbSeparatorNavegation navigations={navigationBrands} />
      </ContentBox>
      <BrandManager />
    </>
  );
}

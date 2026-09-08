import BreadcrumbSeparatorNavegation from "@/components/breadcrumd-separator-navigation";
import { ContentBox } from "@/components/setting-option";
import TitleModule from "@/components/title-module";
import { navigationCategories } from "@/data/categorie/navigation";
import { CategoryManager } from "./components/CategoriyManager";

export default function Categorie() {
  return (
    <>
      <ContentBox className="mb-4">
        <TitleModule title="Categorías" />
        <BreadcrumbSeparatorNavegation navigations={navigationCategories} />
      </ContentBox>
      <CategoryManager />
    </>
  );
}

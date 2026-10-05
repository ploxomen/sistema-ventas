import BreadcrumbSeparatorNavegation from "@/components/breadcrumd-separator-navigation";
import { ContentBox } from "@/components/setting-option";
import TitleModule from "@/components/title-module";
import { navigationProductList } from "@/data/product/navigation";
import UserFormManager from "../components/UserFormManager";

export default function NewUser() {

  return (
    <>
      <ContentBox className="mb-4">
        <TitleModule title="Nuevo usuario" />
        <BreadcrumbSeparatorNavegation navigations={navigationProductList} />
      </ContentBox>
      <UserFormManager />
    </>
  );
}

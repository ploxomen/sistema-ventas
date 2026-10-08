import BreadcrumbSeparatorNavegation from "@/components/breadcrumd-separator-navigation";
import { ContentBox } from "@/components/setting-option";
import TitleModule from "@/components/title-module";
import UserFormManager from "../components/UserFormManager";
import { navigationUserList } from "@/data/user/navigation";

export default function NewUser() {

  return (
    <>
      <ContentBox className="mb-4">
        <TitleModule title="Nuevo usuario" />
        <BreadcrumbSeparatorNavegation navigations={navigationUserList} />
      </ContentBox>
      <UserFormManager user={null} />
    </>
  );
}

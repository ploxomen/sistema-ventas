import BreadcrumbSeparatorNavegation from "@/components/breadcrumd-separator-navigation";
import { ContentBox } from "@/components/setting-option";
import TitleModule from "@/components/title-module";
import UserFormManager from "../components/UserFormManager";
import { apiAxiosServer } from "@/lib/apiAxiosServer";
import { navigationUserEdit } from "@/data/user/navigation";
interface RouteContext {
  params: Promise<{ id: string }>;
}
const getUser = async (id: string) => {
  const response = await apiAxiosServer.get("users/" + id);
  return response.data;
};

export default async function UpdateUser(context: RouteContext) {
  const { id } = await context.params;
  const user = await getUser(id);
  return (
    <>
      <ContentBox className="mb-4">
        <TitleModule title="Editar usuario" />
        <BreadcrumbSeparatorNavegation navigations={navigationUserEdit} />
      </ContentBox>
      <UserFormManager user={user}/>
    </>
  );
}

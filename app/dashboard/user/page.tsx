import BreadcrumbSeparatorNavegation from "@/components/breadcrumd-separator-navigation";
import ContentTableFilter from "@/components/dashboard/content-table-filter";
import { ContentBox } from "@/components/setting-option";
import TitleModule from "@/components/title-module";
import SelectOptions from "@/components/ui/autocomplete";
import { Button } from "@/components/ui/button";
import { navigationUserList } from "@/data/user/navigation";
import { PlusIcon } from "lucide-react";
import React from "react";

export default function UserList() {
  return (
    <>
      <ContentBox className="flex gap-4">
        <ContentBox className="flex flex-1 flex-col gap-4">
          <TitleModule title="Lista de usuarios" />
          <BreadcrumbSeparatorNavegation navigations={navigationUserList} />
        </ContentBox>
        <Button>
          <PlusIcon className="size-4" />
          <strong>Nuevo usuario</strong>
        </Button>
      </ContentBox>
      <ContentTableFilter>
        <SelectOptions
          label="Roles"
          initialOptions={[
            { name: "Administrador", selected: false },
            { name: "Usuario", selected: false },
            { name: "Invitado", selected: false },
          ]}
        />
      </ContentTableFilter>
    </>
  );
}

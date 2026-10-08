import BreadcrumbSeparatorNavegation from "@/components/breadcrumd-separator-navigation";
import { ContentBox } from "@/components/setting-option";
import TitleModule from "@/components/title-module";
import React from "react";
import UsuarioManager from "./components/UsuarioManager";
import { navigationUserTable } from "@/data/user/navigation";

export default function UserPage() {
  return (
    <>
      <ContentBox className="mb-4">
        <TitleModule title="Usuarios" />
        <BreadcrumbSeparatorNavegation navigations={navigationUserTable} />
      </ContentBox>
      <UsuarioManager />
    </>
  );
}

"use client";
import BreadcrumbSeparatorNavegation from "@/components/breadcrumd-separator-navigation";
import { ContentBox } from "@/components/setting-option";
import TitleModule from "@/components/title-module";
import { navigationProductList } from "@/data/product/navigation";
import RoleManager from "./components/RoleManager";
import RoleModal from "./components/RoleModal";
import { Button } from "@heroui/react";
import { Plus } from "lucide-react";
import { useModuleData } from "@/hooks/common/useModuleData";
import { useDisclosure } from "@heroui/react";
import { useRoleData } from "@/hooks/common/useRoleData";
import { useRole } from "./hooks/useRole";
import { LoaderOverlay } from "@/components/loader-overlay";

export default function Role() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { roles, onFetch } = useRoleData();
  const { modules } = useModuleData();
  const { onDelete, onEdit, role, onReset, loading } = useRole({
    onFetch,
    openModal: onOpen,
  });

  return (
    <>
      <ContentBox className="mb-4 flex">
        <ContentBox className="flex-1">
          <TitleModule title="Roles del sistema" />
          <BreadcrumbSeparatorNavegation navigations={navigationProductList} />
        </ContentBox>
        <Button
          color="primary"
          onPress={() => {
            onReset();
            onOpen();
          }}
        >
          <Plus />
          Agregar rol
        </Button>
      </ContentBox>
      <RoleManager roles={roles} onDelete={onDelete} onEdit={onEdit} />
      <RoleModal
        onFech={onFetch}
        role={role}
        modules={modules}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
      {loading && <LoaderOverlay isVisible/>}
    </>
  );
}

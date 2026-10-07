 "use client"
import BreadcrumbSeparatorNavegation from "@/components/breadcrumd-separator-navigation";
import { ContentBox } from "@/components/setting-option";
import TitleModule from "@/components/title-module";
import { navigationProductList } from "@/data/product/navigation";
import RoleManager from './components/RoleManager'
import RoleModal from './components/RoleModal'
import {
  Button
} from "@heroui/react";
import { Plus } from "lucide-react";
import {useModuleData} from "@/hooks/common/useModuleData";
import { useDisclosure } from "@heroui/react";
import { useRoleData } from "@/hooks/common/useRoleData";

export default function Role() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const {roles, onFetch} = useRoleData();
    const {modules} = useModuleData();
    return (
        <>
            <ContentBox className="mb-4 flex">
                <ContentBox className="flex-1">
                    <TitleModule title="Roles del sistema" />
                    <BreadcrumbSeparatorNavegation navigations={navigationProductList} />
                </ContentBox>
                <Button color="primary" onPress={() => onOpen()}>
                    <Plus />
                    Agregar rol
                </Button>
            </ContentBox>
            <RoleManager roles={roles}/>
            <RoleModal role={null} modules={modules} isOpen={isOpen} onOpenChange={onOpenChange}/>
        </>
    );
}

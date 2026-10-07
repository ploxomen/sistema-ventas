import { IconName } from "@/components/icon";
import { Module } from "./module";
export interface Role {
    id ?: number
    name : string,
    description : string,
    icon : IconName,
}
export type RoleData = Role & { modules: Module[] };
export type RoleForm = Role & {modules : number[]};

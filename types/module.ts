export interface ModuleGroup {
    id ?: number;
    name : string;
    description ?: string;
    icon : string
}
export interface Module {
    id ?: number;
    name : string;
    description ?: string;
    url : string;
    icon : string;
    moduleGroupId ?: ModuleGroup["id"]
}
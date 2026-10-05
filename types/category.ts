import { Timestamps } from "./api";

export interface SubCategory extends Timestamps{
    id ?: number,
    name : string,
}
export interface Category extends Timestamps {
    id : number,
    name : string,
    subCategories ?: SubCategory[]
}
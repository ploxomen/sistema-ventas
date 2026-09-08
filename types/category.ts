export interface SubCategory {
    id : number,
    subcategory_name : string,
    subcategory_status : number
}
export interface Category {
    id : number,
    category_name : string,
    category_description ?: string
    subcategories : SubCategory[],
    category_status ?: number
}
import { Category, CategoryNode } from "@/data/categorie/crud";

export function treeBuilder (data: Category[]) : CategoryNode[] {
    const map = new Map<number,CategoryNode>();
    const roots : CategoryNode[] = [];
    data.forEach(item => {
        map.set(item.id, {...item, children: []});
    })
    data.forEach(item => {
        const node = map.get(item.id)!;
        if(item.parent_id === null){
            roots.push(node);
        }else{
            const parent = map.get(item.parent_id);
            parent?.children.push(node)
        }
    })
    return roots; 
}
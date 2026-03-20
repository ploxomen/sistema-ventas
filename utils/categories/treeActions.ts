import { CategoryNode } from "@/data/categorie/crud";

export function addChildNode(
  nodes: CategoryNode[],
  parentId: number | null,
  newNode: CategoryNode,
): CategoryNode[] {
  return nodes.map((node) => {
    if (node.id === parentId) {
      return {
        ...node,
        children: [...node.children, newNode],
      };
    }
    return {
      ...node,
      children: addChildNode(node.children, parentId, newNode),
    };
  });
}

export type Category = {
  id: number;
  categorie: string;
  parent_id: number | null;
};
export interface CategoryNode extends Category {
  children: CategoryNode[];
}

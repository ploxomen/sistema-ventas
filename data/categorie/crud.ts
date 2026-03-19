export type CategorieListProps = {
  id: number | null;
  categorie: string;
  sub_categories: CategorieListProps[];
};
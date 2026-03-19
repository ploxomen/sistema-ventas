import { CategorieListProps } from "@/data/categorie/crud";

export default function ListCategories({
  categories,
}: {
  categories: CategorieListProps[];
}) {
  return <div>
    {
        categories.map(categorie => <span>{categorie.categorie}</span>)
    }
  </div>;
}

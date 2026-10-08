import { navigationDashboard, navigationDashboardHome } from "../navigarion";

export const categorie = {
  url: navigationDashboard("categorie"),
  title: "Categorías",
};
export const marca = {
  url: navigationDashboard("brand"),
  title: "Marcas",
};
export const navigationCategories = [
  navigationDashboardHome,
  categorie,
];

export const navigationBrands = [
  navigationDashboardHome,
  marca,
];
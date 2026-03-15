import { navigationDashboard, navigationDashboardHome } from "../navigarion";

export const newProduct = {
  url: navigationDashboard("product"),
  title: "Nuevo producto",
};
export const product = {
  url: navigationDashboard("product"),
  title: "Productos",
};
export const navigationProductList = [
  navigationDashboardHome,
  product,
  { ...newProduct, url: null },
];
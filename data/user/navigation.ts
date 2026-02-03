import { navigationDashboard, navigationDashboardHome } from "../navigarion";

export const userList = {
  url: navigationDashboard("user"),
  title: "Lista de usuarios",
};
export const users = {
  url: navigationDashboard("user"),
  title: "Usuarios",
};
export const navigationUserList = [
  navigationDashboardHome,
  users,
  { ...userList, url: null },
];

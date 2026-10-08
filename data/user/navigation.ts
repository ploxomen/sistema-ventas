import { navigationDashboard, navigationDashboardHome } from "../navigarion";

export const createUser = {
  url: navigationDashboard("user"),
  title: "Nuevo usuario",
};
export const updateUser = {
  url: navigationDashboard("user"),
  title: "Editar usuario",
};
export const users = {
  url: navigationDashboard("user"),
  title: "Usuarios",
};
export const navigationUserList = [
  navigationDashboardHome,
  users,
  { ...createUser, url: null },
];
export const navigationUserEdit = [
  navigationDashboardHome,
  users,
  {...updateUser, url: null}
];
export const navigationUserTable = [
  navigationDashboardHome,
  { ...users, url: null },
];
import { IconName } from '@/components/icon';
import { RolesList } from '@/utils/autenticacion-user';
import { create } from 'zustand';

export interface User {
  id: number;
  email: string;
  firstName: string | null;
  lastName: string | null;
  fullName: string | null;
  roles : RolesList[] | [];
}
export interface Module {
idModule: number;
    nameModule: string;
    iconModule: IconName;
    urlModule: string;
}
export interface GroupedModule {
  idGroup: number;
  nameGroup?: string;
  iconGroup?: IconName;
  modules: Module[];
}
interface AuthState {
  user: User | null;
  loading: boolean;
  roles : RolesList[];
  moduleGroup : GroupedModule[];
  error: string | null;
  fetchUser: () => Promise<void>;
  setUser: (user: User | null) => void;
  clearUser: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  roles : [],
  moduleGroup: [],
  loading: true,
  error: null,
  // Método para consultar la API y guardar el usuario
  fetchUser: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch('/api/auth/session');
      if (res.ok) {
        const data = await res.json();
        set({ user: data.user,moduleGroup : data.modules,  loading: false, roles: data.roles });
      } else {
        set({ user: null, loading: false, roles: [] });
      }
    } catch (err) {
      set({ user: null, loading: false, error: 'Error al cargar usuario', roles: []});
    }
  },
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null, loading: false }),
}));
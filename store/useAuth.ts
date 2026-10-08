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

interface AuthState {
  user: User | null;
  loading: boolean;
  roles : RolesList[];
  error: string | null;
  fetchUser: () => Promise<void>;
  setUser: (user: User | null) => void;
  clearUser: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  roles : [],
  loading: true,
  error: null,
  // Método para consultar la API y guardar el usuario
  fetchUser: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch('/api/auth/me');
      if (res.ok) {
        const data = await res.json();
        set({ user: data.user, loading: false, roles: data.user.roles });
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
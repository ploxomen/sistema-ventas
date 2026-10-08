import { create } from 'zustand';

export interface User {
  id: number;
  email: string;
  firstName: string | null;
  lastName: string | null;
  fullName: string | null;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
  fetchUser: () => Promise<void>;
  setUser: (user: User | null) => void;
  clearUser: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,
  error: null,
  // Método para consultar la API y guardar el usuario
  fetchUser: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch('/api/auth/me');
      if (res.ok) {
        const data = await res.json();
        set({ user: data.user, loading: false });
      } else {
        set({ user: null, loading: false });
      }
    } catch (err) {
      set({ user: null, loading: false, error: 'Error al cargar usuario' });
    }
  },
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null, loading: false }),
}));
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      user: null,
      theme: "dark",
      setUser: (user) => set({ user }),
      setTheme: (theme) => {
        set({ theme });
      },
      logout: () => set({ user: null }),
    }),
    {
      name: "app-storage", // unique name for localStorage key
    }
  )
);

export default useStore;

import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      user: {
        name: "Manvi Sharma",
        email: "mnvsgautam9@gmail.com",
        phone: "9459841622",
        role: "admin",
      },
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

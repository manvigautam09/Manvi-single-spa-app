import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      user: {
        name: "Manvi Sharma",
        email: "manvi9@gmail.com",
        phone: "1234567890",
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

import { create } from "zustand";

const RWD_LOCAL_TOKEN = 'RWD-OCSN3R8DRVAEEV5E6NUNYBHK2ON9SV4097IBEXPIDQ2CAGAU4FDP8S64JPI1SCN7'

const useThemeStore = create((set) => ({
  theme: localStorage.getItem(RWD_LOCAL_TOKEN) || 'dark',

  setTheme: (newTheme) => {
    set({ theme: newTheme });
    localStorage.setItem(RWD_LOCAL_TOKEN, newTheme);
  },
}));

export default useThemeStore;

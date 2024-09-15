// store.js
import create from 'zustand';

const useStore = create((set) => ({
  theme: localStorage.getItem('theme') || 'dark', // Start with dark theme and load from local storage if available
  setTheme: (newTheme) => {
    set({ theme: newTheme });
    localStorage.setItem('theme', newTheme); // Save theme to local storage
  },
}));

export default useStore;

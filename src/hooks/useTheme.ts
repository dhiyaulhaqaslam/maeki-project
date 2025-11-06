import { useEffect, useState } from "react";

export type Theme = "light" | "dark" | "system";

export default function useTheme() {
   const [theme, setTheme] = useState<Theme>("system");

   // Saat komponen mount → cek preferensi user
   useEffect(() => {
      const saved = localStorage.getItem("theme") as Theme | null;
      if (saved) setTheme(saved);
   }, []);

   // Setel class .dark di <html>
   useEffect(() => {
      const root = document.documentElement;
      const systemPrefersDark = window.matchMedia(
         "(prefers-color-scheme: dark)"
      ).matches;

      if (theme === "dark" || (theme === "system" && systemPrefersDark)) {
         root.classList.add("dark");
      } else {
         root.classList.remove("dark");
      }

      localStorage.setItem("theme", theme);
   }, [theme]);

   return { theme, setTheme };
}

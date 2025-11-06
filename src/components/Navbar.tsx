import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/maeki-logo.png";
import useTheme from "../hooks/useTheme";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Urutan rotasi mode: light → dark → system
  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  // Fungsi untuk memberi style active
  const isActive = (path: string) =>
    location.pathname === path
      ? "text-[#9C1D2A] underline underline-offset-8 decoration-2"
      : "hover:text-[#9C1D2A] transition";

  const themeIcon =
    theme === "light" ? "☀️" : theme === "dark" ? "🌙" : "💻";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-black/30 shadow-lg"`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-white">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          <img src={logo} alt="Maeki logo" className="h-10 w-auto" />
        </Link>

        {/* Tombol toggle mode */}
        <button
          onClick={toggleTheme}
          className="text-xl px-3 py-2 rounded-full bg-white/10 dark:bg-black/20 hover:scale-110 transition"
          title={`Mode: ${theme}`}
        >
          {themeIcon}
        </button>
      </div>
    </motion.nav>
  );
}

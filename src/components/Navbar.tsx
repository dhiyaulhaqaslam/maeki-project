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

        {/* Tombol Login & Register */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/login"
            className="px-4 py-1.5 rounded-lg border border-[#9C1D2A] text-white bg-[#9C1D2A] hover:bg-[#9C1D2A]/80 transition font-medium"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-1.5 rounded-lg text-[#9C1D2A] hover:bg-[#9C1D2A] border border-[#9C1D2A] hover:text-white transition font-semibold"
          >
            Register
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={`md:hidden flex flex-col items-center text-white py-6 space-y-4 shadow-lg ${scrolled ? "bg-transparent" : "backdrop-blur-md bg-black/30 shadow-lg"}`}
        >
          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="block w-3/4 text-center py-2 rounded-md bg-[#9C1D2A] text-white font-medium hover:bg-[#9C1D2A]/80 transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            onClick={() => setMenuOpen(false)}
            className="block w-3/4 text-center py-2 rounded-md border border-[#9C1D2A] text-[#9C1D2A] font-semibold hover:bg-[#9C1D2A] hover:text-white transition"
          >
            Register
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}

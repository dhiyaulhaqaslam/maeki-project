import { useState } from "react";
import { Home, Map, Newspaper, Calendar, User } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function BottomNav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const base =
        "flex flex-col items-center transition-all font-medium select-none";

    return (
        <div
            className="
        fixed bottom-0 md:bottom-[clamp(6px,1.4vw,20px)] left-1/2 -translate-x-1/2 z-50
        flex
        gap-[clamp(30px,2.5vw,28px)]
        md:bg-transparent bg-black/40 w-full justify-center py-2
      "
        >
            {/* HOME */}
            <NavLink
                to="/"
                className={({ isActive }) =>
                    `${base} ${isActive
                        ? "text-[#F7EEDF]"
                        : "text-white/70 hover:text-[#F7EEDF]"
                    }`
                }
            >
                {({ isActive }) => (
                    <>
                        <div
                            className={`
                rounded-full transition-all flex items-center justify-center
                p-[clamp(6px,1.4vw,14px)]
                min-w-[40px] min-h-[40px]
                md:min-w-[50px] md:min-h-[50px]
                ${isActive
                                    ? "bg-[#9C1D2A] scale-105 shadow-[0_0_12px_rgba(255,200,0,0.45)]"
                                    : "bg-black/60 dark:bg-white/60 text-white dark:text-black hover:bg-[#9C1D2A] hover:scale-105 hover:shadow-[0_0_12px_rgba(255,200,0,0.45)]"
                                }
              `}
                        >
                            <Home className="w-[20px] h-[20px] md:min-w-[30px] md:min-h-[30px] lg:min-w-[40px] lg:min-h-[40px] xl:min-w-[50px] xl:min-h-[50px]" />
                        </div>
                        <span className="mt-[2px] text-[clamp(18px,1.6vw,12px)] text-[#9C1D2A] font-semibold">
                            Home
                        </span>
                    </>
                )}
            </NavLink>

            {/* GIS */}
            <NavLink
                to="/gis"
                className={({ isActive }) =>
                    `${base} ${isActive
                        ? "text-[#F7EEDF]"
                        : "text-white/70 hover:text-[#F7EEDF]"
                    }`
                }
            >
                {({ isActive }) => (
                    <>
                        <div
                            className={`
                rounded-full transition-all flex items-center justify-center
                p-[clamp(6px,1.4vw,14px)]
                min-w-[40px] min-h-[40px]
                md:min-w-[50px] md:min-h-[50px]
                ${isActive
                                    ? "bg-[#9C1D2A] scale-105 shadow-[0_0_12px_rgba(255,200,0,0.45)]"
                                    : "bg-black/60 dark:bg-white/60 text-white dark:text-black hover:bg-[#9C1D2A] hover:scale-105 hover:shadow-[0_0_12px_rgba(255,200,0,0.45)]"
                                }
              `}
                        >
                            <Map className="w-[20px] h-[20px] md:min-w-[30px] md:min-h-[30px] lg:min-w-[40px] lg:min-h-[40px] xl:min-w-[50px] xl:min-h-[50px]" />
                        </div>
                        <span className="mt-[2px] text-[clamp(18px,1.6vw,12px)] text-[#9C1D2A] font-semibold">
                            GIS
                        </span>
                    </>
                )}
            </NavLink>

            {/* NEWS */}
            <NavLink
                to="/news"
                className={({ isActive }) =>
                    `${base} ${isActive
                        ? "text-[#F7EEDF]"
                        : "text-white/70 hover:text-[#F7EEDF]"
                    }`
                }
            >
                {({ isActive }) => (
                    <>
                        <div
                            className={`
                rounded-full transition-all flex items-center justify-center
                p-[clamp(6px,1.4vw,14px)]
                min-w-[40px] min-h-[40px]
                md:min-w-[50px] md:min-h-[50px]
                ${isActive
                                    ? "bg-[#9C1D2A] scale-105 shadow-[0_0_12px_rgba(255,200,0,0.45)]"
                                    : "bg-black/60 dark:bg-white/60 text-white dark:text-black hover:bg-[#9C1D2A] hover:scale-105 hover:shadow-[0_0_12px_rgba(255,200,0,0.45)]"
                                }
              `}
                        >
                            <Newspaper className="w-[20px] h-[20px] md:min-w-[30px] md:min-h-[30px] lg:min-w-[40px] lg:min-h-[40px] xl:min-w-[50px] xl:min-h-[50px]" />
                        </div>
                        <span className="mt-[2px] text-[clamp(18px,1.6vw,12px)] text-[#9C1D2A] font-semibold">
                            News
                        </span>
                    </>
                )}
            </NavLink>

            {/* EVENT */}
            <NavLink
                to="/event"
                className={({ isActive }) =>
                    `${base} ${isActive
                        ? "text-[#F7EEDF]"
                        : "text-white/70 hover:text-[#F7EEDF]"
                    }`
                }
            >
                {({ isActive }) => (
                    <>
                        <div
                            className={`
                rounded-full transition-all flex items-center justify-center
                p-[clamp(6px,1.4vw,14px)]
                min-w-[40px] min-h-[40px]
                md:min-w-[50px] md:min-h-[50px]
                ${isActive
                                    ? "bg-[#9C1D2A] scale-105 shadow-[0_0_12px_rgba(255,200,0,0.45)]"
                                    : "bg-black/60 dark:bg-white/60 text-white dark:text-black hover:bg-[#9C1D2A] hover:scale-105 hover:shadow-[0_0_12px_rgba(255,200,0,0.45)]"
                                }
              `}
                        >
                            <Calendar className="w-[20px] h-[20px] md:min-w-[30px] md:min-h-[30px] lg:min-w-[40px] lg:min-h-[40px] xl:min-w-[50px] xl:min-h-[50px]" />
                        </div>
                        <span className="mt-[2px] text-[clamp(18px,1.6vw,12px)] text-[#9C1D2A] font-semibold">
                            Event
                        </span>
                    </>
                )}
            </NavLink>

            <div className="relative">
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className={`${base} text-white/70 hover:text-[#F7EEDF]`}
                >
                    <div
                        className={`
        rounded-full transition-all flex items-center justify-center
        p-[clamp(6px,1.4vw,14px)]
        min-w-[40px] min-h-[40px]
        md:min-w-[50px] md:min-h-[50px]
        ${menuOpen
                                ? "bg-[#9C1D2A] scale-105 shadow-[0_0_15px_rgba(255,215,0,0.4)]"
                                : "bg-black/60 dark:bg-white/60 text-white dark:text-black hover:bg-[#9C1D2A] hover:scale-105 hover:shadow-[0_0_15px_rgba(255,215,0,0.35)]"
                            }
      `}
                    >
                        <User className="w-[20px] h-[20px] md:min-w-[30px] md:min-h-[30px] lg:min-w-[40px] lg:min-h-[40px] xl:min-w-[50px] xl:min-h-[50px]" />
                    </div>
                    <span className="mt-[2px] text-[clamp(18px,1.6vw,12px)] text-[#9C1D2A] font-semibold">
                        User
                    </span>
                </button>

                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 100, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 160, damping: 18 }}
                            className="
          fixed bottom-[100px] left-1/2 -translate-x-1/2
          bg-[#0f0f0f]/90 backdrop-blur-xl
          border border-white/10 rounded-2xl px-5 py-4
          shadow-[0_8px_25px_rgba(255,255,255,0.08)]
          w-[220px] text-center z-40
        "
                        >
                            <h4 className="text-[#F7EEDF] text-base mb-3 font-semibold tracking-wide">
                                User Menu
                            </h4>

                            <div className="flex flex-col gap-2 text-[15px] font-medium">
                                <Link
                                    to="/login"
                                    className="px-4 py-2 rounded-lg bg-white/5 hover:bg-[#9C1D2A]/70 hover:text-[#F7EEDF] text-white/90 transition-all duration-200"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/register"
                                    className="px-4 py-2 rounded-lg bg-white/5 hover:bg-[#9C1D2A]/70 hover:text-[#F7EEDF] text-white/90 transition-all duration-200"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Register
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

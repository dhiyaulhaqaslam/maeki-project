import { useState } from "react";
import { Home, Map, Newspaper, Calendar, Menu } from "lucide-react";
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
                min-w-[50px] min-h-[50px]
                ${isActive
                                    ? "bg-[#9C1D2A] scale-105 shadow-[0_0_12px_rgba(255,200,0,0.45)]"
                                    : "bg-black/60 dark:bg-white/60 text-white dark:text-black hover:bg-[#9C1D2A] hover:scale-105 hover:shadow-[0_0_12px_rgba(255,200,0,0.45)]"
                                }
              `}
                        >
                            <Home className="w-[24px] h-[24px] md:min-w-[36px] md:min-h-[36px] lg:min-w-[48px] lg:min-h-[48px] xl:min-w-[50px] xl:min-h-[50px]" />
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
                min-w-[50px] min-h-[50px]
                ${isActive
                                    ? "bg-[#9C1D2A] scale-105 shadow-[0_0_12px_rgba(255,200,0,0.45)]"
                                    : "bg-black/60 dark:bg-white/60 text-white dark:text-black hover:bg-[#9C1D2A] hover:scale-105 hover:shadow-[0_0_12px_rgba(255,200,0,0.45)]"
                                }
              `}
                        >
                            <Map className="w-[24px] h-[24px] md:min-w-[36px] md:min-h-[36px] lg:min-w-[48px] lg:min-h-[48px] xl:min-w-[50px] xl:min-h-[50px]" />
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
                min-w-[50px] min-h-[50px]
                ${isActive
                                    ? "bg-[#9C1D2A] scale-105 shadow-[0_0_12px_rgba(255,200,0,0.45)]"
                                    : "bg-black/60 dark:bg-white/60 text-white dark:text-black hover:bg-[#9C1D2A] hover:scale-105 hover:shadow-[0_0_12px_rgba(255,200,0,0.45)]"
                                }
              `}
                        >
                            <Newspaper className="w-[24px] h-[24px] md:min-w-[36px] md:min-h-[36px] lg:min-w-[48px] lg:min-h-[48px] xl:min-w-[50px] xl:min-h-[50px]" />
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
                min-w-[50px] min-h-[50px]
                ${isActive
                                    ? "bg-[#9C1D2A] scale-105 shadow-[0_0_12px_rgba(255,200,0,0.45)]"
                                    : "bg-black/60 dark:bg-white/60 text-white dark:text-black hover:bg-[#9C1D2A] hover:scale-105 hover:shadow-[0_0_12px_rgba(255,200,0,0.45)]"
                                }
              `}
                        >
                            <Calendar className="w-[24px] h-[24px] md:min-w-[36px] md:min-h-[36px] lg:min-w-[48px] lg:min-h-[48px] xl:min-w-[50px] xl:min-h-[50px]" />
                        </div>
                        <span className="mt-[2px] text-[clamp(18px,1.6vw,12px)] text-[#9C1D2A] font-semibold">
                            Event
                        </span>
                    </>
                )}
            </NavLink>

            {/* DROPDOWN (ganti Event2) */}
            <div className="relative">
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className={`${base} text-white/70 hover:text-[#F7EEDF]`}
                >
                    <div
                        className={`
              rounded-full transition-all flex items-center justify-center
              p-[clamp(6px,1.4vw,14px)]
              min-w-[50px] min-h-[50px]
              ${menuOpen
                                ? "bg-[#9C1D2A] scale-105 shadow-[0_0_12px_rgba(255,200,0,0.45)]"
                                : "bg-black/60 dark:bg-white/60 text-white dark:text-black hover:bg-[#9C1D2A] hover:scale-105 hover:shadow-[0_0_12px_rgba(255,200,0,0.45)]"
                            }
            `}
                    >
                        <Menu className="w-[24px] h-[24px] md:min-w-[36px] md:min-h-[36px] lg:min-w-[48px] lg:min-h-[48px] xl:min-w-[50px] xl:min-h-[50px]" />
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
                            transition={{ type: "spring", stiffness: 180, damping: 18 }}
                            className="
    fixed bottom-[70px] left-1/2 -translate-x-1/2
    bg-gradient-to-t from-[#000]/80 to-[#222]/80
    border border-white/10 rounded-3xl p-5
    shadow-[0_0_30px_rgba(255,255,255,0.1)]
    w-[240px] text-center backdrop-blur-lg
  "
                        >
                            <h4 className="text-[#F7EEDF] text-lg mb-3 font-semibold">User Menu</h4>
                            <div className="flex flex-col gap-2">
                                <Link to="/login" className="text-white/90 hover:text-[#F7EEDF]">
                                    Login
                                </Link>
                                <Link to="/register" className="text-white/90 hover:text-[#F7EEDF]">
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

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import GridBackground from "../components/ui/moving-grid"; // ✅ tambahkan import

interface MainLayoutProps {
   children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
   return (
      <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-hidden transition-colors duration-500">
         <div className="absolute inset-0 z-0">
            <GridBackground />
         </div>

         {/* <GlobalCursorEffect /> */}

         <Navbar />

         <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen overflow-x-hidden"
         >
            {children}
         </motion.main>

         <BottomNav />
      </div>
   );
}

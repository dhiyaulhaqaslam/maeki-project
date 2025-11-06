// src/components/GIS.tsx
import { motion } from "framer-motion";
import "leaflet/dist/leaflet.css";
import { Landmark, Building, Globe, Users } from "lucide-react";
import GISMap from "./ui/GISMap";

export default function GIS() {
   return (
      <>
         <section
            id="gis-map"
            className="relative flex flex-col items-center justify-center py-32 
                   bg-[var(--surface)] text-[var(--foreground)] transition-colors duration-500"
         >
            <div className="grid gap-12 w-[92%] max-w-7xl">
               {/* === STATISTIK === */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
               >
                  {[
                     { icon: <Landmark size={36} />, label: "Total Museum", value: 200 },
                     { icon: <Building size={36} />, label: "Total Cagar Budaya", value: 200 },
                     { icon: <Globe size={36} />, label: "Total WBTB", value: 200 },
                     { icon: <Users size={36} />, label: "Total Komunitas Budaya", value: 200 },
                  ].map((item, idx) => (
                     <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="p-6 rounded-2xl font-semibold flex flex-col justify-between shadow-lg 
                           border border-[#C99432]/20 transition-all duration-500 
                           bg-white text-[#1a1a1a] hover:border-[#C99432]/60 hover:shadow-[0_0_20px_rgba(201,148,50,0.3)]
                           dark:bg-[#1E293B]/80 dark:text-white dark:border-[#C99432]/20 
                           backdrop-blur-md"
                     >
                        <div className="flex justify-between items-center gap-3 mb-4">
                           <span className="text-[#C99432]">{item.icon}</span>
                           <span className="text-sm tracking-wide text-gray-600 dark:text-gray-200">
                              {item.label}
                           </span>
                        </div>
                        <span className="block font-bold text-4xl text-end text-[#C99432] drop-shadow-md">
                           {item.value}
                        </span>
                     </motion.div>
                  ))}
               </motion.div>

               {/* === PETA === */}
               <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="flex gap-8 rounded-2xl overflow-hidden"
               >
                  <div className="flex-1 rounded-2xl overflow-hidden border border-[#C99432]/20 shadow-md">
                     <GISMap />
                  </div>
               </motion.div>
            </div>
         </section>
      </>
   );
}

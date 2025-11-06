import { newsData } from "../../data";
import { motion } from "framer-motion";

export default function NewsCard() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {newsData.map((news, index) => (
                <motion.div
                    key={news.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_25px_rgba(201,148,50,0.4)] 
                     border border-[#C99432]/20 transition-all duration-500 group
                     bg-white text-[#1a1a1a] dark:bg-[#0b0f1a]/90 dark:text-white backdrop-blur-sm"
                >
                    {/* === IMAGE WRAPPER === */}
                    <div className="relative overflow-hidden h-56">
                        <motion.img
                            src={news.image}
                            alt={news.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            whileHover={{ scale: 1.08 }}
                        />

                        {/* Overlay gradient agar teks di atas gambar tetap terbaca */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

                        {/* Kategori */}
                        <motion.span
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="absolute bottom-3 left-3 bg-[#C99432]/95 text-black text-xs font-semibold 
                         px-3 py-1 rounded-full shadow-md"
                        >
                            Budaya Nusantara
                        </motion.span>
                    </div>

                    {/* === CONTENT === */}
                    <div className="p-5">
                        <motion.h3
                            whileHover={{ color: "#C99432" }}
                            className="text-xl font-bold mb-2 transition-colors duration-300 line-clamp-2"
                        >
                            {news.title}
                        </motion.h3>

                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                            {news.description}
                        </p>

                        <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                            <p>
                                Oleh{" "}
                                <span className="font-medium text-[#C99432]">
                                    {news.author}
                                </span>
                            </p>
                            <p>{news.views}x dibaca</p>
                        </div>
                    </div>

                    {/* === BORDER EFFECT === */}
                    <motion.div
                        layoutId={`border-${news.id}`}
                        className="absolute inset-0 border-2 border-transparent group-hover:border-[#C99432] 
                       rounded-2xl transition-all duration-500"
                    />
                </motion.div>
            ))}
        </div>
    );
}

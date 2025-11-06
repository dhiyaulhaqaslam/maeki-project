// src/components/ui/EventCard.tsx
import { motion } from "framer-motion";
import { events } from "../../data";

export default function EventCard() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {events.map((event, index) => (
                <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                    className="relative rounded-2xl overflow-hidden border border-[#C99432]/30 hover:border-[#C99432]/60 
                     bg-[var(--card)] hover:shadow-[0_0_25px_rgba(201,148,50,0.3)] backdrop-blur-sm transition-all duration-500"
                >
                    <div className="relative h-48 overflow-hidden">
                        <motion.img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
                        <span className="absolute top-3 left-3 bg-[#C99432]/90 text-black text-xs font-semibold px-3 py-1 rounded-full">
                            {event.date}
                        </span>
                    </div>

                    <div className="p-5">
                        <h3 className="text-lg font-semibold text-[#C99432] mb-2 line-clamp-2">
                            {event.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                            {event.description}
                        </p>

                        <div className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                            <p>🕓 {event.time}</p>
                            <p>📍 {event.location}</p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

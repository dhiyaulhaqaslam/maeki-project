// src/components/Event.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { events } from "../data";
import event1 from "../assets/bg/event1.png";
import EventCard from "./ui/EventCard";

type CalendarValue = Date | [Date, Date] | null;

export default function Event() {
  const [date, setDate] = useState<CalendarValue>(new Date());

  return (
    <section className="py-36 bg-[var(--surface)] text-[var(--foreground)] transition-colors duration-500 min-h-screen relative">
      <div className="max-w-7xl mx-auto px-6 grid gap-12">
        {/* GRID ATAS */}
        <div className="grid grid-cols-1 md:grid-cols-7 gap-6">
          {/* === KALENDER === */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-3 rounded-2xl p-6 border border-[#C99432]/40 bg-[var(--card)] shadow-[0_0_20px_rgba(201,148,50,0.15)] hover:shadow-[0_0_30px_rgba(201,148,50,0.25)] transition-all backdrop-blur-sm"
          >
            <h2 className="text-lg font-semibold text-[#C99432] mb-3 text-center">
              Jadwal Acara
            </h2>
            <Calendar
              onChange={(value) => setDate(value as CalendarValue)}
              value={date}
              className="rounded-xl w-full bg-white text-black dark:bg-[#0b0f1a] dark:text-black mx-auto"
            />
            {date && (
              <p className="mt-4 text-[#C99432] text-sm italic text-center">
                Tanggal dipilih:{" "}
                <span className="font-semibold text-[var(--foreground)]">
                  {new Date(date as Date).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </p>
            )}
          </motion.div>

          {/* === POSTER UTAMA === */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="md:col-span-4 rounded-2xl overflow-hidden border border-[#C99432]/40 bg-[var(--card)] shadow-[0_0_20px_rgba(201,148,50,0.15)] hover:shadow-[0_0_35px_rgba(201,148,50,0.25)] transition-all backdrop-blur-sm"
          >
            <div className="relative w-full aspect-video">
              <motion.img
                src={event1}
                alt="Poster Event"
                className="w-full h-full object-cover"
                initial={{ scale: 1.02 }}
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

              {/* Date Badge — adaptif untuk light/dark mode */}
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full shadow-md text-xs font-semibold
                              bg-[#C99432]/95 text-[#1a1a1a] dark:bg-[#C99432]/90 dark:text-black transition-colors">
                {events[0].date}
              </div>

              {/* Title & Info */}
              <div className="absolute left-6 bottom-6 right-6">
                <h2 className="text-3xl font-bold text-white leading-tight drop-shadow-lg">
                  {events[0].title}
                </h2>
                <p className="mt-2 text-sm md:text-base text-gray-200">
                  {events[0].description}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm px-3 py-2 rounded-full">
                    🕓 <span>{events[0].time}</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm px-3 py-2 rounded-full">
                    📍 <span>{events[0].location}</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="ml-auto bg-[#C99432] text-black font-semibold px-4 py-2 rounded-full shadow-md hover:shadow-lg transition"
                  >
                    Lihat Detail
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Footer Info */}
            <div className="p-4 bg-[var(--surface-secondary)]/70 border-t border-[#C99432]/30 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-[#C99432] flex items-center justify-center text-sm font-bold text-[#111827]">
                  {new Date(events[0].date).getDate() || "12"}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[var(--foreground)]">
                    {events[0].title}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {events[0].location} · {events[0].time}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button className="text-sm text-[#C99432] border border-[#C99432]/60 px-3 py-1.5 rounded-full hover:bg-[#C99432]/20 transition">
                  Tambah ke Kalender
                </button>
                <button className="text-sm text-black bg-[#C99432] px-4 py-1.5 rounded-full hover:shadow-lg">
                  Daftar Sekarang
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* EVENT CARD */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#C99432] text-center"
        >
          Acara Lainnya
        </motion.h2>

        <EventCard />
      </div>
    </section>
  );
}

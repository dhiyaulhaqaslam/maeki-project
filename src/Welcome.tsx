// src/Welcome.tsx
import { useEffect, useRef } from "react";
import CultureCarousel from "./components/ui/CultureCarousel";

export default function Welcome() {
   // const kapalRef = useRef<HTMLImageElement | null>(null);
   // const awanRefs = useRef<(HTMLImageElement | null)[]>([]);

   // ];

   // useEffect(() => {
   //    const handleScroll = () => {
   //       const scrollY = window.scrollY;
   //       if (kapalRef.current)
   //          kapalRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;

   //       awanRefs.current.forEach((el, i) => {
   //          if (!el) return;
   //          const { speed, direction } = awanList[i];
   //          el.style.transform = `translateX(${scrollY * speed * direction}px) translateY(${scrollY * speed}px)`;
   //       });
   //    };

   //    window.addEventListener("scroll", handleScroll, { passive: true });
   //    return () => window.removeEventListener("scroll", handleScroll);
   // }, []);

   const Hero = () => (
      <section className="relative h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)] transition-colors duration-500">
         {/* Background Carousel */}
         <CultureCarousel />

         {/* Overlay transparan agar kontras */}
         <div className="absolute inset-0 bg-linear-to-t from-[var(--background)]/90 to-transparent dark:from-black/70 z-0" />

         {/* Awan & wayang animasi */}
         {/* {awanList.map((awan, i) => (
            <img
               key={i}
               ref={(el) => (awanRefs.current[i] = el)}
               src={awan.src}
               alt=""
               className={`absolute ${awan.style} transition-transform duration-300 ease-out pointer-events-none select-none`}
            />
         ))} */}
      </section>
   );

   return (
      <>
         <Hero />
      </>
   );
}

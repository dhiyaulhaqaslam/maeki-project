"use client";
import React, { useState, useEffect } from "react";

export default function MovingGrid() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const { clientX, clientY } = event;
            const x = clientX - window.innerWidth / 2;
            const y = clientY - window.innerHeight / 2;
            setMousePosition({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            className="absolute inset-0 w-full h-full overflow-hidden transition-transform duration-300 ease-out"
            style={{
                background: `linear-gradient(
          to bottom right,
          var(--background) 0%,
          var(--surface) 40%,
          var(--background) 100%
        )`,
                backgroundImage: `
          linear-gradient(to right, rgba(201, 148, 50, 0.15) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(201, 148, 50, 0.15) 1px, transparent 1px)
        `,
                backgroundSize: "40px 40px",
                animation: "moveGrid 20s linear infinite",
                transform: `translate(${mousePosition.x / 40}px, ${mousePosition.y / 40}px)`,
            }}
        >
            {/* === Efek Glow Emas (lebih kecil & lembut) === */}
            <div
                className="absolute top-[100px] left-0 w-[45vmin] h-[45vmin] 
                   bg-[#C99432]/25 rounded-full blur-[120px] 
                   -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"
                style={{
                    boxShadow: `
            0 0 60px 20px rgba(201,148,50,0.25),
            0 0 120px 40px rgba(201,148,50,0.15)
          `,
                }}
            />
            <div
                className="absolute bottom-[100px] -right-[100px] w-[45vmin] h-[45vmin] 
                   bg-[#C99432]/25 rounded-full blur-[120px] 
                   -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"
                style={{
                    boxShadow: `
            0 0 60px 20px rgba(201,148,50,0.25),
            0 0 120px 40px rgba(201,148,50,0.15)
          `,
                }}
            />

            {/* === Keyframes === */}
            <style>
                {`
          @keyframes moveGrid {
            0% { background-position: 0 0; }
            100% { background-position: 80px 80px; }
          }

          @keyframes pulse-slow {
            0%, 100% { opacity: 0.7; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.05); }
          }

          .animate-pulse-slow {
            animation: pulse-slow 7s ease-in-out infinite;
          }
        `}
            </style>
        </div>
    );
}

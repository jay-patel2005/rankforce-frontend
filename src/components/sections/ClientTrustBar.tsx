"use client";

import { motion } from "framer-motion";
import Image from "next/image";
// import CloudinaryImage from "../ui/CloudinaryImage"; // Ready for Cloudinary URLs

// Image sources can be local paths (e.g., /images/clients/logo.webp) or Cloudinary URLs
const clients = [
  {
    name: "AgroLand",
    src: "/images/clients/agroland.webp",
    isPlaceholder: false,
    width: 140,
    height: 48,
  },
  {
    name: "Novesei Power",
    src: "/images/clients/noveseipower.webp",
    isPlaceholder: false,
    width: 160,
    height: 48,
  },
  {
    name: "Dreamforge3D",
    src: "/images/clients/dreamforge3d.webp",
    isPlaceholder: false,
    width: 150,
    height: 48,
  },
  {
    name: "Keshavspice",
    src: "/images/clients/keshavspice.webp",
    isPlaceholder: false,
    width: 140,
    height: 48,
  },
];

export default function ClientTrustBar() {
  return (
    <section className="bg-white pt-12 pb-6 lg:pt-16 lg:pb-8 relative z-10">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4 md:mb-6 tracking-tight"
        >
          Businesses I&apos;ve Helped Grow
        </motion.h2>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 lg:gap-24">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="flex items-center justify-center"
            >
              <div className="relative flex items-center justify-center">
                {client.isPlaceholder ? (
                  <span className="text-sm md:text-base font-bold text-gray-900 tracking-tight">
                    {client.name}
                  </span>
                ) : (
                  // Using next/image for local files. 
                  // If switching to Cloudinary URLs, swap to <CloudinaryImage />
                  <Image
                    src={client.src}
                    alt={`${client.name} logo`}
                    width={client.width}
                    height={client.height}
                    className={`object-contain w-auto ${
                      client.name === "Novesei Power"
                        ? "max-h-[65px] md:max-h-[85px]"
                        : "max-h-[40px] md:max-h-[50px]"
                    }`}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, ArrowLeft } from "lucide-react";
import {
  DesktopMegaMenuPanel,
  servicesMenu,
} from "@/components/layout/ServicesMegaMenu";
import type { ServiceCategory } from "@/components/layout/ServicesMegaMenu";

const navLinks = [
  { label: "Work", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

/* ── Slide animation for mobile drill-down ─────────── */

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
    transition: { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* Desktop mega menu */
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const megaTriggerRef = useRef<HTMLLIElement>(null);

  /* Mobile drill-down */
  const [mobileLevel, setMobileLevel] = useState<1 | 2 | 3>(1);
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(null);
  const [slideDirection, setSlideDirection] = useState(1);

  const drawerRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  /* Scroll listener */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Body scroll lock */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  /* Escape key — closes everything */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setMegaMenuOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  /* Helpers */
  const clearMegaTimers = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (openTimer.current) clearTimeout(openTimer.current);
  }, []);

  const scheduleMegaOpen = useCallback(() => {
    clearMegaTimers();
    openTimer.current = setTimeout(() => setMegaMenuOpen(true), 130);
  }, [clearMegaTimers]);

  const scheduleMegaClose = useCallback(() => {
    clearMegaTimers();
    closeTimer.current = setTimeout(() => setMegaMenuOpen(false), 200);
  }, [clearMegaTimers]);

  /* Click outside for mega menu */
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const panel = document.getElementById("services-mega-menu");
      const outsideTrigger =
        megaTriggerRef.current &&
        !megaTriggerRef.current.contains(e.target as Node);
      const outsidePanel = !panel || !panel.contains(e.target as Node);
      if (megaMenuOpen && outsideTrigger && outsidePanel) {
        clearMegaTimers();
        setMegaMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [megaMenuOpen, clearMegaTimers]);

  const closeMobileMenu = useCallback(() => {
    setMobileOpen(false);
    setTimeout(() => {
      setMobileLevel(1);
      setSelectedCategory(null);
      setSlideDirection(1);
    }, 400);
  }, []);

  /* Click outside for mobile menu */
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const outsideDrawer =
        drawerRef.current && !drawerRef.current.contains(e.target as Node);
      const outsideHamburger =
        hamburgerRef.current && !hamburgerRef.current.contains(e.target as Node);
      if (mobileOpen && outsideDrawer && outsideHamburger) {
        closeMobileMenu();
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [mobileOpen, closeMobileMenu]);

  /* Drill-down navigation */
  const goToServicesLevel = () => {
    setSlideDirection(1);
    setMobileLevel(2);
  };

  const goToCategory = (category: ServiceCategory) => {
    setSlideDirection(1);
    setSelectedCategory(category);
    setMobileLevel(3);
  };

  const goBack = () => {
    setSlideDirection(-1);
    if (mobileLevel === 3) {
      setMobileLevel(2);
    } else {
      setMobileLevel(1);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div
          className={`mx-auto transition-all duration-400 ease-in-out pointer-events-auto ${
            scrolled
              ? "bg-white/95 lg:bg-white/80 backdrop-blur-md lg:backdrop-blur-[16px] shadow-[var(--shadow-navbar)] lg:shadow-[0_8px_32px_rgba(0,0,0,0.08)] lg:border lg:border-[#FF6A00]/15 lg:rounded-2xl lg:max-w-[1100px] lg:mt-3"
              : "bg-white w-full"
          }`}
        >
          {/* ── Main nav bar ─────────────────────────────── */}
          <nav className={`mx-auto flex items-center justify-between px-5 transition-all duration-400 ease-in-out ${
            scrolled ? "py-2 lg:px-6 max-w-[1100px]" : "py-4 lg:px-8 max-w-7xl"
          }`}>
            <Link
              href="/"
              className="flex items-center z-50 group"
            >
              <div className="relative flex items-center justify-center h-16 w-16 shrink-0">
                <Image 
                  src="/rankforce-logo.webp" 
                  alt="Rank Force Logo" 
                  width={96} 
                  height={96} 
                  className="absolute max-w-none w-[140%] h-[140%] object-contain mix-blend-multiply"
                  priority
                />
              </div>
              <div className={`flex items-center text-2xl font-bold tracking-tight mt-1 transition-all duration-400 ease-in-out overflow-hidden max-w-[200px] opacity-100 ml-1 ${
                scrolled ? "lg:max-w-0 lg:opacity-0 lg:ml-0" : ""
              }`}>
                <span className="text-dark-800 whitespace-nowrap group-hover:text-primary transition-colors duration-300">Rank</span>
                <span className="text-primary ml-1 whitespace-nowrap group-hover:text-dark-800 transition-colors duration-300">Force</span>
              </div>
            </Link>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          <li>
            <Link
              href="/"
              className="relative text-[15px] font-medium text-gray-body transition-colors hover:text-dark-800 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </Link>
          </li>

          {/* Services trigger */}
          <li
            ref={megaTriggerRef}
            onMouseEnter={scheduleMegaOpen}
            onMouseLeave={scheduleMegaClose}
          >
            <button
              onClick={() => setMegaMenuOpen((o) => !o)}
              onFocus={scheduleMegaOpen}
              onBlur={scheduleMegaClose}
              aria-haspopup="true"
              aria-expanded={megaMenuOpen}
              aria-controls="services-mega-menu"
              className={`group inline-flex items-center gap-1 relative text-[15px] font-medium transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full focus:outline-none ${
                megaMenuOpen
                  ? "text-primary after:!w-full"
                  : "text-gray-body hover:text-dark-800"
              }`}
            >
              Services
              <ChevronDown
                size={14}
                className={`mt-0.5 transition-transform duration-200 ${
                  megaMenuOpen ? "rotate-180 text-primary" : ""
                }`}
                aria-hidden="true"
              />
            </button>
          </li>

          {/* Remaining links */}
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative text-[15px] font-medium text-gray-body transition-colors hover:text-dark-800 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden rounded-lg bg-primary px-6 py-2.5 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-primary-dark hover:shadow-lg lg:inline-flex"
        >
          Get a Quote
        </Link>

        {/* Mobile hamburger */}
        <button
          ref={hamburgerRef}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 rounded-lg p-2 text-dark-800 lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-[2px] bg-dark-800 block rounded-full"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-[2px] bg-dark-800 block rounded-full"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-[2px] bg-dark-800 block rounded-full"
          />
        </button>
      </nav>

      {/* ── Desktop mega menu panel ───────────────────── */}
      <AnimatePresence>
        {megaMenuOpen && (
          <DesktopMegaMenuPanel
            onClose={() => { clearMegaTimers(); setMegaMenuOpen(false); }}
            onMouseEnter={clearMegaTimers}
            onMouseLeave={scheduleMegaClose}
          />
        )}
      </AnimatePresence>
      </div>
    </header>

      {/* ── Mobile drawer ────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Drawer panel */}
            <motion.div
              ref={drawerRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-40 shadow-2xl lg:hidden flex flex-col overflow-hidden"
              role="dialog"
              aria-modal="true"
            >
              {/* Spacer for logo clearance */}
              <div className="shrink-0 h-20" aria-hidden="true" />

              {/* Animated drill-down content */}
              <div className="relative flex-1 overflow-x-hidden overflow-y-auto">
                <AnimatePresence mode="popLayout" custom={slideDirection} initial={false}>

                  {/* ── Level 1: Main nav ──────────────────── */}
                  {mobileLevel === 1 && (
                    <motion.div
                      key="level1"
                      custom={slideDirection}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="px-6 pb-4"
                    >
                      <ul className="flex flex-col">
                        <li>
                          <Link
                            href="/"
                            onClick={closeMobileMenu}
                            className="flex items-center py-4 text-xl font-semibold text-dark-800 border-b border-gray-100 transition-colors hover:text-primary min-h-[44px]"
                          >
                            Home
                          </Link>
                        </li>
                        {/* Services — goes to Level 2 */}
                        <li className="border-b border-gray-100">
                          <button
                            onClick={goToServicesLevel}
                            className="flex w-full items-center justify-between py-4 text-xl font-semibold text-dark-800 transition-colors hover:text-primary min-h-[44px] focus:outline-none"
                          >
                            Services
                            <ChevronRight size={20} className="text-gray-400" aria-hidden="true" />
                          </button>
                        </li>
                        {navLinks.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              onClick={closeMobileMenu}
                              className="flex items-center py-4 text-xl font-semibold text-dark-800 border-b border-gray-100 transition-colors hover:text-primary min-h-[44px]"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {/* ── Level 2: Service categories ────────── */}
                  {mobileLevel === 2 && (
                    <motion.div
                      key="level2"
                      custom={slideDirection}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="px-6 pb-4"
                    >
                      {/* Back */}
                      <button
                        onClick={goBack}
                        className="flex items-center gap-2 py-4 text-sm font-semibold text-gray-500 hover:text-primary transition-colors min-h-[44px] focus:outline-none -ml-2 px-2 rounded-md active:bg-gray-100"
                      >
                        <ArrowLeft size={16} aria-hidden="true" />
                        Back
                      </button>
                      <div className="h-px bg-gray-100 mb-2" />
                      <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 py-2 mb-1">
                        Services
                      </p>
                      <ul className="flex flex-col">
                        {servicesMenu.map((category, index) => (
                          <motion.li 
                            key={category.title} 
                            className="border-b border-gray-100"
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: 0.1 + index * 0.04 }}
                          >
                            <button
                              onClick={() => goToCategory(category)}
                              className="flex w-full items-center justify-between py-4 text-lg font-semibold text-dark-800 transition-colors hover:text-primary min-h-[44px] focus:outline-none"
                            >
                              {category.title}
                              <ChevronRight size={18} className="text-gray-400 shrink-0" aria-hidden="true" />
                            </button>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {/* ── Level 3: Category items ─────────────── */}
                  {mobileLevel === 3 && selectedCategory && (
                    <motion.div
                      key="level3"
                      custom={slideDirection}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="px-6 pb-4"
                    >
                      {/* Back */}
                      <button
                        onClick={goBack}
                        className="flex items-center gap-2 py-4 text-sm font-semibold text-gray-500 hover:text-primary transition-colors min-h-[44px] focus:outline-none -ml-2 px-2 rounded-md active:bg-gray-100"
                      >
                        <ArrowLeft size={16} aria-hidden="true" />
                        Back to Services
                      </button>
                      <div className="h-px bg-gray-100 mb-2" />
                      <p className="text-[11px] font-bold uppercase tracking-widest text-primary py-2 mb-1">
                        {selectedCategory.title}
                      </p>
                      <ul className="flex flex-col">
                        {selectedCategory.items.map((item, index) => {
                          const Icon = item.icon;
                          return (
                            <motion.li 
                              key={item.href} 
                              className="border-b border-gray-100"
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: 0.1 + index * 0.04 }}
                            >
                              <Link
                                href={item.href}
                                onClick={closeMobileMenu}
                                className="group flex items-center gap-3 py-3.5 min-h-[44px] transition-colors hover:text-primary"
                              >
                                <Icon
                                  size={16}
                                  className="shrink-0 text-primary"
                                  aria-hidden="true"
                                />
                                <span className="text-[15px] font-medium text-dark-800 group-hover:text-primary">
                                  {item.label}
                                </span>
                              </Link>
                            </motion.li>
                          );
                        })}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Get a Quote — always visible at bottom */}
              <div className="shrink-0 px-6 py-5 border-t border-gray-100">
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="block w-full rounded-lg bg-primary py-4 text-center text-base font-semibold text-white transition-all hover:bg-primary-dark shadow-lg shadow-primary/25 min-h-[44px]"
                >
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, clinic } from "@/lib/data";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
      >
        <nav
          className={cn(
            "flex w-full max-w-6xl items-center justify-between gap-4 rounded-full px-5 py-2.5 transition-all duration-500",
            scrolled
              ? "glass shadow-soft"
              : "bg-transparent border border-transparent"
          )}
        >
          <Link href="/" className="flex items-center gap-2.5" aria-label={clinic.name}>
            <Logo className="size-9" />
            <span className="font-display text-lg font-semibold tracking-tight text-ink">
              {clinic.name}
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    active
                      ? "text-teal-800"
                      : "text-ink-soft hover:text-teal-700"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-mint-100"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${clinic.phone.replace(/[^+\d]/g, "")}`}
              className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-teal-800 transition-colors hover:text-teal-600 lg:flex"
            >
              <Phone className="size-4" strokeWidth={2} />
              {clinic.phone}
            </a>
            <Button href="/book" className="hidden sm:inline-flex" magnetic={false}>
              Book Now
            </Button>
            <button
              onClick={() => setOpen(true)}
              className="grid size-10 place-items-center rounded-full bg-ink/[0.06] text-ink md:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col bg-teal-950/95 px-6 py-6 backdrop-blur-xl md:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-lg font-semibold text-ivory">
                {clinic.name}
              </span>
              <button
                onClick={() => setOpen(false)}
                className="grid size-10 place-items-center rounded-full bg-white/10 text-ivory"
                aria-label="Close menu"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="mt-16 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    className="block border-b border-white/10 py-4 font-display text-4xl text-ivory"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto flex flex-col gap-4">
              <a
                href={`tel:${clinic.phone.replace(/[^+\d]/g, "")}`}
                className="flex items-center gap-2 text-mint-200"
              >
                <Phone className="size-4" /> {clinic.phone}
              </a>
              <Button href="/book" variant="light" className="w-full justify-center">
                Book a Consultation
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

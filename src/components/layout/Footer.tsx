import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { clinic, navLinks, treatments } from "@/lib/data";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-teal-950 text-mint-100">
      <div className="grain pointer-events-none absolute inset-0" />

      {/* Oversized wordmark */}
      <div className="pointer-events-none absolute -bottom-6 left-0 right-0 select-none text-center">
        <span className="font-display text-[22vw] leading-none text-white/[0.03]">
          {clinic.name}
        </span>
      </div>

      <div className="container-x relative z-10 pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <Logo className="size-10" />
              <span className="font-display text-2xl font-semibold text-ivory">
                {clinic.name}
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-mint-100/60">
              A premium dental studio where cosmetic artistry meets painless,
              spa-like care. Crafting confident smiles in San Francisco since
              2009.
            </p>
            <div className="mt-6 flex gap-3">
              {clinic.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="grid size-10 place-items-center rounded-full border border-white/10 text-mint-100/70 transition-colors hover:border-mint-400 hover:text-mint-300"
                  aria-label={s.label}
                >
                  <span className="text-xs font-bold">{s.label[0]}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-mint-300">
              Explore
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-mint-100/70 transition-colors hover:text-ivory"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-mint-300">
              Treatments
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {treatments.slice(0, 5).map((t) => (
                <li key={t.slug}>
                  <Link
                    href="/smile-gallery"
                    className="text-mint-100/70 transition-colors hover:text-ivory"
                  >
                    {t.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-mint-300">
              Visit Us
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-mint-100/70">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-mint-300" />
                {clinic.address}
              </li>
              <li>
                <a
                  href={`tel:${clinic.phone.replace(/[^+\d]/g, "")}`}
                  className="flex gap-3 transition-colors hover:text-ivory"
                >
                  <Phone className="mt-0.5 size-4 shrink-0 text-mint-300" />
                  {clinic.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${clinic.email}`}
                  className="flex gap-3 transition-colors hover:text-ivory"
                >
                  <Mail className="mt-0.5 size-4 shrink-0 text-mint-300" />
                  {clinic.email}
                </a>
              </li>
            </ul>
            <Link
              href="/book"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-mint-400 px-5 py-2.5 text-sm font-semibold text-teal-950 transition-colors hover:bg-mint-300"
            >
              Book a Consultation
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-mint-100/50 md:flex-row">
          <p>
            © {new Date().getFullYear()} {clinic.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ivory">Privacy Policy</a>
            <a href="#" className="hover:text-ivory">Terms</a>
            <a href="#" className="hover:text-ivory">HIPAA Notice</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

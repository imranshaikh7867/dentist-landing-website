"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  CalendarCheck,
  PartyPopper,
} from "lucide-react";
import Icon from "@/components/ui/Icon";
import Photo from "@/components/ui/Photo";
import { bookingTreatments, doctors, timeSlots } from "@/lib/data";
import { cn } from "@/lib/utils";

type Data = {
  treatment: string;
  doctor: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
  emergency: boolean;
};

const steps = ["Treatment", "Dentist", "Date & Time", "Your Details"];

/** Deterministic list of upcoming days (no Date.now at module scope). */
function useUpcomingDays() {
  return useMemo(() => {
    const days: { key: string; label: string; dow: string; dom: number }[] = [];
    const now = new Date();
    const fmtDow = new Intl.DateTimeFormat("en-US", { weekday: "short" });
    for (let i = 1; i <= 14; i++) {
      const d = new Date(now);
      d.setDate(now.getDate() + i);
      if (d.getDay() === 0) continue; // skip Sundays
      days.push({
        key: d.toISOString().slice(0, 10),
        label: d.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
        dow: fmtDow.format(d),
        dom: d.getDate(),
      });
    }
    return days.slice(0, 10);
  }, []);
}

export default function BookingForm() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [data, setData] = useState<Data>({
    treatment: "",
    doctor: "no-pref",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
    emergency: false,
  });
  const days = useUpcomingDays();

  const set = (patch: Partial<Data>) => setData((d) => ({ ...d, ...patch }));

  const canNext = [
    !!data.treatment,
    !!data.doctor,
    !!data.date && !!data.time,
    data.name.trim().length > 1 &&
      /.+@.+\..+/.test(data.email) &&
      data.phone.trim().length >= 7,
  ][step];

  const next = () => {
    if (step < steps.length - 1) setStep((s) => s + 1);
    else setDone(true);
  };
  const back = () => setStep((s) => Math.max(0, s - 1));

  if (done) {
    return <Confirmation data={data} />;
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="overflow-hidden rounded-[2rem] border border-ink/8 bg-white shadow-lift">
        {/* progress */}
        <div className="border-b border-ink/8 bg-cream/60 px-6 py-5 md:px-10">
          <div className="flex items-center justify-between">
            {steps.map((label, i) => (
              <div key={label} className="flex flex-1 items-center last:flex-none">
                <div className="flex items-center gap-2.5">
                  <span
                    className={cn(
                      "grid size-8 place-items-center rounded-full text-xs font-bold transition-colors",
                      i < step && "bg-teal-800 text-ivory",
                      i === step && "bg-mint-400 text-teal-950",
                      i > step && "bg-ink/10 text-muted"
                    )}
                  >
                    {i < step ? <Check className="size-4" strokeWidth={3} /> : i + 1}
                  </span>
                  <span
                    className={cn(
                      "hidden text-sm font-semibold sm:block",
                      i <= step ? "text-ink" : "text-muted"
                    )}
                  >
                    {label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="mx-3 h-px flex-1 bg-ink/10">
                    <div
                      className={cn(
                        "h-px bg-teal-700 transition-all duration-500",
                        i < step ? "w-full" : "w-0"
                      )}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="min-h-[24rem] p-6 md:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {step === 0 && (
                <StepShell title="What brings you in?" subtitle="Select the treatment you're most interested in.">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {bookingTreatments.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => set({ treatment: t.id })}
                        className={cn(
                          "flex items-center gap-4 rounded-2xl border p-4 text-left transition-all",
                          data.treatment === t.id
                            ? "border-teal-600 bg-mint-100 shadow-soft"
                            : "border-ink/10 hover:border-teal-600/40"
                        )}
                      >
                        <span
                          className={cn(
                            "grid size-11 shrink-0 place-items-center rounded-xl transition-colors",
                            data.treatment === t.id
                              ? "bg-teal-800 text-mint-200"
                              : "bg-ink/[0.05] text-teal-800"
                          )}
                        >
                          <Icon name={t.icon} className="size-5" />
                        </span>
                        <span className="text-sm font-semibold text-ink">
                          {t.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </StepShell>
              )}

              {step === 1 && (
                <StepShell title="Choose your dentist" subtitle="Have a preference? Pick a specialist — or let us match you.">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <button
                      onClick={() => set({ doctor: "no-pref" })}
                      className={cn(
                        "flex items-center gap-4 rounded-2xl border p-4 text-left transition-all",
                        data.doctor === "no-pref"
                          ? "border-teal-600 bg-mint-100"
                          : "border-ink/10 hover:border-teal-600/40"
                      )}
                    >
                      <span className="grid size-12 shrink-0 place-items-center rounded-full bg-teal-800 text-mint-200">
                        <PartyPopper className="size-5" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-ink">No preference</p>
                        <p className="text-xs text-muted">Match me with the best fit</p>
                      </div>
                    </button>
                    {doctors.map((d) => (
                      <button
                        key={d.name}
                        onClick={() => set({ doctor: d.name })}
                        className={cn(
                          "flex items-center gap-4 rounded-2xl border p-4 text-left transition-all",
                          data.doctor === d.name
                            ? "border-teal-600 bg-mint-100"
                            : "border-ink/10 hover:border-teal-600/40"
                        )}
                      >
                        <Photo
                          id={d.image}
                          alt={d.name}
                          width={120}
                          className="size-12 shrink-0 rounded-full"
                        />
                        <div>
                          <p className="text-sm font-semibold text-ink">{d.name}</p>
                          <p className="text-xs text-muted">
                            {d.role.split("·")[1] ?? d.role}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </StepShell>
              )}

              {step === 2 && (
                <StepShell title="Pick a date & time" subtitle="These are our next available appointment slots.">
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-muted">
                    Select a day
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {days.map((d) => (
                      <button
                        key={d.key}
                        onClick={() => set({ date: d.key })}
                        className={cn(
                          "flex w-16 flex-col items-center rounded-xl border py-2.5 transition-all",
                          data.date === d.key
                            ? "border-teal-600 bg-teal-800 text-ivory"
                            : "border-ink/10 text-ink hover:border-teal-600/40"
                        )}
                      >
                        <span className="text-[11px] uppercase opacity-70">{d.dow}</span>
                        <span className="font-display text-xl leading-tight">{d.dom}</span>
                      </button>
                    ))}
                  </div>

                  <p className="mb-3 mt-7 text-xs font-bold uppercase tracking-widest text-muted">
                    Select a time
                  </p>
                  <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
                    {timeSlots.map((t) => (
                      <button
                        key={t}
                        disabled={!data.date}
                        onClick={() => set({ time: t })}
                        className={cn(
                          "rounded-xl border py-2.5 text-sm font-semibold transition-all disabled:cursor-not-allowed disabled:opacity-40",
                          data.time === t
                            ? "border-teal-600 bg-mint-200 text-teal-900"
                            : "border-ink/10 text-ink hover:border-teal-600/40"
                        )}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </StepShell>
              )}

              {step === 3 && (
                <StepShell title="Almost there" subtitle="Where should we send your confirmation?">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      label="Full name"
                      value={data.name}
                      onChange={(v) => set({ name: v })}
                      placeholder="Jane Appleseed"
                    />
                    <Field
                      label="Phone"
                      value={data.phone}
                      onChange={(v) => set({ phone: v })}
                      placeholder="+1 (415) 000-0000"
                      type="tel"
                    />
                    <div className="sm:col-span-2">
                      <Field
                        label="Email"
                        value={data.email}
                        onChange={(v) => set({ email: v })}
                        placeholder="jane@email.com"
                        type="email"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="mb-1.5 block text-sm font-semibold text-ink">
                        Anything we should know? <span className="text-muted">(optional)</span>
                      </label>
                      <textarea
                        value={data.notes}
                        onChange={(e) => set({ notes: e.target.value })}
                        rows={3}
                        placeholder="Nervous patient, specific goals, preferred contact time…"
                        className="w-full resize-none rounded-xl border border-ink/12 bg-cream/40 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-teal-600 focus:bg-white"
                      />
                    </div>
                    <label className="flex cursor-pointer items-center gap-3 sm:col-span-2">
                      <input
                        type="checkbox"
                        checked={data.emergency}
                        onChange={(e) => set({ emergency: e.target.checked })}
                        className="peer sr-only"
                      />
                      <span className="grid size-6 place-items-center rounded-md border border-ink/20 transition-colors peer-checked:border-teal-700 peer-checked:bg-teal-800 peer-checked:text-ivory">
                        {data.emergency && <Check className="size-4" strokeWidth={3} />}
                      </span>
                      <span className="text-sm text-ink-soft">
                        This is urgent / I&apos;m in pain — please prioritise me
                      </span>
                    </label>
                  </div>
                </StepShell>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* nav */}
        <div className="flex items-center justify-between border-t border-ink/8 px-6 py-5 md:px-10">
          <button
            onClick={back}
            disabled={step === 0}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted transition-colors hover:text-ink disabled:invisible"
          >
            <ChevronLeft className="size-4" /> Back
          </button>
          <button
            onClick={next}
            disabled={!canNext}
            className="group inline-flex items-center gap-2 rounded-full bg-teal-800 px-7 py-3.5 text-sm font-semibold text-ivory transition-all hover:bg-teal-700 disabled:cursor-not-allowed disabled:bg-ink/20 disabled:text-muted"
          >
            {step === steps.length - 1 ? "Confirm Booking" : "Continue"}
            <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

function StepShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-2xl">{title}</h3>
      <p className="mt-1 text-sm text-muted">{subtitle}</p>
      <div className="mt-6">{children}</div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-ink">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-ink/12 bg-cream/40 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-teal-600 focus:bg-white"
      />
    </div>
  );
}

function Confirmation({ data }: { data: Data }) {
  const treatment =
    bookingTreatments.find((t) => t.id === data.treatment)?.label ?? "Consultation";
  const prettyDate = data.date
    ? new Date(data.date + "T00:00:00").toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto max-w-2xl overflow-hidden rounded-[2rem] border border-ink/8 bg-white p-8 text-center shadow-lift md:p-14"
    >
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 12 }}
        className="mx-auto grid size-20 place-items-center rounded-full bg-mint-200 text-teal-800"
      >
        <CalendarCheck className="size-10" strokeWidth={1.6} />
      </motion.span>
      <h3 className="mt-6 text-3xl">You&apos;re booked in!</h3>
      <p className="mx-auto mt-3 max-w-md text-muted">
        Thank you, {data.name.split(" ")[0] || "friend"}. A confirmation is on its
        way to {data.email}. We can&apos;t wait to meet you.
      </p>

      <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-ink/8 bg-ink/8 text-left sm:grid-cols-2">
        {[
          ["Treatment", treatment],
          ["Dentist", data.doctor === "no-pref" ? "Best available match" : data.doctor],
          ["Date", prettyDate],
          ["Time", data.time],
        ].map(([k, v]) => (
          <div key={k} className="bg-white p-5">
            <p className="text-xs font-bold uppercase tracking-widest text-muted">{k}</p>
            <p className="mt-1 font-semibold text-ink">{v}</p>
          </div>
        ))}
      </div>

      {data.emergency && (
        <p className="mt-5 rounded-xl bg-gold-200 px-4 py-3 text-sm font-semibold text-gold-600">
          We&apos;ve flagged your booking as urgent — our team will call you shortly.
        </p>
      )}

      <p className="mt-6 text-xs text-muted">
        Need to change something? A reschedule link is in your confirmation email.
      </p>
    </motion.div>
  );
}

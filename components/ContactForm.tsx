"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const useCases = [
  "Agriculture / Ranching",
  "Outdoor Property",
  "Tactical / Defense",
  "Research",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="border border-tactical/60 bg-tactical/5 p-10 text-center"
      >
        <CheckCircle2 className="mx-auto h-10 w-10 text-tactical-light" />
        <p className="mt-6 font-mono text-[11px] uppercase tracking-ultra-wide text-tactical-light">
          Transmission received
        </p>
        <h3 className="mt-3 font-display text-3xl font-semibold uppercase tracking-wide text-white">
          We&apos;ll be in touch.
        </h3>
        <p className="mt-4 text-sm text-bone/70">
          A member of the Shepherd team will respond directly. We do not pass
          your information to anyone, ever.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Name" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            className="input-shepherd"
            placeholder="Full name"
          />
        </Field>
        <Field label="Email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            className="input-shepherd"
            placeholder="you@domain.com"
          />
        </Field>
      </div>

      <Field label="Organization" htmlFor="org">
        <input
          id="org"
          name="org"
          type="text"
          className="input-shepherd"
          placeholder="Ranch, unit, agency, or company"
        />
      </Field>

      <Field label="Use Case" htmlFor="useCase">
        <div className="relative">
          <select id="useCase" name="useCase" className="input-shepherd appearance-none pr-10">
            {useCases.map((u) => (
              <option key={u} value={u} className="bg-ink-800">
                {u}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 font-mono text-xs text-bone/40">
            ▾
          </span>
        </div>
      </Field>

      <Field label="Message" htmlFor="message">
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="input-shepherd resize-none"
          placeholder="Briefly describe your environment, scale, and timeline."
        />
      </Field>

      <button type="submit" disabled={loading} className="btn-tactical w-full justify-center md:w-auto">
        {loading ? "Transmitting…" : "Send Transmission"}
        {!loading && <ArrowRight className="h-4 w-4" />}
      </button>

      <p className="font-mono text-[10px] uppercase tracking-ultra-wide text-bone/40">
        Encrypted in transit. Not shared. Not sold.
      </p>

      <style jsx>{`
        :global(.input-shepherd) {
          width: 100%;
          background-color: rgba(28, 31, 34, 0.5);
          border: 1px solid #3a3f45;
          color: #e8e8e6;
          padding: 14px 16px;
          font-family: var(--font-sans);
          font-size: 14px;
          outline: none;
          transition: all 0.25s ease;
        }
        :global(.input-shepherd::placeholder) {
          color: rgba(232, 232, 230, 0.35);
        }
        :global(.input-shepherd:focus) {
          border-color: #5b7340;
          background-color: rgba(28, 31, 34, 0.8);
          box-shadow: 0 0 0 1px #5b7340, 0 0 24px rgba(91, 115, 64, 0.2);
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block font-mono text-[11px] uppercase tracking-ultra-wide text-bone/50"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

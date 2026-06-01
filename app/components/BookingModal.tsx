"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { business } from "../content";

export default function BookingModal() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener("open-booking", onOpen);
    return () => window.removeEventListener("open-booking", onOpen);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // No backend yet — we don't store the data. Just simulate a submission
    // and send the visitor to the thank-you page.
    setSubmitting(true);
    setTimeout(() => {
      router.push("/thank-you");
    }, 500);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Schedule a consultation"
    >
      <div
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
        onClick={() => !submitting && setOpen(false)}
      />
      <div className="relative w-full max-w-lg animate-fadeUp rounded-3xl bg-white p-7 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)] sm:p-9">
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full text-subtle transition hover:bg-mist hover:text-ink"
        >
          ✕
        </button>

        <h2 className="text-[26px] font-semibold tracking-tight text-ink">
          Schedule a consultation
        </h2>
        <p className="mt-2 text-[15px] leading-relaxed text-subtle">
          Tell us a little about your project and we&apos;ll reach out to set up
          your call.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full name" name="name" required />
            <Field label="Email" name="email" type="email" required />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Phone" name="phone" type="tel" />
            <Field label="Company" name="company" />
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-1.5 block text-[13px] font-medium text-ink"
            >
              Tell us about your project
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full resize-none rounded-2xl border border-hairline bg-white px-4 py-3 text-[15px] text-ink outline-none transition focus:border-ink"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-full bg-ink py-3.5 text-[16px] font-medium text-white transition hover:bg-ink/85 disabled:opacity-60"
          >
            {submitting ? "Sending…" : business.cta}
          </button>
          <p className="text-center text-[12px] text-subtle">
            By submitting you agree to be contacted by {business.name}.
          </p>
        </form>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-[13px] font-medium text-ink"
      >
        {label}
        {required && <span className="text-subtle"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-2xl border border-hairline bg-white px-4 py-3 text-[15px] text-ink outline-none transition focus:border-ink"
      />
    </div>
  );
}

"use client";

import { useForm, ValidationError } from "@formspree/react";

const inquiryTypes = [
  "General Inquiry",
  "Service Request",
  "Collaboration",
  "Speaking / Training",
  "Partnership",
  "Shadow Root / URUU Discussion"
];

const serviceInterest = [
  "Awareness Training",
  "Phishing Simulation",
  "Risk Assessment",
  "Security Documentation",
  "AI Workflow Assessment",
  "Workflow Automation Support",
  "Other"
];

export function ContactForm() {
  const [state, handleSubmit] = useForm("xnjlowjp");

  if (state.succeeded) {
    return (
      <div className="rounded-2xl border border-accent/40 bg-accent/10 p-6 text-sm text-slate-100">
        <p className="text-base font-semibold text-accent">Message received</p>
        <p className="mt-2 text-slate-200">
          Thank you. Your message has been received. I’ll review it and respond as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm text-slate-200">
          Full Name
          <input name="fullName" required className="w-full rounded-xl border border-white/15 bg-ink/80 px-4 py-2.5" />
        </label>
        <label className="space-y-2 text-sm text-slate-200">
          Email
          <input
            name="email"
            type="email"
            required
            className="w-full rounded-xl border border-white/15 bg-ink/80 px-4 py-2.5"
          />
        </label>
      </div>
      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-sm text-rose-300" />

      <div className="grid gap-4 md:grid-cols-3">
        <label className="space-y-2 text-sm text-slate-200">
          Organization
          <input name="organization" className="w-full rounded-xl border border-white/15 bg-ink/80 px-4 py-2.5" />
        </label>
        <label className="space-y-2 text-sm text-slate-200">
          Role Title
          <input name="roleTitle" className="w-full rounded-xl border border-white/15 bg-ink/80 px-4 py-2.5" />
        </label>
        <label className="space-y-2 text-sm text-slate-200">
          Phone (Optional)
          <input name="phone" className="w-full rounded-xl border border-white/15 bg-ink/80 px-4 py-2.5" />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm text-slate-200">
          Inquiry Type
          <select
            name="inquiryType"
            required
            defaultValue=""
            className="w-full rounded-xl border border-white/15 bg-ink/80 px-4 py-2.5"
          >
            <option value="" disabled>
              Select inquiry type
            </option>
            {inquiryTypes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-2 text-sm text-slate-200">
          Service Interest (Optional)
          <select
            name="serviceInterest"
            defaultValue=""
            className="w-full rounded-xl border border-white/15 bg-ink/80 px-4 py-2.5"
          >
            <option value="">Select service area</option>
            {serviceInterest.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block space-y-2 text-sm text-slate-200">
        Message
        <textarea
          name="message"
          required
          rows={6}
          className="w-full rounded-xl border border-white/15 bg-ink/80 px-4 py-2.5"
          placeholder="Share your context, challenge, and desired outcome."
        />
      </label>
      <ValidationError prefix="Message" field="message" errors={state.errors} className="text-sm text-rose-300" />

      {state.errors.length > 0 && (
        <div className="rounded-xl border border-rose-400/40 bg-rose-400/10 p-3 text-sm text-rose-200">
          Something went wrong. Please review the fields and try again.
        </div>
      )}

      <button type="submit" disabled={state.submitting} className="btn-primary w-full sm:w-auto">
        {state.submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

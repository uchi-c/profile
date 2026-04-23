"use client";

import { useForm, ValidationError } from "@formspree/react";
import { MailCheck } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const inquiryTypes = [
  "General Inquiry",
  "Service Request",
  "Collaboration",
  "Speaking / Training",
  "Partnership",
  "Shadow Root / URUU Discussion"
] as const;

const serviceInterests = [
  "Awareness Training",
  "Phishing Simulation",
  "Risk Assessment",
  "Security Documentation",
  "AI Workflow Assessment",
  "Workflow Automation Support",
  "Other"
] as const;

export function ContactForm() {
  const [state, handleSubmit] = useForm(siteConfig.formspreeId);

  if (state.succeeded) {
    return (
      <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-8 text-center">
        <MailCheck className="mx-auto mb-4 h-9 w-9 text-accent" />
        <h3 className="text-xl font-semibold text-white">Message received</h3>
        <p className="mt-3 text-sm text-slate-300">
          Thank you. Your message has been received. I’ll review it and respond as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Full Name" name="fullName" required placeholder="Your full name" />
        <Field label="Email" name="email" type="email" required placeholder="you@organization.com" />
      </div>
      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-sm text-rose-300" />

      <div className="grid gap-4 md:grid-cols-3">
        <Field label="Organization" name="organization" placeholder="Organization name" />
        <Field label="Role Title" name="roleTitle" placeholder="Your role" />
        <Field label="Phone" name="phone" placeholder="+260..." />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <SelectField label="Inquiry Type" name="inquiryType" options={inquiryTypes} required />
        <SelectField label="Service Interest" name="serviceInterest" options={serviceInterests} />
      </div>

      <label className="block text-sm text-slate-200">
        Message
        <textarea
          name="message"
          required
          rows={6}
          placeholder="Share your current context, challenge, and outcome you want to achieve."
          className="mt-2 w-full rounded-xl border border-line bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none ring-accent/30 transition focus:ring"
        />
      </label>
      <ValidationError prefix="Message" field="message" errors={state.errors} className="text-sm text-rose-300" />

      {state.errors && state.errors.length > 0 ? (
        <p className="rounded-xl border border-rose-300/30 bg-rose-400/10 px-4 py-3 text-sm text-rose-200">
          Submission failed. Please review your details and try again.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state.submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
};

function Field({ label, name, placeholder, type = "text", required }: FieldProps) {
  return (
    <label className="block text-sm text-slate-200">
      {label}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-xl border border-line bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none ring-accent/30 transition focus:ring"
      />
    </label>
  );
}

type SelectFieldProps = {
  label: string;
  name: string;
  options: readonly string[];
  required?: boolean;
};

function SelectField({ label, name, options, required }: SelectFieldProps) {
  return (
    <label className="block text-sm text-slate-200">
      {label}
      <select
        name={name}
        required={required}
        defaultValue=""
        className="mt-2 w-full rounded-xl border border-line bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none ring-accent/30 transition focus:ring"
      >
        <option value="" disabled>
          Select {label.toLowerCase()}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

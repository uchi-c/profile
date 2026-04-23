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

const serviceOptions = [
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
      <div className="form-status success">
        <h3>Message received</h3>
        <p>
          Thank you. Your message has been received. I’ll review it and respond as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="grid-2">
        <label>
          Full Name
          <input type="text" name="fullName" required placeholder="Your full name" />
        </label>
        <label>
          Email
          <input type="email" name="email" required placeholder="you@organization.com" />
        </label>
      </div>
      <ValidationError prefix="Email" field="email" errors={state.errors} className="error" />

      <div className="grid-3">
        <label>
          Organization
          <input type="text" name="organization" placeholder="Organization name" />
        </label>
        <label>
          Role Title
          <input type="text" name="roleTitle" placeholder="Your role" />
        </label>
        <label>
          Phone (Optional)
          <input type="tel" name="phone" placeholder="+260..." />
        </label>
      </div>

      <div className="grid-2">
        <label>
          Inquiry Type
          <select name="inquiryType" required defaultValue="">
            <option value="" disabled>
              Select inquiry type
            </option>
            {inquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label>
          Service Interest (Optional)
          <select name="serviceInterest" defaultValue="">
            <option value="">Select service area</option>
            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label>
        Project Type (Optional)
        <input type="text" name="projectType" placeholder="Assessment, advisory, training, implementation..." />
      </label>

      <label>
        Message
        <textarea
          name="message"
          required
          rows={6}
          placeholder="Share your context, challenge, and expected outcome."
        />
      </label>
      <ValidationError prefix="Message" field="message" errors={state.errors} className="error" />

      {state.errors?.length > 0 && (
        <div className="form-status error">
          <p>Something went wrong. Please review the fields and try again.</p>
        </div>
      )}

      <button type="submit" disabled={state.submitting}>
        {state.submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

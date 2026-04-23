"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  Briefcase,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Shield,
  Wrench
} from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { siteConfig } from "@/lib/site-config";

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.45, ease: "easeOut" }
} as const;

export default function HomePage() {
  return (
    <main>
      <section id="home" className="section-wrap">
        <motion.div {...fadeIn}>
          <span className="kicker">Personal Portfolio</span>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">{siteConfig.name}</h1>
          <p className="mt-3 text-xl text-slate-300 md:text-2xl">{siteConfig.title}</p>
          <p className="mt-5 max-w-3xl text-lg text-accent">{siteConfig.tagline}</p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300">{siteConfig.shortOverview}</p>
          <p className="mt-4 max-w-3xl text-sm uppercase tracking-[0.16em] text-slate-400">{siteConfig.supportLine}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="btn-primary">View My Work</a>
            <a href="#services" className="btn-ghost">Explore Services</a>
            <a href="#contact" className="btn-ghost">Contact Me</a>
          </div>
        </motion.div>
      </section>

      <section id="about" className="section-wrap pt-4">
        <motion.div {...fadeIn} className="grid gap-6 lg:grid-cols-[1.35fr_1fr]">
          <article className="card">
            <span className="kicker">About</span>
            <h2 className="text-2xl font-semibold md:text-3xl">Cybersecurity + secure systems with institutional context.</h2>
            <div className="mt-4 space-y-4 text-slate-300">
              {siteConfig.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
          <aside className="card">
            <p className="text-sm uppercase tracking-[0.16em] text-accent">Approach</p>
            <ul className="mt-4 space-y-3 text-slate-300">
              {siteConfig.profileHighlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Shield className="mt-0.5 h-4 w-4 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </motion.div>
      </section>

      <section id="services" className="section-wrap pt-4">
        <motion.div {...fadeIn}>
          <span className="kicker">Services</span>
          <h2 className="text-2xl font-semibold md:text-3xl">Security support designed for real operational environments.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {siteConfig.services.map((service) => (
              <article key={service.title} className="card flex flex-col">
                <service.icon className="h-6 w-6 text-accent" />
                <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{service.description}</p>
                <p className="mt-3 text-sm text-slate-400">
                  <strong className="text-slate-200">Problem it solves:</strong> {service.solves}
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  <strong className="text-slate-200">Who it is for:</strong> {service.audience}
                </p>
                <a href="#contact" className="mt-5 inline-flex items-center text-sm text-accent">
                  {service.cta} <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="skills" className="section-wrap pt-4">
        <motion.div {...fadeIn}>
          <span className="kicker">Skills & Tools</span>
          <h2 className="text-2xl font-semibold md:text-3xl">Operational security capabilities and hands-on technical stack.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              { title: "Security Tools", data: siteConfig.tools.security, icon: Shield },
              { title: "Technical Skills", data: siteConfig.tools.technical, icon: Wrench },
              { title: "Capability Areas", data: siteConfig.tools.capabilities, icon: BrainCircuit },
              { title: "Certification Roadmap", data: siteConfig.tools.certifications, icon: Briefcase }
            ].map((group) => (
              <article key={group.title} className="card">
                <group.icon className="h-5 w-5 text-accent" />
                <h3 className="mt-3 text-lg font-semibold">{group.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {group.data.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="work" className="section-wrap pt-4">
        <motion.div {...fadeIn}>
          <span className="kicker">Selected Work & Ventures</span>
          <h2 className="text-2xl font-semibold md:text-3xl">Founder context that supports, not replaces, personal execution.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {siteConfig.ventures.map((venture) => (
              <article className="card" key={venture.name}>
                <p className="text-xs uppercase tracking-[0.16em] text-accent">{venture.label}</p>
                <h3 className="mt-2 text-xl font-semibold">{venture.name}</h3>
                <p className="mt-3 text-slate-300">{venture.summary}</p>
                <a href={siteConfig.details[venture.linkKey as "shadowRoot" | "uruu"]} className="mt-5 inline-flex items-center text-sm text-accent">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
          <article className="card mt-4">
            <p className="text-xs uppercase tracking-[0.16em] text-accent">Additional Focus Themes</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {siteConfig.workThemes.map((theme) => (
                <span key={theme} className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-slate-200">
                  {theme}
                </span>
              ))}
            </div>
          </article>
        </motion.div>
      </section>

      <section id="insights" className="section-wrap pt-4">
        <motion.div {...fadeIn} className="card">
          <span className="kicker">Insights / Blog Direction</span>
          <h2 className="text-2xl font-semibold md:text-3xl">Focused analysis for practical cybersecurity and digital trust.</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {siteConfig.insightThemes.map((item) => (
              <p key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
                {item}
              </p>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="contact" className="section-wrap pt-4">
        <motion.div {...fadeIn} className="grid gap-5 lg:grid-cols-[1fr_1.2fr]">
          <article className="card">
            <span className="kicker">Contact</span>
            <h2 className="text-2xl font-semibold md:text-3xl">Let’s discuss your security priorities.</h2>
            <p className="mt-4 text-slate-300">{siteConfig.contactIntro}</p>
            <div className="mt-6 space-y-3 text-sm text-slate-300">
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> {siteConfig.details.email}</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> {siteConfig.details.phone}</p>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> {siteConfig.details.location}</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-3 text-sm">
              <a className="btn-ghost" href={siteConfig.details.linkedin}><Linkedin className="mr-2 h-4 w-4" /> LinkedIn</a>
              <a className="btn-ghost" href={siteConfig.details.github}><Github className="mr-2 h-4 w-4" /> GitHub</a>
            </div>
          </article>

          <article className="card">
            <p className="mb-5 text-sm uppercase tracking-[0.16em] text-accent">Secure inquiry form</p>
            <ContactForm />
          </article>
        </motion.div>
      </section>
    </main>
  );
}

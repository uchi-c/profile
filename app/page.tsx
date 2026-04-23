import type { ReactNode } from "react";
import { ArrowRight, BriefcaseBusiness, Building2, Cpu, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-6xl space-y-24 px-5 py-14 md:py-20">
      <section id="home" className="scroll-mt-24">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Personal Portfolio</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
            {siteConfig.identity.name}
          </h1>
          <h2 className="mt-4 max-w-3xl text-lg text-slate-300 md:text-2xl">{siteConfig.identity.title}</h2>
          <p className="mt-5 max-w-3xl text-base text-accent md:text-xl">{siteConfig.identity.tagline}</p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">
            {siteConfig.identity.supportLine}
          </p>
          <p className="mt-6 max-w-4xl text-sm leading-relaxed text-slate-300 md:text-base">
            {siteConfig.identity.shortOverview}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <HeroButton href="#work" label="View My Work" primary />
            <HeroButton href="#services" label="Explore Services" />
            <HeroButton href="#contact" label="Contact Me" />
          </div>
        </Reveal>
      </section>

      <section>
        <Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              "Cybersecurity & phishing resilience",
              "Secure systems & workflow visibility",
              "Digital trust for modern institutions"
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-line bg-card/80 p-5 shadow-glow">
                <p className="text-sm text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section>
        <SectionHeading
          id="about"
          eyebrow="About"
          title="Grounded in practical security. Focused on institution-level trust."
          description={
            <>
              <p>{siteConfig.about.intro}</p>
              <p className="mt-3">{siteConfig.about.body}</p>
              <p className="mt-3">{siteConfig.about.founder}</p>
            </>
          }
        />
        <div className="grid gap-4 md:grid-cols-3">
          {siteConfig.about.focusAreas.map((item, index) => (
            <Reveal key={item} delay={index * 0.05}>
              <article className="h-full rounded-2xl border border-line bg-panel p-5">
                <p className="text-sm text-slate-300">{item}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading id="services" eyebrow="Services" title="Security and workflow services designed for real operating environments." />
        <div className="grid gap-4 md:grid-cols-2">
          {siteConfig.services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.03}>
              <article className="h-full rounded-2xl border border-line bg-card p-6">
                <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{service.description}</p>
                <p className="mt-4 text-sm text-slate-300">
                  <span className="font-semibold text-slate-100">Problem it solves:</span> {service.solves}
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  <span className="font-semibold text-slate-100">Who it is for:</span> {service.for}
                </p>
                <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent">
                  {service.cta}
                  <ArrowRight size={15} />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading id="skills" eyebrow="Skills / Tools" title="Security tooling, technical strengths, and capability focus." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <SkillCard title="Security Tools" items={siteConfig.skills.securityTools} icon={<ShieldCheck size={18} />} />
          <SkillCard title="Technical Skills" items={siteConfig.skills.technicalSkills} icon={<Cpu size={18} />} />
          <SkillCard title="Capability Areas" items={siteConfig.skills.capabilityAreas} icon={<BriefcaseBusiness size={18} />} />
          <SkillCard title="Certification Roadmap" items={siteConfig.skills.certifications} icon={<Building2 size={18} />} />
        </div>
      </section>

      <section>
        <SectionHeading id="work" eyebrow="Selected Work / Ventures" title="Founder context and strategic work themes." />
        <div className="grid gap-4 md:grid-cols-3">
          <VentureCard title={siteConfig.ventures.shadowRoot.name} summary={siteConfig.ventures.shadowRoot.summary} link={siteConfig.ventures.shadowRoot.link} label="Current Venture" />
          <VentureCard title={siteConfig.ventures.uruu.name} summary={siteConfig.ventures.uruu.summary} link={siteConfig.ventures.uruu.link} label="Flagship Platform Initiative" />
          <article className="rounded-2xl border border-line bg-panel p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Additional Focus Themes</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {siteConfig.ventures.themes.map((theme) => (
                <li key={theme}>• {theme}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section>
        <SectionHeading
          id="insights"
          eyebrow="Insights / Blog"
          title="Strategic insight themes"
          description="Perspectives centered on practical cybersecurity, secure workflows, and governance-aware modernization for SMEs, NGOs, schools, and institutional teams."
        />
        <div className="flex flex-wrap gap-3">
          {siteConfig.insights.map((topic) => (
            <span key={topic} className="rounded-full border border-line bg-slate-900/80 px-4 py-2 text-sm text-slate-200">
              {topic}
            </span>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading id="contact" eyebrow="Contact" title="Open to practical conversations and selected opportunities." description={siteConfig.contactIntro} />
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="rounded-2xl border border-line bg-panel p-6">
            <h3 className="text-xl font-semibold text-white">Direct contact</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-2"><Mail size={15} className="text-accent" /> {siteConfig.contact.email}</li>
              <li className="flex items-center gap-2"><Phone size={15} className="text-accent" /> {siteConfig.contact.phone}</li>
              <li className="flex items-center gap-2"><MapPin size={15} className="text-accent" /> {siteConfig.contact.location}</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <ContactLink href={siteConfig.links.linkedin} label="LinkedIn" />
              <ContactLink href={siteConfig.links.github} label="GitHub" />
              <ContactLink href={siteConfig.links.cv} label="CV" />
            </div>
          </aside>
          <div className="rounded-2xl border border-line bg-card p-6">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}

function HeroButton({ href, label, primary = false }: { href: string; label: string; primary?: boolean }) {
  return (
    <a
      href={href}
      className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
        primary
          ? "bg-accent text-slate-950 hover:bg-emerald-300"
          : "border border-line bg-slate-900/70 text-slate-200 hover:border-accent/60 hover:text-accent"
      }`}
    >
      {label}
    </a>
  );
}

function SkillCard({ title, items, icon }: { title: string; items: readonly string[]; icon: ReactNode }) {
  return (
    <article className="rounded-2xl border border-line bg-card p-5">
      <div className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
        <span className="text-accent">{icon}</span>
        {title}
      </div>
      <ul className="space-y-2 text-sm text-slate-300">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </article>
  );
}

function VentureCard({ title, summary, link, label }: { title: string; summary: string; link: string; label: string }) {
  return (
    <article className="rounded-2xl border border-line bg-panel p-6">
      <p className="text-xs uppercase tracking-[0.2em] text-accent">{label}</p>
      <h3 className="mt-3 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm text-slate-300">{summary}</p>
      <a href={link} className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent">
        Learn more <ArrowRight size={15} />
      </a>
    </article>
  );
}

function ContactLink({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} className="rounded-full border border-line px-4 py-1.5 text-slate-200 transition hover:text-accent">
      {label}
    </a>
  );
}

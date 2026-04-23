import { siteConfig } from "@/lib/site-config";
import { ContactForm } from "@/components/forms/contact-form";

export default function HomePage() {
  const { name, title, tagline, valueStatement, servicePillars, tools, ventures, insights, links } = siteConfig;

  return (
    <main>
      <section className="hero section" id="home">
        <p className="eyebrow">Personal Portfolio</p>
        <h1>{name}</h1>
        <h2>{title}</h2>
        <p className="tagline">{tagline}</p>
        <p className="lead">{valueStatement}</p>
        <div className="cta-row">
          <a href="#ventures" className="btn primary">
            View My Work
          </a>
          <a href="#services" className="btn">
            Explore Services
          </a>
          <a href="#contact" className="btn">
            Contact Me
          </a>
        </div>
      </section>

      <section className="section" id="about">
        <h3>About</h3>
        <p>
          I am a Zambia-based cybersecurity specialist and secure systems builder focused on digital trust,
          institutional workflow resilience, and practical modernization. My work combines security assessment,
          awareness strategy, workflow analysis, and governance-conscious implementation.
        </p>
        <p>
          I am especially interested in environments where operational complexity, human risk, and digital adoption
          intersect—schools, NGOs, SMEs, and institution-facing teams across Africa that need security outcomes that
          are actionable, measurable, and sustainable.
        </p>
      </section>

      <section className="section" id="services">
        <h3>Services</h3>
        <div className="card-grid">
          {servicePillars.map((service) => (
            <article className="card" key={service.title}>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
              <p>
                <strong>Solves:</strong> {service.solves}
              </p>
              <p>
                <strong>Best for:</strong> {service.for}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="skills">
        <h3>Skills & Tools</h3>
        <div className="card-grid compact">
          <article className="card">
            <h4>Security Tools</h4>
            <ul>{tools.securityTools.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <article className="card">
            <h4>Technical Skills</h4>
            <ul>{tools.technical.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <article className="card">
            <h4>Capabilities</h4>
            <ul>{tools.capabilities.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <article className="card">
            <h4>Certification Roadmap</h4>
            <ul>{tools.certifications.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        </div>
      </section>

      <section className="section" id="ventures">
        <h3>Selected Work & Ventures</h3>
        <div className="card-grid compact">
          {ventures.map((venture) => (
            <article className="card" key={venture.name}>
              <p className="eyebrow">{venture.label}</p>
              <h4>{venture.name}</h4>
              <p>{venture.summary}</p>
              <ul>{venture.focus.map((item) => <li key={item}>{item}</li>)}</ul>
              <a className="text-link" href={venture.link}>
                Learn more →
              </a>
            </article>
          ))}
          <article className="card">
            <p className="eyebrow">Applied Themes</p>
            <h4>Operational Security Initiatives</h4>
            <ul>
              <li>Phishing simulation programs for reporting discipline.</li>
              <li>Awareness campaigns tied to measurable user behavior outcomes.</li>
              <li>Governance support for secure documentation and review workflows.</li>
              <li>Secure system concepts for institution-focused digital platforms.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section" id="insights">
        <h3>Insights</h3>
        <p>
          I share practical perspectives on cybersecurity, digital trust, and secure workflows—especially in
          African institutional contexts where modernization must balance speed, governance, and reliability.
        </p>
        <div className="pill-grid">
          {insights.map((topic) => (
            <span key={topic} className="pill">
              {topic}
            </span>
          ))}
        </div>
      </section>

      <section className="section" id="contact">
        <h3>Contact</h3>
        <div className="contact-layout">
          <div className="card">
            <h4>Let’s discuss your security priorities</h4>
            <p>
              For consulting, collaboration, training, or Shadow Root / URUU conversations, send a message and I’ll
              respond with next steps.
            </p>
            <ul>
              <li>Email: {siteConfig.email}</li>
              <li>Phone: {siteConfig.phone}</li>
              <li>Location: {siteConfig.location}</li>
            </ul>
            <div className="cta-row">
              <a className="text-link" href={links.linkedin}>
                LinkedIn
              </a>
              <a className="text-link" href={links.github}>
                GitHub
              </a>
              <a className="text-link" href={links.cv}>
                CV / Resume
              </a>
            </div>
          </div>
          <div className="card">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}

import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Layers3,
  Menu,
  MessageCircle,
  Orbit,
  Play,
  Plus,
  Radar,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { toast } from "sonner";

const navItems = [
  { label: "Systems", href: "#systems" },
  { label: "Proof", href: "#proof" },
  { label: "Method", href: "#method" },
  { label: "FAQ", href: "#faq" },
];

const services = [
  {
    id: "revenue",
    number: "01",
    icon: TrendingUp,
    eyebrow: "Revenue systems",
    title: "Turn intent into pipeline.",
    description:
      "AI-led qualification, personalization, and follow-up that moves the right prospects from curious to committed—without adding headcount.",
    bullets: ["Signal-based lead scoring", "Personalized outbound loops", "CRM hygiene that stays clean"],
    accent: "lime",
  },
  {
    id: "operations",
    number: "02",
    icon: Workflow,
    eyebrow: "Intelligent operations",
    title: "Make the busywork disappear.",
    description:
      "We orchestrate the handoffs between your tools, teams, and customers so work flows forward while you focus on the work that compounds.",
    bullets: ["Cross-tool workflow design", "AI agents with guardrails", "Human-in-the-loop escalation"],
    accent: "violet",
  },
  {
    id: "insight",
    number: "03",
    icon: Radar,
    eyebrow: "Decision intelligence",
    title: "See around corners.",
    description:
      "A living layer of insight across your business. Surface what matters, spot the drift, and act before the opportunity goes cold.",
    bullets: ["Unified business signals", "Always-on reporting", "Executive-ready intelligence"],
    accent: "cyan",
  },
];

const steps = [
  {
    index: "01",
    title: "Map the leverage",
    copy: "We find the friction that costs you the most time, margin, or momentum—and model the upside of removing it.",
    icon: Target,
  },
  {
    index: "02",
    title: "Design the system",
    copy: "A clear blueprint for people, process, and AI. No black boxes. Just the smallest system that creates a measurable shift.",
    icon: BrainCircuit,
  },
  {
    index: "03",
    title: "Ship & compound",
    copy: "We build, launch, measure, and keep improving. Every workflow becomes smarter as your team uses it.",
    icon: Sparkles,
  },
];

const faqs = [
  {
    q: "What does an AI automation engagement look like?",
    a: "We start with a focused systems audit, identify the highest-leverage workflow, then ship a working v1 in weeks—not quarters. From there, we add the next compounding layer based on the data and your team's feedback.",
  },
  {
    q: "Do you replace our existing tools?",
    a: "Usually, no. Ansury is designed to sit across the stack you already trust—CRM, help desk, docs, email, and data—then connect the gaps between them. We only recommend replacing a tool when it is actively blocking growth.",
  },
  {
    q: "How quickly can we see results?",
    a: "Most clients have a live, measurable workflow in 14–21 days. The first win is typically reclaimed operator time, faster response, or a cleaner handoff. We make the impact visible from day one.",
  },
  {
    q: "Is this only for enterprise teams?",
    a: "No. We work best with ambitious teams between 10 and 500 people—enough complexity for systems to matter, and enough urgency to move decisively.",
  },
];

const logos = ["NORTHSTAR", "arc / labs", "KINDRED", "MERIDIAN", "VANTA" ];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span className="section-label-dot" />
      <span>{children}</span>
    </div>
  );
}

function LogoMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand-lockup ${compact ? "brand-lockup-compact" : ""}`}>
      <span className="brand-mark" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      <span className="brand-name">ANSURY<span className="brand-name-thin">/SYSTEMS</span></span>
    </span>
  );
}

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeService, setActiveService] = useState("revenue");
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [formStatus, setFormStatus] = useState<"idle" | "submitted">("idle");

  const selectedService = services.find((service) => service.id === activeService) ?? services[0];
  const SelectedIcon = selectedService.icon;

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus("submitted");
    toast.success("Signal received. We’ll be in touch shortly.");
  };

  return (
    <div className="min-h-screen overflow-hidden bg-ink text-paper">
      <div className="grain-overlay" aria-hidden="true" />
      <header className="site-header">
        <div className="container flex items-center justify-between gap-8">
          <a href="#top" aria-label="Ansury Systems home" className="shrink-0">
            <LogoMark />
          </a>
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-5 lg:flex">
            <a href="#contact" className="nav-link nav-link-muted">Book a systems audit</a>
            <a href="#contact" className="button button-small button-accent">
              Start a conversation <ArrowUpRight size={15} />
            </a>
          </div>
          <button
            type="button"
            className="mobile-menu-trigger lg:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {mobileOpen && (
          <div className="mobile-menu lg:hidden">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="mobile-nav-link">
                {item.label} <ArrowUpRight size={16} />
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileOpen(false)} className="button button-accent mt-3 w-full justify-center">
              Start a conversation <ArrowUpRight size={16} />
            </a>
          </div>
        )}
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-grid container">
            <div className="hero-copy">
              <div className="hero-kicker reveal-up" style={{ animationDelay: "60ms" }}>
                <span className="live-pulse" />
                <span>AI systems for teams moving first</span>
                <span className="hero-kicker-line" />
                <span className="text-lime">01—26</span>
              </div>
              <h1 className="hero-title reveal-up" style={{ animationDelay: "120ms" }}>
                Build the <span className="hero-title-serif">unfair</span> operating system.
              </h1>
              <p className="hero-description reveal-up" style={{ animationDelay: "180ms" }}>
                Ansury designs and deploys AI-powered systems that give ambitious teams more leverage, more clarity, and more room to grow.
              </p>
              <div className="hero-actions reveal-up" style={{ animationDelay: "240ms" }}>
                <a href="#contact" className="button button-accent">
                  Find your leverage <ArrowUpRight size={17} />
                </a>
                <a href="#method" className="button button-ghost">
                  <span className="play-icon"><Play size={12} fill="currentColor" /></span>
                  See how it works
                </a>
              </div>
              <div className="hero-proof reveal-up" style={{ animationDelay: "300ms" }}>
                <div className="avatar-stack" aria-hidden="true">
                  <span className="avatar avatar-a">RS</span>
                  <span className="avatar avatar-b">JM</span>
                  <span className="avatar avatar-c">AK</span>
                  <span className="avatar avatar-d">+</span>
                </div>
                <div>
                  <div className="hero-proof-stars">★★★★★ <span>5.0</span></div>
                  <p>Trusted by operators at teams<br className="sm:hidden" /> building what’s next.</p>
                </div>
              </div>
            </div>
            <div className="hero-visual reveal-scale" style={{ animationDelay: "140ms" }} aria-label="Abstract visualization of connected AI systems">
              <div className="visual-annotation annotation-top"><span>LIVE SYSTEM</span><span className="annotation-line" /></div>
              <div className="visual-annotation annotation-bottom"><span className="annotation-line" /><span>ANSURY / 001</span></div>
              <div className="signal-orbit signal-orbit-one" />
              <div className="signal-orbit signal-orbit-two" />
              <div className="signal-orbit signal-orbit-three" />
              <div className="signal-core">
                <div className="core-shine" />
                <div className="core-grid" />
                <span className="core-glyph">A</span>
              </div>
              <div className="signal-node node-one"><Bot size={17} /><span>agent</span></div>
              <div className="signal-node node-two"><Layers3 size={17} /><span>stack</span></div>
              <div className="signal-node node-three"><Zap size={16} /><span>signal</span></div>
              <div className="signal-path path-one" />
              <div className="signal-path path-two" />
              <div className="signal-path path-three" />
              <div className="visual-caption"><span>One connected layer</span><span>for every growth move.</span></div>
            </div>
          </div>
          <div className="hero-bottom container">
            <div className="scroll-cue"><ArrowDownRight size={17} /><span>Scroll to explore</span></div>
            <div className="hero-index">/ <span>01</span> — SYSTEMS, NOT TOOLS</div>
          </div>
        </section>

        <section className="logo-strip" aria-label="Companies we work with">
          <div className="container logo-strip-inner">
            <span className="logo-strip-label">Built with teams at</span>
            <div className="logo-list">
              {logos.map((logo, index) => <span key={logo} className={`client-logo client-logo-${index}`}>{logo}</span>)}
            </div>
          </div>
        </section>

        <section id="systems" className="systems-section section-pad">
          <div className="container">
            <div className="section-heading-grid">
              <div>
                <SectionLabel>What we build</SectionLabel>
                <h2 className="section-title">The gap between<br /><span className="text-lime">ambition</span> and output.</h2>
              </div>
              <div className="section-heading-aside">
                <p>Most teams don’t need more software. They need the connective tissue that turns software, people, and information into momentum.</p>
                <a href="#contact" className="text-link">Explore your opportunity <ArrowRight size={16} /></a>
              </div>
            </div>
            <div className="systems-layout">
              <div className="service-tabs" role="tablist" aria-label="Ansury systems">
                {services.map((service) => {
                  const ServiceIcon = service.icon;
                  return (
                    <button
                      key={service.id}
                      type="button"
                      role="tab"
                      aria-selected={activeService === service.id}
                      className={`service-tab ${activeService === service.id ? "service-tab-active" : ""}`}
                      onClick={() => setActiveService(service.id)}
                    >
                      <span className="service-tab-number">{service.number}</span>
                      <span className="service-tab-label">{service.eyebrow}</span>
                      <ServiceIcon size={18} />
                      <ArrowUpRight className="service-tab-arrow" size={16} />
                    </button>
                  );
                })}
                <div className="service-tab-note"><span className="text-lime">↳</span> Modular by design.<br />Built around your edge.</div>
              </div>
              <div className={`service-detail service-detail-${selectedService.accent}`}>
                <div className="service-detail-top">
                  <div className="service-detail-icon"><SelectedIcon size={21} /></div>
                  <span>{selectedService.eyebrow}</span>
                  <span className="ml-auto service-detail-index">SYSTEM / {selectedService.number}</span>
                </div>
                <h3>{selectedService.title}</h3>
                <p>{selectedService.description}</p>
                <div className="service-bullets">
                  {selectedService.bullets.map((bullet) => <span key={bullet}><Check size={14} /> {bullet}</span>)}
                </div>
                <a href="#contact" className="button button-dark">Talk to us about this <ArrowUpRight size={16} /></a>
                <div className="detail-decoration" aria-hidden="true"><span /><span /><span /><span /><span /></div>
              </div>
            </div>
          </div>
        </section>

        <section id="proof" className="proof-section section-pad">
          <div className="container">
            <div className="proof-head">
              <SectionLabel>Selected signal</SectionLabel>
              <span className="proof-head-note">A closer look at the compound effect</span>
            </div>
            <div className="case-study-card">
              <div className="case-study-copy">
                <span className="case-kicker">CASE 001 / REVOPS</span>
                <h2>Fewer tabs.<br /><span>More momentum.</span></h2>
                <p>We helped a 42-person B2B team connect the signals hiding across their CRM, inbox, and call notes—then gave their revenue team an AI co-pilot to act on them.</p>
                <a href="#contact" className="text-link text-link-light">Read the system story <ArrowUpRight size={16} /></a>
              </div>
              <div className="case-study-visual">
                <div className="case-orb" />
                <div className="metric-card metric-card-main"><span>TIME TO SIGNAL</span><strong>−68<span>%</span></strong><em>per qualified opportunity</em></div>
                <div className="metric-card metric-card-side"><span>RESPONSE VELOCITY</span><strong>3.4<span>×</span></strong><em>faster follow-up</em></div>
                <div className="case-chart"><span className="chart-label">WEEKS 01 — 08</span><div className="chart-line chart-line-bg" /><div className="chart-line chart-line-active" /></div>
                <div className="case-stamp"><span>LIVE</span><span>+42.8</span></div>
              </div>
            </div>
            <div className="stat-row">
              <div><strong>14–21</strong><span>days to first live system</span></div>
              <div><strong>4.8<span>×</span></strong><span>average ROI in year one</span></div>
              <div><strong>92<span>%</span></strong><span>of workflows stay in use</span></div>
              <div><strong>∞</strong><span>room to compound</span></div>
            </div>
          </div>
        </section>

        <section id="method" className="method-section section-pad">
          <div className="container">
            <div className="section-heading-grid method-heading">
              <div>
                <SectionLabel>How we work</SectionLabel>
                <h2 className="section-title">No theater.<br /><span className="text-violet">Just traction.</span></h2>
              </div>
              <div className="section-heading-aside">
                <p>Every engagement is built to create a visible win quickly—and a smarter foundation for the next one.</p>
                <div className="method-meta"><span className="live-pulse live-pulse-violet" /> <span>Typical launch window: 3 weeks</span></div>
              </div>
            </div>
            <div className="steps-grid">
              {steps.map((step) => {
                const StepIcon = step.icon;
                return (
                  <article key={step.index} className="step-card">
                    <div className="step-top"><span>{step.index}</span><StepIcon size={21} /></div>
                    <div className="step-number">{step.index}</div>
                    <h3>{step.title}</h3>
                    <p>{step.copy}</p>
                    <div className="step-arrow"><ArrowDownRight size={18} /></div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="manifesto-section section-pad">
          <div className="container manifesto-grid">
            <div className="manifesto-aside"><span className="manifesto-aside-number">02</span><span className="manifesto-aside-line" /><span>Point of view</span></div>
            <div className="manifesto-copy">
              <blockquote>“The best AI strategy is not to <em>add</em> intelligence. It’s to remove the friction that keeps your intelligence from moving.”</blockquote>
              <div className="manifesto-signoff"><span className="signoff-mark">A/</span><span>Ansury Systems<br /><small>Systems for the next era</small></span></div>
            </div>
          </div>
        </section>

        <section id="faq" className="faq-section section-pad">
          <div className="container faq-grid">
            <div>
              <SectionLabel>Questions, answered</SectionLabel>
              <h2 className="section-title">Still thinking<br /><span className="text-lime">it through?</span></h2>
              <p className="faq-intro">Good. The right system starts with the right questions. If yours isn’t here, ask us directly.</p>
              <a href="#contact" className="text-link">Ask a different question <MessageCircle size={16} /></a>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div key={faq.q} className={`faq-item ${isOpen ? "faq-item-open" : ""}`}>
                    <button type="button" className="faq-trigger" onClick={() => setActiveFaq(isOpen ? null : index)} aria-expanded={isOpen}>
                      <span>{faq.q}</span>
                      {isOpen ? <MinusIcon /> : <Plus size={19} />}
                    </button>
                    <div className="faq-answer" style={{ maxHeight: isOpen ? "180px" : "0px" }}><p>{faq.a}</p></div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section section-pad">
          <div className="container">
            <div className="contact-card">
              <div className="contact-copy">
                <SectionLabel>Make a move</SectionLabel>
                <h2>What would you do<br />with <span>20 extra hours?</span></h2>
                <p>Tell us where the friction lives. We’ll show you what it could become.</p>
                <div className="contact-details">
                  <span><Clock3 size={16} /> 20 min, no pitch</span>
                  <span><ShieldCheck size={16} /> Your data stays yours</span>
                </div>
              </div>
              <form className="contact-form" onSubmit={handleFormSubmit}>
                {formStatus === "submitted" ? (
                  <div className="form-success"><div className="success-icon"><Check size={22} /></div><h3>Signal received.</h3><p>We’ll review your note and reach out with a thoughtful next step.</p><button type="button" className="button button-dark" onClick={() => setFormStatus("idle")}>Send another note <ArrowRight size={16} /></button></div>
                ) : (
                  <>
                    <label>What’s your name?<input required name="name" placeholder="Alex Morgan" /></label>
                    <label>Where should we reply?<input required type="email" name="email" placeholder="alex@company.com" /></label>
                    <label>What are you trying to unlock?<textarea required name="message" rows={3} placeholder="We’re spending too much time on…" /></label>
                    <button className="button button-accent button-submit" type="submit">Start the conversation <ArrowUpRight size={17} /></button>
                    <p className="form-footnote">By sending this form, you’re opening a conversation—not signing up for a newsletter.</p>
                  </>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-top">
          <a href="#top"><LogoMark compact /></a>
          <div className="footer-links"><a href="#systems">Systems</a><a href="#proof">Proof</a><a href="#method">Method</a><a href="#contact">Contact</a></div>
          <a href="mailto:hello@ansury.systems" className="footer-mail">hello@ansury.systems <ArrowUpRight size={15} /></a>
        </div>
        <div className="container footer-bottom"><span>© 2026 Ansury Systems. All signal, no noise.</span><span>Built for teams that move first <span className="text-lime">↗</span></span></div>
      </footer>
    </div>
  );
}

function MinusIcon() {
  return <span className="minus-icon"><span /></span>;
}

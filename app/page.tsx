import Link from 'next/link';
import { siteConfig, services, industries, results, processSteps, testimonials, faqs } from '@/lib/data';
import ScrollAnimator from '@/components/ui/ScrollAnimator';

/* ──────── HERO ──────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 gradient-abyss-dark" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-400/10 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-violet-400/10 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-indigo-400/5 blur-3xl" />

      <div className="container-main relative z-10 text-center py-20">
        <ScrollAnimator>
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-slate-300">AI-Powered Digital Growth Agency • Southern California</span>
          </div>
        </ScrollAnimator>

        <ScrollAnimator delay={100}>
          <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-8">
            <span className="text-white">The Only Agency That</span>
            <br />
            <span className="gradient-text">Combines AI + Industry</span>
            <br />
            <span className="text-white">Expertise</span>
          </h1>
        </ScrollAnimator>

        <ScrollAnimator delay={200}>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Stop wasting money on generic marketing. {siteConfig.name} deploys AI-powered advertising, answer engine optimization, and self-learning content systems tailored to <em>your</em> industry — delivering 3-5x better ROI than traditional agencies.
          </p>
        </ScrollAnimator>

        <ScrollAnimator delay={300}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/free-audit" className="btn-primary text-lg px-10 py-5">
              <span>Get Your Free AI Audit</span>
            </Link>
            <Link href="/services" className="btn-secondary text-lg px-10 py-5">
              <span>See Our Services</span>
            </Link>
          </div>
        </ScrollAnimator>

        <ScrollAnimator delay={400}>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {results.map((r) => (
              <div key={r.label} className="text-center">
                <div className="font-display font-bold text-3xl md:text-4xl gradient-text">{r.metric}</div>
                <div className="text-sm text-slate-400 mt-1">{r.label}</div>
              </div>
            ))}
          </div>
        </ScrollAnimator>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 animate-float">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

/* ──────── SERVICES ──────── */
function ServicesSection() {
  return (
    <section className="section-padding relative overflow-hidden" id="services">
      <div className="absolute inset-0 gradient-abyss-medium" />
      <div className="container-main relative z-10">
        <ScrollAnimator>
          <div className="text-center mb-16">
            <div className="text-sm font-medium text-cyan-400 tracking-widest uppercase mb-4">Our Services</div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
              8 AI-Powered Services.<br />One Growth Engine.
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Every service works independently — but together, they create an unstoppable growth system.
            </p>
          </div>
        </ScrollAnimator>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ScrollAnimator key={service.slug} delay={i * 100}>
              <Link href={`/services/${service.slug}`} className="glass-card group block h-full">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-display font-semibold text-lg text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {service.shortName}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{service.tagline}</p>
                <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────── WHY US ──────── */
function WhyUs() {
  const reasons = [
    { icon: '🤖', title: 'AI-Powered Everything', desc: 'Our AI agent swarm optimizes your campaigns 24/7 — smarter targeting, faster results, zero wasted spend.' },
    { icon: '🎯', title: 'Vertical Expertise', desc: 'We specialize in 8 service industries. We already know your customers, competitors, and keywords.' },
    { icon: '🔮', title: 'Answer Engine Ready', desc: 'We optimize for AI search engines — ChatGPT, Perplexity, Google AI — so you\'re the answer AI gives.' },
    { icon: '📈', title: '3-5x Better ROI', desc: 'Our clients consistently outperform industry benchmarks. Average 10x return on marketing investment.' },
  ];

  return (
    <section className="section-padding relative">
      <div className="container-main">
        <ScrollAnimator>
          <div className="text-center mb-16">
            <div className="text-sm font-medium text-violet-400 tracking-widest uppercase mb-4">Why Choose Us</div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
              Not Your Typical<br />Marketing Agency
            </h2>
          </div>
        </ScrollAnimator>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <ScrollAnimator key={r.title} delay={i * 100}>
              <div className="glass-card text-center h-full">
                <div className="text-5xl mb-4">{r.icon}</div>
                <h3 className="font-display font-semibold text-lg text-white mb-3">{r.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{r.desc}</p>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────── INDUSTRIES ──────── */
function IndustriesSection() {
  return (
    <section className="section-padding relative overflow-hidden" id="industries">
      <div className="absolute inset-0 gradient-abyss-medium" />
      <div className="container-main relative z-10">
        <ScrollAnimator>
          <div className="text-center mb-16">
            <div className="text-sm font-medium text-emerald-400 tracking-widest uppercase mb-4">Industries We Serve</div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
              Deep Expertise in<br />8 Service Verticals
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              We don&apos;t try to be everything to everyone. We dominate 8 specific industries where our AI + expertise combination delivers maximum impact.
            </p>
          </div>
        </ScrollAnimator>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <ScrollAnimator key={ind.slug} delay={i * 80}>
              <Link href={`/industries/${ind.slug}`} className="glass-card group block text-center h-full">
                <div className="text-5xl mb-4">{ind.icon}</div>
                <h3 className="font-display font-semibold text-lg text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {ind.name}
                </h3>
                <p className="text-sm text-slate-400 mb-3">{ind.tagline}</p>
                <div className="text-xs font-medium px-3 py-1 glass rounded-full inline-block" style={{ color: ind.color }}>
                  {ind.heroStat}
                </div>
              </Link>
            </ScrollAnimator>
          ))}
        </div>

        <ScrollAnimator delay={600}>
          <div className="text-center mt-12">
            <Link href="/industries" className="btn-ghost text-sm">
              View All Industries →
            </Link>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
}

/* ──────── PROCESS ──────── */
function ProcessSection() {
  return (
    <section className="section-padding relative">
      <div className="container-main">
        <ScrollAnimator>
          <div className="text-center mb-16">
            <div className="text-sm font-medium text-amber-400 tracking-widest uppercase mb-4">Our Process</div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
              How We Deliver<br />Unrivaled Results
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              A battle-tested 4-phase process that turns your marketing from a cost center into your biggest growth driver.
            </p>
          </div>
        </ScrollAnimator>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, i) => (
            <ScrollAnimator key={step.number} delay={i * 150}>
              <div className="glass-card relative h-full">
                <div className="absolute top-4 right-4 font-display font-bold text-6xl text-white/5">{step.number}</div>
                <div className="text-3xl mb-4">{step.icon}</div>
                <div className="text-xs font-mono text-cyan-400 mb-2">Phase {step.number}</div>
                <h3 className="font-display font-semibold text-lg text-white mb-3">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────── TESTIMONIALS ──────── */
function TestimonialsSection() {
  return (
    <section className="section-padding relative overflow-hidden" id="testimonials">
      <div className="absolute inset-0 gradient-abyss-medium" />
      <div className="container-main relative z-10">
        <ScrollAnimator>
          <div className="text-center mb-16">
            <div className="text-sm font-medium text-pink-400 tracking-widest uppercase mb-4">Testimonials</div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
              What Our Clients<br />Are Saying
            </h2>
          </div>
        </ScrollAnimator>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((t, i) => (
            <ScrollAnimator key={t.author} delay={i * 100}>
              <div className="glass-card h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j} className="text-amber-400">★</span>
                  ))}
                </div>
                <blockquote className="text-slate-300 text-sm leading-relaxed mb-6 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="border-t border-white/5 pt-4">
                  <div className="font-semibold text-white text-sm">{t.author}</div>
                  <div className="text-xs text-slate-400">{t.role}, {t.company}</div>
                  <div className="text-xs text-cyan-400 mt-1">{t.result}</div>
                </div>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────── FAQ ──────── */
function FAQSection() {
  return (
    <section className="section-padding relative" id="faq">
      <div className="container-main">
        <ScrollAnimator>
          <div className="text-center mb-16">
            <div className="text-sm font-medium text-indigo-400 tracking-widest uppercase mb-4">FAQ</div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
              Frequently Asked<br />Questions
            </h2>
          </div>
        </ScrollAnimator>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <ScrollAnimator key={i} delay={i * 80}>
              <details className="glass-card group">
                <summary className="font-display font-semibold text-white cursor-pointer list-none flex justify-between items-center gap-4">
                  {faq.question}
                  <svg className="w-5 h-5 text-cyan-400 shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-sm text-slate-400 leading-relaxed mt-4">{faq.answer}</p>
              </details>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────── CTA ──────── */
function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-indigo-400/10 to-violet-400/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-400/5 blur-3xl" />
      <div className="container-main relative z-10 text-center">
        <ScrollAnimator>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Ready to Leave Your<br />Competition Behind?
          </h2>
        </ScrollAnimator>
        <ScrollAnimator delay={100}>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
            Get a free AI-powered audit of your digital presence. We&apos;ll show you exactly where you&apos;re losing customers — and how to fix it.
          </p>
        </ScrollAnimator>
        <ScrollAnimator delay={200}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-audit" className="btn-primary text-lg px-10 py-5">
              <span>Get Your Free AI Audit</span>
            </Link>
            <Link href="/contact" className="btn-secondary text-lg px-10 py-5">
              <span>Talk to an Expert</span>
            </Link>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
}

/* ──────── MARQUEE ──────── */
function MarqueeStrip() {
  const items = ['SEO', 'AI Advertising', 'Answer Engine Optimization', 'Content Marketing', 'Reputation Management', 'Marketing Automation', 'CRO', 'Social Media'];
  return (
    <div className="py-6 border-y border-white/5 overflow-hidden bg-abyss-900/50">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mx-8 text-sm font-display font-medium text-slate-500 uppercase tracking-widest">
            {item} <span className="text-cyan-400/40 ml-8">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ──────── PAGE ──────── */
export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <ServicesSection />
      <WhyUs />
      <IndustriesSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}

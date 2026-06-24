import type { Metadata } from 'next';
import Link from 'next/link';
import { pricingTiers as pricing, siteConfig } from '@/lib/data';
import ScrollAnimator from '@/components/ui/ScrollAnimator';

export const metadata: Metadata = {
  title: 'Pricing',
  description: `Transparent pricing for AI-powered digital marketing services. Plans designed for growing service businesses.`,
};

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-abyss-dark" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-violet-400/8 blur-3xl" />
        <div className="container-main relative z-10 text-center">
          <ScrollAnimator>
            <div className="text-sm font-medium text-violet-400 tracking-widest uppercase mb-4">Pricing</div>
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-6">
              Transparent Pricing.<br />No Surprises.
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              Every plan includes AI-powered optimization, dedicated support, and measurable ROI. Pick the plan that fits your growth stage.
            </p>
          </ScrollAnimator>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((plan, i) => (
              <ScrollAnimator key={plan.name} delay={i * 150}>
                <div className={`glass-card relative h-full flex flex-col ${plan.featured ? 'border-cyan-400/40 ring-1 ring-cyan-400/20' : ''}`}>
                  {plan.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full text-xs font-semibold text-abyss-950">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="font-display font-bold text-2xl text-white mb-2">{plan.name}</h3>
                    <p className="text-sm text-slate-400 mb-6">{plan.tagline}</p>
                    <div className="font-display font-bold text-3xl gradient-text mb-2">{plan.range}</div>
                    <p className="text-xs text-slate-500">{plan.target}</p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                        <svg className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link href="/free-audit" className={plan.featured ? 'btn-primary w-full text-center' : 'btn-secondary w-full text-center'}>
                    <span>Get Started</span>
                  </Link>
                </div>
              </ScrollAnimator>
            ))}
          </div>

          <ScrollAnimator delay={500}>
            <div className="text-center mt-12">
              <p className="text-slate-400 mb-4">Need a custom plan? We build tailored packages for multi-location businesses and franchises.</p>
              <Link href="/contact" className="btn-ghost text-sm">Contact Us for Custom Pricing →</Link>
            </div>
          </ScrollAnimator>
        </div>
      </section>

      {/* Guarantee */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-abyss-medium" />
        <div className="container-main relative z-10">
          <ScrollAnimator>
            <div className="glass-card max-w-3xl mx-auto text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h2 className="font-display font-bold text-3xl text-white mb-4">90-Day Performance Guarantee</h2>
              <p className="text-slate-300 leading-relaxed">
                If you don&apos;t see measurable improvement in your key metrics within 90 days, we&apos;ll work for free until you do. That&apos;s our commitment to delivering real, quantifiable results for every client.
              </p>
            </div>
          </ScrollAnimator>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-main">
          <ScrollAnimator>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-12 text-center">Pricing Questions</h2>
          </ScrollAnimator>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: 'Is there a long-term contract?', a: 'All plans include a 6-month initial engagement to allow our AI systems to learn and optimize. After that, it\'s month-to-month with 30-day notice to cancel.' },
              { q: 'What\'s included in setup?', a: 'Setup includes AI system configuration, analytics implementation, baseline audits, competitor analysis, and your first month of campaign deployment.' },
              { q: 'Can I upgrade or downgrade?', a: 'Absolutely. You can change plans at any time. Upgrades take effect immediately; downgrades apply at the next billing cycle.' },
              { q: 'Do you offer discounts for multi-location businesses?', a: 'Yes! We offer 15-25% discounts for businesses with 2+ locations. Contact us for a custom quote.' },
            ].map((faq, i) => (
              <ScrollAnimator key={i} delay={i * 80}>
                <details className="glass-card group">
                  <summary className="font-display font-semibold text-white cursor-pointer list-none flex justify-between items-center gap-4">
                    {faq.q}
                    <svg className="w-5 h-5 text-cyan-400 shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="text-sm text-slate-400 leading-relaxed mt-4">{faq.a}</p>
                </details>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

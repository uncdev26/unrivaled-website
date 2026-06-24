import type { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/lib/data';
import ScrollAnimator from '@/components/ui/ScrollAnimator';

export const metadata: Metadata = {
  title: 'Our Services',
  description: '8 AI-powered digital marketing services — SEO, advertising, content, social media, reputation management, and more. Each service built for service-industry businesses.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-abyss-dark" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-cyan-400/8 blur-3xl" />
        <div className="container-main relative z-10 text-center">
          <ScrollAnimator>
            <div className="text-sm font-medium text-cyan-400 tracking-widest uppercase mb-4">Our Services</div>
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-6">
              8 Services.<br />One Growth Engine.
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              Every service is designed to work independently — but together, they create an unstoppable digital marketing machine powered by AI.
            </p>
          </ScrollAnimator>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <ScrollAnimator key={service.slug} delay={i * 100}>
                <Link href={`/services/${service.slug}`} className="glass-card group block h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-5xl">{service.icon}</div>
                    <div>
                      <h2 className="font-display font-bold text-2xl text-white group-hover:text-cyan-400 transition-colors">
                        {service.shortName}
                      </h2>
                      <p className="text-sm text-cyan-400">{service.tagline}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.metrics.map((m, i) => (
                      <span key={i} className="text-xs px-3 py-1.5 glass rounded-full text-cyan-300">{m.label}: {m.value}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
                    <span>View Details</span>
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

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-indigo-400/10 to-violet-400/10" />
        <div className="container-main relative z-10 text-center">
          <ScrollAnimator>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">Not Sure Which Service You Need?</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
              Book a free strategy call. We&apos;ll audit your digital presence and recommend the perfect service mix for your business.
            </p>
            <Link href="/free-audit" className="btn-primary text-lg px-10 py-5"><span>Get Your Free Audit</span></Link>
          </ScrollAnimator>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services } from '@/lib/data';
import ScrollAnimator from '@/components/ui/ScrollAnimator';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: `${service.name} | AI-Powered ${service.shortName}`,
    description: service.description,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-abyss-dark" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ background: `${service.color}15` }} />
        <div className="container-main relative z-10">
          <ScrollAnimator>
            <Link href="/services" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 mb-8 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              All Services
            </Link>
            <div className="text-6xl mb-6">{service.icon}</div>
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-4">
              {service.name}
            </h1>
            <p className="text-xl text-cyan-400 mb-6">{service.tagline}</p>
            <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">{service.description}</p>
          </ScrollAnimator>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section-padding">
        <div className="container-main">
          <ScrollAnimator>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">What&apos;s Included</h2>
            <p className="text-slate-400 mb-12 max-w-2xl">Everything you need to dominate your market with {service.shortName.toLowerCase()}.</p>
          </ScrollAnimator>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.deliverables.map((d, i) => (
              <ScrollAnimator key={i} delay={i * 60}>
                <div className="glass-card-static flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-slate-300">{d}</span>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-abyss-medium" />
        <div className="container-main relative z-10">
          <ScrollAnimator>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-12 text-center">Performance Metrics</h2>
          </ScrollAnimator>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {service.metrics.map((m, i) => (
              <ScrollAnimator key={i} delay={i * 100}>
                <div className="glass-card text-center">
                  <div className="font-display font-bold text-2xl md:text-3xl gradient-text mb-2">{m.value}</div>
                  <div className="text-sm text-slate-400">{m.label}</div>
                </div>
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
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
              Book a free consultation and discover how our {service.shortName.toLowerCase()} service can transform your business.
            </p>
            <Link href="/free-audit" className="btn-primary text-lg px-10 py-5"><span>Get Your Free Audit</span></Link>
          </ScrollAnimator>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-abyss-medium" />
        <div className="container-main relative z-10">
          <ScrollAnimator>
            <h2 className="font-display font-bold text-3xl text-white mb-8">Related Services</h2>
          </ScrollAnimator>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.slice(0, 3).map((s, i) => (
              <ScrollAnimator key={s.slug} delay={i * 100}>
                <Link href={`/services/${s.slug}`} className="glass-card group block">
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <h3 className="font-display font-semibold text-lg text-white group-hover:text-cyan-400 transition-colors mb-2">{s.shortName}</h3>
                  <p className="text-sm text-slate-400">{s.tagline}</p>
                </Link>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

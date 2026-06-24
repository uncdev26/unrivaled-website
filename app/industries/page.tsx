import type { Metadata } from 'next';
import Link from 'next/link';
import { industries } from '@/lib/data';
import ScrollAnimator from '@/components/ui/ScrollAnimator';

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description: 'Deep digital marketing expertise across 8 service-industry verticals. AI-powered strategies built specifically for your business type.',
};

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-abyss-dark" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-emerald-400/8 blur-3xl" />
        <div className="container-main relative z-10 text-center">
          <ScrollAnimator>
            <div className="text-sm font-medium text-emerald-400 tracking-widest uppercase mb-4">Industries</div>
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-6">
              We Know Your<br />Industry Inside Out
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              We don&apos;t guess. We specialize. 8 service verticals with deep domain expertise, industry-specific keywords, and marketing strategies that actually convert.
            </p>
          </ScrollAnimator>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((ind, i) => (
              <ScrollAnimator key={ind.slug} delay={i * 100}>
                <Link href={`/industries/${ind.slug}`} className="glass-card group block h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-5xl">{ind.icon}</div>
                    <div>
                      <h2 className="font-display font-bold text-2xl text-white group-hover:text-cyan-400 transition-colors">
                        {ind.name}
                      </h2>
                      <p className="text-sm" style={{ color: ind.color }}>{ind.tagline}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">{ind.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {ind.painPoints.slice(0, 3).map((p) => (
                      <span key={p} className="text-xs px-3 py-1.5 glass rounded-full text-slate-300">{p}</span>
                    ))}
                  </div>
                  <div className="text-xs font-medium px-3 py-1 glass rounded-full inline-block" style={{ color: ind.color }}>
                    {ind.heroStat}
                  </div>
                </Link>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-cyan-400/10 to-indigo-400/10" />
        <div className="container-main relative z-10 text-center">
          <ScrollAnimator>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">Don&apos;t See Your Industry?</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
              We work with all service-based businesses. Book a call and we&apos;ll show you how our AI-powered approach applies to your specific market.
            </p>
            <Link href="/contact" className="btn-primary text-lg px-10 py-5"><span>Book a Strategy Call</span></Link>
          </ScrollAnimator>
        </div>
      </section>
    </>
  );
}

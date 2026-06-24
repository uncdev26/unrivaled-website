import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { industries, services } from '@/lib/data';
import ScrollAnimator from '@/components/ui/ScrollAnimator';

export function generateStaticParams() {
  return industries.map((ind) => ({ slug: ind.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const industry = industries.find((ind) => ind.slug === params.slug);
  if (!industry) return {};
  return {
    title: `${industry.name} Digital Marketing`,
    description: industry.description,
    keywords: (industry as any).keywords,
  };
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = industries.find((ind) => ind.slug === params.slug);
  if (!industry) notFound();

  const relatedServices = services.filter((s) =>
    industry.services.some((is) => s.slug === is)
  );

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-abyss-dark" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{ background: `${industry.color}12` }} />
        <div className="container-main relative z-10">
          <ScrollAnimator>
            <Link href="/industries" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 mb-8 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              All Industries
            </Link>
            <div className="text-6xl mb-6">{industry.icon}</div>
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-4">
              {industry.name}
            </h1>
            <p className="text-xl mb-6" style={{ color: industry.color }}>{industry.tagline}</p>
            <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">{industry.description}</p>
          </ScrollAnimator>
        </div>
      </section>

      {/* Hero Stat */}
      <section className="py-12 relative">
        <div className="container-main">
          <div className="glass-card text-center max-w-xl mx-auto">
            <div className="font-display font-bold text-4xl md:text-5xl gradient-text mb-2">{industry.heroStat}</div>
            <p className="text-slate-400">Average client result</p>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="section-padding">
        <div className="container-main">
          <ScrollAnimator>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">Industry Challenges We Solve</h2>
            <p className="text-slate-400 mb-12 max-w-2xl">{industry.name} businesses face unique marketing challenges. We&apos;ve solved them all.</p>
          </ScrollAnimator>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {industry.painPoints.map((p, i) => (
              <ScrollAnimator key={i} delay={i * 60}>
                <div className="glass-card-static flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm text-slate-300">{p}</span>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-abyss-medium" />
        <div className="container-main relative z-10">
          <ScrollAnimator>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">Our Solutions</h2>
            <p className="text-slate-400 mb-12 max-w-2xl">AI-powered strategies built specifically for {industry.name.toLowerCase()} businesses.</p>
          </ScrollAnimator>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {industry.solutions.map((s, i) => (
              <ScrollAnimator key={i} delay={i * 60}>
                <div className="glass-card-static flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-slate-300">{s}</span>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding">
        <div className="container-main">
          <ScrollAnimator>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-12">Recommended Services for {industry.name}</h2>
          </ScrollAnimator>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((s, i) => (
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

      {/* Case Study */}
      {industry.caseStudy && (
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 gradient-abyss-medium" />
          <div className="container-main relative z-10">
            <ScrollAnimator>
              <div className="glass-card max-w-3xl mx-auto text-center">
                <div className="text-sm font-medium text-cyan-400 mb-4">Case Study — {industry.caseStudy.client}</div>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">Real Results in {industry.caseStudy.timeframe}</h3>
                <p className="text-slate-300 mb-2"><span className="text-slate-500">Before:</span> {industry.caseStudy.before}</p>
                <p className="text-slate-300 mb-6"><span className="text-slate-500">After:</span> {industry.caseStudy.after}</p>
                <div className="font-display font-bold text-3xl gradient-text">{industry.caseStudy.roi}</div>
              </div>
            </ScrollAnimator>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-indigo-400/10 to-violet-400/10" />
        <div className="container-main relative z-10 text-center">
          <ScrollAnimator>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">Grow Your {industry.name} Business</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
              Get a free AI-powered audit tailored to the {industry.name.toLowerCase()} industry. We&apos;ll show you exactly what your competitors are doing — and how to beat them.
            </p>
            <Link href="/free-audit" className="btn-primary text-lg px-10 py-5"><span>Get Your Free {industry.name} Audit</span></Link>
          </ScrollAnimator>
        </div>
      </section>
    </>
  );
}

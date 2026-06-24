import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/data';
import ScrollAnimator from '@/components/ui/ScrollAnimator';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: `Real results from real ${siteConfig.name} clients. See how AI-powered marketing drives measurable growth.`,
};

const caseStudies = [
  {
    slug: 'sparkleclean-3x-leads',
    client: 'SparkleClean Services',
    industry: 'Commercial Cleaning',
    title: '3x Lead Volume in 90 Days with AI-Powered Local SEO',
    challenge: 'SparkleClean was spending $4,000/month on traditional SEO with stagnant results. They were losing market share to newer competitors with better digital presence.',
    solution: 'Deployed our AI SEO system with automated content generation, local citation building, and predictive keyword targeting across 12 service areas.',
    results: [
      { metric: 'Lead Volume', before: '45/month', after: '142/month', change: '+216%' },
      { metric: 'Cost Per Lead', before: '$89', after: '$28', change: '-69%' },
      { metric: 'Organic Traffic', before: '2,100/mo', after: '8,400/mo', change: '+300%' },
    ],
    gradient: 'from-cyan-400 to-indigo-400',
    testimonial: { name: 'Maria G.', role: 'Owner, SparkleClean Services', quote: 'The results speak for themselves. 3x the leads at a fraction of the cost. Our AI-powered campaigns work harder than any team we\'ve ever hired.' },
  },
  {
    slug: 'riverside-dental-6x-roi',
    client: 'Riverside Family Dental',
    industry: 'Healthcare',
    title: '6x ROI on Google Ads with AI Bid Optimization',
    challenge: 'Google Ads cost-per-lead had risen 40% year-over-year. The practice was struggling to maintain profitability on new patient acquisition.',
    solution: 'Implemented our AI bid optimization system with smart audience targeting, automated ad creative testing, and conversion-focused landing pages.',
    results: [
      { metric: 'Cost Per Lead', before: '$180', after: '$52', change: '-71%' },
      { metric: 'New Patients/Month', before: '12', after: '38', change: '+217%' },
      { metric: 'ROAS', before: '1.2x', after: '6.8x', change: '+467%' },
    ],
    gradient: 'from-indigo-400 to-violet-400',
    testimonial: { name: 'Dr. James L.', role: 'Owner, Riverside Family Dental', quote: 'We were about to give up on Google Ads. Your AI system turned our entire paid strategy around — now it\'s our #1 patient acquisition channel.' },
  },
  {
    slug: 'petparadise-reputation',
    client: 'PetParadise Grooming',
    industry: 'Pet Services',
    title: 'From 3.2 to 4.8 Stars: AI-Powered Reputation Transformation',
    challenge: 'A handful of negative reviews were tanking PetParadise\'s Google rating. Foot traffic was declining and new customer acquisition had stalled.',
    solution: 'Deployed our AI reputation management system with automated review requests, sentiment monitoring, and strategic response management.',
    results: [
      { metric: 'Google Rating', before: '3.2 stars', after: '4.8 stars', change: '+50%' },
      { metric: 'Review Count', before: '23', after: '187', change: '+713%' },
      { metric: 'New Customers', before: '15/month', after: '52/month', change: '+247%' },
    ],
    gradient: 'from-violet-400 to-fuchsia-400',
    testimonial: { name: 'Kevin T.', role: 'Owner, PetParadise Grooming', quote: 'I was skeptical about AI managing our reviews, but the results are incredible. We went from dreading Google reviews to loving them.' },
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-abyss-dark" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-emerald-400/8 blur-3xl" />
        <div className="container-main relative z-10 text-center">
          <ScrollAnimator>
            <div className="text-sm font-medium text-emerald-400 tracking-widest uppercase mb-4">Case Studies</div>
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-6">
              Real Results.<br />Real Businesses.
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              See how AI-powered marketing has transformed service businesses across Southern California.
            </p>
          </ScrollAnimator>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding">
        <div className="container-main space-y-16">
          {caseStudies.map((cs, i) => (
            <ScrollAnimator key={cs.slug} delay={i * 150}>
              <div className="glass-card">
                <div className="flex items-center gap-3 mb-6">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r ${cs.gradient} text-abyss-950`}>{cs.industry}</span>
                  <span className="text-sm text-slate-400">{cs.client}</span>
                </div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">{cs.title}</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-2">Challenge</h3>
                    <p className="text-sm text-slate-300 leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">Solution</h3>
                    <p className="text-sm text-slate-300 leading-relaxed">{cs.solution}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {cs.results.map((r) => (
                    <div key={r.metric} className="text-center p-4 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">{r.metric}</div>
                      <div className="flex items-center justify-center gap-3">
                        <span className="text-sm text-slate-500 line-through">{r.before}</span>
                        <span className="text-cyan-400">→</span>
                        <span className="font-display font-bold text-xl text-white">{r.after}</span>
                      </div>
                      <div className="font-display font-bold text-sm text-emerald-400 mt-1">{r.change}</div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/5 pt-6">
                  <blockquote className="text-slate-300 italic mb-3">&ldquo;{cs.testimonial.quote}&rdquo;</blockquote>
                  <div className="text-sm">
                    <span className="text-white font-medium">{cs.testimonial.name}</span>
                    <span className="text-slate-500"> — {cs.testimonial.role}</span>
                  </div>
                </div>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-indigo-400/10 to-violet-400/10" />
        <div className="container-main relative z-10 text-center">
          <ScrollAnimator>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">Ready for Your Success Story?</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
              Get a free AI-powered audit and see what&apos;s possible for your business.
            </p>
            <Link href="/free-audit" className="btn-primary text-lg px-10 py-5"><span>Get Your Free Audit</span></Link>
          </ScrollAnimator>
        </div>
      </section>
    </>
  );
}

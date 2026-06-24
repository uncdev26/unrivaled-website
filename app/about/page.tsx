import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/data';
import ScrollAnimator from '@/components/ui/ScrollAnimator';

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about ${siteConfig.name} — the AI-powered digital growth agency built for service-industry businesses in Southern California.`,
};

export default function AboutPage() {
  const values = [
    { icon: '🤖', title: 'AI-First', desc: 'Every strategy we build starts with AI. We use machine learning, predictive analytics, and automation to give you an unfair advantage.' },
    { icon: '🎯', title: 'Industry-Specific', desc: 'We don\'t do generic. Every recommendation is tailored to your specific industry, market, and competitive landscape.' },
    { icon: '📊', title: 'Data-Driven', desc: 'We make decisions based on data, not gut feelings. Every campaign is tracked, measured, and optimized continuously.' },
    { icon: '🤝', title: 'Partnership', desc: 'We\'re not a vendor — we\'re a growth partner. Your success is our success, and we act accordingly.' },
    { icon: '⚡', title: 'Speed to Value', desc: 'No 6-month ramp-ups. Our AI systems start delivering insights and improvements within the first 30 days.' },
    { icon: '🔒', title: 'Transparency', desc: 'Full visibility into what we\'re doing, why we\'re doing it, and what results we\'re generating. No black boxes.' },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-abyss-dark" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-indigo-400/8 blur-3xl" />
        <div className="container-main relative z-10 text-center">
          <ScrollAnimator>
            <div className="text-sm font-medium text-indigo-400 tracking-widest uppercase mb-4">About Us</div>
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-6">
              The Future of<br />Digital Marketing
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              {siteConfig.name} was built on a simple belief: service-industry businesses deserve the same AI-powered marketing that Fortune 500 companies use — at a fraction of the cost.
            </p>
          </ScrollAnimator>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimator>
              <div>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">Our Story</h2>
                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    {siteConfig.name} was founded with a clear mission: bridge the gap between cutting-edge AI technology and the real-world marketing needs of service businesses in Southern California.
                  </p>
                  <p>
                    We saw too many businesses — plumbers, dentists, lawyers, cleaners — getting squeezed by agencies that charged Fortune 500 prices for cookie-cutter strategies. And we saw AI transforming marketing in ways these businesses couldn&apos;t access.
                  </p>
                  <p>
                    So we built an agency that combines deep vertical expertise in 8 service industries with AI-powered systems that optimize campaigns 24/7, predict customer behavior, and deliver results that traditional agencies can&apos;t match.
                  </p>
                  <p>
                    Today, we serve businesses across Riverside, Los Angeles, Orange County, San Diego, and beyond — helping them dominate their local markets with the power of AI.
                  </p>
                </div>
              </div>
            </ScrollAnimator>
            <ScrollAnimator delay={200}>
              <div className="glass-card">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { num: '50+', label: 'Clients Served' },
                    { num: '8', label: 'Industry Verticals' },
                    { num: '3-5x', label: 'Average ROI Improvement' },
                    { num: '24/7', label: 'AI Optimization' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="font-display font-bold text-3xl gradient-text">{stat.num}</div>
                      <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimator>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-abyss-medium" />
        <div className="container-main relative z-10">
          <ScrollAnimator>
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">Our Values</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">The principles that guide everything we do.</p>
            </div>
          </ScrollAnimator>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <ScrollAnimator key={v.title} delay={i * 100}>
                <div className="glass-card text-center h-full">
                  <div className="text-4xl mb-4">{v.icon}</div>
                  <h3 className="font-display font-semibold text-lg text-white mb-3">{v.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{v.desc}</p>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container-main">
          <ScrollAnimator>
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">Our Team</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                A lean team of AI specialists, marketing strategists, and industry experts — augmented by our proprietary AI agent swarm that works around the clock.
              </p>
            </div>
          </ScrollAnimator>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'AI Strategy Team', role: 'Machine Learning & Analytics', desc: 'Builds and maintains our AI systems that optimize campaigns, predict trends, and automate routine tasks.' },
              { name: 'Industry Specialists', role: 'Vertical Domain Experts', desc: 'Deep expertise in each of our 8 verticals — they know your customers, competitors, and keywords.' },
              { name: 'Creative & Content', role: 'Brand & Content Strategy', desc: 'Creates compelling content, ad creative, and brand narratives that resonate with your target audience.' },
            ].map((team, i) => (
              <ScrollAnimator key={team.name} delay={i * 100}>
                <div className="glass-card text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400/20 to-violet-400/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👥</span>
                  </div>
                  <h3 className="font-display font-semibold text-lg text-white mb-1">{team.name}</h3>
                  <div className="text-sm text-cyan-400 mb-3">{team.role}</div>
                  <p className="text-sm text-slate-400 leading-relaxed">{team.desc}</p>
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
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">Want to Work With Us?</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
              Book a free strategy call and discover how AI-powered marketing can transform your business.
            </p>
            <Link href="/free-audit" className="btn-primary text-lg px-10 py-5"><span>Get Your Free Audit</span></Link>
          </ScrollAnimator>
        </div>
      </section>
    </>
  );
}

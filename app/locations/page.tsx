import type { Metadata } from 'next';
import Link from 'next/link';
import { locations, siteConfig } from '@/lib/data';
import ScrollAnimator from '@/components/ui/ScrollAnimator';

export const metadata: Metadata = {
  title: 'Our Locations',
  description: `${siteConfig.name} serves businesses across Southern California. Find your local AI-powered digital marketing team.`,
};

export default function LocationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-abyss-dark" />
        <div className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full bg-emerald-400/8 blur-3xl" />
        <div className="container-main relative z-10 text-center">
          <ScrollAnimator>
            <div className="text-sm font-medium text-emerald-400 tracking-widest uppercase mb-4">Locations</div>
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-6">
              Proudly Serving<br />Southern California
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              From our home base in {siteConfig.address.city} to every corner of SoCal — we bring AI-powered marketing to your doorstep.
            </p>
          </ScrollAnimator>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc, i) => (
              <ScrollAnimator key={loc.city} delay={i * 100}>
                <div className={`glass-card h-full flex flex-col ${loc.isHQ ? 'ring-1 ring-cyan-400/30' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-400/20 flex items-center justify-center">
                      <span className="text-lg">{loc.isHQ ? '🏢' : '📍'}</span>
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg text-white">{loc.city}</h3>
                      <p className="text-xs text-cyan-400">{loc.region}{loc.isHQ ? ' — HQ' : ''}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed flex-1">{loc.description}</p>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map Description */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-abyss-medium" />
        <div className="container-main relative z-10 text-center">
          <ScrollAnimator>
            <div className="glass-card max-w-3xl mx-auto">
              <h2 className="font-display font-bold text-3xl text-white mb-6">Full Southern California Coverage</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Our AI-powered systems work regardless of geography, but our team has deep local knowledge of each SoCal market. We understand the neighborhoods, the competition, and the customers in every area we serve.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Riverside County', 'Los Angeles County', 'Orange County', 'San Bernardino County'].map((county) => (
                  <div key={county} className="text-center">
                    <div className="text-2xl mb-1">🗺️</div>
                    <div className="text-sm font-medium text-white">{county}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimator>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-indigo-400/10 to-violet-400/10" />
        <div className="container-main relative z-10 text-center">
          <ScrollAnimator>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">Ready to Dominate Your Local Market?</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
              Get a free AI-powered audit of your digital presence in your specific market.
            </p>
            <Link href="/free-audit" className="btn-primary text-lg px-10 py-5"><span>Get Your Free Local Audit</span></Link>
          </ScrollAnimator>
        </div>
      </section>
    </>
  );
}

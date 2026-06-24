'use client';

import { useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/lib/data';
import ScrollAnimator from '@/components/ui/ScrollAnimator';

export default function FreeAuditPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-abyss-dark" />
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-violet-400/10 blur-3xl" />
        <div className="container-main relative z-10 text-center">
          <ScrollAnimator>
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm text-slate-300">100% Free • No Obligation • Results in 48 Hours</span>
            </div>
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-6">
              Get Your Free<br />AI-Powered Audit
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              Our AI will analyze your digital presence, compare you to competitors, and deliver a custom growth roadmap — completely free.
            </p>
          </ScrollAnimator>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-12">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🔍', title: 'SEO Analysis', desc: 'Complete technical SEO audit with keyword gap analysis and ranking opportunities.' },
              { icon: '🤖', title: 'AI Visibility Check', desc: 'How you appear in ChatGPT, Perplexity, and other AI search engines.' },
              { icon: '📊', title: 'Competitor Benchmark', desc: 'See exactly how you stack up against your top 5 local competitors.' },
              { icon: '🗺️', title: 'Growth Roadmap', desc: 'Custom action plan with prioritized recommendations for maximum ROI.' },
            ].map((item, i) => (
              <ScrollAnimator key={item.title} delay={i * 100}>
                <div className="glass-card text-center h-full">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-display font-semibold text-lg text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <ScrollAnimator>
                {submitted ? (
                  <div className="glass-card text-center py-16">
                    <div className="text-5xl mb-4">🎉</div>
                    <h3 className="font-display font-bold text-2xl text-white mb-4">Audit Request Submitted!</h3>
                    <p className="text-slate-300 mb-6">Our AI is already analyzing your digital presence. You&apos;ll receive your custom audit report within 48 hours.</p>
                    <Link href="/" className="btn-secondary"><span>Back to Home</span></Link>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Full Name *</label>
                        <input type="text" required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-all" placeholder="John Smith" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Business Name *</label>
                        <input type="text" required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-all" placeholder="Your Business LLC" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Email *</label>
                        <input type="email" required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-all" placeholder="john@company.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Phone *</label>
                        <input type="tel" required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-all" placeholder="(951) 555-0123" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Website URL *</label>
                      <input type="url" required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-all" placeholder="https://yourbusiness.com" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Industry *</label>
                        <select required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-all">
                          <option value="">Select your industry</option>
                          <option>Home Services</option>
                          <option>Healthcare</option>
                          <option>Legal</option>
                          <option>Beauty & Wellness</option>
                          <option>Commercial Cleaning</option>
                          <option>Pet Services</option>
                          <option>Event Planning</option>
                          <option>Professional Services</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Monthly Revenue</label>
                        <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-all">
                          <option value="">Select range</option>
                          <option>Under $500K</option>
                          <option>$500K – $1M</option>
                          <option>$1M – $5M</option>
                          <option>$5M – $10M</option>
                          <option>$10M – $20M</option>
                          <option>$20M+</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Biggest Marketing Challenge</label>
                      <textarea rows={3} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-all resize-none" placeholder="What's your biggest challenge with digital marketing right now?" />
                    </div>
                    <button type="submit" className="btn-primary text-lg px-10 py-4 w-full md:w-auto">
                      <span>Get My Free Audit →</span>
                    </button>
                    <p className="text-xs text-slate-500">No credit card required. No obligation. Just insights.</p>
                  </form>
                )}
              </ScrollAnimator>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <ScrollAnimator delay={200}>
                <div className="space-y-6">
                  <div className="glass-card">
                    <h3 className="font-display font-semibold text-lg text-white mb-4">What Happens Next?</h3>
                    <ol className="space-y-4">
                      {[
                        { step: '1', title: 'AI Analysis', desc: 'Our AI scans your website, SEO, competitors, and local presence.' },
                        { step: '2', title: 'Expert Review', desc: 'A specialist reviews the AI findings and adds strategic insights.' },
                        { step: '3', title: 'Custom Report', desc: 'You receive a detailed report with prioritized action items.' },
                        { step: '4', title: 'Strategy Call', desc: 'We walk through the findings together — no pressure, just value.' },
                      ].map((s) => (
                        <li key={s.step} className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400/20 to-violet-400/20 flex items-center justify-center shrink-0">
                            <span className="text-sm font-bold text-cyan-400">{s.step}</span>
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-white">{s.title}</div>
                            <div className="text-xs text-slate-400">{s.desc}</div>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="glass-card">
                    <h3 className="font-display font-semibold text-lg text-white mb-4">Trusted By 50+ Businesses</h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-4">
                      &ldquo;The free audit alone was worth more than what we paid our previous agency for 6 months. The insights were incredibly specific and actionable.&rdquo;
                    </p>
                    <div className="text-sm">
                      <div className="text-white font-medium">Sarah K.</div>
                      <div className="text-cyan-400 text-xs">Owner, SparkleClean Services</div>
                    </div>
                  </div>

                  <div className="glass-card text-center">
                    <div className="text-3xl mb-3">📞</div>
                    <p className="text-sm text-slate-400 mb-3">Prefer to talk? Call us directly.</p>
                    <a href={`tel:${siteConfig.phone}`} className="font-display font-bold text-xl text-cyan-400 hover:text-cyan-300 transition-colors">
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
              </ScrollAnimator>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

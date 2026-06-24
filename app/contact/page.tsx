'use client';

import { useState } from 'react';
import { siteConfig } from '@/lib/data';
import ScrollAnimator from '@/components/ui/ScrollAnimator';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-abyss-dark" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-cyan-400/8 blur-3xl" />
        <div className="container-main relative z-10 text-center">
          <ScrollAnimator>
            <div className="text-sm font-medium text-cyan-400 tracking-widest uppercase mb-4">Contact</div>
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-6">
              Let&apos;s Talk<br />Growth
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              Ready to transform your digital marketing? Book a free strategy call and we&apos;ll show you exactly how AI can grow your business.
            </p>
          </ScrollAnimator>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollAnimator>
                {submitted ? (
                  <div className="glass-card text-center py-16">
                    <div className="text-5xl mb-4">✅</div>
                    <h3 className="font-display font-bold text-2xl text-white mb-4">Message Sent!</h3>
                    <p className="text-slate-400">We&apos;ll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Full Name *</label>
                        <input type="text" required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-all" placeholder="John Smith" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Email *</label>
                        <input type="email" required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-all" placeholder="john@company.com" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Phone</label>
                        <input type="tel" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-all" placeholder="(951) 555-0123" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Industry</label>
                        <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-all">
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
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Monthly Marketing Budget</label>
                      <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-all">
                        <option value="">Select range</option>
                        <option>Under $2,000</option>
                        <option>$2,000 – $5,000</option>
                        <option>$5,000 – $10,000</option>
                        <option>$10,000 – $25,000</option>
                        <option>$25,000+</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Message *</label>
                      <textarea required rows={5} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-all resize-none" placeholder="Tell us about your business and marketing goals..." />
                    </div>
                    <button type="submit" className="btn-primary text-lg px-10 py-4 w-full md:w-auto">
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </ScrollAnimator>
            </div>

            {/* Info */}
            <div className="lg:col-span-2">
              <ScrollAnimator delay={200}>
                <div className="space-y-8">
                  <div className="glass-card">
                    <h3 className="font-display font-semibold text-lg text-white mb-4">Get in Touch</h3>
                    <div className="space-y-4">
                      <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors">
                        <span className="text-xl">📞</span>
                        <span>{siteConfig.phone}</span>
                      </a>
                      <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors">
                        <span className="text-xl">✉️</span>
                        <span>{siteConfig.email}</span>
                      </a>
                      <div className="flex items-start gap-3 text-slate-300">
                        <span className="text-xl">📍</span>
                        <span>{siteConfig.address.street}<br />{siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}</span>
                      </div>
                    </div>
                  </div>

                  <div className="glass-card">
                    <h3 className="font-display font-semibold text-lg text-white mb-4">Office Hours</h3>
                    <div className="space-y-2 text-sm text-slate-300">
                      <div className="flex justify-between"><span>Monday – Friday</span><span className="text-cyan-400">{siteConfig.hours.weekdays}</span></div>
                      <div className="flex justify-between"><span>Saturday</span><span className="text-cyan-400">{siteConfig.hours.saturday}</span></div>
                      <div className="flex justify-between"><span>Sunday</span><span className="text-slate-500">{siteConfig.hours.sunday}</span></div>
                    </div>
                  </div>

                  <div className="glass-card">
                    <h3 className="font-display font-semibold text-lg text-white mb-4">Quick Response</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      We respond to all inquiries within 24 hours. For urgent matters, call us directly. Emergency support available for active clients.
                    </p>
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

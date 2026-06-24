'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { siteConfig, services, industries } from '@/lib/data';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-strong shadow-elevation-2 py-3' : 'py-5 bg-transparent'
        }`}
      >
        <div className="container-main flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 via-indigo-400 to-violet-400 flex items-center justify-center font-display font-bold text-abyss-950 text-sm">
              U
            </div>
            <span className="font-display font-semibold text-lg text-white group-hover:text-cyan-400 transition-colors">
              UNRIVALED
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            <div className="relative" onMouseEnter={() => setActiveDropdown('services')} onMouseLeave={() => setActiveDropdown(null)}>
              <Link href="/services" className="btn-ghost text-sm">
                Services <svg className="w-3 h-3 ml-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </Link>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-80 glass-strong rounded-xl p-4 shadow-elevation-3">
                  {services.map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}`} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group">
                      <span className="text-lg">{s.icon}</span>
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">{s.shortName}</div>
                        <div className="text-xs text-slate-400 line-clamp-1">{s.tagline}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="relative" onMouseEnter={() => setActiveDropdown('industries')} onMouseLeave={() => setActiveDropdown(null)}>
              <Link href="/industries" className="btn-ghost text-sm">
                Industries <svg className="w-3 h-3 ml-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </Link>
              {activeDropdown === 'industries' && (
                <div className="absolute top-full left-0 mt-2 w-80 glass-strong rounded-xl p-4 shadow-elevation-3 grid grid-cols-2 gap-1">
                  {industries.map((ind) => (
                    <Link key={ind.slug} href={`/industries/${ind.slug}`} className="flex items-center gap-2 p-3 rounded-lg hover:bg-white/5 transition-colors group">
                      <span>{ind.icon}</span>
                      <span className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">{ind.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="btn-ghost text-sm">About</Link>
            <Link href="/case-studies" className="btn-ghost text-sm">Case Studies</Link>
            <Link href="/pricing" className="btn-ghost text-sm">Pricing</Link>
            <Link href="/contact" className="btn-ghost text-sm">Contact</Link>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href={`tel:${siteConfig.phone}`} className="btn-ghost text-sm">{siteConfig.phone}</a>
            <Link href="/free-audit" className="btn-primary text-sm"><span>Free Audit</span></Link>
          </div>

          <button className="lg:hidden flex flex-col gap-1.5 p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            <span className={`block w-6 h-0.5 bg-white transition-transform ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-transform ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-abyss-950/98 backdrop-blur-xl pt-24 px-6 overflow-y-auto lg:hidden">
          <div className="flex flex-col gap-2 pb-12">
            <Link href="/services" className="text-xl font-display font-semibold text-white py-3 border-b border-white/5" onClick={closeMobile}>Services</Link>
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="text-sm text-slate-300 py-2 pl-4 hover:text-cyan-400" onClick={closeMobile}>{s.icon} {s.shortName}</Link>
            ))}
            <Link href="/industries" className="text-xl font-display font-semibold text-white py-3 border-b border-white/5 mt-4" onClick={closeMobile}>Industries</Link>
            {industries.map((ind) => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`} className="text-sm text-slate-300 py-2 pl-4 hover:text-cyan-400" onClick={closeMobile}>{ind.icon} {ind.name}</Link>
            ))}
            <Link href="/about" className="text-xl font-display font-semibold text-white py-3 border-b border-white/5 mt-4" onClick={closeMobile}>About</Link>
            <Link href="/case-studies" className="text-xl font-display font-semibold text-white py-3 border-b border-white/5" onClick={closeMobile}>Case Studies</Link>
            <Link href="/pricing" className="text-xl font-display font-semibold text-white py-3 border-b border-white/5" onClick={closeMobile}>Pricing</Link>
            <Link href="/contact" className="text-xl font-display font-semibold text-white py-3 border-b border-white/5" onClick={closeMobile}>Contact</Link>
            <Link href="/free-audit" className="btn-primary text-center mt-6" onClick={closeMobile}><span>Get Free Audit</span></Link>
          </div>
        </div>
      )}
    </>
  );
}

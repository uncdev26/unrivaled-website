import Link from 'next/link';
import { siteConfig, services, industries } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="relative bg-abyss-950 border-t border-white/5">
      {/* Glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      <div className="container-main pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-indigo-400 to-violet-400 flex items-center justify-center font-display font-bold text-abyss-950">
                U
              </div>
              <span className="font-display font-bold text-xl text-white">UNRIVALED NETWORK</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              {siteConfig.description}
            </p>
            <div className="flex gap-3">
              {Object.entries(siteConfig.social).map(([platform, url]) => (
                <a key={platform} href={url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all">
                  <span className="text-xs uppercase font-bold">{platform[0].toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-5">Services</h4>
            <ul className="space-y-3">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                    {s.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-5">Industries</h4>
            <ul className="space-y-3">
              {industries.slice(0, 6).map((ind) => (
                <li key={ind.slug}>
                  <Link href={`/industries/${ind.slug}`} className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                    {ind.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-5">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link href="/case-studies" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Case Studies</Link></li>
              <li><Link href="/pricing" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Pricing</Link></li>
              <li><Link href="/blog" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Contact</Link></li>
              <li><Link href="/locations" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Locations</Link></li>
            </ul>
          </div>
        </div>

        {/* Locations */}
        <div className="border-t border-white/5 pt-8 mb-8">
          <h4 className="font-display font-semibold text-white text-sm mb-4">Serving Southern California</h4>
          <div className="flex flex-wrap gap-3">
            {['Riverside', 'Los Angeles', 'Orange County', 'San Diego', 'Ventura County', 'Santa Barbara', 'Palm Springs', 'San Bernardino'].map((city) => (
              <span key={city} className="text-xs text-slate-500 px-3 py-1.5 glass rounded-full">{city}</span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved. | {siteConfig.address.full}
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

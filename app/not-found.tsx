import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 gradient-abyss-dark" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-cyan-400/8 blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-violet-400/8 blur-3xl" />
      <div className="container-main relative z-10 text-center">
        <div className="font-display font-bold text-8xl md:text-9xl gradient-text mb-6">404</div>
        <h1 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">Page Not Found</h1>
        <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary"><span>Go Home</span></Link>
          <Link href="/free-audit" className="btn-secondary"><span>Get Free Audit</span></Link>
        </div>
      </div>
    </section>
  );
}

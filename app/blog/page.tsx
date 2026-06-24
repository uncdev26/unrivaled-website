import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/data';
import ScrollAnimator from '@/components/ui/ScrollAnimator';

export const metadata: Metadata = {
  title: 'Blog',
  description: `AI marketing insights, industry trends, and growth strategies from ${siteConfig.name}.`,
};

const posts = [
  {
    slug: 'ai-search-optimization-service-businesses',
    title: 'AI Search Optimization: How Service Businesses Can Dominate ChatGPT & Perplexity Results',
    excerpt: 'AI-powered search engines are changing how customers find businesses. Here\'s how to optimize your presence for the AI search revolution.',
    category: 'AI Strategy',
    date: 'June 2026',
    readTime: '8 min read',
    gradient: 'from-cyan-400 to-indigo-400',
  },
  {
    slug: 'local-seo-2026-guide',
    title: 'The Complete Local SEO Guide for Service Businesses in 2026',
    excerpt: 'Google\'s local algorithm has changed dramatically. Learn the latest strategies for ranking in the map pack and driving local leads.',
    category: 'SEO',
    date: 'June 2026',
    readTime: '12 min read',
    gradient: 'from-indigo-400 to-violet-400',
  },
  {
    slug: 'ai-advertising-google-meta',
    title: 'How AI-Powered Ad Campaigns Outperform Traditional Marketing by 3-5x',
    excerpt: 'Discover how machine learning algorithms optimize your ad spend in real-time, reducing cost-per-acquisition while scaling lead volume.',
    category: 'Paid Media',
    date: 'May 2026',
    readTime: '10 min read',
    gradient: 'from-violet-400 to-fuchsia-400',
  },
  {
    slug: 'google-business-profile-optimization',
    title: 'Google Business Profile Optimization: The Complete Playbook for Local Service Businesses',
    excerpt: 'Your GBP is your most powerful local marketing asset. Here\'s how to optimize every element for maximum visibility and conversions.',
    category: 'Local SEO',
    date: 'May 2026',
    readTime: '9 min read',
    gradient: 'from-emerald-400 to-cyan-400',
  },
  {
    slug: 'reputation-management-ai',
    title: 'AI-Powered Reputation Management: Turning Reviews Into Revenue',
    excerpt: 'Learn how AI tools can monitor, respond to, and generate reviews at scale — turning your online reputation into your biggest growth driver.',
    category: 'Reputation',
    date: 'May 2026',
    readTime: '7 min read',
    gradient: 'from-amber-400 to-orange-400',
  },
  {
    slug: 'content-marketing-service-industries',
    title: 'Content Marketing for Service Industries: A Framework That Actually Drives Leads',
    excerpt: 'Most service businesses create content that nobody reads. Here\'s the content framework that generates qualified leads consistently.',
    category: 'Content',
    date: 'April 2026',
    readTime: '11 min read',
    gradient: 'from-rose-400 to-pink-400',
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-abyss-dark" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-indigo-400/8 blur-3xl" />
        <div className="container-main relative z-10 text-center">
          <ScrollAnimator>
            <div className="text-sm font-medium text-indigo-400 tracking-widest uppercase mb-4">Blog</div>
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-6">
              AI Marketing<br />Insights
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              Actionable strategies, industry trends, and AI-powered marketing insights for service businesses.
            </p>
          </ScrollAnimator>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <ScrollAnimator key={post.slug} delay={i * 100}>
                <article className="glass-card group h-full flex flex-col">
                  <div className={`h-48 rounded-xl bg-gradient-to-br ${post.gradient} opacity-20 mb-6 flex items-center justify-center`}>
                    <span className="text-4xl opacity-60">📝</span>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium px-2 py-1 glass rounded-full text-cyan-400">{post.category}</span>
                    <span className="text-xs text-slate-500">{post.readTime}</span>
                  </div>
                  <h2 className="font-display font-semibold text-lg text-white group-hover:text-cyan-400 transition-colors mb-3 leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-sm text-slate-400 leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                    <span className="text-xs text-slate-500">{post.date}</span>
                    <span className="text-sm text-cyan-400 group-hover:translate-x-1 transition-transform">Read More →</span>
                  </div>
                </article>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-indigo-400/10 to-violet-400/10" />
        <div className="container-main relative z-10 text-center">
          <ScrollAnimator>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">Stay Ahead of the Curve</h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">Get weekly AI marketing insights delivered to your inbox. No spam, just actionable strategies.</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input type="email" placeholder="your@email.com" className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-all" />
              <button type="submit" className="btn-primary"><span>Subscribe</span></button>
            </form>
          </ScrollAnimator>
        </div>
      </section>
    </>
  );
}

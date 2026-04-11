'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const smoothEase = [0.16, 1, 0.3, 1];

// Your Authentic Case Study Database
const caseStudies = [
  {
    id: '01',
    client: 'Bharath Bhushan Global Corporation Private Limited',
    industry: 'Enterprise Operations',
    challenge:
      'Operating a multi-vertical enterprise requires an ironclad legal foundation. The corporation needed to ensure absolute compliance and liability protection while establishing a digital footprint that matched their global ambitions.',
    solution:
      'Executed a comprehensive corporate restructuring to secure the entity, managed regulatory compliance, and laid the groundwork for an enterprise-grade digital infrastructure to support future scale.',
    metrics: [
      { label: 'Entity Status', value: 'Secured' },
      { label: 'Compliance', value: '100%' },
      { label: 'Liability Risk', value: 'Capped' },
    ],
    accent: 'from-blue-900/40 to-black',
  },
  {
    id: '02',
    client: 'Sri Krishna Oota Kuteera',
    industry: 'Commercial F&B / Cloud Kitchen',
    challenge:
      'Scaling from a localized operation to handling massive bulk corporate catering contracts required strict food safety licensing, formalized business structuring, and professionalized B2B quotation systems.',
    solution:
      'Formalized the operational structure, navigated state-level compliance and FSSAI licensing, and deployed a professionalized B2B acquisition framework to easily process and close high-volume catering orders.',
    metrics: [
      { label: 'F&B Licensing', value: 'Active' },
      { label: 'B2B Contracts', value: 'Unlocked' },
      { label: 'Quotation System', value: 'Automated' },
    ],
    accent: 'from-amber-900/40 to-black',
  },
  {
    id: '03',
    client: 'Ev Interiors',
    industry: 'Corporate Advisory & Tech',
    challenge:
      'The traditional consulting market is saturated with slow, outdated firms relying on Word documents and basic websites. The founder needed a high-speed, automated infrastructure to capture high-net-worth clients globally.',
    solution:
      'Architected a custom Next.js digital engine with cinematic Framer Motion physics, integrated automated lead funnels, and established the definitive Private Limited structure to handle high-ticket B2B transactions safely.',
    metrics: [
      { label: 'UX Physics', value: 'Cinematic' },
      { label: 'Load Velocity', value: '< 1.2s' },
      { label: 'Lead Routing', value: 'Automated' },
    ],
    accent: 'from-slate-700/40 to-black',
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#030303] to-[#030303] text-white pt-32 px-6 md:px-12 pb-32 font-sans selection:bg-slate-500/30 overflow-x-hidden">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-24 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: smoothEase }}
        >
          <span className="inline-block mb-6 px-4 py-1.5 border border-white/10 bg-white/5 text-xs font-bold tracking-widest text-slate-300 uppercase rounded-full">
            Proven Architectures
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 uppercase drop-shadow-lg leading-[0.9]">
            Deployed <br />{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-600">
              Infrastructure.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-light max-w-3xl leading-relaxed mx-auto md:mx-0">
            We don't just build websites or file taxes. We engineer complete
            operational systems for founders who refuse to move slowly. Review
            our active deployments below.
          </p>
        </motion.div>
      </div>

      {/* Case Studies Stack */}
      <div className="max-w-7xl mx-auto space-y-32 relative">
        {/* Subtle connecting line down the middle on desktop */}
        <div className="hidden lg:block absolute top-0 bottom-0 left-12 w-[1px] bg-white/5 -z-10" />

        {caseStudies.map((study, i) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: smoothEase }}
            className="relative"
          >
            {/* The Number Indicator */}
            <div className="hidden lg:flex absolute top-10 left-6 w-12 h-12 bg-[#050505] border border-white/10 rounded-full items-center justify-center font-black text-xl text-white z-10 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
              {study.id}
            </div>

            <div
              className={`lg:ml-24 p-1 bg-gradient-to-b border border-white/10 rounded-sm ${study.accent} overflow-hidden group`}
            >
              <div className="bg-[#050505] p-8 md:p-12 lg:p-16 rounded-sm w-full h-full flex flex-col lg:flex-row gap-12 lg:gap-20">
                {/* Left Side: The Narrative */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="lg:hidden text-2xl font-black text-white/20">
                      {study.id}
                    </span>
                    <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                      {study.industry}
                    </span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-10 text-white leading-tight">
                    {study.client}
                  </h2>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-3 border-b border-white/10 pb-2">
                        The Bottleneck
                      </h3>
                      <p className="text-slate-400 font-light leading-relaxed text-lg">
                        {study.challenge}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-3 border-b border-white/10 pb-2">
                        Our Architecture
                      </h3>
                      <p className="text-slate-300 font-light leading-relaxed text-lg">
                        {study.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Side: The Metrics Display */}
                <div className="lg:w-1/3 flex flex-col justify-center gap-6">
                  <div className="p-8 bg-black/50 border border-white/5 rounded-sm">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-8 text-center">
                      System Output
                    </h4>

                    <div className="space-y-8">
                      {study.metrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col items-center justify-center text-center"
                        >
                          <span className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-white mb-2">
                            {metric.value}
                          </span>
                          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                            {metric.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* The Final CTA */}
      <section className="mt-40 border-t border-white/10 pt-32 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-96 bg-slate-800/10 blur-[150px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: smoothEase }}
          className="max-w-4xl mx-auto z-10 relative"
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 uppercase">
            Build Your Engine.
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 mb-12 font-light max-w-2xl mx-auto">
            Stop losing revenue to poor infrastructure. Let our team audit your
            setup today.
          </p>
          <Link href="/contact">
            <button className="bg-white text-black px-12 py-6 rounded-sm font-black tracking-widest text-lg uppercase shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:bg-slate-200 hover:shadow-[0_0_60px_rgba(255,255,255,0.1)] transition-all">
              Initiate Project
            </button>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}

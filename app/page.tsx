'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

// The smooth, lightweight physics curve (No heavy blurs, just pure speed)
const smoothEase = [0.16, 1, 0.3, 1];

export default function YaskiyaHome() {
  return (
    <main className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#030303] to-[#030303] text-white selection:bg-blue-500/30 font-sans overflow-x-hidden">
      {/* SECTION 1: THE HERO */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-12 pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: smoothEase }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-slate-800/20 rounded-full blur-[150px] -z-10 pointer-events-none"
        />

        <div className="max-w-5xl z-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="inline-block mb-8 px-4 py-1.5 border border-white/10 bg-white/5 text-xs font-bold tracking-widest text-slate-300 uppercase rounded-full"
          >
            Corporate Advisory & Infrastructure
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="text-6xl md:text-[7rem] lg:text-[8rem] font-black tracking-tighter leading-[0.85] mb-8 uppercase drop-shadow-2xl"
          >
            Structure <br /> Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-600">
              Empire.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-xl md:text-2xl text-slate-400 max-w-3xl font-light mb-12 leading-relaxed"
          >
            Built for ambitious founders. We architect the legal, financial, and
            digital frameworks required to protect your personal assets,
            optimize tax liabilities, and scale your growing business securely.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="w-full bg-white text-black px-12 py-5 rounded-sm font-black tracking-widest uppercase hover:bg-slate-200 transition-colors">
                Book A Strategy Call
              </button>
            </Link>
            <Link href="/services" className="w-full sm:w-auto">
              <button className="w-full border border-white/20 text-white px-12 py-5 rounded-sm font-black tracking-widest uppercase hover:bg-white/5 transition-colors">
                View Services
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: THE 50/50 SPLIT (IN & OUT ANIMATION ACTIVATED) */}
      <section className="py-32 px-6 md:px-12 border-t border-white/5 bg-black/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: smoothEase }}
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase leading-tight">
              Why Incorporation is{' '}
              <span className="text-slate-500">Non-Negotiable.</span>
            </h2>
            <div className="w-20 h-1 bg-white/20 mb-8" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: smoothEase }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">
                1. Infinite Liability Shield
              </h3>
              <p className="text-lg text-slate-400 font-light leading-relaxed">
                Operating a growing business as a sole proprietorship exposes
                your personal savings to business debts. A Private Limited
                entity establishes a legal firewall, capping your risk so you
                can scale safely.
              </p>
            </div>
            <div className="w-full h-px bg-white/5" />
            <div>
              <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">
                2. Tax Optimization
              </h3>
              <p className="text-lg text-slate-400 font-light leading-relaxed">
                Proprietors pay up to 30%+ in individual tax slabs. Registered
                corporates unlock highly optimized tax tiers, allowing you to
                reinvest capital into your digital infrastructure rather than
                losing it.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: WHO WE BUILD FOR (UPDATED COPY FOR GROWING BIZ) */}
      <section className="py-32 px-6 md:px-12 bg-[#030303]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4">
                Who We Build For.
              </h2>
              <p className="text-xl text-slate-500 font-light max-w-xl">
                We build for ambitious founders. If you are a growing business
                ready to professionalize your backend, you belong here.
              </p>
            </div>
            <Link
              href="/portfolio"
              className="text-sm font-bold tracking-widest uppercase text-white hover:text-slate-400 transition-colors flex items-center gap-2"
            >
              View Our Work →
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Real Estate Consultancies',
                desc: "Automate lead acquisition via High-Speed Next.js portals and secure your growing firm's legal liability.",
              },
              {
                title: 'E-Commerce Operators',
                desc: 'For modern brands processing steady volume. We handle your GST compliance and build custom digital storefronts.',
              },
              {
                title: 'Digital Agencies & Services',
                desc: 'Establish your corporate entity, manage annual ROC filings, and build your high-conversion portfolio site.',
              },
            ].map((target, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: smoothEase }}
                className="p-10 bg-[#080808] border border-white/5 hover:border-slate-500/30 transition-colors"
              >
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6">
                  <div className="w-3 h-3 bg-white/40 rounded-full" />
                </div>
                <h3 className="text-2xl font-bold mb-4 uppercase text-white">
                  {target.title}
                </h3>
                <p className="text-slate-400 leading-relaxed font-light">
                  {target.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: THE DEPLOYMENT PIPELINE */}
      <section className="py-32 px-6 md:px-12 bg-[#050505] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">
              The Deployment Pipeline.
            </h2>
            <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto">
              A rigid, three-phase framework to integrate into your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative">
            <div className="hidden md:block absolute top-[4.5rem] left-0 w-full h-[1px] bg-white/10 -z-10" />

            {[
              {
                phase: 'Phase I',
                title: 'Strategic Audit',
                desc: 'We analyze your current operations and bottlenecks to determine the exact corporate and digital architecture required for growth.',
              },
              {
                phase: 'Phase II',
                title: 'Legal Deployment',
                desc: 'Our firm executes all ROC, GST, and IP filings. You are legally transitioned into a compliant, protected entity.',
              },
              {
                phase: 'Phase III',
                title: 'System Scaling',
                desc: 'We deploy your enterprise web architecture and automated lead-capture systems, syncing your new identity with a powerful digital storefront.',
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.8,
                  ease: smoothEase,
                }}
                className="bg-transparent text-center relative"
              >
                <div className="w-16 h-16 mx-auto bg-[#050505] border border-white/10 rounded-full flex items-center justify-center font-black text-xl mb-8 text-white relative z-10">
                  0{i + 1}
                </div>
                <p className="text-sm font-bold text-slate-500 tracking-widest uppercase mb-3">
                  {step.phase}
                </p>
                <h3 className="text-2xl font-bold mb-4 text-white uppercase">
                  {step.title}
                </h3>
                <p className="text-slate-400 font-light leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: THE FINAL CTA */}
      <section className="py-40 px-6 md:px-12 bg-[#030303] text-center relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-slate-800/20 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: smoothEase }}
          className="max-w-4xl mx-auto z-10 relative"
        >
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 uppercase">
            Secure Your Backend.
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 mb-12 font-light max-w-2xl mx-auto">
            Our consulting team is ready to audit your current business
            structure and architect your legal and digital foundation.
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

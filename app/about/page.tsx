'use client';

import { motion } from 'framer-motion';

const smoothEase = [0.16, 1, 0.3, 1];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#030303] to-[#030303] text-white pt-40 px-6 md:px-12 pb-32 font-sans selection:bg-slate-500/30 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* SECTION 1: THE MANIFESTO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1, ease: smoothEase }}
          className="mb-32"
        >
          <span className="text-blue-500 font-bold tracking-[0.3em] uppercase text-xs mb-6 block">
            Our Ideology
          </span>
          <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter uppercase mb-12 leading-[0.85]">
            The <br /> Architecture <br /> of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-600">
              Growth.
            </span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-12">
            <p className="text-2xl md:text-3xl text-slate-300 font-light leading-tight">
              Yaskiya was founded on a logical observation: most businesses fail
              not because of their product, but because of their backend.
            </p>
            <div className="space-y-8">
              <p className="text-lg text-slate-500 font-light leading-relaxed">
                Complexity is the silent killer of scale. When a founder is
                stuck navigating ROC filings, GST reconciliations, and broken
                web templates, they aren't leading—they're reacting.
              </p>
              <p className="text-lg text-slate-500 font-light leading-relaxed">
                We built Yaskiya to be the definitive infrastructure layer for
                the modern enterprise. We provide the legal protection of a
                corporate giant and the digital speed of a global tech firm.
              </p>
            </div>
          </div>
        </motion.div>

        {/* SECTION 2: THE OPERATIONAL PRINCIPLES (Alignment Fix) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-white/10 border border-white/10">
          {[
            {
              title: 'Absolute Precision',
              desc: 'In high-ticket business, there is no margin for error. Every filing, every line of code, and every corporate structure is architected to survive scrutiny.',
            },
            {
              title: 'Institutional Velocity',
              desc: 'Infrastructure should never be a bottleneck. We deploy legal and digital solutions at the speed of your ambition, not at the speed of bureaucracy.',
            },
            {
              title: 'Shielded Security',
              desc: 'We protect your personal wealth and brand IP through aggressive legal shielding and enterprise-grade encryption.',
            },
          ].map((principle, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: smoothEase }}
              className="bg-[#030303] p-12 hover:bg-white/[0.02] transition-colors"
            >
              <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />{' '}
                {principle.title}
              </h3>
              <p className="text-slate-500 leading-relaxed font-light">
                {principle.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* SECTION 3: THE FOUNDER'S LOGIC */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1, ease: smoothEase }}
          className="mt-40 p-12 md:p-24 bg-white/5 border border-white/10 rounded-sm relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 relative z-10">
            Why Yaskiya?
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-4xl relative z-10">
            Because a business is only as strong as the systems that support it.
            We don't just file papers or build pages; we engineer the **back-end
            engine** that allows you to focus 100% of your energy on revenue and
            growth.
          </p>
        </motion.div>
      </div>
    </main>
  );
}

'use client';

import { motion } from 'framer-motion';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white pt-40 px-6 md:px-12 pb-32 font-sans">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12">
            Terms of Service
          </h1>
          <div className="space-y-12 text-slate-400 font-light leading-relaxed">
            <section>
              <h2 className="text-white font-bold uppercase tracking-widest text-sm mb-4 text-left">
                1. Engagement
              </h2>
              <p className="text-left">
                By engaging Yaskiya Private Limited for corporate advisory or
                digital infrastructure services, you agree to provide accurate
                documentation required for statutory filings and deployment
                protocols.
              </p>
            </section>
            <section>
              <h2 className="text-white font-bold uppercase tracking-widest text-sm mb-4 text-left">
                2. Professional Services
              </h2>
              <p className="text-left">
                Yaskiya operates as a private consultancy. While we ensure
                maximum precision in filings (Pvt Ltd, LLP, GST), final approval
                timelines are subject to government department processing
                speeds.
              </p>
            </section>
            <section>
              <h2 className="text-white font-bold uppercase tracking-widest text-sm mb-4 text-left">
                3. Liability
              </h2>
              <p className="text-left">
                Our infrastructure modules are designed to minimize risk;
                however, the client remains responsible for the operational
                conduct of their registered entity.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

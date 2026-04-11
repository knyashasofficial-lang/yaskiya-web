'use client';

import { motion } from 'framer-motion';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white pt-40 px-6 md:px-12 pb-32 font-sans">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12">
            Privacy Policy
          </h1>
          <div className="space-y-12 text-slate-400 font-light leading-relaxed">
            <section>
              <h2 className="text-white font-bold uppercase tracking-widest text-sm mb-4 text-left">
                1. Data Encryption
              </h2>
              <p className="text-left">
                All client data, including sensitive incorporation documents and
                financial ledgers, are handled through encrypted channels. We do
                not sell or trade client information to third-party marketing
                entities.
              </p>
            </section>
            <section>
              <h2 className="text-white font-bold uppercase tracking-widest text-sm mb-4 text-left">
                2. Information Collection
              </h2>
              <p className="text-left">
                We collect data necessary for MCA filings and digital
                deployment. This includes KYC documents, brand assets, and
                contact details provided during the "Start Project" phase.
              </p>
            </section>
            <section>
              <h2 className="text-white font-bold uppercase tracking-widest text-sm mb-4 text-left">
                3. Retention
              </h2>
              <p className="text-left">
                Corporate records are retained as required by Indian law for
                registered Private Limited entities. Digital assets can be
                purged upon request after project handover.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

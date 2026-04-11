'use client';

import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white pt-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Side: The Pitch */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
            LET'S BUILD <br /> YOUR ENGINE.
          </h1>
          <p className="text-xl text-gray-400 mb-10 font-light">
            Fill out the project brief. Our consulting team will review your
            requirements and reach out within 24 hours to schedule a strategy
            session.
          </p>

          <div className="space-y-6 text-gray-400">
            <div>
              <p className="font-bold text-white">Direct Email</p>
              <p>yashas@yaskiya.in</p>
            </div>
            <div>
              <p className="font-bold text-white">Headquarters</p>
              <p>Bengaluru, Karnataka</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: The Lead Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/[0.02] border border-white/10 p-8 rounded-2xl"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full bg-black border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  className="w-full bg-black border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Yaskiya"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-400 mb-2">
                What do you need help with?
              </label>
              <select className="w-full bg-black border border-white/10 rounded-lg p-4 text-gray-400 focus:outline-none focus:border-blue-500 transition-colors">
                <option>Company Formation</option>
                <option>Digital Growth</option>
                <option>GST & TAX</option>
                <option>Licenses & Govt</option>
                <option>Others</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-400 mb-2">
                Project Details
              </label>
              <textarea
                rows={4}
                className="w-full bg-black border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Tell us about your current bottlenecks..."
              ></textarea>
            </div>

            <button
              type="button"
              className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-gray-200 transition-colors mt-4"
            >
              Submit Project Brief
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  );
}

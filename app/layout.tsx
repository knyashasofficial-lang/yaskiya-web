'use client';

import './globals.css';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  // Replace with your actual WhatsApp Business number (including country code, no +)
  const whatsappNumber = '919019090146';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello%20Yaskiya%2C%20I%20am%20interested%20in%20architecting%20a%20digital/legal%20framework%20for%20my%20business.`;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsChatOpen(true);
      setShowNotification(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const Logo = () => (
    <div className="flex items-center group cursor-pointer">
      <div className="w-10 h-10 md:w-14 md:h-14 relative transition-transform duration-500 group-hover:scale-105">
        <img
          src="/yaskiya-logo.png"
          alt="Yaskiya Logo"
          className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(59,130,246,0.2)]"
        />
      </div>
    </div>
  );

  return (
    <html lang="en">
      <body className="bg-[#020205] text-white font-sans min-h-screen flex flex-col selection:bg-blue-600">
        {/* NAV BAR */}
        <nav className="fixed top-0 w-full z-[100] flex justify-between items-center p-4 md:px-12 backdrop-blur-xl border-b border-white/5 bg-black/40">
          <Link href="/">
            <Logo />
          </Link>
          <div className="hidden md:flex gap-10 text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase">
            <Link
              href="/services"
              className="hover:text-white transition-colors"
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="hover:text-white transition-colors"
            >
              Portfolio
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
          </div>
          <div className="flex items-center gap-4">
            {/* UPDATED: Direct WhatsApp Link */}
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <button className="bg-white text-black px-6 py-2 rounded-sm font-black text-[10px] tracking-widest uppercase hover:bg-[#25D366] hover:text-white transition-all">
                Direct Consultation
              </button>
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-2xl p-2 text-slate-400"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </nav>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[150] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-10 text-xs font-black tracking-[0.4em] uppercase"
            >
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-8 right-8 text-2xl text-slate-500"
              >
                ✕
              </button>
              <Link href="/services" onClick={() => setIsMenuOpen(false)}>
                Services
              </Link>
              <Link href="/portfolio" onClick={() => setIsMenuOpen(false)}>
                Portfolio
              </Link>
              <Link href="/about" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        <main className="flex-grow pt-24">{children}</main>

        {/* FINALIZED CORPORATE FOOTER */}
        <footer className="bg-black border-t border-white/5 pt-24 pb-12 px-6 md:px-12">
          <div className="max-w-6xl mx-auto flex flex-col items-center">
            <Logo />
            <p className="text-slate-600 text-[10px] mt-6 mb-10 font-bold tracking-[0.1em] text-center max-w-sm uppercase">
              Corporate advisory and digital infrastructure firm.
            </p>

            {/* SOCIALS SECTION */}
            <div className="flex gap-8 mb-12">
              <a
                href="https://in.linkedin.com/in/yaskiya-private-limited-38b482382"
                className="text-slate-500 hover:text-blue-500 transition-colors"
                target="_blank"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/yaskiyapvtltd"
                className="text-slate-500 hover:text-pink-500 transition-colors"
                target="_blank"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c.796 0 1.441.645 1.441 1.44s-.645 1.44-1.441 1.44c-.795 0-1.439-.645-1.439-1.44s.644-1.44 1.439-1.44z" />
                </svg>
              </a>
            </div>

            <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-8 mb-16 pt-12 border-t border-white/5 text-center">
              <div className="flex flex-col gap-4">
                <span className="text-[10px] text-white font-black tracking-widest uppercase">
                  Platform
                </span>
                <Link
                  href="/services"
                  className="text-[10px] text-slate-500 hover:text-white uppercase font-bold"
                >
                  Services
                </Link>
                <Link
                  href="/portfolio"
                  className="text-[10px] text-slate-500 hover:text-white uppercase font-bold"
                >
                  Portfolio
                </Link>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-[10px] text-white font-black tracking-widest uppercase">
                  Company
                </span>
                <Link
                  href="/about"
                  className="text-[10px] text-slate-500 hover:text-white uppercase font-bold"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-[10px] text-slate-500 hover:text-white uppercase font-bold"
                >
                  Contact
                </Link>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-[10px] text-white font-black tracking-widest uppercase">
                  Legal
                </span>
                <Link
                  href="/terms"
                  className="text-[10px] text-slate-500 hover:text-white uppercase font-bold"
                >
                  Terms
                </Link>
                <Link
                  href="/privacy"
                  className="text-[10px] text-slate-500 hover:text-white uppercase font-bold"
                >
                  Privacy
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <p className="text-[9px] font-black text-slate-800 tracking-[0.5em] uppercase">
                © 2026 Yaskiya Private Limited. All Rights Reserved.
              </p>
              <p className="text-[8px] font-black text-blue-900 tracking-[0.3em] uppercase">
                Built by Yaskiya
              </p>
            </div>
          </div>
        </footer>

        {/* AI CHATBOT BUTTON & POPUP */}
        <div className="fixed bottom-6 right-6 z-[200]">
          <AnimatePresence>
            {/* NEW: AI Integrated Pop-up */}
            {showNotification && !isChatOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.8 }}
                className="absolute bottom-20 right-0 w-48 p-4 bg-white text-black rounded-lg shadow-2xl border border-white/20"
              >
                <button
                  onClick={() => setShowNotification(false)}
                  className="absolute top-1 right-2 text-[10px] text-slate-400 hover:text-black"
                >
                  ✕
                </button>
                <p className="text-[10px] font-black uppercase tracking-tight leading-tight">
                  AI Integrated to answer all your questions
                </p>
                <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-white rotate-45 border-r border-b border-white/20"></div>
              </motion.div>
            )}

            {isChatOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="mb-4 w-72 h-[400px] bg-[#0a0a0a] border border-blue-500/20 rounded-xl shadow-2xl flex flex-col overflow-hidden"
              >
                <div className="p-4 bg-blue-600/10 border-b border-blue-500/20 flex justify-between items-center text-[10px] font-black tracking-widest uppercase">
                  <span className="text-white">YASKIYA ENGINE</span>
                  <button
                    onClick={() => setIsChatOpen(false)}
                    className="text-slate-500"
                  >
                    ✕
                  </button>
                </div>
                <div className="flex-1 p-4 text-[11px] text-slate-400">
                  <div className="bg-white/5 p-3 rounded-sm border border-white/10">
                    Connection secure. How can I assist?
                  </div>
                </div>
                {/* REVERTED: Input-based Chatbot UI */}
                <div className="p-4 bg-black flex gap-2">
                  <input
                    type="text"
                    placeholder="Query..."
                    className="flex-1 bg-transparent border border-white/10 p-2 text-[10px] outline-none focus:border-blue-500 text-white"
                  />
                  <button className="bg-blue-600 text-white px-3 py-1 rounded-sm text-[9px] font-black uppercase">
                    Send
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <button
            onClick={() => {
              setIsChatOpen(!isChatOpen);
              setShowNotification(false);
            }}
            className="bg-black border-2 border-blue-500/30 text-blue-500 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl font-black text-xs transition-transform hover:scale-110"
          >
            {isChatOpen ? '✕' : 'AI'}
          </button>
        </div>
      </body>
    </html>
  );
}

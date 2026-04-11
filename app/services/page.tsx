'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

const smoothEase = [0.16, 1, 0.3, 1];

// The Anchored Pricing Database
const services = [
  {
    id: 'pvt-ltd',
    category: 'Company Formation',
    name: 'Enterprise Pvt Ltd Setup',
    originalPrice: '₹1,50,000',
    price: '₹1,24,000',
    note: 'ALL-INCLUSIVE 1-YEAR BUNDLE',
    shortDesc: 'Full Incorporation + GST + MSME + 1 Yr Compliance.',
    details: {
      why: 'Cheap setups leave you drowning in hidden government fees and compliance penalties. We deploy a turnkey, fully-managed corporate shell. You pay once, and your legal, GST, and MCA filings are covered for the entire first year.',
      how: '1. Corporate Structuring → 2. DSC/DIN Generation → 3. Incorporation (MoA/AoA) → 4. GST & MSME Setup → 5. 12-Month Compliance Retainer Activated.',
      deliverables:
        'COI, PAN, TAN, GSTIN, MSME Certificate, All Govt Fees Paid, and 12 Months of MCA Annual Filings & Compliance.',
    },
  },
  {
    id: 'llp',
    category: 'Company Formation',
    name: 'Corporate LLP Setup',
    originalPrice: '₹1,40,000',
    price: '₹1,20,000',
    note: 'ALL-INCLUSIVE 1-YEAR BUNDLE',
    shortDesc: 'LLP Incorporation + GST + MSME + 1 Yr Compliance.',
    details: {
      why: 'The perfect middle ground for partners. Enjoy limited liability without the friction of unmanaged filings. We absorb all government fees and handle your entire first-year legal backend.',
      how: '1. Name Reservation → 2. Partner DSC/DIN → 3. Custom LLP Agreement Drafting → 4. ROC Filing → 5. GST/MSME Activation.',
      deliverables:
        'LLP Incorporation Certificate, Custom LLP Agreement, GSTIN, MSME, All Govt Fees Paid, 12 Months Compliance.',
    },
  },
  {
    id: 'biz-web',
    category: 'Digital Growth',
    name: 'Business Website',
    originalPrice: '₹25,000',
    price: '₹15,000',
    note: 'INCL. HOSTING',
    shortDesc: '5-Page Responsive Site + Hosting + Domain.',
    details: {
      why: 'A basic template loses trust instantly. We build high-speed, custom-coded web environments that position your business as a premium authority from the first click.',
      how: '1. Brand Analysis → 2. UI/UX Wireframing → 3. Development → 4. SEO Setup → 5. Live Deployment.',
      deliverables:
        'Live 5-Page Website, 1 Year Domain & Hosting, SSL Certificate, Contact Form Integration.',
    },
  },
  {
    id: 'ecom',
    category: 'Digital Growth',
    name: 'E-Commerce Store',
    originalPrice: '₹65,000',
    price: '₹40,000',
    note: 'FULL SETUP',
    shortDesc: 'Complete store with Payment Gateway & Inventory.',
    details: {
      why: "Selling via Instagram DMs doesn't scale. A dedicated e-commerce infrastructure automates inventory, payments, and shipping logic so you can handle massive volume.",
      how: '1. Store Architecture → 2. Product Uploads → 3. Razorpay/Stripe Integration → 4. Logistics Sync → 5. Handover.',
      deliverables:
        'Fully Functional Store, Payment Gateway, Admin Dashboard, Up to 50 Initial Products.',
    },
  },
  {
    id: 'video',
    category: 'Digital Growth',
    name: 'Pro Video Editing',
    originalPrice: '₹18,000',
    price: '₹10,000',
    note: 'MONTHLY RETAINER',
    shortDesc: 'Reels & YouTube Content (Monthly Pack).',
    details: {
      why: 'Attention is the new currency. We transform raw footage into highly engaging, retention-optimized short-form content designed for virality.',
      how: '1. Raw Footage Upload → 2. Cinematic Cuts & Color Grading → 3. Dynamic Subtitling → 4. Final Delivery.',
      deliverables:
        '10-15 Fully Edited Reels/Shorts per month, ready for upload.',
    },
  },
  {
    id: 'gst-reg',
    category: 'GST & Tax',
    name: 'GST Registration',
    originalPrice: '₹6,500',
    price: '₹3,000',
    note: 'EXCL. GOVT FEES',
    shortDesc: 'New GSTIN Application for business.',
    details: {
      why: 'Mandatory for crossing turnover thresholds or selling across state lines. A GSTIN legitimizes your business for B2B transactions.',
      how: '1. Document Collection → 2. Portal Application → 3. Clarification Handling → 4. Certificate Issuance.',
      deliverables:
        'Official GST Registration Certificate (GSTIN), Login Credentials.',
    },
  },
  {
    id: 'gst-reg-annual',
    category: 'GST & Tax',
    name: 'GST Regular (Annual)',
    originalPrice: '₹18,000',
    price: '₹10,000',
    note: 'EXCL. GOVT FEES',
    shortDesc: 'Quarterly Return Filing (QRMP) for 1 Year.',
    details: {
      why: 'Missed filings trigger massive penalties and block your e-way bills. We automate your compliance so you never miss a deadline.',
      how: '1. Invoice Uploads → 2. CA Reconciliation of GSTR-2B → 3. Liability Calculation → 4. GSTR-1 and 3B Filing.',
      deliverables:
        'Filed Return Acknowledgements, Monthly Tax Computation Sheets.',
    },
  },
  {
    id: 'itr',
    category: 'GST & Tax',
    name: 'ITR 3 (Business)',
    originalPrice: '₹24,000',
    price: '₹15,000',
    note: 'EXCL. GOVT FEES',
    shortDesc: 'For Proprietors & Professionals.',
    details: {
      why: 'Complex business income requires precise deductions to minimize tax liability and avoid Income Tax notices.',
      how: '1. Ledger Scrutiny → 2. P&L Generation → 3. Deduction Optimization → 4. Final Filing.',
      deliverables:
        'Filed ITR-V Acknowledgment, Detailed Tax Computation Report.',
    },
  },
  {
    id: 'tm',
    category: 'Licenses & Govt',
    name: 'Trademark Reg.',
    originalPrice: '₹15,000',
    price: '₹9,000',
    note: 'EXCL. GOVT FEES',
    shortDesc: 'Brand Name & Logo Protection.',
    details: {
      why: 'Your brand is your highest-leverage asset. Unregistered names can be legally stolen by competitors at any time.',
      how: '1. Extensive TM Search → 2. Class Categorization → 3. Application Filing → 4. Monitoring.',
      deliverables: 'TM Application Receipt (allows use of ™ symbol).',
    },
  },
  {
    id: 'shop',
    category: 'Licenses & Govt',
    name: 'Shop & Establishment',
    originalPrice: '₹4,500',
    price: '₹2,500',
    note: 'EXCL. GOVT FEES',
    shortDesc: 'Labor Law Registration.',
    details: {
      why: 'A mandatory state registration for opening a physical office, shop, or commercial establishment in Karnataka.',
      how: '1. Document Verification → 2. Labor Department Portal Filing → 3. Certificate Issuance.',
      deliverables: 'Official Shop & Establishment Certificate (Form C).',
    },
  },
  {
    id: 'fssai',
    category: 'Licenses & Govt',
    name: 'FSSAI Basic',
    originalPrice: '₹6,000',
    price: '₹3,750',
    note: 'EXCL. GOVT FEES',
    shortDesc: 'Food License (Turnover < 12L).',
    details: {
      why: 'Strictly mandatory for any business involved in manufacturing, processing, or selling food products (Cloud Kitchens, Cafes).',
      how: '1. Form A Filing → 2. FoSCoS Portal Uploads → 3. Govt Processing → 4. License Issuance.',
      deliverables: 'FSSAI Basic Registration Certificate, License Number.',
    },
  },
];

const categories = [
  'All',
  'Company Formation',
  'Digital Growth',
  'GST & Tax',
  'Licenses & Govt',
];

export default function ServicesVault() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedService, setSelectedService] = useState<any>(null);

  // Replace with your actual WhatsApp Business number (91 for India)
  const whatsappNumber = '91XXXXXXXXXX';

  const filteredServices =
    activeCategory === 'All'
      ? services
      : services.filter((s) => s.category === activeCategory);

  if (typeof window !== 'undefined') {
    if (selectedService) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#030303] to-[#030303] text-white pt-32 px-6 md:px-12 pb-32 font-sans selection:bg-slate-500/30">
      <div className="max-w-7xl mx-auto mb-16 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: smoothEase }}
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 uppercase drop-shadow-lg">
            Service Vault.
          </h1>
          <p className="text-xl text-slate-400 font-light max-w-2xl leading-relaxed mx-auto md:mx-0">
            Select a module to view architecture details, deployment timelines,
            and deliverables.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-start gap-3 mb-12 relative z-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest transition-all ${
              activeCategory === cat
                ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                : 'bg-black/50 text-slate-400 hover:text-white border border-white/10 hover:border-white/30'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {filteredServices.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.6, ease: smoothEase }}
            onClick={() => setSelectedService(service)}
            className="bg-[#080808] border border-white/10 hover:border-slate-400/50 rounded-sm p-8 flex flex-col justify-between group cursor-pointer transition-all hover:shadow-[0_0_30_px_rgba(255,255,255,0.05)] hover:-translate-y-1"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-black tracking-widest text-slate-500 uppercase">
                  {service.category}
                </span>
                <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white text-transparent group-hover:text-black transition-all">
                  <span className="text-sm leading-none font-light">→</span>
                </div>
              </div>
              <h3 className="text-2xl font-black uppercase mb-3 text-white">
                {service.name}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-8">
                {service.shortDesc}
              </p>
            </div>

            <div className="border-t border-white/5 pt-4">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-sm line-through text-slate-500 font-medium">
                  {service.originalPrice}
                </span>
                <span className="text-3xl font-black text-white">
                  {service.price}
                </span>
              </div>
              <span className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">
                {service.note}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: smoothEase }}
              className="relative w-full max-w-3xl bg-[#0a0a0a] border border-white/10 rounded-sm shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
            >
              <div className="p-8 pb-6 border-b border-white/10 flex justify-between items-start bg-[#050505]">
                <div>
                  <span className="text-[10px] font-black tracking-widest text-slate-500 uppercase mb-2 block">
                    {selectedService.category}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white">
                    {selectedService.name}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="p-8 overflow-y-auto custom-scrollbar space-y-8">
                <div className="flex flex-col md:flex-row items-baseline gap-4 mb-2">
                  <div className="flex items-baseline gap-3">
                    <span className="text-xl line-through text-slate-500 font-medium">
                      {selectedService.originalPrice}
                    </span>
                    <span className="text-4xl font-black tracking-tight text-white">
                      {selectedService.price}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-blue-500 tracking-widest uppercase">
                    {selectedService.note}
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-3 border-b border-white/10 pb-2">
                    The Logic (Why)
                  </h4>
                  <p className="text-slate-400 font-light leading-relaxed">
                    {selectedService.details.why}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-3 border-b border-white/10 pb-2">
                    Deployment Process
                  </h4>
                  <p className="text-slate-400 font-light leading-relaxed">
                    {selectedService.details.how}
                  </p>
                </div>

                <div className="p-6 bg-[#050505] border border-white/5 rounded-sm">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                    Final Deliverables
                  </h4>
                  <p className="text-white font-medium">
                    {selectedService.details.deliverables}
                  </p>
                </div>
              </div>

              <div className="p-6 border-t border-white/10 bg-[#050505]">
                {/* UPDATED: Direct WhatsApp Initiation with Service Context */}
                <a
                  href={`https://wa.me/${9019090146}?text=${encodeURIComponent(
                    `Hello Yaskiya, I am interested in initiating the ${selectedService.name} module (${selectedService.price}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setSelectedService(null)}
                >
                  <button className="w-full bg-[#25D366] text-white py-5 rounded-sm font-black tracking-widest text-lg uppercase shadow-[0_0_20px_rgba(37,211,102,0.1)] hover:opacity-90 transition-all flex items-center justify-center gap-3">
                    Proceed
                  </button>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}

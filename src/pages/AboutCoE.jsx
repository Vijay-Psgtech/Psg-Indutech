import React from 'react';
import { motion } from 'framer-motion';

const AboutCoE = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50 text-gray-800 py-12">
      {/* Hero */}
      <div className="max-w-6xl mx-auto px-6">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-3" style={{ color: 'var(--color-deep-indigo)' }}>
            Centre of Excellence — Technical Textiles
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-muted/90" style={{ color: 'var(--color-muted)' }}>
            Building capabilities in technical textiles through testing, R&D,
            incubation and market development. Our mini-missions focus on
            infrastructure, standardization and industry enablement.
          </p>
        </motion.header>

        {/* Content cards */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="grid gap-8 lg:grid-cols-2 items-start"
        >
          {/* Introduction Card */}
          <article className="rounded-xl bg-white/75 backdrop-blur-md border border-transparent shadow-md p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--color-indigo-50), transparent)' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2v7" stroke="var(--color-indigo)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 11a7 7 0 0 0 14 0" stroke="var(--color-purple)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2" style={{ color: 'var(--color-indigo)' }}>COE Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  Technical textiles are textile materials and products used for their technical performance and functional properties. They support infrastructure, safety, healthcare and more. The COE focuses on testing, prototype development, training and industry collaboration to overcome gaps in infrastructure and skills.
                </p>
              </div>
            </div>
            <div className="mt-6 flex gap-3 flex-wrap">
              <a className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-white shadow" href="#" style={{ backgroundColor: 'var(--color-indigo)' }}>
                Learn more
              </a>
              <a className="inline-flex items-center gap-2 px-4 py-2 rounded-md border" href="#" style={{ borderColor: 'var(--color-indigo-100)', color: 'var(--color-indigo)' }}>
                Contact us
              </a>
            </div>
          </article>

          {/* Missions Card: split into two sub-cards */}
          <div className="space-y-6">
            <motion.div whileHover={{ y: -4 }} className="rounded-xl bg-white/80 backdrop-blur-md border border-indigo-50 shadow-sm p-5">
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-purple)' }}>Mini Mission I</h3>
              <p className="text-gray-700 mb-3"><strong>Objectives:</strong> Standardization, testing facilities, prototype development and a resource center with IT infrastructure.</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Facilities for testing and evaluation with accreditation.</li>
                <li>Resource centre with IT infrastructure.</li>
                <li>Indigenous prototype development facilities.</li>
                <li>Training of industry personnel and knowledge sharing.</li>
                <li>Incubation center establishment.</li>
              </ul>
              <p className="mt-3 text-sm text-gray-600">Allocation: ₹25 crore (capital, training & recurring expenditure)</p>
            </motion.div>

            <motion.div whileHover={{ y: -4 }} className="rounded-xl bg-white/80 backdrop-blur-md border border-indigo-50 shadow-sm p-5">
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-deep-indigo)' }}>Mini Mission II</h3>
              <p className="text-gray-700 mb-3"><strong>Objectives:</strong> Support domestic & export market development of technical textiles, encourage startups and fund workshops and events.</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Support for business start-ups.</li>
                <li>Funding for workshops and events.</li>
                <li>Regulatory measures & standardization for social compliance.</li>
                <li>Market development for domestic & export sales.</li>
                <li>Contract R&D through academic & industry partners.</li>
              </ul>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </section>
  );
};

export default AboutCoE;
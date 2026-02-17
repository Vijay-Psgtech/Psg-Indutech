import React from "react";
import { Mail, Phone, MapPin, User } from "lucide-react";
import { motion } from "framer-motion";
import { brandColors, grad, gradText, borderColor } from "../../components/common/brand.js";


/* ── small reusable pieces ─────────────────────────────────── */
function Eyebrow({ children }) {
  return (
    <div
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full"
      style={{
        background: `linear-gradient(135deg, ${brandColors.primary}0c, ${brandColors.accent}0c)`,
        border: `1.5px solid ${borderColor()}`,
      }}
    >
      <span
        className="w-2 h-2 rounded-full"
        style={{ background: grad.subtle }}
      />
      <span
        className="text-xs font-bold uppercase tracking-widest"
        style={{ color: brandColors.secondary }}
      >
        {children}
      </span>
    </div>
  );
}

const ContactPage = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-indigo-50/50">
      {/* ================= TITLE ================= */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 w-full max-w-4xl"
      >
         <Eyebrow>Get in Touch</Eyebrow>
          <h1
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight"
            style={{ color: brandColors.primary }}
          >
            Contact <span style={gradText}>Us</span>
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We’re here to help. Reach out to PSGTECHS COE INDUTECH for any enquiries, collaborations, or support.
          </p>
      </motion.div>

      {/* ================= CONTENT CARD ================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl shadow-indigo-100 overflow-hidden border border-white/50 backdrop-blur-sm"
      >
        <div className="grid lg:grid-cols-5 h-full">
          
          {/* -------- LEFT COLUMN (Contact Info) -------- */}
          <div className="lg:col-span-2 p-8 sm:p-10 bg-gradient-to-br from-white to-slate-50 border-b lg:border-b-0 lg:border-r border-slate-100 flex flex-col justify-between">
            <div className="space-y-8">
              <div>
                <h2
                  className="text-xl font-bold mb-6 flex items-center gap-3"
                  style={{ color: brandColors.primary }}
                >
                  <span className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
                    <User size={20} />
                  </span>
                  Key Contacts
                </h2>

                <div className="space-y-6 pl-2">
                  <div className="relative border-l-2 border-indigo-100 pl-4 py-1">
                    <p className="font-bold text-slate-800 text-lg">Dr. G. Thilagavathi</p>
                    <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">Prof. & Head, Department of Textile Technology,</p>
                  </div>

                  <div className="relative border-l-2 border-indigo-100 pl-4 py-1">
                    <p className="font-bold text-slate-800 text-lg">Dr. S. Neelakrishnan</p>
                    <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">Prof. & Head, Department of Automobile Engineering,</p>
                  </div>

                  <div className="relative border-l-2 border-indigo-100 pl-4 py-1">
                    <p className="font-bold text-slate-800 text-lg">Mr. V. Muthukumar</p>
                    <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">ADMIN</p>
                  </div>
                </div>
              </div>

              <hr className="border-slate-100" />

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-sm shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-700 mb-1">Phone</p>
                    <p className="text-sm text-slate-600 leading-snug font-medium">
                      0422 – 2572177, 2572477, 2580455, 2578455, 4344777 
                    </p>
                    <p className="text-sm text-slate-600 leading-snug font-medium">
                      (Prefix Country Code 91 if you are calling from other countries)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-sm shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-700 mb-1">Address</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      PSGTECHS COE INDUTECH,<br />
                      Avinashi Road, Neelambur,<br />
                      Coimbatore – 641 062,<br />
                      Tamil Nadu, INDIA
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-sm shrink-0">
                    <User size={20} />
                  </div>
                  <div>
                     <p className="font-semibold text-slate-700 mb-1">Admin Contact</p>
                     <p className="text-sm text-slate-600">
                        Mr. V. Muthukumar
                     </p>
                     <a href="mailto:admin.int@psgtech.ac.in" className="text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
                        admin.int@psgtech.ac.in
                     </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* -------- RIGHT COLUMN (Map) -------- */}
          <div className="lg:col-span-3 w-full min-h-[400px] lg:min-h-full bg-slate-100 relative">
            <iframe
              title="PSGTECHS COE INDUTECH Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.6235673176616!2d77.09013827498201!3d11.066823553770265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f8a8f6563bff%3A0x80ff80b3532df4bd!2sPSGTECHS%20COE%20INDUTECH%20LABORATORY!5e0!3m2!1sen!2sin!4v1771241290935!5m2!1sen!2sin" 
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0.1) contrast(1.1)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            ></iframe>
            
            {/* Overlay Gradient for smooth blending (optional) */}
            <div className="absolute inset-0 pointer-events-none border-t border-black/5 lg:border-t-0 lg:border-l lg:border-white/20"></div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default ContactPage;

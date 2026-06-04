import React from "react";
import { Mail, Phone, MapPin, User } from "lucide-react";
import { motion } from "framer-motion";
import {
  brandColors,
  grad,
  gradText,
  borderColor,
} from "../../components/common/brand.js";
import Eyebrow from "../../components/common/Eyebrow";
import usePageTitle from "../../hooks/usePageTitle.jsx";

const ContactPage = () => {
  usePageTitle("Contact Us");
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
          className="mb-6 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight"
          style={{ color: brandColors.primary }}
        >
          Contact <span style={gradText}>Us</span>
        </h1>
        <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Get in Touch Today<br />
          Let’s collaborate to transform ideas into impactful innovations.
        </p>
      </motion.div>

      {/* ================= CONTENT CARD ================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl shadow-indigo-100 overflow-hidden border border-white/50 backdrop-blur-sm"
      >
        <div className="grid lg:grid-cols-2 h-full">
          {/* -------- LEFT COLUMN (Contact Info) -------- */}
          <div className="lg:col-span-1 p-8 sm:p-10 bg-gradient-to-br from-white to-slate-50 border-b lg:border-b-0 lg:border-r border-slate-100 flex flex-col justify-between">
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
                  <div className="relative border-l-2 border-indigo-200 pl-4 py-3 rounded-r-lg bg-gradient-to-r from-indigo-50/50 to-transparent p-3 -ml-3 transition-all duration-300 hover:bg-indigo-50 hover:border-indigo-400">
                    <p className="font-bold text-slate-800 text-lg">
                      Dr. G. Thilagavathi
                    </p>
                    <p className="text-sm text-slate-600 font-medium uppercase tracking-tight">
                      Prof. & Head, Department of Textile Technology,
                    </p>
                    <p className="text-sm text-slate-600 font-medium uppercase tracking-tight">
                      PSG College of Technology.
                    </p>
                  </div>

                  <div className="relative border-l-2 border-indigo-200 pl-4 py-3 rounded-r-lg bg-gradient-to-r from-indigo-50/50 to-transparent p-3 -ml-3 transition-all duration-300 hover:bg-indigo-50 hover:border-indigo-400">
                    <p className="font-bold text-slate-800 text-lg">
                      Dr. S. Neelakrishnan
                    </p>
                    <p className="text-sm text-slate-600 font-medium uppercase tracking-tight">
                      Prof. & Head, Department of Automobile Engineering,
                    </p>
                    <p className="text-sm text-slate-600 font-medium uppercase tracking-tight">
                      PSG College of Technology.
                    </p>
                  </div>

                  <div className="relative border-l-2 border-indigo-200 pl-4 py-3 rounded-r-lg bg-gradient-to-r from-indigo-50/50 to-transparent p-3 -ml-3 transition-all duration-300 hover:bg-indigo-50 hover:border-indigo-400">
                    <p className="font-bold text-slate-800 text-lg">
                      Mr. V. Muthukumar
                    </p>
                    <p className="text-sm text-slate-600 font-medium uppercase tracking-tight">
                      ADMIN
                    </p>
                    <p className="text-sm text-slate-600 font-medium tracking-tight">
                      Admin.int@psgtech.ac.in
                    </p>
                    <p className="text-sm text-slate-600 font-medium tracking-tight">
                      9952340925
                    </p>
                  </div>
                </div>
              </div>

              <hr className="border-slate-100" />

              <div className="space-y-6">
                <div className="flex items-start gap-4 group p-4 rounded-xl bg-gradient-to-br from-indigo-50/50 to-slate-50/50 border border-indigo-100/30 transition-all duration-300 hover:border-indigo-300 hover:bg-indigo-50/80 hover:shadow-md">
                  <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-sm shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 leading-snug font-base">
                      <span className="font-semibold text-slate-700 mb-1">Phone:</span> 0422 – 3933250 – 252
                    </p>
                    <p className="text-sm text-slate-600 leading-snug font-base">
                      <span className="font-semibold text-slate-700 mb-1">Mobile:</span> 9003939945
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group p-4 rounded-xl bg-gradient-to-br from-indigo-50/50 to-slate-50/50 border border-indigo-100/30 transition-all duration-300 hover:border-indigo-300 hover:bg-indigo-50/80 hover:shadow-md">
                  <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-sm shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-700 mb-1">Address</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      PSGTECHS COE INDUTECH,
                      <br />
                      Avinashi Road, Neelambur,
                      <br />
                      Coimbatore – 641 062,
                      <br />
                      Tamil Nadu, INDIA
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group p-4 rounded-xl bg-gradient-to-br from-indigo-50/50 to-slate-50/50 border border-indigo-100/30 transition-all duration-300 hover:border-indigo-300 hover:bg-indigo-50/80 hover:shadow-md">
                  <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-sm shrink-0">
                    <User size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-700 mb-1">
                      Manager - Testing
                    </p>
                    <p className="text-sm text-slate-600">Dr.G.Selvakumar</p>
                    <a
                      href="mailto:testing.int@psgtech.ac.in"
                      className="text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
                    >
                      testing.int@psgtech.ac.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group p-4 rounded-xl bg-gradient-to-br from-indigo-50/50 to-slate-50/50 border border-indigo-100/30 transition-all duration-300 hover:border-indigo-300 hover:bg-indigo-50/80 hover:shadow-md">
                  <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-sm shrink-0">
                    <User size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-700 mb-1">
                      Manager – Manufacturing
                    </p>
                    <p className="text-sm text-slate-600">Mr.S.Mohan</p>
                    <a
                      href="mailto:mfr1.int@psgtech.ac.in"
                      className="text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
                    >
                      mfr1.int@psgtech.ac.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* -------- RIGHT COLUMN (Map) -------- */}
          <div className="lg:col-span-1 w-full h-[500px] lg:h-[600px] bg-slate-100 relative rounded-r-3xl overflow-hidden">
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
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-l from-transparent via-transparent to-white/5 border-t border-black/5 lg:border-t-0 lg:border-l lg:border-indigo-100/30"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactPage;

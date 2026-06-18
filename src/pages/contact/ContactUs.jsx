import React, { useState } from "react";
import { Mail, Phone, MapPin, User, Building, Send } from "lucide-react";

import { motion } from "framer-motion";

import { brandColors, grad, gradText } from "../../components/common/brand.js";

import Eyebrow from "../../components/common/Eyebrow";
import usePageTitle from "../../hooks/usePageTitle.jsx";

const ContactPage = () => {
  usePageTitle("Contact Us");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Enquiry submitted successfully");

    console.log(formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });
  };
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-slate-50 to-indigo-50/50">
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
          Get in Touch Today
          <br />
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
        <div className="grid lg:grid-cols-2">
          {/* -------- LEFT COLUMN (Contact Info) -------- */}
          <div className="lg:col-span-1 p-8 sm:p-10 bg-linear-to-br from-white to-slate-50 border-b lg:border-b-0 lg:border-r border-slate-100 flex flex-col justify-between">
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
                  <div className="relative border-l-2 border-indigo-200 pl-4 py-3 rounded-r-lg bg-linear-to-r from-indigo-50/50 to-transparent p-3 -ml-3 transition-all duration-300 hover:bg-indigo-50 hover:border-indigo-400">
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

                  <div className="relative border-l-2 border-indigo-200 pl-4 py-3 rounded-r-lg bg-linear-to-r from-indigo-50/50 to-transparent p-3 -ml-3 transition-all duration-300 hover:bg-indigo-50 hover:border-indigo-400">
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

                  <div className="relative border-l-2 border-indigo-200 pl-4 py-3 rounded-r-lg bg-linear-to-r from-indigo-50/50 to-transparent p-3 -ml-3 transition-all duration-300 hover:bg-indigo-50 hover:border-indigo-400">
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
                <div className="flex items-start gap-4 group p-4 rounded-xl bg-linear-to-br from-indigo-50/50 to-slate-50/50 border border-indigo-100/30 transition-all duration-300 hover:border-indigo-300 hover:bg-indigo-50/80 hover:shadow-md">
                  <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-sm shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 leading-snug font-base">
                      <span className="font-semibold text-slate-700 mb-1">
                        Phone:
                      </span>{" "}
                      0422 – 3933250 – 252
                    </p>
                    <p className="text-sm text-slate-600 leading-snug font-base">
                      <span className="font-semibold text-slate-700 mb-1">
                        Mobile:
                      </span>{" "}
                      9003939945
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group p-4 rounded-xl bg-linear-to-br from-indigo-50/50 to-slate-50/50 border border-indigo-100/30 transition-all duration-300 hover:border-indigo-300 hover:bg-indigo-50/80 hover:shadow-md">
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

                <div className="flex items-start gap-4 group p-4 rounded-xl bg-linear-to-br from-indigo-50/50 to-slate-50/50 border border-indigo-100/30 transition-all duration-300 hover:border-indigo-300 hover:bg-indigo-50/80 hover:shadow-md">
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

                <div className="flex items-start gap-4 group p-4 rounded-xl bg-linear-to-br from-indigo-50/50 to-slate-50/50 border border-indigo-100/30 transition-all duration-300 hover:border-indigo-300 hover:bg-indigo-50/80 hover:shadow-md">
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
          {/* -------- RIGHT COLUMN (Enquiry Form) -------- */}
          <div className="lg:col-span-1 p-8 sm:p-10 bg-linear-to-br from-slate-50 to-white">
            <div className="mb-8">
              <h2
                className="text-2xl font-black mb-3"
                style={{ color: brandColors.primary }}
              >
                Send an Enquiry
              </h2>

              <p className="text-slate-600">
                Fill out the form below and our team will get back to you
                shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-700">
                  Full Name
                </label>

                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-700">
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter email"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-700">
                  Mobile Number
                </label>

                <div className="relative">
                  <Phone
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="tel"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter mobile number"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-700">
                  Organization / Company
                </label>

                <div className="relative">
                  <Building
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-700">
                  Service Required
                </label>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                >
                  <option value="">Select Service</option>
                  <option value="Testing">Testing</option>
                  <option value="Training">Training</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Consultancy">Consultancy</option>
                  <option value="Research">Research</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-700">
                  Message
                </label>

                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your enquiry..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 shadow-lg"
                style={{
                  background: grad.subtle,
                }}
              >
                Submit Enquiry
                <Send size={18} />
              </motion.button>
            </form>
            {/* ================= MAP ================= */}
<div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
  <iframe
    title="PSGTECHS COE INDUTECH Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.6235673176616!2d77.09013827498201!3d11.066823553770265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f8a8f6563bff%3A0x80ff80b3532df4bd!2sPSGTECHS%20COE%20INDUTECH%20LABORATORY!5e0!3m2!1sen!2sin!4v1771241290935!5m2!1sen!2sin"
    width="100%"
    height="320"
    style={{
      border: 0,
      filter: "grayscale(0.1) contrast(1.05)",
    }}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactPage;

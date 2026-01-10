import React from "react";
import { Mail, Phone, MapPin, User } from "lucide-react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const emails = [
    { label: "General Enquiries", value: "info.int@psgtech.ac.in" },
    {
      label: "Testing Enquiries",
      value: "testing.int@psgtech.ac.in, testing1.int@psgtech.ac.in",
    },
    {
      label: "FESEM Edax Test Enquiries",
      value: "semedaxlab@psgtech.ac.in",
    },
    {
      label: "Product Development Enquiries",
      value: "pd.int@psgtech.ac.in",
    },
    {
      label: "Training Enquiries",
      value: "marketing.int@psgtech.ac.in",
    },
    {
      label: "Manufacturing Enquiries",
      value: "mfr.int@psgtech.ac.in",
    },
    {
      label: "Feedback",
      value: "feedback.int@psgtech.ac.in",
    },
    {
      label: "Hot Melt Coating & Lamination Enquiries",
      value: "lamicoat.int@psgtech.ac.in",
    },
  ];

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center py-16 px-6 bg-linear-to-b from-white to-indigo-50"
      style={{
        "--color-deep-indigo": "#22227A",
        "--color-indigo": "#434C9A",
        "--color-purple": "#6D77B3",
      }}
    >
      {/* ================= TITLE ================= */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          style={{ color: "var(--color-deep-indigo)" }}
        >
          Contact Us
        </h1>
        <div
          className="w-20 h-1 mx-auto rounded-full mb-6"
          style={{
            background:
              "linear-gradient(90deg, var(--color-deep-indigo), var(--color-indigo), var(--color-purple))",
          }}
        ></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We’re here to help. Get in touch with COE INDUTECH for any enquiries,
          collaborations, or support.
        </p>
      </motion.div>

      {/* ================= CONTENT ================= */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl grid md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-xl p-8 border border-indigo-100"
      >
        {/* -------- LEFT COLUMN -------- */}
        <div className="space-y-6 text-gray-700">
          <h2
            className="text-2xl font-bold border-b-4 pb-2 inline-block"
            style={{
              borderColor: "var(--color-purple)",
              color: "var(--color-indigo)",
            }}
          >
            Key Contacts
          </h2>

          <div>
            <p className="font-semibold text-lg text-indigo-900">
              Dr. G. Thilagavathi
            </p>
            <p className="text-sm">Director</p>
          </div>

          <div>
            <p className="font-semibold text-lg text-indigo-900">
              Dr. S. Neelakrishnan
            </p>
            <p className="text-sm">Director</p>
          </div>

          <div>
            <p className="font-semibold text-lg text-indigo-900">
              Mr. V. Muthukumar
            </p>
            <p className="text-sm">ADMIN</p>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="text-indigo-600 mt-1" />
            <div>
              <p className="font-medium text-indigo-900">Contact Number:</p>
              <p className="text-sm">
                0422 – 3933250 – 252
                <br />
                9003939945
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="text-indigo-600 mt-1" />
            <div>
              <p className="font-medium text-indigo-900">
                Address for Communication:
              </p>
              <p className="text-sm leading-relaxed">
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

          <div className="flex items-start gap-3">
            <User className="text-indigo-600 mt-1" />
            <div>
              <p className="font-medium text-indigo-900">Contact Person:</p>
              <p className="text-sm">
                Mr. V. Muthukumar – ADMIN
                <br />
                <span className="font-medium">Email:</span>{" "}
                admin.int@psgtech.ac.in
              </p>
            </div>
          </div>
        </div>

        {/* -------- RIGHT COLUMN -------- */}
        <div>
          <h2
            className="text-2xl font-bold mb-4 border-b-4 pb-2 inline-block"
            style={{
              borderColor: "var(--color-purple)",
              color: "var(--color-indigo)",
            }}
          >
            E-mail Contacts
          </h2>

          <div className="space-y-3">
            {emails.map((item, index) => (
              <div
                key={index}
                className="p-3 rounded-lg bg-indigo-50 hover:bg-indigo-100 transition-all shadow-sm"
              >
                <p className="font-medium text-indigo-900 text-sm">
                  {item.label}
                </p>
                <p className="text-sm text-indigo-700 break-words">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactPage;

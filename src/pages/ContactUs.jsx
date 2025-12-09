import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const emails = [
    {
      label: "General Enquiries",
      value: "info.int@psgtech.ac.in",
    },
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
      className="min-h-screen flex flex-col items-center justify-center py-16 px-6 bg-gradient-to-b from-white to-indigo-50"
      style={{
        "--color-deep-indigo": "#22227A",
        "--color-indigo": "#434C9A",
        "--color-purple": "#6D77B3",
      }}
    >
      {/* Title */}
      <h1
        className="text-3xl md:text-4xl font-bold mb-8 text-center"
        style={{ color: "var(--color-deep-indigo)" }}
      >
        Contact Us
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl grid md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-xl p-8 border border-indigo-100"
      >
        {/* Left Column */}
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
            <p className="font-semibold text-lg text-[var(--color-deep-indigo)]">
              Dr. G. Thilagavathi
            </p>
            <p className="text-sm leading-relaxed">
              Prof. & Head, Department of Textile Technology,
              <br />
              PSG College of Technology, Peelamedu, Coimbatore – 641004.
            </p>
          </div>

          <div>
            <p className="font-semibold text-lg text-[var(--color-deep-indigo)]">
              Dr. S. Neelakrishnan
            </p>
            <p className="text-sm leading-relaxed">
              Prof. & Head, Department of Automobile Engineering,
              <br />
              PSG College of Technology, Peelamedu, Coimbatore – 641004.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="text-[var(--color-purple)] mt-1" />
            <div>
              <p className="font-medium text-[var(--color-deep-indigo)]">
                Phone:
              </p>
              <p className="text-sm">
                0422 – 2572177, 2572477, 2580455, 2578455, 4344777 (Ext: 4169)
                <br />
                (Prefix Country Code 91 if you are calling from other countries)
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="text-[var(--color-purple)] mt-1" />
            <div>
              <p className="font-medium text-[var(--color-deep-indigo)]">
                Address for Communication:
              </p>
              <p className="text-sm leading-relaxed">
                PSGTECHS COE INDUTECH,
                <br />
                Avinashi Road, Neelambur,
                <br />
                Coimbatore – 641 062, Tamil Nadu, INDIA
              </p>
              <p className="text-sm mt-1">
                <strong>Phone:</strong> 0422 – 3933250 – 252
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
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
                <p className="font-medium text-[var(--color-deep-indigo)] text-sm">
                  {item.label}:
                </p>
                <p className="text-sm text-[var(--color-purple)] break-words">
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

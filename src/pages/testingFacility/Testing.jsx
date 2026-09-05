import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronRight,
  Cpu,
  Droplets,
  Filter,
  Flame,
  FlaskConical,
  Layers,
  Mail,
  Microscope,
  Zap,
} from "lucide-react";
import { testNotifications, testingItems } from "../../components/data/TestingData.js";
import usePageTitle from "../../hooks/usePageTitle.jsx";

const colors = {
  ink: "#15224a",
  body: "#526078",
  muted: "#7d899f",
  cyan: "#00a8b8",
  cyanPale: "#e6f8fa",
  line: "#dce4ef",
  page: "#f5f7fb",
  navy: "#101d4d",
};

const getLabImage = (title) => {
  const name = title.toLowerCase();
  if (name.includes("physical")) return "/images/products/physicaltesting.jpg";
  if (name.includes("analytical")) return "/images/products/analyticaltesting.jpg";
  if (name.includes("fire")) return "/images/products/firetesting.webp";
  if (name.includes("surface")) return "/images/products/surface.jpg";
  if (name.includes("wet")) return "/images/products/wettesting.jpg";
  if (name.includes("filter")) return "/images/products/filtertesting.jpg";
  if (name.includes("insulation")) return "/images/products/insulationtesting.jpg";
  if (name.includes("fesem")) return "/images/products/fesemedax.jpg";
  return "/images/products/physicaltesting.jpg";
};

const getIcon = (title) => {
  const name = title.toLowerCase();
  if (name.includes("physical")) return <Layers size={21} strokeWidth={1.8} />;
  if (name.includes("analytical")) return <FlaskConical size={21} strokeWidth={1.8} />;
  if (name.includes("fire")) return <Flame size={21} strokeWidth={1.8} />;
  if (name.includes("surface")) return <Microscope size={21} strokeWidth={1.8} />;
  if (name.includes("wet")) return <Droplets size={21} strokeWidth={1.8} />;
  if (name.includes("filter")) return <Filter size={21} strokeWidth={1.8} />;
  if (name.includes("insulation")) return <Zap size={21} strokeWidth={1.8} />;
  if (name.includes("fesem")) return <Cpu size={21} strokeWidth={1.8} />;
  return <Microscope size={21} strokeWidth={1.8} />;
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const Testing = () => {
  usePageTitle("Testing Facility");
  const navigate = useNavigate();

  const goToContact = (recipientEmail, service) => {
    navigate("/contact", {
      state: { recipientEmail, service, source: "Testing Facility Page" },
    });
  };

  return (
    <main className="testing-page" style={{ "--testing-ink": colors.ink, "--testing-body": colors.body, "--testing-cyan": colors.cyan, "--testing-line": colors.line }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=DM+Serif+Display:ital@0;1&display=swap');
        .testing-page { min-height: 100vh; background: ${colors.page}; color: ${colors.ink}; font-family: 'DM Sans', sans-serif; }
        .testing-wrap { width: min(1160px, calc(100% - 48px)); margin: 0 auto; }
        .testing-serif { font-family: 'DM Serif Display', Georgia, serif; font-weight: 400; }
        .testing-ticker { overflow: hidden; background: ${colors.navy}; border-bottom: 3px solid ${colors.cyan}; }
        .testing-ticker-track { display: flex; width: max-content; animation: testing-scroll 42s linear infinite; }
        .testing-ticker-track:hover { animation-play-state: paused; }
        .testing-ticker-item { display: inline-flex; align-items: center; gap: 8px; padding: 10px 28px; color: rgba(255,255,255,.78); font-size: 12px; text-decoration: none; border-right: 1px solid rgba(255,255,255,.12); white-space: nowrap; }
        .testing-ticker-item svg { color: ${colors.cyan}; }
        @keyframes testing-scroll { to { transform: translateX(-50%); } }
        .testing-hero { padding: 72px 0 68px; background: linear-gradient(135deg, #eaf5f8 0%, #f8fafc 62%, #edf0fa 100%); border-bottom: 1px solid ${colors.line}; }
        .testing-hero-grid { display: grid; grid-template-columns: minmax(0, 1.15fr) minmax(330px, .85fr); gap: 72px; align-items: center; }
        .testing-kicker { display: inline-flex; align-items: center; gap: 8px; padding: 7px 11px; color: ${colors.cyan}; background: ${colors.cyanPale}; border: 1px solid #bce9ed; border-radius: 4px; font-size: 10px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; }
        .testing-kicker-dot { width: 6px; height: 6px; border-radius: 999px; background: ${colors.cyan}; }
        .testing-hero h1 { max-width: 650px; margin: 20px 0 18px; color: ${colors.ink}; font-size: clamp(42px, 6vw, 72px); line-height: .98; letter-spacing: -.03em; }
        .testing-hero h1 em { color: ${colors.cyan}; font-style: italic; }
        .testing-hero-copy { max-width: 565px; margin: 0; color: ${colors.body}; font-size: 15px; line-height: 1.8; }
        .testing-hero-meta { display: flex; flex-wrap: wrap; gap: 26px; margin-top: 34px; padding-top: 22px; border-top: 1px solid ${colors.line}; }
        .testing-meta-item { display: flex; gap: 10px; align-items: center; color: ${colors.body}; font-size: 12px; }
        .testing-meta-item strong { display: block; color: ${colors.ink}; font-size: 15px; }
        .testing-meta-icon { display: grid; width: 34px; height: 34px; place-items: center; color: ${colors.cyan}; background: white; border: 1px solid ${colors.line}; border-radius: 8px; }
        .testing-hero-image { position: relative; min-height: 390px; overflow: hidden; border-radius: 18px; box-shadow: 18px 22px 0 #d7eff1, 0 20px 50px rgba(21,34,74,.15); }
        .testing-hero-image img { width: 100%; height: 100%; min-height: 390px; display: block; object-fit: cover; }
        .testing-hero-image::after { position: absolute; inset: 0; content: ''; background: linear-gradient(140deg, rgba(16,29,77,.05), rgba(0,168,184,.34)); pointer-events: none; }
        .testing-image-label { position: absolute; z-index: 1; right: 18px; bottom: 18px; padding: 9px 12px; color: white; background: rgba(16,29,77,.82); border-left: 3px solid ${colors.cyan}; font-size: 10px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; }
        .testing-section { padding: 78px 0; }
        .testing-section-heading { display: flex; justify-content: space-between; gap: 28px; align-items: end; margin-bottom: 30px; }
        .testing-overline { margin: 0 0 9px; color: ${colors.cyan}; font-size: 10px; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; }
        .testing-section-heading h2 { margin: 0 0 9px; color: ${colors.ink}; font-size: clamp(30px, 4vw, 44px); line-height: 1; letter-spacing: -.025em; }
        .testing-section-heading p { max-width: 440px; margin: 0; color: ${colors.body}; font-size: 13px; line-height: 1.7; }
        .testing-count { flex: 0 0 auto; padding: 8px 11px; color: ${colors.cyan}; background: ${colors.cyanPale}; border: 1px solid #bce9ed; border-radius: 4px; font-size: 10px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; }
        .testing-lab-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 18px; }
        .testing-lab-card { position: relative; display: flex; min-height: 292px; flex-direction: column; overflow: hidden; color: white; background: ${colors.navy}; border-radius: 12px; text-decoration: none; box-shadow: 0 8px 22px rgba(21,34,74,.09); isolation: isolate; }
        .testing-lab-card img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; filter: brightness(.48) saturate(.72); transition: transform .55s ease, filter .4s ease; z-index: -2; }
        .testing-lab-card::before { position: absolute; inset: 0; content: ''; background: linear-gradient(180deg, rgba(16,29,77,.1) 15%, rgba(16,29,77,.93) 100%); z-index: -1; }
        .testing-lab-card:hover img { transform: scale(1.07); filter: brightness(.32) saturate(.8); }
        .testing-lab-top { display: flex; align-items: center; justify-content: space-between; padding: 17px; }
        .testing-lab-icon { display: grid; width: 42px; height: 42px; place-items: center; color: white; background: rgba(0,168,184,.22); border: 1px solid rgba(150,245,250,.45); border-radius: 9px; }
        .testing-lab-link { display: grid; width: 30px; height: 30px; place-items: center; color: white; background: rgba(255,255,255,.12); border: 1px solid rgba(255,255,255,.24); border-radius: 50%; transition: background .2s ease, transform .2s ease; }
        .testing-lab-card:hover .testing-lab-link { background: ${colors.cyan}; transform: translate(2px, -2px); }
        .testing-lab-content { margin-top: auto; padding: 20px 17px 18px; }
        .testing-lab-content h3 { margin: 0; font-size: 21px; line-height: 1.08; }
        .testing-lab-content span { display: inline-flex; align-items: center; gap: 5px; margin-top: 12px; color: #8fe7ed; font-size: 10px; font-weight: 700; letter-spacing: .11em; text-transform: uppercase; }
        .testing-contact { background: #eaf0f5; border-top: 1px solid ${colors.line}; }
        .testing-contact-grid { display: grid; grid-template-columns: .85fr 1.15fr; gap: 64px; align-items: start; }
        .testing-contact-intro h2 { margin: 0 0 12px; color: ${colors.ink}; font-size: clamp(30px, 4vw, 42px); line-height: 1; }
        .testing-contact-intro p { max-width: 370px; margin: 0; color: ${colors.body}; font-size: 13px; line-height: 1.75; }
        .testing-enquiry-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
        .testing-enquiry { min-height: 180px; padding: 22px; background: white; border: 1px solid ${colors.line}; border-radius: 12px; }
        .testing-enquiry-head { display: flex; align-items: center; gap: 10px; margin-bottom: 18px; }
        .testing-enquiry-head div { display: grid; width: 34px; height: 34px; place-items: center; color: ${colors.cyan}; background: ${colors.cyanPale}; border-radius: 8px; }
        .testing-enquiry-head p { margin: 0; color: ${colors.ink}; font-size: 10px; font-weight: 700; letter-spacing: .1em; line-height: 1.4; text-transform: uppercase; }
        .testing-email { display: flex; width: 100%; align-items: center; gap: 8px; padding: 10px 0; color: ${colors.ink}; background: transparent; border: 0; border-top: 1px solid ${colors.line}; font: 500 12px 'DM Sans', sans-serif; text-align: left; cursor: pointer; transition: color .2s ease; }
        .testing-email svg { flex: 0 0 auto; color: ${colors.cyan}; }
        .testing-email:hover { color: ${colors.cyan}; }
        .testing-footer-line { display: flex; justify-content: space-between; gap: 18px; align-items: center; margin-top: 52px; padding-top: 20px; border-top: 1px solid ${colors.line}; color: ${colors.muted}; font-size: 11px; }
        .testing-accreditation { display: inline-flex; align-items: center; gap: 7px; color: ${colors.cyan}; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; }
        .testing-accreditation i { width: 6px; height: 6px; border-radius: 50%; background: ${colors.cyan}; }
        @media (max-width: 900px) { .testing-hero-grid { grid-template-columns: 1fr; gap: 42px; } .testing-hero-image { min-height: 300px; max-width: 620px; } .testing-hero-image img { min-height: 300px; } .testing-lab-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } .testing-contact-grid { grid-template-columns: 1fr; gap: 36px; } }
        @media (max-width: 600px) { .testing-wrap { width: min(100% - 32px, 1160px); } .testing-hero { padding: 48px 0 52px; } .testing-hero h1 { font-size: clamp(40px, 13vw, 60px); } .testing-hero-meta { gap: 16px; } .testing-hero-image, .testing-hero-image img { min-height: 245px; } .testing-section { padding: 56px 0; } .testing-section-heading { display: block; margin-bottom: 24px; } .testing-count { display: inline-block; margin-top: 18px; } .testing-lab-grid, .testing-enquiry-grid { grid-template-columns: 1fr; } .testing-lab-card { min-height: 250px; } .testing-footer-line { align-items: flex-start; flex-direction: column; margin-top: 36px; } }
        @media (prefers-reduced-motion: reduce) { .testing-ticker-track { animation: none; } *, *::before, *::after { scroll-behavior: auto !important; transition-duration: .01ms !important; animation-duration: .01ms !important; } }
      `}</style>

      <div className="testing-ticker" aria-label="Testing facility updates">
        <div className="testing-ticker-track">
          {[...testNotifications, ...testNotifications].map((note, index) => (
            <a className="testing-ticker-item" href={note.pdf || "#labs"} target={note.pdf ? "_blank" : undefined} rel={note.pdf ? "noopener noreferrer" : undefined} key={`${note.text}-${index}`}>
              <ChevronRight size={14} /> {note.text} {note.pdf && <ArrowUpRight size={13} />}
            </a>
          ))}
        </div>
      </div>

      <section className="testing-hero">
        <div className="testing-wrap testing-hero-grid">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="testing-kicker"><i className="testing-kicker-dot" /> Testing services</span>
            <h1 className="testing-serif">Advance Testing <em>Facility</em></h1>
            <p className="testing-hero-copy">PSG Tech's COE Indutech brings together calibrated instruments and specialist expertise for dependable material evaluation, from physical performance to advanced microscopy.</p>
            <div className="testing-hero-meta">
              {/* <div className="testing-meta-item"><span className="testing-meta-icon"><Microscope size={17} /></span><span><strong>08</strong>specialized labs</span></div> */}
              <div className="testing-meta-item"><span className="testing-meta-icon"><FlaskConical size={17} /></span><span><strong>NABL</strong>accredited facility</span></div>
            </div>
          </motion.div>
          <motion.div className="testing-hero-image" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .65, ease: [0.22, 1, .36, 1] }}>
            <img src="/images/products/analyticaltesting.jpg" alt="Testing instruments in the analytical laboratory" />
            <span className="testing-image-label">Material intelligence</span>
          </motion.div>
        </div>
      </section>

      <section className="testing-section" id="labs">
        <div className="testing-wrap">
          <motion.div className="testing-section-heading" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div><p className="testing-overline">Our laboratories</p><h2 className="testing-serif">Choose your testing cell</h2><p>Explore focused facilities equipped to answer specific questions about textile and material performance.</p></div>
            <span className="testing-count">{testingItems.length} capabilities</span>
          </motion.div>
          <motion.div className="testing-lab-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: .07 } } }}>
            {testingItems.map((item) => (
              <motion.a className="testing-lab-card" href={item.doc} target="_blank" rel="noopener noreferrer" key={item.title} variants={fadeUp}>
                <img src={getLabImage(item.title)} alt="" aria-hidden="true" />
                <div className="testing-lab-top"><span className="testing-lab-icon">{getIcon(item.title)}</span><span className="testing-lab-link" aria-label={`Open ${item.title} specifications`}><ArrowUpRight size={15} /></span></div>
                <div className="testing-lab-content"><h3 className="testing-serif">{item.title}</h3><span>View specifications <ArrowUpRight size={12} /></span></div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="testing-section testing-contact" id="contact">
        <div className="testing-wrap">
          <div className="testing-contact-grid">
            <motion.div className="testing-contact-intro" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}><p className="testing-overline">Talk to the lab</p><h2 className="testing-serif">Start with the right test.</h2><p>For test requests, instrument bookings, or technical enquiries, our coordinators can help route your request.</p></motion.div>
            <motion.div className="testing-enquiry-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: .1 } } }}>
              <motion.div className="testing-enquiry" variants={fadeUp}><div className="testing-enquiry-head"><div><Mail size={16} /></div><p>General testing enquiries</p></div>{["testing.int@psgtech.ac.in", "testing1.int@psgtech.ac.in"].map((email) => <button className="testing-email" onClick={() => goToContact("testing.int@psgtech.ac.in", "Testing Facility")} key={email}><Mail size={14} />{email}</button>)}</motion.div>
              <motion.div className="testing-enquiry" variants={fadeUp}><div className="testing-enquiry-head"><div><Mail size={16} /></div><p>FESEM EDAX enquiries</p></div><button className="testing-email" onClick={() => goToContact("semedaxlab@psgtech.ac.in", "FESEM EDAX Testing")}><Mail size={14} />semedaxlab@psgtech.ac.in</button></motion.div>
            </motion.div>
          </div>
          <div className="testing-footer-line"><span className="testing-accreditation"><i /> NABL accredited</span><span>PSG College of Technology | Centre of Excellence for Industrial and Home Textiles</span></div>
        </div>
      </section>
    </main>
  );
};

export default Testing;

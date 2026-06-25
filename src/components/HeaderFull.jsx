"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { brandColors } from "./common/brand";

/* ── nav link data ─────────────────────────────────────────────── */
const commercialLinks = [
  { path: "/hot-melt-coating",                  label: "Hot Melt Coating & Lamination" },
  { path: "/needle-punch",                      label: "Needle Punching Line" },
  { path: "/thermal-wadding",                   label: "Thermal Wadding" },
  { path: "/wet-wipe",                          label: "Wet Wipes" },
  { path: "/uv-print",                          label: "UV Printing" },
  { path: "/coir-needle",                       label: "Coir Needle Felt" },
  { path: "/filter-plant",                      label: "Melt Blown Filter Cartridge Plant" },
  { path: "/composite-manufacturing-big-press", label: "Composite Manufacturing" },
];

const incubationLinks = [
  { path: "/dilo-needle-machine",                 label: "DILO Needle Punching Line" },
  { path: "/pilot-scale-machines",                label: "Taskar Coating Machine" },
  { path: "/face-mask",                           label: "Ply Melt Blown Face Mask Machine" },
  { path: "/composite-manufacturing-small-press", label: "Composite Development Machine" },
];

const topLinks = [
  { href: "/testing",             label: "Testing Facility" },
  { href: "/training",            label: "Training Facility" },
  { href: "/resource-center",     label: "Resource Centre" },
  { href: "/product-development", label: "Product Development" },
  { href: "/products",            label: "Products" },
  { href: "/gallery",             label: "Gallery" },
  { href: "/contact",             label: "Contact" },
];

/* ── brand tokens matched to screenshot ────────────────────────── */
const B = {
  navy:   "#0f2557",           // deep navy — primary text/logo colour
  blue:   "#1a6db5",           // mid blue — links, active states
  cyan:   "#1eb8d0",           // cyan accent — "Vision" word gradient
  bg:     "rgba(248,250,255,0.94)",
  bgSolid:"rgba(255,255,255,0.98)",
  border: "rgba(26,109,181,0.14)",
  grad:   "linear-gradient(90deg, #1a6db5, #1eb8d0)",
};

/* ── motion variants ────────────────────────────────────────────── */
const flyDown = {
  hidden:  { opacity: 0, y: -10, scale: 0.97 },
  visible: { opacity: 1, y: 0,   scale: 1,    transition: { duration: 0.2, ease: [0.22,1,0.36,1] } },
  exit:    { opacity: 0, y: -8,  scale: 0.97, transition: { duration: 0.15 } },
};
const flyRight = {
  hidden:  { opacity: 0, x: -10, scale: 0.97 },
  visible: { opacity: 1, x: 0,   scale: 1,    transition: { duration: 0.2, ease: [0.22,1,0.36,1] } },
  exit:    { opacity: 0, x: -10, scale: 0.97, transition: { duration: 0.15 } },
};

const panel = {
  background:           "rgba(250,252,255,0.98)",
  backdropFilter:       "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border:               `1px solid ${B.border}`,
  boxShadow:            "0 20px 56px rgba(15,37,87,0.11), 0 2px 8px rgba(15,37,87,0.05)",
  borderRadius:         "14px",
};

/* ── tiny shared pieces ─────────────────────────────────────────── */
function Dot() {
  return (
    <span
      className="w-1.5 h-1.5 rounded-full shrink-0"
      style={{ background: B.grad }}
    />
  );
}

function DropLink({ href, children }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="flex items-center gap-2.5 px-4 py-2.5 mx-1 text-sm rounded-lg transition-all duration-150"
      style={{
        color:      hov ? B.cyan      : B.navy,
        background: hov ? `linear-gradient(90deg, rgba(26,109,181,0.07), rgba(30,184,208,0.04))` : "transparent",
      }}
      target="_blank"
    >
      <Dot />
      {children}
    </a>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="px-5 pt-3 pb-1 flex items-center gap-2">
      <span className="text-[9px] font-black tracking-[0.18em] uppercase" style={{ color: B.cyan }}>
        {children}
      </span>
      <div className="flex-1 h-px" style={{ background: `linear-gradient(90deg, ${B.cyan}50, transparent)` }} />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   HEADER
   ══════════════════════════════════════════════════════════════════ */
export default function Header() {
  const [mobileOpen,     setMobileOpen]     = useState(false);
  const [aboutOpen,      setAboutOpen]      = useState(false);
  const [facilitiesOpen, setFacilitiesOpen] = useState(false);
  const [commercialOpen, setCommercialOpen] = useState(false);
  const [incubationOpen, setIncubationOpen] = useState(false);
  const [mAboutOpen,     setMAboutOpen]     = useState(false);
  const [mFacOpen,       setMFacOpen]       = useState(false);
  const [scrolled,       setScrolled]       = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      role="banner"
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={{
        background:           scrolled ? B.bgSolid : B.bg,
        backdropFilter:       "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom:         `1px solid ${scrolled ? B.border : "rgba(26,109,181,0.07)"}`,
        boxShadow:            scrolled ? "0 4px 28px rgba(15,37,87,0.09)" : "none",
      }}
    >
      {/* top accent bar */}
      <motion.div
        className="absolute top-0 left-0 h-[2.5px] rounded-b-sm"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.2, ease: [0.22,1,0.36,1], delay: 0.1 }}
        style={{ background: B.grad }}
      />

      <nav className="w-full px-4 sm:px-8 lg:px-12 py-3 flex items-center justify-between max-w-screen-2xl mx-auto">

        {/* Logo */}
        <motion.a
          href="/"
          className="flex items-center shrink-0"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <img src="/logo.png" alt="PSGTech COE INDUTECH logo" className="h-12 w-auto" />
        </motion.a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-0.5">

          <NavItem href="/">Home</NavItem>

          {/* About */}
          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <NavBtn active={aboutOpen}>
              About
              <motion.span animate={{ rotate: aboutOpen ? 180 : 0 }} transition={{ duration: 0.22 }}>
                <ChevronDown className="ml-1 w-3.5 h-3.5" />
              </motion.span>
            </NavBtn>
            <AnimatePresence>
              {aboutOpen && (
                <motion.div variants={flyDown} initial="hidden" animate="visible" exit="exit"
                  className="absolute top-full left-0 mt-2 py-2 w-64 z-20" style={panel}>
                  <DropLink href="/psg-coe-about">PSG Tech's COE Indutech</DropLink>
                  <DropLink href="https://www.psgtech.edu/">PSG College of Technology</DropLink>
                  <DropLink href="https://www.psgtech.edu/department_page.php">Department of Textile Technology</DropLink>
                  <DropLink href="https://www.psgtech.edu/department_page.php">Department of Automobile Engineering</DropLink>

                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Manufacturing */}
          <div
            className="relative"
            onMouseEnter={() => setFacilitiesOpen(true)}
            onMouseLeave={() => { setFacilitiesOpen(false); setCommercialOpen(false); setIncubationOpen(false); }}
          >
            <NavBtn active={facilitiesOpen}>
              Manufacturing
              <motion.span animate={{ rotate: facilitiesOpen ? 180 : 0 }} transition={{ duration: 0.22 }}>
                <ChevronDown className="ml-1 w-3.5 h-3.5" />
              </motion.span>
            </NavBtn>
            <AnimatePresence>
              {facilitiesOpen && (
                <motion.div variants={flyDown} initial="hidden" animate="visible" exit="exit"
                  className="absolute top-full left-0 mt-2 py-2 w-72 z-20" style={panel}>

                  {/* Commercial sub */}
                  <div
                    className="relative"
                    onMouseEnter={() => setCommercialOpen(true)}
                    onMouseLeave={() => setCommercialOpen(false)}
                  >
                    <SubTrigger>Commercial Production</SubTrigger>
                    <AnimatePresence>
                      {commercialOpen && (
                        <motion.div variants={flyRight} initial="hidden" animate="visible" exit="exit"
                          className="absolute left-full top-0 py-2 w-72 z-30" style={panel}>
                          <SectionLabel>Commercial Production</SectionLabel>
                          {commercialLinks.map(it => <DropLink key={it.path} href={it.path}>{it.label}</DropLink>)}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Incubation sub */}
                  <div
                    className="relative"
                    onMouseEnter={() => setIncubationOpen(true)}
                    onMouseLeave={() => setIncubationOpen(false)}
                  >
                    <SubTrigger>Incubation & Prototype</SubTrigger>
                    <AnimatePresence>
                      {incubationOpen && (
                        <motion.div variants={flyRight} initial="hidden" animate="visible" exit="exit"
                          className="absolute left-full top-0 py-2 w-72 z-30" style={panel}>
                          <SectionLabel>Incubation & Prototype</SectionLabel>
                          {incubationLinks.map(it => <DropLink key={it.path} href={it.path}>{it.label}</DropLink>)}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {topLinks.map(l => <NavItem key={l.href} href={l.href}>{l.label}</NavItem>)}
        </div>

        {/* Mobile toggle */}
        <motion.button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          whileTap={{ scale: 0.9 }}
          className="md:hidden p-2 rounded-lg transition-colors duration-200 focus:outline-none"
          style={{ color: B.navy, background: mobileOpen ? `${B.blue}12` : "transparent" }}
        >
          <AnimatePresence mode="wait">
            {mobileOpen ? (
              <motion.div key="x"
                initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <X size={22} />
              </motion.div>
            ) : (
              <motion.div key="menu"
                initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <Menu size={22} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </nav>

      {/* Mobile panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
            style={{ background: "rgba(250,252,255,0.99)", borderTop: `1px solid ${B.border}` }}
          >
            <div className="px-4 py-4 space-y-0.5 max-h-[80vh] overflow-y-auto">

              <MobileLink href="/" onClick={closeMobile}>Home</MobileLink>

              {/* About accordion */}
              <div>
                <MobileAccordion open={mAboutOpen} onClick={() => setMAboutOpen(!mAboutOpen)}>About</MobileAccordion>
                <AnimatePresence>
                  {mAboutOpen && (
                    <motion.div initial={{ height:0, opacity:0 }} animate={{ height:"auto", opacity:1 }}
                      exit={{ height:0, opacity:0 }} transition={{ duration:0.2 }}
                      className="overflow-hidden ml-4 mt-0.5 space-y-0.5">
                      <MobileLink href="/psg-coe-about" onClick={closeMobile}>PSG Tech's COE Indutech</MobileLink>
                      <MobileLink href="https://www.psgtech.edu/" onClick={closeMobile}>PSG College of Technology</MobileLink>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Facilities accordion */}
              <div>
                <MobileAccordion open={mFacOpen} onClick={() => setMFacOpen(!mFacOpen)}>Manufacturing Facility</MobileAccordion>
                <AnimatePresence>
                  {mFacOpen && (
                    <motion.div initial={{ height:0, opacity:0 }} animate={{ height:"auto", opacity:1 }}
                      exit={{ height:0, opacity:0 }} transition={{ duration:0.2 }}
                      className="overflow-hidden ml-4 mt-0.5 space-y-0.5">
                      <p className="px-3 pt-2 pb-0.5 text-[9px] font-black uppercase tracking-[0.18em]" style={{ color: B.cyan }}>
                        Commercial Production
                      </p>
                      {commercialLinks.map(it => <MobileLink key={it.path} href={it.path} onClick={closeMobile}>{it.label}</MobileLink>)}
                      <p className="px-3 pt-3 pb-0.5 text-[9px] font-black uppercase tracking-[0.18em]" style={{ color: B.cyan }}>
                        Incubation & Prototype
                      </p>
                      {incubationLinks.map(it => <MobileLink key={it.path} href={it.path} onClick={closeMobile}>{it.label}</MobileLink>)}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {topLinks.map(l => <MobileLink key={l.href} href={l.href} onClick={closeMobile}>{l.label}</MobileLink>)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ── Desktop sub-components ─────────────────────────────────────── */

function NavItem({ href, children }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="relative px-3 py-2 text-sm font-medium rounded-md whitespace-nowrap overflow-hidden transition-colors duration-150"
      style={{ color: hov ? B.cyan : B.navy }}
    >
      {children}
      <span
        className="absolute bottom-1 left-3 right-3 h-[1.5px] rounded-full transition-transform duration-200 origin-left"
        style={{ background: B.grad, transform: hov ? "scaleX(1)" : "scaleX(0)" }}
      />
    </a>
  );
}

function NavBtn({ children, active }) {
  const [hov, setHov] = useState(false);
  const on = active || hov;
  return (
    <button
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="relative px-3 py-2 flex items-center text-sm font-medium rounded-md whitespace-nowrap transition-colors duration-150"
      style={{ color: on ? B.cyan : B.navy }}
    >
      {children}
      <span
        className="absolute bottom-1 left-3 right-3 h-[1.5px] rounded-full transition-transform duration-200 origin-left"
        style={{ background: B.grad, transform: on ? "scaleX(1)" : "scaleX(0)" }}
      />
    </button>
  );
}

function SubTrigger({ children }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="flex items-center justify-between w-full px-4 py-2.5 mx-1 text-sm rounded-lg transition-all duration-150"
      style={{
        width: "calc(100% - 8px)",
        color: hov ? B.cyan : B.navy,
        background: hov ? `linear-gradient(90deg, rgba(26,109,181,0.07), rgba(30,184,208,0.04))` : "transparent",
      }}
    >
      <span className="flex items-center gap-2.5">
        <Dot />
        {children}
      </span>
      <ChevronDown
        className="w-3.5 h-3.5 -rotate-90 transition-opacity duration-150"
        style={{ opacity: hov ? 0.9 : 0.4, color: hov ? B.cyan : B.navy }}
      />
    </button>
  );
}

function MobileLink({ href, onClick, children }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="flex items-center gap-2.5 px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-150"
      style={{ color: hov ? B.cyan : B.navy, background: hov ? `${B.blue}09` : "transparent" }}
    >
      <Dot />
      {children}
    </a>
  );
}

function MobileAccordion({ children, open, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-semibold rounded-lg transition-all duration-150"
      style={{ color: open ? B.cyan : B.navy, background: open ? `${B.blue}09` : "transparent" }}
    >
      {children}
      <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
        <ChevronDown className="w-4 h-4" style={{ color: open ? B.cyan : B.navy, opacity: open ? 1 : 0.45 }} />
      </motion.div>
    </button>
  );
}
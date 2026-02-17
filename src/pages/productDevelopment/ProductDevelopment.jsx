
import React from "react";
import { motion } from "framer-motion";
import {
  brandColors,
  grad,
  gradText,
  borderColor,
} from "../../components/common/brand.js";
import { productDevData } from "../../components/data/ProductDevData.js";
import { 
  Mail, 
  User, 
  ArrowRight, 
  Layers, 
  Leaf, 
  ShieldCheck, 
  Droplets, 
  Home, 
  Sparkles, 
  Filter 
} from "lucide-react";

// Map titles to specific icons
const getIconForTitle = (title) => {
  const lowerTitle = title.toLowerCase();
  
  if (lowerTitle.includes("coated")) return <Layers className="w-6 h-6" />;
  if (lowerTitle.includes("green")) return <Leaf className="w-6 h-6" />;
  if (lowerTitle.includes("insulation")) return <ShieldCheck className="w-6 h-6" />;
  if (lowerTitle.includes("cleaning")) return <Droplets className="w-6 h-6" />;
  if (lowerTitle.includes("home")) return <Home className="w-6 h-6" />;
  if (lowerTitle.includes("speciality")) return <Sparkles className="w-6 h-6" />;
  if (lowerTitle.includes("filter")) return <Filter className="w-6 h-6" />;
  
  return <Layers className="w-6 h-6" />; // Default fallback
};

function Eyebrow({ children }) {
  return (
    <div
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
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

const ProductDevelopment = () => {
  return (
    <section className="min-h-screen w-full bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Eyebrow>Innovation Hub</Eyebrow>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight text-slate-900 mb-6"
          >
            Product Development <span style={gradText}>Facility</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            COE Indutech is sanctioned to be Center of Excellence for Indutech & Hometech and we concentrate on the following technical textile products. The below list of products are selected as we have testing capabilities related to these products or we have expertise to work on these products.
          </motion.p>
        </div>

        {/* ================= GRID SECTION ================= */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {productDevData.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
              }}
              className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 overflow-hidden"
            >
              <div 
                className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500" 
                style={{ opacity: 0.5 }}
              />
              
              <div className="relative z-10">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white shadow-lg shadow-indigo-200"
                  style={{ background: grad.hero }}
                >
                  {getIconForTitle(item.title)}
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-indigo-700 transition-colors line-clamp-2 min-h-[3.5rem] flex items-center">
                  {item.title}
                </h3>
                
                
                <a 
                  href={item.doc} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 mt-4 group/link"
                >
                  View Brochure
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ================= FEATURE IMAGE & CONTACT ================= */}
        <div className="grid lg:grid-cols-2 gap-8 items-center bg-white rounded-3xl p-4 shadow-xl border border-indigo-50 overflow-hidden">
          
          <motion.div 
            className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="/images/ProdDe2.jpg" 
              alt="Product Development Facility" 
              className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <p className="text-white font-medium text-lg">State-of-the-art manufacturing and testing capabilities</p>
            </div>
          </motion.div>

          <motion.div 
            className="p-6 lg:p-10 text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block p-3 rounded-full bg-indigo-50 mb-6">
              <User className="w-8 h-8 text-indigo-600" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Need Custom Solutions?
            </h2>
            
            <p className="text-slate-600 mb-8 max-w-md mx-auto lg:mx-0">
             Contact our Product Development In-Charge for collaboration and development enquiries.
            </p>

            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-colors">
                 <div className="flex-1">
                    <p className="text-sm text-slate-500 uppercase font-semibold tracking-wider mb-1">Product Development In-Charge</p>
                    <p className="text-lg font-bold text-slate-800">Dr. Senthil Ram</p>
                 </div>
              </div>

               <a 
                href="mailto:pd.int@psgtech.ac.in"
                className="flex items-center justify-center lg:justify-start gap-3 p-4 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 group"
               >
                 <Mail className="w-5 h-5 group-hover:animate-bounce" />
                 <span className="font-semibold">pd.int@psgtech.ac.in</span>
               </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ProductDevelopment;

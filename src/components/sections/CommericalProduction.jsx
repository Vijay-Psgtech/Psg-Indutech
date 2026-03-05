import React from 'react'
import { motion } from "framer-motion";
import { brandColors, grad, gradText } from "../../components/common/brand.js";
import Eyebrow from "../../components/common/Eyebrow";
import { Flame, Layers, Leaf, Mail, User, Zap } from 'lucide-react';

const commProdData = [
    {
        title: "Industrial Wipes Converting Machine",
        pdf: "/docs/comm-prod/Industrial Wipes Converting Brochure.pdf",
        icon: Layers,
        color: "from-gray-400 to-gray-600",
    },
    {
        title: "Natural Fiber Mat Production Line",
        pdf: "/docs/comm-prod/Coir Capabilities Brochure.pdf",
        icon: Leaf,
        color: "from-green-400 to-green-600",
    },
    {
        title: "Hot Melt Coating & Lamination Machine",
        icon: Flame,
        color: "from-red-400 to-red-600",
    },
    {
        title: "Thermal / Chemical Bonding Nonwoven Production Line",
        icon: Zap,
        color: "from-yellow-400 to-yellow-600",
    },
]

export default function CommericalProduction() {
    return (
        <section className="min-h-screen py-20 px-6 bg-gradient-to-b from-indigo-50 via-white to-indigo-50">
            <div className="max-w-7xl mx-auto text-center">
                <Eyebrow>Commercial Production</Eyebrow>
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight text-slate-900 mb-6"
                >
                    Commercial <span style={gradText}>Production</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="mt-4 text-md sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
                >
                    Commercialization of Technical Textile products is capital intensive and hence to help the industry to develop and commercialize the product to understand the market, COE Indutech has invested in full production lines for some technical textile products. List of all the current full production set up is given below:
                </motion.p>

                {/* Data grid Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto my-12">
                    {commProdData.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={idx}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: { type: "spring", stiffness: 50 },
                                    },
                                }}
                                className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 overflow-hidden"
                            >
                                <div
                                    className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"
                                    style={{ opacity: 0.5 }}
                                />

                                <div className="relative z-10">
                                    <div
                                        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white shadow-lg bg-gradient-to-br ${item.color}`}
                                    >
                                        <Icon className="w-6 h-6" />
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-indigo-700 transition-colors line-clamp-2 min-h-[3.5rem] flex items-center">
                                        {item.title}
                                    </h3>

                                    <a
                                        href={item.pdf}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 mt-4 group/link"
                                    >
                                        View List
                                    </a>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Contact Info */}
                <div className="mt-10 sm:mt-20 py-8 sm:py-16 border-t border-indigo-100">
                    <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
                        <p className="font-medium mb-2">For any enquiries, please contact:</p>
                        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 sm:px-6 py-2 sm:py-3 w-full sm:w-auto">
                                <p
                                    className="text-base font-bold flex items-center justify-center gap-2"
                                    style={{ color: brandColors.primary }}
                                >
                                    <User
                                        className="w-4 h-4"
                                        style={{ color: brandColors.secondary }}
                                    />{" "}
                                    Mr. V. Muthu Kumar — Admin
                                </p>
                                <div className="flex flex-col items-center justify-center mt-3 space-y-2 text-gray-700">
                                    <div className="flex items-center gap-2">
                                        <Mail
                                            className="w-4 h-4"
                                            style={{ color: brandColors.secondary }}
                                        />
                                        <a
                                            href="mailto:admin.int@psgtech.ac.in"
                                            className="font-medium transition-all"
                                            style={{ color: brandColors.secondary }}
                                        >
                                            admin.int@psgtech.ac.in
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
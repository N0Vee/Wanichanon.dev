"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/**
 * Client-side FAQ Item with accordion functionality
 * The content is pre-rendered, only interactivity requires client JS
 */
export default function FAQItemClient({ question, answer, index }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border-b border-white/10 last:border-0"
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50 rounded-lg"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
            >
                <h3
                    className="text-lg sm:text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300 pr-4"
                    itemProp="name"
                >
                    {question}
                </h3>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                >
                    <i className="fas fa-chevron-down text-slate-400 group-hover:text-blue-400 transition-colors duration-300" />
                </motion.div>
            </button>
            <motion.div
                id={`faq-answer-${index}`}
                initial={false}
                animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
            >
                <div className="pb-6" itemProp="text">
                    <p className="text-slate-400 text-base leading-relaxed">{answer}</p>
                </div>
            </motion.div>
        </motion.div>
    );
}

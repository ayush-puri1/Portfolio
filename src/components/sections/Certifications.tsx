"use client";

import { motion } from "framer-motion";

const certs = [
  {
    id: "01",
    title: "Cloud Computing",
    issuer: "NPTEL",
    year: "2025",
    link: "#",
  },
  {
    id: "02",
    title: "Concepts of SQL",
    issuer: "Coursera",
    year: "2025",
    link: "#",
  },
  {
    id: "03",
    title: "Foundation of UX Design",
    issuer: "Coursera / Google",
    year: "2025",
    link: "#",
  },
];

export default function Certifications() {
  return (
    <section id="certs" className="bg-flax text-charcoal py-24 md:py-32 border-t border-charcoal/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-20 md:mb-32">
          <h2 className="text-label font-bold tracking-[0.2em] opacity-40 uppercase">
            ( Certifications )
          </h2>
          <p className="text-heading-sm max-w-xl leading-snug tracking-tighter uppercase">
            Validated expertise through industry-recognized programs and academic excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certs.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: parseInt(cert.id) * 0.1 }}
              className="group flex flex-col justify-between p-10 bg-charcoal/5 rounded-3xl border border-charcoal/5 hover:border-charcoal/20 transition-all duration-500 min-h-[320px]"
              data-cursor
            >
              <div>
                <span className="text-micro font-bold opacity-30 mb-8 block">( {cert.id} )</span>
                <h3 className="text-heading-sm uppercase tracking-tighter mb-4 pr-10">
                  {cert.title}
                </h3>
                <p className="text-body-md opacity-60 mb-1">{cert.issuer}</p>
                <p className="text-micro opacity-40">{cert.year}</p>
              </div>

              <div className="mt-12 flex items-center justify-between">
                <a 
                  href={cert.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-label font-bold tracking-widest border-b border-charcoal/20 pb-1 hover:opacity-50 transition-opacity"
                >
                  VIEW CREDENTIAL
                </a>
                <div className="w-10 h-10 rounded-full border border-charcoal/10 flex items-center justify-center group-hover:bg-charcoal group-hover:text-flax transition-all duration-300">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

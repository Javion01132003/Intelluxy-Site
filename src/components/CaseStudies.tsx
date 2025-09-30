import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { caseStudies } from "@/constants/content";

const CaseStudies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-4 border-t border-[hsl(var(--accent))]/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4" style={{ letterSpacing: '0.02em' }}>
            {caseStudies.headline}
          </h2>
          <p className="text-xl text-white/80">
            {caseStudies.subheadline}
          </p>
        </motion.div>

        {/* Case Study Cards */}
        {caseStudies.studies.map((study, studyIndex) => (
          <motion.div
            key={studyIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: studyIndex * 0.2 }}
            className="border-2 border-[hsl(var(--accent))] rounded-xl p-12 mb-12 last:mb-0"
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              {study.client}
            </h3>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-bold text-white mb-3">Challenge</h4>
                <p className="text-base text-white/80 leading-relaxed">
                  {study.challenge}
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-3">Solution</h4>
                <p className="text-base text-white/80 leading-relaxed">
                  {study.solution}
                </p>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {study.results.map((result, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-[hsl(var(--accent))] mb-2">
                    {result.metric}
                  </div>
                  <div className="text-sm text-white/80">
                    {result.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            {study.testimonial && (
              <div className="border-l-4 border-[hsl(var(--accent))] pl-6 mt-8">
                <p className="text-lg italic text-white/90 mb-4 leading-relaxed">
                  "{study.testimonial.quote}"
                </p>
                <div className="text-sm text-white/70">
                  <div className="font-bold">{study.testimonial.author}</div>
                  <div>{study.testimonial.title}</div>
                </div>
              </div>
            )}
          </motion.div>
        ))}

        {/* Revenue Ticker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 overflow-hidden"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            {caseStudies.revenueTickerHeadline}
          </h3>
          <div className="relative">
            <div className="animate-scroll whitespace-nowrap">
              {[...caseStudies.revenueHighlights, ...caseStudies.revenueHighlights].map((highlight, index) => (
                <span
                  key={index}
                  className="inline-block mx-8 text-lg font-mono text-[hsl(var(--accent))]"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;

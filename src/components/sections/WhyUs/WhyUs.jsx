import React, { memo } from "react";
import { Check, X, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import PrimaryButton from "../../ui/Button/PrimaryButton";

// ✅ motion variants moved outside (performance optimization)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

// ✅ memoized item component
const ListItem = memo(({ item, type }) => {
  const Icon = type === "before" ? X : Check;

  return (
    <motion.li variants={itemVariants} className="flex gap-4 items-start">
      <div className="mt-1 shrink-0">
        <Icon
          className={
            type === "before"
              ? "w-5 h-5 text-red-500"
              : "w-5 h-5 text-purple-400"
          }
        />
      </div>
      <span className="leading-relaxed text-[1.1rem] font-medium">{item}</span>
    </motion.li>
  );
});

function WhyUs({ whyUsData }) {
  if (!whyUsData) return null;

  // ✅ destructure once (performance + readability)
  const {
    headingLine1,
    headingHighlight,
    description,
    beforeSection,
    afterSection,
    cta,
  } = whyUsData;

  return (
    <section id="whyUs" className="relative py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="cssContainer relative z-10">
        {/* Header */}
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {headingLine1}
            <br />
            <span className="linearText">{headingHighlight}</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="max-w-175 mx-auto text-lg leading-relaxed font-medium"
          >
            {description}
          </motion.p>
        </motion.header>

        {/* Comparison Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
        >
          {/* BEFORE */}
          <motion.div
            variants={itemVariants}
            className="flex-1 p-8 md:p-10 rounded-3xl bg-base-300/30 backdrop-blur-xl border border-gray-500/10"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-base-100 flex items-center justify-center">
                <X className="text-red-400 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{beforeSection?.title}</h3>
                <p className="text-sm text-red-400 font-bold uppercase mt-1">
                  {beforeSection?.subtitle}
                </p>
              </div>
            </div>

            <ul className="space-y-6">
              {beforeSection?.items?.map((item, index) => (
                <ListItem key={index} item={item} type="before" />
              ))}
            </ul>
          </motion.div>

          {/* Arrow */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:flex items-center justify-center w-16 h-16 rounded-full bg-base-100 border"
          >
            <ArrowRight className="w-6 h-6 text-gray-400" />
          </motion.div>

          {/* AFTER */}
          <motion.div
            variants={itemVariants}
            className="flex-1 p-8 md:p-10 rounded-3xl bg-linear-to-b from-purple-900/20 to-base-300/40 backdrop-blur-xl border border-purple-500/20"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center">
                <Check className="text-purple-400 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{afterSection?.title}</h3>
                <p className="text-sm text-purple-400 font-bold uppercase mt-1">
                  {afterSection?.subtitle}
                </p>
              </div>
            </div>

            <ul className="space-y-6">
              {afterSection?.items?.map((item, index) => (
                <ListItem key={index} item={item} type="after" />
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="flex flex-col items-center gap-6 mt-20"
        >
          <motion.div variants={itemVariants}>
            <PrimaryButton brand={true} className="px-10 py-5 text-lg">
              {cta?.buttonText}
            </PrimaryButton>
          </motion.div>

          <motion.p variants={itemVariants} className="text-sm text-gray-400">
            {cta?.bottomText}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(WhyUs);

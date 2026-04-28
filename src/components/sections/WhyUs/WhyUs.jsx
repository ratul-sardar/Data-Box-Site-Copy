import { Check, X, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import PrimaryButton from "../../ui/Button/PrimaryButton";

const beforeDataBox = [
  "Per-seat licenses and consulting fees put BI out of reach.",
  "ETL projects, SQL queries, and IT backlogs stall momentum.",
  "You submit tickets and wait days for new metrics.",
  "Fragmented tools lead to silos and endless debates.",
  "You miss opportunities because updates come too late.",
];

const afterDataBox = [
  "Affordable, transparent pricing with unlimited users.",
  "Plug-and-play integrations with no coding required.",
  "Self-serve dashboards update instantly in real-time.",
  "A single, unified source of truth aligns your team.",
  "Automated alerts and insights keep you ahead.",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] } },
};

export default function WhyUs({whyUsData}) {
  console.log(whyUsData);

  return (
    <section id="whyUs" className="relative py-24 overflow-hidden">
      {/* Subtle Background glow effects */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="cssContainer relative z-10">
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="header text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
            {whyUsData?.headingLine1}
            <br />
            <span className="linearText">
              {whyUsData?.headingHighlight}
            </span>
          </motion.h2>
          <motion.p variants={itemVariants} className="max-w-175 mx-auto text-lg leading-relaxed font-medium">
            {whyUsData?.description}
          </motion.p>
        </motion.header>

        {/* Comparison Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12 relative"
        >
          {/* Before Card (Pain Points) */}
          <motion.div
            variants={itemVariants}
            className="flex-1 w-full p-8 md:p-10 rounded-3xl bg-base-300/30 backdrop-blur-xl border border-gray-500/10 hover:border-red-500/20 transition-all duration-300 group shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(239,68,68,0.08)] relative overflow-hidden"
          >
            {/* Subtle red indicator */}
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-red-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-base-100 flex items-center justify-center border border-gray-500/10 group-hover:border-red-500/20 transition-colors duration-300">
                <X className="text-red-400/80 w-6 h-6 group-hover:scale-110 group-hover:text-red-500 transition-all" />
              </div>
              <div>
                <h3 className="text-2xl font-bold transition-colors">{whyUsData?.beforeSection?.title}</h3>
                <p className="text-sm text-red-400 font-bold uppercase tracking-wider mt-1">{whyUsData?.beforeSection?.subtitle}</p>
              </div>
            </div>
            <ul className="space-y-6">
              {whyUsData.beforeSection.items.map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex gap-4 transition-colors items-start"
                >
                  <div className="mt-1 shrink-0">
                    <X className="w-5 h-5 text-red-500" />
                  </div>
                  <span className="leading-relaxed text-[1.1rem] font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Divider/Arrow (Desktop) */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:flex items-center justify-center w-16 h-16 rounded-full bg-base-100 border border-gray-600/20 shadow-[0_4px_20px_rgba(0,0,0,0.3)] z-10 shrink-0 self-center relative group"
          >
            <div className="absolute inset-0 rounded-full bg-purple-500/10 scale-0 group-hover:scale-150 transition-transform duration-500 blur-md"></div>
            <ArrowRight className="text-gray-400 group-hover:text-purple-400 group-hover:translate-x-1 transition-all w-6 h-6 relative z-10" />
          </motion.div>

          {/* Divider/Arrow (Mobile) */}
          <motion.div
            variants={itemVariants}
            className="flex lg:hidden items-center justify-center w-12 h-12 rounded-full bg-base-100 border border-gray-600/20 shadow-[0_4px_15px_rgba(0,0,0,0.3)] z-10 -my-8 shrink-0 self-center relative"
          >
            <ArrowRight className="text-gray-400 w-5 h-5 rotate-90" />
          </motion.div>

          {/* After Card (The Solution) */}
          <motion.div
            variants={itemVariants}
            className="flex-1 w-full p-8 md:p-10 rounded-3xl bg-linear-to-b from-purple-900/20 to-base-300/40 backdrop-blur-xl border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 group shadow-[0_8px_40px_rgba(168,85,247,0.1)] hover:shadow-[0_8px_50px_rgba(168,85,247,0.2)] relative overflow-hidden transform hover:-translate-y-2"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-purple-500 to-indigo-500" />
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/20 rounded-full blur-[60px] pointer-events-none group-hover:bg-purple-500/30 transition-all duration-500" />

            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center border border-purple-500/30 group-hover:bg-purple-500/20 transition-colors duration-300">
                <Check className="text-purple-400 w-6 h-6 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h3 className="text-2xl font-bold transition-colors">{whyUsData?.afterSection?.title}</h3>
                <p className="text-sm text-brand font-bold uppercase tracking-wider mt-1">{whyUsData?.afterSection?.subtitle}</p>
              </div>
            </div>

            <ul className="space-y-6 relative z-10">
              {whyUsData.afterSection.items.map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex gap-4 transition-colors items-start"
                >
                  <div className="mt-1 shrink-0">
                    <div className="w-6 h-6 rounded-full bg-purple-500/30 flex items-center justify-center border border-purple-500/50 group-hover:bg-purple-500/50 transition-colors">
                      <Check className="w-4 h-4 text-purple-100" />
                    </div>
                  </div>
                  <span className="leading-relaxed text-[1.1rem] font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="flex flex-col items-center gap-6 mt-20"
        >
          <motion.div variants={itemVariants} className="relative group">
            {/* CTA Glow */}
            <div className="absolute -inset-2  rounded-full blur opacity-30 group-hover:opacity-75 transition duration-500 group-hover:duration-200"></div>
            <div className="relative">
              <PrimaryButton brand={true} className="px-10 py-5 text-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                {whyUsData?.cta?.buttonText}
              </PrimaryButton>
            </div>
          </motion.div>
          <motion.p variants={itemVariants} className="text-sm text-gray-400 font-semibold tracking-wide">
            {whyUsData?.cta?.bottomText}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

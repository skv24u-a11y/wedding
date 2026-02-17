import { motion } from 'framer-motion';

export default function DecorativeDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex items-center justify-center gap-3 my-12"
    >
      <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent to-[#C9A96E]" />
      <span className="text-[#C9A96E] text-2xl">✦</span>
      <div className="w-2 h-2 rounded-full bg-[#C9A96E]" />
      <span className="text-[#C9A96E] text-2xl">✦</span>
      <div className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent to-[#C9A96E]" />
    </motion.div>
  );
}

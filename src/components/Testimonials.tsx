import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "VAV Films captured our wedding day perfectly. Every moment, every emotion - it's all there in the most beautiful way. We can't thank them enough!",
    couple: "Sarah & James Thompson",
    venue: "Byron Bay Beach Resort",
  },
  {
    id: 2,
    quote: "Absolutely stunning work! The attention to detail and the artistic vision they brought to our special day exceeded all expectations.",
    couple: "Emma & David Chen",
    venue: "The Grounds Alexandria",
  },
  {
    id: 3,
    quote: "Professional, creative, and so easy to work with. Our photos are like pieces of art. We'll treasure them forever!",
    couple: "Olivia & Michael Rodriguez",
    venue: "Melbourne Observatory",
  },
  {
    id: 4,
    quote: "The team at VAV Films made us feel so comfortable. The photos are breathtaking and capture the magic of our day perfectly.",
    couple: "Sophie & William Anderson",
    venue: "Gold Coast Hinterland",
  },
  {
    id: 5,
    quote: "From our engagement shoot to the wedding day, every single photo is magazine-worthy. Worth every penny and more!",
    couple: "Isabella & Alexander Kim",
    venue: "Perth Kings Park",
  },
  {
    id: 6,
    quote: "The cinematic quality of our wedding film brought tears to our eyes. VAV Films truly are masters of their craft.",
    couple: "Chloe & Benjamin Wright",
    venue: "Adelaide Hills Vineyard",
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-[#0A0A0A] relative overflow-hidden">
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] dark:opacity-[0.1] pointer-events-none"
        width="600"
        height="600"
        viewBox="0 0 300 300"
      >
        <circle cx="150" cy="150" r="100" fill="none" stroke="currentColor" strokeWidth="1" className="text-[#C9A96E]" />
        {[...Array(8)].map((_, i) => {
          const angle = (i * 45 * Math.PI) / 180;
          const x1 = 150 + Math.cos(angle) * 70;
          const y1 = 150 + Math.sin(angle) * 70;
          const x2 = 150 + Math.cos(angle) * 100;
          const y2 = 150 + Math.sin(angle) * 100;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1" className="text-[#C9A96E]" />;
        })}
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x = 150 + Math.cos(angle) * 50;
          const y = 150 + Math.sin(angle) * 50;
          return <circle key={i} cx={x} cy={y} r="3" fill="currentColor" className="text-[#D4A5A5]" />;
        })}
        <circle cx="150" cy="150" r="10" fill="currentColor" className="text-[#C9A96E]" />
      </svg>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Playfair_Display'] text-4xl md:text-6xl font-bold text-[#1A1410] dark:text-white mb-4">
            What Couples Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Hear from the couples whose love stories we've had the honor to capture
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#F5F0E8] dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:shadow-lg dark:hover:bg-white/10 hover:border-[#C9A96E]/30 dark:hover:border-white/20 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#C9A96E] text-[#C9A96E]"
                  />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              <div className="border-t border-gray-300 dark:border-white/10 pt-4">
                <p className="text-[#1A1410] dark:text-white font-semibold mb-1">
                  {testimonial.couple}
                </p>
                <p className="text-[#C9A96E] text-sm">{testimonial.venue}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

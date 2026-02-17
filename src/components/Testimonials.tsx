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
    <section ref={ref} className="py-32 bg-gradient-to-b from-[#1A1208] to-[#0D0A07] relative overflow-hidden">
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none"
        width="600"
        height="600"
        viewBox="0 0 300 300"
      >
        <circle cx="150" cy="150" r="100" fill="none" stroke="currentColor" strokeWidth="1" className="text-[#D4A843]" />
        {[...Array(8)].map((_, i) => {
          const angle = (i * 45 * Math.PI) / 180;
          const x1 = 150 + Math.cos(angle) * 70;
          const y1 = 150 + Math.sin(angle) * 70;
          const x2 = 150 + Math.cos(angle) * 100;
          const y2 = 150 + Math.sin(angle) * 100;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1" className="text-[#D4A843]" />;
        })}
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x = 150 + Math.cos(angle) * 50;
          const y = 150 + Math.sin(angle) * 50;
          return <circle key={i} cx={x} cy={y} r="3" fill="currentColor" className="text-[#C4687A]" />;
        })}
        <circle cx="150" cy="150" r="10" fill="currentColor" className="text-[#E8721C]" />
      </svg>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-6 py-2 bg-[#D4A843]/10 border border-[#D4A843]/30 rounded-full text-[#D4A843] text-sm tracking-[0.3em] uppercase font-['Montserrat'] font-medium mb-6"
          >
            Testimonials
          </motion.span>

          <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl font-bold text-[#F5ECD7] mb-6">
            Love Stories in Their Words
          </h2>
          <p className="text-xl text-[#C4A882] max-w-3xl mx-auto leading-relaxed">
            Hear from the couples whose love stories we've had the honor to capture.
            <br />
            <span className="text-[#D4A843]">These moments mean everything to us.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-warm-glass rounded-2xl p-8 hover:shadow-2xl hover:shadow-[#D4A843]/10 hover:border-[#D4A843]/40 transition-all duration-500 group"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#D4A843] text-[#D4A843] group-hover:scale-110 transition-transform duration-300"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>

              <p className="text-[#C4A882] mb-8 leading-relaxed italic font-light text-lg">
                "{testimonial.quote}"
              </p>

              <div className="border-t border-[#D4A843]/20 pt-6">
                <p className="text-[#F5ECD7] font-semibold mb-2 font-['Cormorant_Garamond'] text-xl">
                  {testimonial.couple}
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-px bg-[#D4A843]" />
                  <p className="text-[#D4A843] text-sm tracking-wider uppercase font-['Montserrat']">{testimonial.venue}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

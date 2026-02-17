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
    <section ref={ref} className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Playfair_Display'] text-4xl md:text-6xl font-bold text-white mb-4">
            What Couples Say
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
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
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#C9A96E] text-[#C9A96E]"
                  />
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              <div className="border-t border-white/10 pt-4">
                <p className="text-white font-semibold mb-1">
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

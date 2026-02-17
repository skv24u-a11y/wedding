import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xkgjoopp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', date: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] dark:bg-[#0A0A0A] pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl font-bold text-white mb-6">
            Let's Talk
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to capture your special moments? Get in touch today
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-[#C9A96E] to-[#D4A5A5] rounded-3xl p-1 max-w-2xl mx-auto mb-16"
        >
          <div className="bg-[#0A0A0A] rounded-3xl p-8 md:p-12 text-center">
            <Phone className="w-16 h-16 text-[#C9A96E] mx-auto mb-4" />
            <p className="text-gray-400 mb-2 text-sm uppercase tracking-widest">Call us now</p>
            <a
              href="tel:+61412345678"
              className="font-['Playfair_Display'] text-4xl md:text-6xl font-bold text-white hover:text-[#C9A96E] transition-colors block mb-4"
            >
              +61 412 345 678
            </a>
            <p className="text-gray-400 mb-6">
              Available Monday - Saturday, 9am - 6pm AEST
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+61412345678"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#C9A96E] to-[#D4A5A5] text-white font-semibold rounded-full hover:scale-105 transition-transform"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="https://wa.me/61412345678"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="font-['Playfair_Display'] text-3xl font-bold text-white mb-8">
              Send us a message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A96E] transition-colors"
                  placeholder="John & Jane Smith"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A96E] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A96E] transition-colors"
                    placeholder="+61 4XX XXX XXX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-400 mb-2">
                  Wedding Date (if known)
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A96E] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Tell us about your vision
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A96E] transition-colors resize-none"
                  placeholder="Share your story, venue details, style preferences, or any questions you have..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C9A96E] to-[#D4A5A5] text-white font-semibold rounded-full hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-400 text-center"
                >
                  Message sent successfully! We'll get back to you soon.
                </motion.p>
              )}

              {submitStatus === 'error' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-400 text-center"
                >
                  Something went wrong. Please try calling us instead.
                </motion.p>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-['Playfair_Display'] text-3xl font-bold text-white mb-8">
                Other ways to reach us
              </h2>

              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#C9A96E]/20 rounded-full">
                      <Mail className="w-6 h-6 text-[#C9A96E]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Email</h3>
                      <a
                        href="mailto:info@vavfilms.com"
                        className="text-gray-400 hover:text-[#C9A96E] transition-colors"
                      >
                        info@vavfilms.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#C9A96E]/20 rounded-full">
                      <MapPin className="w-6 h-6 text-[#C9A96E]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Studio Location</h3>
                      <p className="text-gray-400">
                        Level 5, 123 George Street
                        <br />
                        Sydney, NSW 2000
                        <br />
                        Australia
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#C9A96E]/20 rounded-full">
                      <MessageCircle className="w-6 h-6 text-[#C9A96E]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Social Media</h3>
                      <div className="space-y-2">
                        <a
                          href="https://instagram.com/vavfilms"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-gray-400 hover:text-[#C9A96E] transition-colors"
                        >
                          @vavfilms on Instagram
                        </a>
                        <a
                          href="https://facebook.com/vavfilms"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-gray-400 hover:text-[#C9A96E] transition-colors"
                        >
                          VAV Films on Facebook
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#C9A96E]/10 to-[#D4A5A5]/10 border border-[#C9A96E]/20 rounded-2xl p-6">
              <h3 className="font-['Playfair_Display'] text-xl font-bold text-white mb-3">
                Quick Response Guarantee
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                We understand how important timely responses are when planning your wedding. We aim to respond to all inquiries within 24 hours, often much sooner. For urgent matters, please call us directly.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { 
  Camera, 
  Instagram, 
  Youtube, 
  Facebook, 
  Twitter,
  Phone,
  Mail,
  MapPin,
  Heart,
  Clock,
  Calendar
} from 'lucide-react';

const Footer = () => {
  const whatsappControls = useAnimation();

  useEffect(() => {
    const animateWhatsApp = async () => {
      while (true) {
        await whatsappControls.start({
          y: [-5, 0, -5],
          transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }
        });
        await new Promise(resolve => setTimeout(resolve, 10000));
      }
    };

    animateWhatsApp();
  }, []);

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="https://i.ibb.co/S4hwn689/logo.png" 
                alt="Vav Films Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold text-white">
                  VAV Films
                </h3>
                <p className="text-sm text-white">Production</p>
              </div>
            </div>
            <p className="text-gray-400">
              Crafting timeless memories through the lens of creativity and passion.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://www.facebook.com/vavfilms" icon={Facebook} />
              <SocialLink href="https://www.instagram.com/vavfilms/profilecard/" icon={Instagram} />
              <SocialLink href="https://twitter.com/vaibhav_a_vyas" icon={Twitter} />
              <SocialLink href="https://youtube.com/@vaibhavvyasofficial" icon={Youtube} />
            </div>
          </motion.div>

          {/* Services Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold">Our Expertise</h3>
            <div className="grid grid-cols-2 gap-4">
              <ServiceCard icon={Heart} title="Weddings" />
              <ServiceCard icon={Calendar} title="Pre-Wedding" />
              <ServiceCard icon={Camera} title="Events" />
              <ServiceCard icon={Clock} title="Portraits" />
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold">Get in Touch</h3>
            <div className="space-y-4">
              <ContactInfo icon={Phone} text="+91 9979892647" />
              <ContactInfo icon={Mail} text="info@vavfilms.com" />
              <ContactInfo icon={MapPin} text="315 Agrawal mall, Ahmedabad" />
            </div>
          </motion.div>

          {/* Working Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold">Studio Hours</h3>
            <div className="space-y-3 text-gray-400">
              <p className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 6:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 AM - 4:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Sunday</span>
                <span>By Appointment</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Vav Films Production. All rights reserved.
            </p>
            <motion.p 
              className="text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              Crafted with <Heart className="h-4 w-4 inline text-primary mx-1" /> in Gujarat, India
            </motion.p>
          </div>
        </div>

        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/919979892647"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-200"
          animate={whatsappControls}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Phone className="h-6 w-6" />
        </motion.a>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon: Icon }: { href: string; icon: React.ElementType }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition-colors duration-200"
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
  >
    <Icon className="h-5 w-5" />
  </motion.a>
);

const ServiceCard = ({ icon: Icon, title }: { icon: React.ElementType; title: string }) => (
  <motion.div
    className="flex items-center space-x-2 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon className="h-5 w-5 text-primary" />
    <span className="text-sm">{title}</span>
  </motion.div>
);

const ContactInfo = ({ icon: Icon, text }: { icon: React.ElementType; text: string }) => (
  <div className="flex items-center space-x-3 text-gray-400">
    <Icon className="h-5 w-5 text-primary" />
    <span>{text}</span>
  </div>
);

export default Footer;
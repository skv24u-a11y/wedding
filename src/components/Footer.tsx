import React from 'react';
import { motion } from 'framer-motion';
import {
  Camera,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  Phone,
  Mail,
  MapPin,
  Heart
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0D0A07] to-[#000000] text-[#F5ECD7] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#D4A843] rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#E8721C] rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="https://i.ibb.co/S4hwn689/logo.png"
                alt="VAV Films Logo"
                className="h-14 w-auto"
              />
              <div>
                <h3 className="text-2xl font-bold text-[#F5ECD7] font-['Cormorant_Garamond']">
                  VAV FILMS
                </h3>
                <p className="text-xs text-[#D4A843] tracking-[0.3em] uppercase font-['Montserrat']">Production</p>
              </div>
            </div>
            <p className="text-[#C4A882] leading-relaxed">
              Crafting timeless visual poetry through the lens of passion and artistry.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://www.facebook.com/vavfilms" icon={Facebook} />
              <SocialLink href="https://www.instagram.com/vavfilms/profilecard/" icon={Instagram} />
              <SocialLink href="https://twitter.com/vaibhav_a_vyas" icon={Twitter} />
              <SocialLink href="https://youtube.com/@vaibhavvyasofficial" icon={Youtube} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-[#F5ECD7] font-['Cormorant_Garamond']">Quick Links</h3>
            <div className="space-y-3">
              <FooterLink to="/" text="Home" />
              <FooterLink to="/portfolio" text="Portfolio" />
              <FooterLink to="/packages" text="Packages" />
              <FooterLink to="/contact" text="Contact" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-[#F5ECD7] font-['Cormorant_Garamond']">Get in Touch</h3>
            <div className="space-y-4">
              <ContactInfo icon={Phone} text="+91 9979892647" href="tel:+919979892647" />
              <ContactInfo icon={Mail} text="info@vavfilms.com" href="mailto:info@vavfilms.com" />
              <ContactInfo icon={MapPin} text="315 Agrawal mall, Ahmedabad" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-[#F5ECD7] font-['Cormorant_Garamond']">Studio Hours</h3>
            <div className="space-y-3 text-[#C4A882] font-['Montserrat'] text-sm">
              <p className="flex justify-between">
                <span>Mon - Fri</span>
                <span className="text-[#D4A843]">9 AM - 6 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Saturday</span>
                <span className="text-[#D4A843]">10 AM - 4 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Sunday</span>
                <span className="text-[#D4A843]">By Appointment</span>
              </p>
            </div>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-[#D4A843]/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#C4A882] text-sm font-['Montserrat']">
              © 2025 VAV Films Production. All rights reserved.
            </p>
            <motion.p
              className="text-[#C4A882] text-sm font-['Montserrat'] flex items-center gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              Crafted with <Heart className="h-4 w-4 inline text-[#C4687A] fill-[#C4687A]" /> in Gujarat, India
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon: Icon }: { href: string; icon: React.ElementType }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-[#D4A843]/10 border border-[#D4A843]/30 flex items-center justify-center text-[#D4A843] hover:bg-[#D4A843]/20 hover:border-[#D4A843]/50 transition-all duration-300"
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon className="h-5 w-5" />
  </motion.a>
);

const FooterLink = ({ to, text }: { to: string; text: string }) => (
  <Link
    to={to}
    className="block text-[#C4A882] hover:text-[#D4A843] transition-colors duration-300 font-['Montserrat'] text-sm"
  >
    {text}
  </Link>
);

const ContactInfo = ({ icon: Icon, text, href }: { icon: React.ElementType; text: string; href?: string }) => {
  const content = (
    <>
      <Icon className="h-5 w-5 text-[#D4A843] flex-shrink-0" />
      <span className="font-['Montserrat'] text-sm">{text}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="flex items-center space-x-3 text-[#C4A882] hover:text-[#D4A843] transition-colors duration-300"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="flex items-center space-x-3 text-[#C4A882]">
      {content}
    </div>
  );
};

export default Footer;
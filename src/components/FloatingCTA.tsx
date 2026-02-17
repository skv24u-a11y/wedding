import { Phone, MessageCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FloatingCTA() {
  return (
    <>
      <a
        href="tel:+61412345678"
        className="hidden md:flex fixed bottom-8 right-8 z-40 items-center gap-2 px-6 py-4 bg-gradient-to-r from-[#C9A96E] to-[#D4A5A5] text-white font-semibold rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 hover:shadow-[#C9A96E]/50"
      >
        <Phone className="w-5 h-5" />
        Book Now
      </a>

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-xl border-t border-white/10 p-4 shadow-2xl">
        <div className="flex gap-3 max-w-lg mx-auto">
          <a
            href="tel:+61412345678"
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-[#C9A96E] to-[#D4A5A5] text-white font-semibold rounded-full hover:scale-105 transition-transform"
          >
            <Phone className="w-4 h-4" />
            Call
          </a>

          <a
            href="https://wa.me/61412345678"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>

          <Link
            to="/contact"
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all"
          >
            <Mail className="w-4 h-4" />
            Quote
          </Link>
        </div>
      </div>
    </>
  );
}

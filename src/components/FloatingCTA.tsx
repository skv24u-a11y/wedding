import { Phone, MessageCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FloatingCTA() {
  return (
    <>
      <a
        href="tel:+919876543210"
        className="hidden md:flex fixed bottom-8 right-8 z-40 items-center gap-2 px-6 py-4 bg-gradient-to-r from-[#D4A843] to-[#E8721C] text-[#0D0A07] font-bold tracking-wider uppercase text-sm rounded-full shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-[#D4A843]/60 font-['Montserrat']"
      >
        <Phone className="w-5 h-5" />
        Book Now
      </a>

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#1A1208]/95 backdrop-blur-xl border-t border-[#D4A843]/20 p-4 shadow-2xl pb-safe">
        <div className="flex gap-3 max-w-lg mx-auto">
          <a
            href="tel:+919876543210"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-[#D4A843] to-[#E8721C] text-[#0D0A07] font-bold tracking-wider uppercase text-xs rounded-full hover:scale-105 transition-transform shadow-lg shadow-[#D4A843]/30 font-['Montserrat']"
          >
            <Phone className="w-4 h-4" />
            Call
          </a>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[#D4A843]/10 border border-[#D4A843]/30 text-[#F5ECD7] font-semibold tracking-wider uppercase text-xs rounded-full hover:bg-[#D4A843]/20 transition-all font-['Montserrat']"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>

          <Link
            to="/contact"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[#D4A843]/10 border border-[#D4A843]/30 text-[#F5ECD7] font-semibold tracking-wider uppercase text-xs rounded-full hover:bg-[#D4A843]/20 transition-all font-['Montserrat']"
          >
            <Mail className="w-4 h-4" />
            Quote
          </Link>
        </div>
      </div>
    </>
  );
}

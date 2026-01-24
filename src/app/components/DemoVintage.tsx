import { Link } from 'react-router-dom';
import { ArrowLeft, Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export default function DemoVintage() {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4 bg-amber-50">
      {/* Vintage paper texture overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Back button */}
      <Link 
        to="/" 
        className="absolute top-6 left-6 flex items-center gap-2 text-amber-800 hover:text-amber-900 transition-colors z-20"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="font-serif">Back to Gallery</span>
      </Link>

      {/* Vintage Card */}
      <div className="relative z-10 bg-amber-50 border-4 border-amber-800 rounded-sm shadow-2xl p-8 md:p-12 max-w-md w-full">
        {/* Corner decorations */}
        <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-amber-700"></div>
        <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-amber-700"></div>
        <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-amber-700"></div>
        <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-amber-700"></div>

        {/* Profile Photo */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-4 border-amber-800 shadow-lg overflow-hidden bg-amber-100">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" 
                alt="Raghav Sharma"
                className="w-full h-full object-cover grayscale-[30%] sepia-[20%]"
              />
            </div>
          </div>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center mb-4">
          <div className="h-px bg-amber-700 w-12"></div>
          <div className="w-2 h-2 bg-amber-700 rotate-45 mx-2"></div>
          <div className="h-px bg-amber-700 w-12"></div>
        </div>

        {/* Name and Role */}
        <div className="text-center mb-4">
          <h1 className="text-4xl font-serif text-amber-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
            Raghav Sharma
          </h1>
          <p className="text-lg font-serif text-amber-800 tracking-wide" style={{ fontFamily: 'Playfair Display, serif' }}>
            Heritage Photographer
          </p>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center mb-6">
          <div className="h-px bg-amber-700 w-12"></div>
          <div className="w-2 h-2 bg-amber-700 rotate-45 mx-2"></div>
          <div className="h-px bg-amber-700 w-12"></div>
        </div>

        {/* Bio */}
        <p className="text-amber-900 text-center mb-8 leading-relaxed font-serif italic text-sm">
          Capturing timeless moments through the lens of tradition and artistry. 
          Specializing in architectural heritage and cultural documentation since 2010.
        </p>

        {/* View My Work Button */}
        <button className="w-full bg-amber-800 hover:bg-amber-900 text-amber-50 py-4 rounded-sm transition-all duration-300 font-serif tracking-wide shadow-md hover:shadow-lg mb-6">
          View My Work
        </button>

        {/* Contact Info */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <a 
            href="mailto:raghav@example.com"
            className="flex items-center gap-2 text-amber-800 hover:text-amber-900 transition-colors font-serif"
          >
            <Mail className="w-4 h-4" />
            <span className="text-sm">Email</span>
          </a>
          <a 
            href="tel:+911234567890"
            className="flex items-center gap-2 text-amber-800 hover:text-amber-900 transition-colors font-serif"
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm">Call</span>
          </a>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center mb-6">
          <div className="h-px bg-amber-700 w-full"></div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4">
          <a 
            href="#" 
            className="w-12 h-12 border-2 border-amber-800 hover:bg-amber-800 rounded-full flex items-center justify-center text-amber-800 hover:text-amber-50 transition-all duration-300"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a 
            href="#" 
            className="w-12 h-12 border-2 border-amber-800 hover:bg-amber-800 rounded-full flex items-center justify-center text-amber-800 hover:text-amber-50 transition-all duration-300"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a 
            href="#" 
            className="w-12 h-12 border-2 border-amber-800 hover:bg-amber-800 rounded-full flex items-center justify-center text-amber-800 hover:text-amber-50 transition-all duration-300"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a 
            href="#" 
            className="w-12 h-12 border-2 border-amber-800 hover:bg-amber-800 rounded-full flex items-center justify-center text-amber-800 hover:text-amber-50 transition-all duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Vintage stamp effect */}
        <div className="absolute bottom-4 right-4 w-16 h-16 border-2 border-amber-700 rounded-full flex items-center justify-center text-amber-700 text-xs font-serif transform rotate-12 opacity-40">
          Est.<br/>2010
        </div>
      </div>
    </div>
  );
}

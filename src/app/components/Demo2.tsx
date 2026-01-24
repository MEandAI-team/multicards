import { Link } from 'react-router-dom';
import { ArrowLeft, Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export default function Demo2() {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Gradient orbs in background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/30 to-blue-600/30"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      {/* Back button */}
      <Link 
        to="/" 
        className="absolute top-6 left-6 flex items-center gap-2 text-white/80 hover:text-white transition-colors z-20"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Gallery</span>
      </Link>

      {/* Glassmorphism Card */}
      <div className="relative z-10 backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full">
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-400/20 to-pink-400/20 blur-xl"></div>
        
        <div className="relative">
          {/* Profile Photo */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 p-1 shadow-lg shadow-purple-500/50">
                <div className="w-full h-full rounded-full bg-slate-800/50 backdrop-blur-sm flex items-center justify-center text-white overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" 
                    alt="Neha Kapoor"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-pink-500 rounded-full border-4 border-purple-900 shadow-lg"></div>
            </div>
          </div>

          {/* Name and Role */}
          <div className="text-center mb-6">
            <h1 className="text-3xl text-white mb-2 drop-shadow-lg">Neha Kapoor</h1>
            <p className="text-lg text-purple-200">
              Makeup Artist & Beauty Influencer
            </p>
          </div>

          {/* Bio */}
          <p className="text-white/80 text-center mb-8 leading-relaxed">
            Creating stunning looks and empowering confidence through beauty. 
            Specializing in bridal makeup and fashion editorial work.
          </p>

          {/* Book Appointment Button */}
          <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-pink-500/50 mb-6">
            Book Appointment
          </button>

          {/* Contact Info */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <a 
              href="mailto:neha@example.com"
              className="flex items-center gap-2 text-white/70 hover:text-purple-300 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">Email</span>
            </a>
            <a 
              href="tel:+911234567890"
              className="flex items-center gap-2 text-white/70 hover:text-purple-300 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">Call</span>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 pt-6 border-t border-white/10">
            <a 
              href="#" 
              className="w-12 h-12 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-white hover:text-purple-300 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-white hover:text-purple-300 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-white hover:text-purple-300 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-white hover:text-purple-300 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

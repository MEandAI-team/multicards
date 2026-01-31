import { Link } from 'react-router-dom';
import { ArrowLeft, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, Palette, Sparkles } from 'lucide-react';

export default function Demo3() {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4" style={{ fontFamily: 'Quicksand, sans-serif' }}>
      {/* Colorful abstract background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-cyan-400 to-blue-500">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,107,107,0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(255,193,7,0.3) 0%, transparent 50%),
                           radial-gradient(circle at 40% 20%, rgba(156,39,176,0.3) 0%, transparent 50%)`,
        }}></div>
      </div>

      {/* Back button */}
      <Link 
        to="/" 
        className="absolute top-6 left-6 flex items-center gap-2 text-white hover:text-gray-100 transition-colors z-20 font-medium"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Gallery</span>
      </Link>

      {/* Profile card */}
      <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full">
        {/* Colorful top banner */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 rounded-t-3xl"></div>
        
        <div className="relative">
          {/* Profile Photo */}
          <div className="flex justify-center mb-6 -mt-16">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-white p-2 shadow-xl">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center text-white overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop" 
                    alt="Priya Desai"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-yellow-400 rounded-full border-4 border-white flex items-center justify-center">
                <Palette className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Name and Role */}
          <div className="text-center mb-6">
            <h1 className="text-3xl text-gray-900 mb-2 font-bold">Priya Desai</h1>
            <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 font-semibold">
              Creative Designer & Artist
            </p>
          </div>

          {/* Colorful divider */}
          <div className="flex justify-center gap-2 mb-6">
            <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
          </div>

          {/* Bio */}
          <p className="text-gray-600 text-center mb-8 leading-relaxed">
            Bringing imagination to life through bold colors and innovative designs. 
            Specializing in branding, illustration, and digital art.
          </p>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg font-medium">
              View Portfolio
            </button>
            <button className="bg-gradient-to-r from-teal-400 to-blue-400 hover:from-teal-500 hover:to-blue-500 text-white py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg font-medium">
              Hire Me
            </button>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-200">
            <a 
              href="mailto:priya@example.com"
              className="flex items-center gap-2 text-gray-600 hover:text-purple-500 transition-colors"
            >
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <Mail className="w-4 h-4 text-purple-500" />
              </div>
              <span className="text-sm font-medium">Email</span>
            </a>
            <a 
              href="tel:+911234567890"
              className="flex items-center gap-2 text-gray-600 hover:text-purple-500 transition-colors"
            >
              <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
                <Phone className="w-4 h-4 text-pink-500" />
              </div>
              <span className="text-sm font-medium">Call</span>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-3">
            <a 
              href="#" 
              className="w-11 h-11 bg-gradient-to-br from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 rounded-xl flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 shadow-md"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-11 h-11 bg-gradient-to-br from-purple-400 to-purple-500 hover:from-purple-500 hover:to-purple-600 rounded-xl flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 shadow-md"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-11 h-11 bg-gradient-to-br from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600 rounded-xl flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 shadow-md"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-11 h-11 bg-gradient-to-br from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 rounded-xl flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 shadow-md"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Decorative sparkles */}
        <Sparkles className="absolute top-4 right-4 w-6 h-6 text-yellow-400 opacity-70" />
        <Sparkles className="absolute bottom-4 left-4 w-5 h-5 text-pink-400 opacity-70" />
      </div>
    </div>
  );
}

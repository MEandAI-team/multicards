import { Link } from 'react-router-dom';
import { ArrowLeft, Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export default function Demo1() {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
      {/* Animated gradient background with blurred blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-500"></div>
      </div>

      {/* Back button */}
      <Link 
        to="/" 
        className="absolute top-6 left-6 flex items-center gap-2 text-white hover:text-gray-200 transition-colors z-20"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Gallery</span>
      </Link>

      {/* Profile card */}
      <div className="relative z-10 bg-slate-900 rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full backdrop-blur-sm">
        {/* Profile Photo */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-white overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
                  alt="Aarav Mehta"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full border-4 border-slate-900"></div>
          </div>
        </div>

        {/* Name and Role */}
        <div className="text-center mb-6">
          <h1 className="text-3xl text-white mb-2">Aarav Mehta</h1>
          <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Fitness Coach & Nutrition Expert
          </p>
        </div>

        {/* Bio */}
        <p className="text-gray-300 text-center mb-8 leading-relaxed">
          Transforming lives through personalized fitness programs and nutrition guidance. 
          10+ years of experience helping clients achieve their health goals.
        </p>

        {/* Hire Me Button */}
        <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-6">
          Hire Me
        </button>

        {/* Contact Info */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <a 
            href="mailto:aarav@example.com"
            className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span className="text-sm">Email Me</span>
          </a>
          <a 
            href="tel:+911234567890"
            className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm">Call Me</span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 pt-6 border-t border-gray-700">
          <a 
            href="#" 
            className="w-12 h-12 bg-slate-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a 
            href="#" 
            className="w-12 h-12 bg-slate-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a 
            href="#" 
            className="w-12 h-12 bg-slate-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a 
            href="#" 
            className="w-12 h-12 bg-slate-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}

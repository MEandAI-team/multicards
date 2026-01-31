import { Link } from 'react-router-dom';
import { ArrowLeft, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, Code, Cpu, Zap } from 'lucide-react';

export default function Demo4() {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4 bg-slate-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Tech grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}></div>
        {/* Glowing orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      {/* Back button */}
      <Link 
        to="/" 
        className="absolute top-6 left-6 flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors z-20 font-medium"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Gallery</span>
      </Link>

      {/* Profile card */}
      <div className="relative z-10 bg-slate-800/80 backdrop-blur-xl border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-500/20 p-8 md:p-12 max-w-md w-full">
        {/* Neon top accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500"></div>

        {/* Tech badge */}
        <div className="absolute -top-4 right-8 bg-cyan-500 text-slate-900 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-cyan-500/50 flex items-center gap-1">
          <Zap className="w-3 h-3" />
          Tech Pro
        </div>
        
        {/* Profile Photo */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-1 shadow-lg shadow-cyan-500/50">
              <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
                  alt="Arjun Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg">
              <Code className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        {/* Name and Role */}
        <div className="text-center mb-6">
          <h1 className="text-3xl text-white mb-2 font-bold">Arjun Kumar</h1>
          <p className="text-lg text-cyan-400 font-semibold mb-2">
            Full Stack Developer
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
            <Cpu className="w-4 h-4" />
            <span>React • Node.js • Cloud</span>
          </div>
        </div>

        {/* Tech stats */}
        <div className="grid grid-cols-3 gap-4 mb-8 pb-6 border-b border-cyan-500/20">
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400">8+</div>
            <div className="text-xs text-gray-400 mt-1">Years Exp</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400">150+</div>
            <div className="text-xs text-gray-400 mt-1">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400">50+</div>
            <div className="text-xs text-gray-400 mt-1">Clients</div>
          </div>
        </div>

        {/* Bio */}
        <p className="text-gray-300 text-center mb-8 leading-relaxed text-sm">
          Building scalable web applications and innovative solutions. 
          Passionate about clean code, performance optimization, and cutting-edge technologies.
        </p>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30 font-medium">
            View Projects
          </button>
          <button className="bg-slate-700 hover:bg-slate-600 border border-cyan-500/50 text-cyan-400 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 font-medium">
            Download CV
          </button>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-cyan-500/20">
          <a 
            href="mailto:arjun@example.com"
            className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
          >
            <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
              <Mail className="w-4 h-4 text-cyan-400" />
            </div>
            <span className="text-sm font-medium">Email</span>
          </a>
          <a 
            href="tel:+911234567890"
            className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
          >
            <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
              <Phone className="w-4 h-4 text-cyan-400" />
            </div>
            <span className="text-sm font-medium">Call</span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-3">
          <a 
            href="#" 
            className="w-11 h-11 bg-slate-700 hover:bg-gradient-to-br hover:from-blue-500 hover:to-cyan-500 border border-cyan-500/30 rounded-xl flex items-center justify-center text-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-110"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a 
            href="#" 
            className="w-11 h-11 bg-slate-700 hover:bg-gradient-to-br hover:from-blue-500 hover:to-cyan-500 border border-cyan-500/30 rounded-xl flex items-center justify-center text-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-110"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a 
            href="#" 
            className="w-11 h-11 bg-slate-700 hover:bg-gradient-to-br hover:from-blue-500 hover:to-cyan-500 border border-cyan-500/30 rounded-xl flex items-center justify-center text-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-110"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a 
            href="#" 
            className="w-11 h-11 bg-slate-700 hover:bg-gradient-to-br hover:from-blue-500 hover:to-cyan-500 border border-cyan-500/30 rounded-xl flex items-center justify-center text-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-110"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Corner accent */}
        <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-cyan-500/30 rounded-br-2xl"></div>
      </div>
    </div>
  );
}

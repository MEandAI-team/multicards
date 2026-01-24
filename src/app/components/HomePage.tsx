import { Link } from 'react-router-dom';
import { Sparkles, Palette, Camera } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#ffeedb] flex items-center justify-center p-4">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-12">
          <h1 className="mb-4 text-4xl font-bold text-[#493129]">
            MeAndAI – Digital Visiting Card Designs
          </h1>
          <p className="text-[#8b597b] text-lg font-medium">
            Choose a design for your personal bio website
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Demo 1 Card */}
          <Link to="/demo1" className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 border border-[#ffdec7]">
              <div className="h-48 bg-gradient-to-br from-[#efa3a0] to-[#ffdec7] flex items-center justify-center">
                <Sparkles className="w-20 h-20 text-[#493129] opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-[#493129]">Modern Gradient Card</h3>
                <p className="text-sm text-[#8b597b] mb-4">
                  Vibrant and contemporary design with colorful gradients and smooth animations
                </p>
                <div className="flex items-center text-[#493129] font-semibold group-hover:text-[#efa3a0] transition-colors">
                  <span className="mr-2">View Demo</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Demo 2 Card */}
          <Link to="/demo2" className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 border border-[#ffdec7]">
              <div className="h-48 bg-gradient-to-br from-[#8b597b] to-[#493129] flex items-center justify-center">
                <Palette className="w-20 h-20 text-[#ffdec7] opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-[#493129]">Glassmorphism Dark Card</h3>
                <p className="text-sm text-[#8b597b] mb-4">
                  Modern glass effect with dark theme and elegant blur aesthetics
                </p>
                <div className="flex items-center text-[#493129] font-semibold group-hover:text-[#efa3a0] transition-colors">
                  <span className="mr-2">View Demo</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Vintage Card */}
          <Link to="/vintage" className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 border border-[#ffdec7]">
              <div className="h-48 bg-gradient-to-br from-[#ffdec7] to-[#ffeedb] flex items-center justify-center">
                <Camera className="w-20 h-20 text-[#493129] opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-[#493129]">Vintage Classic Card</h3>
                <p className="text-sm text-[#8b597b] mb-4">
                  Timeless design with aged paper texture and elegant serif typography
                </p>
                <div className="flex items-center text-[#493129] font-semibold group-hover:text-[#efa3a0] transition-colors">
                  <span className="mr-2">View Demo</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-[#8b597b]">
            All designs are responsive and optimized for mobile devices
          </p>
        </div>
      </div>
    </div>
  );
}

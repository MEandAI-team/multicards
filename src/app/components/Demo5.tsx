import { Link } from 'react-router-dom';
import { ArrowLeft, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, Briefcase, Award } from 'lucide-react';

export default function Demo5() {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Elegant pattern background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 70% 70%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)`,
        }}></div>
      </div>

      {/* Back button */}
      <Link 
        to="/" 
        className="absolute top-6 left-6 flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors z-20 font-medium"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Gallery</span>
      </Link>

      {/* Profile card */}
      <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full overflow-hidden">
        {/* Elegant top section */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-r from-blue-600 to-indigo-700"></div>
        
        <div className="relative">
          {/* Professional badge */}
          <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1">
            <Award className="w-3 h-3" />
            Executive
          </div>

          {/* Profile Photo */}
          <div className="flex justify-center mb-6 mt-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-2xl bg-white p-2 shadow-xl">
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" 
                    alt="Vikram Malhotra"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Name and Role */}
          <div className="text-center mb-6">
            <h1 className="text-3xl text-gray-900 mb-2 font-bold">Vikram Malhotra</h1>
            <p className="text-lg text-blue-600 font-semibold mb-2">
              Chief Executive Officer
            </p>
            <p className="text-sm text-gray-600 font-medium">
              Tech Innovations Corp.
            </p>
          </div>

          {/* Professional divider */}
          <div className="flex justify-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-48"></div>
          </div>

          {/* Key highlights */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center p-3 bg-blue-50 rounded-xl">
              <div className="text-2xl font-bold text-blue-600">15+</div>
              <div className="text-xs text-gray-600 mt-1">Years</div>
            </div>
            <div className="text-center p-3 bg-indigo-50 rounded-xl">
              <div className="text-2xl font-bold text-indigo-600">200+</div>
              <div className="text-xs text-gray-600 mt-1">Deals</div>
            </div>
            <div className="text-center p-3 bg-blue-50 rounded-xl">
              <div className="text-2xl font-bold text-blue-600">50M+</div>
              <div className="text-xs text-gray-600 mt-1">Revenue</div>
            </div>
          </div>

          {/* Bio */}
          <p className="text-gray-600 text-center mb-8 leading-relaxed text-sm">
            Strategic leader with proven track record in scaling businesses and driving innovation. 
            Expertise in technology, finance, and strategic partnerships.
          </p>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-xl transition-all duration-300 shadow-lg font-medium">
              Schedule Meeting
            </button>
            <button className="bg-white hover:bg-gray-50 border-2 border-blue-600 text-blue-600 py-3 rounded-xl transition-all duration-300 font-medium">
              View Profile
            </button>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-200">
            <a 
              href="mailto:vikram@example.com"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <Mail className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Email</div>
                <div className="text-sm font-medium">Contact</div>
              </div>
            </a>
            <a 
              href="tel:+911234567890"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                <Phone className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Phone</div>
                <div className="text-sm font-medium">Call</div>
              </div>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-3">
            <a 
              href="#" 
              className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 shadow-md"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 rounded-xl flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 shadow-md"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-xl flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 shadow-md"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 bg-gradient-to-br from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 rounded-xl flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 shadow-md"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Professional footer */}
          <div className="text-center mt-8 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              Member of Forbes 40 Under 40 • Harvard Business School Alumni
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

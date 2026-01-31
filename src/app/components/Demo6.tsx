import { Link } from 'react-router-dom';
import { ArrowLeft, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Award, Briefcase, Star } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export default function Demo6() {
  const workPhotos = [
    'https://images.unsplash.com/photo-1758613653231-bae4e1131dde?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1760071744047-5542cbfda184?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1695067438561-75492f7b6a9c?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1611456531646-2a68d6df2723?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1719176010035-17729577d496?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1597434429739-2574d7e06807?w=400&h=400&fit=crop'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-indigo-50 py-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Back button */}
      <Link 
        to="/" 
        className="fixed top-6 left-6 flex items-center gap-2 text-purple-700 hover:text-purple-900 transition-colors z-20 font-medium bg-white px-4 py-2 rounded-full shadow-lg"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Gallery</span>
      </Link>

      {/* Premium Badge */}
      <div className="fixed top-6 right-6 z-20">
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1">
          <Star className="w-4 h-4 fill-white" />
          Premium Design
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-20">
        {/* Profile Card Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left: Profile Photo & Info */}
            <div className="md:col-span-1 text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-6">
                <div className="relative">
                  <div className="w-40 h-40 rounded-3xl bg-gradient-to-br from-rose-400 via-purple-400 to-indigo-500 p-1 shadow-xl">
                    <div className="w-full h-full rounded-3xl bg-white flex items-center justify-center overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop" 
                        alt="Anjali Verma"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                </div>
              </div>

              <h1 className="text-3xl text-gray-900 mb-2 font-bold">Anjali Verma</h1>
              <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-600 font-semibold mb-4">
                Senior Art Director
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-gradient-to-br from-rose-50 to-purple-50 rounded-xl p-3">
                  <div className="text-2xl font-bold text-purple-600">12+</div>
                  <div className="text-xs text-gray-600">Years</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-3">
                  <div className="text-2xl font-bold text-indigo-600">300+</div>
                  <div className="text-xs text-gray-600">Projects</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-rose-50 rounded-xl p-3">
                  <div className="text-2xl font-bold text-rose-600">50+</div>
                  <div className="text-xs text-gray-600">Awards</div>
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="space-y-3">
                <a 
                  href="mailto:anjali@example.com"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-rose-500 to-purple-500 hover:from-rose-600 hover:to-purple-600 text-white py-3 rounded-xl transition-all duration-300 shadow-lg font-medium"
                >
                  <Mail className="w-5 h-5" />
                  Email Me
                </a>
                <a 
                  href="tel:+911234567890"
                  className="w-full flex items-center justify-center gap-2 bg-white hover:bg-gray-50 border-2 border-purple-500 text-purple-600 py-3 rounded-xl transition-all duration-300 font-medium"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>

            {/* Right: Bio & Details */}
            <div className="md:col-span-2">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">About Me</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Creative art director with over 12 years of experience in visual storytelling, brand identity, and digital design. Passionate about creating compelling visual experiences that resonate with audiences and drive results.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  I specialize in conceptual design, creative direction, and team leadership. My work has been featured in major publications and has won numerous international awards.
                </p>
              </div>

              {/* Specialties */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-purple-600" />
                  Specialties
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Brand Identity', 'Art Direction', 'Visual Design', 'Creative Strategy', 'Digital Marketing', 'Team Leadership'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-gradient-to-r from-rose-100 to-purple-100 text-purple-700 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-5 h-5 text-purple-600" />
                  <span className="font-medium">Mumbai, India</span>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Connect</h3>
                <div className="flex gap-3">
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-gradient-to-br from-rose-400 to-rose-500 hover:from-rose-500 hover:to-rose-600 rounded-xl flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 shadow-md"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 hover:from-purple-500 hover:to-purple-600 rounded-xl flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 shadow-md"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600 rounded-xl flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 shadow-md"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 rounded-xl flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 shadow-md"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* My Work Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">My Work</h2>
            <p className="text-gray-600">A selection of my recent projects and creative works</p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {workPhotos.map((photo, index) => (
              <div 
                key={index}
                className="aspect-square rounded-2xl overflow-hidden group cursor-pointer relative"
              >
                <ImageWithFallback 
                  src={photo}
                  alt={`Work ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white font-medium">View Project</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

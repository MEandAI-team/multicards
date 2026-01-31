import { Link } from 'react-router-dom';
import { ArrowLeft, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, Globe, Star, Award, Heart, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export default function Demo7() {
  const workPhotos = [
    'https://images.unsplash.com/photo-1758613653231-bae4e1131dde?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1760071744047-5542cbfda184?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1695067438561-75492f7b6a9c?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1611456531646-2a68d6df2723?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1719176010035-17729577d496?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1597434429739-2574d7e06807?w=400&h=400&fit=crop'
  ];

  const testimonials = [
    {
      name: "Rahul Khanna",
      role: "CEO, TechCorp",
      text: "Outstanding work! Professional, creative, and delivered beyond expectations.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
    },
    {
      name: "Priya Gupta",
      role: "Marketing Director",
      text: "Incredible talent and attention to detail. Highly recommend!",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 py-8" style={{ fontFamily: 'Quicksand, sans-serif' }}>
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
        <div className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1">
          <Star className="w-4 h-4 fill-white" />
          Premium Design
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-20">
        {/* Hero Profile Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8">
          {/* Header Background */}
          <div className="h-48 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 relative">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)',
            }}></div>
          </div>

          {/* Profile Content */}
          <div className="px-8 md:px-12 pb-8">
            <div className="flex flex-col md:flex-row gap-8 -mt-24">
              {/* Profile Photo */}
              <div className="flex-shrink-0">
                <div className="w-40 h-40 rounded-3xl bg-white p-2 shadow-2xl">
                  <div className="w-full h-full rounded-2xl bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" 
                      alt="Kavya Menon"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 mt-6 md:mt-8">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h1 className="text-4xl text-gray-900 mb-2 font-bold">Kavya Menon</h1>
                    <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 font-bold mb-2">
                      Creative Director & Brand Strategist
                    </p>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Globe className="w-4 h-4" />
                      <span className="text-sm">www.kavyamenon.com</span>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-3">
                    <button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-lg font-semibold flex items-center gap-2">
                      <Mail className="w-5 h-5" />
                      Contact
                    </button>
                    <button className="bg-white hover:bg-gray-50 border-2 border-purple-500 text-purple-600 px-6 py-3 rounded-xl transition-all duration-300 font-semibold">
                      Portfolio
                    </button>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
                    <div className="text-2xl font-bold text-orange-600">10+</div>
                    <div className="text-xs text-gray-600 mt-1">Years</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl">
                    <div className="text-2xl font-bold text-pink-600">250+</div>
                    <div className="text-xs text-gray-600 mt-1">Projects</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                    <div className="text-2xl font-bold text-purple-600">100+</div>
                    <div className="text-xs text-gray-600 mt-1">Clients</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl">
                    <div className="text-2xl font-bold text-indigo-600">35+</div>
                    <div className="text-xs text-gray-600 mt-1">Awards</div>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-600 leading-relaxed mb-4">
                  Award-winning creative director specializing in brand strategy, visual identity, and digital experiences. 
                  Passionate about crafting compelling stories through innovative design and strategic thinking.
                </p>

                {/* Social Links */}
                <div className="flex gap-3">
                  <a 
                    href="#" 
                    className="w-11 h-11 bg-gradient-to-br from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 rounded-xl flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 shadow-md"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-11 h-11 bg-gradient-to-br from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 rounded-xl flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 shadow-md"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-11 h-11 bg-gradient-to-br from-purple-400 to-purple-500 hover:from-purple-500 hover:to-purple-600 rounded-xl flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 shadow-md"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-11 h-11 bg-gradient-to-br from-indigo-400 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600 rounded-xl flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 shadow-md"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* My Work Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
              <Award className="w-8 h-8 text-purple-600" />
              My Work
            </h2>
            <p className="text-gray-600">Featured projects and creative collaborations</p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {workPhotos.map((photo, index) => (
              <div 
                key={index}
                className="aspect-square rounded-2xl overflow-hidden group cursor-pointer relative shadow-lg"
              >
                <ImageWithFallback 
                  src={photo}
                  alt={`Work ${index + 1}`}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <span className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Project {index + 1}
                  </span>
                </div>
                {/* Decorative corner */}
                <div className="absolute top-3 right-3 w-8 h-8 border-t-4 border-r-4 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
              <MessageCircle className="w-8 h-8 text-pink-600" />
              Client Testimonials
            </h2>
            <p className="text-gray-600">What people say about working with me</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-100"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 rounded-3xl shadow-2xl p-8 md:p-12 text-center text-white mb-8">
          <h2 className="text-3xl font-bold mb-3">Let's Work Together!</h2>
          <p className="text-lg mb-6 opacity-90">
            Have a project in mind? Let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:kavya@example.com"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-xl transition-all duration-300 shadow-lg font-bold flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </a>
            <a 
              href="tel:+911234567890"
              className="bg-purple-900 hover:bg-purple-800 text-white px-8 py-4 rounded-xl transition-all duration-300 shadow-lg font-bold flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

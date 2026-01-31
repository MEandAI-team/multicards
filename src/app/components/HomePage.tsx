import { Link } from 'react-router-dom';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Heart } from 'lucide-react';

export default function HomePage() {
  const demos = [
    {
      id: 1,
      title: 'Modern Gradient Card',
      description: 'Vibrant and contemporary design with colorful gradients',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop',
      gradient: 'from-purple-400 via-pink-400 to-blue-400',
      path: '/demo1',
      isPremium: false
    },
    {
      id: 2,
      title: 'Glassmorphism Dark',
      description: 'Modern glass effect with dark theme and elegant blur',
      image: 'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=400&h=300&fit=crop',
      gradient: 'from-indigo-600 via-purple-600 to-pink-600',
      path: '/demo2',
      isPremium: false
    },
    {
      id: 3,
      title: 'Vintage Classic',
      description: 'Timeless design with aged paper texture and serif typography',
      image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=400&h=300&fit=crop',
      gradient: 'from-amber-100 via-yellow-50 to-orange-100',
      path: '/vintage',
      isPremium: false
    },
    {
      id: 4,
      title: 'Creative Colorful',
      description: 'Bold colors and dynamic design for creative professionals',
      image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=400&h=300&fit=crop',
      gradient: 'from-teal-400 via-cyan-400 to-blue-500',
      path: '/demo3',
      isPremium: false
    },
    {
      id: 5,
      title: 'Tech Modern Pro',
      description: 'Clean tech-focused design with sharp lines and neon accents',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
      gradient: 'from-slate-800 via-blue-600 to-cyan-500',
      path: '/demo4',
      isPremium: false
    },
    {
      id: 6,
      title: 'Business Elegant',
      description: 'Professional and sophisticated design for executives',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
      gradient: 'from-gray-700 via-blue-800 to-indigo-900',
      path: '/demo5',
      isPremium: false
    },
    {
      id: 7,
      title: 'Premium Portfolio Pro',
      description: 'Showcase your work with elegant cards and photo gallery',
      image: 'https://images.unsplash.com/photo-1634170380000-c6te68ef2e14?w=400&h=300&fit=crop',
      gradient: 'from-rose-400 via-purple-500 to-indigo-600',
      path: '/demo6',
      isPremium: true
    },
    {
      id: 8,
      title: 'Premium Creative Studio',
      description: 'Full-featured design with work showcase and testimonials',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop',
      gradient: 'from-orange-400 via-pink-500 to-purple-600',
      path: '/demo7',
      isPremium: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="max-w-7xl mx-auto py-12 px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 font-bold">
            MeAndAI
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Digital Visiting Card Designs
          </p>
          <p className="text-gray-500">
            Choose a design for your personal bio website
          </p>
        </div>

        {/* Demo Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demos.map((demo) => (
            <Link to={demo.path} key={demo.id} className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
                {/* Image Holder */}
                <div className={`h-52 bg-gradient-to-br ${demo.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <ImageWithFallback 
                    src={demo.image}
                    alt={demo.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white flex items-center gap-2">
                    <span className="text-sm font-medium px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                      Demo {demo.id}
                    </span>
                    {demo.isPremium && (
                      <span className="text-xs font-bold px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full shadow-lg">
                        PREMIUM
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl mb-2 text-gray-900 font-semibold">
                    {demo.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {demo.description}
                  </p>
                  <div className="flex items-center text-purple-600 group-hover:text-purple-700 font-medium">
                    <span className="mr-2">View Demo</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-10 border-t border-gray-200">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-3">
                MeAndAI
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Create stunning digital visiting cards and bio websites. Choose from our collection of professionally designed templates.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">All Templates</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">Premium Designs</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">Pricing</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">Support</a>
                </li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Connect With Us</h4>
              <div className="flex items-center gap-2 mb-4">
                <Mail className="w-4 h-4 text-gray-600" />
                <a href="mailto:hello@meandai.com" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                  hello@meandai.com
                </a>
              </div>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-purple-100 hover:bg-purple-600 text-purple-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-pink-100 hover:bg-pink-600 text-pink-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-purple-100 hover:bg-purple-600 text-purple-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-blue-100 hover:bg-blue-600 text-blue-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2026 MeAndAI. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by MeAndAI Team
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

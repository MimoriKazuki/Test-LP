'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Brain, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'サービス', href: '#services' },
    { label: '特徴', href: '#features' },
    { label: '料金', href: '#pricing' },
    { label: '導入事例', href: '#case-studies' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-black/5' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-2xl">
                <Brain className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className={`text-2xl font-bold transition-all duration-300 ${
                isScrolled 
                  ? 'bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent' 
                  : 'text-white drop-shadow-lg'
              }`}>
                AI導入支援
              </span>
              <Sparkles className={`h-4 w-4 animate-pulse transition-colors duration-300 ${
                isScrolled ? 'text-purple-500' : 'text-blue-300'
              }`} />
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative font-medium transition-colors group ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-gray-900' 
                    : 'text-white/90 hover:text-white drop-shadow-lg'
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#contact"
              className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium overflow-hidden group"
            >
              <span className="relative z-10">AI導入相談</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </a>
          </nav>

          <button
            className="md:hidden p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-6 bg-white/95 backdrop-blur-xl rounded-2xl mt-2 border border-white/20">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-3 px-4 text-gray-600 hover:text-gray-900 font-medium hover:bg-gray-50 rounded-lg mx-2 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 rounded-full font-medium mt-4 mx-2"
              onClick={() => setIsMenuOpen(false)}
            >
              AI導入相談
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
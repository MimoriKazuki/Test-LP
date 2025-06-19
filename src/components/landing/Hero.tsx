'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Sparkles, Zap, Brain, Star, Play } from 'lucide-react';
import Demo from './Demo';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [particles, setParticles] = useState<Array<{id: number; x: number; y: number; delay: number; duration: number}>>([]);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const fullText = 'AIで企業のDX化を完全サポート';

  useEffect(() => {
    setIsVisible(true);
    
    // Generate particles on client side only
    setParticles(Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
    })));

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const benefits = [
    { icon: Zap, text: '24時間365日対応', color: 'text-yellow-500' },
    { icon: Brain, text: '専門知識を即座に提供', color: 'text-purple-500' },
    { icon: Star, text: '導入コスト削減', color: 'text-green-500' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10"></div>
        
        {/* Animated Particles */}
        {particles.length > 0 && particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}

        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/10 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 border border-white/10 rotate-12 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full animate-bounce"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Floating Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl text-white px-6 py-3 rounded-full text-sm font-medium mb-8 border border-white/20">
            <Sparkles className="h-4 w-4 animate-spin" />
            最先端のAI技術で業務効率化
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full animate-pulse"></div>
          </div>
          
          {/* Main Heading with Typing Animation */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="block text-white mb-2">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
              次世代の経営革命
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            企業のAI導入を成功に導く専門コンサルタント。
            <br />
            ツール選定・実装・運用まで、企業のDX化を完全サポートします。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-full font-medium text-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                AI導入相談を始める
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </a>
            <button
              onClick={() => setIsDemoOpen(true)}
              className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl text-white px-10 py-5 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 font-medium text-lg relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-3">
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                    <Play className="h-4 w-4 text-white ml-0.5" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-ping opacity-20"></div>
                </div>
                効率化デモを見る
                <div className="flex flex-col text-xs text-blue-200">
                  <span>720倍高速化</span>
                  <span>98%コスト削減</span>
                </div>
              </div>
            </button>
          </div>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={benefit.text} 
                  className={`flex items-center gap-3 text-gray-300 bg-white/5 backdrop-blur-xl px-6 py-3 rounded-full border border-white/10 transform hover:scale-105 transition-all duration-300 ${isVisible ? 'animate-fade-in-up' : ''}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <Icon className={`h-5 w-5 ${benefit.color}`} />
                  <span className="font-medium">{benefit.text}</span>
                </div>
              );
            })}
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: '98%', label: '顧客満足度', color: 'from-blue-500 to-cyan-500' },
              { number: '50%', label: '業務効率化', color: 'from-purple-500 to-pink-500' },
              { number: '30%', label: 'コスト削減', color: 'from-green-500 to-emerald-500' },
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className={`relative group transform hover:scale-105 transition-all duration-300 ${isVisible ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: `${(index + 3) * 200}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-20 rounded-2xl blur group-hover:opacity-30 transition-opacity" 
                     style={{ background: `linear-gradient(to right, ${stat.color.split(' ')[1]}, ${stat.color.split(' ')[3]})` }}>
                </div>
                <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                  <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Demo Modal */}
      <Demo isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </section>
  );
};

export default Hero;
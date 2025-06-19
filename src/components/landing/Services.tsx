'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, TrendingUp, Shield, Zap, Users, BarChart3 } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: MessageSquare,
      title: 'AIツール選定',
      description: '企業の業務プロセスを分析し、最適なAIツールやソリューションを選定・提案します。',
      gradient: 'from-blue-500 to-cyan-500',
      delay: 0,
    },
    {
      icon: TrendingUp,
      title: 'AI実装支援',
      description: '選定したAIツールの導入から設定、データ連携までハンズオンでサポートします。',
      gradient: 'from-purple-500 to-pink-500',
      delay: 100,
    },
    {
      icon: Shield,
      title: 'DX戦略策定',
      description: '企業全体のDX化ロードマップを作成し、段階的なAI導入計画を策定します。',
      gradient: 'from-green-500 to-emerald-500',
      delay: 200,
    },
    {
      icon: Zap,
      title: '業務自動化',
      description: '定型業務をAIが代行し、社員がより創造的な業務に集中できる環境を作ります。',
      gradient: 'from-yellow-500 to-orange-500',
      delay: 300,
    },
    {
      icon: Users,
      title: 'AI人材育成',
      description: '従業員向けAIリテラシー研修やツール操作研修で、組織全体のAI活用力を向上します。',
      gradient: 'from-indigo-500 to-purple-500',
      delay: 400,
    },
    {
      icon: BarChart3,
      title: '効果測定・改善',
      description: 'AI導入の効果を定量的に測定し、継続的な改善提案でROIを最大化します。',
      gradient: 'from-pink-500 to-rose-500',
      delay: 500,
    },
  ];

  return (
    <section ref={sectionRef} id="services" className="py-32 px-6 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 px-6 py-3 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
AI導入支援サービス
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
完全サポートメニュー
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
AI導入の企画から実装、運用まで、企業のDX化を完全サポートします
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`group relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-glow ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ 
                  animationDelay: `${service.delay}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                  <div className={`relative bg-gradient-to-r ${service.gradient} w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {service.description}
                </p>

                {/* Animated Arrow */}
                <div className="mt-6 flex items-center text-gray-400 group-hover:text-gray-600 transition-colors">
                  <span className="text-sm font-medium">詳しく見る</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`text-center mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a
            href="#features"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
          >
            さらに詳しく見る
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
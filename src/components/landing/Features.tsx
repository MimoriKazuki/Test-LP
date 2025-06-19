'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Clock, Brain, DollarSign, Lock, Smartphone, Globe, Zap, Shield } from 'lucide-react';

const Features = () => {
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

  const features = [
    {
      icon: Clock,
      title: '24時間365日対応',
      description: '深夜や休日でも、いつでも相談可能。タイムゾーンを気にせずグローバルに対応します。',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      delay: 0,
    },
    {
      icon: Brain,
      title: '最新のAI技術',
      description: 'GPT-4をベースとした最先端のAI技術で、高度な分析と的確なアドバイスを提供。',
      gradient: 'from-purple-500 via-violet-500 to-indigo-500',
      delay: 200,
    },
    {
      icon: DollarSign,
      title: 'コスト効率',
      description: '人間の顧問と比べて、大幅なコスト削減を実現。中小企業でも導入しやすい価格設定。',
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      delay: 400,
    },
    {
      icon: Shield,
      title: 'セキュリティ',
      description: '企業秘密は厳重に保護。ISO27001準拠のセキュリティ体制で安心してご利用いただけます。',
      gradient: 'from-red-500 via-pink-500 to-rose-500',
      delay: 100,
    },
    {
      icon: Smartphone,
      title: 'マルチデバイス対応',
      description: 'PC、スマートフォン、タブレットから、いつでもどこでもアクセス可能。',
      gradient: 'from-orange-500 via-amber-500 to-yellow-500',
      delay: 300,
    },
    {
      icon: Globe,
      title: '多言語対応',
      description: '日本語、英語、中国語など、主要言語に対応。グローバルビジネスをサポート。',
      gradient: 'from-indigo-500 via-purple-500 to-pink-500',
      delay: 500,
    },
  ];

  return (
    <section ref={sectionRef} id="features" className="py-32 px-6 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-100/80 to-purple-100/80 backdrop-blur-xl text-gray-700 px-8 py-4 rounded-full text-sm font-medium mb-8 border border-white/20">
            <Zap className="h-5 w-5 text-blue-600 animate-pulse" />
            革新的な特徴
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold mb-8">
            <span className="block bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight">
              なぜAI導入支援が
            </span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
              選ばれるのか
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            従来のITコンサルティングとは異なる、革新的な6つの特徴
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`group relative transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${feature.delay}ms` }}
              >
                {/* Card */}
                <div className="relative bg-white/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                  {/* Hover Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-3xl`}></div>
                  
                  {/* Floating Icon */}
                  <div className="relative mb-8 flex justify-center">
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 animate-pulse`}></div>
                      <div className={`relative bg-gradient-to-r ${feature.gradient} w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-2xl`}>
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center relative">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className={`mt-24 relative transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-12 md:p-16 text-white overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
              <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl animate-pulse"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  今すぐ始められる
                  <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    簡単導入
                  </span>
                </h3>
                <p className="text-xl mb-8 text-gray-300 leading-relaxed">
                  複雑な設定は不要。申し込みから最短1日で利用開始可能です。
                  <br />
                  専任のサポートチームが導入から運用まで完全サポート。
                </p>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 font-medium text-lg"
                >
                  導入について相談する
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: '1日', label: '導入まで', color: 'from-blue-500 to-cyan-500' },
                  { number: '0円', label: '初期費用', color: 'from-green-500 to-emerald-500' },
                  { number: '∞', label: '相談回数', color: 'from-purple-500 to-pink-500' },
                  { number: '99.9%', label: '稼働率', color: 'from-orange-500 to-red-500' },
                ].map((stat, index) => (
                  <div key={stat.label} className="group relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-20 rounded-2xl blur group-hover:opacity-30 transition-opacity`}></div>
                    <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
                      <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                        {stat.number}
                      </div>
                      <div className="text-gray-300 font-medium">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
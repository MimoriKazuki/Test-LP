'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Building2, Quote, TrendingUp, Star, Award, Zap } from 'lucide-react';

const CaseStudies = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCase, setActiveCase] = useState(0);
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

  const caseStudies = [
    {
      company: '株式会社テックイノベーション',
      industry: 'IT',
      size: '従業員50名',
      challenge: '急成長に伴う経営判断の迅速化が課題',
      solution: 'AI導入支援を受け、需要予測ツールと在庫管理システムを導入',
      results: [
        { text: '意思決定スピード3倍向上', icon: Zap, color: 'text-yellow-500' },
        { text: '売上前年比150%達成', icon: TrendingUp, color: 'text-green-500' },
        { text: '新規事業立ち上げ成功', icon: Star, color: 'text-blue-500' },
      ],
      testimonial: 'AIの分析力と24時間対応で、経営判断が格段に速くなりました。特に海外展開の戦略立案で大きな成果を上げています。',
      person: '代表取締役 山田太郎',
      gradient: 'from-blue-500 to-purple-600',
      bgGradient: 'from-blue-500/5 to-purple-500/5',
    },
    {
      company: '製造業A社',
      industry: '製造業',
      size: '従業員200名',
      challenge: '生産効率の改善と在庫管理の最適化',
      solution: 'AI導入支援で生産ライン予知保全システムと品質管理AIを導入',
      results: [
        { text: '生産効率30%向上', icon: TrendingUp, color: 'text-green-500' },
        { text: '在庫コスト40%削減', icon: Award, color: 'text-purple-500' },
        { text: '納期遵守率99%達成', icon: Star, color: 'text-orange-500' },
      ],
      testimonial: '長年の勘に頼っていた生産計画が、AIの分析により科学的に最適化されました。コスト削減効果は想像以上です。',
      person: '工場長',
      gradient: 'from-green-500 to-emerald-600',
      bgGradient: 'from-green-500/5 to-emerald-500/5',
    },
    {
      company: 'サービス業B社',
      industry: 'サービス業',
      size: '従業員30名',
      challenge: '顧客満足度の向上と新サービス開発',
      solution: 'AI導入支援で顧客行動分析ツールとレコメンドエンジンを導入',
      results: [
        { text: '顧客満足度20%向上', icon: Star, color: 'text-pink-500' },
        { text: '新サービス3つローンチ', icon: Zap, color: 'text-cyan-500' },
        { text: 'リピート率2倍増加', icon: TrendingUp, color: 'text-indigo-500' },
      ],
      testimonial: 'AIが顧客の声を分析し、私たちが気づかなかったニーズを発見してくれました。新サービスはすべて好評です。',
      person: 'マーケティング部長',
      gradient: 'from-purple-500 to-pink-600',
      bgGradient: 'from-purple-500/5 to-pink-500/5',
    },
  ];

  return (
    <section ref={sectionRef} id="case-studies" className="py-32 px-6 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-100/80 to-blue-100/80 backdrop-blur-xl text-gray-700 px-8 py-4 rounded-full text-sm font-medium mb-8 border border-white/20">
            <Award className="h-5 w-5 text-green-600 animate-pulse" />
            成功事例
            <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold mb-8">
            <span className="block bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight">
              導入企業の
            </span>
            <span className="block bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
              成功事例
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            AI導入支援を受けた企業様の具体的な成果と変革の物語
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`group transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <div className={`relative bg-gradient-to-br ${study.bgGradient} backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-white to-gray-300 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-r from-white to-gray-300 rounded-full blur-2xl"></div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 relative z-10">
                  {/* Company Info & Content */}
                  <div className="xl:col-span-2 space-y-8">
                    {/* Company Header */}
                    <div className="flex items-start gap-6">
                      <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-r ${study.gradient} rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                        <div className={`relative bg-gradient-to-r ${study.gradient} p-4 rounded-2xl shadow-xl`}>
                          <Building2 className="h-10 w-10 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">
                          {study.company}
                        </h3>
                        <div className="flex items-center gap-4 text-gray-600">
                          <span className="bg-white/50 px-3 py-1 rounded-full text-sm font-medium">
                            {study.industry}
                          </span>
                          <span className="bg-white/50 px-3 py-1 rounded-full text-sm font-medium">
                            {study.size}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Challenge & Solution */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                        <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          課題
                        </h4>
                        <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
                      </div>
                      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                        <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          ソリューション
                        </h4>
                        <p className="text-gray-700 leading-relaxed">{study.solution}</p>
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 relative">
                      <Quote className={`h-10 w-10 text-transparent bg-gradient-to-r ${study.gradient} bg-clip-text mb-4`} />
                      <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-6">
                        "{study.testimonial}"
                      </blockquote>
                      <cite className="text-gray-600 font-medium not-italic">
                        — {study.person}
                      </cite>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="space-y-6">
                    <h4 className="text-2xl font-bold text-gray-900 text-center mb-8">導入成果</h4>
                    
                    <div className="space-y-4">
                      {study.results.map((result, idx) => {
                        const Icon = result.icon;
                        return (
                          <div 
                            key={idx} 
                            className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/80 transition-all duration-300 hover:scale-105 group/result"
                          >
                            <div className="flex items-center gap-4">
                              <div className={`p-3 rounded-xl bg-gray-100 group-hover/result:scale-110 transition-transform duration-300`}>
                                <Icon className={`h-6 w-6 ${result.color}`} />
                              </div>
                              <span className="text-gray-800 font-medium text-lg">{result.text}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Achievement Badge */}
                    <div className={`bg-gradient-to-r ${study.gradient} rounded-2xl p-6 text-white text-center shadow-xl`}>
                      <Star className="h-8 w-8 mx-auto mb-2" />
                      <div className="text-sm font-medium opacity-90">総合評価</div>
                      <div className="text-2xl font-bold">★★★★★</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-6 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 font-medium text-xl"
          >
            導入事例について詳しく聞く
            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
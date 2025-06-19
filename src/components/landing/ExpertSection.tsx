'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Radio, Tv, Mic, Users, Award, Star, CheckCircle, Sparkles, TrendingUp } from 'lucide-react';

const ExpertSection = () => {
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

  const mediaAppearances = [
    { type: 'ラジオ', count: '15+', icon: Radio, description: 'AI専門家として出演' },
    { type: 'メディア', count: '20+', icon: Tv, description: 'テレビ・ウェブメディア' },
    { type: 'ポッドキャスト', count: '8+', icon: Mic, description: 'AI業界の最新動向を解説' },
    { type: '講演', count: '30+', icon: Users, description: '企業向けAI導入セミナー' },
  ];

  const achievements = [
    'AI業界の第一人者として各種メディアで活躍',
    '500社以上のAI導入を成功に導いた実績',
    '最新AI技術の動向を常に発信し続ける専門家',
    'landBridge代表として企業のDX化を推進',
  ];

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-gradient-to-b from-slate-50/80 to-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-reverse"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50/90 to-purple-50/90 backdrop-blur-xl text-gray-700 px-8 py-4 rounded-2xl text-sm font-medium mb-8 border border-white/20">
            <Award className="h-5 w-5 text-blue-600 animate-pulse" />
            AI業界の専門家が直接サポート
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold mb-8">
            <span className="block bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight">
              メディア出演多数
            </span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
              信頼の専門家
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            landBridge代表の三森は、AI有識者として各種メディアに出演。
            <br />
            最新のAI技術動向と実践的な導入ノウハウを提供しています。
          </p>
        </div>

        {/* Expert Profile */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Profile Image Placeholder */}
              <div className="relative flex-shrink-0">
                <div className="w-48 h-48 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <span className="text-white text-6xl font-bold">三森</span>
                </div>
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  <Sparkles className="inline h-4 w-4 mr-1" />
                  AI専門家
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-4xl font-bold text-gray-900 mb-4">
                  landBridge 代表　三森
                </h3>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  AI業界の第一人者として、ラジオ・テレビ・ポッドキャストなど
                  多数のメディアに出演。企業のAI導入を成功に導く専門コンサルタント。
                </p>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {mediaAppearances.map((media, index) => {
                    const Icon = media.icon;
                    return (
                      <div 
                        key={media.type}
                        className={`text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-white/40 hover:scale-105 transition-transform duration-300 ${isVisible ? 'animate-fade-in-up' : ''}`}
                        style={{ animationDelay: `${index * 200}ms` }}
                      >
                        <Icon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-gray-900 mb-1">{media.count}</div>
                        <div className="text-sm font-medium text-gray-700 mb-1">{media.type}</div>
                        <div className="text-xs text-gray-500">{media.description}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className={`mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">実績・経歴</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className={`group bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 ${isVisible ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: `${(index + 4) * 200}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-800 font-medium leading-relaxed">{achievement}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              AI専門家による
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                パーソナライズされた導入支援
              </span>
            </h3>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              メディア出演多数の専門家が、あなたの企業に最適なAI導入戦略を
              直接コンサルティングいたします
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <TrendingUp className="h-6 w-6" />
              専門家に直接相談する
              <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertSection;
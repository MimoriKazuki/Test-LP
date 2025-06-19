'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Check, X, Star, Zap, Shield, Crown, Sparkles, TrendingUp, Users, Award, Rocket } from 'lucide-react';

const Pricing = () => {
  // Removed billing cycle - monthly only
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState<{[key: string]: number}>({});
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate numbers
          const targets = { starter: 100000, pro: 300000 };
          Object.keys(targets).forEach(key => {
            let current = 0;
            const target = targets[key as keyof typeof targets];
            const increment = target / 50;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setAnimatedNumbers(prev => ({ ...prev, [key]: Math.floor(current) }));
            }, 30);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const plans: Array<{
    name: string;
    description: string;
    price: { monthly: number | string; yearly: number | string };
    originalPrice?: { monthly: number; yearly: number };
    icon: any;
    gradient: string;
    bgGradient: string;
    popular?: boolean;
    features: Array<{ text: string; included: boolean; highlight: boolean }>;
    savings?: string;
    badge: string;
  }> = [
    {
      name: 'スターター',
      description: 'AI導入を始めたい中小企業向け',
      price: 100000,
      originalPrice: 150000,
      icon: Rocket,
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/5 to-cyan-500/5',
      features: [
        { text: 'チャットベースAI導入相談', included: true, highlight: true },
        { text: '基本的なツール選定支援', included: true, highlight: false },
        { text: 'AI導入計画策定', included: true, highlight: false },
        { text: 'DX化ロードマップ作成', included: true, highlight: true },
        { text: '週次ミーティング', included: false, highlight: false },
        { text: '専任コンサルタント', included: false, highlight: false },
        { text: 'カスタム開発支援', included: false, highlight: false },
      ],
      savings: '33%OFF',
      badge: 'AI導入入門',
    },
    {
      name: 'プロフェッショナル',
      description: '本格的なAI・DX推進企業向け',
      price: 300000,
      originalPrice: 500000,
      icon: Crown,
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/5 to-pink-500/5',
      features: [
        { text: '包括的AI導入戦略策定', included: true, highlight: true },
        { text: '週1-2回の専門ミーティング', included: true, highlight: true },
        { text: '企業特化型ツール選定', included: true, highlight: true },
        { text: 'AI実装ハンズオン支援', included: true, highlight: true },
        { text: '専任AIコンサルタント', included: true, highlight: true },
        { text: 'ROI測定・改善提案', included: true, highlight: false },
        { text: '従業員向けAI研修', included: true, highlight: false },
      ],
      savings: '40%OFF',
      badge: '最も選ばれている',
    },
    {
      name: 'エンタープライズ',
      description: '大企業向け完全カスタムAI導入',
      price: '要相談',
      icon: Award,
      gradient: 'from-amber-500 to-orange-500',
      bgGradient: 'from-amber-500/5 to-orange-500/5',
      features: [
        { text: '企業全体のAI変革戦略', included: true, highlight: true },
        { text: '専任チームによる伴走支援', included: true, highlight: true },
        { text: 'カスタムAIソリューション開発', included: true, highlight: true },
        { text: '24時間技術サポート', included: true, highlight: true },
        { text: '複数部署横断プロジェクト', included: true, highlight: true },
        { text: 'AI人材育成プログラム', included: true, highlight: true },
        { text: '継続的最適化・改善', included: true, highlight: true },
      ],
      badge: '完全オーダーメイド',
    },
  ];

  const testimonials = [
    { text: "AI導入で業務効率が3倍向上", author: "製造業CEO" },
    { text: "6ヶ月でDX化を完全実現", author: "小売業CTO" },
    { text: "AI活用でコスト50%削減達成", author: "サービス業代表" },
  ];

  return (
    <section ref={sectionRef} id="pricing" className="py-32 px-6 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-amber-500/5 to-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-100/80 to-pink-100/80 backdrop-blur-xl text-gray-700 px-8 py-4 rounded-full text-sm font-medium mb-8 border border-white/20">
            <Star className="h-5 w-5 text-purple-600 animate-pulse" />
            特別限定価格
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold mb-8">
            <span className="block bg-gradient-to-r from-gray-900 via-purple-800 to-pink-800 bg-clip-text text-transparent leading-tight">
              AI導入支援
            </span>
            <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent animate-gradient-x">
              顧問プラン
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            企楮のDX推進段階に合わせた、AI導入を成功に導く専門プラン
          </p>

          {/* Pricing Note */}
          <div className="inline-flex items-center bg-gradient-to-r from-blue-50/90 to-purple-50/90 backdrop-blur-xl rounded-2xl px-8 py-4 border border-white/20 shadow-lg">
            <div className="text-center">
              <div className="font-bold text-gray-900 text-lg">月額料金制</div>
              <div className="text-sm text-gray-600">シンプルでわかりやすい料金体系</div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const isHovered = hoveredPlan === index;
            
            return (
              <div
                key={plan.name}
                className={`group relative transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} ${
                  plan.popular ? 'lg:scale-110 lg:-translate-y-4' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredPlan(index)}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                {/* Background Glow */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${plan.gradient} rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                
                <div className={`relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 ${
                  plan.popular ? 'ring-2 ring-purple-500/50' : ''
                } overflow-hidden`}>
                  
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className={`bg-gradient-to-r ${plan.gradient} text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2`}>
                        <Crown className="h-4 w-4" />
                        おすすめ
                      </div>
                    </div>
                  )}

                  {/* Corner Badge */}
                  {plan.savings && (
                    <div className="absolute top-4 right-4">
                      <div className={`bg-gradient-to-r ${plan.gradient} text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse`}>
                        {plan.savings}
                      </div>
                    </div>
                  )}

                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className="relative mb-6">
                      <div className={`absolute inset-0 bg-gradient-to-r ${plan.gradient} rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity animate-pulse`}></div>
                      <div className={`relative bg-gradient-to-r ${plan.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 mb-2">{plan.description}</p>
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${plan.bgGradient} border border-white/20`}>
                      {plan.badge}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-8">
                    {plan.originalPrice && typeof plan.price === 'number' && (
                      <div className="text-lg text-gray-400 line-through mb-2">
                        ¥{plan.originalPrice.toLocaleString()}
                      </div>
                    )}
                    
                    <div className="text-5xl font-bold text-gray-900 mb-2">
                      {typeof plan.price === 'number' ? (
                        <>
                          <span className={`bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                            ¥{(animatedNumbers[plan.name.toLowerCase().includes('スターター') ? 'starter' : 'pro'] || plan.price).toLocaleString()}
                          </span>
                          <span className="text-lg font-normal text-gray-600 ml-2">
                            /月
                          </span>
                        </>
                      ) : (
                        <span className={`bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                          {plan.price}
                        </span>
                      )}
                    </div>
                    
                    {typeof plan.price === 'number' && (
                      <div className="text-sm text-gray-500">
                        月額料金
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li 
                        key={feature.text} 
                        className={`flex items-start gap-3 transition-all duration-300 ${
                          feature.highlight ? 'bg-gradient-to-r from-blue-50 to-purple-50 p-2 rounded-lg' : ''
                        }`}
                      >
                        {feature.included ? (
                          <div className={`p-1 rounded-full bg-gradient-to-r ${plan.gradient}`}>
                            <Check className="h-3 w-3 text-white" />
                          </div>
                        ) : (
                          <X className="h-5 w-5 text-gray-300 mt-0.5" />
                        )}
                        <span className={`${
                          feature.included ? 'text-gray-700' : 'text-gray-400'
                        } ${feature.highlight ? 'font-medium' : ''}`}>
                          {feature.text}
                          {feature.highlight && (
                            <Sparkles className="inline h-4 w-4 ml-1 text-blue-500" />
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <a
                    href="#contact"
                    className={`block w-full text-center py-4 rounded-2xl font-medium transition-all duration-300 relative overflow-hidden group/btn ${
                      plan.popular
                        ? `bg-gradient-to-r ${plan.gradient} text-white hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105`
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    <span className="relative z-10">
                      {plan.name === 'エンタープライズ' ? 'AI導入相談を予約' : '無料相談を始める'}
                    </span>
                    {plan.popular && (
                      <div className={`absolute inset-0 bg-gradient-to-r ${plan.gradient.split(' ').reverse().join(' ')} transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300`}></div>
                    )}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Social Proof */}
        <div className={`text-center mb-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">お客様の声</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
                  <p className="text-gray-700 italic mb-3">"{testimonial.text}"</p>
                  <p className="text-sm text-gray-600 font-medium">— {testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className={`text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl p-8 text-white">
            <Shield className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">AI導入成功保証</h3>
            <p className="text-lg text-green-100 mb-6">
              初回相談無料・成果が出なければ全額返金・専門チームが完全サポート
            </p>
            <div className="flex justify-center items-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>初回コンサル無料</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>AI専門家が対応</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>成果保証制度</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
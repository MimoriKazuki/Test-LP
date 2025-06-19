'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Search, HelpCircle, Lightbulb, Shield, Clock, Users, Star, MessageCircle, Zap, Brain, Target, TrendingUp, CheckCircle, Filter, ArrowRight, Sparkles } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [consultationCounts, setConsultationCounts] = useState<{[key: number]: number}>({});
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

  useEffect(() => {
    // Generate consultation counts on client side only
    const counts: {[key: number]: number} = {};
    faqs.forEach((_, index) => {
      counts[index] = Math.floor(Math.random() * 50) + 10;
    });
    setConsultationCounts(counts);
  }, []);


  const faqs = [
    {
      category: '基本情報',
      question: 'AI導入支援とは具体的にどのようなサービスですか？',
      answer: 'AI導入支援は、企業のAI活用を成功に導く専門コンサルティングサービスです。ツール選定から実装、運用まで、企業の業務プロセスに最適なAIソリューションを提案し、実際の導入をハンズオンでサポートします。',
      tags: ['AI導入', 'コンサルティング', 'ハンズオン支援'],
      popularity: 95,
    },
    {
      category: '導入・運用',
      question: '導入にはどれくらいの期間がかかりますか？',
      answer: 'お申し込みから最短1営業日で利用開始可能です。初期設定は弊社のサポートチームが行いますので、特別な技術知識は必要ありません。',
      tags: ['導入', '期間', '設定'],
      popularity: 88,
    },
    {
      category: 'セキュリティ',
      question: 'セキュリティは大丈夫ですか？',
      answer: 'ISO27001に準拠したセキュリティ体制を整えており、お客様のデータは暗号化して厳重に管理しています。また、データは日本国内のサーバーで管理され、第三者への提供は一切行いません。',
      tags: ['セキュリティ', 'ISO27001', '暗号化'],
      popularity: 92,
    },
    {
      category: '導入・運用',
      question: '既存のITシステムとの連携は可能ですか？',
      answer: 'はい、可能です。AI導入支援では既存システムとの連携を重視しており、現在お使いのERPやCRMなどとのデータ連携も含めて最適なAIソリューションを提案いたします。',
      tags: ['システム連携', 'ERP', 'CRM'],
      popularity: 75,
    },
    {
      category: '基本情報',
      question: '契約期間の縛りはありますか？',
      answer: '最低契約期間は1ヶ月となっており、その後はいつでも解約可能です。解約金等の追加費用は一切発生しません。',
      tags: ['契約期間', '解約', '料金'],
      popularity: 85,
    },
    {
      category: 'サポート',
      question: 'どのような企業が利用していますか？',
      answer: '個人事業主から上場企業まで、幅広い規模・業種の企業様にご利用いただいています。特にIT、製造業、サービス業、小売業などで多くの導入実績があります。',
      tags: ['企業', '業種', '実績'],
      popularity: 78,
    },
    {
      category: 'サポート',
      question: 'AIの回答が間違っていた場合の責任は？',
      answer: 'AIの回答はあくまでアドバイスであり、最終的な経営判断は経営者様に委ねられます。ただし、回答の精度向上のため継続的な改善を行っており、必要に応じて人間の専門家によるサポートも提供しています。',
      tags: ['責任', '精度', 'サポート'],
      popularity: 68,
    },
    {
      category: '基本情報',
      question: '無料トライアルはありますか？',
      answer: 'はい、全プランで14日間の無料トライアルをご用意しています。期間中はすべての機能を制限なくお使いいただけます。',
      tags: ['無料トライアル', '14日間', '機能'],
      popularity: 98,
    },
  ];

  const categories = [
    { 
      name: '基本情報', 
      icon: Brain, 
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      gradient: 'from-blue-500 to-cyan-500',
      count: faqs.filter(f => f.category === '基本情報').length
    },
    { 
      name: 'セキュリティ', 
      icon: Shield, 
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      gradient: 'from-emerald-500 to-teal-500',
      count: faqs.filter(f => f.category === 'セキュリティ').length
    },
    { 
      name: '導入・運用', 
      icon: Zap, 
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      gradient: 'from-purple-500 to-violet-500',
      count: faqs.filter(f => f.category === '導入・運用').length
    },
    { 
      name: 'サポート', 
      icon: Users, 
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      gradient: 'from-orange-500 to-amber-500',
      count: faqs.filter(f => f.category === 'サポート').length
    },
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const displayFaqs = selectedCategory 
    ? filteredFaqs.filter(faq => faq.category === selectedCategory)
    : filteredFaqs;

  return (
    <section ref={sectionRef} id="faq" className="py-32 px-6 bg-gradient-to-b from-slate-50/80 via-white to-blue-50/30 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/8 to-purple-500/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gradient-to-r from-emerald-500/8 to-cyan-500/8 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Geometric Patterns */}
        <div className="absolute top-20 right-1/4 w-32 h-32 border border-blue-200/30 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rotate-45 animate-bounce-slow"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Redesigned Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50/90 to-purple-50/90 backdrop-blur-2xl text-gray-700 px-10 py-5 rounded-2xl text-sm font-semibold mb-10 border-2 border-white/30 shadow-2xl">
            <div className="relative">
              <MessageCircle className="h-6 w-6 text-blue-600" />
              <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping"></div>
            </div>
            <span className="bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent font-bold">よくあるご質問</span>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
          
          <h2 className="text-7xl md:text-8xl font-black mb-10 leading-none">
            <span className="block bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-4">
              すべての疑問に
            </span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
              完璧な答えを
            </span>
          </h2>
          
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 font-medium">
            1000社以上の導入実績から生まれた、最も重要な質問と回答集
          </p>

          {/* Advanced Search Bar */}
          <div className="max-w-3xl mx-auto relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative bg-white/80 backdrop-blur-2xl rounded-3xl border-2 border-white/40 shadow-2xl overflow-hidden">
              <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                <div className="relative">
                  <Search className="h-6 w-6 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  <div className="absolute inset-0 bg-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity"></div>
                </div>
              </div>
              <input
                type="text"
                placeholder="キーワードで検索（例：料金、セキュリティ、導入期間...）"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-16 pr-6 py-6 bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none text-lg font-medium"
              />
              {searchTerm && (
                <div className="absolute inset-y-0 right-0 pr-6 flex items-center">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {filteredFaqs.length}件ヒット
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Enhanced Category Filter */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-3 text-gray-600">
              <Filter className="h-5 w-5" />
              <span className="font-semibold text-lg">カテゴリーで絞り込む</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`group relative px-8 py-4 rounded-2xl transition-all duration-300 font-semibold text-lg overflow-hidden ${
                  selectedCategory === null
                    ? 'bg-gradient-to-r from-slate-800 to-slate-700 text-white shadow-2xl scale-105'
                    : 'bg-white/70 backdrop-blur-xl text-gray-700 hover:bg-white/90 border-2 border-white/40 hover:scale-105'
                }`}
              >
                <span className="relative z-10 flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                  すべて表示
                  <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-2 py-1 rounded-full text-sm">
                    {faqs.length}
                  </div>
                </span>
                {selectedCategory === null && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
                )}
              </button>
              
              {categories.map((category, index) => {
                const Icon = category.icon;
                const isSelected = selectedCategory === category.name;
                return (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`group relative px-8 py-4 rounded-2xl transition-all duration-300 font-semibold text-lg overflow-hidden ${
                      isSelected
                        ? `bg-gradient-to-r ${category.gradient} text-white shadow-2xl scale-105`
                        : 'bg-white/70 backdrop-blur-xl text-gray-700 hover:bg-white/90 border-2 border-white/40 hover:scale-105'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      <div className={`p-2 rounded-xl ${
                        isSelected ? 'bg-white/20' : `${category.bgColor}`
                      }`}>
                        <Icon className={`h-5 w-5 ${
                          isSelected ? 'text-white' : category.color
                        }`} />
                      </div>
                      {category.name}
                      <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {category.count}
                      </div>
                    </span>
                    {isSelected && (
                      <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient.split(' ').reverse().join(' ')} opacity-20 animate-pulse`}></div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Revolutionary FAQ Cards */}
        <div className="space-y-6 mb-16">
          {displayFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const category = categories.find(cat => cat.name === faq.category);
            
            return (
              <div
                key={index}
                className={`group transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`relative bg-white/80 backdrop-blur-2xl rounded-3xl border-2 border-white/40 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden group-hover:scale-[1.02] ${
                  isOpen ? 'ring-4 ring-blue-500/20 bg-gradient-to-br from-blue-50/50 to-purple-50/30' : ''
                }`}>
                  {/* Background Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${category?.gradient || 'from-blue-500 to-purple-500'} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Header */}
                  <button
                    className="w-full p-8 text-left transition-all duration-300 relative z-10"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex-1">
                        {/* Enhanced Category Badge & Popularity */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-4">
                            {category && (
                              <div className={`flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r ${category.gradient} text-white shadow-lg`}>
                                <category.icon className="h-5 w-5" />
                                <span className="font-bold text-sm">
                                  {category.name}
                                </span>
                              </div>
                            )}
                            
                            {/* Enhanced Popularity Indicator */}
                            <div className="flex items-center gap-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 py-2 rounded-xl shadow-lg">
                              <Star className="h-4 w-4 fill-current" />
                              <span className="font-bold text-sm">{faq.popularity}%</span>
                              <span className="text-xs font-medium">人気</span>
                            </div>
                          </div>
                          
                          {/* Expand Icon */}
                          <div className={`transition-all duration-500 p-3 rounded-2xl bg-gradient-to-r from-gray-100 to-gray-200 group-hover:from-blue-100 group-hover:to-purple-100 ${
                            isOpen ? 'rotate-180 bg-gradient-to-r from-blue-500 to-purple-500' : ''
                          }`}>
                            <ChevronDown className={`h-6 w-6 transition-colors ${
                              isOpen ? 'text-white' : hoveredIndex === index ? 'text-blue-600' : 'text-gray-600'
                            }`} />
                          </div>
                        </div>
                        
                        {/* Question */}
                        <h3 className={`text-2xl font-bold leading-tight mb-4 transition-colors ${
                          isOpen ? 'text-blue-700' : 'text-gray-900 group-hover:text-blue-600'
                        }`}>
                          {faq.question}
                        </h3>
                        
                        {/* Enhanced Tags */}
                        <div className="flex flex-wrap gap-3">
                          {faq.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 text-sm rounded-xl font-medium hover:from-blue-100 hover:to-purple-100 hover:text-blue-700 transition-all duration-300 cursor-default"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </button>
                  
                  {/* Enhanced Answer Section */}
                  <div className={`transition-all duration-700 overflow-hidden ${
                    isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-8 pb-8">
                      <div className="bg-gradient-to-br from-blue-50/80 via-white/50 to-purple-50/80 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/40 shadow-xl">
                        <div className="flex items-start gap-6">
                          <div className="flex-shrink-0">
                            <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl shadow-lg">
                              <Lightbulb className="h-6 w-6 text-white" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-4">
                              <CheckCircle className="h-5 w-5 text-green-500" />
                              <span className="font-bold text-green-700 text-sm">AI顧問からの回答</span>
                            </div>
                            <p className="text-gray-800 leading-relaxed text-lg font-medium">{faq.answer}</p>
                            
                            {/* Action Button */}
                            <div className="mt-6 flex items-center gap-4">
                              <a
                                href="#contact"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                              >
                                <MessageCircle className="h-4 w-4" />
                                さらに詳しく相談
                                <ArrowRight className="h-4 w-4" />
                              </a>
                              <div className="text-sm text-gray-500 font-medium">
                                <Sparkles className="inline h-4 w-4 mr-1" />
                                {consultationCounts[index] || 0}人が今週相談しました
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced No Results */}
        {displayFaqs.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-gradient-to-br from-white/90 to-gray-50/80 backdrop-blur-2xl rounded-3xl p-12 border-2 border-white/40 shadow-2xl max-w-2xl mx-auto">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur animate-pulse"></div>
                <div className="relative w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                  <Search className="h-12 w-12 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">お探しの質問が見つかりませんでした</h3>
              <p className="text-lg text-gray-600 mb-8">検索条件を変更するか、直接お問い合わせで解決しましょう</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory(null);
                  }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl hover:shadow-lg transition-all duration-300 font-semibold hover:scale-105"
                >
                  検索をリセット
                </button>
                <a
                  href="#contact"
                  className="bg-white text-gray-700 px-8 py-4 rounded-2xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 font-semibold hover:scale-105"
                >
                  直接相談する
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Premium CTA Section */}
        <div className={`text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 rounded-3xl p-12 text-white overflow-hidden shadow-2xl">
            {/* Background Effects */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
              <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl animate-float"></div>
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-2xl animate-float-reverse"></div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-2xl mb-8 border border-white/20">
                <Target className="h-5 w-5 text-blue-400" />
                <span className="font-semibold">24時間以内に回答保証</span>
              </div>
              
              <h3 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  まだ疑問がありますか？
                </span>
              </h3>
              <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                AI技術の専門家チームが、あなたの具体的な課題に対して
                <br />
                個別最適化されたソリューションを提案します
              </p>
              
              <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
                <a
                  href="#contact"
                  className="group relative inline-flex items-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                  <div className="relative z-10 flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                      <MessageCircle className="h-5 w-5 text-white" />
                    </div>
                    無料でエキスパートに相談
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
                
                <div className="flex items-center gap-8 text-blue-100">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">98%</div>
                    <div className="text-sm">解決率</div>
                  </div>
                  <div className="w-px h-12 bg-white/20"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">24h</div>
                    <div className="text-sm">以内回答</div>
                  </div>
                  <div className="w-px h-12 bg-white/20"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">1000+</div>
                    <div className="text-sm">解決実績</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex items-center justify-center gap-2 text-blue-200 text-sm">
                <CheckCircle className="h-4 w-4" />
                <span>完全無料・営業一切なし・秘密厳守</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
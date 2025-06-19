'use client';

import React, { useState, useEffect } from 'react';
import { X, Clock, TrendingUp, Users, DollarSign, Zap, CheckCircle, ArrowRight, Target } from 'lucide-react';

interface DemoProps {
  isOpen: boolean;
  onClose: () => void;
}

const Demo = ({ isOpen, onClose }: DemoProps) => {
  const [animatedNumbers, setAnimatedNumbers] = useState({
    speed: 0,
    cost: 0,
    productivity: 0,
    satisfaction: 0,
  });
  const [isAnimating, setIsAnimating] = useState(false);

  const metrics = [
    {
      key: 'speed',
      icon: Clock,
      label: '意思決定速度',
      from: 1,
      to: 720,
      unit: '倍高速化',
      color: 'from-blue-500 to-cyan-500',
      description: '5日 → 0.3秒',
    },
    {
      key: 'cost',
      icon: DollarSign,
      label: 'コスト削減',
      from: 0,
      to: 98,
      unit: '%削減',
      color: 'from-green-500 to-emerald-500',
      description: '¥50,000/回 → ¥980/月',
    },
    {
      key: 'productivity',
      icon: TrendingUp,
      label: '生産性向上',
      from: 100,
      to: 400,
      unit: '%向上',
      color: 'from-purple-500 to-pink-500',
      description: 'チーム全体の効率化',
    },
    {
      key: 'satisfaction',
      icon: Users,
      label: '顧客満足度',
      from: 70,
      to: 98,
      unit: '%達成',
      color: 'from-orange-500 to-red-500',
      description: '継続利用率向上',
    },
  ];

  const startAnimation = () => {
    setIsAnimating(true);
    metrics.forEach((metric) => {
      let current = metric.from;
      const increment = (metric.to - metric.from) / 100;
      const timer = setInterval(() => {
        current += increment;
        if (current >= metric.to) {
          current = metric.to;
          clearInterval(timer);
        }
        setAnimatedNumbers(prev => ({
          ...prev,
          [metric.key]: Math.floor(current)
        }));
      }, 20);
    });
  };

  useEffect(() => {
    if (isOpen) {
      // Reset numbers
      setAnimatedNumbers({
        speed: 1,
        cost: 0,
        productivity: 100,
        satisfaction: 70,
      });
      setIsAnimating(false);
      
      // Start animation after a delay
      const timer = setTimeout(() => {
        startAnimation();
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl max-w-7xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-3 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 z-10 shadow-lg"
        >
          <X className="h-6 w-6 text-gray-600" />
        </button>

        {/* Header */}
        <div className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white p-12 rounded-t-3xl overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
            <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl animate-pulse"></div>
          </div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                AI顧問の
              </span>
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                効率化デモ
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              数字で見る圧倒的な改善効果をリアルタイムで体感
            </p>
            
            <button
              onClick={startAnimation}
              disabled={isAnimating}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 font-medium text-lg disabled:opacity-50"
            >
              <Target className="h-5 w-5" />
              {isAnimating ? 'アニメーション実行中...' : '効率化を体感する'}
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="p-12">
          {/* Dynamic Metrics */}
          <div className="mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              リアルタイム改善指標
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                const currentValue = animatedNumbers[metric.key as keyof typeof animatedNumbers];
                const progress = ((currentValue - metric.from) / (metric.to - metric.from)) * 100;
                
                return (
                  <div
                    key={metric.key}
                    className="group relative"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {/* Background Glow */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${metric.color} rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                    
                    <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                      {/* Progress Bar Background */}
                      <div className="absolute inset-0 opacity-5">
                        <div 
                          className={`h-full bg-gradient-to-r ${metric.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                      
                      <div className="relative z-10 text-center">
                        {/* Icon */}
                        <div className="relative mb-6">
                          <div className={`absolute inset-0 bg-gradient-to-r ${metric.color} rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity animate-pulse`}></div>
                          <div className={`relative bg-gradient-to-r ${metric.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500`}>
                            <Icon className="h-8 w-8 text-white" />
                          </div>
                        </div>
                        
                        {/* Metric Value */}
                        <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                          {currentValue.toLocaleString()}
                          <span className="text-lg">{metric.unit}</span>
                        </div>
                        
                        {/* Label */}
                        <h4 className="text-lg font-bold text-gray-900 mb-3">
                          {metric.label}
                        </h4>
                        
                        {/* Description */}
                        <p className="text-sm text-gray-600 mb-4">
                          {metric.description}
                        </p>
                        
                        {/* Progress Bar */}
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 bg-gradient-to-r ${metric.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                        
                        {/* Achievement Badge */}
                        {progress >= 95 && (
                          <div className="mt-4 inline-flex items-center gap-2 text-green-600 text-sm font-medium">
                            <CheckCircle className="h-4 w-4" />
                            目標達成
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Before/After Comparison */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Before / After 比較
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Before */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 border-2 border-red-200">
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">従来の顧問サービス</h4>
                  <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-medium">
                    Before
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white/60 rounded-lg">
                    <span className="text-gray-700 font-medium">意思決定まで:</span>
                    <span className="font-bold text-lg text-red-600">5日間</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/60 rounded-lg">
                    <span className="text-gray-700 font-medium">月間コスト:</span>
                    <span className="font-bold text-lg text-red-600">¥200,000+</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/60 rounded-lg">
                    <span className="text-gray-700 font-medium">対応時間:</span>
                    <span className="font-bold text-lg text-red-600">営業時間のみ</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/60 rounded-lg">
                    <span className="text-gray-700 font-medium">満足度:</span>
                    <span className="font-bold text-lg text-red-600">70%</span>
                  </div>
                </div>
              </div>

              {/* After */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border-2 border-blue-200 shadow-xl">
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">AI顧問サービス</h4>
                  <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium">
                    After
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white/60 rounded-lg">
                    <span className="text-gray-700 font-medium">意思決定まで:</span>
                    <span className="font-bold text-lg text-blue-600">0.3秒</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/60 rounded-lg">
                    <span className="text-gray-700 font-medium">月間コスト:</span>
                    <span className="font-bold text-lg text-blue-600">¥9,800</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/60 rounded-lg">
                    <span className="text-gray-700 font-medium">対応時間:</span>
                    <span className="font-bold text-lg text-blue-600">24時間365日</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/60 rounded-lg">
                    <span className="text-gray-700 font-medium">満足度:</span>
                    <span className="font-bold text-lg text-blue-600">98%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white mb-8">
              <h3 className="text-2xl font-bold mb-4">この効率化を今すぐ体験しませんか？</h3>
              <p className="text-lg text-blue-100 mb-6">
                14日間の無料トライアルで、あなたのビジネスの変化を実感してください
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  onClick={onClose}
                  className="group inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-medium hover:scale-105"
                >
                  無料トライアル開始
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <button
                  onClick={onClose}
                  className="inline-flex items-center gap-2 bg-white/20 text-white px-8 py-4 rounded-full hover:bg-white/30 transition-all duration-300 font-medium border border-white/20"
                >
                  閉じる
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
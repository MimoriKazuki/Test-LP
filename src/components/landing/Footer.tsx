'use client';

import React from 'react';
import { Brain, Twitter, Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    サービス: [
      { label: 'AIツール選定', href: '#' },
      { label: 'AI実装支援', href: '#' },
      { label: 'DX戦略策定', href: '#' },
      { label: '効果測定・改善', href: '#' },
    ],
    企業情報: [
      { label: '会社概要', href: '#' },
      { label: '採用情報', href: '#' },
      { label: 'ニュース', href: '#' },
      { label: 'ブログ', href: '#' },
    ],
    サポート: [
      { label: 'ヘルプセンター', href: '#' },
      { label: 'よくある質問', href: '#faq' },
      { label: 'お問い合わせ', href: '#contact' },
      { label: '利用規約', href: '#' },
    ],
    法的情報: [
      { label: 'プライバシーポリシー', href: '#' },
      { label: '特定商取引法', href: '#' },
      { label: 'セキュリティ', href: '#' },
      { label: 'サイトマップ', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <Brain className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">AI導入支援</span>
            </div>
            <p className="text-sm mb-6">
              企業のAI導入を成功に導く
              専門コンサルティング
              landBridge
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2025 AI顧問. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm hover:text-white transition-colors">
                Cookie設定
              </a>
              <a href="#" className="text-sm hover:text-white transition-colors">
                アクセシビリティ
              </a>
              <a href="#" className="text-sm hover:text-white transition-colors">
                サイトマップ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI顧問 - 24時間365日対応のAI経営パートナー',
  description: '最先端のAI技術で経営をサポート。24時間365日、専門知識と最新情報で経営判断を支援します。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}

import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * 型安全なクラス名結合ユーティリティ
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * 日付を日本語形式（例: 2024年06月18日 14:30）でフォーマット
 */
export function formatDate(date: Date | string | number): string {
  const d = typeof date === 'string' || typeof date === 'number' ? new Date(date) : date
  const yyyy = d.getFullYear()
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  const hh = String(d.getHours()).padStart(2, '0')
  const min = String(d.getMinutes()).padStart(2, '0')
  return `${yyyy}年${mm}月${dd}日 ${hh}:${min}`
}

/**
 * エラーハンドリング用ヘルパー
 * SupabaseやAPIのエラーをユーザー向けメッセージに変換
 */
export function handleError(error: unknown): string {
  if (!error) return '不明なエラーが発生しました'
  if (typeof error === 'string') return error
  if (error instanceof Error) return error.message
  if (typeof error === 'object' && error !== null && 'message' in error) {
    // @ts-ignore
    return error.message || '不明なエラーが発生しました'
  }
  return '不明なエラーが発生しました'
}

/**
 * メールアドレスのバリデーション
 */
export function isValidEmail(email: string): boolean {
  // RFC 5322に準拠した簡易パターン
  return /^[\w.!#$%&'*+/=?^_`{|}~-]+@[\w-]+(\.[\w-]+)+$/.test(email)
} 
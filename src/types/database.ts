// Auto-generated types for Supabase

export type Json = string | number | boolean | null | { [key: string]: Json } | Json[]

// profiles テーブル
export interface Profile {
  id: string
  email: string | null
  display_name: string | null
  avatar_url: string | null
  created_at: string
  updated_at: string
}

export type ProfilesRow = Profile
export type ProfilesInsert = {
  id: string
  email?: string | null
  display_name?: string | null
  avatar_url?: string | null
  created_at?: string
  updated_at?: string
}
export type ProfilesUpdate = {
  email?: string | null
  display_name?: string | null
  avatar_url?: string | null
  updated_at?: string
}

// avatars テーブル
export interface Avatar {
  id: string
  name: string
  description: string | null
  thumbnail_url: string | null
  image_url: string | null
  personality_traits: any | null
  is_active: boolean
  created_at: string
  updated_at: string
}

export type AvatarsRow = Avatar
export type AvatarsInsert = {
  id?: string
  name: string
  description?: string | null
  thumbnail_url?: string | null
  image_url?: string | null
  personality_traits?: any | null
  is_active?: boolean
  created_at?: string
  updated_at?: string
}
export type AvatarsUpdate = {
  name?: string
  description?: string | null
  thumbnail_url?: string | null
  image_url?: string | null
  personality_traits?: any | null
  is_active?: boolean
  updated_at?: string
}

// Database型（Supabase生成ツール互換）
export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: ProfilesRow
        Insert: ProfilesInsert
        Update: ProfilesUpdate
      }
      avatars: {
        Row: AvatarsRow
        Insert: AvatarsInsert
        Update: AvatarsUpdate
      }
    }
    Views: {}
    Functions: {}
    Enums: {}
    CompositeTypes: {}
  }
} 
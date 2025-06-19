import { createBrowserClient } from '@supabase/ssr'

export const createClient = () => {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
} 

// src/types/database.ts
export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export type ProfilesRow = {
  id: string;
  email: string | null;
  display_name: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
};

export type ProfilesInsert = {
  id: string;
  email?: string | null;
  display_name?: string | null;
  avatar_url?: string | null;
  created_at?: string;
  updated_at?: string;
};

export type ProfilesUpdate = {
  email?: string | null;
  display_name?: string | null;
  avatar_url?: string | null;
  updated_at?: string;
};

export type AvatarsRow = {
  id: string;
  name: string;
  description: string | null;
  thumbnail_url: string | null;
  image_url: string | null;
  personality_traits: Json | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
};

export type AvatarsInsert = {
  id?: string;
  name: string;
  description?: string | null;
  thumbnail_url?: string | null;
  image_url?: string | null;
  personality_traits?: Json | null;
  is_active?: boolean;
  created_at?: string;
  updated_at?: string;
};

export type AvatarsUpdate = {
  name?: string;
  description?: string | null;
  thumbnail_url?: string | null;
  image_url?: string | null;
  personality_traits?: Json | null;
  is_active?: boolean;
  updated_at?: string;
};

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: ProfilesRow;
        Insert: ProfilesInsert;
        Update: ProfilesUpdate;
      };
      avatars: {
        Row: AvatarsRow;
        Insert: AvatarsInsert;
        Update: AvatarsUpdate;
      };
    };
  };
};


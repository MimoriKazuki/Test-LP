'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Database } from '@/types/database'

export const useAuth = () => {
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const queryClient = useQueryClient()
  const supabase = createClient()

  // 現在のユーザー情報を取得
  const { data: user, isLoading: isLoadingUser } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const { data: { user }, error } = await supabase.auth.getUser()
      if (error) throw error
      if (!user) return null
      // プロフィール情報を取得
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()
      if (profileError) throw profileError
      return profile
    },
  })

  // サインアップ
  const signUp = useMutation({
    mutationFn: async ({
      email,
      password,
      displayName,
    }: {
      email: string
      password: string
      displayName: string
    }) => {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            display_name: displayName,
          },
        },
      })
      if (error) throw error
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
      router.push('/dashboard')
    },
    onError: (error: Error) => {
      setError(error.message)
    },
  })

  // ログイン
  const signIn = useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string
      password: string
    }) => {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) throw error
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
      router.push('/dashboard')
    },
    onError: (error: Error) => {
      setError(error.message)
    },
  })

  // ログアウト
  const signOut = useMutation({
    mutationFn: async () => {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
      router.push('/login')
    },
    onError: (error: Error) => {
      setError(error.message)
    },
  })

  // 認証状態の変更を監視
  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(() => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
    })
    return () => {
      listener?.subscription.unsubscribe()
    }
  }, [supabase, queryClient])

  return {
    user,
    isLoadingUser,
    signUp,
    signIn,
    signOut,
    error,
    setError,
  }
} 
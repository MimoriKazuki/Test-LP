import { z } from 'zod'

export const loginSchema = z.object({
  email: z
    .string({ required_error: 'メールアドレスは必須です' })
    .email({ message: '有効なメールアドレスを入力してください' }),
  password: z
    .string({ required_error: 'パスワードは必須です' })
    .min(6, { message: 'パスワードは6文字以上で入力してください' }),
})

export type LoginInput = z.infer<typeof loginSchema>

export const signupSchema = z
  .object({
    email: z
      .string({ required_error: 'メールアドレスは必須です' })
      .email({ message: '有効なメールアドレスを入力してください' }),
    password: z
      .string({ required_error: 'パスワードは必須です' })
      .min(6, { message: 'パスワードは6文字以上で入力してください' }),
    confirmPassword: z
      .string({ required_error: '確認用パスワードは必須です' })
      .min(6, { message: '確認用パスワードは6文字以上で入力してください' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'パスワードが一致しません',
    path: ['confirmPassword'],
  })

export type SignupInput = z.infer<typeof signupSchema> 
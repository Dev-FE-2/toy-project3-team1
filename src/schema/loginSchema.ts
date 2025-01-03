import { z } from 'zod'

export const loginSchema = z.object({
  email: z
    .string()
    .email('유효한 이메일 주소를 입력해주세요.')
    .nonempty('이메일을 입력해주세요.'),
  password: z
    .string()
    .min(6, '비밀번호는 최소 6자 이상이어야 합니다.')
    .nonempty('비밀번호를 입력해주세요.')
})

export type LoginFormInputs = z.infer<typeof loginSchema>
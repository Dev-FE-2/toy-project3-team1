import { supabase } from '../../../supabaseConfig'
import { useNavigate } from 'react-router-dom'
import Input from '@/components/Input/Input'
import LogoImage from '@/assets/img/logo/image.png'
import { Button } from '@/components/button/Button'
import * as S from './login.styles'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema, LoginFormInputs } from '@/schema/loginSchema'

export function Login() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<LoginFormInputs>({ resolver: zodResolver(loginSchema) })

  const handleLogin: SubmitHandler<LoginFormInputs> = async data => {
    const { email, password } = data

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) {
      alert(`로그인 실패: ${error.message}`)
    } else {
      alert('로그인 성공!')
      navigate('/')
    }
  }

  return (
    <S.Container>
      <S.Logo
        src={LogoImage}
        alt="Floli Logo"
      />

      <S.Form onSubmit={handleSubmit(handleLogin)}>
        <S.InputWrapper>
          <Input
            {...register('email')}
            placeholder="example@test.com"
          />
          {errors.email && (
            <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>
          )}
        </S.InputWrapper>
        <S.InputWrapper>
          <Input
            type="password"
            {...register('password')}
            placeholder="비밀번호"
          />
          {errors.password && (
            <S.ErrorMessage>{errors.password.message}</S.ErrorMessage>
          )}
        </S.InputWrapper>

        <Button
          width="100%"
          fontSize="1.8rem"
          disabled={isSubmitting}>
          {isSubmitting ? '로그인 중...' : '로그인'}
        </Button>

        <S.Divider />
        <Button
          width="100%"
          fontSize="1.8rem"
          onClick={() => alert('구글 로그인')}
          disabled={isSubmitting}>
          또는 구글로 로그인
        </Button>
      </S.Form>

      <S.SignupText>
        계정이 없으신가요?{' '}
        <S.SignupLink onClick={() => navigate('/signup')}>
          회원가입하기
        </S.SignupLink>
      </S.SignupText>
    </S.Container>
  )
}

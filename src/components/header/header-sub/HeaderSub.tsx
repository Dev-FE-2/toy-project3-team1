import { IoChevronBack } from 'react-icons/io5'
import * as S from './Header.styled'
import { ReactNode } from 'react'
// import { useNavigate } from 'react-router-dom'

export default function HeaderSub({ children }: { children: ReactNode }) {
  // const navigate = useNavigate()

  // function handleBack() {
  //   navigate(-1)
  // }

  return (
    <S.HeaderWrapper>
      <S.Logo>
        <IoChevronBack />
      </S.Logo>
      <S.Content>{children ? children : ''}</S.Content>
    </S.HeaderWrapper>
  )
}

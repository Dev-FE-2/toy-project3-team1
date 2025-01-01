import { IoChevronBack } from 'react-icons/io5'
import * as S from './Header.styled'
import { ReactNode } from 'react'

export default function HeaderSub({ children }: { children: ReactNode }) {
  return (
    <S.HeaderWrapper>
      <S.Logo>
        <IoChevronBack />
      </S.Logo>
      <S.Content>{children ? children : '콘텐츠 내용'}</S.Content>
    </S.HeaderWrapper>
  )
}

import { IoChevronBack } from 'react-icons/io5'
import * as S from './Header.styled'
import { ReactNode } from 'react'

//컨텐츠 내용과 이벤트는 props로 넣어주세요!

interface HeaderSubProps {
  children: ReactNode
  onClick?: () => void
}

export default function HeaderSub({ children, onClick }: HeaderSubProps) {
  return (
    <S.HeaderWrapper>
      <S.Logo onClick={onClick}>
        <IoChevronBack />
      </S.Logo>
      <S.Content>{children ? children : ''}</S.Content>
    </S.HeaderWrapper>
  )
}

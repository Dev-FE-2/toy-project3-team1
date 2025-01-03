import { IoIosSearch } from 'react-icons/io'
import * as S from './Header.styled'

export default function Header() {
  return (
    <S.HeaderWrapper>
      <S.Logo>Floli</S.Logo>
      <S.SearchIcon>
        <IoIosSearch size={30} />
      </S.SearchIcon>
    </S.HeaderWrapper>
  )
}

import { IoIosSearch } from 'react-icons/io'
import * as S from './Header.styled'
import LogoImage from '@/assets/img/logo/image.png'

export default function Header() {
  return (
    <S.HeaderWrapper>
      <S.Logo
        src={LogoImage}
        alt="Floli Logo"
      />
      <S.SearchIcon>
        <IoIosSearch size={30} />
      </S.SearchIcon>
    </S.HeaderWrapper>
  )
}

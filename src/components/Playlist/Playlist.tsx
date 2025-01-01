import { FaHeart} from 'react-icons/fa'
import { FaEllipsisH } from 'react-icons/fa'
import * as S from './Playlist.styles'
import { PlayListFooter } from './Footer'

const PlayList = ({
  image,
  title,
  date,
  likes,
  comments,
  isLocked = false,
  optionIcon
}: any) => {
  return (
    <S.CardContainer>
      <S.ImageWrapper>
        <img
          src={image}
          alt={title}
        />
      </S.ImageWrapper>
      <S.TextWrapper>
        <S.Title>{title}</S.Title>
        <PlayListFooter
          date={date}
          likes={likes}
          comments={comments}
          isLocked={isLocked}
        />
      </S.TextWrapper>
      <S.Options>
        {optionIcon === 'heart' && <FaHeart />}
        {optionIcon === 'bookmark' && <S.PlaylistSaveIcon />}
        {optionIcon === 'option' && <FaEllipsisH />}
      </S.Options>
    </S.CardContainer>
  )
}

export default PlayList

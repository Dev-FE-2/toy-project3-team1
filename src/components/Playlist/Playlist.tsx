import { FaHeart } from 'react-icons/fa'
import { FaEllipsisH } from 'react-icons/fa'
import * as S from './PlayList.styles'
import { PlayListFooter } from './Footer'
import { PlayListProps } from '@/types/List'

const PlayList = ({
  image,
  title,
  date,
  likes,
  comments,
  isLocked,
  optionIcon,
  nickname
}: PlayListProps) => {
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
          nickname={nickname}
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

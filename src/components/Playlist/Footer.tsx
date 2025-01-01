import * as S from './PlayList.styles'
import { FaHeart, FaLock, FaLockOpen } from 'react-icons/fa'
import { BiConversation } from 'react-icons/bi'

export const PlayListFooter = ({ date, likes, comments, isLocked }: any) => (
  <S.Footer>
    <S.Stat>
      <S.Icon>{isLocked ? <FaLock /> : <FaLockOpen />}</S.Icon>
      {date}
    </S.Stat>
    <S.Stat>
      <S.Icon>
        <FaHeart />
      </S.Icon>
      {likes}
    </S.Stat>
    <S.Stat>
      <S.Icon>
        <BiConversation />
      </S.Icon>
      {comments}
    </S.Stat>
  </S.Footer>
)

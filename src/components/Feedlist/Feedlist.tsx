import { FeedListProps } from '@/types/List'
import * as S from './FeedList.styles'
import { FeedFooter } from './Footer'

/* 사용예시
  <FeedList
        image=""
        profileImage=""
        title=""
        subtitle=""
        likes={}
        comments={}
        date=""
        track={}
      />
*/
const FeedList = ({
  image,
  profileImage,
  title,
  subtitle,
  likes,
  comments,
  date,
  track
}: FeedListProps) => {
  return (
    <S.CardContainer>
      <S.ImageWrapper>
        <img
          src={image}
          alt={title}
        />
        {track > 0 && <S.TrackTag>Track: {track}</S.TrackTag>}
      </S.ImageWrapper>
      <S.ContentWrapper>
        <S.ProfileImage>
          <img
            src={profileImage}
            alt="Profile"
          />
        </S.ProfileImage>
        <S.TextWrapper>
          <S.Title>{title}</S.Title>
          <S.Subtitle>{subtitle}</S.Subtitle>
          <FeedFooter
            likes={likes}
            comments={comments}
            date={date}
          />
        </S.TextWrapper>
      </S.ContentWrapper>
    </S.CardContainer>
  )
}

export default FeedList

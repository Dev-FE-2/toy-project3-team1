import * as S from './DetailPlayList.styles'

/* 사용예시
     <DetailPlayList
        image=""
        title=""
        nickname=""
      />
*/

const DetailPlayList = ({
  image,
  title,
  nickname
}: {
  image: string
  title: string
  nickname: string
}) => {
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
        <S.nickname>{nickname}</S.nickname>
      </S.TextWrapper>
    </S.CardContainer>
  )
}

export default DetailPlayList

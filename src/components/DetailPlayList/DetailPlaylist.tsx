import * as S from './DetailPlayList.styles'

const DetailPlayList = ({ image, title, subtitle }: any) => {
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
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.TextWrapper>
    </S.CardContainer>
  )
}

export default DetailPlayList

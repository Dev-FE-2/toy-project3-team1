import * as S from './PlayList.module'

const PlayListSkeleton = () => {
  return (
    <S.Container>
      <S.Wrapper>
        {[...Array(2)].map((_, index) => (
          <S.ItemContainer key={index}>
            <S.Thumbnail />
            <S.SkeletonAvatar />
            <S.ItemTop />
            <S.ItemMid />
          </S.ItemContainer>
        ))}
      </S.Wrapper>
    </S.Container>
  )
}

export default PlayListSkeleton

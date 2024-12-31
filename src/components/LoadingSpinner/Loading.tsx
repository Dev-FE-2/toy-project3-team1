import * as S from './Loading.module'

export default function Loading() {
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.OuterCircle />
          <S.InnerCircle />
        </S.Wrapper>
      </S.Container>
    </>
  )
}

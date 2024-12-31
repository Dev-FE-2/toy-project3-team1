import styled, { keyframes } from 'styled-components'

const pluse = keyframes`
pulse {
  opacity:0.5;
}
`

export const Container = styled.div`
  width: 360px;

  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

export const ItemContainer = styled.div`
  height: 360px;

  border-radius: 0.75rem;
  background-color: rgba(243, 243, 243, 0.3);
  animation: ${pluse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  display: flex;
  flex-direction: column;
  position: relative;
`

export const Thumbnail = styled.div`
  background-color: rgba(214, 214, 214, 0.5);
  border-radius: 0.75rem;
  height: 250px;
  width: 360px;
`

export const ItemTop = styled.div`
  background-color: rgba(214, 214, 214, 0.5);
  border-radius: 0.75rem;
  height: 40px;
  margin-bottom: 1.2rem;
  width: 60%;

  position: absolute;
  bottom: 40px;
  left: 100px;
`

export const SkeletonAvatar = styled.div`
  width: 50px; /* 아바타 크기 */
  height: 50px; /* 아바타 크기 */
  border-radius: 50%; /* 원형 */
  background-color: #d6d6d6; /* 스켈레톤 바탕색 */
  margin: 8px; /* 위치 간격 */
  position: absolute;
  left: 25px;
  bottom: 20px;
`

export const ItemMid = styled.div`
  background-color: rgba(214, 214, 214, 0.5);
  height: 30px;
  width: 60%;
  margin-bottom: 1.2rem;
  border-radius: 0.75rem;

  position: absolute;
  bottom: 0px;
  left: 100px;
`

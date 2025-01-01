import styled from 'styled-components'
import { FaEllipsisH } from 'react-icons/fa'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: var(--color-bg1);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-s);
  max-width: 300px;
`

export const ImageWrapper = styled.div`
  width: 100%;
  height: 150px;
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-md);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const TrackTag = styled.div`
  position: absolute;
  bottom: var(--spacing-2);
  right: var(--spacing-2);
  background-color: rgba(70, 70, 70, 0.6);
  color: var(--color-white);
  padding: var(--spacing-1) var(--spacing-2);
  font-size: var(--fs-s);
  border-radius: var(--radius-base);
`

export const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding: var(--spacing-4) var(--spacing-3) 0 var(--spacing-3);
`

export const ProfileImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: var(--radius-full);
  overflow: hidden;
  margin-right: var(--spacing-4);
  margin-bottom: var(--spacing-1);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const Title = styled.h3`
  font-size: var(--fs-l);
  font-weight: bold;
  color: var(--color-black);
  margin: 0 0 var(--spacing-1);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

export const Subtitle = styled.p`
  font-size: var(--fs-m);
  color: var(--color-gray);
  margin: var(--spacing-1) 0 0;
`

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: var(--color-gray);
  padding: var(--spacing-2);
`

export const Stat = styled.div`
  display: flex;
  align-items: center;
  font-size: var(--fs-m);
  gap: var(--spacing-1);
`

export const Icon = styled.span`
  font-size: var(--fs-m);
`

export const OptionsIcon = styled(FaEllipsisH)`
  font-size: var(--fs-l);
  margin-bottom: var(--spacing-1);
  color: var(--color-gray);
  cursor: pointer;
`

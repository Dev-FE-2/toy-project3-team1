import styled from 'styled-components'
import { FaEllipsisH} from 'react-icons/fa'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 300px;
`

export const ImageWrapper = styled.div`
  width: 100%;
  height: 150px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const TrackTag = styled.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background-color: rgba(70, 70, 70, 0.6);
  color: white;
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 4px;
`

export const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding: 20px 12px 0 12px;
`

export const ProfileImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 12px;
  margin-bottom: 2px;
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
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin: 0 0 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

export const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0 0 8px;
`

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: #404040;
  margin: 10px 0;
`

export const Stat = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  gap: 4px;
`

export const Icon = styled.span`
  font-size: 14px;
`

export const OptionsIcon = styled(FaEllipsisH)`
  font-size: 16px;
  margin-bottom: 4px;
  color: #404040;
  cursor: pointer;
`

import { ProfileButtonSize } from '@/types/profile'
import styled from 'styled-components'

export const ProfileButtonWrapper = styled.button<{ size?: ProfileButtonSize }>`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  width: ${({ size }) => {
    if (size === 'small') return '4rem'
    if (size === 'medium') return '6.5rem'
    if (size === 'large') return '20rem'
    return size || '6.5rem'
  }};
  height: ${({ size }) => {
    if (size === 'small') return '4rem'
    if (size === 'medium') return '6.5rem'
    if (size === 'large') return '20rem'
    return size || '6.5rem'
  }};
  border-radius: var(--radius-xl);
  overflow: hidden;
  &:hover {
    filter: brightness(1.1);
  }
`

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

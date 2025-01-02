import styled, { keyframes } from 'styled-components'

const slideUp = keyframes`
  100% {
    transform: translateY(0);
  }
`

export const ModalOverlay = styled.div<{ $height?: string }>`
  position: fixed;
  z-index: var(--modal-index);
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${props => (props.$height ? props.$height : 'auto')};
  max-height: 100%;
  background: var(--color-white);
  border-radius: var(--radius-xl) var(--radius-xl) 0 0;
  overflow-y: auto;
  transform: translateY(100%);
  animation: ${slideUp} 0.3s forwards;
`

export const ModalContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const ModalContent = styled.div`
  flex: 1 1 auto;
  padding: var(--layout-padding);
`

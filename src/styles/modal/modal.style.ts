import styled, { keyframes } from 'styled-components'

const slideUp = keyframes`
  100% {
    transform: translate(-50%, 0);
  }
`

export const ModalOverlay = styled.div<{ $height?: string }>`
  position: fixed;
  z-index: var(--modal-index);
  bottom: 0;
  left: 50%;
  width: 100%;
  max-width: var(--max-width);
  height: ${props => (props.$height ? props.$height : 'auto')};
  max-height: 100%;
  background: var(--color-white);
  border-radius: var(--radius-xl) var(--radius-xl) 0 0;
  overflow-y: auto;
  transform: translate(-50%, 100%);
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

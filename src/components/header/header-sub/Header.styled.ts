import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: var(--spacing-3) var(--spacing-4);
  background-color: var(--color-white);
  box-shadow: var(--shadow-s);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--header-index);
  width: 100%;
  height: var(--header-height);
  box-sizing: border-box;
`

export const Logo = styled.div`
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--color-black);
  justify-self: left;
`

export const Content = styled.div`
  justify-self: center;
  font-size: 2.4rem;
  margin: 0 auto;
`

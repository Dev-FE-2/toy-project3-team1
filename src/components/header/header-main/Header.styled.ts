import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-3) 3rem;
  background-color: var(--color-white);
  box-shadow: var(--shadow-s);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--header-index);
  width: 100%;
  height: 6rem;
  box-sizing: border-box;
`

export const Logo = styled.div`
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--color-black);
`

export const SearchIcon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`

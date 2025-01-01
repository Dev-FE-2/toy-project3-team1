import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  background-color: #fff;
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  width: 100%;
  height: 8%;
  box-sizing: border-box;
`

export const Logo = styled.div`
  font-size: 2.4rem;
  font-weight: bold;
  color: #333;
`

export const SearchIcon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`

import styled from 'styled-components'

interface IconProps {
  active?: boolean
  size?: number
}

export const NavbarWrapper = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
  z-index: 2;
`

export const Menu = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
`

export const MenuItem = styled.div`
  align-items: center;
  cursor: pointer;
  text-align: center;

  span {
    font-size: 1.2rem;
    color: #333;
  }
`

export const Icon = styled.div<IconProps>`
  font-size: 2.4rem;
  margin-bottom: 0.5rem;
`

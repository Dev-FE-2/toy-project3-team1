import { Outlet, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../header/header-main/Header'

const Container = styled.div`
  max-width: var(--max-width);
  min-height: 100vh;
  margin: 0 auto;
  background: var(--color-white);
`

const Layout = () => {
  const location = useLocation()
  let shouldHideHeader = false

  switch (location.pathname) {
    case '/login':
    case '/signup':
      shouldHideHeader = true
      break
    default:
      shouldHideHeader = false
  }

  return (
    <Container>
      {!shouldHideHeader && <Header />}
      <Outlet />
    </Container>
  )
}

export default Layout

import { Outlet, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../header/header-main/Header'
import Navbar from '../navbar/Navbar'

const Container = styled.div`
  max-width: var(--max-width);
  min-height: 100vh;
  margin: 0 auto;
  background: var(--color-white);
`

const Layout = () => {
  const location = useLocation()
  let shouldHideHeader = false
  let shouldHideNavbar = false

  switch (location.pathname) {
    case '/login':
    case '/signup':
      shouldHideHeader = true
      shouldHideNavbar = true
      break
    default:
      shouldHideHeader = false
      shouldHideNavbar = false
  }

  return (
    <Container>
      {!shouldHideHeader && <Header />}
      <Outlet />
      {!shouldHideNavbar && <Navbar />}
    </Container>
  )
}

export default Layout

import styled from 'styled-components'
import Home from './pages/Home'
import { Outlet } from 'react-router-dom'
import Login from './pages/Login'

const Container = styled.div`
  max-width: var(--max-width);
  min-height: 100vh;
  margin: 0 auto;
  background: var(--color-white);
`

export default function App() {
  return (
    <Container>
      {/* 나중에 outlet 들어갈 자리 */}
      <Login />
    </Container>
  )
}

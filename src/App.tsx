import styled from 'styled-components'
import Router from './routes/Router'

const Container = styled.div`
  max-width: var(--max-width);
  min-height: 100vh;
  margin: 0 auto;
  background: var(--color-white);
`

export default function App() {
  return (
    <Container>
      <Router />
    </Container>
  )
}

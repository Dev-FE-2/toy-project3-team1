import styled from 'styled-components'

const Container = styled.div`
  max-width: var(--max-width);
  min-height: 100vh;
  margin: 0 auto;
  background: var(--color-white);
`

export default function App() {
  return <Container>{/* 나중에 outlet 들어갈 자리 */}</Container>
}

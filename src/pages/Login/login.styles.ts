import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const Logo = styled.img`
  width: 120px;
  height: auto;
  margin-bottom: 5rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 400px;
`

export const InputWrapper = styled.div`
  margin-bottom: 1.5rem;
`

export const Divider = styled.hr`
  width: 100%;
  margin: 1.8rem 0;
  border: none;
  border-top: 1px solid #ddd;
`
export const SignupText = styled.p`
  margin-top: 1.5rem;
  font-size: 1.5rem;
  color: #333;
  text-align: center;
`

export const SignupLink = styled.span`
  color: #6c43e0;
  font-weight: bold;
  cursor: pointer;
  text-decoration: underline;
  padding-left: 0.5rem;

  &:hover {
    color: #5a38c9;
  }
`
export const ErrorMessage = styled.p`
  font-size: 1.2rem;
  color: red;
  margin-top: 0.5rem;
`

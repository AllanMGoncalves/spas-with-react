import { styled } from 'styled-components'

export const CountdownContainer = styled.div`
  display: flex;
  gap: 1rem;

  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};

  span {
    background: ${(props) => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: ${(props) => props.theme['border-medium']};
  }
`

export const Separator = styled.div`
  width: 4rem;
  display: flex;
  justify-content: center;
  overflow: hidden;

  padding: 2rem 0;
  color: ${(props) => props.theme['gray-600']};
`

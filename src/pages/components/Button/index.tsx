import styled from 'styled-components'

interface ButtonProps {
  backgroundColor: string;
  padding: string;
  border?: string;
  borderRadius?: string;
}

export const Button = styled.button<ButtonProps>`
  padding: ${props => props.padding};
  border: ${props => props.border};
  border-radius: ${props => props.borderRadius};
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  font-weight: 600;
  letter-spacing: 0.07rem;

  :hover {
    cursor: pointer;
  }
`;

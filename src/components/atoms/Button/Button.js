import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.add}; /* props.theme -> CONTEXT API ThemeProvider */
  width: 50px;
  height: 30px;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
  color: white;
  

  ${({ del }) =>
    del &&
    css`
      background-color: hsl(0, 100%, 50%);
    `}
  ${({ edit }) =>
    edit &&
    css`
      background-color: hsl(233, 100%, 50%);
    `}
  ${({ update }) =>
    update &&
    css`
      background-color: hsl(122, 100%, 58%);
    `}
  ${({ cancel }) =>
    cancel &&
    css`
      background-color: hsl(0, 6%, 28%);
    `}
`;

export default Button;

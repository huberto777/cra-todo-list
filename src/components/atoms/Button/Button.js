import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.add}; /* props.theme -> CONTEXT API ThemeProvider */
  width: 20%;
  font-size: ${({ theme }) => theme.fontSize.s};
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-weight: ${({ theme }) => theme.regular};
  text-transform: uppercase;
  color: white;
  padding: 5px 10px 5px 10px;

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

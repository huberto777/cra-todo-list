import styled, { css } from 'styled-components';
import magnifierIcon from 'assets/icons/magnifier.svg';

const Input = styled.input`
  padding: 5px 10px 5px 30px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  background-color: ${({ theme }) => theme.grey400};
  border-radius: 50px;
  border: none;
  color: ${({ theme }) => theme.grey200};
  margin-bottom: 10px;
  width: 40%;

  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.grey200};
    padding-left: 5px;
  }

  ${({ search }) =>
    search &&
    css`
      background-image: url(${magnifierIcon});
      background-position: 10px 50%;
      background-repeat: no-repeat;
    `} /* input nie posiada atrybutu BEFORE, ponieważ nie posiada żadnej zawartości */
`;

export default Input;

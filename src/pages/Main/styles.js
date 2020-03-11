import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Input = styled.input`
  flex: 1;
  border: ${props => (props.error ? '1px solid red' : '1px solid #eee')};
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 16px;
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #7159c1;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & + li {
      border-top: 1px solid #eee;
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;

      color: #ffffff;
      text-decoration: none;
      font-weight: 600;
      height: 40px;
      width: 80px;
      background: #7159c1;
      border-radius: 4px;

      &:hover {
        background: #7f69c7;
        transition: background 0.25s;
      }
    }
  }
`;

import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 940px;
  margin: 0 auto;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    input {
      height: 50px;
      border: 0;
      border-radius: 4px;
      margin-bottom: 10px;
      background: rgba(0, 0, 0, 0.2);
      padding: 15px 20px;
      font-size: 18px;
      line-height: 20px;
      color: #fff;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    hr {
      border: 0;
      height: 1px;
      color: rgba(255, 255, 255, 0.1);
      margin: 20px 0;
    }

    button {
      height: 42px;
      width: 162px;
      border: 0;
      background: #f94d6a;
      color: #fff;
      font-size: 16px;
      line-height: 21px;
      font-weight: bold;
      margin: 20px 0;
      border-radius: 4px;
      transition: background 0.2s;
      align-self: flex-end;

      &:hover {
        background: ${darken(0.08, '#f94d6a')};
      }

      div {
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          margin-right: 15px;
        }
      }
    }
  }
`;

import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 42px;
    height: 42px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 40px;

    input {
      height: 50px;
      width: 315px;
      margin: 10px 0;
      border-style: none;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.2);
      padding: 15px 20px;
      color: rgba(255, 255, 255, 0.5);
      font-size: 18px;
      line-height: 20px;
    }

    button {
      height: 50px;
      width: 315px;
      border-style: none;
      background: #f94d6a;
      color: #fff;
      font-size: 18px;
      margin: 5px 0 15px;
      border-radius: 4px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#f94d6a')};
      }
    }
  }
  a {
    text-align: center;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.6);
    font-size: 16px;
    line-height: 21px;
    transition: color 0.2s;

    &:hover {
      color: #fff;
    }
  }
  span {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.6);
    font-weight: bold;
  }
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  width: 300px;
  height: 400px;
  div {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    p {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 30px;
      color: #666;
      font-weight: bold;
      span {
        font-size: 30px;
        color: #fb8300;
        font-weight: bold;
      }
    }
  }
`;

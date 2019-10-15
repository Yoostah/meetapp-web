import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }
  html, body, #root{
    height: 100%;
  }

  #root{
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }
  body{
    background: transparent linear-gradient(180deg, #22202C 0%, #402845 100%) 0% 0% no-repeat padding-box;
    -webkit-font-smoothing: antaliased !important;
  }
  body, input, button {
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
`;

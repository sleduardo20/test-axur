import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  html{
    font-size: 62.5%;
  }

  html,body, #__next {
    height: 100%;
  }

  a {
    text-decoration: none;
  }

  body{
    font-family: 'Roboto';
    background: ${({ theme }) => theme.colors.gray};
  }
`;

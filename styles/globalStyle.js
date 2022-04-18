import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset}

@font-face {
  font-family:"Inter";
  src: url("./public/font/Inter-Medium.ttf") format("truetype");
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  
}

:root{
    font-size: 10px;
    font-family:'Inter';
  font-weight:600;
  font-size: 10px;
  background-color:#1DB954;

  }
  

button,
input {
  background-color: transparent;
  outline: none;
  border: none;
  font-size: inherit;
}

ul,li {
  list-style: none;
  
}

a {
  color: inherit;
  text-decoration: none;
}
`;

import styled, { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { GlobalStyle } from "../styles/globalStyle";
import SideBar from "../components/SideBar";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <SideBar />
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}
export default MyApp;

const Container = styled.section`
  ${({ theme }) => theme.flexbox()}
  margin-top:5.0rem;
  background-color: yellow;
`;

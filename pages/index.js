import styled from "styled-components";
import Chart from "../components/Chart";

export default function Home() {
  return (
    <Container>
      <Chart />
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  overflow-x: auto;
`;

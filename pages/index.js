import styled from "styled-components";
import ChartList from "../components/ChartList";
import SideBar from "../components/SideBar";

export default function Home() {
  return (
    <Container>
      <ChartList />
    </Container>
  );
}

const Container = styled.div``;

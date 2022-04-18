import React from "react";
import styled from "styled-components";
import SearchBar from "./common/SearchBar";

export default function SideBar() {
  return (
    <Container>
      <SideBarMenuBtn>SIGN OUT</SideBarMenuBtn>
      <SideBarMenuBtn>RECOMMENDATIONS</SideBarMenuBtn>
      <SearchBar />
    </Container>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.flexbox("column", "flex-start", "flex-start")}
  height: 100%;
  padding: 0 1.8rem;
  border-left: 1px solid black;
  border-right: 1px solid black;
`;

const SideBarMenuBtn = styled.button`
  margin-bottom: 6rem;
  font-size: 1.3rem;
  font-weight: 600;
  cursor: pointer;
`;

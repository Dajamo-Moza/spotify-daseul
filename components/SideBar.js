import React from "react";
import styled from "styled-components";

export default function SideBar() {
  return (
    <Container>
      <SideBarMenuBtn>SIGN OUT</SideBarMenuBtn>
      <SideBarMenuBtn>RECOMMENDATIONS</SideBarMenuBtn>
    </Container>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.flexbox("column", "flex-start", "flex-start")}
  /* background-color: yellow; */
  height: 100%;
  border-left: 1px solid black;
  border-right: 1px solid black;
`;

const SideBarMenuBtn = styled.button`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 6rem;
  padding: 0 1.8rem;
  cursor: pointer;
`;

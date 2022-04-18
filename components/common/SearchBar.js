import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar() {
  return (
    <Container>
      <SearchInput></SearchInput>
      <AiOutlineSearch size={15} />
    </Container>
  );
}

const Container = styled.div`
  border-bottom: 1px solid black;
  width: 100%;
`;

const SearchInput = styled.input`
  font-size: 1.3rem;
  font-weight: 600;
  padding: 0.5rem 0.3rem;
`;

import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar() {
  return (
    <Container>
      <SearchInput />
      <AiOutlineSearch size={15} />
    </Container>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.flexbox()}
  width: 100%;
  border-bottom: 1px solid black;
`;

const SearchInput = styled.input`
  padding: 0.5rem 0.3rem;
  font-size: 1.3rem;
  font-weight: 600;
`;

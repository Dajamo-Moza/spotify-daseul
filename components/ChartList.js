import React from "react";
import styled from "styled-components";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ChartList() {
  return (
    <Container>
      <AlbumImgContainer>
        <AlbumImg src="https://image.yes24.com/goods/42764004/XL" />
      </AlbumImgContainer>
      <AlbumInfoContainer>
        <Ranking>1</Ranking>
        <AlbumContents>
          <AlbumTitleContainer>
            <Title>All 4 Nothing</Title>
            <Singer>Lauv</Singer>
          </AlbumTitleContainer>
          <ButtonContainer>
            <AddBtn>
              <FontAwesomeIcon icon={faPlus} size="2x" />
            </AddBtn>
            <SaveBtn>
              <FontAwesomeIcon icon={faHeart} size="2x" />
            </SaveBtn>
          </ButtonContainer>
        </AlbumContents>
      </AlbumInfoContainer>
    </Container>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.flexbox("row", "flex-start", "flex-start")}
  width:70vw;
`;

const AlbumImgContainer = styled.div`
  border-right: 1px solid black;
  padding: 0 1.5rem;
`;

const AlbumImg = styled.img`
  width: 9rem;
`;

const AlbumInfoContainer = styled.div`
  ${({ theme }) => theme.flexbox("row", "flex-start", "flex-start")}
  width: 100%;
  margin: 0 2rem;
  height: 9rem;
  border-bottom: 1px solid black;
`;

const AlbumTitleContainer = styled.div`
  margin-top: 1rem;
`;

const Ranking = styled.p`
  font-size: 6rem;
  margin: 0 1rem;
`;

const AlbumContents = styled.div`
  ${({ theme }) => theme.flexbox("row", "space-between", "flex-start")}
  width:100%;
  margin: 0 1rem;
`;

const Title = styled.p`
  font-size: 1.6rem;
  margin-bottom: 0.3rem;
`;

const Singer = styled.p`
  font-size: 1.4rem;
`;

const ButtonContainer = styled.div`
  margin-top: 1rem;
`;

const AddBtn = styled.button``;

const SaveBtn = styled.button``;

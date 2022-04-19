import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineHeart, AiOutlinePlus } from "react-icons/ai";
import { getRecentReleaseAlbums } from "../utils/APIcontrols";

export default function ChartList() {
  const [albumList, setAlbumList] = useState([]);

  useEffect(() => {
    getRecentReleaseAlbums().then((res) => setAlbumList(res.data.albums.items));
  }, []);

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
            <AddLikeBtn>
              <AiOutlinePlus size={20} />
            </AddLikeBtn>
            <AddLikeBtn>
              <AiOutlineHeart size={20} />
            </AddLikeBtn>
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
  padding: 0 1.5rem;
  border-right: 1px solid black;
`;

const AlbumImg = styled.img`
  width: 9rem;
`;

const AlbumInfoContainer = styled.div`
  ${({ theme }) => theme.flexbox("row", "flex-start", "flex-start")}
  width: 100%;
  height: 9rem;
  margin: 0 2rem;
  border-bottom: 1px solid black;
`;

const AlbumTitleContainer = styled.div`
  margin-top: 1rem;
`;

const Ranking = styled.p`
  margin: 0 1rem;
  font-size: 6rem;
`;

const AlbumContents = styled.div`
  ${({ theme }) => theme.flexbox("row", "space-between", "flex-start")}
  width:100%;
  margin: 0 1rem;
`;

const Title = styled.p`
  margin-bottom: 0.3rem;
  font-size: 1.6rem;
`;

const Singer = styled.p`
  font-size: 1.4rem;
`;

const ButtonContainer = styled.div`
  margin-top: 1rem;
`;

const AddLikeBtn = styled.button`
  padding-left: 1rem;
  cursor: pointer;
`;

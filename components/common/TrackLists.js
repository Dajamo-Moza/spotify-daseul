import React from "react";
import styled from "styled-components";
import { AiOutlineHeart, AiOutlineEllipsis } from "react-icons/ai";

export default function TrackLists() {
  return (
    <Container>
      <AlbumImg src="https://image.bugsm.co.kr/album/images/500/6018/601856.jpg" />
      <TrackListContainer>
        <TrackListContents>
          <TrackTitle>Track 1 Angel 2 me</TrackTitle>
          <LikeOpenBtn>
            <LikeBtn>
              <AiOutlineEllipsis size={20} />
            </LikeBtn>
            <OpenBtn>
              <AiOutlineHeart size={20} />
            </OpenBtn>
          </LikeOpenBtn>
        </TrackListContents>
        <TrackListContents>
          <TrackTitle>Track 1 Angel 2 me</TrackTitle>
          <LikeOpenBtn>
            <LikeBtn>
              <AiOutlineEllipsis size={20} />
            </LikeBtn>
            <OpenBtn>
              <AiOutlineHeart size={20} />
            </OpenBtn>
          </LikeOpenBtn>
        </TrackListContents>
        <TrackListContents>
          <TrackTitle>Track 1 Angel 2 me</TrackTitle>
          <LikeOpenBtn>
            <LikeBtn>
              <AiOutlineEllipsis size={20} />
            </LikeBtn>
            <OpenBtn>
              <AiOutlineHeart size={20} />
            </OpenBtn>
          </LikeOpenBtn>
        </TrackListContents>
      </TrackListContainer>
    </Container>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.flexbox("row", "flex-start", "flex-start")}
  margin: 1rem 0;
`;

const AlbumImg = styled.img`
  width: 30rem;
  padding: 1.5rem;
`;

const TrackListContainer = styled.div`
  width: 100%;
  height: 27rem;
  margin: 1.5rem 1rem;
  overflow-x: auto;
`;

const TrackListContents = styled.div`
  ${({ theme }) => theme.flexbox("row", "space-between", "flex-start")}
  margin-top: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid black;
`;

const TrackTitle = styled.p`
  font-size: 1.5rem;
`;

const LikeOpenBtn = styled.div``;

const LikeBtn = styled.button`
  padding: 0 0.5rem;
  cursor: pointer;
`;

const OpenBtn = styled.button`
  cursor: pointer;
`;
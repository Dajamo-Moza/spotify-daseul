import React, { useEffect, useState } from "react";
import { getRecentReleaseAlbums } from "../utils/APIcontrols";
import Album from "./common/Album";

export default function Chart() {
  const [albumList, setAlbumList] = useState([]);

  useEffect(() => {
    getRecentReleaseAlbums().then((res) =>
      setAlbumList(
        res.data.albums.items.map((album) => {
          return { ...album, isOpen: false };
        })
      )
    );
  }, []);

  console.log("albumList", albumList);

  return (
    <>
      {albumList.map((album, index) => (
        <Album key={album.id} albumInfo={album} rank={index + 1} />
      ))}
    </>
  );
}

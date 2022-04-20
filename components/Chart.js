import React, { useEffect, useState } from "react";
import { getRecentReleaseAlbums } from "../utils/APIcontrols";
import Album from "./common/Album";
import Loading from "./common/Loading";

export default function Chart() {
  const [albumList, setAlbumList] = useState([]);

  useEffect(() => {
    getRecentReleaseAlbums().then((res) => {
      const getCustomAlbumList = (album) => {
        return { ...album, isOpen: false };
      };

      setAlbumList(
        res.data.albums.items.map((album) => getCustomAlbumList(album))
      );
    });
  }, []);

  const toggleAlbumOpen = (albumId) => {
    const getToggledAlbumList = (album, id) => {
      if (album.id === id) {
        return { ...album, isOpen: !album.isOpen };
      } else {
        return album;
      }
    };

    setAlbumList(albumList.map((album) => getToggledAlbumList(album, albumId)));
  };

  return (
    <>
      {albumList.map((album, index) => (
        <Album
          key={album.id}
          toggleAlbumOpen={toggleAlbumOpen}
          albumInfo={album}
          rank={index + 1}
        />
      ))}
    </>
  );
}

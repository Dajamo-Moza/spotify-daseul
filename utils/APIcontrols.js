import { getData } from "./fetchData";

export const getRecentReleaseAlbums = () =>
  getData("get", "/browse/new-releases", {
    params: {
      country: "KR",
      limit: 20,
    },
  });

export const getAlbumTracks = () => {};

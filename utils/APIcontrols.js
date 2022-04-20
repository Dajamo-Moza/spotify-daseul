import { getData } from "./fetchData";

export const getRecentReleaseAlbums = async () =>
  getData("get", "/browse/new-releases", {
    params: {
      country: "KR",
      limit: 20,
    },
  });

export const getAlbumTracks = async (id) =>
  getData("get", `/albums/${id}`, {
    params: {
      market: "KR",
    },
  });

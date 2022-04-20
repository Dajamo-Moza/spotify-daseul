import { fetchData } from "./fetchData";

export const getRecentReleaseAlbums = async () =>
  fetchData("get", "/browse/new-releases", {
    params: {
      country: "KR",
      limit: 20,
    },
  });

export const getAlbumTracks = async (id) =>
  fetchData("get", `/albums/${id}`, {
    params: {
      market: "KR",
    },
  });

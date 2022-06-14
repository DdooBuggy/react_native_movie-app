import { QueryFunctionContext } from "react-query";

const API_KEY = "4d9d00b720becb4f431355610730fd73";
const BASE_URL = "https://api.themoviedb.org/3";

// types ----------------------------------------------------
export interface IMovie {
  poster_path: string | null;
  popularity: number;
  id: number;
  backdrop_path: string | null;
  vote_average: number;
  overview: string;
  genre_ids: number[];
  original_language: string;
  vote_count: number;
  title: string;
  original_title: string;
  adult: boolean;
  release_date: string;
  video: boolean;
}
export interface ITv {
  poster_path: string | null;
  popularity: number;
  id: number;
  backdrop_path: string | null;
  vote_average: number;
  overview: string;
  first_air_date: string;
  origin_country: string[];
  genre_ids: number[];
  original_language: string;
  vote_count: number;
  name: string;
  original_name: string;
  media_type: string;
}
export interface IDetail {
  imdb_id: string | null;
  homepage: string;
  videos: {
    results: {
      site: string;
      key: string;
      name: string;
    }[];
  };
}
interface BaseResponse {
  page: number;
  total_pages: number;
  total_results: number;
}
export interface MovieResponse extends BaseResponse {
  results: IMovie[];
}
export interface TvResponse extends BaseResponse {
  results: ITv[];
}

// APIs ----------------------------------------------------
export const moviesApi = {
  trending: () =>
    fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`).then((res) =>
      res.json()
    ),
  upcoming: ({ pageParam }: QueryFunctionContext) =>
    fetch(
      `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${pageParam}`
    ).then((res) => res.json()),
  nowPlaying: () =>
    fetch(
      `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
    ).then((res) => res.json()),
  search: ({ queryKey }: QueryFunctionContext) => {
    const [_, query] = queryKey;
    return fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${query}`
    ).then((res) => res.json());
  },
  detail: ({ queryKey }: QueryFunctionContext) => {
    const [_, id] = queryKey;
    return fetch(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos,images`
    ).then((res) => res.json());
  },
};
export const tvApi = {
  trending: () =>
    fetch(`${BASE_URL}/trending/tv/week?api_key=${API_KEY}`).then((res) =>
      res.json()
    ),
  airingToday: () =>
    fetch(`${BASE_URL}/tv/airing_today?api_key=${API_KEY}`).then((res) =>
      res.json()
    ),
  topRated: () =>
    fetch(`${BASE_URL}/tv/top_rated?api_key=${API_KEY}`).then((res) =>
      res.json()
    ),
  search: ({ queryKey }: QueryFunctionContext) => {
    const [_, query] = queryKey;
    return fetch(
      `${BASE_URL}/search/tv?api_key=${API_KEY}&language=en-US&page=1&query=${query}`
    ).then((res) => res.json());
  },
  detail: ({ queryKey }: QueryFunctionContext) => {
    const [_, id] = queryKey;
    return fetch(
      `${BASE_URL}/tv/${id}?api_key=${API_KEY}&append_to_response=videos,images`
    ).then((res) => res.json());
  },
};

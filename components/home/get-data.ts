// export const getMoviesList = async (listName: string) => {
//         const res = await fetch(
//       `https://api.themoviedb.org/3/movie/${listName}?language=en-US&page=1`,
//       {
//         method: "GET",
//         headers: {
//           accept: "application/json",
//           Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMDB_ACCESS_KEY}`,
//         },
//       }
//     );
//     const data = await res.json();
//     return data;
//   };

import { movieResponseType } from "@/types";
export const getMoviesList = async (
  listName: string
): Promise<movieResponseType> => {
  // const data = axios.get("https://api.themoviedb.org/3/movie/${listName}?language=en-US&page=1",{
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${listName}?language=en-US&page=1`,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMDB_ACCESS_KEY}`,
      },
    }
  );
  const data = await res.json();
  return {
    ...data,
    results: data.results || [],
  };
};

export const getMovieGenres = async () => {
  // const response =await axios.get ("https://api.themoviedb.org/3/genre/movie/list?language=en",
  const res = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?language=en`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMDB_ACCESS_KEY}`,
      },
    }
  );
  const data = await res.json();
  return data;
};

export const getMovieByGenres = async (genreIds: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${genreIds}&page=${1}=en`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMDB_ACCESS_KEY}`,
      },
    }
  );
  const data = await res.json();
  return data;
};

export const getMoviesByGenreId = async (genreIds: string, page: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${genreIds}&page=${page}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMDB_ACCESS_KEY}`,
      },
    }
  );
  const data = await res.json();
  return data;
};
// /movie/${movieId}?language=en-US
export const getMovieDetail = async (id: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMDB_ACCESS_KEY}`,
      },
    }
  );
  const data = await res.json();
  console.log("getMovieDetail", data);
  return data;
};

// *****************
export const getMovieByDetail = async (id: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMDB_ACCESS_KEY}`,
      },
    }
  );
  const data = await res.json();
  console.log(data, "getMovieByDetail");
  return data;
};

export const getMovieCredits = async (id: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMDB_ACCESS_KEY}`,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch credits");
  return res.json();
};

// *****************

export const getNowPlayingMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMDB_ACCESS_KEY}`,
      },
    }
  );
  const data = await res.json();
  return data;
};

export const getPopularMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMDB_ACCESS_KEY}`,
      },
    }
  );
  const data = await res.json();
  // console.log("DATA IRLEE", data);
  return data;
};

export const getTopRatedMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMDB_ACCESS_KEY}`,
      },
    }
  );
  const data = await res.json();
  return data;
};

export const getUpcomingMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMDB_ACCESS_KEY}`,
      },
    }
  );
  const data = await res.json();
  return data;
};

export const getSearchedMovies = async (searchValue: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchValue}&language=en-US&page=${1}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMDB_ACCESS_KEY}`,
      },
    }
  );
  const data = await res.json();
  return data;
};

export const getMoreLikeThis = async (id: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMDB_ACCESS_KEY}`,
      },
    }
  );
  const data = await res.json();
  return data;
};

export const getMovieTrailer = async (movieId: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMDB_ACCESS_KEY}`,
      },
    }
  );
  const data = await res.json();
  // console.log(data, "data");
  return data;
};

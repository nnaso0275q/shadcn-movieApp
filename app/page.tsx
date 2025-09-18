import { CarouselSection } from "@/components/home/carouselSection";
import MoviesContainer from "@/components/home/moviesContainer";
import { movieResponseType } from "@/types";
import { getMoviesList } from "@/components/home/get-data";

export default async function Home() {

  const upcomingMovies: movieResponseType = await getMoviesList("upcoming");
  const popularMovies: movieResponseType = await getMoviesList("popular");
  const topRatedMovies: movieResponseType = await getMoviesList("top_rated");
  const nowPlayingMovies: movieResponseType = await getMoviesList("now_playing");


  const upcoming = upcomingMovies?.results || [];
  const popular = popularMovies?.results || [];
  const topRated = topRatedMovies?.results || [];
  const nowPlaying = nowPlayingMovies?.results || [];

  return (
    <>
      <CarouselSection movies={upcoming} />
      <MoviesContainer movies={upcoming} title="Upcoming" />
      <MoviesContainer movies={popular} title="Popular" />
      <MoviesContainer movies={topRated} title="Top Rated" />
      <MoviesContainer movies={nowPlaying} title="Now Playing" />
    </>
  );
}

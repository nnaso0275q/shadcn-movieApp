import CarouselSection from "@/components/home/carouselSection";
import MoviesContainer from "@/components/home/moviesContainer";
import { movieResponseType } from "@/types";
import { getMoviesList } from "@/components/home/get-data";

export default async function Home() {
  const upcomingMovies: movieResponseType = await getMoviesList("upcoming");
  const popularMovies: movieResponseType = await getMoviesList("popular");
  const topRatedMovies: movieResponseType = await getMoviesList("top_rated");
  const moreLikeThis: movieResponseType = await getMoviesList("More_like_this");

  const upcoming = upcomingMovies?.results || [];
  const popular = popularMovies?.results || [];
  const topRated = topRatedMovies?.results || [];
  const nowPlaying = moreLikeThis?.results || [];

  return (
    <>
      <CarouselSection movies={upcoming} />
      
      <div className="max-w-fit mx-auto">
      <MoviesContainer movies={upcoming} title="Upcoming" />
      <MoviesContainer movies={popular} title="Popular" />
      <MoviesContainer movies={topRated} title="Top Rated" />
      </div>
    </>
  );
}

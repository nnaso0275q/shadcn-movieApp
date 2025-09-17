import {
  getNOwPlayingMovies,
  getPopularMovies,
  getUpcomingMovies,
  getTopRatedMovies,
} from "@/components/home/get-data";
import MoviesContainer from "@/components/home/moviesContainer";
import { movieResponseType } from "@/types";

interface Props {
  searchParams: {
    title: string;
  };
}

const SeeMorePage = async ({ searchParams: { title } }: Props) => {
  let movies: movieResponseType;

  if (title === "Now Playing") {
    movies = await getNOwPlayingMovies();
  } else if (title === "Upcoming") {
    movies = await getUpcomingMovies();
  } else if (title === "Top Rated") {
    movies = await getTopRatedMovies();
  } else if (title === "Popular") {
    movies = await getPopularMovies();
  }

  return (
    <div className="py-10 w-full">
      <h2 className="text-3xl font-bold px-10 mb-5  max-sm:text-2xl">
        "Results of {title}"
      </h2>

      <MoviesContainer movies={movies!.results} title={title} />
    </div>
  );
};

export default SeeMorePage;

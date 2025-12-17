import {
  getNowPlayingMovies,
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
  let movies: movieResponseType | null = null;

  try {
    if (title === "Now Playing") {
      movies = await getNowPlayingMovies();
    } else if (title === "Upcoming") {
      movies = await getUpcomingMovies();
    } else if (title === "Top Rated") {
      movies = await getTopRatedMovies();
    } else if (title === "Popular") {
      movies = await getPopularMovies();
    }
  } catch (error) {
    console.error("Error fetching movies:", error);
  }

  if (!movies?.results) {
    return (
      <div className="w-full px-10">
        <h2 className="text-3xl font-bold mb-5 max-sm:text-2xl">{title}</h2>
        <p>No movies found.</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold px-10 mb-5 max-sm:text-2xl">{title}</h2>
      <MoviesContainer movies={movies.results} title={title} />
    </div>
  );
};


export default SeeMorePage;

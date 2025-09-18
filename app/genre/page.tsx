import { movieResponseType } from "@/types";
import { getMoviesByGenreId } from "@/components/home/get-data";
import MoviesContainer from "@/components/home/moviesContainer";

type GenrePageProps = {
  searchParams: Promise<{
    id: string;
    name: string;
    page: string;
  }>;
};

const Genre = async ({ searchParams }: GenrePageProps) => {
  const params = await searchParams;
  const id = params.id;
  const name = params.name;
  const page = params.page || "1";

  const filteredMoviesResponse: movieResponseType = await getMoviesByGenreId(
    id,
    page
  );
  return (
    <div>
      <div className="flex flex-wrap gap-3">
        <MoviesContainer movies={filteredMoviesResponse.results} title={name} />
        {/* {filteredMoviesResponse.results.slice(0, 10).map((movie) => (
          <MoviesContainer
            key={movie.id}
            id={movie.id}
            title={movie.title}
            score={movie.vote_average}
            image={movie.poster_path}
          />
        ))} */}
      </div>
    </div>
  );
};

export default Genre;

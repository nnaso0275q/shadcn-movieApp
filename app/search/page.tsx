import { getSearchedMovies } from "@/components/home/get-data";
import MoviesContainer from "@/components/home/moviesContainer";
import SearchResalt from "@/components/home/Searchresalt";
import { movieResponseType } from "@/types";

type Props = {
  searchParams: {
    query: string;
  };
};
const SearchPage = async ({ searchParams }: Props) => {
  const query = searchParams.query;

  if (!query) return null;

  const data: movieResponseType = await getSearchedMovies(query);

  return (
    <div className="flex-1 container px-4 md:px-10 py-8">
      <div className="flex gap-4 w-full">
        <div className="flex-1">
          <MoviesContainer
            movies={data.results}
            title={`Search results for "${query}"`}
          />
        </div>

        <div className="w-1 border-r border-gray-300"></div>

        <div className="flex-1">
          <SearchResalt />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;

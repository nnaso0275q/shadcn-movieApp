import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MovieType } from "@/types";
import { Star } from "lucide-react";

type Props = {
  movies: MovieType[];
};

export default function PopularMovies({ movies }: Props) {
  return (
    <div>
      {/* Movie List */}
      <div className="flex md:grid-cols-5 gap-[32] flex-wrap ">
        {movies.map((movie, i) => (
          <Card
            key={i}
            className="rounded-2xl shadow-md hover:shadow-lg transition w-[230] bg-secondary p-0 gap-2"
          >
            <CardContent className="p-0 ">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
                className="w-[230] object-cover rounded-t-2xl "
              />
            </CardContent>
            <CardFooter className="flex flex-col items-start p-3">
              <div className="flex items-center gap-1 text-sm text-gray-700 mb-1">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-muted-foreground">
                  {movie.vote_average}/10
                </span>
              </div>
              <p className="text-sm font-medium">{movie.title}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

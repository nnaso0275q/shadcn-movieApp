import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MovieType } from "@/types";
import { Star } from "lucide-react";

type Props = {
  movies: MovieType[];
  title: string;
};

export default function PopularMovies({ movies, title }: Props) {
  return (
    <div className="mx-[80px] mt-[52px]">
      <div className="flex gap-[1080] mb-6 justify-between">
        <h2 className="text-2xl font-bold">Popular</h2>
        <button className="text-sm  hover:underline">See more →</button>
      </div>
      {/* Movie List */}
      <div className="flex md:grid-cols-5 gap-[32] flex-wrap ">
        {movies.slice(0, 10).map((movie, i) => (
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

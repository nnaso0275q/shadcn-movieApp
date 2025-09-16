import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MovieType } from "@/types";
import { Star } from "lucide-react";
import Link from "next/link";

type Props = {
  movies: MovieType[];
  title: string;
};

export default function MoviesContainer({ movies, title }: Props) {
  return (
    <div className=" mt-[52px] mx-[80px]">
      <div className="flex mb-6 justify-between">
        <h2 className="text-2xl font-bold">{title}</h2>
        <button className="text-sm  hover:underline">See more →</button>
      </div>
      <div className="justify-between gap-[32px] flex flex-wrap w-[1280px]">
        {movies.slice(0, 10).map((movie) => (
          <Link key={movie.id} href={`/detail/${movie.id}`}>
            <Card
              key={movie.id}
              className="rounded-2xl shadow-md hover:shadow-lg transition w-[230px] bg-secondary p-0 gap-2"
            >
              <CardContent className="p-0">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  className="w-[230px] object-cover rounded-t-2xl"
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
          </Link>
        ))}
      </div>
    </div>
  );
}

"use client"
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MovieType } from "@/types";
import { Star } from "lucide-react";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

type Props = {
  movies: MovieType[] | null;
  title: string;
};

export default function MoviesContainer({ movies, title }: Props) {
  const isLoading = !movies;

  return (
    <div className="max-w-fit">
    <div className="mt-[52px] mx-[80px]">
      <div className="flex mb-6 justify-between">
        <h2 className="text-2xl font-bold">{title}</h2>
        <button className="text-sm hover:underline">
          <Link href={{ pathname: "/seeMore", query: { title: title } }}>
            See more →
          </Link>
        </button>
      </div>
      <div className="flex flex-wrap justify-between gap-[32px] w-[1280px]">
        {isLoading
          ? Array.from({ length: 10 }).map((_, index) => (
              <Card
                key={index}
                className="rounded-2xl shadow-md w-[230px] h-[440px] p-0 gap-2"
              >
                <CardContent className="p-0">
                  <Skeleton className="w-[230px] h-[330px] rounded-t-2xl" />
                </CardContent>
                <CardFooter className="flex flex-col p-3 gap-2">
                  <Skeleton className="h-4 w-[50%] rounded" />
                  <Skeleton className="h-6 w-[80%] rounded" />
                </CardFooter>
              </Card>
            ))
          : movies?.slice(0, 10).map((movie) => (
              <Link key={movie.id} href={`/detail/${movie.id}`}>
                <Card className="rounded-2xl shadow-md inset-0 object-cover hover:brightness-75 hover:scale-105 transition duration-300 w-[230px] h-[440px] bg-secondary p-0 gap-2">
                  <CardContent className="p-0">
                    <Image
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt={movie.title}
                      className="w-[230px] object-cover rounded-t-2xl"
                    />
                  </CardContent>
                  <CardFooter className="flex flex-col p-3 items-start">
                    <div className="flex gap-1 text-sm text-gray-700 mb-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-muted-foreground">
                        {movie.vote_average}/10
                      </span>
                    </div>
                    <h1 className="text-foreground">{movie.title}</h1>
                  </CardFooter>
                </Card>
              </Link>
            ))}
      </div>
    </div>
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { getSearchedMovies } from "../home/get-data";
import { movieResponseType } from "@/types";
import Link from "next/link";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";

export const SearchSection = () => {
  const [searchValue, setSearchValue] = useState("");
  const [foundMovies, setFoundMovies] = useState<movieResponseType | null>(
    null
  );
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!searchValue.trim()) {
      setIsOpen(false);
      setFoundMovies(null);
      return;
    }

    setIsLoading(true);
    const timer = setTimeout(async () => {
      try {
        const data = await getSearchedMovies(searchValue);
        setFoundMovies(data);
      } catch (err) {
        console.error(err);
        setFoundMovies(null);
      } finally {
        setIsOpen(true);
        setIsLoading(false);
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [searchValue]);

  const renderSkeleton = () => {
    return Array.from({ length: 5 }).map((_, idx) => (
      <div
        key={idx}
        className="flex gap-4 p-2 rounded-lg animate-pulse bg-muted/20"
      >
        <div className="w-[67px] h-[100px] rounded-xl bg-muted" />
        <div className="flex-1 space-y-2 py-1">
          <div className="h-4 w-3/4 bg-muted rounded" />
          <div className="h-3 w-1/4 bg-muted rounded" />
        </div>
      </div>
    ));
  };

  return (
    <div className="w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto">
      <Popover open={isOpen} onOpenChange={setIsOpen} modal={false}>
       
        <PopoverTrigger asChild>
          <div>
            <Input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search movies..."
              className="w-full text-white"
              onFocus={() => {
                if (searchValue.trim()) setIsOpen(true);
              }}
            />
          </div>
        </PopoverTrigger>

        <PopoverContent
          side="bottom"
          align="start"
          className="w-full md:w-[500px] p-4 space-y-3"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          {isLoading && renderSkeleton()}

          {!isLoading &&
            foundMovies?.results.slice(0, 5).map((movie) => (
              <div
                key={movie.id}
                className="flex gap-4 p-2 rounded-lg hover:bg-muted/40 transition"
              >
                <Image
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  className="w-[67px] h-[100px] rounded-xl object-cover"
                  alt={movie.title}
                />

                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <p className="font-medium">{movie.title}</p>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      {movie.vote_average}/10
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span>{movie.release_date}</span>
                    <Link
                      href={`/detail/${movie.id}`}
                      className="hover:underline"
                    >
                      See more →
                    </Link>
                  </div>
                </div>
              </div>
            ))}

          {!isLoading && foundMovies && (
            <>
              <div className="border-t pt-2" />
              <Link
                href={`/search?query=${searchValue}`}
                className="text-sm font-medium hover:underline"
              >
               {`See all results for "${searchValue}"`}
              </Link>
            </>
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
};

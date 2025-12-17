import React from "react";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { GenreResponseType } from "@/types";
import { getMovieGenres } from "../home/get-data";

export default async function GenreDropDown() {
  const genreData: GenreResponseType = await getMovieGenres();

  return (
    <div>
      <div className="w-[500px] h-[300px]">
        <div className="inter text-2xl font-semibold ml-4 pl-5">Genres</div>
        <p className="inter font-normal text-base ml-4 mt-0 pl-5 mb-4">
          See lists of movies by genre
        </p>

        <div className="ml-5 mt-4 hover: !bg-transparent flex flex-wrap gap-4">
          {genreData.genres?.map((genre) => (
            <Link
              href={`/genre?id=${genre.id}&name=${genre.name}`}
              key={genre.id}
              className="flex items-center"
            >
              <Badge variant={"outline"}>
                {genre.name}
                <ChevronRight className="w-4 h-4"></ChevronRight>
              </Badge>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

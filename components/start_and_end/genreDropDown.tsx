import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { GenreResponseType } from "@/types";
import { getMovieGenres } from "../home/get-data";

export default async function genreDropDown() {
  const GenreResponseType: GenreResponseType = await getMovieGenres();
  console.log("GENRE RES", GenreResponseType);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <ChevronDown></ChevronDown>Genre
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[577px] h-[333px]" align="start">
        <DropdownMenuLabel className="inter text-2xl font-semibold ml-4 pl-5">
          Genres
        </DropdownMenuLabel>
        <p className="inter font-normal text-base ml-4 mt-0 pl-5 mb-4">
          See lists of movies by genre
        </p>
        <DropdownMenuShortcut></DropdownMenuShortcut>
        <DropdownMenuSeparator />

        <DropdownMenuItem className="ml-5 mt-4 hover: !bg-transparent flex flex-wrap gap-4">
          {GenreResponseType.genres.map((genre) => (
            <Link
              key={genre.id}
              href={`/genre?id=${genre.id}&name=${genre.name}`}
              className="flex items-center "
            >
              <Badge variant={"outline"}>
                {genre.name}
                <ChevronRight className="w-4 h-4"></ChevronRight>
              </Badge>
            </Link>
          ))}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

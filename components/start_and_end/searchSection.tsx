"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { movieResponseType } from "@/types";
import { getSearchedMovies } from "../home/get-data";
import { MovieType } from "@/types";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Link } from "lucide-react";

type Props = {
  movies: MovieType[];
  title: string;
};
export const SearchSection = ({ movies }: Props) => {
  const [searchValue, setSearchValue] = useState("");
  const [foundMovies, setFoundMovies] = useState<movieResponseType | null>(
    null
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
    const foundData = await getSearchedMovies(value);
    if (value.length > 0) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }

    setFoundMovies(foundData);
  };
  return (
    <div>
      <Input
        value={searchValue}
        onChange={handleChange}
        className="w-[380] h-[36] mr-[200] pl-10"
        placeholder="Search..."
      />
      <div>
        <Popover open={isOpen}>
          <PopoverTrigger className="hidden" />

          <PopoverContent className="w-[570px] ml-[540px] mt-[50px]">
            <div>
              {foundMovies?.results.slice(0, 5).map((movie, index) => {
                return (
                  <div key={index} className="flex">
                    <div
                      key={index}
                      className="rounded-2xl shadow-md hover:shadow-lg hover:scale-105 w-[67px] h-[100px] bg-secondary p-0 gap-2 mt-[5px]"
                      // {movies.poster_path}
                    ></div>

                    <div>
                      <div className="mt-[5px] ml-[5px]">{movie.title}</div>

                      <div className="flex gap-1 text-sm text-gray-700 mb-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-muted-foreground">
                          {movie.vote_average}/10
                        </span>
                      </div>
                      {/* Garsan on */}
                      <button className="text-sm  hover:underline ml-[]">
                        {/* <Link href={{ pathname: "/seeMore", query: { title: title } }}> */}
                        See more →{/* </Link> */}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="border-b-[1px] w-[540px]  border-solid my-[8px]"></div>
            <button className="hover:underline text-foreground inter text-sm font-medium">
              {/* <Link href={`/search/${searchValue}`}> */}
              See all results for "{searchValue}"{/* </Link> */}
            </button>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

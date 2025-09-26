"use client";

import { useState } from "react";

import { Input } from "@/components/ui/input";
import { movieResponseType } from "@/types";
import { getSearchedMovies } from "../home/get-data";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Link } from "lucide-react";
export const SearchSection = () => {
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
          <PopoverContent className="w-80">
            <div>
              {foundMovies?.results.slice(0, 5).map((movie, index) => {
                return <div key={index}>{movie.title}</div>;
              })}
            </div>
            <Link href={`/Search?value=${searchValue}`}>
              See all results for {searchValue}
            </Link>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

import { ThemeToggler } from "../home/ThemeToggler";

import { DropdownMenu } from "@/components/ui/dropdown-menu";
import GenreDropDown from "@/components/start_and_end/genreDropDown";
import { Search } from "lucide-react";
import Link from "next/link";
import { SearchSection } from "@/components/start_and_end/searchSection";
export default function Loader() {
  return (
    <div className="w-full h-fit ">
      <div className="max-w-[1280px] flex my-[11.5] justify-between m-auto mx-[80px]">
        <Link href={"/"}>
          <img src="/movieZ.svg"></img>
        </Link>

        <DropdownMenu></DropdownMenu>
        <div className="flex gap-5 items-center">
          <GenreDropDown></GenreDropDown>
          <div className="flex ml-5  items-center">
            <Search className="w-[12px] h-[12px] -mr-8 " />
            <SearchSection></SearchSection>
          </div>
          <ThemeToggler></ThemeToggler>
        </div>
      </div>
    </div>
  );
}

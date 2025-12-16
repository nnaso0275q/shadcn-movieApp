import { ThemeToggler } from "../home/ThemeToggler";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import GenreDropDown from "@/components/header/genreDropDown";
import Link from "next/link";
import { SearchSection } from "@/components/header/searchSection";
import Image from "next/image";
export default function Loader() {
  return (
    <div className="w-full h-fit ">
      <div className="max-w-[1280px] flex my-[11.5] justify-between m-auto mx-[80px]">
        <Link href={"/"}>
          <Image alt="" src="/movieZ.svg"></Image>
        </Link>

        <DropdownMenu></DropdownMenu>
        <div className="flex gap-5">
          <GenreDropDown></GenreDropDown>       
            <SearchSection></SearchSection>
          <ThemeToggler></ThemeToggler>
        </div>
      </div>
    </div>
  );
}

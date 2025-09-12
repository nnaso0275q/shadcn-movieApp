import { ThemeToggler } from "../home/ThemeToggler";
import { Input } from "@/components/ui/input";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import GenreDropDown from "@/components/start_and_end/genreDropDown";
import { Search } from "lucide-react";
export default function Loader() {
  return (
    <div className="w-full h-fit ">
      <div className="max-w-[1280px] flex my-[11.5] justify-between m-auto mx-[80px]">
        <img src="movie z.svg"></img>
        <DropdownMenu></DropdownMenu>
        <div className="flex gap-5 items-center">
          <GenreDropDown></GenreDropDown>
          <div className="flex ml-5  items-center">
            <Search className="w-[12px] h-[12px] -mr-8 " />
            <Input
              className="w-[380] h-[36] mr-[200] pl-10"
              placeholder="Search..."
            ></Input>
          </div>
          <ThemeToggler></ThemeToggler>
        </div>
      </div>
    </div>
  );
}

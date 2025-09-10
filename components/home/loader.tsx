import { ThemeToggler } from "./ThemeToggler"
import { Input } from "@/components/ui/input"
export const Loader=()=>{
    return(
        <div className="w-[1440] h-fit flex my-[11.5]">
            <img className="ml-[80] " src="movie z.svg"></img>
            <Input className="w-[380] h-[36] ml-[440] mr-[200]"></Input>
            <ThemeToggler></ThemeToggler>
        </div>
    )
}

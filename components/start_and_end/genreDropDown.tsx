import React from 'react'
   import { Button } from "@/components/ui/button"
   import { Badge}  from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,

  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, ChevronRight} from 'lucide-react'
import Link from "next/link"

const GENRES=[
    {
        name: "Action"
    },
    {
        name: "Adventure"
    },
        {
        name: "Animation"
    },
        {
        name: "Biography"
    },
        {
        name: "Comedy"
    },
        {
        name: "Crime"
    },
        {
        name: "Documentary"
    },
            {
        name: "Drama"
    },
            {
        name: "Family"
    },
            {
        name: "Fantasy"
    },


]

export default function genreDropDown(){
  return (

    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <Button variant="outline"><ChevronDown></ChevronDown>Genre</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[577] h-[333]" align="start">
        <DropdownMenuLabel className='inter text-2xl font-semibold ml-4 pl-5'>Genres</DropdownMenuLabel>   
          <p className='inter font-normal text-base ml-4 mt-0 pl-5 mb-4'>
            See lists of movies by genre
           
          </p>
           <DropdownMenuShortcut></DropdownMenuShortcut>
        <DropdownMenuSeparator />

<DropdownMenuItem className="ml-5 mt-4 hover: !bg-transparent flex flex-wrap gap-4">
   {GENRES.map((genre)=>(
    <Link key={genre.name} href="/genre" className='flex items-center '>
    <Badge  variant={"outline"}>
        {genre.name}
        <ChevronRight className='w-4 h-4'></ChevronRight>
    </Badge>
    </Link>
  ))}
</DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>
  )
}


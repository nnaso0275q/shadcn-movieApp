

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star } from "lucide-react"

   const movies = [
       {
    title: "Dear Santa",
    rating: 6.9,
    poster: "DearCanta.jpg", 
  },
  {
    title: "How To Train Your Dragon Live Action",
    rating: 6.9,
    poster: "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "Alien Romulus",
    rating: 6.9,
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/Alien_Romulus_2024_%28poster%29.jpg/250px-Alien_Romulus_2024_%28poster%29.jpg",
  },
  {
    title: "From the Ashes",
    rating: 6.9,
    poster: "https://m.media-amazon.com/images/M/MV5BNzg2Mzc2OTEtZGNlZS00NTk5LThlMjYtZjM5MDZiOWZiM2RiXkEyXkFqcGc@._V1_.jpg",
  },
  {
    title: "Space Dogg",
    rating: 6.9,
    poster: "https://m.media-amazon.com/images/M/MV5BNjM1MzhhYjUtZGNlNy00MzUxLWI0ZDAtZjhlMDY5NDAxODZkXkEyXkFqcGc@._V1_.jpg",
  },


]
const NewMovies =[
    {
    title: "The Order",
    rating: 6.9,
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlQjAa-ocbeynxzH0BVw2OHdyCMkomnbvhlgNrNU5I51MjpbOg"
  },

    {
    title: "Y2K",
    rating: 6.9,
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Y2k_2024_movie.jpeg/250px-Y2k_2024_movie.jpeg"
  },
    {
    title: "Solo Leveling: ReAwakeninig",
    rating: 6.9,
    poster: "https://m.media-amazon.com/images/M/MV5BYTIwYzk3YmQtZmMwNS00ZDAwLTk5Y2MtOTEwODFlZmExMzliXkEyXkFqcGc@._V1_.jpg"
  },
    {
    title: "Get Away",
    rating: 6.9,
    poster: "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/130/2024/11/07213941/vjQQTseye7Ofe8uDTnixk4YcQNe-scaled.jpg"
  },
      {
    title: "Sonic the Hedgehog 3",
    rating: 6.9,
    poster: "https://resizing.flixster.com/5yCDU3YndW2EIWaEwH1FydaMwZI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2E0MGM5YTk5LTdhY2UtNGYzNS04NGVmLTJlNjRkYjljNjQ4ZS5qcGc="
  },
]
export default function upComingMovies(){
return(
  <div>
    <div className="flex md:grid-cols-5 gap-[32]">
      {movies.map((movie, i) => (
        <Card key={i} className="rounded-2xl shadow-md hover:shadow-lg transition w-[230px] bg-secondary p-0 gap-2">
          <CardContent className="p-0">
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-[230px] object-cover rounded-t-2xl"
            />
          </CardContent>
          <CardFooter className="flex flex-col items-start p-3">
            <div className="flex items-center gap-1 text-sm text-gray-700 mb-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-muted-foreground">{movie.rating}/10</span>
            </div>
            <p className="text-sm font-medium">{movie.title}</p>
          </CardFooter>
        </Card>
      ))}
    </div>

    <div className="p-0 mt-[32px]">
      <div className="flex md:grid-cols-5 gap-[32px]">
        {NewMovies.map((movie, i) => (
          <Card key={i} className="rounded-2xl shadow-md hover:shadow-lg transition w-[230px] bg-secondary p-0 gap-2">
            <CardContent className="p-0">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-[230px] object-cover rounded-t-2xl"
              />
            </CardContent>
            <CardFooter className="flex flex-col items-start p-3">
              <div className="flex items-center gap-1 text-sm text-gray-700 mb-1">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-muted-foreground">{movie.rating}/10</span>
              </div>
              <p className="text-sm font-medium">{movie.title}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  </div>
)
       

}
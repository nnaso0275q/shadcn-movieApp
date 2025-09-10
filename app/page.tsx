import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star } from "lucide-react"
import {Loader} from "@/components/home/loader"
import { CarouselSection } from "@/components/home/carouselSection"
import UpComingMovies from "@/components/home/upComingMovies"



const PopularMovies=[
   {
    title: "Pulp The Shawshank Redemption",
    rating: 6.9,
    poster: "https://m.media-amazon.com/images/S/pv-target-images/d26b48f88d5398cad86d2fd26d32b258d43e51d4e2f949c3848be69a1e147446.jpg"
  },

    {
    title: "The Godfather",
    rating: 6.9,
    poster: "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
    {
    title: "The Dark Knight",
    rating: 6.9,
    poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"
  },
    {
    title: "12 Angry Men",
    rating: 6.9,
    poster: "https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg"
  },
      {
    title: "The Lord of the Rings: The  Return of the King",
    rating: 6.9,
    poster: "https://m.media-amazon.com/images/M/MV5BMTZkMjBjNWMtZGI5OC00MGU0LTk4ZTItODg2NWM3NTVmNWQ4XkEyXkFqcGc@._V1_.jpg"
  },
]

const NewPopularMovies=[
   {
    title: "Internstellar",
    rating: 6.9,
    poster: "https://play-lh.googleusercontent.com/D5FtnFBPO_FitBIqjCffRZrhZf84Xm3mVoqQDUD2ZGq-Z4LftUotgRj4WquMQhDs1nL46NQxu7Rr2ahbFrWM"
  },

    {
    title: "Se7en",
    rating: 6.9,
    poster: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/se7en_2.png"
  },
    {
    title: "It's a Wonderful life",
    rating: 6.9,
    poster: "https://upload.wikimedia.org/wikipedia/commons/2/25/It%27s_a_Wonderful_Life_%281946_poster%29.jpeg"
  },
    {
    title: "Seven samurai",
    rating: 6.9,
    poster: "https://m.media-amazon.com/images/M/MV5BZDg4MTYyYjktZGJiYy00ZGIwLWEzNTMtNTZkMjRhYTViMWE4XkEyXkFqcGc@._V1_.jpg"
  },
      {
    title: "The Silence of the Lambs",
    rating: 6.9,
    poster: "https://m.media-amazon.com/images/M/MV5BNDdhOGJhYzctYzYwZC00YmI2LWI0MjctYjg4ODdlMDExYjBlXkEyXkFqcGc@._V1_.jpg"
  },
]


export default function MoviesList() {
  return (
   
    <div className="w-[1440] pl-[100] h-fit">
      <Loader></Loader>
       <CarouselSection></CarouselSection>


      {/* UPCOMING MOVIES */}
      <div className="p-0 mt-[52]">
      <div className="flex gap-[1080] mb-6 ">
        <h2 className="text-2xl font-bold">Upcoming</h2>
        <button className="text-sm  hover:underline">
          See more →  
        </button>
      </div>
        <UpComingMovies></UpComingMovies>
      </div>



  {/* POPULAR MOVIES */}
         <div className="p-0 mt-[52]">
      <div className="flex gap-[1080] mb-6 ">
        <h2 className="text-2xl font-bold">Popular</h2>
        <button className="text-sm  hover:underline">
          See more →
        </button>
      </div>

      {/* Movie List */}
      <div className="flex md:grid-cols-5 gap-[32] ">
        {PopularMovies.map((PopularMovies, i) => (
          <Card key={i} className="rounded-2xl shadow-md hover:shadow-lg transition w-[230] bg-secondary p-0 gap-2">
            <CardContent className="p-0 ">
              <img
                src={PopularMovies.poster}
                alt={PopularMovies.title}
                className="w-[230] object-cover rounded-t-2xl "
              />
            </CardContent>
            <CardFooter className="flex flex-col items-start p-3">
              <div className="flex items-center gap-1 text-sm text-gray-700 mb-1">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-muted-foreground">{PopularMovies.rating}/10</span>
              </div>
              <p className="text-sm font-medium">{PopularMovies.title}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
      </div>

        <div className="p-0 mt-[32]"></div>
       <div className="flex md:grid-cols-5 gap-[32] ">
        {NewPopularMovies.map((NewPopularMovies, i) => (
          <Card key={i} className="rounded-2xl shadow-md hover:shadow-lg transition w-[230] bg-secondary p-0 gap-2">
            <CardContent className="p-0 ">
              <img
                src={NewPopularMovies.poster}
                alt={NewPopularMovies.title}
                className="w-[230] object-cover rounded-t-2xl "
              />
            </CardContent>
            <CardFooter className="flex flex-col items-start p-3">
              <div className="flex items-center gap-1 text-sm text-gray-700 mb-1">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-muted-foreground">{NewPopularMovies.rating}/10</span>
              </div>
              <p className="text-sm font-medium">{NewPopularMovies.title}</p>
            </CardFooter>
          </Card>
        ))}
      </div>



    </div>
  ) 

}
















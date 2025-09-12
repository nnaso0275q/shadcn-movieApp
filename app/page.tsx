import { CarouselSection } from "@/components/home/carouselSection";
import PopularMovies from "@/components/home/popularMovies";
import UpComingMovies from "@/components/home/upComingMovies";
import { movieResponseType } from "@/types";

export default async function MoviesList() {
  const getUpComingMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.TMDB_ACCESS_KEY}`,
        },
      }
    );
    const data = await res.json();
    return data;
  };
  const upComingMovies: movieResponseType = await getUpComingMovies();
  console.log(upComingMovies);

  const popularMovies: movieResponseType = await getUpComingMovies();
  console.log(popularMovies);
  return (
    <div className="w-[1440px] h-fit">
      <CarouselSection />

      {/* UPCOMING MOVIES */}
      <div className=" mt-[52px] mx-[80px]">
        <div className="flex mb-6 justify-between">
          <h2 className="text-2xl font-bold">Upcoming</h2>
          <button className="text-sm  hover:underline">See more →</button>
        </div>
        <UpComingMovies movies={upComingMovies.results} />
      </div>

      {/* POPULAR MOVIES */}
      <div className="p-0 mt-[52px]">
        <div className="flex gap-[1080] mb-6 ">
          <h2 className="text-2xl font-bold">Popular</h2>
          <button className="text-sm  hover:underline">See more →</button>
        </div>
        <PopularMovies movies={popularMovies.results} />
      </div>
    </div>
  );
}

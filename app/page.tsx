
// import Loader from "@/components/start_and_end/loader"
import { CarouselSection } from "@/components/home/carouselSection"
import UpComingMovies from "@/components/home/upComingMovies"
import PopularMovies from "@/components/home/popularMovies"
import  Footer from "@/components/start_and_end/footer"

export default function MoviesList() {
  return (
   
    <div className="w-[1440px] pl-[100px] h-fit">
      {/* <Loader></Loader> */}
       <CarouselSection />


      {/* UPCOMING MOVIES */}
      <div className="p-0 mt-[52px]">
      <div className="flex gap-[1080] mb-6 ">
        <h2 className="text-2xl font-bold">Upcoming</h2>
        <button className="text-sm  hover:underline">
          See more →  
        </button>
      </div>
        <UpComingMovies/>
      </div>



  {/* POPULAR MOVIES */}
         <div className="p-0 mt-[52px]">
      <div className="flex gap-[1080] mb-6 ">
        <h2 className="text-2xl font-bold">Popular</h2>
        <button className="text-sm  hover:underline">
          See more →
        </button>
      </div>
     <PopularMovies/>
     
      </div>

     {/* <Footer/> */}
    </div>  
  ) 

}
















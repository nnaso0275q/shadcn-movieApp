// "use client";

// import * as React from "react";
// import { getMovieDetail } from "@/components/home/get-data";
// import { MovieType } from "@/types";

// type CarouselDetailProps = {
//   movies: MovieType;
// };

// export default function CarouselDetail({ movies }: CarouselDetailProps) {
//   const [movieDetailData, setMovieDetailData] =
//     React.useState<MovieType | null>(null);

//   React.useEffect(() => {
//     async function fetchMovie() {
//       const data = await getMovieDetail(movies.id);
//       setMovieDetailData(data);
//     }
//     fetchMovie();
//   }, [movies.id]);

//   if (!movieDetailData) return <div>Loading...</div>;

//   return (
//     <div className="inter">
//       <div className="text-white text-base font-normal not-italic">
//         Now playing :
//       </div>
//       <h1 className="text-white">{movieDetailData.title}</h1>
//     </div>
//   );
// }

// import { getMovieDetail } from "@/components/home/get-data";

// import { MovieType } from "@/types";

// type CarouselDetailProps = {
//   movie: MovieType;
// };
// export default async function CarouselDetail({ movie }: CarouselDetailProps) {
//   const movieDetailData = await getMovieDetail(movie.id);
//   console.log(movieDetailData, "movieDetailData");

//   return (
//     <div className="inter ">
//       <div className="text-white text-base font-normal not-italic">
//         Now playing :
//       </div>

//         <h1 className=" text-white">{movieDetailData.title}</h1>

//     </div>
//   );
// }
// // CarouselDetail;

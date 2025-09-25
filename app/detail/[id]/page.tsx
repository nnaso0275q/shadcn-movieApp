import {
  getMovieDetail,
  getMovieByDetail,
  getMoreLikeThis,
} from "@/components/home/get-data";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MovieType } from "@/types";

import { Star } from "lucide-react";
import Link from "next/link";
import { SlControlPlay } from "react-icons/sl";

type DetailDynamicPageProps = {
  params: Promise<{
    id: string;
    name?: string;
    page?: string;
  }>;
};
export const generateMetadata = async ({ params }: DetailDynamicPageProps) => {
  const dynamicParams = await params;
  const id = dynamicParams.id;
  const movieDetailData = await getMovieDetail(id);

  return {
    title: `MovieSite | ${movieDetailData.title}`,
  };
};

const DetailDynamicPage = async ({ params }: DetailDynamicPageProps) => {
  const dynamicParams = await params;
  const id = dynamicParams.id;
  const movieDetailData = await getMovieDetail(id);
  const movies = await getMoreLikeThis(id);

  console.log({ id, movies });

  console.log(movieDetailData, "movieDetailData");
  const imageBaseUrl = "https://image.tmdb.org/t/p/original";
  console.log("zuragg..", movieDetailData.backdrop_path);

  // const DetailData = await getMovieDetail(id);
  // console.log(DetailData, "DetailData");

  return (
    <>
      <div className="inter max-w-[1280px] mx-[180px]">
        <div className="flex justify-between">
          <div className="text-4xl font-bold mb-[24px]">
            {movieDetailData.title}
            {/* <div className="text-[18px] font-normal flex">
              <p>{movieDetailData.release_date}</p>
              <span>\</span>
              <p>{movieDetailData.runtime}</p>
            </div> */}
          </div>
          <div>
            <div className="text-[12px] font-medium">Rating</div>
            <div className="flex mt-[2px]">
              <Star className=" w-[24px] h-[22px] text-yellow-400 fill-yellow-400" />
              <span className="text-muted-foreground">
                {movieDetailData.vote_average}/10
              </span>
            </div>
            <p className="text-muted-foreground text-[12px] ml-[26px]">
              {movieDetailData.vote_count}
            </p>
          </div>
        </div>

        <div></div>

        <div className="w-full flex gap-[32px]">
          <img
            className="w-[290px] h-[428px]"
            src={`${imageBaseUrl}${movieDetailData.poster_path}`}
          />
          <div className="relative w-[760px] h-[428px]">
            <div className="absolute mt-[364px] flex items-center">
              <button className=" w-[40] h-[40] rounded-full bg-white ml-[24px] ">
                <span className="w-[9px]">
                  <SlControlPlay />
                </span>
              </button>
              <div className="text-white ml-[12px]">Play trailer</div>
            </div>
            <img
              className="w-full h-full object-cover"
              src={`${imageBaseUrl}${movieDetailData.backdrop_path}`}
            />
          </div>
        </div>
        <div className="flex gap-[12px] inter mt-[32px]  mb-[20px]">
          <button className="w-[90px] h-[30px] text-xs font-semibold rounded-full border border-[#E4E4E7]">
            Fantasy
          </button>
          <button className="w-[90px] h-[30px] text-xs font-semibold rounded-full border border-[#E4E4E7]">
            Musical
          </button>
          <button className="w-[90px] h-[30px] text-xs font-semibold rounded-full border border-[#E4E4E7]">
            Romance
          </button>
        </div>
        <div className="text-[16px] font-normal mb-[20px]">
          {movieDetailData.overview}
        </div>
        {/* ----- */}
        <>
          {/* <div className="flex"> */}
          <p className="text-base font-bold mb-[4px] ">Director</p>
          {/* <div>{movieDetailData.crew}</div> */}

          {/* </div> */}
          <div className="border-b-[1px] w-[1080px  border-solid "></div>

          <p className="text-base font-bold mb-[4px] mt-[20px]">Writers</p>
          {/* <div>{DetailData.crew}</div> */}
          <div className="border-b-[1px] w-[1080px  border-solid "></div>
          <p className="text-base font-bold mb-[4px] mt-[20px]">Stars</p>
          {/* <div>{DetailData.crew}</div> */}
          <div className="border-b w-[1080px]  border-solid "></div>
        </>
        {/* ------ */}
        <div className="justify-between flex mt-[32px]">
          <h2 className=" text-2xl font-semibold ">More like this</h2>
          <button className="text-sm  hover:underline">
            <Link
              href={{
                pathname: "/seeMore",
                query: { title: movies.results },
              }}
            >
              See more →
            </Link>
          </button>
        </div>

        <div className="justify-between gap-[32px] flex mt-[36px]">
          {movies.results.slice(0, 5).map((movie: MovieType) => (
            <Card
              key={movie.id}
              className="rounded-2xl shadow-md hover:shadow-lg hover:scale-105 w-[230px] bg-secondary p-0 gap-2 "
            >
              <CardContent className="p-0">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  className="w-[230px] object-cover rounded-t-2xl "
                />
              </CardContent>
              <CardFooter className="flex flex-col p-3 items-start">
                <div className="flex gap-1 text-sm text-gray-700 mb-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-muted-foreground">
                    {movie.vote_average}/10
                  </span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default DetailDynamicPage;

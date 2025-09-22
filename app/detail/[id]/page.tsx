import { getMovieDetail, getMovieByDetail } from "@/components/home/get-data";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MovieType } from "@/types";
import { title } from "process";
import { Star } from "lucide-react";
import Link from "next/link";

type DetailDynamicPageProps = {
  params: Promise<{
    id: string;
    name: string;
    page: string;
    title: string;
    movies: MovieType[];
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
  console.log(movieDetailData, "movieDetailData");

  // const DetailData = await getMovieDetail(id);
  // console.log(DetailData, "DetailData");

  return (
    <>
      <div className="inter max-w-[1280px] mx-[180px]">
        <div className="text-4xl font-bold mb-[24px]">
          {movieDetailData.title}
          <div className="text-[18px] font-normal flex">
            <p>{movieDetailData.release_date}</p>
            <span>\</span>
            <p>{movieDetailData.runtime}</p>
          </div>
        </div>

        {/* ZASVARLANA */}
        {/* <div className="pl-[950px] ">
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
        </div> */}
        {/* Poster */}
        <div className="flex gap-[32px]">
          <img
            className="w-[290px] h-[428px]"
            src={`https://image.tmdb.org/t/p/w500/${movieDetailData.poster_path}`}
          />
          <img
            className="w-[760px] h-[428px]"
            src={`https://image.tmdb.org/t/p/w500/${movieDetailData.backdrop_path}`}
          />
        </div>
        <div className="flex gap-[12px] inter mt-[32px]  mb-[20px]">
          <button className=" w-[90px] h-[30px] text-xs font-semibold rounded-md border border-[#E4E4E7]">
            Fairy Tail
          </button>
          <button className="w-[110px] h-[30px] text-xs font-semibold rounded-md border border-[#E4E4E7]">
            Pop Musical
          </button>
          <button className="w-[90px] h-[30px] text-xs font-semibold rounded-md border border-[#E4E4E7]">
            Fantasy
          </button>
          <button className="w-[90px] h-[30px] text-xs font-semibold rounded-md border border-[#E4E4E7]">
            Musical
          </button>
          <button className="w-[90px] h-[30px] text-xs font-semibold rounded-md border border-[#E4E4E7]">
            Romance
          </button>
        </div>
        <div className="text-[16px] font-normal mb-[20px]">
          {movieDetailData.overview}
        </div>
        {/* ----- */}
        <>
          <div className="flex">
            <p className="text-base font-bold mb-[4px] ">Director</p>
            {/* <div>{DetailData}</div> */}
          </div>
          <div className="border-b-[1px] w-[1080px  border-solid "></div>

          <p className="text-base font-bold mb-[4px] mt-[20px]">Writers</p>
          {/* <div>{DetailData.crew}</div> */}
          <div className="border-b-[1px] w-[1080px  border-solid "></div>
          <p className="text-base font-bold mb-[4px] mt-[20px]">Stars</p>
          {/* <div>{DetailData.crew}</div> */}
          <div className="border-b-[1px] w-[1080px  border-solid "></div>
        </>
        {/* ------ */}
        <div className="justify-between flex mt-[32px]">
          <h2 className=" text-2xl font-semibold">More like this</h2>
          <Link href={{ pathname: "/seeMore", query: { title: title } }}>
            See more →
          </Link>
        </div>
        <div className="justify-between gap-[32px] flex flex-wrap w-[1280px]">
          {/* {movies.slice(0, 5).map((movie) => (
            <Link key={movie.id} href={`/detail/${movie.id}`}>
              <Card
                key={movie.id}
                className="rounded-2xl shadow-md hover:shadow-lg transition w-[230px] bg-secondary p-0 gap-2"
              >
                <CardContent className="p-0">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                    className="w-[230px] object-cover rounded-t-2xl"
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
            </Link>
          ))} */}
        </div>
      </div>
    </>
  );
};

export default DetailDynamicPage;

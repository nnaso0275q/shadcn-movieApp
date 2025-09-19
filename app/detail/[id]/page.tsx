import { getMovieDetail, getMovieByDetail } from "@/components/home/get-data";

import { title } from "process";
import { Star } from "lucide-react";

type DetailDynamicPageProps = {
  params: Promise<{ id: string; name: string; page: string }>;
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

  // const DetailData = await getMovieByDetail(id);
  // console.log(DetailData, "DetailData");

  // const DetailByData = async ({ params }: DetailDynamicPageProps) => {
  //   const dynamicParams = await params;
  //   const id = dynamicParams.id;
  //   const DetailData = await getMovieByDetail(id);
  //   console.log(DetailData, "DetailData");
  // };

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

        {/* ZAASVARLANA */}
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
        <div>
          <p className="text-base font-bold mb-[4px] ">Director</p>
          {/* <div>{DetailData.crew}</div> */}

          <div className="border-b-[1px] w-[1080px  border-solid "></div>

          <p className="text-base font-bold mb-[4px] mt-[20px]">Writers</p>
          {/* <div>{DetailData.crew}</div> */}
          <div className="border-b-[1px] w-[1080px  border-solid "></div>
          <p className="text-base font-bold mb-[4px] mt-[20px]">Stars</p>
          {/* <div>{DetailData.crew}</div> */}
          <div className="border-b-[1px] w-[1080px  border-solid "></div>
        </div>
        {/* ------ */}

        <h2 className="mt-[32px] text-2xl font-semibold">More like this</h2>
      </div>
    </>
  );
};

export default DetailDynamicPage;

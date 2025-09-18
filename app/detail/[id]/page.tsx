import { getMovieByGenres, getMovieDetail } from "@/components/home/get-data";
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
  return (
    <>
      <div className="inter max-w-[1280px] mx-[180px]">
        <div className="text-[36px] font-bold ">
          {movieDetailData.title}
          <div className="text-[18px] font-normal flex">
            <p>{movieDetailData.release_date}</p>
            <span>\</span>
            <p>{movieDetailData.runtime}</p>
          </div>
        </div>
        <div className="pl-[950px] ">
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
      </div>
    </>
  );
};

export default DetailDynamicPage;

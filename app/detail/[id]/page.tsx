import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  getMovieDetail,
  getMovieByDetail,
  getMoreLikeThis,
  getMovieCredits,
  getMovieTrailer,
} from "@/components/home/get-data";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MovieType, TrailerResponseType } from "@/types";
import { Cast, Crew } from "@/types";
import { Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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

  const trailerData: TrailerResponseType = await getMovieTrailer(id);
  const trailer = trailerData.results.find((item) => item.type === "Trailer");

  const credits = await getMovieCredits(id);
  const directors: Crew[] = credits.crew.filter(
    (c: Crew) => c.job === "Director"
  );
  const writers: Crew[] = credits.crew.filter(
    (c: Crew) => c.department === "Writing"
  );
  const stars: Cast[] = credits.cast.slice(0, 5);
  const imageBaseUrl = "https://image.tmdb.org/t/p/original";

  const DetailData = await getMovieByDetail(id);

  return (
    <div className="inter max-w-[1440px] mx-[180px]">
      <div className="flex justify-between mt-[52px]">
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

      <div className="w-full flex justify-between">
        <Image
          className="w-[290px] h-[428px]"
          src={`${imageBaseUrl}${movieDetailData.poster_path}`}
          alt={movieDetailData.title || "Movie Poster"}
      
        />
        {/*  */}
        <div className="relative w-[760px] h-[428px]">
          <div className="absolute mt-[364px] flex items-center">
            <Dialog>
              <DialogTrigger className=" w-[40] h-[40] rounded-full bg-white ml-[24px] ">
                <Image alt="" src="/playIcon.svg"></Image>
              </DialogTrigger>
              <DialogContent className="flex justify-center items-center sm:max-w-[997px] p-0">
                <DialogHeader>
                  <DialogTitle className="hidden"></DialogTitle>

                  <iframe
                    width="997"
                    height="561"
                    src={`https://www.youtube.com/embed/${trailer?.key}`}
                    title="The Conjuring: Last Rites | Official Trailer"
                    allowFullScreen
                  ></iframe>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            <div className="text-white ml-[12px] font-normal text-base">
              Play trailer
            </div>
          </div>
          <Image
            className="w-full h-full object-cover"
            alt=""
            src={`${imageBaseUrl}${movieDetailData.backdrop_path}`}
          />
        </div>
        {/*  */}
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

      {/*  */}
      <div className="mt-[20px]">
        <div className="flex gap-[53px] ">
          <div className="text-base font-bold mb-1 w-[64px]">Director</div>
          <div className="mb-3">
            {directors.map((d: Crew) => (
              <p key={d.id}>{d.name}</p>
            ))}
          </div>
        </div>
        <div className="border-b-[1px] w-[1080px  border-solid "></div>
        <div className="flex gap-[53px] mt-[22px]">
          <div className="text-base font-bold mb-1  w-[64px]">Writers</div>
          <div className="mb-3 flex flex-wrap">
            {writers.map((w: Crew, index: number) => (
              <span key={index}>
                {w.name}
                {index < writers.length - 1 && "  , "}
              </span>
            ))}
          </div>
        </div>
        <div className="border-b-[1px] w-[1080px  border-solid "></div>
        <div className="flex gap-[53px] mt-[22px]">
          <div className="text-base font-bold mb-1  w-[64px]">Stars</div>
          <div className="flex gap-3 mb-3">
            {stars.map((s) => (
              <div key={s.id} className="flex flex-col items-center">
                <Image
                  src={`https://image.tmdb.org/t/p/w200${s.profile_path}`}
                  alt={s.name}
                  className="w-[80px] h-[100px] object-cover rounded-md"
                />
                <p className="text-sm mt-1">{s.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="border-b-[1px] w-[1080px  border-solid "></div>
      </div>

      {/*  */}

      {/* '''''''''''''''''' */}
      <div>
        <div className="flex text-base font-bold  ">
          <p className="mb-[4px] ">Director</p>
          <div>{DetailData.crew.name}</div>
        </div>
        <div className="border-b-[1px] w-[1080px]  border-solid "></div>
        <p className="text-base font-bold mb-[4px] mt-[20px]">Writers</p>

        <div className="border-b-[1px] w-[1080px]  border-solid "></div>
        <p className="text-base font-bold mb-[4px] mt-[20px]">Stars</p>

        <div className="border-b w-[1080px]  border-solid "></div>
      </div>
      {/* '''''''''''''''' */}

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
          <Link key={movie.id} href={`/detail/${movie.id}`}>
            <Card
              key={movie.id}
              className="rounded-2xl shadow-md hover:shadow-lg hover:scale-105 w-[190px] bg-secondary p-0 gap-2 "
            >
              <CardContent className="p-0">
                <Image
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
                <h1 className="text-foreground">{movie.title}</h1>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DetailDynamicPage;
